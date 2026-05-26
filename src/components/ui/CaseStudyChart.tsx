// Session 50 — CaseStudyChart.
//
// Compact hand-coded SVG visual that lives inside a case-study card in
// the viral carousel. Each variant is a different visualisation tuned
// to its client's headline metric:
//
//   "calls-growth" — vertical bars climbing left -> right to a peak,
//      with the peak labeled (e.g. "348 calls"). Used for AWS Law Firm
//      and Tyler Family Law (different peak labels).
//
//   "growth-curve" — exponential growth line with an arrow head and a
//      "+186%" overlay. Used for Slim Dental.
//
//   "donut-gauge" — donut ring with a percentage label in the centre.
//      Used for Hartman Dermatology (38% AI citation rate).
//
// Every variant uses the cool palette with a single green accent and a
// reserved aspect-ratio so the carousel does not jump as cards fade in.

type ChartProps = {
  type: "calls-growth" | "growth-curve" | "donut-gauge";
  peakLabel?: string;
  bars?: ReadonlyArray<number>;
  growthLabel?: string;
  percent?: number;
  centerLabel?: string;
};

export function CaseStudyChart(props: ChartProps) {
  if (props.type === "calls-growth") return <CallsGrowthChart {...props} />;
  if (props.type === "growth-curve") return <GrowthCurveChart {...props} />;
  return <DonutGaugeChart {...props} />;
}

// ---------- calls-growth ----------

function CallsGrowthChart({
  peakLabel = "348 calls",
  bars = [12, 28, 44, 76, 118, 168, 232, 348],
}: ChartProps) {
  const W = 240;
  const H = 130;
  const PAD_X = 12;
  const PAD_TOP = 26;
  const PAD_BOTTOM = 18;
  const innerW = W - PAD_X * 2;
  const innerH = H - PAD_TOP - PAD_BOTTOM;
  const max = Math.max(...bars);
  const barW = (innerW / bars.length) * 0.66;
  const gap = (innerW / bars.length) * 0.34;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} fill="none" aria-hidden="true">
      {/* Baseline */}
      <line
        x1={PAD_X}
        y1={H - PAD_BOTTOM}
        x2={W - PAD_X}
        y2={H - PAD_BOTTOM}
        stroke="rgba(12, 13, 15, 0.18)"
        strokeWidth="0.8"
      />
      {bars.map((v, i) => {
        const h = (v / max) * innerH;
        const x = PAD_X + i * (barW + gap);
        const y = H - PAD_BOTTOM - h;
        const isPeak = i === bars.length - 1;
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={barW}
            height={h}
            rx="2"
            fill={isPeak ? "#34C759" : "#0C0D0F"}
            opacity={isPeak ? 1 : 0.55}
          />
        );
      })}
      {/* Peak label */}
      <text
        x={W - PAD_X}
        y={PAD_TOP - 6}
        fontSize="12"
        fontWeight="700"
        fill="var(--signal-deep, #2A8E2A)"
        textAnchor="end"
      >
        {peakLabel}
      </text>
      <text
        x={W - PAD_X}
        y={PAD_TOP + 6}
        fontSize="9"
        fontWeight="600"
        fill="var(--text-tertiary, #6B6968)"
        textAnchor="end"
        letterSpacing="1.2"
      >
        Q1 2026
      </text>
    </svg>
  );
}

// ---------- growth-curve ----------

function GrowthCurveChart({ growthLabel = "+186%" }: ChartProps) {
  const W = 240;
  const H = 130;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="cs-growth-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34C759" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#34C759" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line
        x1="14"
        y1={H - 16}
        x2={W - 14}
        y2={H - 16}
        stroke="rgba(12, 13, 15, 0.18)"
        strokeWidth="0.8"
      />
      {/* Area under curve */}
      <path
        d={`M 14 ${H - 18} Q 70 ${H - 22} 110 ${H - 38} T 200 32 L 200 ${
          H - 16
        } L 14 ${H - 16} Z`}
        fill="url(#cs-growth-fill)"
      />
      {/* Curve */}
      <path
        d={`M 14 ${H - 18} Q 70 ${H - 22} 110 ${H - 38} T 200 32`}
        stroke="#34C759"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
      {/* Arrow head at the peak */}
      <polygon points="200,28 214,32 200,36" fill="#34C759" />
      {/* Growth label */}
      <text
        x={W - 18}
        y="22"
        fontSize="18"
        fontWeight="800"
        fill="var(--signal-deep, #2A8E2A)"
        textAnchor="end"
      >
        {growthLabel}
      </text>
      <text
        x={W - 18}
        y="38"
        fontSize="9"
        fontWeight="600"
        fill="var(--text-tertiary, #6B6968)"
        textAnchor="end"
        letterSpacing="1.2"
      >
        QUALIFIED CALLS
      </text>
      {/* Markers along the path */}
      <circle cx="14" cy={H - 18} r="3" fill="#0C0D0F" />
      <circle cx="110" cy={H - 38} r="3" fill="#0C0D0F" opacity="0.8" />
      <circle cx="200" cy="32" r="4.5" fill="#34C759" />
      <circle cx="200" cy="32" r="9" fill="#34C759" opacity="0.2" />
    </svg>
  );
}

// ---------- donut-gauge ----------

function DonutGaugeChart({
  percent = 38,
  centerLabel = "AI citation",
}: ChartProps) {
  const W = 240;
  const H = 130;
  const cx = W / 2;
  const cy = H / 2 + 4;
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const filled = (percent / 100) * circumference;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} fill="none" aria-hidden="true">
      {/* Track */}
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        stroke="rgba(12, 13, 15, 0.12)"
        strokeWidth="9"
        fill="none"
      />
      {/* Filled arc */}
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        stroke="#34C759"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
        strokeDasharray={`${filled} ${circumference - filled}`}
        strokeDashoffset={circumference / 4}
        transform={`rotate(-90 ${cx} ${cy})`}
      />
      {/* Center percent */}
      <text
        x={cx}
        y={cy + 4}
        fontSize="26"
        fontWeight="800"
        fill="var(--signal-deep, #2A8E2A)"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {percent}%
      </text>
      <text
        x={cx}
        y={cy + 22}
        fontSize="9"
        fontWeight="600"
        fill="var(--text-tertiary, #6B6968)"
        textAnchor="middle"
        letterSpacing="1.2"
      >
        {centerLabel.toUpperCase()}
      </text>
    </svg>
  );
}
