import { BlueprintFrame } from "./BlueprintFrame";

interface Props {
  className?: string;
}

const DAYS: ReadonlyArray<{ label: string; title: string; time: string }> = [
  { label: "MON", title: "Data sync", time: "08:00" },
  { label: "TUE", title: "Strategy", time: "10:00" },
  { label: "WED", title: "Production", time: "ALL DAY" },
  { label: "THU", title: "QA / Ship", time: "16:00" },
  { label: "FRI", title: "Reports", time: "12:00" },
];

export function WeeklyCadenceGrid({ className = "" }: Props) {
  return (
    <BlueprintFrame
      width={500}
      height={260}
      className={className}
      ariaLabel="Weekly cadence schedule: Monday data sync through Friday client reports"
    >
      {/* Top axis label */}
      <text
        x="20"
        y="30"
        fontSize="9"
        fontFamily="var(--font-inter), system-ui, sans-serif" fontStyle="italic"
        fill="currentColor"
        opacity="0.6"
      >
        WORKWEEK · 5-DAY STANDING CADENCE
      </text>
      <line
        x1="20"
        y1="40"
        x2="480"
        y2="40"
        stroke="currentColor"
        strokeWidth="0.5"
      />

      {DAYS.map((d, i) => {
        const x = 20 + i * 92;
        return (
          <g key={d.label}>
            <rect
              x={x}
              y="60"
              width="80"
              height="160"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            {/* Yellow accent line at top */}
            <line
              x1={x}
              y1="60"
              x2={x + 80}
              y2="60"
              stroke="var(--signal)"
              strokeWidth="2"
            />
            <text
              x={x + 8}
              y="80"
              fontSize="11"
              fontFamily="var(--font-inter), system-ui, sans-serif" fontStyle="italic"
              fill="var(--signal)"
              fontWeight="600"
            >
              {d.label}
            </text>
            <text
              x={x + 8}
              y="110"
              fontSize="12"
              fontFamily="var(--font-fraunces), serif"
              fill="currentColor"
              fontWeight="500"
            >
              {d.title}
            </text>
            <line
              x1={x + 8}
              y1="170"
              x2={x + 72}
              y2="170"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.4"
            />
            <text
              x={x + 8}
              y="200"
              fontSize="9"
              fontFamily="var(--font-inter), system-ui, sans-serif" fontStyle="italic"
              fill="currentColor"
              opacity="0.7"
            >
              {d.time}
            </text>
          </g>
        );
      })}

      {/* Bottom annotation */}
      <text
        x="20"
        y="250"
        fontSize="8"
        fontFamily="var(--font-inter), system-ui, sans-serif" fontStyle="italic"
        fill="currentColor"
        opacity="0.5"
      >
        STANDING SINCE JAN 2019 · WEEKLY ACCOUNTABILITY · NAMED OWNERS
      </text>
    </BlueprintFrame>
  );
}
