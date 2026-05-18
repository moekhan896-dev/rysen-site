import Link from "next/link";

const CX = 300;
const CY = 200;
const R = 130;

const SPOKE_ANGLES_DEG = [-60, 0, 60, 120, 180, 240];

const KEYWORDS: ReadonlyArray<{ angle: number; label: string; anchor: "start" | "middle" | "end" }> = [
  { angle: -60, label: "skin care clinic", anchor: "middle" },
  { angle: 0, label: "cosmetic dermatology", anchor: "start" },
  { angle: 60, label: "botox miami", anchor: "middle" },
  { angle: 120, label: "laser treatment", anchor: "end" },
  { angle: 180, label: "aesthetic consultation", anchor: "end" },
  { angle: 240, label: "miami dermatologist", anchor: "end" },
];

const BEFORE_PCT = [0.3, 0.25, 0.35, 0.28, 0.32, 0.3];
const AFTER_PCT = [0.88, 0.92, 0.85, 0.9, 0.95, 0.87];

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function polygonPoints(percents: number[]) {
  return SPOKE_ANGLES_DEG.map((angle, i) => {
    const p = polarToCartesian(CX, CY, R * percents[i], angle);
    return `${p.x.toFixed(2)},${p.y.toFixed(2)}`;
  }).join(" ");
}

function ringPoints(pct: number) {
  return SPOKE_ANGLES_DEG.map((angle) => {
    const p = polarToCartesian(CX, CY, R * pct, angle);
    return `${p.x.toFixed(2)},${p.y.toFixed(2)}`;
  }).join(" ");
}

export function HartmanDermatologyTile() {
  const afterPolygon = polygonPoints([...AFTER_PCT]);
  const beforePolygon = polygonPoints([...BEFORE_PCT]);

  return (
    <Link
      href="/case-studies/hartman-dermatology"
      className="case-study-tile case-study-tile--hartman"
    >
      <svg
        className="case-study-tile__svg-area"
        viewBox="0 0 600 460"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="hartman-bloom" cx="0.2" cy="0.85" r="0.5">
            <stop offset="0%" stopColor="rgba(255, 140, 120, 0.05)" />
            <stop offset="100%" stopColor="rgba(255, 140, 120, 0)" />
          </radialGradient>
        </defs>

        <rect width="600" height="460" fill="#0a0908" />
        <rect width="600" height="460" fill="url(#hartman-bloom)" />

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
          SEARCH VISIBILITY, 6 PRIORITY KEYWORDS
        </text>

        {/* Concentric hexagons */}
        {[0.33, 0.66, 1].map((pct) => (
          <polygon
            key={pct}
            points={ringPoints(pct)}
            stroke="rgba(244, 241, 232, 0.06)"
            strokeWidth="0.5"
            fill="none"
          />
        ))}

        {/* Spoke lines */}
        {SPOKE_ANGLES_DEG.map((angle) => {
          const p = polarToCartesian(CX, CY, R, angle);
          return (
            <line
              key={`spoke-${angle}`}
              x1={CX}
              y1={CY}
              x2={p.x}
              y2={p.y}
              stroke="rgba(244, 241, 232, 0.08)"
              strokeWidth="0.5"
            />
          );
        })}

        {/* Before baseline (faded) */}
        <polygon
          points={beforePolygon}
          fill="rgba(244, 241, 232, 0.06)"
          stroke="rgba(244, 241, 232, 0.15)"
          strokeWidth="1"
        />

        {/* After dominant (yellow) */}
        <polygon
          points={afterPolygon}
          fill="rgba(245, 197, 24, 0.2)"
          stroke="#f5c518"
          strokeWidth="2.5"
        />

        {/* After vertex dots */}
        {SPOKE_ANGLES_DEG.map((angle, i) => {
          const p = polarToCartesian(CX, CY, R * AFTER_PCT[i], angle);
          return (
            <circle
              key={`dot-${angle}`}
              cx={p.x}
              cy={p.y}
              r="5"
              fill="#f5c518"
            />
          );
        })}

        {/* Keyword labels */}
        {KEYWORDS.map(({ angle, label, anchor }) => {
          const p = polarToCartesian(CX, CY, R + 18, angle);
          return (
            <text
              key={label}
              x={p.x}
              y={p.y}
              fontFamily="var(--font-inter), system-ui, sans-serif"
              fontWeight="500"
              fontSize="11"
              fill="rgba(244, 241, 232, 0.7)"
              textAnchor={anchor}
              dominantBaseline="middle"
            >
              {label}
            </text>
          );
        })}

        {/* Annotation */}
        <text
          x="552"
          y="92"
          fontFamily="var(--font-fraunces), Georgia, serif"
          fontStyle="italic"
          fontWeight="500"
          fontSize="14"
          fill="#f5c518"
          textAnchor="end"
        >
          38% AI citation rate
        </text>
      </svg>

      <span className="case-study-tile__view">
        View case study <span aria-hidden="true">→</span>
      </span>

      <div className="case-study-tile__content">
        <span className="case-study-tile__tag">Medical · Dermatology · Miami</span>
        <h3 className="case-study-tile__firm">Hartman Dermatology</h3>
        <p className="case-study-tile__result">
          Miami's secret became Miami's go-to. 38% AI citation rate.
        </p>
      </div>
    </Link>
  );
}
