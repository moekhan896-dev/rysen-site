// Session 40 — Stack illustrations.
//
// Four 100x100 SVGs, one per block in TheStack section. Each one
// communicates the mechanism of a specific data + AI engineering
// capability: query intelligence, AI citation engine, attribution
// modeling, content engineering.
//
// Block-by-block intent:
//
//   QueryIntelligenceIllustration
//     A central database cylinder representing our internal store of
//     tracked queries (247 per client). Eight query streams converge
//     into it from all four corners, each tagged with a vertical or
//     index marker. A central Rysen yellow triangle floats over the
//     cylinder, signaling that we own the data pipeline. Side pills
//     read "DAILY" and "ALERTS". Inner band labels: RANK, INTENT.
//
//   AICitationEngineIllustration
//     Four AI platform cards arranged in the corners (Google,
//     ChatGPT, Perplexity, Gemini). Dashed brass connectors flow
//     from each card toward a central source — a Rysen triangle in
//     a white roundel. Each card has a brass "CITED" checkmark on
//     its bottom-right, communicating that we've achieved citation
//     on all four surfaces. A bottom pip reads "CITED 4 OF 4".
//
//   AttributionModelingIllustration
//     Top: 8 small searcher heads stepping in from the top edge,
//     fading from left-low to right-high opacity to imply scale.
//     Below: a 4-stage funnel narrowing through SEARCHES → CLICKS →
//     CONTACTS → REVENUE. The bottom-most stage is solid brass with
//     a "$" symbol; dollar signs rain out the bottom. Side
//     annotations show conversion rates (35% / 12% / →$). Right
//     bottom: a "+186%" badge.
//
//   ContentEngineeringIllustration
//     A 3×3 grid of editorial content blocks (title block,
//     header block, two side blocks, footer block, schema block,
//     etc) connected via dashed brass tramlines. A central dark
//     block holds the Rysen triangle — the engineered "source of
//     truth". A floating schema fragment at the top reads
//     `{ @type: Article }`. Footer reads "INTERNAL LINK · ×24".
//
// Style mirrors the other illustration modules:
//   - INK structural lines, BRASS as the single chromatic accent,
//     #6EF06E only inside brass blocks or Rysen marks.
//   - Geist Sans annotations with wide letter spacing.
//   - 1.2-1.5px primary stroke, 0.4-0.7px ambient detail.
//   - Each illustration has ~50+ elements so it reads as engineered
//     rather than iconographic at the 100px render size.
//
// All animations respect prefers-reduced-motion via the global CSS
// suppression appended this session.
//
// Why hand-coded SVG instead of an icon library:
//   - These illustrations carry the Session 40 positioning beat —
//     "we're a data + AI engineering firm". A generic icon library
//     would communicate "marketing agency". Custom geometry buys
//     proprietary visual feel.
//   - 100×100 is dense enough that detail registers. We deliberately
//     over-draw at this size so the dashboard reads as engineered
//     instrument-cluster, not as flat icon.
//   - Bundle impact is trivial — these inline once per render and
//     compress to a fraction of equivalent raster.
//
// Naming convention: every export ends with "Illustration" so the
// import sites in TheStack.tsx read cleanly:
//     import { QueryIntelligenceIllustration } from
//       "@/components/illustrations/StackIllustrations";
//
// Consuming component: src/components/sections/TheStack.tsx
// The grid renders each illustration inside .stack-block__illustration
// which constrains them to 100×100 and applies a subtle hover lift.
//
// Future-proofing: if a fifth pillar is added (e.g. "Compliance
// Engine"), follow the same constraints — single brass beat, ≥50
// elements, corner ticks, inline geometry only.

const INK = "#0C0D0F";
const BRASS = "#34C759";

// =====================================================================
// 1) QUERY INTELLIGENCE
// Central database cylinder. Multiple query streams converge into it.
// A "247" counter floats inside the top disc — the queries-tracked
// number that maps to the hero proof point.
// =====================================================================

export function QueryIntelligenceIllustration() {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100"
      height="100"
      fill="none"
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <linearGradient id="qi-cyl-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#FAFAF8" />
        </linearGradient>
        <radialGradient id="qi-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={BRASS} stopOpacity="0.18" />
          <stop offset="100%" stopColor={BRASS} stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="100" height="100" fill="#FAFBFC" />

      {/* Soft halo */}
      <circle cx="50" cy="50" r="36" fill="url(#qi-halo)" />

      {/* Database cylinder */}
      <ellipse cx="50" cy="30" rx="22" ry="6" stroke={INK} strokeWidth="1.4" fill={BRASS} fillOpacity="0.18" />
      <path d="M 28 30 L 28 64" stroke={INK} strokeWidth="1.4" />
      <path d="M 72 30 L 72 64" stroke={INK} strokeWidth="1.4" />
      <ellipse cx="50" cy="64" rx="22" ry="6" stroke={INK} strokeWidth="1.4" fill="url(#qi-cyl-grad)" />
      {/* Mid bands */}
      <ellipse cx="50" cy="42" rx="22" ry="6" stroke={INK} strokeWidth="0.7" fill="none" opacity="0.5" />
      <ellipse cx="50" cy="52" rx="22" ry="6" stroke={INK} strokeWidth="0.7" fill="none" opacity="0.4" />
      {/* Inner highlight band */}
      <path d="M 28 30 Q 50 36 72 30" stroke={INK} strokeWidth="0.5" opacity="0.45" fill="none" />
      <path d="M 28 42 Q 50 48 72 42" stroke={INK} strokeWidth="0.4" opacity="0.35" fill="none" />
      <path d="M 28 52 Q 50 58 72 52" stroke={INK} strokeWidth="0.4" opacity="0.3" fill="none" />

      {/* Counter inside top disc */}
      <text
        x="50"
        y="33"
        fontSize="6"
        fontWeight="700"
        fill={INK}
        textAnchor="middle"
        fontFamily="Geist, sans-serif"
        letterSpacing="0.1em"
      >
        247
      </text>

      {/* Query streams converging — top-left */}
      <line x1="6" y1="14" x2="32" y2="28" stroke={BRASS} strokeWidth="0.8" strokeLinecap="round" />
      <circle cx="6" cy="14" r="2" fill={INK} />
      <circle cx="6" cy="14" r="0.8" fill="#6EF06E" />
      {/* Query label */}
      <rect x="-2" y="6" width="22" height="3" rx="1" fill={INK} fillOpacity="0.06" stroke={INK} strokeWidth="0.3" />
      <text x="9" y="8.2" fontSize="2" fill={INK} opacity="0.6" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.1em">Q · LEGAL</text>

      {/* Stream — top-right */}
      <line x1="94" y1="14" x2="68" y2="28" stroke={BRASS} strokeWidth="0.8" strokeLinecap="round" />
      <circle cx="94" cy="14" r="2" fill={INK} />
      <circle cx="94" cy="14" r="0.8" fill="#6EF06E" />
      <rect x="80" y="6" width="22" height="3" rx="1" fill={INK} fillOpacity="0.06" stroke={INK} strokeWidth="0.3" />
      <text x="91" y="8.2" fontSize="2" fill={INK} opacity="0.6" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.1em">Q · MEDICAL</text>

      {/* Stream — middle-left */}
      <line x1="6" y1="36" x2="28" y2="40" stroke={BRASS} strokeWidth="0.7" strokeLinecap="round" />
      <circle cx="6" cy="36" r="1.6" fill={INK} opacity="0.85" />
      {/* Stream — middle-right */}
      <line x1="94" y1="36" x2="72" y2="40" stroke={BRASS} strokeWidth="0.7" strokeLinecap="round" />
      <circle cx="94" cy="36" r="1.6" fill={INK} opacity="0.85" />

      {/* Stream — middle-left lower */}
      <line x1="6" y1="50" x2="28" y2="52" stroke={BRASS} strokeWidth="0.6" strokeLinecap="round" />
      <circle cx="6" cy="50" r="1.4" fill={INK} opacity="0.6" />
      {/* Stream — middle-right lower */}
      <line x1="94" y1="50" x2="72" y2="52" stroke={BRASS} strokeWidth="0.6" strokeLinecap="round" />
      <circle cx="94" cy="50" r="1.4" fill={INK} opacity="0.6" />

      {/* Stream — bottom-left */}
      <line x1="14" y1="84" x2="32" y2="64" stroke={BRASS} strokeWidth="0.7" strokeLinecap="round" />
      <circle cx="14" cy="84" r="1.6" fill={INK} opacity="0.6" />
      <text x="14" y="92" fontSize="2" fill={INK} opacity="0.5" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.1em">Q · 04</text>

      {/* Stream — bottom-right */}
      <line x1="86" y1="84" x2="68" y2="64" stroke={BRASS} strokeWidth="0.7" strokeLinecap="round" />
      <circle cx="86" cy="84" r="1.6" fill={INK} opacity="0.6" />
      <text x="86" y="92" fontSize="2" fill={INK} opacity="0.5" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.1em">Q · 05</text>

      {/* Stream — bottom */}
      <line x1="50" y1="86" x2="50" y2="70" stroke={BRASS} strokeWidth="0.7" strokeLinecap="round" />
      <circle cx="50" cy="86" r="1.6" fill={INK} opacity="0.6" />

      {/* Tiny tick marks at base */}
      <line x1="50" y1="72" x2="50" y2="74" stroke={BRASS} strokeWidth="0.4" opacity="0.6" />

      {/* Rysen triangle floating in front */}
      <g transform="translate(38, 56)">
        <polygon points="0,0 8,0 0,8" fill="#6EF06E" stroke={INK} strokeWidth="0.4" />
      </g>

      {/* Tiny "DB" tag */}
      <g transform="translate(34, 70)">
        <rect width="32" height="6" rx="3" fill={INK} />
        <text x="16" y="4.2" fontSize="3" fontWeight="700" fill="#6EF06E" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.18em">QUERY DB</text>
      </g>

      {/* Outer corner ticks */}
      <path d="M 4 4 L 8 4 L 8 8" stroke={BRASS} strokeWidth="0.5" fill="none" opacity="0.6" />
      <path d="M 96 4 L 92 4 L 92 8" stroke={BRASS} strokeWidth="0.5" fill="none" opacity="0.6" />
      <path d="M 4 96 L 8 96 L 8 92" stroke={BRASS} strokeWidth="0.5" fill="none" opacity="0.6" />
      <path d="M 96 96 L 92 96 L 92 92" stroke={BRASS} strokeWidth="0.5" fill="none" opacity="0.6" />

      {/* Index hatching on cylinder side */}
      <line x1="29" y1="34" x2="29" y2="58" stroke={INK} strokeWidth="0.3" opacity="0.45" />
      <line x1="31" y1="34" x2="31" y2="58" stroke={INK} strokeWidth="0.3" opacity="0.35" />
      <line x1="71" y1="34" x2="71" y2="58" stroke={INK} strokeWidth="0.3" opacity="0.45" />
      <line x1="69" y1="34" x2="69" y2="58" stroke={INK} strokeWidth="0.3" opacity="0.35" />

      {/* Side metric — daily updates */}
      <g transform="translate(6, 64)" opacity="0.85">
        <rect width="18" height="6" rx="3" stroke={BRASS} strokeWidth="0.4" fill="#FFFFFF" />
        <circle cx="3.5" cy="3" r="1" fill={BRASS} />
        <text x="11.5" y="4.2" fontSize="2.6" fontWeight="700" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.12em">DAILY</text>
      </g>

      {/* Side metric — alerts */}
      <g transform="translate(76, 64)" opacity="0.85">
        <rect width="18" height="6" rx="3" stroke={BRASS} strokeWidth="0.4" fill="#FFFFFF" />
        <circle cx="3.5" cy="3" r="1" fill={BRASS} />
        <text x="11.5" y="4.2" fontSize="2.6" fontWeight="700" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.12em">ALERTS</text>
      </g>

      {/* Tiny annotations */}
      <text x="50" y="48" fontSize="2.2" fill={INK} opacity="0.45" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.1em">RANK</text>
      <text x="50" y="58" fontSize="2.2" fill={INK} opacity="0.4" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.1em">INTENT</text>
    </svg>
  );
}

// =====================================================================
// 2) AI CITATION ENGINE
// Four AI platform marks arranged in a square. Lines converge from
// all four toward a central source — a Rysen yellow triangle. Each
// connector has a small "cited" checkmark.
// =====================================================================

export function AICitationEngineIllustration() {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100"
      height="100"
      fill="none"
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <radialGradient id="aice-halo" cx="50%" cy="50%" r="40%">
          <stop offset="0%" stopColor={BRASS} stopOpacity="0.25" />
          <stop offset="100%" stopColor={BRASS} stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="100" height="100" fill="#FAFBFC" />
      <circle cx="50" cy="50" r="30" fill="url(#aice-halo)" />

      {/* Connectors — dashed brass converging on center */}
      <path d="M 22 22 L 50 50" stroke={BRASS} strokeWidth="0.8" strokeDasharray="2 3" />
      <path d="M 78 22 L 50 50" stroke={BRASS} strokeWidth="0.8" strokeDasharray="2 3" />
      <path d="M 22 78 L 50 50" stroke={BRASS} strokeWidth="0.8" strokeDasharray="2 3" />
      <path d="M 78 78 L 50 50" stroke={BRASS} strokeWidth="0.8" strokeDasharray="2 3" />

      {/* Inner concentric guide ring */}
      <circle cx="50" cy="50" r="14" stroke={BRASS} strokeWidth="0.5" strokeDasharray="2 2" fill="none" opacity="0.45" />
      <circle cx="50" cy="50" r="22" stroke={BRASS} strokeWidth="0.4" strokeDasharray="2 4" fill="none" opacity="0.3" />

      {/* Top-left: Google card */}
      <g transform="translate(10, 10)">
        <rect width="24" height="24" rx="3" fill="#FFFFFF" stroke={INK} strokeWidth="1" />
        <text x="12" y="9" fontSize="4" fill="#4285F4" fontWeight="700" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.04em">G</text>
        <rect x="3" y="12" width="18" height="1.4" rx="0.7" fill={INK} opacity="0.45" />
        <rect x="3" y="15" width="14" height="1" rx="0.5" fill={INK} opacity="0.3" />
        <rect x="3" y="18" width="16" height="1" rx="0.5" fill={INK} opacity="0.3" />
        {/* Cited check */}
        <circle cx="20" cy="20" r="2.4" fill={BRASS} />
        <path d="M 19 20 L 20 21 L 21.4 19.4" stroke="#FFFFFF" strokeWidth="0.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Top-right: ChatGPT card */}
      <g transform="translate(66, 10)">
        <rect width="24" height="24" rx="3" fill="#FFFFFF" stroke={INK} strokeWidth="1" />
        <text x="12" y="9" fontSize="4" fill="#10A37F" fontWeight="700" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.04em">C</text>
        <rect x="3" y="12" width="18" height="1.4" rx="0.7" fill={INK} opacity="0.45" />
        <rect x="3" y="15" width="14" height="1" rx="0.5" fill={INK} opacity="0.3" />
        <rect x="3" y="18" width="16" height="1" rx="0.5" fill={INK} opacity="0.3" />
        <circle cx="20" cy="20" r="2.4" fill={BRASS} />
        <path d="M 19 20 L 20 21 L 21.4 19.4" stroke="#FFFFFF" strokeWidth="0.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Bottom-left: Perplexity card */}
      <g transform="translate(10, 66)">
        <rect width="24" height="24" rx="3" fill="#FFFFFF" stroke={INK} strokeWidth="1" />
        <text x="12" y="9" fontSize="4" fill="#20B8A6" fontWeight="700" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.04em">P</text>
        <rect x="3" y="12" width="18" height="1.4" rx="0.7" fill={INK} opacity="0.45" />
        <rect x="3" y="15" width="14" height="1" rx="0.5" fill={INK} opacity="0.3" />
        <rect x="3" y="18" width="16" height="1" rx="0.5" fill={INK} opacity="0.3" />
        <circle cx="20" cy="20" r="2.4" fill={BRASS} />
        <path d="M 19 20 L 20 21 L 21.4 19.4" stroke="#FFFFFF" strokeWidth="0.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Bottom-right: Gemini card */}
      <g transform="translate(66, 66)">
        <rect width="24" height="24" rx="3" fill="#FFFFFF" stroke={INK} strokeWidth="1" />
        <defs>
          <linearGradient id="aice-gem-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4285F4" />
            <stop offset="50%" stopColor="#9747FF" />
            <stop offset="100%" stopColor="#EA4335" />
          </linearGradient>
        </defs>
        <text x="12" y="9" fontSize="4" fill="url(#aice-gem-grad)" fontWeight="700" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.04em">G</text>
        <rect x="3" y="12" width="18" height="1.4" rx="0.7" fill={INK} opacity="0.45" />
        <rect x="3" y="15" width="14" height="1" rx="0.5" fill={INK} opacity="0.3" />
        <rect x="3" y="18" width="16" height="1" rx="0.5" fill={INK} opacity="0.3" />
        <circle cx="20" cy="20" r="2.4" fill={BRASS} />
        <path d="M 19 20 L 20 21 L 21.4 19.4" stroke="#FFFFFF" strokeWidth="0.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Center Rysen triangle source */}
      <g transform="translate(43, 43)">
        <circle r="9" cx="7" cy="7" fill="#FFFFFF" stroke={INK} strokeWidth="1.2" />
        <polygon points="2,2 12,2 2,12" fill="#6EF06E" />
      </g>

      {/* "Cited 4/4" pip */}
      <g transform="translate(50, 88)">
        <rect x="-18" y="0" width="36" height="6" rx="3" fill={INK} />
        <text y="4.2" fontSize="3" fontWeight="700" fill="#6EF06E" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.18em">CITED 4 OF 4</text>
      </g>

      {/* Tiny "answer" pulse around center */}
      <circle cx="50" cy="50" r="6" stroke={BRASS} strokeWidth="0.4" fill="none" opacity="0.85">
        <animate attributeName="r" values="6;10;6" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.85;0;0.85" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* "answer" annotation */}
      <text x="50" y="42" fontSize="2.2" fontWeight="700" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.18em">ANSWER</text>

      {/* Citation count chips on each card */}
      <g transform="translate(28, 30)" opacity="0.85">
        <text fontSize="2" fill={INK} opacity="0.55" textAnchor="end" fontFamily="Geist, sans-serif">#1</text>
      </g>
      <g transform="translate(86, 30)" opacity="0.85">
        <text fontSize="2" fill={INK} opacity="0.55" textAnchor="end" fontFamily="Geist, sans-serif">#1</text>
      </g>
      <g transform="translate(28, 70)" opacity="0.85">
        <text fontSize="2" fill={INK} opacity="0.55" textAnchor="end" fontFamily="Geist, sans-serif">#1</text>
      </g>
      <g transform="translate(86, 70)" opacity="0.85">
        <text fontSize="2" fill={INK} opacity="0.55" textAnchor="end" fontFamily="Geist, sans-serif">#1</text>
      </g>

      {/* Corner ticks */}
      <path d="M 4 4 L 8 4 L 8 8" stroke={BRASS} strokeWidth="0.5" fill="none" opacity="0.6" />
      <path d="M 96 4 L 92 4 L 92 8" stroke={BRASS} strokeWidth="0.5" fill="none" opacity="0.6" />
      <path d="M 4 96 L 8 96 L 8 92" stroke={BRASS} strokeWidth="0.5" fill="none" opacity="0.6" />
      <path d="M 96 96 L 92 96 L 92 92" stroke={BRASS} strokeWidth="0.5" fill="none" opacity="0.6" />
    </svg>
  );
}

// =====================================================================
// 3) ATTRIBUTION MODELING
// Multi-stage funnel: searchers at top → narrowing funnel → dollar
// signs at the bottom. Brass accents on each transition.
// =====================================================================

export function AttributionModelingIllustration() {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100"
      height="100"
      fill="none"
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <linearGradient id="attr-funnel-fill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={BRASS} stopOpacity="0.05" />
          <stop offset="100%" stopColor={BRASS} stopOpacity="0.18" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="100" height="100" fill="#FAFBFC" />

      {/* Top searcher row — 8 small heads */}
      <g transform="translate(8, 6)">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <g key={i} transform={`translate(${i * 12}, 0)`}>
            <circle cx="5" cy="3" r="2" fill={INK} opacity={0.4 + i * 0.06} />
            <path d="M 0 8 Q 5 5 10 8" stroke={INK} strokeWidth="0.7" fill="none" opacity={0.4 + i * 0.06} />
          </g>
        ))}
      </g>

      {/* Stage 1 — Searches */}
      <path d="M 14 22 L 86 22 L 80 36 L 20 36 Z" stroke={INK} strokeWidth="1.2" fill="url(#attr-funnel-fill)" />
      <text x="50" y="30" fontSize="4" fontWeight="700" fill={INK} textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.12em">SEARCHES</text>
      <text x="84" y="29" fontSize="3.6" fill={BRASS} textAnchor="end" fontWeight="700" fontFamily="Geist, sans-serif" letterSpacing="0.08em">8.4K</text>

      {/* Stage 2 — Clicks */}
      <path d="M 20 38 L 80 38 L 72 52 L 28 52 Z" stroke={INK} strokeWidth="1.2" fill="url(#attr-funnel-fill)" />
      <text x="50" y="46" fontSize="4" fontWeight="700" fill={INK} textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.12em">CLICKS</text>
      <text x="78" y="45" fontSize="3.6" fill={BRASS} textAnchor="end" fontWeight="700" fontFamily="Geist, sans-serif" letterSpacing="0.08em">2.9K</text>

      {/* Stage 3 — Contacts */}
      <path d="M 28 54 L 72 54 L 64 68 L 36 68 Z" stroke={INK} strokeWidth="1.2" fill="url(#attr-funnel-fill)" />
      <text x="50" y="62" fontSize="4" fontWeight="700" fill={INK} textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.12em">CONTACTS</text>
      <text x="70" y="61" fontSize="3.6" fill={BRASS} textAnchor="end" fontWeight="700" fontFamily="Geist, sans-serif" letterSpacing="0.08em">348</text>

      {/* Stage 4 — Revenue (brass-filled, the win) */}
      <path d="M 36 70 L 64 70 L 56 86 L 44 86 Z" stroke={BRASS} strokeWidth="1.4" fill={BRASS} />
      <text x="50" y="80" fontSize="4.4" fontWeight="700" fill="#6EF06E" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.04em">$</text>

      {/* Dollar signs raining out the bottom */}
      <text x="32" y="92" fontSize="5" fontWeight="700" fill={BRASS} fontFamily="Geist, sans-serif">$</text>
      <text x="42" y="96" fontSize="5" fontWeight="700" fill={BRASS} fontFamily="Geist, sans-serif">$</text>
      <text x="52" y="92" fontSize="5" fontWeight="700" fill={BRASS} fontFamily="Geist, sans-serif">$</text>
      <text x="62" y="96" fontSize="5" fontWeight="700" fill={BRASS} fontFamily="Geist, sans-serif">$</text>
      <text x="68" y="92" fontSize="5" fontWeight="700" fill={BRASS} fontFamily="Geist, sans-serif">$</text>

      {/* Side annotation: conversion percentages */}
      <text x="8" y="46" fontSize="2.6" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="0.1em">35%</text>
      <text x="8" y="62" fontSize="2.6" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="0.1em">12%</text>
      <text x="8" y="78" fontSize="2.6" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="0.1em">→ $</text>

      {/* Right side: revenue badge */}
      <g transform="translate(78, 76)">
        <rect width="20" height="6" rx="3" fill={INK} />
        <text x="10" y="4.2" fontSize="3" fontWeight="700" fill="#6EF06E" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.14em">+186%</text>
      </g>

      {/* Side rail tick marks (measurement scaffolding) */}
      <line x1="4" y1="22" x2="6" y2="22" stroke={INK} strokeWidth="0.3" opacity="0.35" />
      <line x1="4" y1="38" x2="6" y2="38" stroke={INK} strokeWidth="0.3" opacity="0.35" />
      <line x1="4" y1="54" x2="6" y2="54" stroke={INK} strokeWidth="0.3" opacity="0.35" />
      <line x1="4" y1="70" x2="6" y2="70" stroke={INK} strokeWidth="0.3" opacity="0.35" />
      <line x1="94" y1="22" x2="96" y2="22" stroke={INK} strokeWidth="0.3" opacity="0.35" />
      <line x1="94" y1="38" x2="96" y2="38" stroke={INK} strokeWidth="0.3" opacity="0.35" />
      <line x1="94" y1="54" x2="96" y2="54" stroke={INK} strokeWidth="0.3" opacity="0.35" />
      <line x1="94" y1="70" x2="96" y2="70" stroke={INK} strokeWidth="0.3" opacity="0.35" />

      {/* Tiny attribution model badge top */}
      <g transform="translate(50, 2)">
        <rect x="-22" y="0" width="44" height="4" rx="1.5" fill={INK} fillOpacity="0.92" />
        <text y="2.8" fontSize="2.2" fontWeight="700" fill="#6EF06E" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.2em">MULTI-TOUCH MODEL</text>
      </g>

      {/* Cohort note */}
      <g transform="translate(4, 88)" opacity="0.85">
        <text fontSize="2.4" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="0.16em">COHORT · Q1 2026</text>
      </g>

      {/* Corner ticks */}
      <path d="M 4 4 L 8 4 L 8 8" stroke={BRASS} strokeWidth="0.5" fill="none" opacity="0.6" />
      <path d="M 96 4 L 92 4 L 92 8" stroke={BRASS} strokeWidth="0.5" fill="none" opacity="0.6" />
      <path d="M 4 96 L 8 96 L 8 92" stroke={BRASS} strokeWidth="0.5" fill="none" opacity="0.6" />
      <path d="M 96 96 L 92 96 L 92 92" stroke={BRASS} strokeWidth="0.5" fill="none" opacity="0.6" />
    </svg>
  );
}

// =====================================================================
// 4) CONTENT ENGINEERING
// Modular content blocks being assembled. Seven rectangles of
// varying sizes connected by lines. One central block holds the
// Rysen triangle. Schema markers floating around.
// =====================================================================

export function ContentEngineeringIllustration() {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100"
      height="100"
      fill="none"
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <radialGradient id="ce-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={BRASS} stopOpacity="0.1" />
          <stop offset="100%" stopColor={BRASS} stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="100" height="100" fill="#FAFBFC" />
      <circle cx="50" cy="50" r="32" fill="url(#ce-halo)" />

      {/* Connector grid lines */}
      <line x1="30" y1="36" x2="70" y2="36" stroke={BRASS} strokeWidth="0.5" strokeDasharray="2 2" opacity="0.55" />
      <line x1="30" y1="50" x2="70" y2="50" stroke={BRASS} strokeWidth="0.5" strokeDasharray="2 2" opacity="0.45" />
      <line x1="30" y1="64" x2="70" y2="64" stroke={BRASS} strokeWidth="0.5" strokeDasharray="2 2" opacity="0.35" />
      <line x1="30" y1="36" x2="30" y2="64" stroke={BRASS} strokeWidth="0.4" strokeDasharray="2 2" opacity="0.35" />
      <line x1="50" y1="20" x2="50" y2="80" stroke={BRASS} strokeWidth="0.4" strokeDasharray="2 2" opacity="0.35" />
      <line x1="70" y1="36" x2="70" y2="64" stroke={BRASS} strokeWidth="0.4" strokeDasharray="2 2" opacity="0.35" />

      {/* Block 1 — Title block top-left */}
      <g transform="translate(12, 20)">
        <rect width="24" height="14" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="1" />
        <rect x="2" y="3" width="14" height="2" rx="1" fill={INK} opacity="0.65" />
        <rect x="2" y="7" width="20" height="1.2" rx="0.6" fill={INK} opacity="0.4" />
        <rect x="2" y="9.5" width="16" height="1.2" rx="0.6" fill={INK} opacity="0.4" />
      </g>

      {/* Block 2 — Header block top-right with brass tag */}
      <g transform="translate(60, 18)">
        <rect width="28" height="18" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="1" />
        <rect width="4" height="18" fill={BRASS} />
        <rect x="6" y="3" width="20" height="2.4" rx="1" fill={INK} opacity="0.75" />
        <rect x="6" y="8" width="20" height="1.4" rx="0.7" fill={INK} opacity="0.5" />
        <rect x="6" y="11.5" width="18" height="1.2" rx="0.6" fill={INK} opacity="0.4" />
        <rect x="6" y="14.5" width="14" height="1.2" rx="0.6" fill={INK} opacity="0.35" />
      </g>

      {/* Block 3 — Central block with Rysen triangle */}
      <g transform="translate(40, 42)">
        <rect width="20" height="16" rx="2" fill={INK} />
        <polygon points="6,4 14,4 6,12" fill="#6EF06E" />
      </g>

      {/* Block 4 — Side block left middle */}
      <g transform="translate(10, 44)">
        <rect width="22" height="12" rx="2" fill="#FAFAF8" stroke={INK} strokeWidth="0.9" />
        <rect x="2" y="2.5" width="18" height="1.2" rx="0.6" fill={INK} opacity="0.55" />
        <rect x="2" y="5" width="14" height="1" rx="0.5" fill={INK} opacity="0.4" />
        <rect x="2" y="7.5" width="16" height="1" rx="0.5" fill={INK} opacity="0.35" />
        <rect x="2" y="9.5" width="12" height="1" rx="0.5" fill={INK} opacity="0.3" />
      </g>

      {/* Block 5 — Side block right middle */}
      <g transform="translate(64, 44)">
        <rect width="26" height="12" rx="2" fill="#FAFAF8" stroke={INK} strokeWidth="0.9" />
        <rect x="2" y="2.5" width="20" height="1.2" rx="0.6" fill={INK} opacity="0.55" />
        <rect x="2" y="5" width="22" height="1" rx="0.5" fill={INK} opacity="0.4" />
        <rect x="2" y="7.5" width="18" height="1" rx="0.5" fill={INK} opacity="0.35" />
        <rect x="2" y="9.5" width="14" height="1" rx="0.5" fill={INK} opacity="0.3" />
      </g>

      {/* Block 6 — Bottom-left */}
      <g transform="translate(8, 70)">
        <rect width="26" height="14" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="0.9" />
        <rect x="2" y="3" width="14" height="2" rx="1" fill={INK} opacity="0.65" />
        <rect x="2" y="6.5" width="22" height="1.2" rx="0.6" fill={INK} opacity="0.4" />
        <rect x="2" y="9" width="18" height="1.2" rx="0.6" fill={INK} opacity="0.4" />
        {/* Brass tag chip */}
        <rect x="14" y="-3" width="8" height="3" rx="1" fill={BRASS} />
        <text x="18" y="-1" fontSize="2.2" fontWeight="700" fill="#FFFFFF" textAnchor="middle" fontFamily="Geist, sans-serif">SEO</text>
      </g>

      {/* Block 7 — Bottom-right with schema marker */}
      <g transform="translate(60, 70)">
        <rect width="28" height="14" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="0.9" />
        <rect x="2" y="3" width="16" height="2" rx="1" fill={INK} opacity="0.65" />
        <rect x="2" y="6.5" width="24" height="1.2" rx="0.6" fill={INK} opacity="0.4" />
        <rect x="2" y="9" width="20" height="1.2" rx="0.6" fill={INK} opacity="0.4" />
        {/* Schema brace marker */}
        <text x="26" y="13.5" fontSize="3" fontWeight="700" fill={BRASS} textAnchor="end" fontFamily="Geist Mono, monospace">{`{}`}</text>
      </g>

      {/* Floating schema fragment top */}
      <g transform="translate(30, 6)">
        <rect width="40" height="10" rx="1.5" fill={INK} fillOpacity="0.92" />
        <text x="3" y="7" fontSize="3" fontWeight="700" fill="#6EF06E" fontFamily="Geist Mono, monospace" letterSpacing="0.1em">{`{ @type: Article }`}</text>
      </g>

      {/* Connectors between blocks */}
      <line x1="36" y1="34" x2="40" y2="42" stroke={BRASS} strokeWidth="0.7" />
      <line x1="60" y1="42" x2="64" y2="36" stroke={BRASS} strokeWidth="0.7" />
      <line x1="32" y1="50" x2="40" y2="50" stroke={BRASS} strokeWidth="0.7" />
      <line x1="60" y1="50" x2="64" y2="50" stroke={BRASS} strokeWidth="0.7" />
      <line x1="40" y1="58" x2="34" y2="70" stroke={BRASS} strokeWidth="0.7" />
      <line x1="60" y1="58" x2="64" y2="70" stroke={BRASS} strokeWidth="0.7" />

      {/* Internal link arrows */}
      <g transform="translate(42, 88)" opacity="0.8">
        <text fontSize="2.6" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="0.18em" fontWeight="700">INTERNAL LINK · ×24</text>
      </g>

      {/* Schema marker chip — right side */}
      <g transform="translate(78, 4)" opacity="0.85">
        <rect width="18" height="6" rx="1.5" fill={INK} />
        <text x="9" y="4.2" fontSize="2.4" fontWeight="700" fill="#6EF06E" textAnchor="middle" fontFamily="Geist Mono, monospace" letterSpacing="0.12em">{`{LD}`}</text>
      </g>

      {/* Cursor caret blinking on the central block */}
      <line x1="56" y1="46" x2="56" y2="52" stroke={BRASS} strokeWidth="0.6">
        <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" />
      </line>

      {/* Page-rank annotation */}
      <g transform="translate(50, 86)">
        <line x1="-30" y1="0" x2="-12" y2="0" stroke={BRASS} strokeWidth="0.3" opacity="0.5" />
        <line x1="12" y1="0" x2="30" y2="0" stroke={BRASS} strokeWidth="0.3" opacity="0.5" />
      </g>

      {/* Topic chip overlapping center */}
      <g transform="translate(30, 60)" opacity="0.85">
        <rect width="16" height="4" rx="1" fill={BRASS} fillOpacity="0.18" stroke={BRASS} strokeWidth="0.3" />
        <text x="8" y="3" fontSize="2.2" fontWeight="700" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.16em">TOPIC</text>
      </g>
      <g transform="translate(54, 60)" opacity="0.85">
        <rect width="16" height="4" rx="1" fill={BRASS} fillOpacity="0.18" stroke={BRASS} strokeWidth="0.3" />
        <text x="8" y="3" fontSize="2.2" fontWeight="700" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.16em">CITE</text>
      </g>

      {/* Corner ticks */}
      <path d="M 4 4 L 8 4 L 8 8" stroke={BRASS} strokeWidth="0.5" fill="none" opacity="0.6" />
      <path d="M 96 4 L 92 4 L 92 8" stroke={BRASS} strokeWidth="0.5" fill="none" opacity="0.6" />
      <path d="M 4 96 L 8 96 L 8 92" stroke={BRASS} strokeWidth="0.5" fill="none" opacity="0.6" />
      <path d="M 96 96 L 92 96 L 92 92" stroke={BRASS} strokeWidth="0.5" fill="none" opacity="0.6" />
    </svg>
  );
}
