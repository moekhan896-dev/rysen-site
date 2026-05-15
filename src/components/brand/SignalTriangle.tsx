import type { FC } from "react";

interface SignalTriangleProps {
  size?: number;
  color?: string;
  rotation?: number;
  className?: string;
  ariaLabel?: string;
  decorative?: boolean;
}

export const SignalTriangle: FC<SignalTriangleProps> = ({
  size = 24,
  color = "var(--signal)",
  rotation = 0,
  className = "",
  ariaLabel = "Rysen signal",
  decorative = false,
}) => {
  const a11y = decorative
    ? { "aria-hidden": true as const }
    : { role: "img" as const, "aria-label": ariaLabel };

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={`signal-triangle ${className}`}
      style={{
        transform: rotation !== 0 ? `rotate(${rotation}deg)` : undefined,
        transformOrigin: "center",
      }}
      {...a11y}
    >
      <path d={`M 0 0 L 0 ${size} L ${size} ${size} Z`} fill={color} />
    </svg>
  );
};
