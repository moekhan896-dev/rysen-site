import { BlueprintFrame } from "./BlueprintFrame";

interface Props {
  className?: string;
}

const PILLARS: ReadonlyArray<{ label: string; angle: number }> = [
  { label: "HYPERLOCAL", angle: 270 },
  { label: "DATA-FIRST", angle: 342 },
  { label: "COMPOUND", angle: 54 },
  { label: "WEEKLY", angle: 126 },
  { label: "HONEST SEL.", angle: 198 },
];

const CENTER = { x: 250, y: 200 };
const RADIUS = 110;

function polar(angleDeg: number, r: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CENTER.x + Math.cos(rad) * r, y: CENTER.y + Math.sin(rad) * r };
}

export function FirstPositionFramework({ className = "" }: Props) {
  return (
    <BlueprintFrame
      width={500}
      height={400}
      className={className}
      ariaLabel="First Position framework, five interconnected pillars"
    >
      {/* Connection edges between pillars (every pair) */}
      {PILLARS.map((p, i) =>
        PILLARS.slice(i + 1).map((q) => {
          const a = polar(p.angle, RADIUS);
          const b = polar(q.angle, RADIUS);
          return (
            <line
              key={`${p.label}-${q.label}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="currentColor"
              strokeWidth="0.5"
              strokeDasharray="2,4"
              opacity="0.3"
            />
          );
        })
      )}

      {/* Center yellow mark */}
      <rect
        x={CENTER.x - 16}
        y={CENTER.y - 16}
        width="32"
        height="32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d={`M ${CENTER.x - 16} ${CENTER.y - 16} L ${CENTER.x - 16} ${CENTER.y + 16} L ${CENTER.x + 16} ${CENTER.y + 16} Z`}
        fill="var(--signal)"
      />
      <text
        x={CENTER.x + 30}
        y={CENTER.y + 4}
        fontSize="9"
        fontFamily="var(--font-inter), system-ui, sans-serif" fontStyle="italic"
        fill="currentColor"
        opacity="0.7"
      >
        FIRST POSITION
      </text>

      {/* Pillar nodes */}
      {PILLARS.map((p, i) => {
        const node = polar(p.angle, RADIUS);
        const label = polar(p.angle, RADIUS + 32);
        return (
          <g key={p.label}>
            <circle
              cx={node.x}
              cy={node.y}
              r="14"
              fill="var(--paper)"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <text
              x={node.x}
              y={node.y + 3}
              fontSize="10"
              fontFamily="var(--font-fraunces), serif"
              fill="currentColor"
              textAnchor="middle"
            >
              {String(i + 1).padStart(2, "0")}
            </text>
            <text
              x={label.x}
              y={label.y}
              fontSize="9"
              fontFamily="var(--font-inter), system-ui, sans-serif" fontStyle="italic"
              fill="currentColor"
              textAnchor="middle"
              opacity="0.7"
            >
              {p.label}
            </text>
          </g>
        );
      })}
    </BlueprintFrame>
  );
}
