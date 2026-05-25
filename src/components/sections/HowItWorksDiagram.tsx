"use client";

// HOW IT WORKS DIAGRAM
// 3-pillar engineered visualization. Hand-coded 1200x500 SVG.
// Pillar 1: 5-row search result stack with #1 highlighted
// Pillar 2: 4-bar CTR chart with percentages 35/17/9/4
// Pillar 3: 3-section conversion funnel
// Connecting flow arrows between pillars with animated data pulses
// All elements respect prefers-reduced-motion at the CSS level.

function CornerBracket({ x, y, flipX = false, flipY = false }: { x: number; y: number; flipX?: boolean; flipY?: boolean }) {
  const sx = flipX ? -1 : 1;
  const sy = flipY ? -1 : 1;
  return (
    <g transform={`translate(${x},${y}) scale(${sx},${sy})`}>
      <path d="M 0 16 L 0 0 L 16 0" stroke="#6EF06E" strokeWidth="1.5" fill="none" opacity="0.6" strokeLinecap="round" />
    </g>
  );
}

// ============== PILLAR 1: RANK ==============
function RankPillar() {
  const ROWS = [
    { isTop: true, position: "1", title: 200, snippet: 160, fill: "rgba(110, 240, 110, 0.12)", border: "#6EF06E", borderW: 1.5, titleOp: 0.85, snipOp: 0.5 },
    { isTop: false, position: "2", title: 180, snippet: 140, fill: "rgba(255, 255, 255, 0.03)", border: "rgba(255, 255, 255, 0.06)", borderW: 1, titleOp: 0.4, snipOp: 0.2 },
    { isTop: false, position: "3", title: 170, snippet: 130, fill: "rgba(255, 255, 255, 0.03)", border: "rgba(255, 255, 255, 0.06)", borderW: 1, titleOp: 0.35, snipOp: 0.18 },
    { isTop: false, position: "4", title: 160, snippet: 120, fill: "rgba(255, 255, 255, 0.03)", border: "rgba(255, 255, 255, 0.06)", borderW: 1, titleOp: 0.3, snipOp: 0.15 },
    { isTop: false, position: "5", title: 150, snippet: 110, fill: "rgba(255, 255, 255, 0.03)", border: "rgba(255, 255, 255, 0.06)", borderW: 1, titleOp: 0.25, snipOp: 0.12 },
  ];

  return (
    <g transform="translate(60, 80)">
      <text x="140" y="0" fill="#6EF06E" fontSize="14" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="0.12em" textAnchor="middle">
        01 — RANK
      </text>

      {/* 5-row result stack */}
      {ROWS.map((row, i) => {
        const y = 24 + i * 40;
        return (
          <g key={`rank-row-${i}`} transform={`translate(0, ${y})`}>
            <rect x="0" y="0" width="280" height="32" rx="6" fill={row.fill} stroke={row.border} strokeWidth={row.borderW} />
            {/* Position pip */}
            <circle cx="20" cy="16" r="9" fill={row.isTop ? "#6EF06E" : "rgba(255, 255, 255, 0.08)"} stroke={row.isTop ? "none" : "rgba(255, 255, 255, 0.15)"} strokeWidth="1" />
            <text x="20" y="20" fill={row.isTop ? "#0A0A0F" : "rgba(255, 255, 255, 0.6)"} fontSize="10" fontWeight="800" fontFamily="Inter, sans-serif" textAnchor="middle">
              {row.position}
            </text>
            {/* Title line */}
            <rect x="38" y="9" width={row.title} height="5" rx="1" fill="rgba(255, 255, 255, 0.8)" opacity={row.titleOp} />
            {/* Snippet line */}
            <rect x="38" y="19" width={row.snippet} height="3.5" rx="1" fill="rgba(255, 255, 255, 0.6)" opacity={row.snipOp} />
            {/* #1 badge on top row */}
            {row.isTop && (
              <g transform="translate(248, 6)">
                <rect x="0" y="0" width="26" height="20" rx="10" fill="#6EF06E" />
                <text x="13" y="14" fill="#0A0A0F" fontSize="11" fontWeight="800" fontFamily="Inter, sans-serif" textAnchor="middle">
                  #1
                </text>
              </g>
            )}
          </g>
        );
      })}

      {/* Soft glow below #1 row */}
      <ellipse cx="140" cy="60" rx="120" ry="8" fill="#6EF06E" opacity="0.12" />

      {/* Title + body below stack */}
      <text x="140" y="260" fill="#FAFAF7" fontSize="16" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle" letterSpacing="-0.012em">
        Rank #1 across every query.
      </text>
      <foreignObject x="0" y="276" width="280" height="80">
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", lineHeight: "1.55", color: "#8B8B95", textAlign: "center" }}>
          We engineer first-position rankings on Google, ChatGPT, Perplexity, and Gemini.
        </div>
      </foreignObject>
    </g>
  );
}

// ============== PILLAR 2: CAPTURE ==============
function CapturePillar() {
  const BARS = [
    { pos: "1", pct: "35%", height: 200, fill: "#6EF06E", labelColor: "#6EF06E" },
    { pos: "2", pct: "17%", height: 100, fill: "rgba(255, 255, 255, 0.4)", labelColor: "rgba(255, 255, 255, 0.7)" },
    { pos: "3", pct: "9%", height: 50, fill: "rgba(255, 255, 255, 0.25)", labelColor: "rgba(255, 255, 255, 0.55)" },
    { pos: "4", pct: "4%", height: 25, fill: "rgba(255, 255, 255, 0.15)", labelColor: "rgba(255, 255, 255, 0.4)" },
  ];
  const BASELINE_Y = 280;
  const BAR_W = 50;
  const BAR_SPACING = 80;
  const BARS_LEFT = 460;

  return (
    <g>
      <text x="600" y="80" fill="#6EF06E" fontSize="14" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="0.12em" textAnchor="middle">
        02 — CAPTURE
      </text>

      {/* Baseline */}
      <line x1={BARS_LEFT - 14} y1={BASELINE_Y} x2={BARS_LEFT + BAR_SPACING * 4} y2={BASELINE_Y} stroke="rgba(255, 255, 255, 0.18)" strokeWidth="1" />

      {/* Y-axis hairline */}
      <line x1={BARS_LEFT - 14} y1={104} x2={BARS_LEFT - 14} y2={BASELINE_Y} stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />

      {/* Y-axis ticks and gridlines */}
      <line x1={BARS_LEFT - 20} y1={104} x2={BARS_LEFT - 8} y2={104} stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
      <text x={BARS_LEFT - 24} y={108} fill="rgba(255, 255, 255, 0.4)" fontSize="9" fontWeight="600" fontFamily="Inter, sans-serif" textAnchor="end">
        40%
      </text>
      <line x1={BARS_LEFT - 16} y1={148} x2={BARS_LEFT - 8} y2={148} stroke="rgba(255, 255, 255, 0.1)" strokeWidth="0.8" />
      <text x={BARS_LEFT - 24} y={152} fill="rgba(255, 255, 255, 0.3)" fontSize="9" fontWeight="500" fontFamily="Inter, sans-serif" textAnchor="end">
        30%
      </text>
      <line x1={BARS_LEFT - 16} y1={192} x2={BARS_LEFT - 8} y2={192} stroke="rgba(255, 255, 255, 0.1)" strokeWidth="0.8" />
      <text x={BARS_LEFT - 24} y={196} fill="rgba(255, 255, 255, 0.3)" fontSize="9" fontWeight="500" fontFamily="Inter, sans-serif" textAnchor="end">
        20%
      </text>
      <line x1={BARS_LEFT - 16} y1={236} x2={BARS_LEFT - 8} y2={236} stroke="rgba(255, 255, 255, 0.1)" strokeWidth="0.8" />
      <text x={BARS_LEFT - 24} y={240} fill="rgba(255, 255, 255, 0.3)" fontSize="9" fontWeight="500" fontFamily="Inter, sans-serif" textAnchor="end">
        10%
      </text>

      {/* Faint horizontal gridlines */}
      <line x1={BARS_LEFT - 14} y1={148} x2={BARS_LEFT + BAR_SPACING * 4} y2={148} stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.5" strokeDasharray="2 4" />
      <line x1={BARS_LEFT - 14} y1={192} x2={BARS_LEFT + BAR_SPACING * 4} y2={192} stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.5" strokeDasharray="2 4" />
      <line x1={BARS_LEFT - 14} y1={236} x2={BARS_LEFT + BAR_SPACING * 4} y2={236} stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.5" strokeDasharray="2 4" />

      {BARS.map((b, i) => {
        const x = BARS_LEFT + i * BAR_SPACING;
        const y = BASELINE_Y - b.height;
        return (
          <g key={`capture-bar-${i}`}>
            {/* % label above bar */}
            <text x={x + BAR_W / 2} y={y - 10} fill={b.labelColor} fontSize="14" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle">
              {b.pct}
            </text>
            {/* Bar */}
            <rect x={x} y={y} width={BAR_W} height={b.height} rx="2" fill={b.fill} />
            {/* Position number below */}
            <text x={x + BAR_W / 2} y={BASELINE_Y + 18} fill="rgba(255, 255, 255, 0.5)" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif" textAnchor="middle" letterSpacing="0.06em">
              #{b.pos}
            </text>
          </g>
        );
      })}

      {/* Annotation: a thin curved arrow from bar 4 pointing back to "your position?" */}
      <g opacity="0.45">
        <path d="M 800 250 Q 820 240 810 215" stroke="#6EF06E" strokeWidth="1" fill="none" strokeDasharray="3 3" strokeLinecap="round" />
        <text x="816" y="208" fill="#6EF06E" fontSize="9" fontWeight="600" fontFamily="Inter, sans-serif" letterSpacing="0.12em">
          your position?
        </text>
      </g>

      {/* Title + body */}
      <text x="600" y="350" fill="#FAFAF7" fontSize="16" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle" letterSpacing="-0.012em">
        Capture the click before competitors can.
      </text>
      <foreignObject x="460" y="366" width="280" height="80">
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", lineHeight: "1.55", color: "#8B8B95", textAlign: "center" }}>
          Position 1 wins 35% of clicks. Position 4 wins 4%. Position determines volume.
        </div>
      </foreignObject>
    </g>
  );
}

// ============== PILLAR 3: CONVERT ==============
function ConvertPillar() {
  return (
    <g>
      <text x="1000" y="80" fill="#6EF06E" fontSize="14" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="0.12em" textAnchor="middle">
        03 — CONVERT
      </text>

      {/* Funnel: 3 trapezoidal sections */}
      {/* Top section, widest */}
      <polygon
        points="880,110 1120,110 1100,170 900,170"
        fill="rgba(255, 255, 255, 0.06)"
        stroke="rgba(255, 255, 255, 0.12)"
        strokeWidth="1"
      />
      <text x="1000" y="138" fill="#FAFAF7" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif" textAnchor="middle" letterSpacing="0.06em">
        10,000 SEARCHES
      </text>

      {/* Middle section */}
      <polygon
        points="900,176 1100,176 1070,236 930,236"
        fill="rgba(110, 240, 110, 0.08)"
        stroke="rgba(110, 240, 110, 0.2)"
        strokeWidth="1"
      />
      <text x="1000" y="204" fill="#FAFAF7" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif" textAnchor="middle" letterSpacing="0.06em">
        3,500 VISITS
      </text>

      {/* Bottom section, narrowest */}
      <polygon
        points="930,242 1070,242 1040,302 960,302"
        fill="rgba(110, 240, 110, 0.2)"
        stroke="rgba(110, 240, 110, 0.4)"
        strokeWidth="1.2"
      />
      <text x="1000" y="270" fill="#6EF06E" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle" letterSpacing="0.06em">
        210 CONSULTS
      </text>

      {/* Bottom triangle "spilling out" */}
      <polygon points="980,306 1020,306 980,332" fill="#6EF06E" />

      {/* Conversion percentage arrows */}
      <g opacity="0.6">
        <path d="M 1118 145 L 1140 175" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" fill="none" strokeLinecap="round" />
        <text x="1146" y="180" fill="rgba(255, 255, 255, 0.5)" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="0.08em">
          35%
        </text>
      </g>
      <g opacity="0.6">
        <path d="M 1095 210 L 1140 245" stroke="rgba(110, 240, 110, 0.4)" strokeWidth="1" fill="none" strokeLinecap="round" />
        <text x="1146" y="250" fill="#6EF06E" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="0.08em">
          6%
        </text>
      </g>

      {/* Title + body */}
      <text x="1000" y="376" fill="#FAFAF7" fontSize="16" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle" letterSpacing="-0.012em">
        Convert searchers into consultations.
      </text>
      <foreignObject x="860" y="392" width="280" height="80">
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", lineHeight: "1.55", color: "#8B8B95", textAlign: "center" }}>
          Our pages turn searchers into consultations. Every dollar attributed back to source.
        </div>
      </foreignObject>
    </g>
  );
}

// ============== CONNECTOR ARROWS BETWEEN PILLARS ==============
function ConnectorArrow({ x1, x2, y, gradId, pulseDelay }: { x1: number; x2: number; y: number; gradId: string; pulseDelay: number }) {
  const yMid = y - 12;
  // simple cubic curve
  const cp1x = x1 + (x2 - x1) * 0.3;
  const cp2x = x1 + (x2 - x1) * 0.7;
  return (
    <g>
      <defs>
        <linearGradient id={gradId} x1={x1} y1={y} x2={x2} y2={y} gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6EF06E" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#4D7FFF" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <path
        d={`M ${x1} ${y} C ${cp1x} ${yMid}, ${cp2x} ${yMid}, ${x2} ${y}`}
        stroke={`url(#${gradId})`}
        strokeWidth="1.5"
        strokeDasharray="4 4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d={`M ${x2 - 8} ${y - 5} L ${x2} ${y} L ${x2 - 8} ${y + 5}`}
        stroke="#4D7FFF"
        strokeOpacity="0.6"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle r="3" fill="#6EF06E">
        <animateMotion dur="3s" begin={`${pulseDelay}s`} repeatCount="indefinite" path={`M ${x1} ${y} C ${cp1x} ${yMid}, ${cp2x} ${yMid}, ${x2} ${y}`} />
        <animate
          attributeName="opacity"
          values="0;0.95;0.95;0"
          keyTimes="0;0.1;0.85;1"
          dur="3s"
          begin={`${pulseDelay}s`}
          repeatCount="indefinite"
        />
      </circle>
    </g>
  );
}

// ============== ROOT DIAGRAM ==============
export function HowItWorksDiagram() {
  return (
    <div className="how__panel">
      <div className="how__panel-grid tech-grid-bg" aria-hidden="true" />
      <div className="how__panel-spotlight" aria-hidden="true" />

      <svg viewBox="0 0 1200 500" className="how__diagram" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        {/* Pillars */}
        <RankPillar />
        <CapturePillar />
        <ConvertPillar />

        {/* Connector arrows between pillars */}
        <ConnectorArrow x1={350} x2={460} y={200} gradId="how-conn-1" pulseDelay={0} />
        <ConnectorArrow x1={830} x2={880} y={200} gradId="how-conn-2" pulseDelay={1.2} />

        {/* 4 corner reticle brackets on the panel */}
        <CornerBracket x={20} y={20} />
        <CornerBracket x={1180} y={20} flipX />
        <CornerBracket x={20} y={480} flipY />
        <CornerBracket x={1180} y={480} flipX flipY />

        {/* Subtle top measurement label */}
        <text x="600" y="14" fill="rgba(255, 255, 255, 0.25)" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="0.22em" textAnchor="middle">
          COMPOUND SYSTEM · 3 MOVEMENTS
        </text>

        {/* Bottom measurement bar with phase ticks */}
        <line x1="60" y1="490" x2="1140" y2="490" stroke="rgba(110, 240, 110, 0.12)" strokeWidth="0.5" />
        <line x1="200" y1="488" x2="200" y2="496" stroke="rgba(110, 240, 110, 0.4)" strokeWidth="1" strokeLinecap="round" />
        <line x1="600" y1="488" x2="600" y2="496" stroke="rgba(110, 240, 110, 0.4)" strokeWidth="1" strokeLinecap="round" />
        <line x1="1000" y1="488" x2="1000" y2="496" stroke="rgba(110, 240, 110, 0.4)" strokeWidth="1" strokeLinecap="round" />

        {/* Side spec labels — small "DATA LIVE" indicators */}
        <g transform="translate(60, 460)">
          <circle cx="0" cy="0" r="3" fill="#6EF06E" opacity="0.6">
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
          <text x="10" y="4" fill="rgba(255, 255, 255, 0.45)" fontSize="9" fontWeight="600" fontFamily="Inter, sans-serif" letterSpacing="0.18em">
            DATA · LIVE
          </text>
        </g>

        <g transform="translate(1140, 460)">
          <text x="-10" y="4" fill="rgba(255, 255, 255, 0.45)" fontSize="9" fontWeight="600" fontFamily="Inter, sans-serif" letterSpacing="0.18em" textAnchor="end">
            ATTRIBUTED · USD
          </text>
          <circle cx="0" cy="0" r="3" fill="#4D7FFF" opacity="0.7" />
        </g>

        {/* Pillar separator hairlines, very subtle */}
        <line x1="420" y1="80" x2="420" y2="430" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.5" strokeDasharray="2 8" />
        <line x1="840" y1="80" x2="840" y2="430" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.5" strokeDasharray="2 8" />

        {/* Pillar phase tick labels under the bottom bar */}
        <text x="200" y="510" fill="rgba(255, 255, 255, 0.35)" fontSize="9" fontWeight="600" fontFamily="Inter, sans-serif" letterSpacing="0.16em" textAnchor="middle">
          T+0
        </text>
        <text x="600" y="510" fill="rgba(255, 255, 255, 0.35)" fontSize="9" fontWeight="600" fontFamily="Inter, sans-serif" letterSpacing="0.16em" textAnchor="middle">
          T+1
        </text>
        <text x="1000" y="510" fill="rgba(255, 255, 255, 0.35)" fontSize="9" fontWeight="600" fontFamily="Inter, sans-serif" letterSpacing="0.16em" textAnchor="middle">
          T+2
        </text>
      </svg>
    </div>
  );
}
