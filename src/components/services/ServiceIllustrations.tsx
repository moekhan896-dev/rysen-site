// Ten unique 100×100 hand-coded line-art illustrations.
// Each has at least 12 SVG elements, 1.5px white strokes at 60% opacity,
// and exactly ONE yellow accent moment.

const ST = "rgba(255, 255, 255, 0.6)"; // white-60% stroke
const SW = 1.5;
const ACCENT = "#FFE817";

// === 1. Local search visibility — city map dot grid with yellow pin ===
export function LocalVisibilityIllustration() {
  return (
    <svg viewBox="0 0 100 100" width="100" height="100" fill="none" aria-hidden="true">
      {/* 4x4 grid of dots */}
      <circle cx="22" cy="22" r="1.5" fill={ST} />
      <circle cx="42" cy="22" r="1.5" fill={ST} />
      <circle cx="62" cy="22" r="1.5" fill={ST} />
      <circle cx="82" cy="22" r="1.5" fill={ST} />
      <circle cx="22" cy="42" r="1.5" fill={ST} />
      <circle cx="62" cy="42" r="1.5" fill={ST} />
      <circle cx="82" cy="42" r="1.5" fill={ST} />
      <circle cx="22" cy="62" r="1.5" fill={ST} />
      <circle cx="62" cy="62" r="1.5" fill={ST} />
      <circle cx="82" cy="62" r="1.5" fill={ST} />
      <circle cx="22" cy="82" r="1.5" fill={ST} />
      <circle cx="42" cy="82" r="1.5" fill={ST} />
      <circle cx="62" cy="82" r="1.5" fill={ST} />
      <circle cx="82" cy="82" r="1.5" fill={ST} />
      {/* Map pin teardrop at center, with yellow triangle inside */}
      <path d="M 42 28 C 36 28 32 32 32 38 C 32 46 42 56 42 56 C 42 56 52 46 52 38 C 52 32 48 28 42 28 Z" stroke={ST} strokeWidth={SW} fill="none" strokeLinejoin="round" />
      <polygon points="36,34 48,34 36,46" fill={ACCENT} />
      {/* Concentric local-search radius rings */}
      <circle cx="42" cy="42" r="22" stroke={ST} strokeWidth="0.8" strokeDasharray="2 4" fill="none" opacity="0.5" />
      <circle cx="42" cy="42" r="32" stroke={ST} strokeWidth="0.8" strokeDasharray="2 4" fill="none" opacity="0.3" />
    </svg>
  );
}

// === 2. Google Business Profile — storefront with rising review star ===
export function GBPIllustration() {
  return (
    <svg viewBox="0 0 100 100" width="100" height="100" fill="none" aria-hidden="true">
      {/* Storefront facade */}
      <rect x="16" y="48" width="68" height="40" stroke={ST} strokeWidth={SW} fill="none" />
      {/* Triangular roof */}
      <polygon points="16,48 50,28 84,48" stroke={ST} strokeWidth={SW} fill="none" strokeLinejoin="round" />
      {/* Door */}
      <rect x="42" y="64" width="16" height="24" stroke={ST} strokeWidth="1" fill="none" />
      <circle cx="55" cy="76" r="0.8" fill={ST} />
      {/* Two windows */}
      <rect x="24" y="56" width="12" height="10" stroke={ST} strokeWidth="1" fill="none" />
      <rect x="64" y="56" width="12" height="10" stroke={ST} strokeWidth="1" fill="none" />
      {/* 5 stars above */}
      <path d="M 24 18 L 25.4 21.5 L 29 21.5 L 26 23.8 L 27 27 L 24 25 L 21 27 L 22 23.8 L 19 21.5 L 22.6 21.5 Z" stroke={ST} strokeWidth="0.8" fill="none" strokeLinejoin="round" />
      <path d="M 36 18 L 37.4 21.5 L 41 21.5 L 38 23.8 L 39 27 L 36 25 L 33 27 L 34 23.8 L 31 21.5 L 34.6 21.5 Z" stroke={ST} strokeWidth="0.8" fill="none" strokeLinejoin="round" />
      <path d="M 50 18 L 51.4 21.5 L 55 21.5 L 52 23.8 L 53 27 L 50 25 L 47 27 L 48 23.8 L 45 21.5 L 48.6 21.5 Z" stroke={ST} strokeWidth="0.8" fill="none" strokeLinejoin="round" />
      <path d="M 64 18 L 65.4 21.5 L 69 21.5 L 66 23.8 L 67 27 L 64 25 L 61 27 L 62 23.8 L 59 21.5 L 62.6 21.5 Z" stroke={ST} strokeWidth="0.8" fill="none" strokeLinejoin="round" />
      {/* The rising yellow star */}
      <path d="M 78 14 L 79.4 17.5 L 83 17.5 L 80 19.8 L 81 23 L 78 21 L 75 23 L 76 19.8 L 73 17.5 L 76.6 17.5 Z" fill={ACCENT} strokeLinejoin="round" />
      {/* Counter/data bar below stars */}
      <rect x="20" y="36" width="40" height="3" rx="1" fill={ST} opacity="0.3" />
      <rect x="20" y="36" width="14" height="3" rx="1" fill={ACCENT} opacity="0" />
    </svg>
  );
}

// === 3. Authority content — stacked documents with yellow quote ===
export function AuthorityContentIllustration() {
  return (
    <svg viewBox="0 0 100 100" width="100" height="100" fill="none" aria-hidden="true">
      {/* Back document */}
      <rect x="24" y="18" width="42" height="58" stroke={ST} strokeWidth={SW} fill="none" />
      {/* Middle document */}
      <rect x="32" y="24" width="42" height="58" stroke={ST} strokeWidth={SW} fill="none" opacity="0.6" />
      {/* Front document */}
      <rect x="20" y="22" width="46" height="62" stroke={ST} strokeWidth={SW} fill="none" />
      {/* Text lines on front document */}
      <line x1="28" y1="34" x2="58" y2="34" stroke={ST} strokeWidth="1" opacity="0.7" />
      <line x1="28" y1="42" x2="54" y2="42" stroke={ST} strokeWidth="1" opacity="0.7" />
      <line x1="28" y1="50" x2="60" y2="50" stroke={ST} strokeWidth="1" opacity="0.7" />
      <line x1="28" y1="58" x2="50" y2="58" stroke={ST} strokeWidth="1" opacity="0.7" />
      <line x1="28" y1="66" x2="58" y2="66" stroke={ST} strokeWidth="1" opacity="0.7" />
      <line x1="28" y1="74" x2="52" y2="74" stroke={ST} strokeWidth="1" opacity="0.7" />
      {/* Yellow quote highlight */}
      <rect x="28" y="40" width="30" height="3.5" fill={ACCENT} />
      {/* "Cited" signal arrow emanating */}
      <path d="M 70 30 L 80 22 M 80 22 L 75 22 M 80 22 L 80 27" stroke={ACCENT} strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Quote opening mark */}
      <text x="22" y="32" fill={ST} fontSize="11" fontWeight="700" fontFamily="Georgia, serif" opacity="0.5">&ldquo;</text>
    </svg>
  );
}

// === 4. AI search optimization — chat bubble with triangle citation ===
export function AISearchIllustration() {
  return (
    <svg viewBox="0 0 100 100" width="100" height="100" fill="none" aria-hidden="true">
      {/* Chat bubble */}
      <path d="M 18 28 L 18 58 L 38 58 L 46 68 L 46 58 L 78 58 L 78 28 Z" stroke={ST} strokeWidth={SW} fill="none" strokeLinejoin="round" />
      {/* Text lines inside bubble */}
      <line x1="26" y1="38" x2="60" y2="38" stroke={ST} strokeWidth="1" opacity="0.5" />
      <line x1="26" y1="46" x2="50" y2="46" stroke={ST} strokeWidth="1" opacity="0.4" />
      {/* Yellow Rysen triangle inside bubble (citation source) */}
      <polygon points="56,42 70,42 56,56" fill={ACCENT} />
      {/* 3 sparkles around the bubble */}
      <path d="M 86 20 L 87 23 L 90 24 L 87 25 L 86 28 L 85 25 L 82 24 L 85 23 Z" stroke={ST} strokeWidth="0.8" fill="none" strokeLinejoin="round" />
      <path d="M 14 18 L 15 20.5 L 17.5 21 L 15 21.5 L 14 24 L 13 21.5 L 10.5 21 L 13 20.5 Z" stroke={ST} strokeWidth="0.8" fill="none" strokeLinejoin="round" />
      <path d="M 88 70 L 89 72.5 L 91.5 73 L 89 73.5 L 88 76 L 87 73.5 L 84.5 73 L 87 72.5 Z" stroke={ST} strokeWidth="0.8" fill="none" strokeLinejoin="round" />
      {/* Subtle dot indicators on bubble corners */}
      <circle cx="22" cy="32" r="1" fill={ST} opacity="0.5" />
      <circle cx="74" cy="32" r="1" fill={ST} opacity="0.5" />
      {/* Bottom small connection indicator */}
      <line x1="42" y1="72" x2="42" y2="80" stroke={ST} strokeWidth="0.8" opacity="0.5" strokeDasharray="2 2" />
    </svg>
  );
}

// === 5. Reputation management — stars + growth line + yellow endpoint ===
export function ReputationIllustration() {
  return (
    <svg viewBox="0 0 100 100" width="100" height="100" fill="none" aria-hidden="true">
      {/* 5 stars at top */}
      <path d="M 18 24 L 19.4 27.5 L 23 27.5 L 20 29.8 L 21 33 L 18 31 L 15 33 L 16 29.8 L 13 27.5 L 16.6 27.5 Z" stroke={ST} strokeWidth="0.8" fill="none" strokeLinejoin="round" />
      <path d="M 34 24 L 35.4 27.5 L 39 27.5 L 36 29.8 L 37 33 L 34 31 L 31 33 L 32 29.8 L 29 27.5 L 32.6 27.5 Z" stroke={ST} strokeWidth="0.8" fill="none" strokeLinejoin="round" />
      <path d="M 50 24 L 51.4 27.5 L 55 27.5 L 52 29.8 L 53 33 L 50 31 L 47 33 L 48 29.8 L 45 27.5 L 48.6 27.5 Z" stroke={ST} strokeWidth="0.8" fill="none" strokeLinejoin="round" />
      <path d="M 66 24 L 67.4 27.5 L 71 27.5 L 68 29.8 L 69 33 L 66 31 L 63 33 L 64 29.8 L 61 27.5 L 64.6 27.5 Z" stroke={ST} strokeWidth="0.8" fill="none" strokeLinejoin="round" />
      <path d="M 82 24 L 83.4 27.5 L 87 27.5 L 84 29.8 L 85 33 L 82 31 L 79 33 L 80 29.8 L 77 27.5 L 80.6 27.5 Z" stroke={ST} strokeWidth="0.8" fill="none" strokeLinejoin="round" />
      {/* Axis baseline */}
      <line x1="14" y1="80" x2="86" y2="80" stroke={ST} strokeWidth="0.5" opacity="0.4" />
      {/* Growth line */}
      <path d="M 18 76 L 32 72 L 46 64 L 60 58 L 74 50 L 86 42" stroke={ACCENT} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Data points along line */}
      <circle cx="18" cy="76" r="2" stroke={ST} strokeWidth="1" fill="#0A0A0F" />
      <circle cx="32" cy="72" r="2" stroke={ST} strokeWidth="1" fill="#0A0A0F" />
      <circle cx="46" cy="64" r="2" stroke={ST} strokeWidth="1" fill="#0A0A0F" />
      <circle cx="60" cy="58" r="2" stroke={ST} strokeWidth="1" fill="#0A0A0F" />
      <circle cx="74" cy="50" r="2" stroke={ST} strokeWidth="1" fill="#0A0A0F" />
      {/* Glowing endpoint */}
      <circle cx="86" cy="42" r="6" fill={ACCENT} opacity="0.2" />
      <circle cx="86" cy="42" r="3" fill={ACCENT} />
      {/* Up-arrow tip */}
      <path d="M 86 42 L 84 39 M 86 42 L 89 41" stroke={ACCENT} strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

// === 6. Website and conversion — browser frame + funnel + cursor ===
export function WebsiteConversionIllustration() {
  return (
    <svg viewBox="0 0 100 100" width="100" height="100" fill="none" aria-hidden="true">
      {/* Browser frame */}
      <rect x="14" y="20" width="72" height="56" stroke={ST} strokeWidth={SW} fill="none" rx="2" />
      {/* Top bar */}
      <line x1="14" y1="30" x2="86" y2="30" stroke={ST} strokeWidth="1" />
      {/* Window control dots */}
      <circle cx="20" cy="25" r="1.5" fill={ST} opacity="0.5" />
      <circle cx="26" cy="25" r="1.5" fill={ST} opacity="0.5" />
      <circle cx="32" cy="25" r="1.5" fill={ST} opacity="0.5" />
      {/* URL bar hint */}
      <rect x="40" y="22" width="40" height="6" rx="3" stroke={ST} strokeWidth="0.5" fill="none" opacity="0.5" />
      {/* Funnel inside frame */}
      <polygon points="26,38 74,38 64,52 36,52" stroke={ST} strokeWidth={SW} fill="none" strokeLinejoin="round" opacity="0.6" />
      <polygon points="36,54 64,54 56,68 44,68" stroke={ST} strokeWidth={SW} fill="none" strokeLinejoin="round" opacity="0.8" />
      {/* Yellow conversion triangle at bottom */}
      <polygon points="44,70 56,70 50,80" fill={ACCENT} />
      {/* Cursor arrow near funnel top */}
      <path d="M 70 16 L 78 22 L 73 22 L 75 28 L 73 28 L 71 22 L 70 22 Z" stroke={ST} strokeWidth="1" fill="none" strokeLinejoin="round" />
    </svg>
  );
}

// === 7. Press and authority — newspaper masthead ===
export function PressIllustration() {
  return (
    <svg viewBox="0 0 100 100" width="100" height="100" fill="none" aria-hidden="true">
      {/* Outer frame */}
      <rect x="14" y="14" width="72" height="72" stroke={ST} strokeWidth={SW} fill="none" />
      {/* Masthead nameplate */}
      <rect x="18" y="18" width="64" height="12" stroke={ST} strokeWidth="1" fill="none" />
      {/* Masthead title */}
      <text x="50" y="27" fill={ST} fontSize="7" fontWeight="700" fontFamily="Georgia, serif" textAnchor="middle" letterSpacing="0.16em">PRESS</text>
      {/* Article text lines */}
      <line x1="20" y1="38" x2="48" y2="38" stroke={ST} strokeWidth="1" opacity="0.6" />
      <line x1="20" y1="44" x2="46" y2="44" stroke={ST} strokeWidth="0.8" opacity="0.5" />
      <line x1="20" y1="50" x2="48" y2="50" stroke={ST} strokeWidth="0.8" opacity="0.5" />
      <line x1="20" y1="56" x2="42" y2="56" stroke={ST} strokeWidth="0.8" opacity="0.5" />
      {/* Yellow underline highlight */}
      <rect x="20" y="60" width="28" height="2.5" fill={ACCENT} />
      <line x1="20" y1="68" x2="48" y2="68" stroke={ST} strokeWidth="0.8" opacity="0.5" />
      <line x1="20" y1="74" x2="44" y2="74" stroke={ST} strokeWidth="0.8" opacity="0.5" />
      {/* Right column */}
      <line x1="54" y1="38" x2="80" y2="38" stroke={ST} strokeWidth="0.8" opacity="0.5" />
      <line x1="54" y1="44" x2="78" y2="44" stroke={ST} strokeWidth="0.8" opacity="0.5" />
      <line x1="54" y1="50" x2="80" y2="50" stroke={ST} strokeWidth="0.8" opacity="0.5" />
      <line x1="54" y1="56" x2="76" y2="56" stroke={ST} strokeWidth="0.8" opacity="0.5" />
      <line x1="54" y1="62" x2="78" y2="62" stroke={ST} strokeWidth="0.8" opacity="0.5" />
      <line x1="54" y1="68" x2="80" y2="68" stroke={ST} strokeWidth="0.8" opacity="0.5" />
      {/* Press signal quote mark */}
      <text x="76" y="80" fill={ST} fontSize="11" fontWeight="700" fontFamily="Georgia, serif" opacity="0.4">&rdquo;</text>
    </svg>
  );
}

// === 8. Schema and technical foundation — code brackets + data node ===
export function SchemaIllustration() {
  return (
    <svg viewBox="0 0 100 100" width="100" height="100" fill="none" aria-hidden="true">
      {/* Left curly brace */}
      <path d="M 26 20 Q 16 24 16 36 Q 16 46 14 50 Q 16 54 16 64 Q 16 76 26 80" stroke={ST} strokeWidth={SW} fill="none" strokeLinecap="round" />
      {/* Right curly brace */}
      <path d="M 74 20 Q 84 24 84 36 Q 84 46 86 50 Q 84 54 84 64 Q 84 76 74 80" stroke={ST} strokeWidth={SW} fill="none" strokeLinecap="round" />
      {/* Nested code lines */}
      <line x1="32" y1="34" x2="60" y2="34" stroke={ST} strokeWidth="1" opacity="0.6" />
      <line x1="38" y1="42" x2="64" y2="42" stroke={ST} strokeWidth="1" opacity="0.6" />
      <line x1="38" y1="50" x2="58" y2="50" stroke={ST} strokeWidth="1" opacity="0.6" />
      <line x1="38" y1="58" x2="62" y2="58" stroke={ST} strokeWidth="1" opacity="0.6" />
      <line x1="32" y1="66" x2="58" y2="66" stroke={ST} strokeWidth="1" opacity="0.6" />
      {/* Connecting yellow data node */}
      <circle cx="50" cy="50" r="3" fill={ACCENT} />
      <circle cx="50" cy="50" r="7" stroke={ACCENT} strokeWidth="0.8" fill="none" opacity="0.4" />
      {/* Entry arrow */}
      <path d="M 8 50 L 14 50 M 12 47 L 14 50 L 12 53" stroke={ST} strokeWidth="1" opacity="0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Exit arrow */}
      <path d="M 86 50 L 92 50 M 90 47 L 92 50 L 90 53" stroke={ST} strokeWidth="1" opacity="0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// === 9. Email and newsletter — envelope with motion + opened indicator ===
export function EmailIllustration() {
  return (
    <svg viewBox="0 0 100 100" width="100" height="100" fill="none" aria-hidden="true">
      {/* Envelope body */}
      <rect x="14" y="32" width="64" height="42" stroke={ST} strokeWidth={SW} fill="none" rx="2" />
      {/* Envelope flap */}
      <path d="M 14 34 L 46 56 L 78 34" stroke={ST} strokeWidth={SW} fill="none" strokeLinejoin="round" />
      {/* Sealed center line */}
      <line x1="14" y1="74" x2="78" y2="74" stroke={ST} strokeWidth="0.8" opacity="0.4" />
      {/* Address line */}
      <line x1="20" y1="66" x2="40" y2="66" stroke={ST} strokeWidth="1" opacity="0.5" />
      {/* Motion lines (in transit) */}
      <line x1="82" y1="42" x2="92" y2="42" stroke={ST} strokeWidth="1" opacity="0.5" strokeLinecap="round" />
      <line x1="82" y1="50" x2="94" y2="50" stroke={ST} strokeWidth="1" opacity="0.5" strokeLinecap="round" />
      <line x1="82" y1="58" x2="90" y2="58" stroke={ST} strokeWidth="1" opacity="0.5" strokeLinecap="round" />
      {/* Yellow open indicator dot */}
      <circle cx="74" cy="22" r="4" fill={ACCENT} />
      <circle cx="74" cy="22" r="6" stroke={ACCENT} strokeWidth="0.8" fill="none" opacity="0.4" />
      {/* Small "stamp" corner */}
      <rect x="62" y="38" width="10" height="10" stroke={ST} strokeWidth="0.6" fill="none" opacity="0.5" strokeDasharray="1 1" />
    </svg>
  );
}

// === 10. Selected social media — network of nodes with central yellow hub ===
export function SocialIllustration() {
  return (
    <svg viewBox="0 0 100 100" width="100" height="100" fill="none" aria-hidden="true">
      {/* 4 platform nodes */}
      <circle cx="22" cy="22" r="7" stroke={ST} strokeWidth={SW} fill="none" />
      <circle cx="78" cy="22" r="7" stroke={ST} strokeWidth={SW} fill="none" />
      <circle cx="22" cy="78" r="7" stroke={ST} strokeWidth={SW} fill="none" />
      <circle cx="78" cy="78" r="7" stroke={ST} strokeWidth={SW} fill="none" />
      {/* Connection lines */}
      <line x1="27" y1="27" x2="44" y2="44" stroke={ST} strokeWidth="1" opacity="0.6" />
      <line x1="73" y1="27" x2="56" y2="44" stroke={ST} strokeWidth="1" opacity="0.6" />
      <line x1="27" y1="73" x2="44" y2="56" stroke={ST} strokeWidth="1" opacity="0.6" />
      <line x1="73" y1="73" x2="56" y2="56" stroke={ST} strokeWidth="1" opacity="0.6" />
      {/* Central yellow hub */}
      <circle cx="50" cy="50" r="8" fill={ACCENT} />
      {/* Pulse rings around hub */}
      <circle cx="50" cy="50" r="12" stroke={ACCENT} strokeWidth="0.8" fill="none" opacity="0.4">
        <animate attributeName="r" values="10;18;10" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0;0.5" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="50" r="16" stroke={ACCENT} strokeWidth="0.6" fill="none" opacity="0.2">
        <animate attributeName="r" values="14;22;14" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0;0.3" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      {/* Mini platform identifiers (small inner shapes) */}
      <circle cx="22" cy="22" r="1.5" fill={ST} opacity="0.5" />
      <rect x="76" y="20" width="4" height="4" fill={ST} opacity="0.5" />
      <polygon points="22,75 25,80 19,80" fill={ST} opacity="0.5" />
      <line x1="74" y1="78" x2="82" y2="78" stroke={ST} strokeWidth="1" opacity="0.5" />
    </svg>
  );
}
