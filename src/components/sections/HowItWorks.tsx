// 3-pillar illustrated diagram showing Rank → Capture → Convert
// Each pillar is a custom SVG composition. All on a dark recessed panel
// with corner reticles and data-pulse animations along connecting arrows.

function CornerBracket({ x, y, flipX = false, flipY = false }: { x: number; y: number; flipX?: boolean; flipY?: boolean }) {
  const sx = flipX ? -1 : 1;
  const sy = flipY ? -1 : 1;
  return (
    <g transform={`translate(${x},${y}) scale(${sx},${sy})`}>
      <path d="M 0 12 L 0 0 L 12 0" stroke="#FFE817" strokeWidth="1.5" fill="none" opacity="0.45" strokeLinecap="round" />
    </g>
  );
}

// Pillar 1: Rank — stacked search results with #1 highlighted
function RankPillar() {
  return (
    <g transform="translate(60, 60)">
      <text x="0" y="-20" fill="#FFE817" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="0.16em">01 — RANK</text>

      {/* Result rows */}
      {[0, 1, 2, 3, 4].map((i) => {
        const y = i * 36;
        const isTop = i === 0;
        return (
          <g key={i} transform={`translate(0, ${y})`}>
            <rect
              x="0"
              y="0"
              width="280"
              height="30"
              rx="6"
              fill={isTop ? "rgba(255, 232, 23, 0.08)" : "rgba(255, 255, 255, 0.02)"}
              stroke={isTop ? "#FFE817" : "rgba(255, 255, 255, 0.08)"}
              strokeWidth={isTop ? "1.5" : "1"}
            />
            {isTop && (
              <>
                <rect x="244" y="6" width="28" height="18" rx="9" fill="#FFE817" />
                <text x="258" y="18" fill="#0A0A0F" fontSize="10" fontWeight="800" fontFamily="Inter, sans-serif" textAnchor="middle">#1</text>
              </>
            )}
            <rect x="10" y="9" width="6" height="6" rx="3" fill={isTop ? "#FFE817" : "rgba(255, 255, 255, 0.18)"} />
            <rect x="22" y="8" width={isTop ? 180 : 140} height="4" rx="1" fill={isTop ? "rgba(250, 250, 247, 0.9)" : "rgba(250, 250, 247, 0.25)"} />
            <rect x="22" y="16" width={isTop ? 140 : 100} height="3" rx="1" fill={isTop ? "rgba(139, 139, 149, 0.7)" : "rgba(139, 139, 149, 0.3)"} />
          </g>
        );
      })}

      {/* Subtle "glow" beneath top row */}
      <ellipse cx="140" cy="34" rx="120" ry="8" fill="#FFE817" opacity="0.12" filter="blur(6px)" />

      {/* Body copy below */}
      <text x="0" y="220" fill="#FAFAF7" fontSize="14" fontWeight="600" fontFamily="Inter, sans-serif">Rank #1 across every query.</text>
      <foreignObject x="0" y="232" width="280" height="60">
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", lineHeight: "1.5", color: "#8B8B95", fontWeight: 400 }}>
          We engineer first-position rankings on Google, ChatGPT, Perplexity, and Gemini.
        </div>
      </foreignObject>
    </g>
  );
}

// Pillar 2: Capture — CTR bar chart
function CapturePillar() {
  const bars = [
    { pct: "35%", height: 160, fill: "#FFE817", labelOpacity: 1 },
    { pct: "17%", height: 78, fill: "#FFE817", labelOpacity: 0.55, opacity: 0.5 },
    { pct: "9%", height: 42, fill: "#FFE817", labelOpacity: 0.35, opacity: 0.3 },
    { pct: "4%", height: 18, fill: "#FFE817", labelOpacity: 0.25, opacity: 0.2 },
  ];
  return (
    <g transform="translate(460, 60)">
      <text x="0" y="-20" fill="#FFE817" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="0.16em">02 — CAPTURE</text>

      {/* Y-axis hairline */}
      <line x1="0" y1="0" x2="0" y2="180" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />

      {/* Bars + labels */}
      {bars.map((b, i) => {
        const x = i * 60 + 12;
        return (
          <g key={i}>
            {/* % label above bar */}
            <text
              x={x + 20}
              y={180 - b.height - 8}
              fill="#FAFAF7"
              fontSize="13"
              fontWeight="700"
              fontFamily="Inter, sans-serif"
              textAnchor="middle"
              opacity={b.labelOpacity}
            >
              {b.pct}
            </text>
            <rect x={x} y={180 - b.height} width="40" height={b.height} fill={b.fill} opacity={b.opacity ?? 1} rx="2" />
            <text
              x={x + 20}
              y="200"
              fill="#54545C"
              fontSize="10"
              fontWeight="600"
              fontFamily="Inter, sans-serif"
              textAnchor="middle"
              letterSpacing="0.1em"
            >
              #{i + 1}
            </text>
          </g>
        );
      })}

      {/* X-axis hairline */}
      <line x1="0" y1="180" x2="260" y2="180" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />

      {/* Body copy */}
      <text x="0" y="220" fill="#FAFAF7" fontSize="14" fontWeight="600" fontFamily="Inter, sans-serif">Capture the click.</text>
      <foreignObject x="0" y="232" width="280" height="60">
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", lineHeight: "1.5", color: "#8B8B95" }}>
          Position 1 wins 35% of clicks. Position 4 wins 4%. The position determines the volume.
        </div>
      </foreignObject>
    </g>
  );
}

// Pillar 3: Convert — funnel
function ConvertPillar() {
  return (
    <g transform="translate(860, 60)">
      <text x="0" y="-20" fill="#FFE817" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="0.16em">03 — CONVERT</text>

      {/* Funnel polygons (3 stacked trapezoids narrowing) */}
      <polygon points="0,10 260,10 240,55 20,55" fill="rgba(255, 232, 23, 0.06)" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" />
      <polygon points="20,65 240,65 200,110 60,110" fill="rgba(255, 232, 23, 0.1)" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" />
      <polygon points="60,120 200,120 160,165 100,165" fill="rgba(255, 232, 23, 0.2)" stroke="#FFE817" strokeWidth="1.5" />
      {/* Bottom yellow triangle (the consultation drop) */}
      <polygon points="100,170 160,170 130,205" fill="#FFE817" />

      {/* Labels right of each level */}
      <text x="270" y="36" fill="#FAFAF7" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">Searches</text>
      <text x="270" y="50" fill="#54545C" fontSize="10" fontWeight="500" fontFamily="Inter, sans-serif">10,000/mo</text>

      <text x="270" y="88" fill="#FAFAF7" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">Visits</text>
      <text x="270" y="102" fill="#54545C" fontSize="10" fontWeight="500" fontFamily="Inter, sans-serif">3,500/mo</text>

      <text x="270" y="142" fill="#FAFAF7" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">Consultations</text>
      <text x="270" y="156" fill="#FFE817" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">420/mo</text>

      {/* Body copy */}
      <text x="0" y="245" fill="#FAFAF7" fontSize="14" fontWeight="600" fontFamily="Inter, sans-serif">Convert into clients.</text>
      <foreignObject x="0" y="257" width="280" height="60">
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", lineHeight: "1.5", color: "#8B8B95" }}>
          Our pages turn searchers into consultations. Every dollar attributed.
        </div>
      </foreignObject>
    </g>
  );
}

// Connector arrows with data pulses
function ConnectorArrow({ x }: { x: number }) {
  return (
    <g transform={`translate(${x}, 130)`}>
      <defs>
        <linearGradient id={`conn-${x}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFE817" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#4D7FFF" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <line x1="0" y1="0" x2="80" y2="0" stroke={`url(#conn-${x})`} strokeWidth="1.5" strokeDasharray="4 4" />
      <path d="M 72 -5 L 82 0 L 72 5" stroke="#4D7FFF" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      <circle r="2.5" fill="#FFE817" opacity="0.9">
        <animate attributeName="cx" values="0;80" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.9;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </g>
  );
}

export function HowItWorks() {
  return (
    <section className="how" aria-label="How it works">
      <div className="how__inner">
        <div className="how__heading-row">
          <span className="how__bar" aria-hidden="true" />
          <p className="how__label">How it works</p>
        </div>
        <h2 className="how__heading">Three movements. Compounded weekly.</h2>
        <p className="how__sub">
          Every engagement runs through the same three-step compound system. Across every query that matters to your business.
        </p>

        <div className="how__panel">
          <div className="how__panel-grid tech-grid-bg" aria-hidden="true" />
          <div className="how__panel-spotlight" aria-hidden="true" />

          <svg viewBox="0 0 1200 400" className="how__diagram" aria-hidden="true">
            {/* Pillars */}
            <RankPillar />
            <ConnectorArrow x={360} />
            <CapturePillar />
            <ConnectorArrow x={760} />
            <ConvertPillar />

            {/* Corner reticles */}
            <CornerBracket x={20} y={20} />
            <CornerBracket x={1180} y={20} flipX />
            <CornerBracket x={20} y={380} flipY />
            <CornerBracket x={1180} y={380} flipX flipY />
          </svg>
        </div>
      </div>
    </section>
  );
}
