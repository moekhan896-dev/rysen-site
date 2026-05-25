// Session 41 — Per-brand growth sparkline charts.
//
// Four 280x60 SVG sparklines, one for each brand card in
// BuiltByOperators. Each chart shows a filled area under the curve,
// the curve line, 5-8 data points, axis hairlines, and a current-
// position pulse on the final point.
//
//   QuattroGrowthChart      Slow steady curve over 4 years
//   HonestPlumbersChart     Stair-step climb to #1 in Michigan
//   HonestMaidsChart        Stair-step similar to plumbers
//   MadisonClarkChart       Near-vertical 60-day rocket
//
// Style:
//   - Brass area gradient under the curve.
//   - Brass curve line at 1.4px.
//   - Ink axis hairlines + final-point pulse circle.
//   - Geist Mono fontFamily for tick labels (when present).
//
// Reduced motion: the pulse on the final data point is implemented
// via SMIL <animate>, which is globally suppressed via the
// prefers-reduced-motion CSS rule appended this session.
//
// Why one Sparkline component instead of four: every chart shares
// the same visual structure (filled area + curve + dots + endpoint
// pulse). Centralizing the renderer keeps each per-brand export at
// a handful of lines (just the data points and labels) and means a
// styling tweak applies uniformly to all four charts.

const INK = "#0C0D0F";
const BRASS = "#34C759";

// ---------- Shared sparkline renderer ----------

type SparklineProps = {
  points: number[];
  // Optional X-axis labels rendered at start/end.
  startLabel?: string;
  endLabel?: string;
  // Optional Y-axis caption for the right side.
  yCaption?: string;
};

function Sparkline({ points, startLabel, endLabel, yCaption }: SparklineProps) {
  const width = 280;
  const height = 60;
  const padX = 10;
  const padY = 8;
  const innerW = width - padX * 2;
  const innerH = height - padY * 2;
  const maxY = Math.max(...points);
  const minY = Math.min(...points);
  const range = maxY - minY || 1;

  const xFor = (i: number) =>
    padX + (i / (points.length - 1)) * innerW;
  const yFor = (v: number) =>
    padY + innerH - ((v - minY) / range) * innerH;

  const linePath = points
    .map((v, i) => `${i === 0 ? "M" : "L"} ${xFor(i)} ${yFor(v)}`)
    .join(" ");
  const areaPath = `${linePath} L ${width - padX} ${height - padY} L ${padX} ${height - padY} Z`;

  const lastIndex = points.length - 1;
  const lastX = xFor(lastIndex);
  const lastY = yFor(points[lastIndex]);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      preserveAspectRatio="none"
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <linearGradient id={`bgc-fill-${startLabel ?? "s"}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={BRASS} stopOpacity="0.28" />
          <stop offset="100%" stopColor={BRASS} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Baseline hairline */}
      <line
        x1={padX}
        y1={height - padY}
        x2={width - padX}
        y2={height - padY}
        stroke={INK}
        strokeWidth="0.5"
        opacity="0.18"
      />

      {/* Filled area */}
      <path d={areaPath} fill={`url(#bgc-fill-${startLabel ?? "s"})`} />

      {/* Curve line */}
      <path
        d={linePath}
        stroke={BRASS}
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Data points */}
      {points.map((v, i) => (
        <circle
          key={i}
          cx={xFor(i)}
          cy={yFor(v)}
          r="1.6"
          fill={BRASS}
          opacity={i === lastIndex ? 1 : 0.7}
        />
      ))}

      {/* Current-position pulse on final point */}
      <circle cx={lastX} cy={lastY} r="5" fill={BRASS} opacity="0.25" />
      <circle cx={lastX} cy={lastY} r="3" fill={BRASS}>
        <animate
          attributeName="r"
          values="3;5;3"
          dur="2.4s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="1;0.6;1"
          dur="2.4s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Axis labels */}
      {startLabel && (
        <text
          x={padX}
          y={height - 1}
          fontSize="7"
          fill={INK}
          opacity="0.55"
          fontFamily="Geist, sans-serif"
          letterSpacing="0.08em"
        >
          {startLabel}
        </text>
      )}
      {endLabel && (
        <text
          x={width - padX}
          y={height - 1}
          fontSize="7"
          fontWeight="700"
          fill={BRASS}
          textAnchor="end"
          fontFamily="Geist, sans-serif"
          letterSpacing="0.08em"
        >
          {endLabel}
        </text>
      )}
      {yCaption && (
        <text
          x={padX}
          y={padY + 2}
          fontSize="7"
          fill={INK}
          opacity="0.45"
          fontFamily="Geist, sans-serif"
          letterSpacing="0.16em"
        >
          {yCaption}
        </text>
      )}
    </svg>
  );
}

// ---------- Per-brand sparklines ----------

// Slow steady curve over 4 years (months 1-48). 8 points climbing
// from a low base to 150K.
export function QuattroGrowthChart() {
  return (
    <Sparkline
      points={[8, 14, 22, 36, 54, 78, 108, 150]}
      startLabel="2021"
      endLabel="150K"
      yCaption="FOLLOWERS"
    />
  );
}

// Stair-step climb to #1 in Michigan. 8 points show the ranking
// position falling toward #1 (i.e. higher value = better rank).
export function HonestPlumbersChart() {
  return (
    <Sparkline
      points={[12, 22, 34, 42, 56, 68, 86, 100]}
      startLabel="2022"
      endLabel="#1 MI"
      yCaption="VISIBILITY"
    />
  );
}

// Similar stair-step for the maids brand — same trajectory shape but
// a slightly earlier inflection.
export function HonestMaidsChart() {
  return (
    <Sparkline
      points={[10, 18, 28, 42, 58, 76, 90, 100]}
      startLabel="2022"
      endLabel="#1 MI"
      yCaption="VISIBILITY"
    />
  );
}

// Near-vertical 60-day rocket for Madison Clark. 7 points compressed
// in time, ending at 100M views.
export function MadisonClarkChart() {
  return (
    <Sparkline
      points={[2, 8, 22, 48, 76, 92, 100]}
      startLabel="60D"
      endLabel="100M"
      yCaption="VIEWS"
    />
  );
}
