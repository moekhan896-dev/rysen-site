import type { ReactNode } from "react";

interface Series {
  label: string;
  values: ReadonlyArray<number>;
  highlight?: boolean;
  dashed?: boolean;
}

interface BlueprintChartProps {
  variant: "line" | "bar" | "area";
  series: ReadonlyArray<Series>;
  xLabels: ReadonlyArray<string>;
  yLabel?: string;
  caption?: string;
  height?: number;
  className?: string;
  ariaLabel: string;
}

/**
 * BlueprintChart — SVG-based chart with the architectural blueprint
 * aesthetic. Pure data-to-SVG transformation; no external chart library.
 * Hairline axes, IBM Plex Mono ticks, yellow accent for the highlighted
 * series, dashed lines for projections/baselines.
 */
export function BlueprintChart({
  variant,
  series,
  xLabels,
  yLabel,
  caption,
  height = 280,
  className = "",
  ariaLabel,
}: BlueprintChartProps) {
  const width = 600;
  const padL = 56;
  const padR = 24;
  const padT = 24;
  const padB = 48;
  const chartW = width - padL - padR;
  const chartH = height - padT - padB;

  const allValues = series.flatMap((s) => s.values);
  const max = Math.max(...allValues, 1);
  const min = 0;

  const xStep = chartW / Math.max(xLabels.length - 1, 1);

  function pointX(i: number): number {
    return padL + i * xStep;
  }

  function pointY(v: number): number {
    return padT + chartH - ((v - min) / (max - min)) * chartH;
  }

  function buildLinePath(values: ReadonlyArray<number>): string {
    return values
      .map((v, i) => `${i === 0 ? "M" : "L"} ${pointX(i)} ${pointY(v)}`)
      .join(" ");
  }

  function buildAreaPath(values: ReadonlyArray<number>): string {
    const top = values
      .map((v, i) => `${i === 0 ? "M" : "L"} ${pointX(i)} ${pointY(v)}`)
      .join(" ");
    const lastX = pointX(values.length - 1);
    const firstX = pointX(0);
    const baseY = padT + chartH;
    return `${top} L ${lastX} ${baseY} L ${firstX} ${baseY} Z`;
  }

  const yTicks = 4;
  const yTickValues = Array.from({ length: yTicks + 1 }, (_, i) =>
    Math.round((max * i) / yTicks)
  );

  return (
    <figure className={`blueprint-chart ${className}`}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={ariaLabel}
        className="blueprint-chart-svg"
      >
        {/* Y axis hairline */}
        <line
          x1={padL}
          y1={padT}
          x2={padL}
          y2={padT + chartH}
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.4"
        />
        {/* X axis hairline */}
        <line
          x1={padL}
          y1={padT + chartH}
          x2={padL + chartW}
          y2={padT + chartH}
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.4"
        />

        {/* Y ticks */}
        {yTickValues.map((v, i) => {
          const y = pointY(v);
          return (
            <g key={`yt-${i}`}>
              <line
                x1={padL - 4}
                y1={y}
                x2={padL}
                y2={y}
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.4"
              />
              <text
                x={padL - 8}
                y={y + 3}
                fontSize="9"
                fontFamily="var(--font-mono), monospace"
                fill="currentColor"
                textAnchor="end"
                opacity="0.6"
              >
                {v}
              </text>
            </g>
          );
        })}

        {/* X labels */}
        {xLabels.map((lbl, i) => (
          <text
            key={`xl-${i}`}
            x={pointX(i)}
            y={padT + chartH + 18}
            fontSize="9"
            fontFamily="var(--font-mono), monospace"
            fill="currentColor"
            textAnchor="middle"
            opacity="0.6"
          >
            {lbl}
          </text>
        ))}

        {/* Series */}
        {variant === "bar" &&
          series.map((s, si) => {
            const barW = (xStep * 0.6) / series.length;
            return (
              <g key={`bar-${si}`}>
                {s.values.map((v, i) => {
                  const x = pointX(i) - (barW * series.length) / 2 + barW * si;
                  const y = pointY(v);
                  return (
                    <rect
                      key={`b-${si}-${i}`}
                      x={x}
                      y={y}
                      width={barW}
                      height={padT + chartH - y}
                      fill={s.highlight ? "var(--signal)" : "currentColor"}
                      opacity={s.highlight ? "1" : "0.35"}
                    />
                  );
                })}
              </g>
            );
          })}

        {variant === "area" &&
          series.map((s, si) => (
            <g key={`area-${si}`}>
              <path
                d={buildAreaPath(s.values)}
                fill={s.highlight ? "var(--signal)" : "currentColor"}
                opacity={s.highlight ? "0.18" : "0.08"}
              />
              <path
                d={buildLinePath(s.values)}
                fill="none"
                stroke={s.highlight ? "var(--signal)" : "currentColor"}
                strokeWidth={s.highlight ? "1.8" : "1"}
                strokeDasharray={s.dashed ? "4,4" : undefined}
              />
            </g>
          ))}

        {variant === "line" &&
          series.map((s, si) => (
            <g key={`line-${si}`}>
              <path
                d={buildLinePath(s.values)}
                fill="none"
                stroke={s.highlight ? "var(--signal)" : "currentColor"}
                strokeWidth={s.highlight ? "1.8" : "1"}
                strokeDasharray={s.dashed ? "4,4" : undefined}
                opacity={s.highlight ? "1" : "0.6"}
              />
              {s.values.map((v, i) => (
                <circle
                  key={`pt-${si}-${i}`}
                  cx={pointX(i)}
                  cy={pointY(v)}
                  r={s.highlight ? 3 : 2}
                  fill={s.highlight ? "var(--signal)" : "currentColor"}
                />
              ))}
            </g>
          ))}

        {/* Y axis label */}
        {yLabel && (
          <text
            x={16}
            y={padT + chartH / 2}
            fontSize="9"
            fontFamily="var(--font-mono), monospace"
            fill="currentColor"
            textAnchor="middle"
            opacity="0.6"
            transform={`rotate(-90 16 ${padT + chartH / 2})`}
          >
            {yLabel}
          </text>
        )}
      </svg>
      {(caption || series.length > 1) && (
        <figcaption className="blueprint-chart-caption">
          {series.length > 1 && (
            <span className="blueprint-chart-legend">
              {series.map((s) => (
                <span key={s.label} className="blueprint-chart-legend-item">
                  <span
                    className={`blueprint-chart-swatch${
                      s.highlight ? " is-highlight" : ""
                    }${s.dashed ? " is-dashed" : ""}`}
                    aria-hidden="true"
                  />
                  {s.label}
                </span>
              ))}
            </span>
          )}
          {caption && <span className="blueprint-chart-cap">{caption}</span>}
        </figcaption>
      )}
    </figure>
  );
}

interface ChartContainerProps {
  className?: string;
  children: ReactNode;
}

/**
 * Wrapper that lets pages place a BlueprintChart inside a sharp-cornered
 * panel with consistent spacing.
 */
export function ChartContainer({ className = "", children }: ChartContainerProps) {
  return <div className={`blueprint-chart-container ${className}`}>{children}</div>;
}
