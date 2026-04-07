"use client";

import { useEffect, useState, useRef, useCallback } from "react";

interface TidePrediction {
  t: string;
  v: string;
  type?: string;
}

interface TideData {
  predictions: TidePrediction[];
}

interface ChartPoint {
  x: number;
  y: number;
  value: number;
}

const STATION_ID = "8727520";
const BASE_URL = "https://api.tidesandcurrents.noaa.gov/api/prod/datagetter";
const SVG_WIDTH = 800;
const SVG_HEIGHT = 220;
const PADDING = 40;
const CHART_LEFT = PADDING;
const CHART_RIGHT = SVG_WIDTH - PADDING;
const CHART_TOP = PADDING;
const CHART_BOTTOM = SVG_HEIGHT - PADDING;

function formatDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}${m}${d}`;
}

function formatTime(dateStr: string): string {
  const d = new Date(dateStr.replace(" ", "T"));
  return d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
}

function formatDay(dateStr: string): string {
  const d = new Date(dateStr.replace(" ", "T"));
  return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

function formatHour(fractionalHour: number): string {
  const h = Math.floor(fractionalHour);
  const m = Math.round((fractionalHour - h) * 60);
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return `${hour12}:${String(m).padStart(2, "0")} ${period}`;
}

/** Interpolate along the curve at a given x position */
function interpolateAtX(
  points: ChartPoint[],
  targetX: number
): { y: number; value: number; slope: number } | null {
  if (points.length < 2) return null;
  const clamped = Math.max(points[0].x, Math.min(points[points.length - 1].x, targetX));

  for (let i = 0; i < points.length - 1; i++) {
    if (clamped >= points[i].x && clamped <= points[i + 1].x) {
      const dx = points[i + 1].x - points[i].x;
      const frac = dx === 0 ? 0 : (clamped - points[i].x) / dx;
      const y = points[i].y + frac * (points[i + 1].y - points[i].y);
      const value = points[i].value + frac * (points[i + 1].value - points[i].value);
      // slope: positive value means rising (value increasing), negative means falling
      const slope = points[i + 1].value - points[i].value;
      return { y, value, slope };
    }
  }
  return null;
}

export default function TideChart() {
  const [hiLoData, setHiLoData] = useState<TidePrediction[]>([]);
  const [curveData, setCurveData] = useState<TidePrediction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [hoverX, setHoverX] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const today = new Date();
    const endDate = new Date(today);
    endDate.setDate(endDate.getDate() + 7);

    const beginDate = formatDate(today);
    const end = formatDate(endDate);

    const hiLoUrl = `${BASE_URL}?begin_date=${beginDate}&end_date=${end}&station=${STATION_ID}&product=predictions&datum=MLLW&units=english&time_zone=lst_ldt&interval=hilo&format=json`;
    const curveUrl = `${BASE_URL}?begin_date=${beginDate}&range=24&station=${STATION_ID}&product=predictions&datum=MLLW&units=english&time_zone=lst_ldt&format=json`;

    Promise.all([
      fetch(hiLoUrl).then((r) => r.json()),
      fetch(curveUrl).then((r) => r.json()),
    ])
      .then(([hiLo, curve]: [TideData, TideData]) => {
        setHiLoData(hiLo.predictions || []);
        setCurveData(curve.predictions || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to load tide data. Please try again later.");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const scaleX = SVG_WIDTH / rect.width;
    const svgX = (e.clientX - rect.left) * scaleX;
    if (svgX >= CHART_LEFT && svgX <= CHART_RIGHT) {
      setHoverX(svgX);
    } else {
      setHoverX(null);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoverX(null);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-10 h-10 border-4 border-teal/20 border-t-teal rounded-full animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-dark/60">
        <p>{error}</p>
      </div>
    );
  }

  // Build chart data
  let curvePath = "";
  let areaPath = "";
  let points: ChartPoint[] = [];
  let minVal = 0;
  let maxVal = 1;

  if (curveData.length > 0) {
    const values = curveData.map((p) => parseFloat(p.v));
    minVal = Math.min(...values);
    maxVal = Math.max(...values);
    const range = maxVal - minVal || 1;

    points = curveData.map((p, i) => {
      const value = parseFloat(p.v);
      const x = CHART_LEFT + (i / (curveData.length - 1)) * (CHART_RIGHT - CHART_LEFT);
      const y = CHART_BOTTOM - ((value - minVal) / range) * (CHART_BOTTOM - CHART_TOP);
      return { x, y, value };
    });

    curvePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
    areaPath = curvePath + ` L ${points[points.length - 1].x} ${CHART_BOTTOM} L ${points[0].x} ${CHART_BOTTOM} Z`;
  }

  // Current tide position
  const fractionalHour = currentTime.getHours() + currentTime.getMinutes() / 60;
  const nowX = CHART_LEFT + (fractionalHour / 24) * (CHART_RIGHT - CHART_LEFT);
  const nowInterp = points.length > 0 ? interpolateAtX(points, nowX) : null;

  // Hover position
  const hoverInterp = hoverX !== null && points.length > 0 ? interpolateAtX(points, hoverX) : null;
  const hoverFractionalHour = hoverX !== null ? ((hoverX - CHART_LEFT) / (CHART_RIGHT - CHART_LEFT)) * 24 : 0;

  // Y-axis labels
  const range = maxVal - minVal || 1;
  const yLabels = [0, 0.25, 0.5, 0.75, 1].map((pct) => ({
    value: (minVal + pct * range).toFixed(1),
    y: CHART_BOTTOM - pct * (CHART_BOTTOM - CHART_TOP),
  }));

  return (
    <div className="space-y-10">
      {/* Today's tide curve */}
      <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
        <h3 className="text-xl font-bold text-dark mb-2">Today&apos;s Tide Curve</h3>
        <p className="text-driftwood-light text-sm mb-6">NOAA Station {STATION_ID} — Suwannee River Entrance, FL</p>

        <div className="overflow-x-auto">
          <svg
            ref={svgRef}
            viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
            className="w-full min-w-[500px] cursor-crosshair"
            preserveAspectRatio="xMidYMid meet"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Grid lines + Y-axis labels */}
            {yLabels.map((label, i) => (
              <g key={i}>
                {i > 0 && i < yLabels.length - 1 && (
                  <line
                    x1={CHART_LEFT}
                    y1={label.y}
                    x2={CHART_RIGHT}
                    y2={label.y}
                    stroke="#E5E7EB"
                    strokeDasharray="4"
                  />
                )}
                <text
                  x={CHART_LEFT - 6}
                  y={label.y + 4}
                  textAnchor="end"
                  fontSize="9"
                  fill="#9CA3AF"
                >
                  {label.value}
                </text>
              </g>
            ))}

            {/* Area fill */}
            {areaPath && <path d={areaPath} className="tide-area" />}

            {/* Tide line */}
            {curvePath && <path d={curvePath} className="tide-line" />}

            {/* Hover cursor */}
            {hoverInterp && hoverX !== null && (
              <g>
                {/* Vertical line */}
                <line
                  x1={hoverX}
                  y1={CHART_TOP}
                  x2={hoverX}
                  y2={CHART_BOTTOM}
                  stroke="var(--color-driftwood)"
                  strokeWidth="1"
                  strokeDasharray="3"
                  opacity="0.5"
                />
                {/* Dot on the line */}
                <circle
                  cx={hoverX}
                  cy={hoverInterp.y}
                  r="5"
                  fill="var(--color-teal)"
                  stroke="white"
                  strokeWidth="2"
                />
                {/* Info tooltip background */}
                <rect
                  x={hoverX > SVG_WIDTH / 2 ? hoverX - 120 : hoverX + 10}
                  y={Math.max(CHART_TOP, hoverInterp.y - 38)}
                  width="110"
                  height="36"
                  rx="6"
                  fill="var(--color-dark)"
                  opacity="0.9"
                />
                {/* Height + direction */}
                <text
                  x={hoverX > SVG_WIDTH / 2 ? hoverX - 65 : hoverX + 65}
                  y={Math.max(CHART_TOP, hoverInterp.y - 38) + 15}
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="bold"
                  fill="white"
                >
                  {hoverInterp.value.toFixed(2)} ft
                </text>
                <text
                  x={hoverX > SVG_WIDTH / 2 ? hoverX - 65 : hoverX + 65}
                  y={Math.max(CHART_TOP, hoverInterp.y - 38) + 30}
                  textAnchor="middle"
                  fontSize="10"
                  fill={hoverInterp.slope > 0 ? "#4A8B9B" : "#D4844A"}
                >
                  {hoverInterp.slope > 0 ? "Rising" : hoverInterp.slope < 0 ? "Falling" : "Slack"} &middot; {formatHour(hoverFractionalHour)}
                </text>
              </g>
            )}

            {/* Current tide "Now" indicator */}
            {nowInterp && (
              <g>
                {/* Vertical reference line */}
                <line
                  x1={nowX}
                  y1={nowInterp.y}
                  x2={nowX}
                  y2={CHART_BOTTOM}
                  stroke="var(--color-sunset)"
                  strokeWidth="1"
                  strokeDasharray="3"
                  opacity="0.4"
                />
                {/* Pulsing outer ring */}
                <circle cx={nowX} cy={nowInterp.y} r="8" fill="var(--color-sunset)" opacity="0.2">
                  <animate attributeName="r" values="6;12;6" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.05;0.3" dur="2s" repeatCount="indefinite" />
                </circle>
                {/* Solid dot */}
                <circle cx={nowX} cy={nowInterp.y} r="5" fill="var(--color-sunset)" stroke="white" strokeWidth="2" />
                {/* Height + direction label */}
                <text
                  x={nowX}
                  y={nowInterp.y - 20}
                  textAnchor={nowX > SVG_WIDTH - PADDING - 50 ? "end" : nowX < PADDING + 50 ? "start" : "middle"}
                  fontSize="11"
                  fontWeight="bold"
                  fill="var(--color-sunset)"
                >
                  {nowInterp.value.toFixed(2)} ft
                </text>
                <text
                  x={nowX}
                  y={nowInterp.y - 8}
                  textAnchor={nowX > SVG_WIDTH - PADDING - 50 ? "end" : nowX < PADDING + 50 ? "start" : "middle"}
                  fontSize="9"
                  fill="var(--color-sunset)"
                  opacity="0.8"
                >
                  {nowInterp.slope > 0 ? "Coming In" : nowInterp.slope < 0 ? "Going Out" : "Slack"}
                </text>
                {/* "Now" label */}
                <text
                  x={nowX}
                  y={CHART_BOTTOM + 16}
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="bold"
                  fill="var(--color-sunset)"
                >
                  Now
                </text>
              </g>
            )}

            {/* Transparent overlay for mouse tracking (captures events over the whole chart) */}
            <rect
              x={CHART_LEFT}
              y={CHART_TOP}
              width={CHART_RIGHT - CHART_LEFT}
              height={CHART_BOTTOM - CHART_TOP}
              fill="transparent"
            />

            {/* Time labels */}
            {[0, 6, 12, 18, 24].map((hour) => {
              const x = CHART_LEFT + (hour / 24) * (CHART_RIGHT - CHART_LEFT);
              const label = hour === 0 ? "12AM" : hour === 12 ? "12PM" : hour < 12 ? `${hour}AM` : `${hour - 12}PM`;
              return (
                <text key={hour} x={x} y={SVG_HEIGHT - 8} textAnchor="middle" fontSize="11" fill="#9CA3AF">
                  {label}
                </text>
              );
            })}
          </svg>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-6 mt-4 text-xs text-driftwood">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-sunset" />
            Now — {nowInterp ? (nowInterp.slope > 0 ? "Coming In" : "Going Out") : ""}
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-teal" />
            Hover to explore
          </div>
        </div>
      </div>

      {/* 7-day forecast table */}
      <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
        <h3 className="text-xl font-bold text-dark mb-6">7-Day Tide Forecast</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-cream-dark">
                <th className="text-left py-3 px-4 font-semibold text-dark">Date</th>
                <th className="text-left py-3 px-4 font-semibold text-dark">Time</th>
                <th className="text-left py-3 px-4 font-semibold text-dark">Height (ft)</th>
                <th className="text-left py-3 px-4 font-semibold text-dark">Type</th>
              </tr>
            </thead>
            <tbody>
              {hiLoData.map((p, i) => (
                <tr
                  key={i}
                  className="border-b border-cream/50 hover:bg-cream/50 transition-colors"
                >
                  <td className="py-3 px-4 text-dark/70">{formatDay(p.t)}</td>
                  <td className="py-3 px-4 text-dark/70">{formatTime(p.t)}</td>
                  <td className="py-3 px-4 font-medium text-dark">
                    {parseFloat(p.v).toFixed(2)} ft
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        p.type === "H"
                          ? "bg-teal/10 text-teal"
                          : "bg-sunset/10 text-sunset"
                      }`}
                    >
                      {p.type === "H" ? "High" : "Low"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
