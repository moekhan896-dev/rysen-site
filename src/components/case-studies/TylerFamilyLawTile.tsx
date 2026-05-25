import Link from "next/link";

export function TylerFamilyLawTile() {
  return (
    <Link
      href="/case-studies/tyler-family-law"
      className="case-study-tile case-study-tile--tyler"
    >
      <svg
        className="case-study-tile__svg-area"
        viewBox="0 0 600 480"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="tyler-chart-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6EF06E" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#6EF06E" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width="600" height="480" fill="#0d0d0e" />

        <text
          x="40"
          y="60"
          fontFamily="var(--font-inter)"
          fontSize="11"
          fontWeight="700"
          letterSpacing="0.12em"
          fill="#a8a59c"
        >
          CALLS FROM GOOGLE BUSINESS PROFILE
        </text>
        <text
          x="40"
          y="78"
          fontFamily="var(--font-inter)"
          fontSize="10"
          fontWeight="500"
          fill="#6e6b62"
        >
          Dec 2025 — May 2026
        </text>

        <text
          x="40"
          y="160"
          fontFamily="var(--font-inter)"
          fontSize="84"
          fontWeight="800"
          letterSpacing="-0.04em"
          fill="#f7f4ed"
        >
          169
        </text>
        <text
          x="40"
          y="186"
          fontFamily="var(--font-inter)"
          fontSize="14"
          fontWeight="500"
          fill="#a8a59c"
        >
          qualified inbound calls
        </text>

        <g transform="translate(40, 240)">
          {/* Gridlines */}
          <line x1="0" y1="0" x2="520" y2="0" stroke="rgba(247, 244, 237, 0.06)" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="0" y1="40" x2="520" y2="40" stroke="rgba(247, 244, 237, 0.06)" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="0" y1="80" x2="520" y2="80" stroke="rgba(247, 244, 237, 0.06)" strokeWidth="0.5" strokeDasharray="3 3" />

          <text x="-8" y="4" fontFamily="var(--font-inter)" fontSize="10" fill="#6e6b62" textAnchor="end">50</text>
          <text x="-8" y="44" fontFamily="var(--font-inter)" fontSize="10" fill="#6e6b62" textAnchor="end">25</text>
          <text x="-8" y="84" fontFamily="var(--font-inter)" fontSize="10" fill="#6e6b62" textAnchor="end">0</text>

          {/* Dec-May, 6 data points: mostly flat with mid-period peak */}
          {/* Calls per month approx: 28, 27, 30, 35, 28, 22 — peaks around Mar (idx 3) */}
          <path
            d="M 0 36 L 104 38 L 208 32 L 312 24 L 416 36 L 520 48 L 520 80 L 0 80 Z"
            fill="url(#tyler-chart-fill)"
          />
          <path
            d="M 0 36 L 104 38 L 208 32 L 312 24 L 416 36 L 520 48"
            stroke="#6EF06E"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <circle cx="0" cy="36" r="5" fill="#6EF06E" stroke="#0d0d0e" strokeWidth="2" />
          <circle cx="104" cy="38" r="5" fill="#6EF06E" stroke="#0d0d0e" strokeWidth="2" />
          <circle cx="208" cy="32" r="5" fill="#6EF06E" stroke="#0d0d0e" strokeWidth="2" />
          <circle cx="416" cy="36" r="5" fill="#6EF06E" stroke="#0d0d0e" strokeWidth="2" />
          <circle cx="520" cy="48" r="5" fill="#6EF06E" stroke="#0d0d0e" strokeWidth="2" />

          {/* Peak point (Mar) with glow */}
          <circle cx="312" cy="24" r="22" fill="#6EF06E" opacity="0.12" />
          <circle cx="312" cy="24" r="14" fill="#6EF06E" opacity="0.3" />
          <circle cx="312" cy="24" r="7" fill="#6EF06E" stroke="#0d0d0e" strokeWidth="2" />

          {/* X-axis */}
          {[
            ["Dec", 0],
            ["Jan", 104],
            ["Feb", 208],
            ["Mar", 312],
            ["Apr", 416],
            ["May", 520],
          ].map(([label, x]) => (
            <text
              key={label}
              x={x as number}
              y="100"
              fontFamily="var(--font-inter)"
              fontSize="10"
              fill="#6e6b62"
            >
              {label}
            </text>
          ))}
        </g>
      </svg>

      <span className="case-study-tile__view">
        View case study <span aria-hidden="true">→</span>
      </span>

      <div className="case-study-tile__content">
        <span className="case-study-tile__tag">Legal · Divorce · Atlanta</span>
        <h3 className="case-study-tile__firm">Tyler Family Law</h3>
        <p className="case-study-tile__result">
          169 qualified calls. Beat the national chains. Four-week waitlist.
        </p>
      </div>
    </Link>
  );
}
