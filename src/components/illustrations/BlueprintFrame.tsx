import type { ReactNode } from "react";

interface BlueprintFrameProps {
  width?: number;
  height?: number;
  className?: string;
  ariaLabel: string;
  children: ReactNode;
}

/**
 * Shared blueprint background. Use as the outer SVG for any architectural
 * line drawing, provides the 20px grid pattern that gives the system its
 * cohesive "drafting paper" feel.
 */
export function BlueprintFrame({
  width = 400,
  height = 300,
  className = "",
  ariaLabel,
  children,
}: BlueprintFrameProps) {
  const gridId = `blueprint-grid-${width}-${height}`;
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={`blueprint-illustration ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={ariaLabel}
    >
      <defs>
        <pattern
          id={gridId}
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
            opacity="0.05"
          />
        </pattern>
      </defs>
      <rect width={width} height={height} fill={`url(#${gridId})`} />
      {children}
    </svg>
  );
}
