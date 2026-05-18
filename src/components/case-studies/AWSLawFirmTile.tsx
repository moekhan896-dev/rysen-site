import Link from "next/link";

export function AWSLawFirmTile() {
  return (
    <Link
      href="/case-studies/aws-law-firm"
      className="case-study-tile case-study-tile--aws"
    >
      <svg
        className="case-study-tile__svg-area"
        viewBox="0 0 600 460"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <filter id="aws-after-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* BEFORE label */}
        <text
          x="64"
          y="66"
          fontFamily="var(--font-inter), system-ui, sans-serif"
          fontWeight="600"
          fontSize="10"
          fill="rgba(10, 9, 8, 0.4)"
          letterSpacing="1.2"
        >
          BEFORE, PAGE 2
        </text>

        {/* BEFORE mockup */}
        <g opacity="0.6">
          <rect
            x="64"
            y="80"
            width="400"
            height="80"
            rx="10"
            fill="rgba(0, 0, 0, 0.04)"
            stroke="rgba(0, 0, 0, 0.08)"
            strokeWidth="1"
          />
          <text
            x="80"
            y="108"
            fontFamily="var(--font-inter), system-ui, sans-serif"
            fontSize="10"
            fill="#6e6e73"
          >
            competitorlaw.com
          </text>
          <text
            x="80"
            y="132"
            fontFamily="var(--font-fraunces), Georgia, serif"
            fontSize="14"
            fill="rgba(10,9,8,0.4)"
          >
            Some Other Tampa Probate Firm
          </text>
          <rect
            x="412"
            y="104"
            width="42"
            height="20"
            rx="10"
            fill="rgba(0, 0, 0, 0.1)"
          />
          <text
            x="433"
            y="118"
            fontFamily="var(--font-inter), system-ui, sans-serif"
            fontWeight="700"
            fontSize="10"
            fill="rgba(10, 9, 8, 0.5)"
            textAnchor="middle"
          >
            #13
          </text>
        </g>

        {/* Curved arrow */}
        <g>
          <path
            d="M 470 175 Q 540 195 540 230 Q 540 268 480 286"
            stroke="#f5c518"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          {/* arrowhead */}
          <path
            d="M 480 286 L 488 280 L 488 290 Z"
            fill="#f5c518"
            transform="rotate(70 480 286)"
          />
          <text
            x="556"
            y="234"
            fontFamily="var(--font-fraunces), Georgia, serif"
            fontStyle="italic"
            fontSize="11"
            fill="#f5c518"
            textAnchor="end"
          >
            moved up
          </text>
        </g>

        {/* AFTER label */}
        <text
          x="64"
          y="226"
          fontFamily="var(--font-inter), system-ui, sans-serif"
          fontWeight="600"
          fontSize="10"
          fill="#7a5d00"
          letterSpacing="1.2"
        >
          AFTER, #1
        </text>

        {/* AFTER mockup */}
        <g filter="url(#aws-after-shadow)">
          <rect
            x="64"
            y="240"
            width="420"
            height="100"
            rx="12"
            fill="#ffffff"
            stroke="#f5c518"
            strokeWidth="2"
          />
          {/* yellow #1 ring on the left */}
          <circle cx="92" cy="280" r="14" fill="#f5c518" />
          <text
            x="92"
            y="280"
            fontFamily="var(--font-inter), system-ui, sans-serif"
            fontWeight="800"
            fontSize="13"
            fill="#0a0908"
            textAnchor="middle"
            dominantBaseline="central"
          >
            1
          </text>

          <text
            x="120"
            y="270"
            fontFamily="var(--font-inter), system-ui, sans-serif"
            fontSize="11"
            fill="rgba(140, 196, 144, 0.95)"
          >
            awslawfirm.com
          </text>
          <text
            x="120"
            y="294"
            fontFamily="var(--font-fraunces), Georgia, serif"
            fontWeight="500"
            fontSize="17"
            fill="#0a0908"
          >
            AWS Law Firm, Tampa Probate Attorneys
          </text>
          <text
            x="120"
            y="318"
            fontFamily="var(--font-inter), system-ui, sans-serif"
            fontStyle="italic"
            fontSize="11"
            fill="rgba(10,9,8,0.55)"
          >
            Highest-rated probate firm in Tampa Bay...
          </text>

          {/* #1 badge top-right */}
          <rect
            x="436"
            y="252"
            width="36"
            height="22"
            rx="11"
            fill="#f5c518"
          />
          <text
            x="454"
            y="263"
            fontFamily="var(--font-inter), system-ui, sans-serif"
            fontWeight="800"
            fontSize="11"
            fill="#0a0908"
            textAnchor="middle"
            dominantBaseline="central"
          >
            #1
          </text>
        </g>
      </svg>

      <span className="case-study-tile__view">
        View case study <span aria-hidden="true">→</span>
      </span>

      <div className="case-study-tile__content">
        <span className="case-study-tile__tag">Legal · Probate · Tampa</span>
        <h3 className="case-study-tile__firm">AWS Law Firm</h3>
        <p className="case-study-tile__result">
          Page 2 to #1 in 12 months. +240% consultations.
        </p>
      </div>
    </Link>
  );
}
