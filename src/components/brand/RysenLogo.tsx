import type { FC } from "react";

interface RysenLogoProps {
  size?: number;
  variant?: "on-ink" | "on-paper";
  className?: string;
}

/**
 * RysenLogo — the brand mark. A square with a yellow right triangle filling
 * the bottom-left half along the diagonal. The remaining top-right half stays
 * as the surface color (ink on light backgrounds, paper on dark backgrounds).
 */
export const RysenLogo: FC<RysenLogoProps> = ({
  size = 32,
  variant = "on-paper",
  className = "",
}) => {
  const squareColor = variant === "on-ink" ? "var(--paper-text)" : "var(--ink-text)";

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={`rysen-logo ${className}`}
      role="img"
      aria-label="Rysen"
    >
      <rect x="0" y="0" width={size} height={size} fill={squareColor} />
      <path
        d={`M 0 0 L 0 ${size} L ${size} ${size} Z`}
        fill="var(--signal)"
      />
    </svg>
  );
};
