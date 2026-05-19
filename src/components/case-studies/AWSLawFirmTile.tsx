import Link from "next/link";

export function AWSLawFirmTile() {
  return (
    <Link
      href="/case-studies/aws-law-firm"
      className="case-study-tile case-study-tile--aws"
    >
      <svg
        className="case-study-tile__svg-area"
        viewBox="0 0 600 480"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="aws-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fdfaf3" />
            <stop offset="100%" stopColor="#f5f1e6" />
          </linearGradient>
          <linearGradient id="aws-chart-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFE817" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FFE817" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width="600" height="480" fill="url(#aws-bg)" />

        <text
          x="40"
          y="60"
          fontFamily="var(--font-inter)"
          fontSize="11"
          fontWeight="700"
          letterSpacing="0.12em"
          fill="#4a4a4f"
        >
          CALLS FROM GOOGLE BUSINESS PROFILE
        </text>
        <text
          x="40"
          y="78"
          fontFamily="var(--font-inter)"
          fontSize="10"
          fontWeight="500"
          fill="#8a8a90"
        >
          Dec 2025 — Mar 2026
        </text>

        <text
          x="40"
          y="160"
          fontFamily="var(--font-inter)"
          fontSize="84"
          fontWeight="800"
          letterSpacing="-0.04em"
          fill="#0d0d0e"
        >
          348
        </text>
        <text
          x="40"
          y="186"
          fontFamily="var(--font-inter)"
          fontSize="14"
          fontWeight="500"
          fill="#4a4a4f"
        >
          qualified inbound calls
        </text>

        <g transform="translate(40, 240)">
          <line x1="0" y1="0" x2="520" y2="0" stroke="#e0dccc" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="0" y1="40" x2="520" y2="40" stroke="#e0dccc" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="0" y1="80" x2="520" y2="80" stroke="#e0dccc" strokeWidth="0.5" strokeDasharray="3 3" />

          <text x="-8" y="4" fontFamily="var(--font-inter)" fontSize="10" fill="#8a8a90" textAnchor="end">160</text>
          <text x="-8" y="44" fontFamily="var(--font-inter)" fontSize="10" fill="#8a8a90" textAnchor="end">80</text>
          <text x="-8" y="84" fontFamily="var(--font-inter)" fontSize="10" fill="#8a8a90" textAnchor="end">0</text>

          <path
            d="M 0 70 L 130 60 L 260 50 L 390 52 L 520 12 L 520 80 L 0 80 Z"
            fill="url(#aws-chart-fill)"
          />
          <path
            d="M 0 70 L 130 60 L 260 50 L 390 52 L 520 12"
            stroke="#FFE817"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <circle cx="0" cy="70" r="5" fill="#FFE817" stroke="#0d0d0e" strokeWidth="2" />
          <circle cx="130" cy="60" r="5" fill="#FFE817" stroke="#0d0d0e" strokeWidth="2" />
          <circle cx="260" cy="50" r="5" fill="#FFE817" stroke="#0d0d0e" strokeWidth="2" />
          <circle cx="390" cy="52" r="5" fill="#FFE817" stroke="#0d0d0e" strokeWidth="2" />

          <circle cx="520" cy="12" r="22" fill="#FFE817" opacity="0.12" />
          <circle cx="520" cy="12" r="14" fill="#FFE817" opacity="0.3" />
          <circle cx="520" cy="12" r="7" fill="#FFE817" stroke="#0d0d0e" strokeWidth="2" />

          <text x="0" y="100" fontFamily="var(--font-inter)" fontSize="10" fill="#8a8a90">Dec</text>
          <text x="130" y="100" fontFamily="var(--font-inter)" fontSize="10" fill="#8a8a90">Jan</text>
          <text x="260" y="100" fontFamily="var(--font-inter)" fontSize="10" fill="#8a8a90">Feb</text>
          <text x="390" y="100" fontFamily="var(--font-inter)" fontSize="10" fill="#8a8a90">Mar</text>
        </g>
      </svg>

      <span className="case-study-tile__view">
        View case study <span aria-hidden="true">→</span>
      </span>

      <div className="case-study-tile__content">
        <span className="case-study-tile__tag">Legal · Probate · Tampa</span>
        <h3 className="case-study-tile__firm">AWS Law Firm</h3>
        <p className="case-study-tile__result">
          348 qualified calls in 4 months. #1 for every priority probate query in Tampa.
        </p>
      </div>
    </Link>
  );
}
