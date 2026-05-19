import Link from "next/link";

type ClientNode = {
  num: string;
  slug: string;
  vertical: string;
  metro: string;
  client: string;
  metric: string;
  kind: "legal" | "medical" | "built";
  angle: number; // degrees from 12 o'clock clockwise
};

const NODES: ReadonlyArray<ClientNode> = [
  { num: "01", slug: "aws-law-firm", vertical: "LEGAL", metro: "TAMPA", client: "AWS Law Firm", metric: "348 calls · 4 mo", kind: "legal", angle: 0 },
  { num: "02", slug: "slim-dental", vertical: "MEDICAL", metro: "CHICAGO", client: "Slim Dental", metric: "+186% calls", kind: "medical", angle: 60 },
  { num: "03", slug: "hartman-dermatology", vertical: "MEDICAL", metro: "MIAMI", client: "Hartman Dermatology", metric: "38% AI cite", kind: "medical", angle: 120 },
  { num: "04", slug: "madison-clark", vertical: "BUILT BY US", metro: "AI PERSONA", client: "Madison Clark", metric: "100M views · 60d", kind: "built", angle: 180 },
  { num: "05", slug: "tyler-family-law", vertical: "LEGAL", metro: "ATLANTA", client: "Tyler Family Law", metric: "169 calls · 6 mo", kind: "legal", angle: 240 },
  { num: "06", slug: "quattro-labs", vertical: "BUILT BY US", metro: "AUTO MEDIA", client: "Quattro Labs", metric: "150K followers", kind: "built", angle: 300 },
];

// SVG center is (450, 450). Node orbit radius 320.
function nodePosition(angle: number) {
  // 0 deg = 12 o'clock (up). Convert to standard math: subtract 90.
  const a = ((angle - 90) * Math.PI) / 180;
  return {
    x: 450 + Math.cos(a) * 320,
    y: 450 + Math.sin(a) * 320,
  };
}

function VerticalIcon({ kind }: { kind: "legal" | "medical" | "built" }) {
  if (kind === "legal") {
    return (
      <g>
        <path d="M -5 -5 L 5 -5 L 4 0 L -4 0 Z" fill="#FFE817" />
        <line x1="0" y1="0" x2="0" y2="6" stroke="#FFE817" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    );
  }
  if (kind === "medical") {
    return (
      <g>
        <line x1="0" y1="-6" x2="0" y2="6" stroke="#FFE817" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M -4 -2 Q 0 0 4 -2 M -4 2 Q 0 4 4 2" stroke="#FFE817" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </g>
    );
  }
  return (
    // built-by-us sparkle
    <g>
      <path d="M 0 -6 L 1.5 -1.5 L 6 0 L 1.5 1.5 L 0 6 L -1.5 1.5 L -6 0 L -1.5 -1.5 Z" fill="#FFE817" />
    </g>
  );
}

function CornerBracket({ x, y, flipX = false, flipY = false }: { x: number; y: number; flipX?: boolean; flipY?: boolean }) {
  const sx = flipX ? -1 : 1;
  const sy = flipY ? -1 : 1;
  return (
    <g transform={`translate(${x},${y}) scale(${sx},${sy})`}>
      <path d="M 0 16 L 0 0 L 16 0" stroke="#FFE817" strokeWidth="1.5" fill="none" opacity="0.45" strokeLinecap="round" />
    </g>
  );
}

export function TheWork() {
  return (
    <section className="the-work" id="work" aria-label="The work">
      <div className="the-work__inner">
        <div className="the-work__heading-row">
          <span className="how__bar" aria-hidden="true" />
          <p className="how__label">The Work</p>
        </div>
        <h2 className="how__heading">Six firms. Two verticals. One compound system.</h2>
        <p className="how__sub">
          Each firm we work with becomes the dominant result in their metro. Once they&apos;re hired, their competitors can&apos;t be.
        </p>

        <div className="flywheel-wrap">
          <div className="flywheel-bg tech-grid-bg" aria-hidden="true" />
          <div className="flywheel-glow-1" aria-hidden="true" />
          <div className="flywheel-glow-2" aria-hidden="true" />

          <svg viewBox="0 0 900 900" className="flywheel-svg" aria-hidden="true">
            <defs>
              <radialGradient id="fw-hub-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFE817" stopOpacity="0.35" />
                <stop offset="55%" stopColor="#FFE817" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#FFE817" stopOpacity="0" />
              </radialGradient>

              {NODES.map((node, i) => {
                const p = nodePosition(node.angle);
                return (
                  <linearGradient
                    key={`spoke-grad-${i}`}
                    id={`fw-spoke-${i}`}
                    x1={450}
                    y1={450}
                    x2={p.x}
                    y2={p.y}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#FFE817" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#4D7FFF" stopOpacity="0.3" />
                  </linearGradient>
                );
              })}
            </defs>

            {/* Outer dashed rings */}
            <circle cx="450" cy="450" r="380" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" strokeDasharray="2 8" fill="none" />
            <circle cx="450" cy="450" r="320" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" strokeDasharray="2 8" fill="none" />
            <circle cx="450" cy="450" r="260" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" strokeDasharray="2 8" fill="none" />

            {/* Compound mechanism plate */}
            <circle cx="450" cy="450" r="220" fill="#14141C" />

            {/* 8 tick marks around plate edge */}
            {Array.from({ length: 8 }).map((_, i) => {
              const a = (i * 45 - 90) * (Math.PI / 180);
              const x1 = 450 + Math.cos(a) * 220;
              const y1 = 450 + Math.sin(a) * 220;
              const x2 = 450 + Math.cos(a) * 230;
              const y2 = 450 + Math.sin(a) * 230;
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FFE817" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />;
            })}

            {/* Spokes from hub edge to client nodes */}
            {NODES.map((node, i) => {
              const p = nodePosition(node.angle);
              const a = ((node.angle - 90) * Math.PI) / 180;
              const x1 = 450 + Math.cos(a) * 80; // start at hub edge
              const y1 = 450 + Math.sin(a) * 80;
              const x2 = 450 + Math.cos(a) * 290; // end before node
              const y2 = 450 + Math.sin(a) * 290;
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={`url(#fw-spoke-${i})`} strokeWidth="1.5" />;
            })}

            {/* Data pulses along spokes */}
            {NODES.map((node, i) => {
              const p = nodePosition(node.angle);
              const a = ((node.angle - 90) * Math.PI) / 180;
              const x1 = 450 + Math.cos(a) * 80;
              const y1 = 450 + Math.sin(a) * 80;
              const x2 = 450 + Math.cos(a) * 290;
              const y2 = 450 + Math.sin(a) * 290;
              const delay = (i * 0.5).toFixed(2);
              return (
                <circle key={`pulse-${i}`} r="2.5" fill="#FFE817" opacity="0.8">
                  <animate attributeName="cx" values={`${x1};${x2}`} dur="3s" begin={`${delay}s`} repeatCount="indefinite" />
                  <animate attributeName="cy" values={`${y1};${y2}`} dur="3s" begin={`${delay}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;0.9;0" dur="3s" begin={`${delay}s`} repeatCount="indefinite" />
                </circle>
              );
            })}

            {/* Hub outer glow */}
            <circle cx="450" cy="450" r="130" fill="url(#fw-hub-glow)" />
            {/* Hub center disc */}
            <circle cx="450" cy="450" r="80" fill="#050507" stroke="#FFE817" strokeWidth="2" />

            {/* Scan arc inside hub */}
            <g className="flywheel-scan" style={{ transformOrigin: "450px 450px" }}>
              <path d="M 450 380 A 70 70 0 0 1 510 420" stroke="#FFE817" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
            </g>

            {/* Hub triangle */}
            <polygon points="430,430 470,430 430,460" fill="#FFE817" transform="translate(0, -4)" />

            {/* Hub label */}
            <text x="450" y="478" fill="#FAFAF7" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle" letterSpacing="0.22em">THE SYSTEM</text>
            <text x="450" y="496" fill="#8B8B95" fontSize="10" fontWeight="500" fontFamily="Inter, sans-serif" textAnchor="middle">Compound visibility</text>

            {/* Client nodes */}
            {NODES.map((node, i) => {
              const p = nodePosition(node.angle);
              return (
                <g key={node.slug} transform={`translate(${p.x}, ${p.y})`}>
                  {/* Background circle */}
                  <circle r="68" fill="#14141C" stroke="#FFE817" strokeWidth="1.5" opacity="0.7" />
                  <circle r="68" fill="none" stroke="rgba(255, 232, 23, 0.4)" strokeWidth="1.5" />

                  {/* Vertical icon top */}
                  <g transform="translate(0, -38)">
                    <VerticalIcon kind={node.kind} />
                  </g>

                  {/* Vertical · metro label */}
                  <text y="-12" fill="#8B8B95" fontSize="8" fontWeight="600" fontFamily="Inter, sans-serif" textAnchor="middle" letterSpacing="0.16em">
                    {node.vertical} · {node.metro}
                  </text>

                  {/* Client name */}
                  <text y="6" fill="#FAFAF7" fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle" letterSpacing="-0.012em">
                    {node.client}
                  </text>

                  {/* Metric pill */}
                  <rect x="-46" y="22" width="92" height="20" rx="10" fill="#050507" stroke="rgba(255, 232, 23, 0.3)" strokeWidth="1" />
                  <text y="36" fill="#FFE817" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif" textAnchor="middle">
                    {node.metric}
                  </text>

                  {/* Number below */}
                  <text y="88" fill="#54545C" fontSize="11" fontWeight="500" fontFamily="Inter, sans-serif" textAnchor="middle">{node.num}</text>
                </g>
              );
            })}

            {/* Perimeter labels */}
            <text x="850" y="450" fill="#8B8B95" fontSize="9" fontWeight="600" fontFamily="Inter, sans-serif" letterSpacing="0.22em" textAnchor="end">RADIUS · 1 METRO</text>
            <text x="450" y="876" fill="#8B8B95" fontSize="9" fontWeight="600" fontFamily="Inter, sans-serif" letterSpacing="0.22em" textAnchor="middle">ENGAGEMENT · 24 MO AVG</text>

            {/* Corner reticles */}
            <CornerBracket x={24} y={24} />
            <CornerBracket x={876} y={24} flipX />
            <CornerBracket x={24} y={876} flipY />
            <CornerBracket x={876} y={876} flipX flipY />
          </svg>

          {/* Clickable overlay nodes — invisible links sitting on top of each SVG node */}
          {NODES.map((node) => {
            const p = nodePosition(node.angle);
            const x = (p.x / 900) * 100;
            const y = (p.y / 900) * 100;
            return (
              <Link
                key={`link-${node.slug}`}
                href={`/case-studies/${node.slug}`}
                className="flywheel-hotspot"
                style={{ left: `calc(${x}% - 9%)`, top: `calc(${y}% - 9%)` }}
                aria-label={`${node.client}, ${node.vertical}, ${node.metro}`}
              />
            );
          })}
        </div>

        {/* Mobile fallback list */}
        <ol className="the-work__list" aria-label="Case studies">
          {NODES.map((node) => (
            <li key={node.slug} className="the-work__list-item">
              <Link href={`/case-studies/${node.slug}`}>
                <span className="the-work__list-num">{node.num}</span>
                <span className="the-work__list-body">
                  <span className="the-work__list-label">{node.vertical} · {node.metro}</span>
                  <span className="the-work__list-client">{node.client}</span>
                  <span className="the-work__list-metric">{node.metric}</span>
                </span>
                <span className="the-work__list-arrow" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ol>

        <p className="the-work__quote">
          Each firm receives exclusive territory rights for their metro and vertical. We don&apos;t dilute results across competitors in the same market.
        </p>
      </div>
    </section>
  );
}
