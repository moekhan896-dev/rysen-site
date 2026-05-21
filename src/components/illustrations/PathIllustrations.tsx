// Session 41 — Path illustrations + per-bullet mini icons.
//
// Two large editorial line-art illustrations for the two engagement
// paths in TheOffer, plus a set of single-glyph icons used inside
// the path-card bullet lists.
//
//   EstablishPathIllustration — stylized staircase climbing from
//     lower-left to upper-right. Five steps labeled with shrinking
//     position numbers (12 → 8 → 5 → 3 → 1). The active climb is
//     marked between Position 5 and Position 3 with a brass arrow
//     and a Rysen triangle on the top step. Background grid dots,
//     ambient corner reticles, upward tail arrow.
//
//   DominatePathIllustration — central hexagonal shield representing
//     the metro. A Rysen triangle inside the shield. Six competitor
//     shapes around it, four with red X overlays (pushed out). Brass
//     perimeter lines radiating outward, a "CLOSED" indicator chip,
//     ambient grid, optional radar-sweep arc.
//
// Style mirrors the other illustration modules:
//   - INK (#18171A) structural strokes, BRASS (#A88B47) single
//     chromatic accent, signal yellow only on the Rysen triangle.
//   - Geist Sans annotations with wide letter spacing.
//   - 1.2-1.8px primary stroke, 0.4-0.7px ambient detail.
//   - Corner reticles on every illustration for editorial framing.

const INK = "#18171A";
const BRASS = "#A88B47";

function PathReticles() {
  return (
    <>
      <path
        d="M 8 8 L 18 8 L 18 18"
        stroke={BRASS}
        strokeWidth="0.7"
        fill="none"
        opacity="0.55"
        strokeLinecap="round"
      />
      <path
        d="M 312 8 L 302 8 L 302 18"
        stroke={BRASS}
        strokeWidth="0.7"
        fill="none"
        opacity="0.55"
        strokeLinecap="round"
      />
      <path
        d="M 8 232 L 18 232 L 18 222"
        stroke={BRASS}
        strokeWidth="0.7"
        fill="none"
        opacity="0.55"
        strokeLinecap="round"
      />
      <path
        d="M 312 232 L 302 232 L 302 222"
        stroke={BRASS}
        strokeWidth="0.7"
        fill="none"
        opacity="0.55"
        strokeLinecap="round"
      />
    </>
  );
}

// =====================================================================
// 1) ESTABLISH PATH — climbing staircase
// =====================================================================

export function EstablishPathIllustration() {
  return (
    <svg
      viewBox="0 0 320 240"
      width="320"
      height="240"
      fill="none"
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <pattern id="est-grid" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.7" fill="rgba(24,23,26,0.07)" />
        </pattern>
        <linearGradient id="est-step-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#FAFAF8" />
        </linearGradient>
        <radialGradient id="est-summit-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={BRASS} stopOpacity="0.25" />
          <stop offset="100%" stopColor={BRASS} stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="320" height="240" fill="#FCFCFA" />
      <rect x="0" y="0" width="320" height="240" fill="url(#est-grid)" />

      {/* Summit halo */}
      <circle cx="270" cy="60" r="40" fill="url(#est-summit-halo)" />

      {/* Baseline */}
      <line
        x1="20"
        y1="208"
        x2="300"
        y2="208"
        stroke={INK}
        strokeWidth="0.8"
        opacity="0.45"
      />

      {/* Five staircase steps rising from lower-left to upper-right */}
      {/* Step 1 — Position 12 (largest at bottom, faded) */}
      <g transform="translate(28, 168)">
        <rect width="46" height="40" rx="2" stroke={INK} strokeWidth="1.2" fill="url(#est-step-grad)" opacity="0.7" />
        <rect width="46" height="3" fill={INK} opacity="0.25" />
        <text x="23" y="22" fontSize="11" fontWeight="700" fill={INK} fillOpacity="0.45" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.04em">POS 12</text>
        <line x1="6" y1="32" x2="40" y2="32" stroke={INK} strokeWidth="0.4" opacity="0.35" />
      </g>

      {/* Step 2 — Position 8 */}
      <g transform="translate(80, 138)">
        <rect width="46" height="70" rx="2" stroke={INK} strokeWidth="1.2" fill="url(#est-step-grad)" opacity="0.8" />
        <rect width="46" height="3" fill={INK} opacity="0.35" />
        <text x="23" y="22" fontSize="11" fontWeight="700" fill={INK} fillOpacity="0.55" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.04em">POS 8</text>
        <line x1="6" y1="34" x2="40" y2="34" stroke={INK} strokeWidth="0.4" opacity="0.35" />
        <line x1="6" y1="44" x2="40" y2="44" stroke={INK} strokeWidth="0.4" opacity="0.3" />
      </g>

      {/* Step 3 — Position 5 */}
      <g transform="translate(132, 108)">
        <rect width="46" height="100" rx="2" stroke={INK} strokeWidth="1.2" fill="url(#est-step-grad)" />
        <rect width="46" height="3" fill={INK} opacity="0.5" />
        <text x="23" y="22" fontSize="11" fontWeight="700" fill={INK} fillOpacity="0.7" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.04em">POS 5</text>
        <line x1="6" y1="34" x2="40" y2="34" stroke={INK} strokeWidth="0.4" opacity="0.4" />
        <line x1="6" y1="44" x2="40" y2="44" stroke={INK} strokeWidth="0.4" opacity="0.35" />
        <line x1="6" y1="54" x2="40" y2="54" stroke={INK} strokeWidth="0.4" opacity="0.3" />
      </g>

      {/* Climb indicator between Position 5 and Position 3 (active beat) */}
      <g transform="translate(178, 90)">
        <line x1="0" y1="18" x2="6" y2="0" stroke={BRASS} strokeWidth="1.8" strokeLinecap="round" />
        <polygon points="2,2 10,-2 6,6" fill={BRASS} />
        <text x="16" y="6" fontSize="8" fontWeight="700" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="0.16em">+2 RANKS</text>
      </g>

      {/* Step 4 — Position 3 */}
      <g transform="translate(184, 78)">
        <rect width="46" height="130" rx="2" stroke={INK} strokeWidth="1.2" fill="url(#est-step-grad)" />
        <rect width="46" height="3" fill={INK} opacity="0.6" />
        <text x="23" y="22" fontSize="11" fontWeight="700" fill={INK} textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.04em">POS 3</text>
        <line x1="6" y1="34" x2="40" y2="34" stroke={INK} strokeWidth="0.4" opacity="0.45" />
        <line x1="6" y1="44" x2="40" y2="44" stroke={INK} strokeWidth="0.4" opacity="0.4" />
        <line x1="6" y1="54" x2="40" y2="54" stroke={INK} strokeWidth="0.4" opacity="0.35" />
        <line x1="6" y1="64" x2="40" y2="64" stroke={INK} strokeWidth="0.4" opacity="0.3" />
      </g>

      {/* Step 5 — Position 1 (summit, brass) */}
      <g transform="translate(236, 48)">
        <rect width="46" height="160" rx="2" stroke={BRASS} strokeWidth="1.5" fill={BRASS} fillOpacity="0.12" />
        <rect width="46" height="6" fill={BRASS} />
        <text x="23" y="22" fontSize="11" fontWeight="700" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.04em">POS 1</text>
        <line x1="6" y1="34" x2="40" y2="34" stroke={BRASS} strokeWidth="0.4" opacity="0.55" />
        <line x1="6" y1="44" x2="40" y2="44" stroke={BRASS} strokeWidth="0.4" opacity="0.45" />
        <line x1="6" y1="54" x2="40" y2="54" stroke={BRASS} strokeWidth="0.4" opacity="0.4" />
        <line x1="6" y1="64" x2="40" y2="64" stroke={BRASS} strokeWidth="0.4" opacity="0.35" />
        {/* Rysen triangle perched on top */}
        <g transform="translate(15, -16)">
          <polygon points="0,0 16,0 0,16" fill="#FFE817" stroke={INK} strokeWidth="0.6" />
        </g>
        {/* "WIN" beneath triangle */}
        <text x="23" y="100" fontSize="8" fontWeight="700" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.18em">WIN</text>
      </g>

      {/* Upward arrow with tail across the entire composition */}
      <path
        d="M 30 200 Q 100 180 160 140 Q 220 100 270 60"
        stroke={BRASS}
        strokeWidth="1.2"
        fill="none"
        strokeDasharray="4 4"
        opacity="0.55"
      />
      <polygon points="266,58 274,52 268,66" fill={BRASS} />

      {/* Climbing figure between Position 5 and Position 3 — minimal stick mark */}
      <g transform="translate(176, 116)">
        <circle r="2.4" fill={INK} />
        <line x1="0" y1="2.4" x2="0" y2="8" stroke={INK} strokeWidth="1.2" strokeLinecap="round" />
        <line x1="0" y1="5" x2="-4" y2="7" stroke={INK} strokeWidth="1" strokeLinecap="round" />
        <line x1="0" y1="5" x2="4" y2="3" stroke={INK} strokeWidth="1" strokeLinecap="round" />
        <line x1="0" y1="8" x2="-3" y2="12" stroke={INK} strokeWidth="1" strokeLinecap="round" />
        <line x1="0" y1="8" x2="3" y2="12" stroke={INK} strokeWidth="1" strokeLinecap="round" />
      </g>

      {/* Top-right summit indicator */}
      <g transform="translate(250, 24)">
        <rect width="56" height="12" rx="2" fill={INK} />
        <circle cx="6" cy="6" r="2" fill="#FFE817" />
        <text x="32" y="8.5" fontSize="6.5" fontWeight="700" fill="#FFE817" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.18em">METRO #1</text>
      </g>

      {/* Bottom-left start indicator */}
      <g transform="translate(20, 20)">
        <rect width="64" height="12" rx="2" stroke={BRASS} strokeWidth="0.7" fill="#FFFFFF" />
        <circle cx="6" cy="6" r="2" fill={BRASS} fillOpacity="0.45" />
        <text x="36" y="8.5" fontSize="6.5" fontWeight="700" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.18em">FROM ANYWHERE</text>
      </g>

      {/* Tick marks along baseline */}
      <line x1="50" y1="208" x2="50" y2="212" stroke={INK} strokeWidth="0.5" opacity="0.4" />
      <line x1="100" y1="208" x2="100" y2="212" stroke={INK} strokeWidth="0.5" opacity="0.4" />
      <line x1="150" y1="208" x2="150" y2="212" stroke={INK} strokeWidth="0.5" opacity="0.4" />
      <line x1="200" y1="208" x2="200" y2="212" stroke={INK} strokeWidth="0.5" opacity="0.4" />
      <line x1="250" y1="208" x2="250" y2="212" stroke={INK} strokeWidth="0.5" opacity="0.4" />

      {/* Month labels along baseline */}
      <text x="50" y="220" fontSize="6" fill={INK} opacity="0.5" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.12em">M1</text>
      <text x="100" y="220" fontSize="6" fill={INK} opacity="0.5" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.12em">M3</text>
      <text x="150" y="220" fontSize="6" fill={INK} opacity="0.5" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.12em">M6</text>
      <text x="200" y="220" fontSize="6" fill={INK} opacity="0.5" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.12em">M9</text>
      <text x="250" y="220" fontSize="6" fill={INK} opacity="0.5" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.12em">M12</text>

      {/* Path label */}
      <text x="20" y="234" fontSize="7" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="0.32em" fontWeight="700">PATH 01 · ESTABLISH</text>

      <PathReticles />
    </svg>
  );
}

// =====================================================================
// 2) DOMINATE PATH — fortress / metro lockup
// =====================================================================

export function DominatePathIllustration() {
  return (
    <svg
      viewBox="0 0 320 240"
      width="320"
      height="240"
      fill="none"
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <pattern id="dom-grid" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.7" fill="rgba(24,23,26,0.07)" />
        </pattern>
        <radialGradient id="dom-shield-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={BRASS} stopOpacity="0.22" />
          <stop offset="100%" stopColor={BRASS} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="dom-shield-fill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor={BRASS} stopOpacity="0.18" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="320" height="240" fill="#FCFCFA" />
      <rect x="0" y="0" width="320" height="240" fill="url(#dom-grid)" />

      {/* Shield halo */}
      <circle cx="160" cy="120" r="80" fill="url(#dom-shield-halo)" />

      {/* Outer perimeter ring */}
      <circle cx="160" cy="120" r="86" stroke={BRASS} strokeWidth="0.6" strokeDasharray="3 5" fill="none" opacity="0.4" />
      <circle cx="160" cy="120" r="70" stroke={BRASS} strokeWidth="0.4" strokeDasharray="2 4" fill="none" opacity="0.3" />

      {/* Central hexagonal shield */}
      <polygon
        points="160,52 218,82 218,158 160,188 102,158 102,82"
        stroke={BRASS}
        strokeWidth="1.8"
        fill="url(#dom-shield-fill)"
      />
      {/* Inner shield outline */}
      <polygon
        points="160,62 210,88 210,154 160,180 110,154 110,88"
        stroke={BRASS}
        strokeWidth="0.5"
        fill="none"
        opacity="0.55"
      />

      {/* Rysen triangle inside shield */}
      <g transform="translate(146, 102)">
        <polygon points="0,0 28,0 0,28" fill="#FFE817" stroke={INK} strokeWidth="0.8" />
      </g>

      {/* "RYSEN" word under triangle */}
      <text x="160" y="146" fontSize="9" fontWeight="700" fill={INK} textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.22em">RYSEN</text>
      <text x="160" y="158" fontSize="6" fill={INK} fillOpacity="0.55" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.2em">METRO #1</text>

      {/* Six perimeter lines radiating outward */}
      <line x1="160" y1="40" x2="160" y2="22" stroke={BRASS} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="228" y1="72" x2="244" y2="60" stroke={BRASS} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="228" y1="168" x2="244" y2="180" stroke={BRASS} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="160" y1="200" x2="160" y2="218" stroke={BRASS} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="92" y1="168" x2="76" y2="180" stroke={BRASS} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="92" y1="72" x2="76" y2="60" stroke={BRASS} strokeWidth="1.4" strokeLinecap="round" />

      {/* Competitor shapes pushed outside, with X overlays on 4 of them */}
      {/* Top */}
      <g transform="translate(154, 10)">
        <rect width="12" height="12" rx="2" stroke={INK} strokeWidth="0.8" fill="#FFFFFF" opacity="0.85" />
        <line x1="3" y1="3" x2="9" y2="9" stroke="#EA4335" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="9" y1="3" x2="3" y2="9" stroke="#EA4335" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      {/* Top-right */}
      <g transform="translate(244, 50)">
        <rect width="12" height="12" rx="2" stroke={INK} strokeWidth="0.8" fill="#FFFFFF" opacity="0.85" />
        <line x1="3" y1="3" x2="9" y2="9" stroke="#EA4335" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="9" y1="3" x2="3" y2="9" stroke="#EA4335" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      {/* Bottom-right */}
      <g transform="translate(244, 178)">
        <rect width="12" height="12" rx="2" stroke={INK} strokeWidth="0.8" fill="#FFFFFF" opacity="0.85" />
        <line x1="3" y1="3" x2="9" y2="9" stroke="#EA4335" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="9" y1="3" x2="3" y2="9" stroke="#EA4335" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      {/* Bottom */}
      <g transform="translate(154, 218)">
        <rect width="12" height="12" rx="2" stroke={INK} strokeWidth="0.8" fill="#FFFFFF" opacity="0.85" />
        <line x1="3" y1="3" x2="9" y2="9" stroke="#EA4335" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="9" y1="3" x2="3" y2="9" stroke="#EA4335" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      {/* Bottom-left */}
      <g transform="translate(64, 178)">
        <rect width="12" height="12" rx="2" stroke={INK} strokeWidth="0.8" fill="#FFFFFF" opacity="0.85" />
        <text x="6" y="9" fontSize="6" fontWeight="700" fill={INK} fillOpacity="0.55" textAnchor="middle" fontFamily="Geist, sans-serif">B</text>
      </g>
      {/* Top-left */}
      <g transform="translate(64, 50)">
        <rect width="12" height="12" rx="2" stroke={INK} strokeWidth="0.8" fill="#FFFFFF" opacity="0.85" />
        <text x="6" y="9" fontSize="6" fontWeight="700" fill={INK} fillOpacity="0.55" textAnchor="middle" fontFamily="Geist, sans-serif">B</text>
      </g>

      {/* Radar-sweep arc */}
      <path
        d="M 160 120 L 218 82 A 70 70 0 0 1 220 130 Z"
        fill={BRASS}
        fillOpacity="0.12"
      />
      <line
        x1="160"
        y1="120"
        x2="220"
        y2="130"
        stroke={BRASS}
        strokeWidth="1"
        opacity="0.6"
      />

      {/* "CLOSED" indicator chip at top */}
      <g transform="translate(132, 22)">
        <rect width="56" height="14" rx="2" fill={INK} />
        <circle cx="8" cy="7" r="2" fill="#FFE817" />
        <text x="34" y="10" fontSize="7" fontWeight="700" fill="#FFE817" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.22em">CLOSED</text>
      </g>

      {/* Vertical chip top-left */}
      <g transform="translate(20, 20)">
        <rect width="74" height="12" rx="2" stroke={BRASS} strokeWidth="0.7" fill="#FFFFFF" />
        <circle cx="6" cy="6" r="2" fill={BRASS} />
        <text x="42" y="8.5" fontSize="6.5" fontWeight="700" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.18em">METRO LOCKUP</text>
      </g>

      {/* Bottom strip — exclusive territory rights chip */}
      <g transform="translate(170, 218)">
        <rect width="130" height="12" rx="2" stroke={BRASS} strokeWidth="0.7" fill="#FFFFFF" />
        <circle cx="6" cy="6" r="2" fill={BRASS} />
        <text x="68" y="8.5" fontSize="6.5" fontWeight="700" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.18em">EXCLUSIVE TERRITORY RIGHTS</text>
      </g>

      {/* Ambient corner annotations */}
      <text x="160" y="206" fontSize="6.5" fontWeight="700" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.22em">PERMANENT</text>

      {/* Path label */}
      <text x="20" y="234" fontSize="7" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="0.32em" fontWeight="700">PATH 02 · DOMINATE</text>

      <PathReticles />
    </svg>
  );
}

// =====================================================================
// Fork connector — small SVG between the two path cards
// =====================================================================

export function ForkConnector() {
  return (
    <svg
      viewBox="0 0 80 200"
      width="80"
      height="200"
      fill="none"
      aria-hidden="true"
      role="presentation"
    >
      {/* Vertical line down */}
      <line x1="40" y1="0" x2="40" y2="80" stroke={BRASS} strokeWidth="1.2" strokeDasharray="3 4" />
      {/* Brass dot fork point */}
      <circle cx="40" cy="92" r="6" fill={BRASS} />
      <circle cx="40" cy="92" r="11" fill={BRASS} fillOpacity="0.18" />
      {/* Forked branches */}
      <path d="M 40 100 Q 40 130 14 150" stroke={BRASS} strokeWidth="1.2" fill="none" strokeDasharray="3 4" />
      <path d="M 40 100 Q 40 130 66 150" stroke={BRASS} strokeWidth="1.2" fill="none" strokeDasharray="3 4" />
      {/* Branch arrowheads */}
      <polygon points="10,148 18,148 14,156" fill={BRASS} />
      <polygon points="62,148 70,148 66,156" fill={BRASS} />
      {/* Label */}
      <text
        x="40"
        y="184"
        fontSize="7"
        fontWeight="700"
        fill={BRASS}
        textAnchor="middle"
        fontFamily="Geist, sans-serif"
        letterSpacing="0.18em"
      >
        CHOOSE
      </text>
      <text
        x="40"
        y="194"
        fontSize="7"
        fontWeight="700"
        fill={BRASS}
        textAnchor="middle"
        fontFamily="Geist, sans-serif"
        letterSpacing="0.18em"
      >
        YOUR PATH
      </text>
    </svg>
  );
}

// =====================================================================
// Mini bullet icons — used in path-card bullet lists
// =====================================================================

const ICON_STROKE = INK;

export function AuditIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="4" stroke={ICON_STROKE} strokeWidth="1.4" fill="none" />
      <line x1="10" y1="10" x2="14" y2="14" stroke={ICON_STROKE} strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="7" cy="7" r="1.2" fill={BRASS} />
    </svg>
  );
}

export function PlanIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="3" y="2" width="10" height="12" rx="1" stroke={ICON_STROKE} strokeWidth="1.4" fill="none" />
      <path d="M5 5 L6 6 L8 4" stroke={BRASS} strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 9 L6 10 L8 8" stroke={BRASS} strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="9.5" y1="6" x2="11.5" y2="6" stroke={ICON_STROKE} strokeWidth="1" />
      <line x1="9.5" y1="10" x2="11.5" y2="10" stroke={ICON_STROKE} strokeWidth="1" />
    </svg>
  );
}

export function GBPIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 1 Q 3 1 3 6 Q 3 10 8 15 Q 13 10 13 6 Q 13 1 8 1 Z" stroke={ICON_STROKE} strokeWidth="1.4" fill="none" />
      <circle cx="8" cy="6" r="2" fill={BRASS} />
    </svg>
  );
}

export function AISearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 1 L9.6 6 L14 7 L9.6 8 L8 13 L6.4 8 L2 7 L6.4 6 Z"
        fill={BRASS}
        stroke={ICON_STROKE}
        strokeWidth="0.7"
      />
      <circle cx="12" cy="3" r="1" fill={BRASS} />
      <circle cx="3" cy="11" r="1" fill={ICON_STROKE} opacity="0.5" />
    </svg>
  );
}

export function RankingsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="2" y="9" width="3" height="5" stroke={ICON_STROKE} strokeWidth="1.2" fill="none" />
      <rect x="6.5" y="6" width="3" height="8" stroke={ICON_STROKE} strokeWidth="1.2" fill="none" />
      <rect x="11" y="2" width="3" height="12" fill={BRASS} stroke={ICON_STROKE} strokeWidth="0.6" />
    </svg>
  );
}

export function AuthorityIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="2" y="10" width="12" height="3" rx="0.5" stroke={ICON_STROKE} strokeWidth="1.2" fill="none" />
      <rect x="2" y="6" width="12" height="3" rx="0.5" stroke={ICON_STROKE} strokeWidth="1.2" fill="none" />
      <rect x="2" y="2" width="12" height="3" rx="0.5" fill={BRASS} stroke={ICON_STROKE} strokeWidth="0.7" />
    </svg>
  );
}

export function ReportingIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="12" height="12" rx="1" stroke={ICON_STROKE} strokeWidth="1.2" fill="none" />
      <path d="M4 11 L7 7 L10 9 L13 4" stroke={BRASS} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="13" cy="4" r="1.4" fill={BRASS} />
    </svg>
  );
}

export function ExclusiveIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="10" height="7" rx="1" fill={BRASS} stroke={ICON_STROKE} strokeWidth="0.8" />
      <path d="M5 7 L5 5 Q 5 2 8 2 Q 11 2 11 5 L 11 7" stroke={ICON_STROKE} strokeWidth="1.4" fill="none" />
      <circle cx="8" cy="10" r="1.2" fill="#FFE817" />
    </svg>
  );
}

export function TeamIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="5" cy="6" r="2" stroke={ICON_STROKE} strokeWidth="1.2" fill="none" />
      <circle cx="11" cy="6" r="2" stroke={ICON_STROKE} strokeWidth="1.2" fill="none" />
      <circle cx="8" cy="4.5" r="2" fill={BRASS} stroke={ICON_STROKE} strokeWidth="0.6" />
      <path d="M2 14 Q 5 11 8 11 Q 11 11 14 14" stroke={ICON_STROKE} strokeWidth="1.2" fill="none" />
    </svg>
  );
}

export function ConversionIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 3 L14 3 L11 8 L11 13 L5 13 L5 8 Z" stroke={ICON_STROKE} strokeWidth="1.2" fill="none" />
      <rect x="6" y="9" width="4" height="3" fill={BRASS} />
    </svg>
  );
}

export function ReviewsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 1 L9.8 5.6 L14.8 6.2 L11 9.8 L12 14.8 L8 12.4 L4 14.8 L5 9.8 L1.2 6.2 L6.2 5.6 Z"
        fill={BRASS}
        stroke={ICON_STROKE}
        strokeWidth="0.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PressIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="12" height="10" rx="1" stroke={ICON_STROKE} strokeWidth="1.2" fill="none" />
      <rect x="4" y="5" width="4" height="3" fill={BRASS} />
      <line x1="9" y1="5" x2="12" y2="5" stroke={ICON_STROKE} strokeWidth="1" />
      <line x1="9" y1="7" x2="12" y2="7" stroke={ICON_STROKE} strokeWidth="1" />
      <line x1="4" y1="10" x2="12" y2="10" stroke={ICON_STROKE} strokeWidth="1" />
      <line x1="4" y1="12" x2="10" y2="12" stroke={ICON_STROKE} strokeWidth="1" />
    </svg>
  );
}

export function StrategyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6" stroke={ICON_STROKE} strokeWidth="1.2" fill="none" />
      <circle cx="8" cy="8" r="3" stroke={ICON_STROKE} strokeWidth="1" fill="none" />
      <circle cx="8" cy="8" r="1.2" fill={BRASS} />
      <line x1="8" y1="1" x2="8" y2="3" stroke={ICON_STROKE} strokeWidth="1" />
      <line x1="8" y1="13" x2="8" y2="15" stroke={ICON_STROKE} strokeWidth="1" />
      <line x1="1" y1="8" x2="3" y2="8" stroke={ICON_STROKE} strokeWidth="1" />
      <line x1="13" y1="8" x2="15" y2="8" stroke={ICON_STROKE} strokeWidth="1" />
    </svg>
  );
}
