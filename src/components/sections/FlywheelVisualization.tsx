"use client";

// THE FLYWHEEL VISUALIZATION
// Hand-coded 900x900 SVG. The Work section centerpiece.
// 7 layers:
//   1. Background environment (signal + electric blue radial glows)
//   2. Three concentric orbital rings (depth)
//   3. Machine plate (filled circle with inset shadow + 8 tick marks)
//   4. Six gradient spokes from hub to clients with animated data pulses
//   5. Center hub (outer glow + ring + inner inset + triangle + labels + scan arc)
//   6. Six client nodes, each with vertical icon + label + name + metric
//   7. Outer reticle accents, data labels (RADIUS, ENGAGEMENT)

import Link from "next/link";

type ClientNode = {
  num: string;
  slug: string;
  vertical: string;
  metro: string;
  client: string;
  metric: string;
  kind: "legal" | "medical" | "built";
  angle: number; // 0 = 12 o'clock, clockwise in degrees
  tone: "default" | "alt";
};

const CLIENTS: ReadonlyArray<ClientNode> = [
  { num: "01", slug: "aws-law-firm", vertical: "LEGAL", metro: "TAMPA", client: "AWS Law Firm", metric: "348 calls · 4 mo", kind: "legal", angle: 0, tone: "default" },
  { num: "02", slug: "slim-dental", vertical: "MEDICAL", metro: "CHICAGO", client: "Slim Dental", metric: "+186% calls", kind: "medical", angle: 60, tone: "alt" },
  { num: "03", slug: "hartman-dermatology", vertical: "MEDICAL", metro: "MIAMI", client: "Hartman Dermatology", metric: "38% AI cite", kind: "medical", angle: 120, tone: "default" },
  { num: "04", slug: "madison-clark", vertical: "BUILT BY US", metro: "AI PERSONA", client: "Madison Clark", metric: "100M views · 60d", kind: "built", angle: 180, tone: "alt" },
  { num: "05", slug: "tyler-family-law", vertical: "LEGAL", metro: "ATLANTA", client: "Tyler Family Law", metric: "169 calls · 6 mo", kind: "legal", angle: 240, tone: "default" },
  { num: "06", slug: "quattro-labs", vertical: "BUILT BY US", metro: "AUTO MEDIA", client: "Quattro Labs", metric: "150K followers", kind: "built", angle: 300, tone: "alt" },
];

const HUB_RADIUS = 90;
const HUB_OUTER_RING = 130;
const SPOKE_INNER = 90;
const SPOKE_OUTER = 245;
const CLIENT_ORBIT = 280;
const NODE_RADIUS = 70;

function clientPos(angle: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: 450 + CLIENT_ORBIT * Math.cos(rad),
    y: 450 + CLIENT_ORBIT * Math.sin(rad),
    cos: Math.cos(rad),
    sin: Math.sin(rad),
  };
}

const CLIENT_POSITIONS = CLIENTS.map((c) => ({ ...c, ...clientPos(c.angle) }));

// 8 tick marks at 45-degree intervals around the machine plate (radius 255-268)
const PLATE_TICKS = Array.from({ length: 8 }).map((_, i) => {
  const angle = i * 45;
  const rad = ((angle - 90) * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  return {
    x1: 450 + cos * 255,
    y1: 450 + sin * 255,
    x2: 450 + cos * 268,
    y2: 450 + sin * 268,
  };
});

// ---- Vertical icons (16x16 viewBox, centered on origin) ----
function LegalIcon({ cx, cy }: { cx: number; cy: number }) {
  // Gavel: head as horizontal bar, handle below
  return (
    <g transform={`translate(${cx - 8}, ${cy - 8})`} aria-hidden="true">
      <rect x="2" y="3" width="12" height="3" fill="#6EF06E" rx="0.5" />
      <line x1="4" y1="6" x2="12" y2="14" stroke="#6EF06E" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="0" y1="3" x2="3" y2="0" stroke="#6EF06E" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="13" y1="3" x2="16" y2="0" stroke="#6EF06E" strokeWidth="1.2" strokeLinecap="round" />
    </g>
  );
}

function MedicalIcon({ cx, cy }: { cx: number; cy: number }) {
  // Caduceus-lite: vertical staff + two intertwined curves + small wing accent
  return (
    <g transform={`translate(${cx - 8}, ${cy - 8})`} aria-hidden="true">
      <line x1="8" y1="0" x2="8" y2="16" stroke="#6EF06E" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 8 3 Q 4 5 8 8 Q 12 11 8 13" stroke="#6EF06E" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M 8 3 Q 12 5 8 8 Q 4 11 8 13" stroke="#6EF06E" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M 5 2 L 8 0 L 11 2 L 8 4 Z" fill="#6EF06E" />
    </g>
  );
}

function BuiltIcon({ cx, cy }: { cx: number; cy: number }) {
  // 4-pointed sparkle
  return (
    <g transform={`translate(${cx - 8}, ${cy - 8})`} aria-hidden="true">
      <path d="M 8 0 L 9.5 6.5 L 16 8 L 9.5 9.5 L 8 16 L 6.5 9.5 L 0 8 L 6.5 6.5 Z" fill="#6EF06E" />
    </g>
  );
}

function VerticalIcon({ kind, cx, cy }: { kind: ClientNode["kind"]; cx: number; cy: number }) {
  if (kind === "legal") return <LegalIcon cx={cx} cy={cy} />;
  if (kind === "medical") return <MedicalIcon cx={cx} cy={cy} />;
  return <BuiltIcon cx={cx} cy={cy} />;
}

function CornerBracket({ x, y, flipX = false, flipY = false }: { x: number; y: number; flipX?: boolean; flipY?: boolean }) {
  const sx = flipX ? -1 : 1;
  const sy = flipY ? -1 : 1;
  return (
    <g transform={`translate(${x},${y}) scale(${sx},${sy})`} aria-hidden="true">
      <path d="M 0 30 L 0 0 L 30 0" stroke="#6EF06E" strokeWidth="1.5" fill="none" opacity="0.6" strokeLinecap="round" />
    </g>
  );
}

export function FlywheelVisualization() {
  return (
    <div className="flywheel-wrap" aria-hidden="false">
      <div className="flywheel-bg tech-grid-bg" aria-hidden="true" />

      <svg viewBox="0 0 900 900" className="flywheel-svg" preserveAspectRatio="xMidYMid meet">
        <defs>
          {/* === LAYER 1: Background environment gradients === */}
          <radialGradient id="fw-glow-signal" cx="27.7%" cy="27.7%" r="35.5%">
            <stop offset="0%" stopColor="#6EF06E" stopOpacity="0" />
            <stop offset="50%" stopColor="#6EF06E" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#6EF06E" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="fw-glow-electric" cx="72.2%" cy="72.2%" r="35.5%">
            <stop offset="0%" stopColor="#4D7FFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#4D7FFF" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#4D7FFF" stopOpacity="0" />
          </radialGradient>

          {/* === LAYER 3: Inset shadow gradient for machine plate === */}
          <radialGradient id="fw-plate-inset" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0, 0, 0, 0)" />
            <stop offset="85%" stopColor="rgba(0, 0, 0, 0.1)" />
            <stop offset="100%" stopColor="rgba(0, 0, 0, 0.4)" />
          </radialGradient>

          {/* === LAYER 5: Hub gradients === */}
          <radialGradient id="fw-hub-outer-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6EF06E" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#6EF06E" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#6EF06E" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="fw-hub-inner-inset" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6EF06E" stopOpacity="0" />
            <stop offset="80%" stopColor="#6EF06E" stopOpacity="0" />
            <stop offset="100%" stopColor="#6EF06E" stopOpacity="0.12" />
          </radialGradient>

          {/* === LAYER 4: Per-spoke gradients === */}
          {CLIENT_POSITIONS.map((c, i) => {
            const x1 = 450 + c.cos * SPOKE_INNER;
            const y1 = 450 + c.sin * SPOKE_INNER;
            const x2 = 450 + c.cos * SPOKE_OUTER;
            const y2 = 450 + c.sin * SPOKE_OUTER;
            return (
              <linearGradient
                key={`fw-spoke-grad-${i}`}
                id={`fw-spoke-${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#6EF06E" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#4D7FFF" stopOpacity="0.25" />
              </linearGradient>
            );
          })}
        </defs>

        {/* ============ LAYER 1: Background environment glows ============ */}
        <rect width="900" height="900" fill="url(#fw-glow-signal)" />
        <rect width="900" height="900" fill="url(#fw-glow-electric)" />

        {/* ============ LAYER 2: Three orbital rings ============ */}
        <circle cx="450" cy="450" r="380" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" strokeDasharray="2 8" fill="none" />
        <circle cx="450" cy="450" r="320" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" fill="none" />
        <circle cx="450" cy="450" r="280" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" strokeDasharray="2 4" fill="none" />

        {/* ============ LAYER 3: Machine plate (filled circle with inset shadow + tick marks) ============ */}
        <circle cx="450" cy="450" r="260" fill="#14141C" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
        <circle cx="450" cy="450" r="258" fill="url(#fw-plate-inset)" />

        {/* 8 plate tick marks at 45 deg */}
        {PLATE_TICKS.map((t, i) => (
          <line
            key={`fw-plate-tick-${i}`}
            x1={t.x1}
            y1={t.y1}
            x2={t.x2}
            y2={t.y2}
            stroke="#6EF06E"
            strokeOpacity="0.5"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        ))}

        {/* ============ LAYER 4: Six gradient spokes from hub to client nodes ============ */}
        {CLIENT_POSITIONS.map((c, i) => {
          const x1 = 450 + c.cos * SPOKE_INNER;
          const y1 = 450 + c.sin * SPOKE_INNER;
          const x2 = 450 + c.cos * SPOKE_OUTER;
          const y2 = 450 + c.sin * SPOKE_OUTER;
          return (
            <line
              key={`fw-spoke-line-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={`url(#fw-spoke-${i})`}
              strokeWidth="1.5"
            />
          );
        })}

        {/* ============ LAYER 4b: Six animated data pulses traveling outward ============ */}
        {CLIENT_POSITIONS.map((c, i) => {
          const x1 = 450 + c.cos * SPOKE_INNER;
          const y1 = 450 + c.sin * SPOKE_INNER;
          const x2 = 450 + c.cos * SPOKE_OUTER;
          const y2 = 450 + c.sin * SPOKE_OUTER;
          return (
            <circle key={`fw-pulse-${i}`} r="3" fill="#6EF06E">
              <animate
                attributeName="cx"
                values={`${x1};${x2}`}
                dur="3s"
                begin={`${i * 0.5}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                values={`${y1};${y2}`}
                dur="3s"
                begin={`${i * 0.5}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;0.95;0.95;0"
                keyTimes="0;0.1;0.85;1"
                dur="3s"
                begin={`${i * 0.5}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })}

        {/* ============ LAYER 5: Center hub ============ */}
        {/* 5a outer glow */}
        <circle cx="450" cy="450" r={HUB_OUTER_RING} fill="url(#fw-hub-outer-glow)" />
        {/* 5b ring */}
        <circle cx="450" cy="450" r={HUB_RADIUS} fill="#050507" stroke="#6EF06E" strokeWidth="2" />
        {/* 5c inner inset shadow */}
        <circle cx="450" cy="450" r={HUB_RADIUS - 5} fill="url(#fw-hub-inner-inset)" />
        {/* 5d concentric hairline */}
        <circle cx="450" cy="450" r="76" fill="none" stroke="rgba(110, 240, 110, 0.15)" strokeWidth="0.75" strokeDasharray="2 4" />

        {/* 5e rotating scan arc inside hub */}
        <g className="fw-scan" style={{ transformOrigin: "450px 450px" }}>
          <path
            d="M 450 370 A 80 80 0 0 1 510 410"
            stroke="#6EF06E"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.8"
          />
          <path
            d="M 450 370 A 80 80 0 0 1 480 380"
            stroke="#6EF06E"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            opacity="0.4"
          />
        </g>

        {/* 5f brand triangle at top center of hub (28x28 corner-cut) */}
        <polygon points="436,411 464,411 436,439" fill="#6EF06E" />

        {/* 5g THE SYSTEM label */}
        <text
          x="450"
          y="468"
          fill="#6EF06E"
          fontSize="11"
          fontWeight="700"
          fontFamily="Inter, sans-serif"
          letterSpacing="0.16em"
          textAnchor="middle"
        >
          THE SYSTEM
        </text>

        {/* 5h sub-label "Compound visibility" */}
        <text
          x="450"
          y="488"
          fill="rgba(255, 255, 255, 0.7)"
          fontSize="13"
          fontWeight="500"
          fontFamily="Inter, sans-serif"
          letterSpacing="-0.005em"
          textAnchor="middle"
        >
          Compound visibility
        </text>

        {/* 5i hub cardinal tick notches */}
        <line x1="450" y1="362" x2="450" y2="370" stroke="#6EF06E" strokeWidth="1.2" opacity="0.65" strokeLinecap="round" />
        <line x1="450" y1="530" x2="450" y2="538" stroke="#6EF06E" strokeWidth="1.2" opacity="0.65" strokeLinecap="round" />
        <line x1="362" y1="450" x2="370" y2="450" stroke="#6EF06E" strokeWidth="1.2" opacity="0.65" strokeLinecap="round" />
        <line x1="530" y1="450" x2="538" y2="450" stroke="#6EF06E" strokeWidth="1.2" opacity="0.65" strokeLinecap="round" />

        {/* ============ LAYER 6: Six client nodes ============ */}
        {CLIENT_POSITIONS.map((c) => {
          const isAlt = c.tone === "alt";
          return (
            <g key={`fw-node-${c.slug}`}>
              {/* outer hover glow placeholder (subtle ring at the orbital radius) */}
              <circle
                cx={c.x}
                cy={c.y}
                r={NODE_RADIUS + 4}
                fill="none"
                stroke="rgba(110, 240, 110, 0.06)"
                strokeWidth="1"
              />
              {/* outer ring */}
              <circle
                cx={c.x}
                cy={c.y}
                r={NODE_RADIUS}
                fill={isAlt ? "#050507" : "#14141C"}
                stroke="#6EF06E"
                strokeOpacity="0.6"
                strokeWidth="1.5"
              />
              {/* inner highlight */}
              <circle
                cx={c.x}
                cy={c.y}
                r={NODE_RADIUS - 6}
                fill="none"
                stroke="rgba(255, 255, 255, 0.04)"
                strokeWidth="1"
              />

              {/* vertical icon */}
              <VerticalIcon kind={c.kind} cx={c.x} cy={c.y - 32} />

              {/* vertical · metro label */}
              <text
                x={c.x}
                y={c.y - 10}
                fill="#6EF06E"
                fontSize="8"
                fontWeight="700"
                fontFamily="Inter, sans-serif"
                letterSpacing="0.16em"
                textAnchor="middle"
              >
                {c.vertical} · {c.metro}
              </text>

              {/* client name */}
              <text
                x={c.x}
                y={c.y + 8}
                fill="#FAFAF7"
                fontSize="14"
                fontWeight="700"
                fontFamily="Inter, sans-serif"
                letterSpacing="-0.012em"
                textAnchor="middle"
              >
                {c.client}
              </text>

              {/* metric */}
              <text
                x={c.x}
                y={c.y + 26}
                fill="#8B8B95"
                fontSize="11"
                fontWeight="500"
                fontFamily="Inter, sans-serif"
                textAnchor="middle"
              >
                {c.metric}
              </text>

              {/* small number label outside node */}
              <text
                x={c.x}
                y={c.y + NODE_RADIUS + 18}
                fill="rgba(255, 255, 255, 0.4)"
                fontSize="10"
                fontWeight="600"
                fontFamily="Inter, sans-serif"
                textAnchor="middle"
                letterSpacing="0.12em"
              >
                {c.num}
              </text>
            </g>
          );
        })}

        {/* ============ LAYER 7: Outer reticles + data labels ============ */}
        {/* 4 corner reticles */}
        <CornerBracket x={30} y={30} />
        <CornerBracket x={870} y={30} flipX />
        <CornerBracket x={30} y={870} flipY />
        <CornerBracket x={870} y={870} flipX flipY />

        {/* Measurement bar at the bottom edge */}
        <line x1="30" y1="850" x2="870" y2="850" stroke="#6EF06E" strokeWidth="0.5" opacity="0.15" />

        {/* "RADIUS · 1 PER METRO" vertical label on right */}
        <g transform="translate(875, 450) rotate(-90)">
          <text
            x="0"
            y="0"
            fill="#6EF06E"
            fontSize="9"
            fontWeight="700"
            fontFamily="Inter, sans-serif"
            letterSpacing="0.22em"
            textAnchor="middle"
            opacity="0.6"
          >
            RADIUS · 1 PER METRO
          </text>
        </g>

        {/* "ENGAGEMENT · 24 MONTH AVG" bottom horizontal */}
        <text
          x="450"
          y="888"
          fill="#6EF06E"
          fontSize="9"
          fontWeight="700"
          fontFamily="Inter, sans-serif"
          letterSpacing="0.22em"
          textAnchor="middle"
          opacity="0.6"
        >
          ENGAGEMENT · 24 MONTH AVG
        </text>

        {/* "COMPOUND · WEEKLY" top horizontal */}
        <text
          x="450"
          y="22"
          fill="rgba(255, 255, 255, 0.3)"
          fontSize="9"
          fontWeight="700"
          fontFamily="Inter, sans-serif"
          letterSpacing="0.22em"
          textAnchor="middle"
        >
          COMPOUND · WEEKLY
        </text>

        {/* "QUERIES · TRACKED" left vertical */}
        <g transform="translate(22, 450) rotate(-90)">
          <text
            x="0"
            y="0"
            fill="rgba(255, 255, 255, 0.3)"
            fontSize="9"
            fontWeight="700"
            fontFamily="Inter, sans-serif"
            letterSpacing="0.22em"
            textAnchor="middle"
          >
            QUERIES · TRACKED
          </text>
        </g>
      </svg>

      {/* Clickable absolute-positioned overlay hotspots for each client node */}
      {CLIENT_POSITIONS.map((c) => {
        const xPct = (c.x / 900) * 100;
        const yPct = (c.y / 900) * 100;
        return (
          <Link
            key={`fw-link-${c.slug}`}
            href={`/case-studies/${c.slug}`}
            className="flywheel-hotspot"
            style={{ left: `calc(${xPct}% - 7.8%)`, top: `calc(${yPct}% - 7.8%)` }}
            aria-label={`${c.client}, ${c.vertical} · ${c.metro}, ${c.metric}`}
          />
        );
      })}
    </div>
  );
}
