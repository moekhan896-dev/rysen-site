const STROKE = "#FAFAF7";
const ACCENT = "#FFE817";

function AuditIcon() {
  return (
    <svg viewBox="0 0 50 50" fill="none" width="50" height="50" aria-hidden="true">
      <line x1="6" y1="14" x2="32" y2="14" stroke={STROKE} strokeWidth="0.6" opacity="0.4" />
      <line x1="6" y1="22" x2="32" y2="22" stroke={STROKE} strokeWidth="0.6" opacity="0.4" />
      <line x1="6" y1="30" x2="32" y2="30" stroke={STROKE} strokeWidth="0.6" opacity="0.4" />
      <line x1="14" y1="6" x2="14" y2="38" stroke={STROKE} strokeWidth="0.6" opacity="0.4" />
      <line x1="22" y1="6" x2="22" y2="38" stroke={STROKE} strokeWidth="0.6" opacity="0.4" />
      <circle cx="28" cy="22" r="8" stroke={STROKE} strokeWidth="1.5" fill="rgba(255, 232, 23, 0.08)" />
      <line x1="34" y1="28" x2="42" y2="36" stroke={STROKE} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="28" cy="22" r="2" fill={ACCENT} />
    </svg>
  );
}

function StrategyIcon() {
  return (
    <svg viewBox="0 0 50 50" fill="none" width="50" height="50" aria-hidden="true">
      <rect x="8" y="10" width="34" height="30" stroke={STROKE} strokeWidth="1.5" fill="none" />
      <line x1="8" y1="18" x2="42" y2="18" stroke={STROKE} strokeWidth="0.8" />
      <line x1="14" y1="26" x2="22" y2="26" stroke={STROKE} strokeWidth="0.8" />
      <line x1="14" y1="32" x2="26" y2="32" stroke={STROKE} strokeWidth="0.8" />
      <path d="M 28 30 L 30 32 L 34 28" stroke={ACCENT} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BuildIcon() {
  return (
    <svg viewBox="0 0 50 50" fill="none" width="50" height="50" aria-hidden="true">
      <rect x="6" y="20" width="12" height="20" stroke={STROKE} strokeWidth="1.5" fill="none" />
      <rect x="20" y="10" width="12" height="30" stroke={STROKE} strokeWidth="1.5" fill="rgba(255, 232, 23, 0.1)" />
      <rect x="34" y="16" width="10" height="24" stroke={STROKE} strokeWidth="1.5" fill="none" />
      <line x1="6" y1="40" x2="44" y2="40" stroke={ACCENT} strokeWidth="1.5" />
    </svg>
  );
}

function CompoundIcon() {
  return (
    <svg viewBox="0 0 50 50" fill="none" width="50" height="50" aria-hidden="true">
      <line x1="6" y1="40" x2="44" y2="40" stroke={STROKE} strokeWidth="0.6" opacity="0.4" />
      <line x1="6" y1="10" x2="6" y2="40" stroke={STROKE} strokeWidth="0.6" opacity="0.4" />
      <path d="M 6 38 Q 14 36 20 30 T 32 18 T 44 8" stroke={ACCENT} strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="44" cy="8" r="3" fill={ACCENT} />
    </svg>
  );
}

const PHASES = [
  { num: "0.1", title: "Audit", duration: "DAYS 1–30", body: "Comprehensive analysis of your current visibility and the path to #1.", Icon: AuditIcon },
  { num: "0.2", title: "Strategy", duration: "DAYS 31–45", body: "We build a custom 12-month plan with attributed targets.", Icon: StrategyIcon },
  { num: "0.3", title: "Build", duration: "DAYS 46–120", body: "Execution begins. Content, technical, GBP, reviews, schema.", Icon: BuildIcon },
  { num: "0.4", title: "Compound", duration: "ONGOING", body: "Velocity engineered. Results compound weekly across queries.", Icon: CompoundIcon },
] as const;

function CornerBracket({ x, y, flipX = false, flipY = false }: { x: number; y: number; flipX?: boolean; flipY?: boolean }) {
  const sx = flipX ? -1 : 1;
  const sy = flipY ? -1 : 1;
  return (
    <g transform={`translate(${x},${y}) scale(${sx},${sy})`}>
      <path d="M 0 8 L 0 0 L 8 0" stroke={ACCENT} strokeWidth="1.2" fill="none" opacity="0.4" strokeLinecap="round" />
    </g>
  );
}

export function TheProcess() {
  return (
    <section className="the-process" aria-label="Process">
      <div className="the-process__inner">
        <div className="the-work__heading-row">
          <span className="how__bar" aria-hidden="true" />
          <p className="how__label">Process</p>
        </div>
        <h2 className="how__heading">How an engagement begins.</h2>

        <div className="process-timeline-wrap">
          <div className="process-timeline-bg tech-grid-bg" aria-hidden="true" />

          <svg viewBox="0 0 1200 300" className="process-timeline" aria-hidden="true">
            <defs>
              <linearGradient id="proc-track" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#FFE817" stopOpacity="0.8" />
                <stop offset="35%" stopColor="#FFE817" stopOpacity="0.5" />
                <stop offset="65%" stopColor="#4D7FFF" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#4D7FFF" stopOpacity="0.7" />
              </linearGradient>
            </defs>

            {/* Track */}
            <line x1="120" y1="150" x2="1080" y2="150" stroke="url(#proc-track)" strokeWidth="2" />

            {/* Track pulse */}
            <circle r="3.5" fill={ACCENT} opacity="0.9">
              <animate attributeName="cx" values="120;1080" dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" />
              <set attributeName="cy" to="150" />
            </circle>

            {PHASES.map((phase, i) => {
              const x = 120 + (i * 960) / 3;
              return (
                <g key={phase.num} transform={`translate(${x}, 150)`}>
                  {/* Node */}
                  <circle r="20" fill="#14141C" stroke={ACCENT} strokeWidth="1.5" />
                  <circle r="6" fill={ACCENT} />

                  {/* Reticle brackets around node */}
                  <g transform="translate(-30, -30)">
                    <CornerBracket x={0} y={0} />
                  </g>
                  <g transform="translate(30, -30)">
                    <CornerBracket x={0} y={0} flipX />
                  </g>
                  <g transform="translate(-30, 30)">
                    <CornerBracket x={0} y={0} flipY />
                  </g>
                  <g transform="translate(30, 30)">
                    <CornerBracket x={0} y={0} flipX flipY />
                  </g>

                  {/* Top label */}
                  <text y="-92" fill="#FAFAF7" fontSize="13" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle">
                    {phase.num} · {phase.title}
                  </text>

                  {/* Duration */}
                  <text y="-72" fill={ACCENT} fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle" letterSpacing="0.18em">
                    {phase.duration}
                  </text>

                  {/* Body */}
                  <foreignObject x="-110" y="44" width="220" height="60">
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", lineHeight: "1.45", color: "#8B8B95", textAlign: "center" }}>
                      {phase.body}
                    </div>
                  </foreignObject>
                </g>
              );
            })}

            {/* Icons above each node */}
            {PHASES.map((phase, i) => {
              const x = 120 + (i * 960) / 3;
              const Icon = phase.Icon;
              return (
                <foreignObject key={`icon-${phase.num}`} x={x - 25} y={28} width="50" height="50">
                  <Icon />
                </foreignObject>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}
