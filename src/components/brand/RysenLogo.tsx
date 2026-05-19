import type { FC } from "react";

type RysenLogoProps = {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "inverse";
  className?: string;
};

/**
 * RYSEN logotype, the canonical brand mark. Yellow right-triangle (right angle
 * at top-left, hypotenuse from top-right to bottom-left, point at bottom-left)
 * followed by "RYSEN" in heavy sans-serif all caps. Three sizes.
 * Matches /public/assets/brand/rysen-logo-reference.png.
 */
export const RysenLogo: FC<RysenLogoProps> = ({
  size = "md",
  variant = "default",
  className = "",
}) => {
  const sizes = {
    sm: { triangle: 14, fontSize: 16, gap: 8 },
    md: { triangle: 20, fontSize: 22, gap: 10 },
    lg: { triangle: 32, fontSize: 36, gap: 14 },
  } as const;

  const { triangle, fontSize, gap } = sizes[size];
  const textColor =
    variant === "inverse" ? "var(--paper-text)" : "var(--ink-text)";

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
        style={{ flexShrink: 0 }}
        aria-hidden="true"
      >
        <polygon points="4,4 28,4 4,28" fill="#FFE817" />
      </svg>
      <span
        style={{
          fontFamily: "var(--font-inter), -apple-system, sans-serif",
          fontSize: `${fontSize}px`,
          fontWeight: 800,
          letterSpacing: "0.02em",
          color: textColor,
          textTransform: "uppercase",
        }}
      >
        RYSEN
      </span>
    </span>
  );
};
