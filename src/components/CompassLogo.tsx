"use client";

import { useState } from "react";
import Image from "next/image";

export default function CompassLogo({ size = 48, className = "" }: { size?: number; className?: string }) {
  const [imgError, setImgError] = useState(false);

  if (!imgError) {
    return (
      <Image
        src="/images/logo.png"
        alt="Suwannee Marina &amp; Restaurant"
        width={size}
        height={size}
        className={`rounded-full ${className}`}
        onError={() => setImgError(true)}
        unoptimized
      />
    );
  }

  // Fallback: SVG compass rose matching the real logo (white on red)
  const r = 50;
  const cx = 50;
  const cy = 50;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-label="Suwannee Marina and Restaurant"
    >
      {/* Red background circle */}
      <circle cx={cx} cy={cy} r={r} fill="#C4513A" />

      {/* Outer ring */}
      <circle cx={cx} cy={cy} r="44" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6" />
      <circle cx={cx} cy={cy} r="38" fill="none" stroke="white" strokeWidth="0.8" opacity="0.4" />

      {/* Tick marks around the ring */}
      {Array.from({ length: 32 }).map((_, i) => {
        const angle = (i * 360) / 32;
        const isMajor = i % 4 === 0;
        const inner = isMajor ? 36 : 37.5;
        const outer = 39;
        return (
          <line
            key={i}
            x1={cx}
            y1={cy - inner}
            x2={cx}
            y2={cy - outer}
            stroke="white"
            strokeWidth={isMajor ? 1 : 0.5}
            opacity="0.5"
            transform={`rotate(${angle} ${cx} ${cy})`}
          />
        );
      })}

      {/* 8-point compass star */}
      {/* Cardinal points (long) */}
      <polygon points="50,8 47,44 50,40 53,44" fill="white" /> {/* N */}
      <polygon points="50,92 47,56 50,60 53,56" fill="white" /> {/* S */}
      <polygon points="92,50 56,47 60,50 56,53" fill="white" /> {/* E */}
      <polygon points="8,50 44,47 40,50 44,53" fill="white" /> {/* W */}

      {/* Intercardinal points (medium) */}
      <polygon points="79.7,20.3 55,46 57,44 59,46" fill="white" opacity="0.9" /> {/* NE */}
      <polygon points="79.7,79.7 55,54 59,54 57,56" fill="white" opacity="0.9" /> {/* SE */}
      <polygon points="20.3,79.7 45,54 41,54 43,56" fill="white" opacity="0.9" /> {/* SW */}
      <polygon points="20.3,20.3 45,46 41,46 43,44" fill="white" opacity="0.9" /> {/* NW */}

      {/* Center circle */}
      <circle cx={cx} cy={cy} r="4" fill="white" />
      <circle cx={cx} cy={cy} r="2" fill="#C4513A" />

      {/* Cardinal direction labels */}
      <text x="50" y="22" textAnchor="middle" fontSize="6" fontWeight="bold" fill="white" fontFamily="serif">N</text>
      <text x="50" y="83" textAnchor="middle" fontSize="6" fontWeight="bold" fill="white" fontFamily="serif">S</text>
      <text x="81" y="53" textAnchor="middle" fontSize="6" fontWeight="bold" fill="white" fontFamily="serif">E</text>
      <text x="19" y="53" textAnchor="middle" fontSize="6" fontWeight="bold" fill="white" fontFamily="serif">W</text>

      {/* Intercardinal direction labels */}
      <text x="70" y="33" textAnchor="middle" fontSize="4.5" fill="white" opacity="0.8" fontFamily="serif">NE</text>
      <text x="70" y="72" textAnchor="middle" fontSize="4.5" fill="white" opacity="0.8" fontFamily="serif">SE</text>
      <text x="30" y="72" textAnchor="middle" fontSize="4.5" fill="white" opacity="0.8" fontFamily="serif">SW</text>
      <text x="30" y="33" textAnchor="middle" fontSize="4.5" fill="white" opacity="0.8" fontFamily="serif">NW</text>

      {/* "SUWANNEE MARINA" arced text at top */}
      <defs>
        <path id="topArc" d="M 15,50 A 35,35 0 0,1 85,50" fill="none" />
        <path id="bottomArc" d="M 18,58 A 34,34 0 0,0 82,58" fill="none" />
      </defs>
      <text fontSize="5.5" fontWeight="bold" fill="white" fontFamily="serif" letterSpacing="2">
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">SUWANNEE MARINA</textPath>
      </text>

      {/* Coordinates arced at bottom */}
      <text fontSize="3.5" fill="white" fontFamily="serif" opacity="0.8" letterSpacing="0.5">
        <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">N 29&#xB0;19.680&apos; / W 083&#xB0;08.440&apos;</textPath>
      </text>
    </svg>
  );
}
