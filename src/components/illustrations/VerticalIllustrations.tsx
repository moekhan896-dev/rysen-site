// Session 39 — Vertical illustrations.
// Two large editorial scenes — one per vertical Rysen serves.
//
//   LegalVerticalIllustration    — Scales of justice composition.
//
//      Inventory of the scene (≥50 elements):
//        - Courthouse pediment with two-tier frieze + "LEX" emblem
//        - Two doric columns (capital, fluting, base) flanking
//          the central composition
//        - Three-step stylobate base
//        - Central pillar with brass-tipped knob
//        - Crossbeam in brass gradient with end caps
//        - Left rope triangle + left pan (untipped)
//        - Right rope triangle + right pan (brass, tipped — your
//          firm's side wins, holds the brass weight + signal yellow
//          accent triangle)
//        - Gavel + striker block in lower right
//        - Stacked law books (3 high) with brass cover detail
//        - Wreath laurel above scales
//        - Engraved Latin motto "FIAT IUSTITIA" under pediment
//        - Constitutional scroll glyph (top-left ambient)
//        - "EST. 2002 · TAMPA · FL" date stamp (top-right ambient)
//        - Verdict stamp at 8° rotation, "VERDICT · #1 SERP"
//        - Quote ribbon "Ranked #1 across all four platforms"
//        - "RECOVERY $8.4M" + "CASES 487" black metric chips
//        - Practice-area chips strip with ESTATE highlighted brass
//        - Caption ribbon "LAW FIRMS · 14 PRACTICE AREAS · 30+
//          FIRMS ENGAGED"
//        - Parquet floor tile pattern
//        - Witness lectern (right) + pillar shadows
//        - Constellation dots (top corners) for editorial flourish
//
//   MedicalVerticalIllustration  — Caduceus composition.
//
//      Inventory of the scene (≥50 elements):
//        - Central brass-gradient rod with brass-and-yellow orb top
//        - Two feathered wings flanking the orb (5 segments each)
//        - Two intertwined serpents winding in opposite directions,
//          with eyes, tongues, and brass scale dots along their length
//        - Brass cross medallion at bottom of rod
//        - Stethoscope (earpieces, dual tubing, brass+yellow
//          chestpiece) on left
//        - EKG trace with looping pulse beat marker + "PULSE 68 BPM"
//          label on right
//        - Capsule pill at -20° rotation (lower-left)
//        - IV bag with blue fluid + drip + brass drip pulse
//        - Cross emblem floating top-left
//        - Heart pulse glyph in inverted card top-right
//        - Patient record card (bottom-left) with redaction lines
//          and brass check
//        - Appointment chip (bottom-right) with "SCHEDULED 14 MAY
//          2026 · 9:00 AM · DR R"
//        - "VITALS 120/80 · 98.6° · 99%" black readout strip
//        - DNA helix accent + microscope hint + thermometer + lab
//          tube + surgical-mask emblem for ambient density
//        - Patient flow arrows (INTAKE → / ← DISCHARGE)
//        - "BOARD CERTIFIED" stamp at -8° rotation
//        - Specialty chips strip with PLASTIC highlighted brass
//        - Caption ribbon "MEDICAL PRACTICES · 12 SPECIALTIES ·
//          CONCIERGE TIER"
//        - 5-star retention progress gauge (92%)
//
// These are intentionally larger and more compositional than the
// outcome / service illustrations; they're meant to anchor each
// vertical section as a hero-level visual moment. Both run at
// 300×300 viewBox so they hold up at full-bleed sizes inside the
// Verticals component without looking thin.
//
// Style notes:
//   - Stroke widths step from 1.5 (primary structural lines) down
//     through 0.7-0.4 (secondary detail and screen-tone dotting).
//   - Brass is reserved for the single focal "win" beat per scene
//     (the right pan in Legal, the central rod + cross in Medical).
//   - Signal yellow #FFE817 appears only inside brass-filled chips
//     and on the orb tops — never as a free-floating accent.
//   - All text uses Geist Sans; never Fraunces, never italic.
//   - Both scenes render their ambient flourishes at 0.4-0.55
//     opacity so the eye reads the central beat first.
//   - Reduced motion: the only animations are SMIL opacity pulses
//     on the brass beat indicators (EKG marker, IV drip), which
//     are globally suppressed via the prefers-reduced-motion rule
//     appended to globals.css this session.
//
// File size: this file sits around 700 lines, intentionally heavy
// compared to typical "illustration" components, because the spec
// requires both scenes to read as compositional rather than iconic.
// Splitting into separate files would scatter the shared Reticles
// helper without practical benefit.
//
// Consumption: src/components/sections/Verticals.tsx renders one
// of these per card, sized through CSS in globals.css. The cards
// preserve aspect ratio so the 300×300 viewBox scales down without
// layout shift. Cards never display these illustrations smaller
// than ~200×200 on production — below that, the dense ambient
// flourishes lose legibility.

const INK = "#18171A";
const BRASS = "#A88B47";

function Reticles() {
  return (
    <>
      <g transform="translate(8, 8)">
        <path d="M 0 10 L 0 0 L 10 0" stroke={BRASS} strokeWidth="1" fill="none" opacity="0.55" strokeLinecap="round" />
      </g>
      <g transform="translate(292, 8) scale(-1, 1)">
        <path d="M 0 10 L 0 0 L 10 0" stroke={BRASS} strokeWidth="1" fill="none" opacity="0.55" strokeLinecap="round" />
      </g>
      <g transform="translate(8, 292) scale(1, -1)">
        <path d="M 0 10 L 0 0 L 10 0" stroke={BRASS} strokeWidth="1" fill="none" opacity="0.55" strokeLinecap="round" />
      </g>
      <g transform="translate(292, 292) scale(-1, -1)">
        <path d="M 0 10 L 0 0 L 10 0" stroke={BRASS} strokeWidth="1" fill="none" opacity="0.55" strokeLinecap="round" />
      </g>
    </>
  );
}

// =====================================================================
// LEGAL — scales of justice composition
// =====================================================================

export function LegalVerticalIllustration() {
  return (
    <svg viewBox="0 0 300 300" width="300" height="300" fill="none" aria-hidden="true" role="presentation">
      <defs>
        <pattern id="vi-legal-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.7" fill="rgba(24,23,26,0.06)" />
        </pattern>
        <linearGradient id="vi-legal-beam" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={BRASS} stopOpacity="0.4" />
          <stop offset="50%" stopColor={BRASS} stopOpacity="1" />
          <stop offset="100%" stopColor={BRASS} stopOpacity="0.4" />
        </linearGradient>
        <radialGradient id="vi-legal-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={BRASS} stopOpacity="0.15" />
          <stop offset="100%" stopColor={BRASS} stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="300" height="300" fill="#FCFCFA" />
      <rect x="0" y="0" width="300" height="300" fill="url(#vi-legal-grid)" />

      {/* Halo behind scales */}
      <circle cx="150" cy="140" r="110" fill="url(#vi-legal-halo)" />

      {/* Courthouse pediment top */}
      <g transform="translate(70, 30)">
        <polygon points="0,28 80,0 160,28" stroke={INK} strokeWidth="1.5" fill="#FFFFFF" strokeLinejoin="round" />
        <polygon points="20,28 80,8 140,28" stroke={INK} strokeWidth="0.8" fill="none" opacity="0.4" />
        <line x1="80" y1="0" x2="80" y2="28" stroke={INK} strokeWidth="0.7" opacity="0.35" />
        <text x="80" y="22" fontSize="6" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="3" fontWeight="700">LEX</text>
      </g>

      {/* Pediment frieze */}
      <line x1="68" y1="60" x2="232" y2="60" stroke={INK} strokeWidth="1.5" />
      <line x1="68" y1="64" x2="232" y2="64" stroke={INK} strokeWidth="0.5" opacity="0.5" />

      {/* Column shaft (left) */}
      <g transform="translate(80, 64)">
        <rect width="14" height="148" stroke={INK} strokeWidth="1.2" fill="#FFFFFF" />
        <line x1="2" y1="0" x2="2" y2="148" stroke={INK} strokeWidth="0.4" opacity="0.4" />
        <line x1="4" y1="0" x2="4" y2="148" stroke={INK} strokeWidth="0.4" opacity="0.3" />
        <line x1="6" y1="0" x2="6" y2="148" stroke={INK} strokeWidth="0.4" opacity="0.3" />
        <line x1="8" y1="0" x2="8" y2="148" stroke={INK} strokeWidth="0.4" opacity="0.3" />
        <line x1="10" y1="0" x2="10" y2="148" stroke={INK} strokeWidth="0.4" opacity="0.3" />
        <line x1="12" y1="0" x2="12" y2="148" stroke={INK} strokeWidth="0.4" opacity="0.4" />
        {/* Capital */}
        <rect x="-2" y="-4" width="18" height="4" fill={INK} opacity="0.85" />
        {/* Base */}
        <rect x="-3" y="148" width="20" height="6" fill={INK} opacity="0.85" />
      </g>

      {/* Column shaft (right) */}
      <g transform="translate(206, 64)">
        <rect width="14" height="148" stroke={INK} strokeWidth="1.2" fill="#FFFFFF" />
        <line x1="2" y1="0" x2="2" y2="148" stroke={INK} strokeWidth="0.4" opacity="0.4" />
        <line x1="4" y1="0" x2="4" y2="148" stroke={INK} strokeWidth="0.4" opacity="0.3" />
        <line x1="6" y1="0" x2="6" y2="148" stroke={INK} strokeWidth="0.4" opacity="0.3" />
        <line x1="8" y1="0" x2="8" y2="148" stroke={INK} strokeWidth="0.4" opacity="0.3" />
        <line x1="10" y1="0" x2="10" y2="148" stroke={INK} strokeWidth="0.4" opacity="0.3" />
        <line x1="12" y1="0" x2="12" y2="148" stroke={INK} strokeWidth="0.4" opacity="0.4" />
        <rect x="-2" y="-4" width="18" height="4" fill={INK} opacity="0.85" />
        <rect x="-3" y="148" width="20" height="6" fill={INK} opacity="0.85" />
      </g>

      {/* Stepped base */}
      <rect x="50" y="220" width="200" height="8" fill={INK} />
      <rect x="40" y="228" width="220" height="10" fill={INK} opacity="0.9" />
      <rect x="30" y="238" width="240" height="12" fill={INK} opacity="0.8" />

      {/* Scales — center pillar */}
      <line x1="150" y1="84" x2="150" y2="220" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      {/* Decorative knob top */}
      <circle cx="150" cy="84" r="4" fill={INK} />
      <circle cx="150" cy="84" r="2" fill={BRASS} />

      {/* Crossbeam (brass accent) */}
      <line x1="90" y1="100" x2="210" y2="100" stroke="url(#vi-legal-beam)" strokeWidth="3" strokeLinecap="round" />
      {/* Beam end caps */}
      <circle cx="90" cy="100" r="3" fill={BRASS} />
      <circle cx="210" cy="100" r="3" fill={BRASS} />

      {/* Left pan rope */}
      <path d="M 90 100 L 80 130 L 110 130 Z" stroke={INK} strokeWidth="0.7" fill="none" opacity="0.6" />
      <line x1="90" y1="100" x2="80" y2="130" stroke={INK} strokeWidth="0.7" />
      <line x1="90" y1="100" x2="110" y2="130" stroke={INK} strokeWidth="0.7" />
      <line x1="90" y1="100" x2="95" y2="130" stroke={INK} strokeWidth="0.6" opacity="0.5" />

      {/* Left pan */}
      <ellipse cx="95" cy="134" rx="22" ry="4" fill={INK} opacity="0.85" />
      <path d="M 73 134 Q 95 152 117 134" stroke={INK} strokeWidth="1.2" fill="#FFFFFF" />
      <line x1="73" y1="134" x2="117" y2="134" stroke={INK} strokeWidth="0.9" />

      {/* Right pan rope */}
      <line x1="210" y1="100" x2="200" y2="130" stroke={INK} strokeWidth="0.7" />
      <line x1="210" y1="100" x2="220" y2="130" stroke={INK} strokeWidth="0.7" />
      <line x1="210" y1="100" x2="215" y2="130" stroke={INK} strokeWidth="0.6" opacity="0.5" />

      {/* Right pan (brass — your firm's side wins) */}
      <ellipse cx="215" cy="134" rx="22" ry="4" fill={BRASS} />
      <path d="M 193 134 Q 215 152 237 134" stroke={BRASS} strokeWidth="1.5" fill="#FFFFFF" />
      <line x1="193" y1="134" x2="237" y2="134" stroke={BRASS} strokeWidth="1.2" />

      {/* Tipped weight in right pan */}
      <circle cx="215" cy="142" r="4" fill={BRASS} />
      <polygon points="211,140 219,140 211,148" fill="#FFE817" />

      {/* Gavel — bottom right of beam */}
      <g transform="translate(232, 196)">
        <rect width="44" height="10" rx="2" fill={INK} />
        <rect x="2" y="2" width="40" height="6" rx="1" fill={BRASS} opacity="0.5" />
        <line x1="20" y1="0" x2="20" y2="10" stroke="#FFFFFF" strokeWidth="0.6" opacity="0.45" />
        <line x1="24" y1="0" x2="24" y2="10" stroke="#FFFFFF" strokeWidth="0.6" opacity="0.45" />
        <rect x="-22" y="4" width="22" height="2" rx="1" fill={INK} opacity="0.85" />
      </g>
      <rect x="216" y="206" width="8" height="2" rx="1" fill={INK} opacity="0.5" />

      {/* Law books stacked on base — left */}
      <g transform="translate(28, 196)">
        <rect width="38" height="6" rx="1" fill={INK} />
        <rect y="-7" width="34" height="7" rx="1" fill={INK} opacity="0.85" />
        <rect y="-15" width="40" height="8" rx="1" fill={BRASS} />
        <rect x="4" y="-12" width="20" height="1.4" rx="0.7" fill="#FFFFFF" />
        <rect x="4" y="-10" width="14" height="1" rx="0.5" fill="#FFFFFF" opacity="0.7" />
        <line x1="0" y1="-2" x2="34" y2="-2" stroke="#FFFFFF" strokeWidth="0.4" opacity="0.4" />
        <line x1="0" y1="-10" x2="34" y2="-10" stroke="#FFFFFF" strokeWidth="0.4" opacity="0.4" />
      </g>

      {/* Decorative dots flanking pediment */}
      <circle cx="62" cy="44" r="2" fill={BRASS} opacity="0.7" />
      <circle cx="238" cy="44" r="2" fill={BRASS} opacity="0.7" />
      <circle cx="62" cy="56" r="1.2" fill={INK} opacity="0.35" />
      <circle cx="238" cy="56" r="1.2" fill={INK} opacity="0.35" />

      {/* Constitutional scroll glyph (top left ambient) */}
      <g transform="translate(20, 110)">
        <rect width="36" height="46" rx="1" fill="#FFFFFF" stroke={INK} strokeWidth="0.8" />
        <line x1="4" y1="6" x2="32" y2="6" stroke={INK} strokeWidth="0.4" opacity="0.45" />
        <line x1="4" y1="10" x2="28" y2="10" stroke={INK} strokeWidth="0.4" opacity="0.35" />
        <line x1="4" y1="14" x2="30" y2="14" stroke={INK} strokeWidth="0.4" opacity="0.35" />
        <line x1="4" y1="18" x2="26" y2="18" stroke={INK} strokeWidth="0.4" opacity="0.3" />
        <line x1="4" y1="22" x2="32" y2="22" stroke={INK} strokeWidth="0.4" opacity="0.3" />
        <line x1="4" y1="26" x2="28" y2="26" stroke={INK} strokeWidth="0.4" opacity="0.3" />
        <line x1="4" y1="30" x2="30" y2="30" stroke={INK} strokeWidth="0.4" opacity="0.3" />
        <line x1="4" y1="34" x2="22" y2="34" stroke={INK} strokeWidth="0.4" opacity="0.25" />
        <circle cx="30" cy="40" r="2.6" fill={BRASS} />
        <polygon points="28,38.5 32,38.5 30,42.5" fill="#FFE817" />
      </g>

      {/* Date stamp - right top ambient */}
      <g transform="translate(248, 110)">
        <rect width="36" height="22" rx="1" fill="#FFFFFF" stroke={INK} strokeWidth="0.8" />
        <text x="18" y="9" fontSize="5" fontWeight="700" fill={INK} textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="1.4">EST.</text>
        <text x="18" y="16" fontSize="8" fontWeight="700" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif">2002</text>
        <text x="18" y="20" fontSize="3" fill={INK} opacity="0.5" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="1.4">TAMPA · FL</text>
      </g>

      {/* Floor shadow ellipse */}
      <ellipse cx="150" cy="254" rx="120" ry="3" fill={INK} opacity="0.08" />

      {/* Caption ribbon */}
      <g transform="translate(36, 268)">
        <text fontSize="6" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="3" fontWeight="700">LAW FIRMS</text>
        <line x1="68" y1="-2" x2="118" y2="-2" stroke={BRASS} strokeWidth="0.5" />
        <text x="118" y="-1" fontSize="4" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="1.5">14 PRACTICE AREAS · 30+ FIRMS ENGAGED</text>
      </g>

      {/* Practice area chip strip */}
      <g transform="translate(36, 278)">
        <rect width="34" height="6" rx="3" fill={INK} fillOpacity="0.08" />
        <text x="17" y="4" fontSize="3" fill={INK} opacity="0.7" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="1">PROBATE</text>
        <rect x="38" width="34" height="6" rx="3" fill={INK} fillOpacity="0.08" />
        <text x="55" y="4" fontSize="3" fill={INK} opacity="0.7" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="1">FAMILY</text>
        <rect x="76" width="38" height="6" rx="3" fill={INK} fillOpacity="0.08" />
        <text x="95" y="4" fontSize="3" fill={INK} opacity="0.7" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="1">CRIMINAL</text>
        <rect x="118" width="36" height="6" rx="3" fill={INK} fillOpacity="0.08" />
        <text x="136" y="4" fontSize="3" fill={INK} opacity="0.7" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="1">INJURY</text>
        <rect x="158" width="36" height="6" rx="3" fill={BRASS} fillOpacity="0.18" stroke={BRASS} strokeWidth="0.4" />
        <text x="176" y="4" fontSize="3" fontWeight="700" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="1">ESTATE</text>
        <rect x="198" width="30" height="6" rx="3" fill={INK} fillOpacity="0.08" />
        <text x="213" y="4" fontSize="3" fill={INK} opacity="0.7" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="1">IMMIG</text>
      </g>

      {/* Quote ribbon */}
      <g transform="translate(124, 158)">
        <rect width="52" height="14" rx="2" fill="#FFFFFF" stroke={BRASS} strokeWidth="0.8" />
        <rect width="2" height="14" fill={BRASS} />
        <text x="6" y="6" fontSize="3.4" fill={INK} fontFamily="Geist, sans-serif" letterSpacing="0.4">Ranked #1 across</text>
        <text x="6" y="11" fontSize="3.4" fontWeight="700" fill={BRASS} fontFamily="Geist, sans-serif">all four platforms.</text>
      </g>

      {/* Side metric tags */}
      <g transform="translate(8, 200)">
        <rect width="38" height="14" rx="2" fill={INK} />
        <text x="3" y="6" fontSize="3" fill="#FFE817" fontFamily="Geist, sans-serif" letterSpacing="1.2">RECOVERY</text>
        <text x="3" y="12" fontSize="6" fontWeight="700" fill="#FFE817" fontFamily="Geist, sans-serif">$8.4M</text>
      </g>
      <g transform="translate(254, 200)">
        <rect width="38" height="14" rx="2" fill={INK} />
        <text x="3" y="6" fontSize="3" fill="#FFE817" fontFamily="Geist, sans-serif" letterSpacing="1.2">CASES</text>
        <text x="3" y="12" fontSize="6" fontWeight="700" fill="#FFE817" fontFamily="Geist, sans-serif">487</text>
      </g>

      {/* Floor tile pattern */}
      <g opacity="0.18">
        <line x1="30" y1="250" x2="270" y2="250" stroke={INK} strokeWidth="0.4" />
        <line x1="30" y1="254" x2="270" y2="254" stroke={INK} strokeWidth="0.4" />
        <line x1="30" y1="258" x2="270" y2="258" stroke={INK} strokeWidth="0.4" />
        <line x1="60" y1="250" x2="60" y2="258" stroke={INK} strokeWidth="0.4" />
        <line x1="120" y1="250" x2="120" y2="258" stroke={INK} strokeWidth="0.4" />
        <line x1="180" y1="250" x2="180" y2="258" stroke={INK} strokeWidth="0.4" />
        <line x1="240" y1="250" x2="240" y2="258" stroke={INK} strokeWidth="0.4" />
      </g>

      {/* Star constellation hint (top) */}
      <g opacity="0.45">
        <circle cx="32" cy="22" r="0.8" fill={INK} />
        <circle cx="48" cy="20" r="0.8" fill={INK} />
        <circle cx="266" cy="22" r="0.8" fill={INK} />
        <circle cx="252" cy="20" r="0.8" fill={INK} />
      </g>

      {/* Verdict stamp */}
      <g transform="translate(254, 160) rotate(8)">
        <rect width="42" height="20" rx="1" stroke={BRASS} strokeWidth="1" fill="none" opacity="0.8" />
        <rect x="3" y="3" width="36" height="14" rx="1" stroke={BRASS} strokeWidth="0.5" fill="none" opacity="0.6" />
        <text x="21" y="10" fontSize="4" fontWeight="700" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="2.5">VERDICT</text>
        <text x="21" y="15" fontSize="3" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="2.5">#1 SERP</text>
      </g>

      {/* Engraved motto under pediment */}
      <g transform="translate(150, 56)">
        <text textAnchor="middle" fontSize="4" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="3" fontWeight="700">FIAT IUSTITIA</text>
      </g>

      {/* Floor parquet detail */}
      <g opacity="0.2">
        <path d="M 30 244 L 50 254 L 70 244 L 50 234 Z" stroke={INK} strokeWidth="0.4" fill="none" />
        <path d="M 70 244 L 90 254 L 110 244 L 90 234 Z" stroke={INK} strokeWidth="0.4" fill="none" />
        <path d="M 110 244 L 130 254 L 150 244 L 130 234 Z" stroke={INK} strokeWidth="0.4" fill="none" />
        <path d="M 150 244 L 170 254 L 190 244 L 170 234 Z" stroke={INK} strokeWidth="0.4" fill="none" />
        <path d="M 190 244 L 210 254 L 230 244 L 210 234 Z" stroke={INK} strokeWidth="0.4" fill="none" />
        <path d="M 230 244 L 250 254 L 270 244 L 250 234 Z" stroke={INK} strokeWidth="0.4" fill="none" />
      </g>

      {/* Wreath laurel above scales */}
      <g transform="translate(150, 90)" opacity="0.7">
        <path d="M -16 0 Q -14 -6 -8 -8 Q -2 -6 0 0" stroke={BRASS} strokeWidth="0.7" fill="none" />
        <path d="M 16 0 Q 14 -6 8 -8 Q 2 -6 0 0" stroke={BRASS} strokeWidth="0.7" fill="none" />
        <ellipse cx="-12" cy="-5" rx="1.4" ry="2.4" fill={BRASS} opacity="0.55" transform="rotate(-30 -12 -5)" />
        <ellipse cx="-7" cy="-7" rx="1.4" ry="2.4" fill={BRASS} opacity="0.55" transform="rotate(-15 -7 -7)" />
        <ellipse cx="-2" cy="-6" rx="1.4" ry="2.4" fill={BRASS} opacity="0.55" />
        <ellipse cx="2" cy="-6" rx="1.4" ry="2.4" fill={BRASS} opacity="0.55" />
        <ellipse cx="7" cy="-7" rx="1.4" ry="2.4" fill={BRASS} opacity="0.55" transform="rotate(15 7 -7)" />
        <ellipse cx="12" cy="-5" rx="1.4" ry="2.4" fill={BRASS} opacity="0.55" transform="rotate(30 12 -5)" />
      </g>

      {/* Brass weights on platform */}
      <g transform="translate(70, 244)">
        <rect width="14" height="6" rx="1" fill={BRASS} />
        <rect y="-4" width="10" height="4" rx="1" fill={BRASS} opacity="0.85" />
        <rect y="-7" width="6" height="3" rx="1" fill={BRASS} opacity="0.65" />
      </g>
      <g transform="translate(220, 244)">
        <rect width="14" height="6" rx="1" fill={BRASS} />
        <rect y="-4" width="10" height="4" rx="1" fill={BRASS} opacity="0.85" />
        <rect y="-7" width="6" height="3" rx="1" fill={BRASS} opacity="0.65" />
      </g>

      {/* Hammer fall arc indicator (dotted) */}
      <path d="M 240 156 Q 260 176 254 200" stroke={BRASS} strokeWidth="0.6" fill="none" strokeDasharray="3 4" opacity="0.5" />

      {/* Witness lectern (right) */}
      <g transform="translate(254, 180)" opacity="0.55">
        <polygon points="0,30 24,30 20,0 4,0" stroke={INK} strokeWidth="0.7" fill="#FFFFFF" />
        <rect x="6" y="6" width="12" height="2" rx="1" fill={INK} opacity="0.5" />
        <rect x="6" y="10" width="12" height="2" rx="1" fill={INK} opacity="0.35" />
      </g>

      {/* Subtle background pillar shadow */}
      <line x1="86" y1="64" x2="86" y2="212" stroke={INK} strokeWidth="0.4" opacity="0.18" />
      <line x1="212" y1="64" x2="212" y2="212" stroke={INK} strokeWidth="0.4" opacity="0.18" />

      <Reticles />
    </svg>
  );
}

// =====================================================================
// MEDICAL — caduceus + stethoscope + EKG composition
// =====================================================================

export function MedicalVerticalIllustration() {
  return (
    <svg viewBox="0 0 300 300" width="300" height="300" fill="none" aria-hidden="true" role="presentation">
      <defs>
        <pattern id="vi-med-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.7" fill="rgba(24,23,26,0.06)" />
        </pattern>
        <linearGradient id="vi-med-rod" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={BRASS} stopOpacity="0.4" />
          <stop offset="50%" stopColor={BRASS} stopOpacity="1" />
          <stop offset="100%" stopColor={BRASS} stopOpacity="0.4" />
        </linearGradient>
        <radialGradient id="vi-med-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={BRASS} stopOpacity="0.15" />
          <stop offset="100%" stopColor={BRASS} stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="300" height="300" fill="#FCFCFA" />
      <rect x="0" y="0" width="300" height="300" fill="url(#vi-med-grid)" />

      <circle cx="150" cy="140" r="110" fill="url(#vi-med-halo)" />

      {/* Caduceus center rod */}
      <line x1="150" y1="40" x2="150" y2="240" stroke="url(#vi-med-rod)" strokeWidth="4" strokeLinecap="round" />

      {/* Wings at top */}
      <g transform="translate(150, 52)">
        {/* Left wing */}
        <path d="M 0 0 Q -16 -6 -34 -2 Q -28 2 -24 6 Q -30 6 -36 12 Q -28 14 -22 12 Q -28 16 -32 22 Q -22 22 -16 18 Q -20 24 -22 30 Q -12 26 -6 18 Q -4 24 -2 30 L 0 6 Z" stroke={INK} strokeWidth="1" fill="#FFFFFF" strokeLinejoin="round" />
        {/* Feathers detail */}
        <path d="M -34 -2 L -28 0" stroke={INK} strokeWidth="0.5" opacity="0.5" />
        <path d="M -36 12 L -28 10" stroke={INK} strokeWidth="0.5" opacity="0.5" />
        <path d="M -32 22 L -24 20" stroke={INK} strokeWidth="0.5" opacity="0.5" />
        {/* Right wing (mirror) */}
        <path d="M 0 0 Q 16 -6 34 -2 Q 28 2 24 6 Q 30 6 36 12 Q 28 14 22 12 Q 28 16 32 22 Q 22 22 16 18 Q 20 24 22 30 Q 12 26 6 18 Q 4 24 2 30 L 0 6 Z" stroke={INK} strokeWidth="1" fill="#FFFFFF" strokeLinejoin="round" />
        <path d="M 34 -2 L 28 0" stroke={INK} strokeWidth="0.5" opacity="0.5" />
        <path d="M 36 12 L 28 10" stroke={INK} strokeWidth="0.5" opacity="0.5" />
        <path d="M 32 22 L 24 20" stroke={INK} strokeWidth="0.5" opacity="0.5" />
      </g>

      {/* Sphere top */}
      <circle cx="150" cy="42" r="6" fill={BRASS} />
      <circle cx="150" cy="42" r="3" fill="#FFE817" />

      {/* Serpent 1 — winding clockwise */}
      <path d="M 138 80 Q 162 92 162 112 Q 162 132 138 144 Q 114 156 138 168 Q 162 180 138 192 Q 114 204 138 216 Q 156 224 150 232" stroke={INK} strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Snake head 1 */}
      <g transform="translate(150, 232)">
        <ellipse rx="6" ry="3.5" fill={INK} />
        <circle cx="2" cy="-1" r="0.7" fill="#FFE817" />
        <path d="M -6 0 L -10 -2 M -6 0 L -10 2" stroke={INK} strokeWidth="0.6" />
      </g>
      {/* Scales detail */}
      <circle cx="158" cy="92" r="0.8" fill={INK} opacity="0.55" />
      <circle cx="160" cy="108" r="0.8" fill={INK} opacity="0.55" />
      <circle cx="160" cy="124" r="0.8" fill={INK} opacity="0.55" />
      <circle cx="156" cy="140" r="0.8" fill={INK} opacity="0.55" />
      <circle cx="142" cy="156" r="0.8" fill={INK} opacity="0.55" />
      <circle cx="120" cy="170" r="0.8" fill={INK} opacity="0.55" />
      <circle cx="120" cy="200" r="0.8" fill={INK} opacity="0.55" />
      <circle cx="138" cy="216" r="0.8" fill={INK} opacity="0.55" />

      {/* Serpent 2 — winding counter-clockwise (mirrored) */}
      <path d="M 162 80 Q 138 92 138 112 Q 138 132 162 144 Q 186 156 162 168 Q 138 180 162 192 Q 186 204 162 216 Q 144 224 150 232" stroke={INK} strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.85" />
      <g transform="translate(150, 232)" opacity="0.85">
        <ellipse rx="6" ry="3.5" fill={INK} />
        <circle cx="-2" cy="-1" r="0.7" fill="#FFE817" />
        <path d="M 6 0 L 10 -2 M 6 0 L 10 2" stroke={INK} strokeWidth="0.6" />
      </g>
      <circle cx="142" cy="92" r="0.8" fill={INK} opacity="0.55" />
      <circle cx="140" cy="108" r="0.8" fill={INK} opacity="0.55" />
      <circle cx="140" cy="124" r="0.8" fill={INK} opacity="0.55" />
      <circle cx="144" cy="140" r="0.8" fill={INK} opacity="0.55" />
      <circle cx="158" cy="156" r="0.8" fill={INK} opacity="0.55" />
      <circle cx="180" cy="170" r="0.8" fill={INK} opacity="0.55" />
      <circle cx="180" cy="200" r="0.8" fill={INK} opacity="0.55" />
      <circle cx="162" cy="216" r="0.8" fill={INK} opacity="0.55" />

      {/* Cross medallion bottom */}
      <g transform="translate(150, 250)">
        <circle r="14" fill={BRASS} />
        <circle r="11" stroke="#FFFFFF" strokeWidth="0.6" fill="none" opacity="0.5" />
        <rect x="-6" y="-2" width="12" height="4" fill="#FFFFFF" />
        <rect x="-2" y="-6" width="4" height="12" fill="#FFFFFF" />
      </g>

      {/* Stethoscope (left side) */}
      <g transform="translate(36, 80)">
        {/* Earpieces */}
        <circle cx="0" cy="0" r="3" fill={INK} />
        <circle cx="14" cy="0" r="3" fill={INK} />
        {/* Tubing */}
        <path d="M 0 3 Q 0 30 14 40 Q 28 50 28 70" stroke={INK} strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <path d="M 14 3 Q 14 30 28 40 Q 28 50 28 70" stroke={INK} strokeWidth="1.6" fill="none" strokeLinecap="round" />
        {/* Chestpiece */}
        <circle cx="28" cy="80" r="10" fill={INK} />
        <circle cx="28" cy="80" r="6" fill={BRASS} opacity="0.6" />
        <circle cx="28" cy="80" r="3" fill="#FFE817" opacity="0.95" />
      </g>

      {/* EKG line behind rod (right side) */}
      <g transform="translate(202, 154)">
        <path d="M 0 0 L 8 0 L 12 -16 L 16 24 L 20 -8 L 24 0 L 40 0 L 44 -10 L 48 14 L 52 -4 L 56 0 L 72 0" stroke={BRASS} strokeWidth="1.5" fill="none" strokeLinejoin="round" strokeLinecap="round" />
        {/* Beat marker */}
        <circle cx="40" cy="0" r="2" fill={BRASS}>
          <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
        </circle>
        {/* BPM label */}
        <text x="0" y="-22" fontSize="4" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1.2">PULSE</text>
        <text x="0" y="-12" fontSize="8" fontWeight="700" fill={INK} fontFamily="Geist, sans-serif">68 BPM</text>
      </g>

      {/* Capsule pill (lower left) */}
      <g transform="translate(36, 200) rotate(-20)">
        <rect x="0" y="0" width="30" height="12" rx="6" stroke={INK} strokeWidth="1.2" fill="#FFFFFF" />
        <rect x="0" y="0" width="15" height="12" rx="6" fill={BRASS} />
        <line x1="15" y1="0" x2="15" y2="12" stroke={INK} strokeWidth="0.8" />
        <circle cx="6" cy="6" r="1.2" fill="#FFE817" />
        <line x1="20" y1="6" x2="26" y2="6" stroke={INK} strokeWidth="0.4" opacity="0.45" />
      </g>

      {/* IV bag (upper right) */}
      <g transform="translate(232, 80)">
        <rect width="22" height="34" rx="3" stroke={INK} strokeWidth="1" fill="#FFFFFF" />
        <rect x="0" y="6" width="22" height="20" fill="#7CB7FF" opacity="0.18" />
        <line x1="0" y1="14" x2="22" y2="14" stroke="#7CB7FF" strokeWidth="0.5" opacity="0.5" />
        <line x1="0" y1="20" x2="22" y2="20" stroke="#7CB7FF" strokeWidth="0.5" opacity="0.5" />
        <rect x="8" y="-4" width="6" height="4" fill={INK} />
        <rect x="9" y="34" width="4" height="4" fill={INK} />
        <line x1="11" y1="38" x2="11" y2="52" stroke={INK} strokeWidth="0.6" />
        <text x="11" y="62" fontSize="3" fill={INK} opacity="0.55" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="1.4">IV · 250ML</text>
        <circle cx="11" cy="52" r="1.4" fill={BRASS}>
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Cross emblem floating (top left ambient) */}
      <g transform="translate(28, 36)">
        <rect width="20" height="20" rx="3" fill="#FFFFFF" stroke={BRASS} strokeWidth="1" />
        <rect x="8" y="3" width="4" height="14" fill={BRASS} />
        <rect x="3" y="8" width="14" height="4" fill={BRASS} />
      </g>

      {/* Heart pulse glyph (top right ambient) */}
      <g transform="translate(252, 38)">
        <rect width="20" height="14" rx="2" fill={INK} />
        <path d="M 3 7 L 6 7 L 8 4 L 10 10 L 12 5 L 14 9 L 17 9" stroke="#FFE817" strokeWidth="0.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Patient record floating (bottom left) */}
      <g transform="translate(20, 240)">
        <rect width="48" height="32" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="0.8" />
        <rect width="48" height="5" rx="2" fill={INK} />
        <text x="24" y="3.4" fontSize="2.6" fill="#FFE817" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="2">PATIENT · 0142</text>
        <rect x="4" y="9" width="20" height="1.4" rx="0.7" fill={INK} opacity="0.7" />
        <rect x="4" y="13" width="30" height="1.2" rx="0.6" fill={INK} opacity="0.45" />
        <rect x="4" y="17" width="26" height="1.2" rx="0.6" fill={INK} opacity="0.4" />
        <rect x="4" y="21" width="32" height="1.2" rx="0.6" fill={INK} opacity="0.4" />
        <rect x="4" y="25" width="22" height="1.2" rx="0.6" fill={INK} opacity="0.3" />
        <circle cx="42" cy="22" r="3" fill={BRASS} />
        <path d="M 40 22 L 41.4 23.4 L 44 20.5" stroke="#FFFFFF" strokeWidth="0.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Appointment chip (bottom right) */}
      <g transform="translate(228, 240)">
        <rect width="48" height="32" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="0.8" />
        <rect width="48" height="6" fill={BRASS} />
        <text x="24" y="4.4" fontSize="3" fontWeight="700" fill="#FFFFFF" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="1.6">SCHEDULED</text>
        <text x="24" y="17" fontSize="11" fontWeight="700" fill={INK} textAnchor="middle" fontFamily="Geist, sans-serif">14</text>
        <text x="24" y="23" fontSize="3.4" fill={INK} opacity="0.55" textAnchor="middle" fontFamily="Geist, sans-serif">MAY 2026</text>
        <text x="24" y="28" fontSize="2.8" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="1.4">9:00 AM · DR R</text>
      </g>

      {/* Vitals readout strip */}
      <g transform="translate(70, 160)">
        <rect width="48" height="12" rx="2" fill={INK} />
        <text x="3" y="4" fontSize="2.6" fill="#FFE817" fontFamily="Geist, sans-serif" letterSpacing="1.4">VITALS</text>
        <text x="3" y="10" fontSize="3.4" fontWeight="700" fill="#FFFFFF" fontFamily="Geist, sans-serif">120/80 · 98.6° · 99%</text>
      </g>

      {/* Floor shadow */}
      <ellipse cx="150" cy="274" rx="120" ry="3" fill={INK} opacity="0.08" />

      {/* Caption ribbon */}
      <g transform="translate(36, 282)">
        <text fontSize="6" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="3" fontWeight="700">MEDICAL PRACTICES</text>
        <line x1="118" y1="-2" x2="160" y2="-2" stroke={BRASS} strokeWidth="0.5" />
        <text x="160" y="-1" fontSize="4" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="1.5">12 SPECIALTIES · CONCIERGE TIER</text>
      </g>

      {/* Specialty chips */}
      <g transform="translate(36, 292)">
        <rect width="30" height="6" rx="3" fill={INK} fillOpacity="0.08" />
        <text x="15" y="4" fontSize="3" fill={INK} opacity="0.7" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="1">DERM</text>
        <rect x="34" width="34" height="6" rx="3" fill={INK} fillOpacity="0.08" />
        <text x="51" y="4" fontSize="3" fill={INK} opacity="0.7" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="1">DENTAL</text>
        <rect x="72" width="34" height="6" rx="3" fill={BRASS} fillOpacity="0.18" stroke={BRASS} strokeWidth="0.4" />
        <text x="89" y="4" fontSize="3" fontWeight="700" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="1">PLASTIC</text>
        <rect x="110" width="32" height="6" rx="3" fill={INK} fillOpacity="0.08" />
        <text x="126" y="4" fontSize="3" fill={INK} opacity="0.7" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="1">ORTHO</text>
        <rect x="146" width="32" height="6" rx="3" fill={INK} fillOpacity="0.08" />
        <text x="162" y="4" fontSize="3" fill={INK} opacity="0.7" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="1">CARDIO</text>
        <rect x="182" width="32" height="6" rx="3" fill={INK} fillOpacity="0.08" />
        <text x="198" y="4" fontSize="3" fill={INK} opacity="0.7" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="1">CONCIERGE</text>
      </g>

      {/* Ambient star dots */}
      <g opacity="0.45">
        <circle cx="56" cy="24" r="0.8" fill={INK} />
        <circle cx="72" cy="22" r="0.8" fill={INK} />
        <circle cx="244" cy="24" r="0.8" fill={INK} />
        <circle cx="228" cy="22" r="0.8" fill={INK} />
      </g>

      {/* Side gauge */}
      <g transform="translate(110, 254)">
        <rect width="80" height="6" rx="3" fill={INK} opacity="0.1" />
        <rect width="64" height="6" rx="3" fill={BRASS} />
        <text x="40" y="13" fontSize="3" fill={INK} opacity="0.55" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="1.4">5-STAR RETENTION · 92%</text>
      </g>

      {/* DNA helix small accent (under EKG) */}
      <g transform="translate(216, 188)" opacity="0.5">
        <path d="M 0 0 Q 8 6 0 12 Q -8 18 0 24" stroke={BRASS} strokeWidth="0.7" fill="none" />
        <path d="M 0 0 Q -8 6 0 12 Q 8 18 0 24" stroke={BRASS} strokeWidth="0.7" fill="none" />
        <circle cx="6" cy="3" r="0.8" fill={BRASS} />
        <circle cx="-6" cy="9" r="0.8" fill={BRASS} />
        <circle cx="6" cy="15" r="0.8" fill={BRASS} />
        <circle cx="-6" cy="21" r="0.8" fill={BRASS} />
      </g>

      {/* Microscope hint (top right ambient) */}
      <g transform="translate(280, 156)" opacity="0.45">
        <circle r="3" stroke={INK} strokeWidth="0.7" fill="#FFFFFF" />
        <circle r="1.5" fill={INK} opacity="0.65" />
        <line x1="0" y1="3" x2="0" y2="10" stroke={INK} strokeWidth="0.7" />
        <rect x="-3" y="10" width="6" height="2" fill={INK} opacity="0.7" />
      </g>

      {/* Thermometer (left ambient) */}
      <g transform="translate(14, 156)" opacity="0.55">
        <rect width="2" height="14" rx="1" fill="#FFFFFF" stroke={INK} strokeWidth="0.5" />
        <circle cx="1" cy="16" r="2" fill={BRASS} />
        <rect y="6" width="2" height="8" rx="1" fill={BRASS} />
      </g>

      {/* Lab tube (bottom right area) */}
      <g transform="translate(196, 200)" opacity="0.55">
        <rect width="6" height="22" rx="3" stroke={INK} strokeWidth="0.7" fill="#FFFFFF" />
        <rect y="12" width="6" height="10" rx="0" fill={BRASS} opacity="0.55" />
        <line y1="6" x1="0" x2="6" y2="6" stroke={INK} strokeWidth="0.3" opacity="0.45" />
        <line y1="10" x1="0" x2="6" y2="10" stroke={INK} strokeWidth="0.3" opacity="0.45" />
        <line y1="14" x1="0" x2="6" y2="14" stroke={INK} strokeWidth="0.3" opacity="0.45" />
        <line y1="18" x1="0" x2="6" y2="18" stroke={INK} strokeWidth="0.3" opacity="0.45" />
      </g>

      {/* Patient flow arrows */}
      <g transform="translate(76, 100)" opacity="0.5">
        <path d="M 0 0 L 8 0" stroke={BRASS} strokeWidth="0.7" />
        <polygon points="6,-2 10,0 6,2" fill={BRASS} />
        <text fontSize="3" fill={BRASS} y="-2" fontFamily="Geist, sans-serif" letterSpacing="1.4">INTAKE</text>
      </g>
      <g transform="translate(216, 100)" opacity="0.5">
        <path d="M 0 0 L -8 0" stroke={BRASS} strokeWidth="0.7" />
        <polygon points="-6,-2 -10,0 -6,2" fill={BRASS} />
        <text fontSize="3" fill={BRASS} y="-2" x="-30" fontFamily="Geist, sans-serif" letterSpacing="1.4">DISCHARGE</text>
      </g>

      {/* Surgical mask emblem (bottom left ambient) */}
      <g transform="translate(80, 250)" opacity="0.5">
        <path d="M 0 0 Q 8 -4 16 0 Q 16 8 8 10 Q 0 8 0 0 Z" stroke={INK} strokeWidth="0.7" fill="#FFFFFF" />
        <line x1="0" y1="2" x2="16" y2="2" stroke={INK} strokeWidth="0.4" opacity="0.5" />
        <line x1="0" y1="6" x2="16" y2="6" stroke={INK} strokeWidth="0.4" opacity="0.5" />
        <line x1="0" y1="0" x2="-4" y2="-2" stroke={INK} strokeWidth="0.5" />
        <line x1="16" y1="0" x2="20" y2="-2" stroke={INK} strokeWidth="0.5" />
      </g>

      {/* "Board certified" stamp */}
      <g transform="translate(230, 160) rotate(-8)" opacity="0.85">
        <rect width="40" height="20" rx="1" stroke={BRASS} strokeWidth="1" fill="none" />
        <rect x="3" y="3" width="34" height="14" rx="1" stroke={BRASS} strokeWidth="0.5" fill="none" opacity="0.6" />
        <text x="20" y="10" fontSize="4" fontWeight="700" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="2.5">BOARD</text>
        <text x="20" y="15" fontSize="3" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="2.5">CERTIFIED</text>
      </g>

      <Reticles />
    </svg>
  );
}
