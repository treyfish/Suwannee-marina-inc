"use client";

import { useEffect, useState } from "react";

interface TidePrediction {
  t: string;
  v: string;
  type?: string;
}

interface TideData {
  predictions: TidePrediction[];
}

const STATION_ID = "8727520";
const BASE_URL = "https://api.tidesandcurrents.noaa.gov/api/prod/datagetter";

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

export default function TideChart() {
  const [hiLoData, setHiLoData] = useState<TidePrediction[]>([]);
  const [curveData, setCurveData] = useState<TidePrediction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

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

  // Update current time every 60 seconds for live dot
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-10 h-10 border-4 border-navy/20 border-t-navy rounded-full animate-spin" />
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

  // Build SVG curve for today
  const svgWidth = 800;
  const svgHeight = 200;
  const padding = 40;

  let curvePath = "";
  let areaPath = "";
  let currentDot: { x: number; y: number; height: string } | null = null;

  if (curveData.length > 0) {
    const values = curveData.map((p) => parseFloat(p.v));
    const minVal = Math.min(...values);
    const maxVal = Math.max(...values);
    const range = maxVal - minVal || 1;

    const points = curveData.map((p, i) => {
      const x = padding + (i / (curveData.length - 1)) * (svgWidth - padding * 2);
      const y = svgHeight - padding - ((parseFloat(p.v) - minVal) / range) * (svgHeight - padding * 2);
      return { x, y };
    });

    curvePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
    areaPath = curvePath + ` L ${points[points.length - 1].x} ${svgHeight - padding} L ${points[0].x} ${svgHeight - padding} Z`;

    // Calculate current tide dot position
    const fractionalHour = currentTime.getHours() + currentTime.getMinutes() / 60;
    const dataIndex = (fractionalHour / 24) * (curveData.length - 1);
    const lowerIdx = Math.max(0, Math.floor(dataIndex));
    const upperIdx = Math.min(lowerIdx + 1, curveData.length - 1);
    const frac = dataIndex - lowerIdx;

    const currentX = points[lowerIdx].x + frac * (points[upperIdx].x - points[lowerIdx].x);
    const currentY = points[lowerIdx].y + frac * (points[upperIdx].y - points[lowerIdx].y);

    const lowerVal = parseFloat(curveData[lowerIdx].v);
    const upperVal = parseFloat(curveData[upperIdx].v);
    const currentHeight = (lowerVal + frac * (upperVal - lowerVal)).toFixed(2);

    currentDot = { x: currentX, y: currentY, height: currentHeight };
  }

  return (
    <div className="space-y-10">
      {/* Today's tide curve */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
        <h3 className="text-xl font-bold text-navy mb-2">Today&apos;s Tide Curve</h3>
        <p className="text-dark/40 text-sm mb-6">NOAA Station {STATION_ID} — Suwannee River Entrance, FL</p>

        <div className="overflow-x-auto">
          <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full min-w-[500px]" preserveAspectRatio="xMidYMid meet">
            {/* Grid lines */}
            {[0.25, 0.5, 0.75].map((pct) => (
              <line
                key={pct}
                x1={padding}
                y1={padding + pct * (svgHeight - padding * 2)}
                x2={svgWidth - padding}
                y2={padding + pct * (svgHeight - padding * 2)}
                stroke="#E5E7EB"
                strokeDasharray="4"
              />
            ))}

            {/* Area fill */}
            {areaPath && <path d={areaPath} className="tide-area" />}

            {/* Tide line */}
            {curvePath && <path d={curvePath} className="tide-line" />}

            {/* Current tide indicator */}
            {currentDot && (
              <g>
                {/* Vertical reference line */}
                <line
                  x1={currentDot.x}
                  y1={currentDot.y}
                  x2={currentDot.x}
                  y2={svgHeight - padding}
                  stroke="var(--color-crimson)"
                  strokeWidth="1"
                  strokeDasharray="3"
                  opacity="0.4"
                />
                {/* Pulsing outer ring */}
                <circle cx={currentDot.x} cy={currentDot.y} r="8" fill="var(--color-crimson)" opacity="0.2">
                  <animate attributeName="r" values="6;12;6" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.05;0.3" dur="2s" repeatCount="indefinite" />
                </circle>
                {/* Solid dot */}
                <circle cx={currentDot.x} cy={currentDot.y} r="5" fill="var(--color-crimson)" stroke="white" strokeWidth="2" />
                {/* Height label */}
                <text
                  x={currentDot.x}
                  y={currentDot.y - 14}
                  textAnchor={currentDot.x > svgWidth - padding - 40 ? "end" : currentDot.x < padding + 40 ? "start" : "middle"}
                  fontSize="11"
                  fontWeight="bold"
                  fill="var(--color-crimson)"
                >
                  {currentDot.height} ft
                </text>
                {/* "Now" label */}
                <text
                  x={currentDot.x}
                  y={svgHeight - padding + 16}
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="bold"
                  fill="var(--color-crimson)"
                >
                  Now
                </text>
              </g>
            )}

            {/* Time labels */}
            {[0, 6, 12, 18, 24].map((hour) => {
              const x = padding + (hour / 24) * (svgWidth - padding * 2);
              const label = hour === 0 ? "12AM" : hour === 12 ? "12PM" : hour < 12 ? `${hour}AM` : `${hour - 12}PM`;
              return (
                <text key={hour} x={x} y={svgHeight - 10} textAnchor="middle" fontSize="11" fill="#9CA3AF">
                  {label}
                </text>
              );
            })}
          </svg>
        </div>
      </div>

      {/* 7-day forecast table */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
        <h3 className="text-xl font-bold text-navy mb-6">7-Day Tide Forecast</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-sandy-dark">
                <th className="text-left py-3 px-4 font-semibold text-navy">Date</th>
                <th className="text-left py-3 px-4 font-semibold text-navy">Time</th>
                <th className="text-left py-3 px-4 font-semibold text-navy">Height (ft)</th>
                <th className="text-left py-3 px-4 font-semibold text-navy">Type</th>
              </tr>
            </thead>
            <tbody>
              {hiLoData.map((p, i) => (
                <tr
                  key={i}
                  className="border-b border-sandy/50 hover:bg-sandy/50 transition-colors"
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
                          ? "bg-water/10 text-water"
                          : "bg-crimson/10 text-crimson"
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
