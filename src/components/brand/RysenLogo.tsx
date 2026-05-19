import type { FC } from "react";

type RysenLogoProps = {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "inverse";
  className?: string;
  withGlow?: boolean;
};

/**
 * RYSEN logotype, the canonical brand mark. Yellow corner-cut right-triangle
 * (right angle at top-left, hypotenuse from top-right to bottom-left, point
 * at bottom-left) followed by "RYSEN" in heavy sans-serif all caps.
 * Default variant: white text (for dark backgrounds).
 * Inverse variant: dark text (for light contrast sections).
 */
export const RysenLogo: FC<RysenLogoProps> = ({
  size = "md",
  variant = "default",
  className = "",
  withGlow = false,
}) => {
  const sizes = {
    sm: { tri: 14, font: 15, gap: 7, letter: "0.02em" },
    md: { tri: 18, font: 19, gap: 9, letter: "0.02em" },
    lg: { tri: 28, font: 30, gap: 12, letter: "0.015em" },
    xl: { tri: 48, font: 56, gap: 20, letter: "0.01em" },
  } as const;

  const { tri, font, gap, letter } = sizes[size];
  const textColor =
    variant === "inverse" ? "var(--text-on-light)" : "var(--text-on-dark)";

  return (
    <span
      className={`rysen-logo ${withGlow ? "has-glow" : ""} ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: `${gap}px`,
        lineHeight: 1,
      }}
    >
      <svg
        width={tri}
        height={tri}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        style={{
          flexShrink: 0,
          display: "block",
          filter: withGlow ? "drop-shadow(0 0 8px var(--signal-glow))" : "none",
        }}
      >
        <polygon points="4,4 28,4 4,28" fill="#FFE817" />
      </svg>
      <span
        style={{
          fontFamily: "var(--font-inter), -apple-system, sans-serif",
          fontSize: `${font}px`,
          fontWeight: 800,
          letterSpacing: letter,
          color: textColor,
          textTransform: "uppercase",
          lineHeight: 1,
        }}
      >
        RYSEN
      </span>
    </span>
  );
};
