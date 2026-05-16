import type { FC } from "react";

interface RysenLogoProps {
  size?: number;
  className?: string;
}

/**
 * RysenLogo, the brand mark. The yellow right triangle alone, no square
 * wrapper. The hypotenuse runs from top-left to bottom-right; right angle
 * is at the bottom-left corner.
 */
export const RysenLogo: FC<RysenLogoProps> = ({ size = 32, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={`rysen-logo ${className}`}
      role="img"
      aria-label="Rysen"
    >
      <path
        d={`M 0 0 L 0 ${size} L ${size} ${size} Z`}
        fill="var(--signal)"
      />
    </svg>
  );
};
