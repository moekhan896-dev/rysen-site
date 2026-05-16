import { BlueprintFrame } from "./BlueprintFrame";

interface Props {
  className?: string;
}

const SYSTEMS: ReadonlyArray<{ label: string; y: number }> = [
  { label: "ATTRIBUTION", y: 60 },
  { label: "RANK TRACKER", y: 100 },
  { label: "CALL TRACK", y: 140 },
  { label: "CRM REVENUE", y: 180 },
  { label: "A/B TESTING", y: 220 },
  { label: "COHORT ANALYSIS", y: 260 },
  { label: "PREDICTIVE", y: 300 },
];

export function DataInfrastructure({ className = "" }: Props) {
  return (
    <BlueprintFrame
      width={500}
      height={360}
      className={className}
      ariaLabel="Architectural diagram of the seven data systems connecting to a central warehouse"
    >
      {/* Central warehouse */}
      <rect
        x="340"
        y="160"
        width="100"
        height="60"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M 340 160 L 340 220 L 440 220 Z" fill="var(--signal)" opacity="0.3" />
      <text
        x="390"
        y="195"
        fontSize="10"
        fontFamily="var(--font-inter), system-ui, sans-serif" fontStyle="italic"
        fill="currentColor"
        textAnchor="middle"
      >
        DATA
      </text>
      <text
        x="390"
        y="207"
        fontSize="10"
        fontFamily="var(--font-inter), system-ui, sans-serif" fontStyle="italic"
        fill="currentColor"
        textAnchor="middle"
      >
        WAREHOUSE
      </text>

      {/* 7 systems on the left with port connections */}
      {SYSTEMS.map((s, i) => (
        <g key={s.label}>
          <rect
            x="40"
            y={s.y - 12}
            width="180"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <text
            x="50"
            y={s.y + 4}
            fontSize="9"
            fontFamily="var(--font-inter), system-ui, sans-serif" fontStyle="italic"
            fill="currentColor"
            opacity="0.7"
          >
            {String(i + 1).padStart(2, "0")} · {s.label}
          </text>
          {/* Port marker */}
          <rect
            x="216"
            y={s.y - 3}
            width="6"
            height="6"
            fill="var(--signal)"
          />
          {/* Connection line to warehouse */}
          <path
            d={`M 222 ${s.y} Q 280 ${s.y} 340 190`}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.4"
          />
        </g>
      ))}

      {/* Output stream */}
      <line
        x1="440"
        y1="190"
        x2="480"
        y2="190"
        stroke="currentColor"
        strokeWidth="1"
        markerEnd="url(#dataArrow)"
      />
      <text
        x="460"
        y="178"
        fontSize="8"
        fontFamily="var(--font-inter), system-ui, sans-serif" fontStyle="italic"
        fill="currentColor"
        textAnchor="middle"
        opacity="0.6"
      >
        REPORT
      </text>

      <defs>
        <marker
          id="dataArrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          orient="auto"
        >
          <path d="M 0 0 L 10 5 L 0 10 Z" fill="currentColor" />
        </marker>
      </defs>
    </BlueprintFrame>
  );
}
