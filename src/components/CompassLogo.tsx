export default function CompassLogo({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-label="Suwannee Marina compass logo"
    >
      {/* Outer ring */}
      <circle cx="50" cy="50" r="46" fill="none" stroke="#1B3A5C" strokeWidth="3" />
      <circle cx="50" cy="50" r="42" fill="none" stroke="#C41E3A" strokeWidth="1.5" />

      {/* Cardinal direction ticks */}
      {[0, 90, 180, 270].map((angle) => (
        <line
          key={angle}
          x1="50"
          y1="8"
          x2="50"
          y2="14"
          stroke="#1B3A5C"
          strokeWidth="2"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}

      {/* Intercardinal ticks */}
      {[45, 135, 225, 315].map((angle) => (
        <line
          key={angle}
          x1="50"
          y1="10"
          x2="50"
          y2="14"
          stroke="#1B3A5C"
          strokeWidth="1"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}

      {/* North pointer (red) */}
      <polygon points="50,12 44,50 50,44 56,50" fill="#C41E3A" />
      {/* South pointer (navy) */}
      <polygon points="50,88 44,50 50,56 56,50" fill="#1B3A5C" />
      {/* East pointer (navy) */}
      <polygon points="88,50 50,44 56,50 50,56" fill="#1B3A5C" />
      {/* West pointer (navy) */}
      <polygon points="12,50 50,44 44,50 50,56" fill="#1B3A5C" />

      {/* Center circle */}
      <circle cx="50" cy="50" r="4" fill="#C41E3A" />
      <circle cx="50" cy="50" r="2" fill="#FFFFFF" />

      {/* Cardinal labels */}
      <text x="50" y="24" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#C41E3A">N</text>
      <text x="50" y="82" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1B3A5C">S</text>
      <text x="80" y="53" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1B3A5C">E</text>
      <text x="20" y="53" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1B3A5C">W</text>
    </svg>
  );
}
