interface Props {
  className?: string;
}

/**
 * Stethoscope variant with a calm 3s pulse on the bell. The pulse
 * is gentle ambient signal, not a real heartbeat rhythm.
 */
export function StethoscopeAnimated({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 200 140"
      className={`stethoscope-animated ${className}`}
      role="img"
      aria-label="Animated stethoscope"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Earpieces */}
      <circle cx="60" cy="22" r="5" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="140" cy="22" r="5" fill="none" stroke="currentColor" strokeWidth="1.3" />

      {/* Tubing */}
      <path
        d="M 60 27 Q 60 70 100 90 Q 140 70 140 27"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      {/* Drop tubing to bell */}
      <line x1="100" y1="90" x2="100" y2="106" stroke="currentColor" strokeWidth="1.4" />

      {/* Bell (pulses) */}
      <circle
        cx="100"
        cy="116"
        r="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="stethoscope-animated__bell"
      />

      {/* Yellow accent triangle at tubing junction */}
      <path
        d="M 94 88 L 106 88 L 100 80 Z"
        fill="var(--signal)"
        className="stethoscope-animated__accent"
      />
    </svg>
  );
}
