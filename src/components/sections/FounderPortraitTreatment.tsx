export function FounderPortraitTreatment() {
  return (
    <svg
      viewBox="0 0 360 360"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="founder-clip">
          <circle cx="180" cy="180" r="156" />
        </clipPath>
        <linearGradient id="founder-lit" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="rgba(245, 197, 24, 0.4)" />
          <stop offset="100%" stopColor="rgba(245, 197, 24, 0.1)" />
        </linearGradient>
        <pattern
          id="founder-hairlines"
          width="22.6"
          height="22.6"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="22.6"
            stroke="rgba(245, 197, 24, 0.06)"
            strokeWidth="0.5"
          />
        </pattern>
        <filter id="pill-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.08" />
        </filter>
      </defs>

      {/* Outermost ring (slow rotation) */}
      <circle
        cx="180"
        cy="180"
        r="160"
        fill="none"
        stroke="rgba(245, 197, 24, 0.4)"
        strokeWidth="1"
        strokeDasharray="2 6"
        className="founder-outer-ring"
      />

      {/* Frame ring */}
      <circle
        cx="180"
        cy="180"
        r="160"
        fill="none"
        stroke="#f5c518"
        strokeWidth="2.5"
      />

      {/* Photo background */}
      <circle cx="180" cy="180" r="156" fill="#0a0a0a" />

      {/* Hairline pattern clipped to inner circle */}
      <rect
        x="24"
        y="24"
        width="312"
        height="312"
        fill="url(#founder-hairlines)"
        clipPath="url(#founder-clip)"
      />

      {/* Portrait silhouette, clipped */}
      <g clipPath="url(#founder-clip)">
        <path
          d="M 60 280 Q 180 220 300 280 L 300 360 L 60 360 Z"
          fill="url(#founder-lit)"
          stroke="#f5c518"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle
          cx="180"
          cy="190"
          r="42"
          fill="url(#founder-lit)"
          stroke="#f5c518"
          strokeWidth="1.5"
        />
        {/* face indication */}
        <circle cx="170" cy="190" r="1.5" fill="rgba(10, 9, 8, 0.4)" />
        <circle cx="190" cy="190" r="1.5" fill="rgba(10, 9, 8, 0.4)" />
      </g>

      {/* Connection hairlines from pills to portrait */}
      <line x1="100" y1="86" x2="140" y2="135" stroke="rgba(245, 197, 24, 0.3)" strokeWidth="0.5" />
      <line x1="265" y1="66" x2="220" y2="125" stroke="rgba(245, 197, 24, 0.3)" strokeWidth="0.5" />
      <line x1="275" y1="306" x2="230" y2="245" stroke="rgba(245, 197, 24, 0.3)" strokeWidth="0.5" />
      <line x1="90" y1="316" x2="140" y2="250" stroke="rgba(245, 197, 24, 0.3)" strokeWidth="0.5" />

      {/* Pill 1, top-left */}
      <g filter="url(#pill-shadow)">
        <rect
          x="40"
          y="70"
          width="120"
          height="32"
          rx="16"
          fill="#ffffff"
          stroke="rgba(10, 9, 8, 0.08)"
          strokeWidth="1"
        />
        <text
          x="100"
          y="86"
          fontFamily="var(--font-inter), system-ui, sans-serif"
          fontWeight="600"
          fontSize="11"
          fill="#0a0908"
          textAnchor="middle"
          dominantBaseline="central"
        >
          Quattro Labs · 150K
        </text>
      </g>

      {/* Pill 2, top-right */}
      <g filter="url(#pill-shadow)">
        <rect
          x="200"
          y="50"
          width="130"
          height="32"
          rx="16"
          fill="#ffffff"
          stroke="rgba(10, 9, 8, 0.08)"
          strokeWidth="1"
        />
        <text
          x="265"
          y="66"
          fontFamily="var(--font-inter), system-ui, sans-serif"
          fontWeight="600"
          fontSize="11"
          fill="#0a0908"
          textAnchor="middle"
          dominantBaseline="central"
        >
          Madison Clark · 100M
        </text>
      </g>

      {/* Pill 3, bottom-right */}
      <g filter="url(#pill-shadow)">
        <rect
          x="220"
          y="290"
          width="110"
          height="32"
          rx="16"
          fill="#ffffff"
          stroke="rgba(10, 9, 8, 0.08)"
          strokeWidth="1"
        />
        <text
          x="275"
          y="306"
          fontFamily="var(--font-inter), system-ui, sans-serif"
          fontWeight="600"
          fontSize="11"
          fill="#0a0908"
          textAnchor="middle"
          dominantBaseline="central"
        >
          30+ active clients
        </text>
      </g>

      {/* Pill 4, bottom-left */}
      <g filter="url(#pill-shadow)">
        <rect
          x="40"
          y="300"
          width="100"
          height="32"
          rx="16"
          fill="#ffffff"
          stroke="rgba(10, 9, 8, 0.08)"
          strokeWidth="1"
        />
        <text
          x="90"
          y="316"
          fontFamily="var(--font-inter), system-ui, sans-serif"
          fontWeight="600"
          fontSize="11"
          fill="#0a0908"
          textAnchor="middle"
          dominantBaseline="central"
        >
          Founded 2019
        </text>
      </g>
    </svg>
  );
}
