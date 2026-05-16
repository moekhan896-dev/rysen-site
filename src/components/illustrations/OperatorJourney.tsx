import { BlueprintFrame } from "./BlueprintFrame";

interface Props {
  className?: string;
}

const STOPS: ReadonlyArray<{ year: string; label: string }> = [
  { year: "2008", label: "ROSS BBA" },
  { year: "2012", label: "SALESFORCE" },
  { year: "2016", label: "ROKU" },
  { year: "2019", label: "FOUNDED RYSEN" },
  { year: "2024", label: "MADISON CLARK" },
];

export function OperatorJourney({ className = "" }: Props) {
  return (
    <BlueprintFrame
      width={600}
      height={200}
      className={className}
      ariaLabel="Operator journey timeline, Ross to Salesforce to Roku to Rysen"
    >
      {/* Baseline */}
      <line
        x1="40"
        y1="120"
        x2="560"
        y2="120"
        stroke="currentColor"
        strokeWidth="1"
      />

      {STOPS.map((s, i) => {
        const x = 60 + (480 / (STOPS.length - 1)) * i;
        const isFounding = s.label === "FOUNDED RYSEN";
        return (
          <g key={s.label}>
            {/* Tick */}
            <line
              x1={x}
              y1="115"
              x2={x}
              y2="125"
              stroke="currentColor"
              strokeWidth="1"
            />
            {/* Marker */}
            {isFounding ? (
              <path
                d={`M ${x - 8} 112 L ${x - 8} 128 L ${x + 8} 128 Z`}
                fill="var(--signal)"
              />
            ) : (
              <circle
                cx={x}
                cy="120"
                r="4"
                fill="var(--paper)"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            )}
            {/* Year above */}
            <text
              x={x}
              y="92"
              fontSize="10"
              fontFamily="var(--font-inter), system-ui, sans-serif" fontStyle="italic"
              fill="currentColor"
              textAnchor="middle"
              opacity="0.7"
            >
              {s.year}
            </text>
            {/* Label below */}
            <text
              x={x}
              y="148"
              fontSize="9"
              fontFamily="var(--font-inter), system-ui, sans-serif" fontStyle="italic"
              fill={isFounding ? "currentColor" : "currentColor"}
              fontWeight={isFounding ? "600" : "400"}
              textAnchor="middle"
              opacity={isFounding ? "1" : "0.7"}
            >
              {s.label}
            </text>
          </g>
        );
      })}

      {/* Caption */}
      <text
        x="40"
        y="180"
        fontSize="9"
        fontFamily="var(--font-inter), system-ui, sans-serif" fontStyle="italic"
        fill="currentColor"
        opacity="0.5"
      >
        OPERATOR JOURNEY · BUILT BRANDS · 16+ YEARS
      </text>
    </BlueprintFrame>
  );
}
