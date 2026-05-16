interface Props {
  className?: string;
}

/**
 * Scales-of-justice variant with a subtle 4s left-right tilt on the
 * crossbeam and a faint pulse on the yellow accent. CSS-only motion,
 * stops on prefers-reduced-motion.
 */
export function ScalesOfJusticeAnimated({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 200 140"
      className={`scales-animated ${className}`}
      role="img"
      aria-label="Animated scales of justice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Vertical stand */}
      <line x1="100" y1="20" x2="100" y2="120" stroke="currentColor" strokeWidth="1.4" />
      <line x1="80" y1="120" x2="120" y2="120" stroke="currentColor" strokeWidth="1.4" />

      {/* Crossbeam (animated via CSS class) */}
      <g className="scales-animated__beam">
        <line x1="40" y1="38" x2="160" y2="38" stroke="currentColor" strokeWidth="1.4" />
        {/* Left scale */}
        <line x1="40" y1="38" x2="40" y2="60" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2,2" />
        <ellipse cx="40" cy="70" rx="22" ry="6" fill="none" stroke="currentColor" strokeWidth="1.3" />
        {/* Right scale */}
        <line x1="160" y1="38" x2="160" y2="60" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2,2" />
        <ellipse cx="160" cy="70" rx="22" ry="6" fill="none" stroke="currentColor" strokeWidth="1.3" />
      </g>

      {/* Yellow accent triangle at the balance pivot (pulses) */}
      <path
        d="M 94 22 L 106 22 L 100 14 Z"
        fill="var(--signal)"
        className="scales-animated__pulse"
      />
    </svg>
  );
}
