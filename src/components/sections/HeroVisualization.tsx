"use client";

// The Rank Constellation, the hero centerpiece.
// 7 layers, fully hand-coded SVG, animated.

type QueryNode = {
  text: string;
  // angle in degrees (0 = right, 90 = down)
  angle: number;
  // radius from center, in SVG units (viewBox 600)
  radius: number;
};

const QUERY_NODES: ReadonlyArray<QueryNode> = [
  { text: "best probate lawyer tampa", angle: -75, radius: 270 },
  { text: "atlanta divorce attorney", angle: -25, radius: 270 },
  { text: "chicago dental implants", angle: 25, radius: 270 },
  { text: "miami dermatologist", angle: 75, radius: 270 },
  { text: "personal injury near me", angle: 130, radius: 360 },
  { text: "family dentist phoenix", angle: 180, radius: 270 },
  { text: "cosmetic surgeon austin", angle: 230, radius: 360 },
  { text: "estate planning denver", angle: 280, radius: 360 },
];

function polar(angleDeg: number, radius: number, cx = 300, cy = 300) {
  const r = (angleDeg * Math.PI) / 180;
  return { x: cx + Math.cos(r) * radius, y: cy + Math.sin(r) * radius };
}

export function HeroVisualization() {
  return (
    <div className="hero-viz">
      <svg
        viewBox="0 0 600 600"
        fill="none"
        className="hero-viz__svg"
        aria-hidden="true"
      >
        <defs>
          {/* Ambient glows */}
          <radialGradient id="hv-glow-electric" cx="40%" cy="40%" r="40%">
            <stop offset="0%" stopColor="#4D7FFF" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#4D7FFF" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hv-glow-signal" cx="70%" cy="60%" r="35%">
            <stop offset="0%" stopColor="#FFE817" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#FFE817" stopOpacity="0" />
          </radialGradient>

          {/* Hub glow */}
          <radialGradient id="hv-hub-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE817" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#FFE817" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#FFE817" stopOpacity="0" />
          </radialGradient>

          {/* Connection line gradients (8 individual gradients for proper directionality) */}
          {QUERY_NODES.map((node, i) => {
            const end = polar(node.angle, node.radius);
            return (
              <linearGradient
                key={`grad-${i}`}
                id={`hv-line-${i}`}
                x1={300}
                y1={300}
                x2={end.x}
                y2={end.y}
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#FFE817" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#4D7FFF" stopOpacity="0.15" />
              </linearGradient>
            );
          })}

          {/* Reticle bracket asset */}
          <symbol id="hv-bracket" viewBox="0 0 24 24">
            <path d="M 0 8 L 0 0 L 8 0" stroke="#FFE817" strokeWidth="1.5" fill="none" opacity="0.6" />
          </symbol>
        </defs>

        {/* Layer 1: ambient glows */}
        <rect width="600" height="600" fill="url(#hv-glow-electric)" />
        <rect width="600" height="600" fill="url(#hv-glow-signal)" />

        {/* Layer 2: orbital rings */}
        <circle cx="300" cy="300" r="180" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="2 6" fill="none" />
        <circle cx="300" cy="300" r="270" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="2 6" fill="none" />
        <circle cx="300" cy="300" r="360" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="2 6" fill="none" />

        {/* Layer 7: measurement labels along orbital rings */}
        <text x="300" y="115" fill="rgba(255,255,255,0.4)" fontSize="9" fontWeight="600" fontFamily="Inter, sans-serif" letterSpacing="0.18em" textAnchor="middle">POSITION 1</text>
        <text x="300" y="25" fill="rgba(255,255,255,0.3)" fontSize="9" fontWeight="600" fontFamily="Inter, sans-serif" letterSpacing="0.18em" textAnchor="middle">PAGE 1</text>
        <text x="48" y="304" fill="rgba(255,255,255,0.35)" fontSize="9" fontWeight="600" fontFamily="Inter, sans-serif" letterSpacing="0.18em" textAnchor="start">TOP 3</text>

        {/* Layer 4: connection lines from each query node to the center */}
        {QUERY_NODES.map((node, i) => {
          const end = polar(node.angle, node.radius);
          return (
            <line
              key={`line-${i}`}
              x1="300"
              y1="300"
              x2={end.x}
              y2={end.y}
              stroke={`url(#hv-line-${i})`}
              strokeWidth="1"
            />
          );
        })}

        {/* Layer 4b: data pulses traveling along each line, staggered */}
        {QUERY_NODES.map((node, i) => {
          const end = polar(node.angle, node.radius);
          const delay = (i * 0.4).toFixed(2);
          return (
            <circle key={`pulse-${i}`} r="2.5" fill="#FFE817" opacity="0.9" className="hv-pulse">
              <animate
                attributeName="cx"
                values={`${end.x};300`}
                dur="3s"
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                values={`${end.y};300`}
                dur="3s"
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;0.9;0"
                dur="3s"
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })}

        {/* Layer 3: query node tags (pill-shaped labels) */}
        {QUERY_NODES.map((node, i) => {
          const pos = polar(node.angle, node.radius);
          const w = node.text.length * 5.5 + 18;
          return (
            <g key={`node-${i}`} transform={`translate(${pos.x - w / 2}, ${pos.y - 11})`}>
              <rect
                x="0"
                y="0"
                width={w}
                height="22"
                rx="11"
                fill="#14141C"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1"
              />
              <text
                x={w / 2}
                y="14"
                fill="#8B8B95"
                fontSize="10"
                fontWeight="500"
                fontFamily="Inter, sans-serif"
                textAnchor="middle"
                letterSpacing="-0.005em"
              >
                {node.text}
              </text>
            </g>
          );
        })}

        {/* Layer 5: center hub */}
        {/* Outer glow */}
        <circle cx="300" cy="300" r="90" fill="url(#hv-hub-glow)" />
        {/* Middle ring */}
        <circle cx="300" cy="300" r="60" fill="#0A0A0F" stroke="#FFE817" strokeWidth="1.5" />
        {/* Inner inset */}
        <circle cx="300" cy="300" r="58" fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth="1" />

        {/* Rotating scan line inside hub */}
        <g className="hv-scan" style={{ transformOrigin: "300px 300px" }}>
          <path
            d="M 300 244 A 56 56 0 0 1 350 280"
            stroke="#FFE817"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
          />
        </g>

        {/* Hub triangle (Rysen mark, scaled) */}
        <polygon points="284,278 312,278 284,306" fill="#FFE817" />

        {/* Hub "#1" text */}
        <text
          x="320"
          y="298"
          fill="#FFE817"
          fontSize="22"
          fontWeight="800"
          fontFamily="Inter, sans-serif"
          letterSpacing="-0.02em"
          textAnchor="start"
        >
          #1
        </text>

        {/* Hub bottom label */}
        <text
          x="300"
          y="330"
          fill="#8B8B95"
          fontSize="8"
          fontWeight="600"
          fontFamily="Inter, sans-serif"
          letterSpacing="0.22em"
          textAnchor="middle"
        >
          THE TARGET
        </text>

        {/* Layer 6: corner reticle brackets at the 4 corners */}
        <use href="#hv-bracket" x="24" y="24" width="24" height="24" />
        <use href="#hv-bracket" x="552" y="24" width="24" height="24" transform="scale(-1, 1) translate(-600, 0)" />
        <use href="#hv-bracket" x="24" y="552" width="24" height="24" transform="scale(1, -1) translate(0, -600)" />
        <use href="#hv-bracket" x="552" y="552" width="24" height="24" transform="scale(-1, -1) translate(-600, -600)" />

        {/* Outer label "RANK CONSTELLATION" subtle */}
        <text
          x="300"
          y="588"
          fill="rgba(255, 255, 255, 0.25)"
          fontSize="9"
          fontWeight="600"
          fontFamily="Inter, sans-serif"
          letterSpacing="0.32em"
          textAnchor="middle"
        >
          RANK CONSTELLATION
        </text>
      </svg>
    </div>
  );
}
