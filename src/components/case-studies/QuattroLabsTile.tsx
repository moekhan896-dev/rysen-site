import Link from "next/link";

const CAR_PATH =
  "M 18 56 L 30 40 L 60 38 L 76 50 L 86 50 L 86 64 L 78 64 C 78 60 74 56 70 56 C 66 56 62 60 62 64 L 42 64 C 42 60 38 56 34 56 C 30 56 26 60 26 64 L 14 64 Z";

export function QuattroLabsTile() {
  return (
    <Link
      href="/case-studies/quattro-labs"
      className="case-study-tile case-study-tile--quattro"
    >
      <svg
        className="case-study-tile__svg-area"
        viewBox="0 0 600 460"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="quattro-bloom" cx="0.733" cy="0.261" r="0.45">
            <stop offset="0%" stopColor="rgba(245, 197, 24, 0.12)" />
            <stop offset="100%" stopColor="rgba(245, 197, 24, 0)" />
          </radialGradient>
          <radialGradient id="quattro-avatar-fill" cx="0.5" cy="0.4" r="0.7">
            <stop offset="0%" stopColor="#1c1c1c" />
            <stop offset="100%" stopColor="#0a0908" />
          </radialGradient>
          <linearGradient id="quattro-tile-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(245, 197, 24, 0.08)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.04)" />
          </linearGradient>
        </defs>

        <rect width="600" height="460" fill="#0a0908" />
        <rect width="600" height="460" fill="url(#quattro-bloom)" />

        {/* Profile circle */}
        <circle
          cx="88"
          cy="110"
          r="36"
          fill="url(#quattro-avatar-fill)"
          stroke="#f5c518"
          strokeWidth="2"
        />
        <text
          x="88"
          y="110"
          fontFamily="var(--font-fraunces), Georgia, serif"
          fontStyle="italic"
          fontWeight="700"
          fontSize="22"
          fill="#f5c518"
          textAnchor="middle"
          dominantBaseline="central"
        >
          QL
        </text>

        {/* Handle + meta */}
        <text
          x="144"
          y="100"
          fontFamily="var(--font-inter), system-ui, sans-serif"
          fontWeight="600"
          fontSize="17"
          fill="#ffffff"
        >
          @quattrolabs
        </text>
        <text
          x="144"
          y="122"
          fontFamily="var(--font-inter), system-ui, sans-serif"
          fontWeight="400"
          fontSize="12"
          fill="rgba(255,255,255,0.6)"
        >
          Auto · Active since 2021
        </text>

        {/* Follow button */}
        <rect x="380" y="92" width="80" height="28" rx="14" fill="#f5c518" />
        <text
          x="420"
          y="110"
          fontFamily="var(--font-inter), system-ui, sans-serif"
          fontWeight="700"
          fontSize="12"
          fill="#0a0908"
          textAnchor="middle"
          dominantBaseline="central"
        >
          Follow
        </text>

        {/* Stat blocks */}
        <g>
          <text
            x="48"
            y="180"
            fontFamily="var(--font-fraunces), Georgia, serif"
            fontWeight="700"
            fontSize="24"
            fill="#f5c518"
          >
            150K
          </text>
          <text
            x="48"
            y="196"
            fontFamily="var(--font-inter), system-ui, sans-serif"
            fontSize="10"
            fill="rgba(255,255,255,0.6)"
          >
            followers
          </text>
        </g>
        <g>
          <text
            x="160"
            y="180"
            fontFamily="var(--font-fraunces), Georgia, serif"
            fontWeight="700"
            fontSize="24"
            fill="#ffffff"
          >
            847
          </text>
          <text
            x="160"
            y="196"
            fontFamily="var(--font-inter), system-ui, sans-serif"
            fontSize="10"
            fill="rgba(255,255,255,0.6)"
          >
            posts
          </text>
        </g>
        <g>
          <text
            x="240"
            y="180"
            fontFamily="var(--font-fraunces), Georgia, serif"
            fontWeight="700"
            fontSize="24"
            fill="#ffffff"
          >
            12
          </text>
          <text
            x="240"
            y="196"
            fontFamily="var(--font-inter), system-ui, sans-serif"
            fontSize="10"
            fill="rgba(255,255,255,0.6)"
          >
            industry features
          </text>
        </g>

        {/* Photo grid — three 96x96 squares with car silhouette */}
        {[0, 1, 2].map((i) => {
          const x = 48 + i * 104;
          return (
            <g key={i} transform={`translate(${x}, 220)`}>
              <rect
                width="96"
                height="96"
                rx="8"
                fill="url(#quattro-tile-fill)"
              />
              <path
                d={CAR_PATH}
                transform="translate(0, 12)"
                stroke="rgba(245, 197, 24, 0.4)"
                strokeWidth="1"
                fill="none"
                strokeLinejoin="round"
              />
            </g>
          );
        })}
      </svg>

      <span className="case-study-tile__view">
        View case study <span aria-hidden="true">→</span>
      </span>

      <div className="case-study-tile__content">
        <span className="case-study-tile__tag">Built by us</span>
        <h3 className="case-study-tile__firm">Quattro Labs</h3>
        <p className="case-study-tile__result">
          Built our own auto brand to 150K+ followers. Active since 2021.
        </p>
      </div>
    </Link>
  );
}
