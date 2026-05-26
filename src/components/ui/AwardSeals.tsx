// Session 48 — AwardSeals.
//
// Three designed award-seal medallions, hand-coded SVG, sized to the
// site palette. NOT cheesy — premium and credible, the kind of seal
// you'd see on a serious agency site. Each is a circular badge with:
//   - An outer notched / engraved ring (the classic award border)
//   - Curved text around the top half (textPath on a circular arc)
//   - Curved text or "2026" at the bottom
//   - A central emblem hand-drawn for the award category
//   - Laurel-style flourish arcs flanking the emblem
//   - One green moment (signal accent) per seal — never more
//
// NOTE: The awarding bodies did not provide digital badges and advised
// designing our own representations. These are intentionally original
// marks; they do not replicate any third-party logo. If official assets
// are supplied later, swap the body of each component for the official
// SVG and keep the same export signature.

type SealProps = {
  size?: number;
};

// =====================================================================
// 1) Google Partner award — checkmark shield emblem
// =====================================================================

export function GooglePartnerSeal({ size = 110 }: SealProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      aria-label="Google Partner award seal, 2026"
      role="img"
    >
      <defs>
        {/* Arcs used for textPath. The top arc is drawn left -> right
            so the text reads correctly; the bottom arc is right -> left
            so the text isn't upside down. */}
        <path id="gp-arc-top" d="M 22 60 A 38 38 0 0 1 98 60" />
        <path id="gp-arc-bottom" d="M 98 62 A 38 38 0 0 1 22 62" />
        <linearGradient id="gp-ring" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0C0D0F" />
          <stop offset="100%" stopColor="#2A2D33" />
        </linearGradient>
        <linearGradient id="gp-emblem" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0C0D0F" />
          <stop offset="100%" stopColor="#1E2025" />
        </linearGradient>
      </defs>

      {/* Outer ring + notches */}
      <circle cx="60" cy="60" r="56" fill="url(#gp-ring)" />
      {/* 24 evenly-spaced notches on the outer edge for the engraved look */}
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i * 360) / 24;
        const rad = (a * Math.PI) / 180;
        const x1 = 60 + Math.cos(rad) * 54;
        const y1 = 60 + Math.sin(rad) * 54;
        const x2 = 60 + Math.cos(rad) * 56;
        const y2 = 60 + Math.sin(rad) * 56;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="rgba(255, 255, 255, 0.18)"
            strokeWidth="1"
          />
        );
      })}

      {/* Inner ring (the cream face of the seal) */}
      <circle cx="60" cy="60" r="49" fill="#F5F2EC" />
      <circle
        cx="60"
        cy="60"
        r="44"
        fill="none"
        stroke="#0C0D0F"
        strokeWidth="0.8"
        opacity="0.35"
      />

      {/* Curved top text */}
      <text
        fontFamily="var(--font-primary)"
        fontSize="8.5"
        fontWeight="800"
        letterSpacing="3"
        fill="#0C0D0F"
      >
        <textPath href="#gp-arc-top" startOffset="50%" textAnchor="middle">
          GOOGLE PARTNER
        </textPath>
      </text>

      {/* Curved bottom text — the award year */}
      <text
        fontFamily="var(--font-primary)"
        fontSize="7"
        fontWeight="700"
        letterSpacing="3.4"
        fill="#0C0D0F"
        opacity="0.7"
      >
        <textPath href="#gp-arc-bottom" startOffset="50%" textAnchor="middle">
          CERTIFIED · 2026
        </textPath>
      </text>

      {/* Laurel arcs flanking the central emblem */}
      <path
        d="M 28 60 Q 30 50 38 46"
        stroke="#6EF06E"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 31 64 Q 34 56 40 53"
        stroke="#6EF06E"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M 92 60 Q 90 50 82 46"
        stroke="#0C0D0F"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M 89 64 Q 86 56 80 53"
        stroke="#0C0D0F"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
        opacity="0.35"
      />

      {/* Central emblem — a shield with a check inside, original design */}
      <path
        d="M 60 39 L 73 44 V 56 Q 73 70 60 78 Q 47 70 47 56 V 44 Z"
        fill="url(#gp-emblem)"
      />
      <path
        d="M 53 58 L 58 63 L 67 51"
        stroke="#6EF06E"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// =====================================================================
// 2) AI Search Excellence award — spark / node emblem
// =====================================================================

export function AISearchSeal({ size = 110 }: SealProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      aria-label="AI Search Excellence award seal, 2026"
      role="img"
    >
      <defs>
        <path id="ai-arc-top" d="M 22 60 A 38 38 0 0 1 98 60" />
        <path id="ai-arc-bottom" d="M 98 62 A 38 38 0 0 1 22 62" />
        <linearGradient id="ai-ring" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0C0D0F" />
          <stop offset="100%" stopColor="#2A2D33" />
        </linearGradient>
        <linearGradient id="ai-spark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6EF06E" />
          <stop offset="100%" stopColor="#34C759" />
        </linearGradient>
      </defs>

      {/* Outer ring + notches */}
      <circle cx="60" cy="60" r="56" fill="url(#ai-ring)" />
      {Array.from({ length: 32 }).map((_, i) => {
        const a = (i * 360) / 32;
        const rad = (a * Math.PI) / 180;
        const x1 = 60 + Math.cos(rad) * 54.5;
        const y1 = 60 + Math.sin(rad) * 54.5;
        const x2 = 60 + Math.cos(rad) * 56;
        const y2 = 60 + Math.sin(rad) * 56;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="rgba(255, 255, 255, 0.16)"
            strokeWidth="1"
          />
        );
      })}

      <circle cx="60" cy="60" r="49" fill="#F5F2EC" />
      <circle
        cx="60"
        cy="60"
        r="44"
        fill="none"
        stroke="#0C0D0F"
        strokeWidth="0.8"
        opacity="0.35"
      />

      <text
        fontFamily="var(--font-primary)"
        fontSize="7.4"
        fontWeight="800"
        letterSpacing="2.4"
        fill="#0C0D0F"
      >
        <textPath href="#ai-arc-top" startOffset="50%" textAnchor="middle">
          AI SEARCH EXCELLENCE
        </textPath>
      </text>

      <text
        fontFamily="var(--font-primary)"
        fontSize="7"
        fontWeight="700"
        letterSpacing="3.4"
        fill="#0C0D0F"
        opacity="0.7"
      >
        <textPath href="#ai-arc-bottom" startOffset="50%" textAnchor="middle">
          AWARD · 2026
        </textPath>
      </text>

      {/* Connector node lines — a small constellation behind the spark */}
      <line x1="46" y1="60" x2="60" y2="60" stroke="#0C0D0F" strokeWidth="0.8" opacity="0.35" />
      <line x1="60" y1="60" x2="74" y2="60" stroke="#0C0D0F" strokeWidth="0.8" opacity="0.35" />
      <line x1="60" y1="46" x2="60" y2="60" stroke="#0C0D0F" strokeWidth="0.8" opacity="0.35" />
      <line x1="60" y1="60" x2="60" y2="74" stroke="#0C0D0F" strokeWidth="0.8" opacity="0.35" />
      <circle cx="46" cy="60" r="2" fill="#0C0D0F" opacity="0.75" />
      <circle cx="74" cy="60" r="2" fill="#0C0D0F" opacity="0.75" />
      <circle cx="60" cy="46" r="2" fill="#0C0D0F" opacity="0.75" />
      <circle cx="60" cy="74" r="2" fill="#0C0D0F" opacity="0.75" />

      {/* Central spark — the AI mark */}
      <path
        d="M 60 47 L 64 58 L 75 60 L 64 62 L 60 73 L 56 62 L 45 60 L 56 58 Z"
        fill="url(#ai-spark)"
      />
      <circle cx="60" cy="60" r="2.4" fill="#F5F2EC" />
    </svg>
  );
}

// =====================================================================
// 3) Viral Social Media award — upward trend / share emblem
// =====================================================================

export function ViralSocialSeal({ size = 110 }: SealProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      aria-label="Viral Social Media award seal, 2026"
      role="img"
    >
      <defs>
        <path id="vs-arc-top" d="M 22 60 A 38 38 0 0 1 98 60" />
        <path id="vs-arc-bottom" d="M 98 62 A 38 38 0 0 1 22 62" />
        <linearGradient id="vs-ring" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0C0D0F" />
          <stop offset="100%" stopColor="#2A2D33" />
        </linearGradient>
        <linearGradient id="vs-trend" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0C0D0F" />
          <stop offset="100%" stopColor="#34C759" />
        </linearGradient>
      </defs>

      {/* Outer ring + notches — slightly different pattern (16 wider notches) */}
      <circle cx="60" cy="60" r="56" fill="url(#vs-ring)" />
      {Array.from({ length: 16 }).map((_, i) => {
        const a = (i * 360) / 16;
        const rad = (a * Math.PI) / 180;
        const x1 = 60 + Math.cos(rad) * 53;
        const y1 = 60 + Math.sin(rad) * 53;
        const x2 = 60 + Math.cos(rad) * 56;
        const y2 = 60 + Math.sin(rad) * 56;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="rgba(255, 255, 255, 0.18)"
            strokeWidth="1.4"
          />
        );
      })}

      <circle cx="60" cy="60" r="49" fill="#F5F2EC" />
      <circle
        cx="60"
        cy="60"
        r="44"
        fill="none"
        stroke="#0C0D0F"
        strokeWidth="0.8"
        opacity="0.35"
      />

      <text
        fontFamily="var(--font-primary)"
        fontSize="7.6"
        fontWeight="800"
        letterSpacing="2.6"
        fill="#0C0D0F"
      >
        <textPath href="#vs-arc-top" startOffset="50%" textAnchor="middle">
          VIRAL SOCIAL MEDIA
        </textPath>
      </text>

      <text
        fontFamily="var(--font-primary)"
        fontSize="7"
        fontWeight="700"
        letterSpacing="3.4"
        fill="#0C0D0F"
        opacity="0.7"
      >
        <textPath href="#vs-arc-bottom" startOffset="50%" textAnchor="middle">
          AWARD · 2026
        </textPath>
      </text>

      {/* Baseline */}
      <line
        x1="42"
        y1="74"
        x2="80"
        y2="74"
        stroke="#0C0D0F"
        strokeWidth="0.8"
        opacity="0.35"
      />

      {/* Trend curve — exponential climb */}
      <path
        d="M 42 73 Q 56 71 64 64 T 78 46"
        stroke="url(#vs-trend)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Three points along the curve, last one largest (the viral moment) */}
      <circle cx="42" cy="73" r="2.2" fill="#0C0D0F" />
      <circle cx="60" cy="65" r="2.6" fill="#0C0D0F" />
      <circle cx="78" cy="46" r="4.2" fill="#6EF06E" />
      <circle cx="78" cy="46" r="7.5" fill="#6EF06E" opacity="0.18" />

      {/* Small share arrow above the curve apex */}
      <path
        d="M 70 38 L 84 38 M 78 32 L 84 38 L 78 44"
        stroke="#0C0D0F"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      />
    </svg>
  );
}
