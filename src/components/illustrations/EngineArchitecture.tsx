import { BlueprintFrame } from "./BlueprintFrame";

interface Props {
  className?: string;
}

const NODES: ReadonlyArray<{ label: string; angle: number }> = [
  { label: "LSA", angle: 270 },
  { label: "GMB", angle: 306 },
  { label: "WEB", angle: 342 },
  { label: "AI", angle: 18 },
  { label: "CONTENT", angle: 54 },
  { label: "REVIEWS", angle: 90 },
  { label: "PR", angle: 126 },
  { label: "SCHEMA", angle: 162 },
  { label: "EMAIL", angle: 198 },
  { label: "SOCIAL", angle: 234 },
];

const CENTER = { x: 250, y: 200 };
const RADIUS = 130;

function polar(angleDeg: number, r: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CENTER.x + Math.cos(rad) * r, y: CENTER.y + Math.sin(rad) * r };
}

export function EngineArchitecture({ className = "" }: Props) {
  return (
    <BlueprintFrame
      width={500}
      height={400}
      className={className}
      ariaLabel="Schematic of the Organic Growth Engine showing 10 coordinated components"
    >
      {/* Outer ring (compounding boundary) */}
      <circle
        cx={CENTER.x}
        cy={CENTER.y}
        r={RADIUS + 30}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="3,3"
        opacity="0.4"
      />

      {/* Inner ring */}
      <circle
        cx={CENTER.x}
        cy={CENTER.y}
        r={RADIUS}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.5"
      />

      {/* Connection spokes */}
      {NODES.map((n) => {
        const p = polar(n.angle, RADIUS);
        return (
          <line
            key={`spoke-${n.label}`}
            x1={CENTER.x}
            y1={CENTER.y}
            x2={p.x}
            y2={p.y}
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.3"
          />
        );
      })}

      {/* Yellow center triangle (the Rysen mark) */}
      <rect
        x={CENTER.x - 18}
        y={CENTER.y - 18}
        width="36"
        height="36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d={`M ${CENTER.x - 18} ${CENTER.y - 18} L ${CENTER.x - 18} ${CENTER.y + 18} L ${CENTER.x + 18} ${CENTER.y + 18} Z`}
        fill="var(--signal)"
      />

      {/* Node tiles */}
      {NODES.map((n) => {
        const p = polar(n.angle, RADIUS);
        const labelOffset = polar(n.angle, RADIUS + 18);
        return (
          <g key={n.label}>
            <rect
              x={p.x - 14}
              y={p.y - 14}
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <text
              x={labelOffset.x}
              y={labelOffset.y}
              fontSize="8"
              fontFamily="var(--font-mono), monospace"
              fill="currentColor"
              textAnchor="middle"
              dominantBaseline="middle"
              opacity="0.7"
            >
              {n.label}
            </text>
          </g>
        );
      })}

      {/* Outer annotation */}
      <text
        x={CENTER.x}
        y={CENTER.y + RADIUS + 60}
        fontSize="9"
        fontFamily="var(--font-mono), monospace"
        fill="currentColor"
        textAnchor="middle"
        opacity="0.6"
      >
        COMPOUND VISIBILITY ENVELOPE
      </text>
    </BlueprintFrame>
  );
}
