import Link from "next/link";

const GROWTH_PATH =
  "M 80 388 L 140 380 L 200 365 L 260 335 L 320 285 L 380 220 L 440 160 L 540 252";

const AREA_PATH =
  "M 80 388 L 140 380 L 200 365 L 260 335 L 320 285 L 380 220 L 440 160 L 540 252 L 540 388 Z";

type StatCard = {
  x: number;
  label: string;
  value: string;
  valueColor: string;
  showTrend: boolean;
};

const CARDS: ReadonlyArray<StatCard> = [
  { x: 48, label: "Views", value: "100M", valueColor: "#0a0908", showTrend: true },
  { x: 224, label: "Followers", value: "20K", valueColor: "#0a0908", showTrend: true },
  { x: 400, label: "Days", value: "60", valueColor: "#0a0908", showTrend: false },
];

export function MadisonClarkTile() {
  return (
    <Link
      href="/case-studies/madison-clark"
      className="case-study-tile case-study-tile--madison"
    >
      <svg
        className="case-study-tile__svg-area"
        viewBox="0 0 600 460"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="madison-bloom" cx="0.85" cy="0.15" r="0.5">
            <stop offset="0%" stopColor="rgba(245, 197, 24, 0.08)" />
            <stop offset="100%" stopColor="rgba(245, 197, 24, 0)" />
          </radialGradient>
          <filter id="madison-card-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.04" />
          </filter>
        </defs>

        <rect width="600" height="460" fill="url(#madison-bloom)" />

        {/* Label */}
        <text
          x="48"
          y="72"
          fontFamily="var(--font-inter), system-ui, sans-serif"
          fontWeight="600"
          fontSize="11"
          fill="#7a5d00"
          letterSpacing="1.32"
        >
          BUILT BY US, 60 DAYS, ZERO AD SPEND
        </text>

        {/* Stat cards */}
        {CARDS.map((card) => (
          <g key={card.label} filter="url(#madison-card-shadow)">
            <rect
              x={card.x}
              y="100"
              width="152"
              height="100"
              rx="12"
              fill="#ffffff"
              stroke="rgba(10, 9, 8, 0.06)"
              strokeWidth="1"
            />
            <text
              x={card.x + 20}
              y="132"
              fontFamily="var(--font-inter), system-ui, sans-serif"
              fontWeight="500"
              fontSize="11"
              fill="rgba(10, 9, 8, 0.5)"
              letterSpacing="0.44"
            >
              {card.label}
            </text>
            <text
              x={card.x + 20}
              y="172"
              fontFamily="var(--font-fraunces), Georgia, serif"
              fontWeight="700"
              fontSize="36"
              fill={card.valueColor}
              letterSpacing="-1.08"
            >
              {card.value}
            </text>
            {card.showTrend && (
              <path
                d={`M ${card.x + 122} 148 L ${card.x + 130} 138 L ${card.x + 138} 148 Z`}
                fill="#f5c518"
              />
            )}
          </g>
        ))}

        {/* Growth area fill */}
        <path d={AREA_PATH} fill="rgba(245, 197, 24, 0.12)" />

        {/* Growth line */}
        <path
          d={GROWTH_PATH}
          stroke="#f5c518"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Peak annotation */}
        <circle cx="440" cy="160" r="12" fill="none" stroke="#f5c518" strokeWidth="1" opacity="0.3" />
        <circle cx="440" cy="160" r="6" fill="#f5c518" />
        <text
          x="450"
          y="152"
          fontFamily="var(--font-fraunces), Georgia, serif"
          fontStyle="italic"
          fontWeight="500"
          fontSize="12"
          fill="#0a0908"
        >
          Peak: viral hit
        </text>

        {/* X-axis week labels */}
        {[
          ["Week 1", 80],
          ["Week 3", 200],
          ["Week 5", 320],
          ["Week 7", 440],
          ["Day 60", 540],
        ].map(([label, x]) => (
          <text
            key={label}
            x={x as number}
            y="412"
            fontFamily="var(--font-inter), system-ui, sans-serif"
            fontStyle="italic"
            fontSize="9"
            fill="rgba(10, 9, 8, 0.4)"
            textAnchor="middle"
          >
            {label}
          </text>
        ))}
      </svg>

      <span className="case-study-tile__view">
        View case study <span aria-hidden="true">→</span>
      </span>

      <div className="case-study-tile__content">
        <span className="case-study-tile__tag">Built by us · AI persona · Social</span>
        <h3 className="case-study-tile__firm">Madison Clark</h3>
        <p className="case-study-tile__result">
          AI persona we built and scaled to 100 million views in 60 days. Zero ad spend.
        </p>
      </div>
    </Link>
  );
}
