import type { FC } from "react";

type RysenLogoProps = {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "inverse";
  className?: string;
};

/**
 * RYSEN logotype, the canonical brand mark. Yellow corner-cut right-triangle
 * (right angle at top-left, hypotenuse from top-right to bottom-left, point at
 * bottom-left) followed by "RYSEN" in heavy sans-serif all caps. Four sizes.
 * Matches /public/assets/brand/rysen-logo-reference.png.
 */
export const RysenLogo: FC<RysenLogoProps> = ({
  size = "md",
  variant = "default",
  className = "",
}) => {
  const sizes = {
    sm: { triangle: 14, fontSize: 15, gap: 7, letterSpacing: "0.02em" },
    md: { triangle: 18, fontSize: 19, gap: 9, letterSpacing: "0.02em" },
    lg: { triangle: 28, fontSize: 30, gap: 12, letterSpacing: "0.015em" },
    xl: { triangle: 48, fontSize: 56, gap: 20, letterSpacing: "0.01em" },
  } as const;

  const { triangle, fontSize, gap, letterSpacing } = sizes[size];
  const textColor =
    variant === "inverse" ? "var(--paper-strong)" : "var(--ink-strong)";

  return (
    <span
      className={`rysen-logo ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: `${gap}px`,
        lineHeight: 1,
      }}
    >
      <svg
        width={triangle}
        height={triangle}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        style={{ flexShrink: 0, display: "block" }}
      >
        <polygon points="4,4 28,4 4,28" fill="#FFE817" />
      </svg>
      <span
        style={{
          fontFamily: "var(--font-inter), -apple-system, sans-serif",
          fontSize: `${fontSize}px`,
          fontWeight: 800,
          letterSpacing,
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
