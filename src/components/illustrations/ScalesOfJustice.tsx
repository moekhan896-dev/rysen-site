import { BlueprintFrame } from "./BlueprintFrame";

interface Props {
  className?: string;
}

export function ScalesOfJustice({ className = "" }: Props) {
  return (
    <BlueprintFrame
      width={400}
      height={300}
      className={className}
      ariaLabel="Architectural diagram of legal vertical playbook — scales of justice"
    >
      {/* Vertical pillar */}
      <line x1="200" y1="40" x2="200" y2="260" stroke="currentColor" strokeWidth="1.5" />

      {/* Horizontal beam */}
      <line x1="80" y1="80" x2="320" y2="80" stroke="currentColor" strokeWidth="1.5" />

      {/* Cap at top */}
      <line x1="190" y1="40" x2="210" y2="40" stroke="currentColor" strokeWidth="1.5" />

      {/* Left scale */}
      <line x1="80" y1="80" x2="80" y2="140" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
      <ellipse cx="80" cy="160" rx="50" ry="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="40" y1="160" x2="60" y2="160" stroke="currentColor" strokeWidth="0.5" />
      <line x1="100" y1="160" x2="120" y2="160" stroke="currentColor" strokeWidth="0.5" />

      {/* Right scale */}
      <line x1="320" y1="80" x2="320" y2="140" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
      <ellipse cx="320" cy="160" rx="50" ry="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="280" y1="160" x2="300" y2="160" stroke="currentColor" strokeWidth="0.5" />
      <line x1="340" y1="160" x2="360" y2="160" stroke="currentColor" strokeWidth="0.5" />

      {/* Base */}
      <line x1="170" y1="260" x2="230" y2="260" stroke="currentColor" strokeWidth="1.5" />

      {/* Yellow accent triangle (the Rysen mark) */}
      <path d="M 195 260 L 205 260 L 200 250 Z" fill="var(--signal)" />

      {/* Annotation labels (IBM Plex Mono via attribute, falls back to sans) */}
      <text x="20" y="200" fontSize="9" fontFamily="var(--font-mono), monospace" fill="currentColor" opacity="0.6">
        TRUST SIGNALS
      </text>
      <text x="282" y="200" fontSize="9" fontFamily="var(--font-mono), monospace" fill="currentColor" opacity="0.6">
        AUTHORITY
      </text>
      <text x="156" y="285" fontSize="9" fontFamily="var(--font-mono), monospace" fill="currentColor" opacity="0.6">
        FIRST POSITION
      </text>

      {/* Pointer hairlines */}
      <line x1="55" y1="195" x2="70" y2="180" stroke="currentColor" strokeWidth="0.5" />
      <line x1="310" y1="195" x2="295" y2="180" stroke="currentColor" strokeWidth="0.5" />
    </BlueprintFrame>
  );
}
