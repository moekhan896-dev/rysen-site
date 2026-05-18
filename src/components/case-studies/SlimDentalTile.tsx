import Link from "next/link";

type Competitor = { cx: number; cy: number; label: string };

const COMPETITORS: ReadonlyArray<Competitor> = [
  { cx: 148, cy: 158, label: "2" },
  { cx: 388, cy: 248, label: "3" },
  { cx: 208, cy: 268, label: "4" },
];

export function SlimDentalTile() {
  return (
    <Link
      href="/case-studies/slim-dental"
      className="case-study-tile case-study-tile--slim"
    >
      <svg
        className="case-study-tile__svg-area"
        viewBox="0 0 600 460"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <filter id="slim-pin-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.2" />
          </filter>
        </defs>

        {/* Lake (water body suggesting Lake Michigan) */}
        <path
          d="M 520 64 L 552 64 L 552 320 L 520 320 Q 510 280 524 240 Q 510 200 520 160 Q 510 110 520 64 Z"
          fill="rgba(30, 90, 130, 0.08)"
        />

        {/* Grid: minor horizontal lines */}
        {[120, 160, 200, 240, 280].map((y) => (
          <line
            key={`h-${y}`}
            x1="48"
            y1={y}
            x2="520"
            y2={y}
            stroke="rgba(10, 9, 8, 0.08)"
            strokeWidth="0.5"
          />
        ))}

        {/* Grid: minor vertical lines */}
        {[88, 168, 248, 328, 408, 488].map((x) => (
          <line
            key={`v-${x}`}
            x1={x}
            y1="64"
            x2={x}
            y2="320"
            stroke="rgba(10, 9, 8, 0.08)"
            strokeWidth="0.5"
          />
        ))}

        {/* Main roads (thicker) */}
        <line x1="48" y1="200" x2="520" y2="200" stroke="rgba(10, 9, 8, 0.12)" strokeWidth="1.5" />
        <line x1="328" y1="64" x2="328" y2="320" stroke="rgba(10, 9, 8, 0.12)" strokeWidth="1.5" />

        {/* Intersections of main roads with cross streets */}
        {[88, 168, 248, 408, 488].map((x) => (
          <circle key={`int-${x}`} cx={x} cy="200" r="2" fill="rgba(10, 9, 8, 0.15)" />
        ))}
        {[120, 160, 240, 280].map((y) => (
          <circle key={`int-y-${y}`} cx="328" cy={y} r="2" fill="rgba(10, 9, 8, 0.15)" />
        ))}

        {/* Competitor pins */}
        {COMPETITORS.map(({ cx, cy, label }) => (
          <g key={`comp-${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="8" fill="rgba(10, 9, 8, 0.15)" />
            <path
              d={`M ${cx - 4} ${cy + 4} L ${cx + 4} ${cy + 4} L ${cx} ${cy + 14} Z`}
              fill="rgba(10, 9, 8, 0.15)"
            />
            <text
              x={cx}
              y={cy}
              fontFamily="var(--font-inter), system-ui, sans-serif"
              fontWeight="700"
              fontSize="9"
              fill="rgba(255, 255, 255, 0.7)"
              textAnchor="middle"
              dominantBaseline="central"
            >
              {label}
            </text>
          </g>
        ))}

        {/* Slim Dental dominant pin at (328, 192) */}
        <g>
          {/* outer glow rings */}
          <circle cx="328" cy="192" r="44" fill="rgba(245, 197, 24, 0.08)" />
          <circle cx="328" cy="192" r="34" fill="rgba(245, 197, 24, 0.15)" />
          <circle cx="328" cy="192" r="26" fill="rgba(245, 197, 24, 0.3)" />

          {/* pulsing ring */}
          <circle
            cx="328"
            cy="192"
            r="20"
            fill="none"
            stroke="#f5c518"
            strokeWidth="2"
            className="slim-pin-pulse"
          />

          {/* pin body */}
          <circle cx="328" cy="192" r="20" fill="#f5c518" filter="url(#slim-pin-shadow)" />
          <path
            d="M 320 210 L 336 210 L 328 226 Z"
            fill="#f5c518"
            filter="url(#slim-pin-shadow)"
          />

          <text
            x="328"
            y="197"
            fontFamily="var(--font-inter), system-ui, sans-serif"
            fontWeight="800"
            fontSize="14"
            fill="#0a0908"
            textAnchor="middle"
            dominantBaseline="central"
          >
            #1
          </text>
        </g>

        {/* Compass-ish label */}
        <text
          x="48"
          y="72"
          fontFamily="var(--font-inter), system-ui, sans-serif"
          fontWeight="600"
          fontSize="11"
          fill="#7a5d00"
          letterSpacing="1.32"
        >
          MAP PACK, CHICAGO LOOP
        </text>
      </svg>

      <span className="case-study-tile__view">
        View case study <span aria-hidden="true">→</span>
      </span>

      <div className="case-study-tile__content">
        <span className="case-study-tile__tag">Medical · Dental · Chicago</span>
        <h3 className="case-study-tile__firm">Slim Dental</h3>
        <p className="case-study-tile__result">
          #1 in the map pack. +186% qualified calls.
        </p>
      </div>
    </Link>
  );
}
