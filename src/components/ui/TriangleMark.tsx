// Session 44 — TriangleMark.
//
// The Rysen corner-cut right triangle reused as a subtle brand
// motif across the site. Three variants:
//
//   solid    Filled triangle. Default. Used as a tiny accent next
//            to section labels and at decorative beats.
//   outline  Stroked-only. Used in list bullets and quieter spots.
//   ghost    Filled at very low opacity (~0.04 effective). Used as
//            a large background watermark in dark sections; never
//            in the foreground.
//
// Color palette:
//   signal   The Session 42 electric green. Used for accent beats.
//   ink      var(--text-primary). Used when the triangle should
//            sit in the same color family as the text it's next to.
//   muted    A soft grey for quiet/decorative bullets.
//
// Sizing: passed in px. The SVG viewBox stays 32x32 so the polygon
// renders crisply at any scale. Default size 12 to suit inline
// label accents; bump to 80-160 for ghost watermarks.

import type { CSSProperties, FC } from "react";

type TriangleVariant = "solid" | "outline" | "ghost";
type TriangleColor = "signal" | "ink" | "muted";

type TriangleMarkProps = {
  size?: number;
  variant?: TriangleVariant;
  color?: TriangleColor;
  className?: string;
  style?: CSSProperties;
  ariaHidden?: boolean;
};

const COLOR_MAP: Record<TriangleColor, string> = {
  signal: "var(--signal, #6EF06E)",
  ink: "var(--text-primary, #0C0D0F)",
  muted: "var(--text-quaternary, #B8BCC2)",
};

export const TriangleMark: FC<TriangleMarkProps> = ({
  size = 12,
  variant = "solid",
  color = "signal",
  className,
  style,
  ariaHidden = true,
}) => {
  const fillColor = COLOR_MAP[color];
  const ghostOpacity = 0.04;

  const isOutline = variant === "outline";
  const isGhost = variant === "ghost";

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden={ariaHidden}
      role={ariaHidden ? undefined : "img"}
      style={{ display: "inline-block", flexShrink: 0, ...style }}
    >
      <polygon
        points="4,4 28,4 4,28"
        fill={isOutline ? "none" : fillColor}
        fillOpacity={isGhost ? ghostOpacity : 1}
        stroke={isOutline ? fillColor : "none"}
        strokeWidth={isOutline ? 2 : 0}
        strokeLinejoin="round"
      />
    </svg>
  );
};

// Convenience preset: a large ghost watermark for background corners.
// Renders at a fixed 160px so call sites don't have to reach for the
// size knob. Positions itself via `style` from the caller.
export const TriangleWatermark: FC<{
  className?: string;
  style?: CSSProperties;
  size?: number;
  color?: TriangleColor;
}> = ({ className, style, size = 160, color = "ink" }) => (
  <TriangleMark
    size={size}
    variant="ghost"
    color={color}
    className={className}
    style={style}
  />
);
