import Link from "next/link";

const GROWTH_PATH =
  "M 80 295 L 140 285 L 200 270 L 260 240 L 320 195 L 380 145 L 440 110 L 540 95";

const DATA_POINTS: ReadonlyArray<readonly [number, number]> = [
  [80, 295],
  [200, 270],
  [320, 195],
  [440, 110],
];

export function TylerFamilyLawTile() {
  return (
    <Link
      href="/case-studies/tyler-family-law"
      className="case-study-tile case-study-tile--tyler"
    >
      <svg
        className="case-study-tile__svg-area"
        viewBox="0 0 600 460"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="tyler-base-bloom" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="rgba(245, 197, 24, 0.06)" />
            <stop offset="100%" stopColor="rgba(245, 197, 24, 0)" />
          </linearGradient>
        </defs>

        <rect width="600" height="460" fill="#0a0908" />
        <rect x="0" y="180" width="600" height="280" fill="url(#tyler-base-bloom)" />

        {/* Label */}
        <text
          x="48"
          y="72"
          fontFamily="var(--font-inter), system-ui, sans-serif"
          fontWeight="600"
          fontSize="11"
          fill="#f5c518"
          letterSpacing="1.32"
        >
          LEAD GROWTH, 8 MONTHS
        </text>

        {/* Y-axis labels */}
        <text
          x="24"
          y="130"
          fontFamily="var(--font-inter), system-ui, sans-serif"
          fontStyle="italic"
          fontSize="10"
          fill="rgba(244, 241, 232, 0.4)"
        >
          high
        </text>
        <text
          x="24"
          y="215"
          fontFamily="var(--font-inter), system-ui, sans-serif"
          fontStyle="italic"
          fontSize="10"
          fill="rgba(244, 241, 232, 0.4)"
        >
          mid
        </text>
        <text
          x="24"
          y="300"
          fontFamily="var(--font-inter), system-ui, sans-serif"
          fontStyle="italic"
          fontSize="10"
          fill="rgba(244, 241, 232, 0.4)"
        >
          low
        </text>

        {/* Gridlines */}
        <line x1="48" y1="130" x2="552" y2="130" stroke="rgba(244, 241, 232, 0.06)" strokeWidth="0.5" />
        <line x1="48" y1="215" x2="552" y2="215" stroke="rgba(244, 241, 232, 0.06)" strokeWidth="0.5" />
        <line x1="48" y1="300" x2="552" y2="300" stroke="rgba(244, 241, 232, 0.06)" strokeWidth="0.5" />

        {/* X-axis labels */}
        {[
          ["M1", 80],
          ["M3", 200],
          ["M5", 320],
          ["M7", 440],
          ["M8", 540],
        ].map(([label, x]) => (
          <text
            key={label}
            x={x as number}
            y="325"
            fontFamily="var(--font-inter), system-ui, sans-serif"
            fontStyle="italic"
            fontSize="10"
            fill="rgba(244, 241, 232, 0.4)"
            textAnchor="middle"
          >
            {label}
          </text>
        ))}

        {/* Glow under line */}
        <path
          d={GROWTH_PATH}
          stroke="#f5c518"
          strokeWidth="8"
          opacity="0.2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Main growth line */}
        <path
          d={GROWTH_PATH}
          stroke="#f5c518"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Data point dots */}
        {DATA_POINTS.map(([cx, cy]) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="4"
            fill="#0a0908"
            stroke="#f5c518"
            strokeWidth="2"
          />
        ))}

        {/* Endpoint glow rings */}
        <circle cx="540" cy="95" r="28" fill="none" stroke="#f5c518" strokeWidth="1" opacity="0.08" />
        <circle cx="540" cy="95" r="20" fill="none" stroke="#f5c518" strokeWidth="1" opacity="0.15" />
        <circle cx="540" cy="95" r="14" fill="none" stroke="#f5c518" strokeWidth="1" opacity="0.3" />
        <circle cx="540" cy="95" r="8" fill="#f5c518" />

        {/* +1,240% label */}
        <text
          x="548"
          y="75"
          fontFamily="var(--font-fraunces), Georgia, serif"
          fontWeight="700"
          fontSize="20"
          fill="#f5c518"
          textAnchor="end"
        >
          +1,240%
        </text>

        {/* Note */}
        <text
          x="200"
          y="355"
          fontFamily="var(--font-inter), system-ui, sans-serif"
          fontStyle="italic"
          fontSize="10"
          fill="rgba(244, 241, 232, 0.5)"
        >
          Beat the national chains.
        </text>
      </svg>

      <span className="case-study-tile__view">
        View case study <span aria-hidden="true">→</span>
      </span>

      <div className="case-study-tile__content">
        <span className="case-study-tile__tag">Legal · Divorce · Atlanta</span>
        <h3 className="case-study-tile__firm">Tyler Family Law</h3>
        <p className="case-study-tile__result">
          Beat the national chains. +1,240% lead growth. Four-week waitlist.
        </p>
      </div>
    </Link>
  );
}
