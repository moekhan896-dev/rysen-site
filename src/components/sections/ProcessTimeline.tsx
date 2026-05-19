"use client";

// Horizontal process timeline with 4 phases.
// Hand-coded SVG 1200x360. Each phase has illustration + label + duration + description.
// Animated data pulse runs along the gradient track.

const ST = "rgba(255, 255, 255, 0.4)";
const STM = "rgba(255, 255, 255, 0.6)";
const ACCENT = "#FFE817";

function CornerBracket({ x, y, flipX = false, flipY = false }: { x: number; y: number; flipX?: boolean; flipY?: boolean }) {
  const sx = flipX ? -1 : 1;
  const sy = flipY ? -1 : 1;
  return (
    <g transform={`translate(${x},${y}) scale(${sx},${sy})`}>
      <path d="M 0 12 L 0 0 L 12 0" stroke={ACCENT} strokeWidth="1" fill="none" opacity="0.6" strokeLinecap="round" />
    </g>
  );
}

// === Phase illustrations (positioned at phase node centers) ===

function AuditIllustration({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g transform={`translate(${cx - 25}, ${cy - 25})`}>
      {/* 4x4 grid of dots */}
      <circle cx="8" cy="8" r="1.2" fill={STM} />
      <circle cx="20" cy="8" r="1.2" fill={STM} />
      <circle cx="32" cy="8" r="1.2" fill={STM} />
      <circle cx="44" cy="8" r="1.2" fill={STM} />
      <circle cx="8" cy="20" r="1.2" fill={STM} />
      <circle cx="20" cy="20" r="1.2" fill={STM} />
      <circle cx="32" cy="20" r="1.2" fill={STM} />
      <circle cx="44" cy="20" r="1.2" fill={STM} />
      <circle cx="8" cy="32" r="1.2" fill={STM} />
      <circle cx="20" cy="32" r="1.2" fill={STM} />
      <circle cx="32" cy="32" r="1.2" fill={STM} />
      <circle cx="44" cy="32" r="1.2" fill={STM} />
      <circle cx="8" cy="44" r="1.2" fill={STM} />
      <circle cx="20" cy="44" r="1.2" fill={STM} />
      <circle cx="32" cy="44" r="1.2" fill={STM} />
      <circle cx="44" cy="44" r="1.2" fill={STM} />
      {/* Magnifying glass */}
      <circle cx="28" cy="28" r="14" stroke={ACCENT} strokeWidth="1.8" fill="none" />
      <line x1="38" y1="38" x2="48" y2="48" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" />
      <circle cx="28" cy="28" r="2.5" fill={ACCENT} />
    </g>
  );
}

function StrategyIllustration({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g transform={`translate(${cx - 25}, ${cy - 25}) rotate(-3, 25, 25)`}>
      <rect x="6" y="8" width="38" height="34" stroke={STM} strokeWidth="1.5" fill="none" />
      <line x1="6" y1="18" x2="44" y2="18" stroke={STM} strokeWidth="0.6" opacity="0.5" />
      <line x1="6" y1="28" x2="44" y2="28" stroke={STM} strokeWidth="0.6" opacity="0.5" />
      <line x1="6" y1="38" x2="44" y2="38" stroke={STM} strokeWidth="0.6" opacity="0.5" />
      <line x1="18" y1="8" x2="18" y2="42" stroke={STM} strokeWidth="0.6" opacity="0.5" />
      <line x1="32" y1="8" x2="32" y2="42" stroke={STM} strokeWidth="0.6" opacity="0.5" />
      <path d="M 10 22 L 13 25 L 16 20" stroke={STM} strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 24 32 L 27 35 L 30 30" stroke={ACCENT} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="4" y1="14" x2="6" y2="14" stroke={STM} strokeWidth="0.6" />
      <line x1="4" y1="24" x2="6" y2="24" stroke={STM} strokeWidth="0.6" />
      <line x1="4" y1="34" x2="6" y2="34" stroke={STM} strokeWidth="0.6" />
    </g>
  );
}

function BuildIllustration({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g transform={`translate(${cx - 25}, ${cy - 25})`}>
      <polygon points="8,16 14,8 22,8 26,16 22,24 14,24" stroke={STM} strokeWidth="1.4" fill="none" strokeLinejoin="round" />
      <rect x="30" y="8" width="14" height="14" stroke={STM} strokeWidth="1.4" fill="none" />
      <polygon points="14,42 24,42 19,30" stroke={STM} strokeWidth="1.4" fill="none" strokeLinejoin="round" />
      <line x1="22" y1="24" x2="25" y2="25" stroke={STM} strokeWidth="0.8" strokeDasharray="1 2" opacity="0.5" />
      <line x1="30" y1="22" x2="27" y2="24" stroke={STM} strokeWidth="0.8" strokeDasharray="1 2" opacity="0.5" />
      <line x1="24" y1="30" x2="26" y2="28" stroke={STM} strokeWidth="0.8" strokeDasharray="1 2" opacity="0.5" />
      <polygon points="32,28 44,28 32,40" fill={ACCENT} />
      <line x1="40" y1="44" x2="46" y2="38" stroke={STM} strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="40" cy="44" r="1.2" stroke={STM} strokeWidth="0.8" fill="none" />
    </g>
  );
}

function CompoundIllustration({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g transform={`translate(${cx - 25}, ${cy - 25})`}>
      <line x1="4" y1="44" x2="46" y2="44" stroke={STM} strokeWidth="0.6" opacity="0.6" />
      <line x1="4" y1="4" x2="4" y2="44" stroke={STM} strokeWidth="0.6" opacity="0.6" />
      <path d="M 6 42 Q 16 40 22 34 T 36 22 T 46 8" stroke={ACCENT} strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="6" cy="42" r="1.8" stroke={STM} strokeWidth="0.8" fill="#0A0A0F" />
      <circle cx="18" cy="38" r="1.8" stroke={STM} strokeWidth="0.8" fill="#0A0A0F" />
      <circle cx="28" cy="30" r="1.8" stroke={STM} strokeWidth="0.8" fill="#0A0A0F" />
      <circle cx="38" cy="18" r="1.8" stroke={STM} strokeWidth="0.8" fill="#0A0A0F" />
      <circle cx="46" cy="8" r="6" fill={ACCENT} opacity="0.2" />
      <circle cx="46" cy="8" r="3" fill={ACCENT} />
      <path d="M 46 8 L 43 6 M 46 8 L 48 11" stroke={ACCENT} strokeWidth="1" strokeLinecap="round" fill="none" />
    </g>
  );
}

type Phase = {
  num: string;
  title: string;
  duration: string;
  description: string;
  x: number;
  Illustration: (props: { cx: number; cy: number }) => React.JSX.Element;
};

const PHASES: ReadonlyArray<Phase> = [
  { num: "0.1", title: "Audit", duration: "DAYS 1–30", description: "Comprehensive analysis of your current visibility and the path to #1.", x: 200, Illustration: AuditIllustration },
  { num: "0.2", title: "Strategy", duration: "DAYS 31–45", description: "We build a custom 12-month plan with attributed targets.", x: 480, Illustration: StrategyIllustration },
  { num: "0.3", title: "Build", duration: "DAYS 46–120", description: "Execution begins. Content, technical, GBP, reviews, schema.", x: 760, Illustration: BuildIllustration },
  { num: "0.4", title: "Compound", duration: "ONGOING", description: "Velocity engineered. Results compound weekly across queries.", x: 1040, Illustration: CompoundIllustration },
];

// === Desktop horizontal timeline ===
export function ProcessTimeline() {
  return (
    <div className="process-timeline-wrap">
      <div className="process-timeline-bg tech-grid-bg" aria-hidden="true" />

      <svg viewBox="0 0 1200 360" className="process-timeline process-timeline--desktop" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <defs>
          <linearGradient id="proc-track" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFE817" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#FFE817" stopOpacity="0.5" />
            <stop offset="80%" stopColor="#4D7FFF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#4D7FFF" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Top measurement caption */}
        <text x="600" y="14" fill="rgba(255, 255, 255, 0.25)" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="0.22em" textAnchor="middle">
          ENGAGEMENT TIMELINE · 4 PHASES
        </text>

        {/* Main horizontal gradient track */}
        <line x1="120" y1="180" x2="1080" y2="180" stroke="url(#proc-track)" strokeWidth="2" strokeLinecap="round" />

        {/* Data pulse traveling along the track */}
        <circle r="4" fill={ACCENT}>
          <animate attributeName="cx" values="120;1080" dur="4s" repeatCount="indefinite" />
          <set attributeName="cy" to="180" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.95;1" dur="4s" repeatCount="indefinite" />
        </circle>

        {PHASES.map((phase) => (
          <g key={`proc-phase-${phase.num}`}>
            {/* Phase label */}
            <text x={phase.x} y="60" fill="#FAFAF7" fontSize="14" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle" letterSpacing="-0.012em">
              {phase.num} · {phase.title}
            </text>

            {/* Illustration */}
            <phase.Illustration cx={phase.x} cy={120} />

            {/* Duration label */}
            <text x={phase.x} y="160" fill={ACCENT} fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="0.16em" textAnchor="middle" opacity="0.85">
              {phase.duration}
            </text>

            {/* Node on track */}
            <circle cx={phase.x} cy="180" r="12" fill="#050507" stroke={ACCENT} strokeWidth="2" />
            <circle cx={phase.x} cy="180" r="4" fill={ACCENT} />

            {/* Reticle brackets around node */}
            <g transform={`translate(${phase.x - 18}, 162)`}>
              <CornerBracket x={0} y={0} />
            </g>
            <g transform={`translate(${phase.x + 18}, 162)`}>
              <CornerBracket x={0} y={0} flipX />
            </g>
            <g transform={`translate(${phase.x - 18}, 198)`}>
              <CornerBracket x={0} y={0} flipY />
            </g>
            <g transform={`translate(${phase.x + 18}, 198)`}>
              <CornerBracket x={0} y={0} flipX flipY />
            </g>

            {/* Description below track */}
            <foreignObject x={phase.x - 110} y="215" width="220" height="100">
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", lineHeight: "1.5", color: "rgba(255, 255, 255, 0.55)", textAlign: "center" }}>
                {phase.description}
              </div>
            </foreignObject>
          </g>
        ))}

        {/* Bottom caption */}
        <text x="600" y="346" fill="rgba(255, 255, 255, 0.3)" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="0.22em" textAnchor="middle">
          AUDIT · STRATEGY · BUILD · COMPOUND
        </text>

        {/* Side end markers on the track — small T-shaped terminators */}
        <line x1="120" y1="172" x2="120" y2="188" stroke={ACCENT} strokeWidth="1.2" opacity="0.6" strokeLinecap="round" />
        <line x1="1080" y1="172" x2="1080" y2="188" stroke="#4D7FFF" strokeWidth="1.2" opacity="0.6" strokeLinecap="round" />

        {/* Phase index dots between nodes (small unfilled markers showing intermediate progress) */}
        <circle cx="340" cy="180" r="2" fill={ACCENT} opacity="0.4" />
        <circle cx="620" cy="180" r="2" fill={ACCENT} opacity="0.4" />
        <circle cx="900" cy="180" r="2" fill={ACCENT} opacity="0.4" />

        {/* Edge meta labels: T+0 and T+OPEN */}
        <text x="120" y="208" fill="rgba(255, 255, 255, 0.4)" fontSize="9" fontWeight="600" fontFamily="Inter, sans-serif" letterSpacing="0.16em" textAnchor="middle">
          T+0
        </text>
        <text x="1080" y="208" fill="rgba(255, 255, 255, 0.4)" fontSize="9" fontWeight="600" fontFamily="Inter, sans-serif" letterSpacing="0.16em" textAnchor="middle">
          OPEN
        </text>

        {/* Left and right corner reticles around the whole panel */}
        <CornerBracket x={30} y={30} />
        <g transform="translate(1170, 30) scale(-1, 1)">
          <CornerBracket x={0} y={0} />
        </g>
        <g transform="translate(30, 330) scale(1, -1)">
          <CornerBracket x={0} y={0} />
        </g>
        <g transform="translate(1170, 330) scale(-1, -1)">
          <CornerBracket x={0} y={0} />
        </g>
      </svg>
    </div>
  );
}

// === Mobile vertical timeline ===
export function ProcessTimelineMobile() {
  return (
    <div className="process-timeline-mobile" aria-hidden="false">
      <div className="process-timeline-mobile__track" aria-hidden="true" />
      {PHASES.map((phase) => (
        <div key={`proc-m-${phase.num}`} className="process-timeline-mobile__phase">
          <div className="process-timeline-mobile__node">
            <svg width="50" height="50" viewBox="0 0 50 50" aria-hidden="true">
              <phase.Illustration cx={25} cy={25} />
            </svg>
          </div>
          <div className="process-timeline-mobile__body">
            <div className="process-timeline-mobile__head">
              <span className="process-timeline-mobile__num">{phase.num}</span>
              <span className="process-timeline-mobile__title">{phase.title}</span>
            </div>
            <span className="process-timeline-mobile__duration">{phase.duration}</span>
            <p className="process-timeline-mobile__desc">{phase.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
