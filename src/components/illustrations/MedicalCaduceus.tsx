import { BlueprintFrame } from "./BlueprintFrame";

interface Props {
  className?: string;
}

export function MedicalCaduceus({ className = "" }: Props) {
  return (
    <BlueprintFrame
      width={400}
      height={300}
      className={className}
      ariaLabel="Architectural diagram of medical vertical playbook, caduceus"
    >
      {/* Central staff */}
      <line x1="200" y1="40" x2="200" y2="260" stroke="currentColor" strokeWidth="1.5" />

      {/* Wing left */}
      <path
        d="M 200 80 Q 140 60 110 100 Q 130 120 200 110"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Wing right */}
      <path
        d="M 200 80 Q 260 60 290 100 Q 270 120 200 110"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      {/* Snake left */}
      <path
        d="M 200 120 Q 160 150 200 180 Q 240 210 200 240"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="4,3"
      />
      {/* Snake right */}
      <path
        d="M 200 120 Q 240 150 200 180 Q 160 210 200 240"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="4,3"
      />

      {/* Top finial */}
      <circle cx="200" cy="40" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M 195 250 L 205 250 L 200 240 Z" fill="var(--signal)" />

      {/* Annotation labels */}
      <text x="20" y="100" fontSize="9" fontFamily="var(--font-inter), system-ui, sans-serif" fontStyle="italic" fill="currentColor" opacity="0.6">
        HIPAA-AWARE
      </text>
      <text x="290" y="100" fontSize="9" fontFamily="var(--font-inter), system-ui, sans-serif" fontStyle="italic" fill="currentColor" opacity="0.6">
        INTENT FUNNEL
      </text>
      <text x="160" y="285" fontSize="9" fontFamily="var(--font-inter), system-ui, sans-serif" fontStyle="italic" fill="currentColor" opacity="0.6">
        PATIENT TRUST
      </text>

      <line x1="65" y1="100" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" />
      <line x1="300" y1="100" x2="285" y2="100" stroke="currentColor" strokeWidth="0.5" />
    </BlueprintFrame>
  );
}
