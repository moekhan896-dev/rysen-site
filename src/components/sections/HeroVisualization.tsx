"use client";

// THE RANK CONSTELLATION
// 8-layer hand-coded SVG composition. The hero centerpiece.
// Layer 1: ambient electric + signal radial glows
// Layer 2: three dashed orbital rings
// Layer 3: eight search query nodes
// Layer 4: eight gradient connection lines + animated data pulses
// Layer 5: center hub (outer glow + ring + inner inset + triangle + #1 + scan arc)
// Layer 6: four corner reticle brackets
// Layer 7: measurement labels (POSITION 1, TOP 3, PAGE 1)
// Layer 8: 24 tick marks at 15-degree intervals around inner orbit

type QueryNode = {
  text: string;
  angle: number; // degrees, 0 = up (12 o'clock), clockwise
  radius: number;
};

// All 8 nodes hard-coded with positions per spec
const QUERY_NODES: ReadonlyArray<QueryNode> = [
  { text: "best probate lawyer tampa", angle: 285, radius: 220 },
  { text: "atlanta divorce attorney", angle: 330, radius: 280 },
  { text: "chicago dental implants", angle: 15, radius: 240 },
  { text: "miami dermatologist", angle: 60, radius: 290 },
  { text: "personal injury near me", angle: 105, radius: 230 },
  { text: "family dentist phoenix", angle: 150, radius: 285 },
  { text: "cosmetic surgeon austin", angle: 195, radius: 245 },
  { text: "estate planning denver", angle: 240, radius: 275 },
];

// Precompute positions (in SVG userSpace, viewBox 0 0 600 600, center 300,300)
function pos(angle: number, radius: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: 300 + radius * Math.cos(rad),
    y: 300 + radius * Math.sin(rad),
  };
}

const NODE_POSITIONS = QUERY_NODES.map((n) => ({ ...n, ...pos(n.angle, n.radius) }));

// Layer 8 tick mark positions: 24 ticks at 15-deg intervals on inner orbit r=180
const TICK_MARKS = Array.from({ length: 24 }).map((_, i) => {
  const angle = i * 15;
  const rad = ((angle - 90) * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  return {
    x1: 300 + cos * 180,
    y1: 300 + sin * 180,
    x2: 300 + cos * 186,
    y2: 300 + sin * 186,
    angle,
  };
});

// Helper: build the L-shaped corner reticle
type Bracket = { x: number; y: number; flipX?: boolean; flipY?: boolean };
function CornerBracket({ x, y, flipX = false, flipY = false }: Bracket) {
  const sx = flipX ? -1 : 1;
  const sy = flipY ? -1 : 1;
  return (
    <g transform={`translate(${x},${y}) scale(${sx},${sy})`}>
      <path d="M 0 24 L 0 0 L 24 0" stroke="#FFE817" strokeWidth="1.5" fill="none" opacity="0.6" strokeLinecap="round" />
    </g>
  );
}

export function HeroVisualization() {
  return (
    <div className="hero-viz" aria-hidden="true">
      <svg viewBox="0 0 600 600" className="hero-viz__svg" preserveAspectRatio="xMidYMid meet">
        <defs>
          {/* === LAYER 1: Ambient glow gradients === */}
          <radialGradient id="hv-glow-electric" cx="40%" cy="40%" r="40%">
            <stop offset="0%" stopColor="#4D7FFF" stopOpacity="0" />
            <stop offset="40%" stopColor="#4D7FFF" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#4D7FFF" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hv-glow-signal" cx="70%" cy="60%" r="35%">
            <stop offset="0%" stopColor="#FFE817" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFE817" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#FFE817" stopOpacity="0" />
          </radialGradient>

          {/* === LAYER 5: Center hub gradients === */}
          <radialGradient id="hv-hub-outer-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE817" stopOpacity="0.35" />
            <stop offset="55%" stopColor="#FFE817" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#FFE817" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hv-hub-inner-inset" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE817" stopOpacity="0" />
            <stop offset="100%" stopColor="#FFE817" stopOpacity="0.08" />
          </radialGradient>

          {/* === LAYER 4: Per-line gradients for the 8 connection lines === */}
          {NODE_POSITIONS.map((n, i) => (
            <linearGradient
              key={`hv-conn-grad-${i}`}
              id={`hv-conn-${i}`}
              x1={300}
              y1={300}
              x2={n.x}
              y2={n.y}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#FFE817" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#4D7FFF" stopOpacity="0.15" />
            </linearGradient>
          ))}
        </defs>

        {/* ============ LAYER 1: Ambient glows ============ */}
        <rect width="600" height="600" fill="url(#hv-glow-electric)" />
        <rect width="600" height="600" fill="url(#hv-glow-signal)" />

        {/* ============ LAYER 2: Orbital dashed rings ============ */}
        <circle cx="300" cy="300" r="180" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="2 6" fill="none" />
        <circle cx="300" cy="300" r="270" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="2 6" fill="none" />
        <circle cx="300" cy="300" r="360" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="2 6" fill="none" />

        {/* ============ LAYER 8: 24 tick marks at 15-degree intervals (drawn before lines so they sit underneath) ============ */}
        {TICK_MARKS.map((t, i) => (
          <line
            key={`hv-tick-${i}`}
            x1={t.x1}
            y1={t.y1}
            x2={t.x2}
            y2={t.y2}
            stroke="#FFE817"
            strokeOpacity="0.3"
            strokeWidth="1"
            strokeLinecap="round"
          />
        ))}

        {/* ============ LAYER 4: 8 connection lines from each query to center ============ */}
        {NODE_POSITIONS.map((n, i) => (
          <line
            key={`hv-conn-line-${i}`}
            x1="300"
            y1="300"
            x2={n.x}
            y2={n.y}
            stroke={`url(#hv-conn-${i})`}
            strokeWidth="1"
          />
        ))}

        {/* ============ LAYER 4b: 8 animated data pulses traveling inward ============ */}
        {NODE_POSITIONS.map((n, i) => (
          <circle key={`hv-pulse-${i}`} r="2.5" fill="#FFE817">
            <animate
              attributeName="cx"
              values={`${n.x};300`}
              dur="3s"
              begin={`${i * 0.4}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values={`${n.y};300`}
              dur="3s"
              begin={`${i * 0.4}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;0.95;0.95;0"
              keyTimes="0;0.1;0.85;1"
              dur="3s"
              begin={`${i * 0.4}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* ============ LAYER 3: 8 query node pills ============ */}
        {NODE_POSITIONS.map((n, i) => {
          // Pill width tuned to text length
          const w = n.text.length * 5.8 + 22;
          return (
            <g key={`hv-node-${i}`} transform={`translate(${n.x - w / 2}, ${n.y - 12})`}>
              <rect
                x="0"
                y="0"
                width={w}
                height="24"
                rx="12"
                ry="12"
                fill="#14141C"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1"
              />
              <text
                x={w / 2}
                y="15"
                fill="#8B8B95"
                fontSize="10"
                fontWeight="500"
                fontFamily="Inter, sans-serif"
                textAnchor="middle"
                letterSpacing="-0.005em"
              >
                {n.text}
              </text>
            </g>
          );
        })}

        {/* ============ LAYER 7: Measurement labels ============ */}
        <text
          x="300"
          y="105"
          fill="#FFE817"
          fontSize="9"
          fontWeight="700"
          fontFamily="Inter, sans-serif"
          letterSpacing="0.16em"
          textAnchor="middle"
        >
          POSITION 1
        </text>
        <text
          x="300"
          y="18"
          fill="rgba(255, 255, 255, 0.4)"
          fontSize="9"
          fontWeight="700"
          fontFamily="Inter, sans-serif"
          letterSpacing="0.16em"
          textAnchor="middle"
        >
          TOP 3
        </text>
        <text
          x="580"
          y="304"
          fill="rgba(255, 255, 255, 0.3)"
          fontSize="9"
          fontWeight="700"
          fontFamily="Inter, sans-serif"
          letterSpacing="0.16em"
          textAnchor="end"
        >
          PAGE 1
        </text>
        {/* Bottom outer caption */}
        <text
          x="300"
          y="588"
          fill="rgba(255, 255, 255, 0.22)"
          fontSize="9"
          fontWeight="600"
          fontFamily="Inter, sans-serif"
          letterSpacing="0.32em"
          textAnchor="middle"
        >
          RANK CONSTELLATION · LIVE
        </text>

        {/* ============ LAYER 5: Center hub ============ */}
        {/* 5a outer glow */}
        <circle cx="300" cy="300" r="100" fill="url(#hv-hub-outer-glow)" />
        {/* 5b outer ring */}
        <circle cx="300" cy="300" r="60" fill="#0A0A0F" stroke="#FFE817" strokeWidth="1.5" />
        {/* 5c inner inset gradient */}
        <circle cx="300" cy="300" r="55" fill="url(#hv-hub-inner-inset)" />
        {/* 5d concentric inner hairline */}
        <circle cx="300" cy="300" r="46" fill="none" stroke="rgba(255, 232, 23, 0.18)" strokeWidth="0.75" strokeDasharray="2 3" />

        {/* 5e rotating scan arc inside hub */}
        <g className="hv-scan" style={{ transformOrigin: "300px 300px" }}>
          <path
            d="M 300 248 A 52 52 0 0 1 348 290"
            stroke="#FFE817"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />
          <path
            d="M 300 248 A 52 52 0 0 1 332 264"
            stroke="#FFE817"
            strokeWidth="1"
            strokeLinecap="round"
            fill="none"
            opacity="0.4"
          />
        </g>

        {/* 5f brand triangle (corner-cut right triangle, mirroring the RysenLogo) */}
        <polygon points="284,278 314,278 284,308" fill="#FFE817" />

        {/* 5g "#1" text */}
        <text
          x="324"
          y="304"
          fill="#FFE817"
          fontSize="26"
          fontWeight="800"
          fontFamily="Inter, sans-serif"
          letterSpacing="-0.02em"
          textAnchor="start"
        >
          #1
        </text>

        {/* 5h hub bottom mini-label */}
        <text
          x="300"
          y="338"
          fill="rgba(255, 255, 255, 0.55)"
          fontSize="8"
          fontWeight="600"
          fontFamily="Inter, sans-serif"
          letterSpacing="0.22em"
          textAnchor="middle"
        >
          THE TARGET
        </text>

        {/* 5i hub edge cardinal notches, 4 small ticks at compass points */}
        <line x1="300" y1="234" x2="300" y2="240" stroke="#FFE817" strokeWidth="1.2" opacity="0.75" strokeLinecap="round" />
        <line x1="300" y1="360" x2="300" y2="366" stroke="#FFE817" strokeWidth="1.2" opacity="0.75" strokeLinecap="round" />
        <line x1="234" y1="300" x2="240" y2="300" stroke="#FFE817" strokeWidth="1.2" opacity="0.75" strokeLinecap="round" />
        <line x1="360" y1="300" x2="366" y2="300" stroke="#FFE817" strokeWidth="1.2" opacity="0.75" strokeLinecap="round" />

        {/* 5j hub edge sub-cardinal notches, 4 small ticks at NE/SE/SW/NW */}
        <line
          x1={300 + Math.cos(((45 - 90) * Math.PI) / 180) * 60}
          y1={300 + Math.sin(((45 - 90) * Math.PI) / 180) * 60}
          x2={300 + Math.cos(((45 - 90) * Math.PI) / 180) * 65}
          y2={300 + Math.sin(((45 - 90) * Math.PI) / 180) * 65}
          stroke="#FFE817"
          strokeWidth="1"
          opacity="0.5"
          strokeLinecap="round"
        />
        <line
          x1={300 + Math.cos(((135 - 90) * Math.PI) / 180) * 60}
          y1={300 + Math.sin(((135 - 90) * Math.PI) / 180) * 60}
          x2={300 + Math.cos(((135 - 90) * Math.PI) / 180) * 65}
          y2={300 + Math.sin(((135 - 90) * Math.PI) / 180) * 65}
          stroke="#FFE817"
          strokeWidth="1"
          opacity="0.5"
          strokeLinecap="round"
        />
        <line
          x1={300 + Math.cos(((225 - 90) * Math.PI) / 180) * 60}
          y1={300 + Math.sin(((225 - 90) * Math.PI) / 180) * 60}
          x2={300 + Math.cos(((225 - 90) * Math.PI) / 180) * 65}
          y2={300 + Math.sin(((225 - 90) * Math.PI) / 180) * 65}
          stroke="#FFE817"
          strokeWidth="1"
          opacity="0.5"
          strokeLinecap="round"
        />
        <line
          x1={300 + Math.cos(((315 - 90) * Math.PI) / 180) * 60}
          y1={300 + Math.sin(((315 - 90) * Math.PI) / 180) * 60}
          x2={300 + Math.cos(((315 - 90) * Math.PI) / 180) * 65}
          y2={300 + Math.sin(((315 - 90) * Math.PI) / 180) * 65}
          stroke="#FFE817"
          strokeWidth="1"
          opacity="0.5"
          strokeLinecap="round"
        />

        {/* ============ LAYER 6: 4 corner reticle brackets ============ */}
        <CornerBracket x={40} y={40} />
        <CornerBracket x={560} y={40} flipX />
        <CornerBracket x={40} y={560} flipY />
        <CornerBracket x={560} y={560} flipX flipY />

        {/* Outer measurement notches at cardinal directions */}
        <line x1="300" y1="50" x2="300" y2="42" stroke="#FFE817" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
        <line x1="300" y1="550" x2="300" y2="558" stroke="#FFE817" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
        <line x1="50" y1="300" x2="42" y2="300" stroke="#FFE817" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
        <line x1="550" y1="300" x2="558" y2="300" stroke="#FFE817" strokeWidth="1" opacity="0.4" strokeLinecap="round" />

        {/* Subtle outer frame */}
        <rect x="2" y="2" width="596" height="596" rx="4" ry="4" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
      </svg>
    </div>
  );
}
