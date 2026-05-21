// Session 40 — Vertical world illustrations.
//
// Two large editorial line-art interiors. Replaces the symbolic
// scales-of-justice + caduceus compositions from Session 39. The new
// illustrations show actual rooms: a law office and a modern clinic.
// The composition reads as "we know who you are because we built the
// space you work in".
//
// Style:
//   - 400x400 viewBox.
//   - Primary lines at 1.4-1.8px. Secondary detail at 0.6-1px. Tone
//     dots and screentone at 0.4-0.5px.
//   - INK for all structural strokes. BRASS used for the single
//     focal "beat" per scene (the desk lamp in Legal, the wall
//     monitor in Medical).
//   - Yellow (#FFE817) appears only inside brass blocks/Rysen marks.
//   - No serif text. Annotations use Geist with wide letter-spacing.
//
// Both files run to ~400 lines with 60+ SVG elements each to read as
// rendered "drawn" interiors rather than icons.

const INK = "#18171A";
const BRASS = "#A88B47";

// =====================================================================
// LEGAL WORLD — stylized law office interior
// =====================================================================

export function LegalVerticalIllustration() {
  return (
    <svg
      viewBox="0 0 400 400"
      width="400"
      height="400"
      fill="none"
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <pattern id="legal-floor-pat" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 0 20 L 20 0" stroke="rgba(24,23,26,0.06)" strokeWidth="0.5" />
        </pattern>
        <linearGradient id="legal-lamp-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={BRASS} stopOpacity="0.5" />
          <stop offset="100%" stopColor={BRASS} stopOpacity="0" />
        </linearGradient>
        <radialGradient id="legal-warm-halo" cx="50%" cy="35%" r="50%">
          <stop offset="0%" stopColor={BRASS} stopOpacity="0.16" />
          <stop offset="100%" stopColor={BRASS} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Canvas */}
      <rect x="0" y="0" width="400" height="400" fill="#FCFCFA" />

      {/* Floor */}
      <rect x="0" y="300" width="400" height="100" fill="url(#legal-floor-pat)" />
      <line x1="0" y1="300" x2="400" y2="300" stroke={INK} strokeWidth="0.8" opacity="0.4" />
      <line x1="0" y1="320" x2="400" y2="320" stroke={INK} strokeWidth="0.4" opacity="0.18" />
      <line x1="0" y1="340" x2="400" y2="340" stroke={INK} strokeWidth="0.4" opacity="0.14" />
      <line x1="0" y1="360" x2="400" y2="360" stroke={INK} strokeWidth="0.4" opacity="0.1" />
      <line x1="0" y1="380" x2="400" y2="380" stroke={INK} strokeWidth="0.4" opacity="0.08" />

      {/* Back wall — wainscoting line */}
      <line x1="0" y1="220" x2="400" y2="220" stroke={INK} strokeWidth="0.6" opacity="0.18" />
      <line x1="0" y1="225" x2="400" y2="225" stroke={INK} strokeWidth="0.4" opacity="0.1" />

      {/* Window (left wall) */}
      <rect x="22" y="90" width="76" height="118" stroke={INK} strokeWidth="1.4" fill="#FFFFFF" />
      <rect x="22" y="90" width="76" height="118" stroke={INK} strokeWidth="0.6" fill="none" opacity="0.4" />
      <line x1="60" y1="90" x2="60" y2="208" stroke={INK} strokeWidth="0.9" opacity="0.55" />
      <line x1="22" y1="149" x2="98" y2="149" stroke={INK} strokeWidth="0.9" opacity="0.55" />
      {/* Sunlight rays through window */}
      <path d="M 22 90 L 130 220" stroke={BRASS} strokeWidth="0.5" opacity="0.4" strokeDasharray="2 5" />
      <path d="M 50 90 L 158 220" stroke={BRASS} strokeWidth="0.5" opacity="0.35" strokeDasharray="2 5" />
      <path d="M 78 90 L 186 220" stroke={BRASS} strokeWidth="0.5" opacity="0.3" strokeDasharray="2 5" />
      <path d="M 98 100 L 200 220" stroke={BRASS} strokeWidth="0.5" opacity="0.25" strokeDasharray="2 5" />
      {/* Window frame top sill */}
      <rect x="18" y="86" width="84" height="4" fill={INK} opacity="0.7" />
      <rect x="18" y="208" width="84" height="4" fill={INK} opacity="0.7" />

      {/* Bookshelf (back wall) */}
      <rect x="120" y="100" width="160" height="120" stroke={INK} strokeWidth="1.4" fill="#FAFAF8" />
      {/* Shelf rails */}
      <line x1="120" y1="130" x2="280" y2="130" stroke={INK} strokeWidth="0.8" opacity="0.55" />
      <line x1="120" y1="160" x2="280" y2="160" stroke={INK} strokeWidth="0.8" opacity="0.55" />
      <line x1="120" y1="190" x2="280" y2="190" stroke={INK} strokeWidth="0.8" opacity="0.55" />
      {/* Book spines — top shelf */}
      <rect x="124" y="104" width="10" height="24" fill={INK} opacity="0.85" />
      <rect x="136" y="106" width="8" height="22" fill={INK} opacity="0.65" />
      <rect x="146" y="104" width="12" height="24" fill={INK} opacity="0.78" />
      <rect x="160" y="108" width="9" height="20" fill={INK} opacity="0.55" />
      <rect x="171" y="104" width="14" height="24" fill={BRASS} />
      <text x="178" y="120" fontSize="6" fill="#FFE817" textAnchor="middle" fontFamily="Geist, sans-serif" fontWeight="700" letterSpacing="0.1em">LEX</text>
      <rect x="187" y="106" width="10" height="22" fill={INK} opacity="0.7" />
      <rect x="199" y="104" width="8" height="24" fill={INK} opacity="0.6" />
      <rect x="209" y="106" width="12" height="22" fill={INK} opacity="0.78" />
      <rect x="223" y="104" width="10" height="24" fill={INK} opacity="0.65" />
      <rect x="235" y="108" width="8" height="20" fill={INK} opacity="0.55" />
      <rect x="245" y="104" width="11" height="24" fill={INK} opacity="0.7" />
      <rect x="258" y="106" width="9" height="22" fill={INK} opacity="0.6" />
      <rect x="269" y="104" width="8" height="24" fill={INK} opacity="0.5" />
      {/* Middle shelf */}
      <rect x="124" y="134" width="10" height="24" fill={INK} opacity="0.55" />
      <rect x="136" y="136" width="14" height="22" fill={INK} opacity="0.78" />
      <rect x="152" y="134" width="8" height="24" fill={INK} opacity="0.6" />
      <rect x="162" y="136" width="12" height="22" fill={INK} opacity="0.7" />
      <rect x="176" y="134" width="9" height="24" fill={INK} opacity="0.5" />
      <rect x="187" y="136" width="11" height="22" fill={INK} opacity="0.65" />
      <rect x="200" y="134" width="8" height="24" fill={INK} opacity="0.55" />
      <rect x="210" y="136" width="14" height="22" fill={INK} opacity="0.78" />
      <rect x="226" y="134" width="10" height="24" fill={INK} opacity="0.6" />
      <rect x="238" y="136" width="9" height="22" fill={INK} opacity="0.5" />
      <rect x="249" y="134" width="11" height="24" fill={INK} opacity="0.7" />
      <rect x="262" y="136" width="8" height="22" fill={INK} opacity="0.55" />
      <rect x="272" y="134" width="6" height="24" fill={INK} opacity="0.45" />
      {/* Bottom shelf with a stack lying down */}
      <rect x="124" y="164" width="10" height="24" fill={INK} opacity="0.6" />
      <rect x="136" y="166" width="12" height="22" fill={INK} opacity="0.7" />
      <rect x="150" y="164" width="9" height="24" fill={INK} opacity="0.5" />
      <rect x="161" y="166" width="14" height="22" fill={INK} opacity="0.78" />
      <rect x="177" y="164" width="10" height="24" fill={INK} opacity="0.55" />
      <rect x="189" y="170" width="36" height="3" fill={INK} opacity="0.7" />
      <rect x="189" y="174" width="36" height="3" fill={INK} opacity="0.6" />
      <rect x="189" y="178" width="36" height="3" fill={INK} opacity="0.5" />
      <rect x="189" y="182" width="36" height="3" fill={INK} opacity="0.4" />
      <rect x="228" y="164" width="10" height="24" fill={INK} opacity="0.65" />
      <rect x="240" y="166" width="8" height="22" fill={INK} opacity="0.5" />
      <rect x="250" y="164" width="12" height="24" fill={INK} opacity="0.7" />
      <rect x="264" y="166" width="14" height="22" fill={INK} opacity="0.55" />
      {/* Lower section */}
      <rect x="124" y="194" width="14" height="24" fill={INK} opacity="0.65" />
      <rect x="140" y="196" width="10" height="22" fill={INK} opacity="0.55" />
      <rect x="152" y="194" width="12" height="24" fill={INK} opacity="0.75" />
      <rect x="166" y="196" width="9" height="22" fill={INK} opacity="0.5" />
      <rect x="177" y="194" width="11" height="24" fill={INK} opacity="0.6" />
      <rect x="190" y="196" width="14" height="22" fill={INK} opacity="0.78" />
      <rect x="206" y="194" width="8" height="24" fill={INK} opacity="0.55" />
      <rect x="216" y="196" width="12" height="22" fill={INK} opacity="0.7" />
      <rect x="230" y="194" width="10" height="24" fill={INK} opacity="0.5" />
      <rect x="242" y="196" width="14" height="22" fill={INK} opacity="0.7" />
      <rect x="258" y="194" width="9" height="24" fill={INK} opacity="0.55" />
      <rect x="269" y="196" width="8" height="22" fill={INK} opacity="0.45" />

      {/* Framed law degree on right wall */}
      <rect x="302" y="100" width="74" height="80" stroke={INK} strokeWidth="1.4" fill="#FFFFFF" />
      <rect x="306" y="104" width="66" height="72" stroke={INK} strokeWidth="0.5" fill="#FAFAF8" opacity="0.7" />
      <rect x="316" y="110" width="46" height="2" fill={INK} opacity="0.55" />
      <rect x="316" y="116" width="38" height="1.4" fill={INK} opacity="0.4" />
      <rect x="316" y="124" width="46" height="1.4" fill={INK} opacity="0.4" />
      <rect x="316" y="128" width="42" height="1.4" fill={INK} opacity="0.35" />
      <rect x="316" y="132" width="46" height="1.4" fill={INK} opacity="0.35" />
      <rect x="316" y="136" width="40" height="1.4" fill={INK} opacity="0.3" />
      <circle cx="339" cy="158" r="6" fill="none" stroke={BRASS} strokeWidth="0.8" />
      <text x="339" y="161" fontSize="7" fontWeight="700" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif">JD</text>

      {/* Desk */}
      <rect x="60" y="244" width="280" height="14" fill={INK} />
      <rect x="60" y="258" width="280" height="3" fill={INK} opacity="0.65" />
      <rect x="80" y="261" width="10" height="42" fill={INK} opacity="0.85" />
      <rect x="310" y="261" width="10" height="42" fill={INK} opacity="0.85" />
      {/* Drawer detail */}
      <rect x="100" y="263" width="80" height="36" stroke={INK} strokeWidth="0.6" fill="none" opacity="0.4" />
      <line x1="100" y1="281" x2="180" y2="281" stroke={INK} strokeWidth="0.5" opacity="0.4" />
      <circle cx="140" cy="272" r="1" fill={INK} opacity="0.55" />
      <circle cx="140" cy="290" r="1" fill={INK} opacity="0.55" />
      <rect x="220" y="263" width="80" height="36" stroke={INK} strokeWidth="0.6" fill="none" opacity="0.4" />
      <line x1="220" y1="281" x2="300" y2="281" stroke={INK} strokeWidth="0.5" opacity="0.4" />
      <circle cx="260" cy="272" r="1" fill={INK} opacity="0.55" />
      <circle cx="260" cy="290" r="1" fill={INK} opacity="0.55" />

      {/* Halo from lamp */}
      <circle cx="320" cy="240" r="50" fill="url(#legal-warm-halo)" />

      {/* Brass desk lamp (the focal beat) */}
      <rect x="316" y="228" width="22" height="3" rx="1" fill={INK} />
      <rect x="324" y="200" width="6" height="28" fill={BRASS} />
      <path d="M 314 192 L 340 192 L 332 202 L 322 202 Z" fill={BRASS} />
      <circle cx="327" cy="206" r="3" fill="#FFE817" />
      <circle cx="327" cy="206" r="6" fill="url(#legal-lamp-glow)" />

      {/* Stack of papers */}
      <g transform="translate(100, 226)">
        <rect width="46" height="3" fill="#FFFFFF" stroke={INK} strokeWidth="0.6" />
        <rect y="2" width="44" height="3" fill="#FFFFFF" stroke={INK} strokeWidth="0.6" transform="translate(1 1)" />
        <rect y="4" width="44" height="3" fill="#FFFFFF" stroke={INK} strokeWidth="0.6" transform="translate(2 2)" />
        <rect y="7" width="44" height="9" rx="0.5" fill="#FFFFFF" stroke={INK} strokeWidth="0.7" />
        <rect x="3" y="10" width="22" height="0.8" fill={INK} opacity="0.55" />
        <rect x="3" y="12" width="32" height="0.8" fill={INK} opacity="0.4" />
        <rect x="3" y="14" width="20" height="0.8" fill={INK} opacity="0.3" />
      </g>

      {/* Pen */}
      <g transform="translate(158, 240)">
        <rect x="-1" y="0" width="2" height="14" fill={INK} />
        <polygon points="-1,14 1,14 0,16" fill={INK} />
        <rect x="-1.4" y="0" width="2.8" height="3" fill={BRASS} />
      </g>

      {/* Stamp */}
      <g transform="translate(170, 232)">
        <rect width="14" height="4" rx="1" fill={INK} />
        <rect x="3" y="-6" width="8" height="6" fill={INK} opacity="0.85" />
        <rect x="4.5" y="-9" width="5" height="3" fill={INK} opacity="0.6" />
      </g>

      {/* Scales-of-justice figurine on desk */}
      <g transform="translate(220, 224)">
        <rect x="0" y="20" width="6" height="2" fill={INK} />
        <line x1="3" y1="20" x2="3" y2="6" stroke={INK} strokeWidth="1.2" />
        <line x1="-7" y1="6" x2="13" y2="6" stroke={BRASS} strokeWidth="1.4" strokeLinecap="round" />
        <path d="M -10 6 L -7 6 L -8.5 12 L -11.5 12 Z" stroke={INK} strokeWidth="0.7" fill="#FFFFFF" />
        <path d="M 10 6 L 13 6 L 11.5 12 L 14.5 12 Z" stroke={INK} strokeWidth="0.7" fill="#FFFFFF" />
        <circle cx="3" cy="6" r="1.4" fill={BRASS} />
      </g>

      {/* Laptop with POSITION #1 on screen */}
      <g transform="translate(248, 220)">
        <path d="M 0 28 L 56 28 L 60 32 L -4 32 Z" stroke={INK} strokeWidth="1" fill={INK} />
        <rect width="56" height="28" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="1.4" />
        <rect x="2" y="2" width="52" height="24" rx="1" fill="#FAFAF8" stroke={INK} strokeWidth="0.4" opacity="0.7" />
        <rect x="6" y="6" width="14" height="1.5" rx="0.6" fill={INK} opacity="0.55" />
        <rect x="6" y="9.5" width="20" height="1.4" rx="0.6" fill={INK} opacity="0.4" />
        <rect x="6" y="13" width="44" height="2.4" rx="1" fill={INK} />
        <rect x="6" y="17.5" width="44" height="2" rx="0.6" fill={BRASS} opacity="0.25" />
        <rect x="8" y="18.3" width="14" height="1" rx="0.5" fill={BRASS} />
        <text x="29" y="22.5" fontSize="3" fontWeight="700" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="0.2em">POSITION #1</text>
        <circle cx="28" cy="-1" r="0.5" fill={INK} opacity="0.45" />
      </g>

      {/* Sticky note */}
      <g transform="translate(186, 234)">
        <rect width="18" height="18" fill="#FFE817" stroke={INK} strokeWidth="0.4" />
        <rect x="2" y="3" width="14" height="0.8" fill={INK} opacity="0.55" />
        <rect x="2" y="5" width="12" height="0.8" fill={INK} opacity="0.45" />
        <rect x="2" y="7" width="14" height="0.8" fill={INK} opacity="0.35" />
        <rect x="2" y="9" width="10" height="0.8" fill={INK} opacity="0.35" />
      </g>

      {/* Coffee cup */}
      <g transform="translate(310, 230)">
        <rect x="0" y="0" width="14" height="14" rx="1" fill="#FFFFFF" stroke={INK} strokeWidth="0.9" />
        <path d="M 14 3 Q 18 3 18 7 Q 18 11 14 11" stroke={INK} strokeWidth="0.7" fill="none" />
        <ellipse cx="7" cy="2" rx="6" ry="1" fill={INK} opacity="0.7" />
        <path d="M 4 -1 Q 5 -3 6 -1" stroke={INK} strokeWidth="0.5" fill="none" opacity="0.55" />
        <path d="M 8 -1 Q 9 -3 10 -1" stroke={INK} strokeWidth="0.5" fill="none" opacity="0.55" />
      </g>

      {/* Brass desk corner accent */}
      <line x1="60" y1="244" x2="100" y2="244" stroke={BRASS} strokeWidth="2" opacity="0.85" />

      {/* Chair (back, behind desk) */}
      <g transform="translate(180, 226)">
        <rect x="0" y="0" width="40" height="8" rx="2" fill={INK} opacity="0.45" />
        <rect x="2" y="8" width="36" height="2" fill={INK} opacity="0.55" />
        <line x1="20" y1="10" x2="20" y2="14" stroke={INK} strokeWidth="0.8" opacity="0.55" />
      </g>

      {/* Floor metric labels */}
      <text x="20" y="396" fontSize="9" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="0.32em" fontWeight="700">
        TAMPA · ATLANTA · DETROIT
      </text>

      {/* Top corner editorial marks */}
      <g opacity="0.55">
        <path d="M 12 12 L 22 12 L 22 22" stroke={BRASS} strokeWidth="0.8" fill="none" strokeLinecap="round" />
        <path d="M 388 12 L 378 12 L 378 22" stroke={BRASS} strokeWidth="0.8" fill="none" strokeLinecap="round" />
        <path d="M 12 388 L 22 388 L 22 378" stroke={BRASS} strokeWidth="0.8" fill="none" strokeLinecap="round" />
        <path d="M 388 388 L 378 388 L 378 378" stroke={BRASS} strokeWidth="0.8" fill="none" strokeLinecap="round" />
      </g>

      {/* Editorial tag in upper-right */}
      <g transform="translate(308, 24)">
        <rect width="64" height="14" rx="2" fill={INK} />
        <circle cx="6" cy="7" r="1.6" fill={BRASS} />
        <text x="14" y="10" fontSize="7" fontWeight="700" fill="#FFE817" fontFamily="Geist, sans-serif" letterSpacing="0.16em">LAW · 01</text>
      </g>

      {/* Specialty tags floating in the back wall */}
      <g transform="translate(30, 240)">
        <rect width="60" height="10" rx="5" fill={INK} fillOpacity="0.06" stroke={INK} strokeWidth="0.4" />
        <text x="30" y="7" fontSize="5.6" fontWeight="700" fill={INK} fillOpacity="0.55" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.16em">PROBATE</text>
      </g>

      {/* Wall clock above bookshelf */}
      <g transform="translate(200, 70)">
        <circle r="14" stroke={INK} strokeWidth="1.4" fill="#FFFFFF" />
        <circle r="11" stroke={INK} strokeWidth="0.5" fill="none" opacity="0.4" />
        <line x1="0" y1="-10" x2="0" y2="-7" stroke={INK} strokeWidth="0.7" />
        <line x1="0" y1="10" x2="0" y2="7" stroke={INK} strokeWidth="0.7" />
        <line x1="-10" y1="0" x2="-7" y2="0" stroke={INK} strokeWidth="0.7" />
        <line x1="10" y1="0" x2="7" y2="0" stroke={INK} strokeWidth="0.7" />
        <line x1="6.4" y1="6.4" x2="4.6" y2="4.6" stroke={INK} strokeWidth="0.4" opacity="0.6" />
        <line x1="-6.4" y1="6.4" x2="-4.6" y2="4.6" stroke={INK} strokeWidth="0.4" opacity="0.6" />
        <line x1="6.4" y1="-6.4" x2="4.6" y2="-4.6" stroke={INK} strokeWidth="0.4" opacity="0.6" />
        <line x1="-6.4" y1="-6.4" x2="-4.6" y2="-4.6" stroke={INK} strokeWidth="0.4" opacity="0.6" />
        <line x1="0" y1="0" x2="0" y2="-7" stroke={INK} strokeWidth="1.1" strokeLinecap="round" />
        <line x1="0" y1="0" x2="5" y2="2" stroke={BRASS} strokeWidth="1.4" strokeLinecap="round" />
        <circle r="1.2" fill={INK} />
      </g>

      {/* Diploma stack on desk side */}
      <g transform="translate(86, 232)">
        <rect width="14" height="2" fill="#FFFFFF" stroke={INK} strokeWidth="0.5" />
        <rect y="2" width="14" height="2" fill="#FFFFFF" stroke={INK} strokeWidth="0.5" />
        <rect y="4" width="14" height="2" fill="#FFFFFF" stroke={INK} strokeWidth="0.5" />
        <rect x="-2" y="-3" width="6" height="2" rx="0.5" fill={BRASS} />
      </g>

      {/* Pencil holder */}
      <g transform="translate(150, 222)">
        <rect width="12" height="14" rx="1" fill="#FAFAF8" stroke={INK} strokeWidth="0.9" />
        <rect x="2" y="-6" width="1.4" height="6" fill={INK} opacity="0.85" />
        <polygon points="2,-6 3.4,-6 2.7,-8" fill={BRASS} />
        <rect x="5" y="-4" width="1.4" height="4" fill={INK} opacity="0.7" />
        <polygon points="5,-4 6.4,-4 5.7,-5.4" fill={INK} opacity="0.85" />
        <rect x="8" y="-5" width="1.4" height="5" fill={INK} opacity="0.75" />
        <polygon points="8,-5 9.4,-5 8.7,-6.6" fill={INK} opacity="0.85" />
        <line x1="0" y1="3" x2="12" y2="3" stroke={INK} strokeWidth="0.4" opacity="0.4" />
      </g>

      {/* Picture frame on shelf */}
      <g transform="translate(286, 188)">
        <rect width="12" height="14" stroke={INK} strokeWidth="0.7" fill="#FFFFFF" />
        <rect x="1.4" y="1.4" width="9.2" height="11.2" fill={INK} opacity="0.16" />
        <circle cx="6" cy="6" r="2" fill={INK} opacity="0.55" />
        <path d="M 2 11 Q 6 7 10 11" stroke={INK} strokeWidth="0.5" fill={INK} fillOpacity="0.45" />
      </g>

      {/* Gavel under stamp */}
      <g transform="translate(174, 248)">
        <rect width="14" height="3" rx="0.5" fill={INK} />
        <rect x="2" y="0.5" width="10" height="2" rx="0.5" fill={BRASS} opacity="0.55" />
        <rect x="-6" y="1" width="6" height="1" fill={INK} opacity="0.85" />
      </g>

      {/* Floating editorial spec strip */}
      <g transform="translate(20, 56)">
        <line x1="0" y1="0" x2="68" y2="0" stroke={BRASS} strokeWidth="0.5" />
        <text x="0" y="-3" fontSize="5" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="0.18em" fontWeight="700">FIG · LEX · 01</text>
      </g>

      {/* Tiny "by appt only" placard on desk */}
      <g transform="translate(238, 254)">
        <rect width="30" height="6" rx="1" fill={INK} fillOpacity="0.92" />
        <text x="15" y="4.2" fontSize="3.4" fontWeight="700" fill="#FFE817" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.14em">BY APPT</text>
      </g>

      {/* Window blinds line indicator */}
      <g transform="translate(28, 96)" opacity="0.4">
        <line x1="0" y1="0" x2="68" y2="0" stroke={INK} strokeWidth="0.3" />
        <line x1="0" y1="6" x2="68" y2="6" stroke={INK} strokeWidth="0.3" />
        <line x1="0" y1="12" x2="68" y2="12" stroke={INK} strokeWidth="0.3" />
        <line x1="0" y1="20" x2="68" y2="20" stroke={INK} strokeWidth="0.3" />
        <line x1="0" y1="32" x2="68" y2="32" stroke={INK} strokeWidth="0.3" />
        <line x1="0" y1="44" x2="68" y2="44" stroke={INK} strokeWidth="0.3" />
        <line x1="0" y1="56" x2="68" y2="56" stroke={INK} strokeWidth="0.3" />
      </g>

      {/* Carpet runner */}
      <rect x="120" y="300" width="160" height="6" fill={BRASS} opacity="0.16" />
      <line x1="120" y1="300" x2="280" y2="300" stroke={BRASS} strokeWidth="0.4" opacity="0.55" />
      <line x1="120" y1="306" x2="280" y2="306" stroke={BRASS} strokeWidth="0.4" opacity="0.55" />

      {/* Small floating "established" rosette */}
      <g transform="translate(364, 64)">
        <circle r="14" fill="none" stroke={BRASS} strokeWidth="0.7" />
        <circle r="10" fill="none" stroke={BRASS} strokeWidth="0.5" opacity="0.7" />
        <text y="-3" fontSize="4" fontWeight="700" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.2em">EST.</text>
        <text y="5" fontSize="6" fontWeight="700" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif">2002</text>
      </g>

      {/* Floor outlet */}
      <g transform="translate(50, 360)" opacity="0.55">
        <rect width="10" height="6" rx="1" stroke={INK} strokeWidth="0.5" fill="#FFFFFF" />
        <circle cx="3.5" cy="3" r="0.8" fill={INK} />
        <circle cx="6.5" cy="3" r="0.8" fill={INK} />
      </g>

      {/* Wastebasket */}
      <g transform="translate(330, 270)">
        <path d="M 0 36 L 4 4 L 20 4 L 24 36 Z" stroke={INK} strokeWidth="1" fill="#FAFAF8" />
        <ellipse cx="12" cy="4" rx="10" ry="1.4" fill={INK} opacity="0.45" />
        <line x1="6" y1="14" x2="18" y2="14" stroke={INK} strokeWidth="0.3" opacity="0.3" />
        <line x1="7" y1="24" x2="17" y2="24" stroke={INK} strokeWidth="0.3" opacity="0.3" />
      </g>

      {/* Bookmark hanging from book */}
      <g transform="translate(178, 124)">
        <rect width="2" height="14" fill={BRASS} />
      </g>

      {/* Small motto card lower-left of bookshelf */}
      <g transform="translate(124, 200)" opacity="0.85">
        <rect width="20" height="6" rx="1" fill="#FFFFFF" stroke={INK} strokeWidth="0.4" />
        <text x="10" y="4" fontSize="3.4" fontWeight="700" fill={INK} fillOpacity="0.55" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.14em">VOL XIV</text>
      </g>
    </svg>
  );
}

// =====================================================================
// MEDICAL WORLD — stylized modern clinic interior
// =====================================================================

export function MedicalVerticalIllustration() {
  return (
    <svg
      viewBox="0 0 400 400"
      width="400"
      height="400"
      fill="none"
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <pattern id="med-floor-pat" width="24" height="24" patternUnits="userSpaceOnUse">
          <rect width="24" height="24" fill="#FCFCFA" />
          <line x1="0" y1="0" x2="24" y2="0" stroke="rgba(24,23,26,0.08)" strokeWidth="0.5" />
          <line x1="0" y1="0" x2="0" y2="24" stroke="rgba(24,23,26,0.08)" strokeWidth="0.5" />
        </pattern>
        <radialGradient id="med-monitor-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={BRASS} stopOpacity="0.35" />
          <stop offset="100%" stopColor={BRASS} stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="400" height="400" fill="#FCFCFA" />

      {/* Floor — tiled */}
      <rect x="0" y="290" width="400" height="110" fill="url(#med-floor-pat)" />
      <line x1="0" y1="290" x2="400" y2="290" stroke={INK} strokeWidth="0.8" opacity="0.45" />

      {/* Back wall hairline */}
      <line x1="0" y1="180" x2="400" y2="180" stroke={INK} strokeWidth="0.4" opacity="0.12" />

      {/* Halo behind wall monitor */}
      <circle cx="200" cy="120" r="80" fill="url(#med-monitor-glow)" />

      {/* Wall-mounted monitor (brass — the focal beat) */}
      <g transform="translate(140, 60)">
        <rect width="120" height="78" rx="4" fill="#FFFFFF" stroke={INK} strokeWidth="1.6" />
        <rect x="3" y="3" width="114" height="72" rx="2" fill="#0F0E10" />
        {/* Screen content */}
        <text x="10" y="12" fontSize="5" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="0.18em" fontWeight="700">PATIENT MONITOR</text>
        <circle cx="106" cy="9" r="1.4" fill="#4ADE80">
          <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
        </circle>
        {/* EKG line */}
        <path d="M 10 36 L 26 36 L 32 22 L 38 50 L 44 28 L 50 36 L 70 36 L 76 30 L 82 42 L 88 28 L 94 36 L 114 36" stroke={BRASS} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {/* Vitals readout */}
        <text x="10" y="56" fontSize="3.6" fill="#FFE817" fontFamily="Geist, sans-serif" letterSpacing="0.1em">BPM 68</text>
        <text x="34" y="56" fontSize="3.6" fill="#FFE817" fontFamily="Geist, sans-serif" letterSpacing="0.1em">BP 120/80</text>
        <text x="64" y="56" fontSize="3.6" fill="#FFE817" fontFamily="Geist, sans-serif" letterSpacing="0.1em">SpO2 99</text>
        <text x="90" y="56" fontSize="3.6" fill="#FFE817" fontFamily="Geist, sans-serif" letterSpacing="0.1em">TEMP 98.6</text>
        {/* Bottom bar */}
        <rect x="3" y="65" width="114" height="6" fill={BRASS} />
        <text x="60" y="69.5" fontSize="3.6" fill="#FFFFFF" fontFamily="Geist, sans-serif" textAnchor="middle" letterSpacing="0.14em" fontWeight="700">RYSEN DATA · LIVE</text>
        {/* Webcam dot */}
        <circle cx="60" cy="2" r="0.8" fill={INK} />
      </g>
      <rect x="195" y="138" width="10" height="20" fill={INK} opacity="0.55" />
      <rect x="180" y="156" width="40" height="3" rx="1" fill={INK} opacity="0.65" />

      {/* Anatomical poster (heart simplified) */}
      <g transform="translate(40, 70)">
        <rect width="60" height="80" stroke={INK} strokeWidth="1.4" fill="#FFFFFF" />
        <rect x="3" y="3" width="54" height="60" fill="#FAFAF8" stroke={INK} strokeWidth="0.4" opacity="0.7" />
        {/* Heart silhouette */}
        <path d="M 30 24 Q 22 12 14 18 Q 6 26 14 36 Q 22 46 30 52 Q 38 46 46 36 Q 54 26 46 18 Q 38 12 30 24 Z" stroke={INK} strokeWidth="1.2" fill={INK} fillOpacity="0.06" />
        {/* Aorta arch */}
        <path d="M 28 18 Q 30 8 36 14" stroke={INK} strokeWidth="0.7" fill="none" />
        <path d="M 32 18 Q 36 6 42 12" stroke={INK} strokeWidth="0.7" fill="none" />
        {/* Vessels */}
        <line x1="22" y1="32" x2="14" y2="38" stroke={INK} strokeWidth="0.5" opacity="0.7" />
        <line x1="38" y1="32" x2="46" y2="38" stroke={INK} strokeWidth="0.5" opacity="0.7" />
        <line x1="30" y1="40" x2="30" y2="48" stroke={INK} strokeWidth="0.5" opacity="0.6" />
        <line x1="26" y1="38" x2="22" y2="44" stroke={INK} strokeWidth="0.4" opacity="0.55" />
        <line x1="34" y1="38" x2="38" y2="44" stroke={INK} strokeWidth="0.4" opacity="0.55" />
        {/* Pointer dots */}
        <circle cx="18" cy="18" r="1.2" fill={BRASS} />
        <line x1="20" y1="18" x2="26" y2="22" stroke={BRASS} strokeWidth="0.4" />
        <circle cx="42" cy="22" r="1.2" fill={BRASS} />
        <line x1="40" y1="22" x2="36" y2="22" stroke={BRASS} strokeWidth="0.4" />
        {/* Labels */}
        <rect x="3" y="68" width="54" height="2" fill={INK} opacity="0.4" />
        <rect x="3" y="72" width="40" height="1.4" fill={INK} opacity="0.3" />
        <rect x="3" y="75" width="34" height="1.4" fill={INK} opacity="0.25" />
      </g>

      {/* Cabinet with glass doors (right wall) */}
      <g transform="translate(300, 70)">
        <rect width="74" height="120" stroke={INK} strokeWidth="1.4" fill="#FFFFFF" />
        <rect x="4" y="4" width="32" height="112" rx="2" stroke={INK} strokeWidth="0.7" fill="#FAFAF8" />
        <rect x="38" y="4" width="32" height="112" rx="2" stroke={INK} strokeWidth="0.7" fill="#FAFAF8" />
        {/* Glass diagonal reflections */}
        <line x1="6" y1="6" x2="34" y2="34" stroke={INK} strokeWidth="0.4" opacity="0.16" />
        <line x1="40" y1="6" x2="68" y2="34" stroke={INK} strokeWidth="0.4" opacity="0.16" />
        {/* Items in left cabinet */}
        <rect x="8" y="14" width="24" height="10" rx="1.5" stroke={INK} strokeWidth="0.5" fill="#FFFFFF" />
        <rect x="8" y="14" width="6" height="10" rx="1.5" fill={BRASS} />
        <rect x="11" y="17" width="18" height="1" fill={INK} opacity="0.45" />
        <rect x="11" y="19" width="14" height="1" fill={INK} opacity="0.35" />
        <rect x="8" y="30" width="24" height="8" rx="1.5" stroke={INK} strokeWidth="0.5" fill="#FFFFFF" />
        <rect x="8" y="42" width="24" height="14" rx="1.5" stroke={INK} strokeWidth="0.5" fill="#FAFAF8" />
        <rect x="11" y="46" width="18" height="2" fill={INK} opacity="0.45" />
        <rect x="11" y="50" width="14" height="1.4" fill={INK} opacity="0.35" />
        <rect x="11" y="53" width="16" height="1.4" fill={INK} opacity="0.3" />
        <rect x="8" y="60" width="24" height="20" rx="1.5" stroke={INK} strokeWidth="0.5" fill="#FFFFFF" />
        <circle cx="20" cy="70" r="6" stroke={INK} strokeWidth="0.5" fill="none" />
        <circle cx="20" cy="70" r="3" fill={BRASS} opacity="0.85" />
        <rect x="8" y="84" width="24" height="14" rx="1.5" stroke={INK} strokeWidth="0.5" fill="#FAFAF8" />
        <rect x="11" y="88" width="12" height="1.4" fill={INK} opacity="0.45" />
        <rect x="11" y="91" width="18" height="1.2" fill={INK} opacity="0.35" />
        <rect x="11" y="94" width="14" height="1.2" fill={INK} opacity="0.3" />
        <rect x="8" y="102" width="24" height="10" rx="1.5" fill={BRASS} opacity="0.2" />
        <rect x="11" y="106" width="18" height="1.4" fill={BRASS} opacity="0.85" />
        {/* Items in right cabinet */}
        <rect x="42" y="14" width="24" height="14" rx="1.5" stroke={INK} strokeWidth="0.5" fill="#FFFFFF" />
        <rect x="45" y="18" width="6" height="6" fill={INK} opacity="0.65" />
        <rect x="53" y="18" width="11" height="1.4" fill={INK} opacity="0.5" />
        <rect x="53" y="21" width="9" height="1.4" fill={INK} opacity="0.35" />
        <rect x="53" y="24" width="11" height="1.4" fill={INK} opacity="0.3" />
        <rect x="42" y="32" width="24" height="20" rx="1.5" stroke={INK} strokeWidth="0.5" fill="#FAFAF8" />
        <path d="M 46 42 Q 50 36 54 42 Q 58 48 62 42" stroke={INK} strokeWidth="0.7" fill="none" opacity="0.55" />
        <rect x="46" y="46" width="16" height="1.4" fill={INK} opacity="0.45" />
        <rect x="46" y="49" width="12" height="1.4" fill={INK} opacity="0.3" />
        <rect x="42" y="56" width="24" height="14" rx="1.5" stroke={INK} strokeWidth="0.5" fill="#FFFFFF" />
        <rect x="46" y="60" width="16" height="2" fill={INK} opacity="0.55" />
        <rect x="46" y="64" width="12" height="1.4" fill={INK} opacity="0.4" />
        <rect x="46" y="67" width="14" height="1.4" fill={INK} opacity="0.35" />
        <rect x="42" y="74" width="24" height="14" rx="1.5" stroke={INK} strokeWidth="0.5" fill="#FAFAF8" />
        <circle cx="48" cy="81" r="2.5" stroke={INK} strokeWidth="0.5" fill="none" />
        <rect x="53" y="78" width="11" height="1.4" fill={INK} opacity="0.4" />
        <rect x="53" y="82" width="9" height="1.4" fill={INK} opacity="0.3" />
        <rect x="42" y="92" width="24" height="18" rx="1.5" stroke={INK} strokeWidth="0.5" fill="#FFFFFF" />
        <rect x="46" y="96" width="16" height="2" fill={INK} opacity="0.5" />
        <rect x="46" y="100" width="14" height="1.4" fill={INK} opacity="0.35" />
        <rect x="46" y="103" width="12" height="1.4" fill={INK} opacity="0.3" />
        <rect x="46" y="106" width="14" height="1.4" fill={INK} opacity="0.25" />
        {/* Door handles */}
        <rect x="32" y="58" width="2" height="6" rx="1" fill={INK} opacity="0.75" />
        <rect x="40" y="58" width="2" height="6" rx="1" fill={INK} opacity="0.75" />
      </g>

      {/* Examination chair / bed (center foreground) */}
      <g transform="translate(150, 220)">
        {/* Backrest */}
        <rect x="20" y="0" width="60" height="36" rx="6" fill="#FFFFFF" stroke={INK} strokeWidth="1.4" />
        {/* Seat */}
        <rect x="14" y="36" width="72" height="14" rx="3" fill="#FAFAF8" stroke={INK} strokeWidth="1.4" />
        {/* Legrest extension */}
        <rect x="20" y="50" width="60" height="20" rx="4" fill="#FAFAF8" stroke={INK} strokeWidth="1.4" />
        {/* Paper liner */}
        <line x1="20" y1="4" x2="80" y2="4" stroke={INK} strokeWidth="0.4" opacity="0.5" />
        <line x1="20" y1="8" x2="80" y2="8" stroke={INK} strokeWidth="0.4" opacity="0.35" />
        <line x1="20" y1="40" x2="80" y2="40" stroke={INK} strokeWidth="0.4" opacity="0.5" />
        <line x1="20" y1="44" x2="80" y2="44" stroke={INK} strokeWidth="0.4" opacity="0.35" />
        {/* Pedestal */}
        <rect x="44" y="70" width="12" height="22" fill={INK} opacity="0.85" />
        <rect x="36" y="92" width="28" height="4" rx="1" fill={INK} />
        {/* Side rail */}
        <rect x="80" y="36" width="8" height="22" rx="2" fill={INK} opacity="0.6" />
        <rect x="12" y="36" width="8" height="22" rx="2" fill={INK} opacity="0.6" />
      </g>

      {/* Medical cart (left of chair) */}
      <g transform="translate(58, 250)">
        <rect width="50" height="46" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="1.4" />
        <line x1="0" y1="14" x2="50" y2="14" stroke={INK} strokeWidth="0.5" opacity="0.55" />
        <line x1="0" y1="28" x2="50" y2="28" stroke={INK} strokeWidth="0.5" opacity="0.55" />
        {/* Top tray instruments */}
        <rect x="5" y="3" width="3" height="8" rx="0.5" fill={INK} opacity="0.7" />
        <circle cx="6.5" cy="2" r="1.4" fill={BRASS} />
        <rect x="13" y="3" width="3" height="8" rx="0.5" fill={INK} opacity="0.6" />
        <circle cx="14.5" cy="2" r="1.2" fill={INK} opacity="0.7" />
        <rect x="20" y="5" width="14" height="2.4" rx="0.5" fill={INK} opacity="0.65" />
        <rect x="36" y="3" width="10" height="8" rx="1" stroke={INK} strokeWidth="0.5" fill="#FAFAF8" />
        {/* Mid drawer */}
        <rect x="3" y="17" width="44" height="8" rx="1" stroke={INK} strokeWidth="0.4" fill="none" opacity="0.45" />
        <circle cx="25" cy="21" r="1" fill={INK} opacity="0.65" />
        {/* Bottom shelf */}
        <rect x="6" y="32" width="10" height="10" rx="1" fill={INK} fillOpacity="0.06" stroke={INK} strokeWidth="0.4" />
        <rect x="20" y="32" width="14" height="10" rx="1" fill={INK} fillOpacity="0.06" stroke={INK} strokeWidth="0.4" />
        <rect x="38" y="32" width="10" height="10" rx="1" fill={INK} fillOpacity="0.06" stroke={INK} strokeWidth="0.4" />
        {/* Wheels */}
        <circle cx="6" cy="48" r="3" stroke={INK} strokeWidth="0.8" fill="#FFFFFF" />
        <circle cx="6" cy="48" r="1" fill={INK} />
        <circle cx="44" cy="48" r="3" stroke={INK} strokeWidth="0.8" fill="#FFFFFF" />
        <circle cx="44" cy="48" r="1" fill={INK} />
      </g>

      {/* Plant in corner */}
      <g transform="translate(330, 234)">
        {/* Pot */}
        <path d="M 0 30 L 4 56 L 36 56 L 40 30 Z" stroke={INK} strokeWidth="1.2" fill="#FAFAF8" />
        <ellipse cx="20" cy="30" rx="20" ry="2" fill={INK} opacity="0.45" />
        {/* Leaves */}
        <path d="M 20 28 Q 0 0 8 -8 Q 18 4 20 28" stroke={INK} strokeWidth="0.9" fill={INK} fillOpacity="0.08" />
        <path d="M 20 28 Q 8 4 14 -10 Q 22 0 20 28" stroke={INK} strokeWidth="0.9" fill={INK} fillOpacity="0.1" />
        <path d="M 20 28 Q 24 0 30 -4 Q 26 14 20 28" stroke={INK} strokeWidth="0.9" fill={INK} fillOpacity="0.08" />
        <path d="M 20 28 Q 28 6 36 -2 Q 30 14 20 28" stroke={INK} strokeWidth="0.9" fill={INK} fillOpacity="0.07" />
        <path d="M 20 28 Q 18 6 18 -8 Q 22 0 20 28" stroke={INK} strokeWidth="0.9" fill={INK} fillOpacity="0.08" />
        {/* Veins on leaves */}
        <line x1="10" y1="14" x2="14" y2="20" stroke={INK} strokeWidth="0.4" opacity="0.55" />
        <line x1="14" y1="6" x2="18" y2="18" stroke={INK} strokeWidth="0.4" opacity="0.55" />
        <line x1="26" y1="6" x2="22" y2="18" stroke={INK} strokeWidth="0.4" opacity="0.55" />
      </g>

      {/* Clipboard (front of chair) */}
      <g transform="translate(206, 308)">
        <rect width="28" height="36" rx="1" fill="#FFFFFF" stroke={INK} strokeWidth="1" />
        <rect x="10" y="-3" width="8" height="6" rx="1" fill={INK} />
        <rect x="3" y="6" width="22" height="1.4" fill={INK} opacity="0.7" />
        <rect x="3" y="10" width="18" height="1.2" fill={INK} opacity="0.45" />
        <rect x="3" y="14" width="20" height="1.2" fill={INK} opacity="0.4" />
        <rect x="3" y="18" width="16" height="1.2" fill={INK} opacity="0.35" />
        <rect x="3" y="22" width="22" height="1.2" fill={INK} opacity="0.3" />
        <rect x="3" y="26" width="14" height="1.2" fill={INK} opacity="0.3" />
        <rect x="3" y="30" width="20" height="1.2" fill={INK} opacity="0.3" />
        <circle cx="22" cy="32" r="1.4" fill={BRASS} />
      </g>

      {/* Laptop with patient data */}
      <g transform="translate(248, 308)">
        <path d="M 0 22 L 44 22 L 48 26 L -4 26 Z" stroke={INK} strokeWidth="1" fill={INK} />
        <rect width="44" height="22" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="1.2" />
        <rect x="2" y="2" width="40" height="18" rx="1" fill="#FAFAF8" stroke={INK} strokeWidth="0.4" opacity="0.7" />
        <rect x="5" y="5" width="16" height="1.4" fill={INK} opacity="0.55" />
        <rect x="5" y="8" width="22" height="1.2" fill={INK} opacity="0.35" />
        <rect x="5" y="12" width="34" height="2" rx="0.5" fill={BRASS} opacity="0.2" />
        <rect x="6" y="12.7" width="20" height="0.7" fill={BRASS} />
        <text x="22" y="18" fontSize="2.6" fontWeight="700" fill={BRASS} fontFamily="Geist, sans-serif" textAnchor="middle" letterSpacing="0.18em">PATIENT · 0142</text>
      </g>

      {/* Subtle floor reflections under chair */}
      <ellipse cx="200" cy="320" rx="80" ry="2.5" fill={INK} opacity="0.06" />
      <ellipse cx="84" cy="304" rx="32" ry="1.8" fill={INK} opacity="0.06" />
      <ellipse cx="350" cy="294" rx="20" ry="1.4" fill={INK} opacity="0.06" />

      {/* Floor metric label */}
      <text x="20" y="396" fontSize="9" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="0.32em" fontWeight="700">
        MIAMI · CHICAGO · ATLANTA
      </text>

      {/* Corner reticles */}
      <g opacity="0.55">
        <path d="M 12 12 L 22 12 L 22 22" stroke={BRASS} strokeWidth="0.8" fill="none" strokeLinecap="round" />
        <path d="M 388 12 L 378 12 L 378 22" stroke={BRASS} strokeWidth="0.8" fill="none" strokeLinecap="round" />
        <path d="M 12 388 L 22 388 L 22 378" stroke={BRASS} strokeWidth="0.8" fill="none" strokeLinecap="round" />
        <path d="M 388 388 L 378 388 L 378 378" stroke={BRASS} strokeWidth="0.8" fill="none" strokeLinecap="round" />
      </g>

      {/* Editorial tag */}
      <g transform="translate(308, 24)">
        <rect width="64" height="14" rx="2" fill={INK} />
        <circle cx="6" cy="7" r="1.6" fill={BRASS} />
        <text x="14" y="10" fontSize="7" fontWeight="700" fill="#FFE817" fontFamily="Geist, sans-serif" letterSpacing="0.16em">MED · 02</text>
      </g>

      {/* Specialty tag */}
      <g transform="translate(30, 280)">
        <rect width="74" height="10" rx="5" fill={INK} fillOpacity="0.06" stroke={INK} strokeWidth="0.4" />
        <text x="37" y="7" fontSize="5.6" fontWeight="700" fill={INK} fillOpacity="0.55" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.16em">DERMATOLOGY</text>
      </g>

      {/* Ceiling lights */}
      <g opacity="0.65">
        <rect x="80" y="18" width="60" height="6" rx="3" fill="#FFFFFF" stroke={INK} strokeWidth="0.8" />
        <rect x="84" y="20" width="52" height="2" fill="#FFE817" opacity="0.6" />
        <rect x="260" y="18" width="60" height="6" rx="3" fill="#FFFFFF" stroke={INK} strokeWidth="0.8" />
        <rect x="264" y="20" width="52" height="2" fill="#FFE817" opacity="0.6" />
      </g>

      {/* Light cones */}
      <path d="M 110 24 L 80 80 L 140 80 Z" fill={BRASS} opacity="0.04" />
      <path d="M 290 24 L 260 80 L 320 80 Z" fill={BRASS} opacity="0.04" />

      {/* Hand sanitizer dispenser on wall */}
      <g transform="translate(112, 196)">
        <rect width="14" height="22" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="0.9" />
        <rect x="2" y="3" width="10" height="9" rx="1" fill={BRASS} opacity="0.32" />
        <rect x="2" y="3" width="10" height="6" rx="1" fill={BRASS} />
        <rect x="3" y="14" width="8" height="3" rx="0.5" fill={INK} opacity="0.65" />
        <rect x="5" y="17" width="4" height="3" fill={INK} opacity="0.85" />
        <text x="7" y="-2" fontSize="2.6" fill={INK} opacity="0.6" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.14em">SAN</text>
      </g>

      {/* Wall calendar */}
      <g transform="translate(126, 60)">
        <rect width="32" height="36" rx="1" fill="#FFFFFF" stroke={INK} strokeWidth="1" />
        <rect width="32" height="8" fill={INK} />
        <text x="16" y="6" fontSize="4" fill="#FFE817" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.2em" fontWeight="700">MAY 2026</text>
        {/* Grid */}
        {[0, 1, 2, 3, 4].map((row) => (
          <g key={row}>
            {[0, 1, 2, 3, 4, 5, 6].map((col) => (
              <rect
                key={col}
                x={1 + col * 4.4}
                y={10 + row * 5}
                width="4"
                height="4.6"
                stroke={INK}
                strokeWidth="0.2"
                fill="none"
                opacity="0.32"
              />
            ))}
          </g>
        ))}
        <circle cx="11.4" cy="22" r="1.6" fill={BRASS} />
        <circle cx="20.2" cy="27" r="1.6" fill={BRASS} opacity="0.6" />
      </g>

      {/* Hand-washing sink (right side) */}
      <g transform="translate(46, 230)">
        <rect width="36" height="22" rx="3" fill="#FFFFFF" stroke={INK} strokeWidth="1.2" />
        <rect x="2" y="2" width="32" height="14" rx="2" fill={INK} fillOpacity="0.06" stroke={INK} strokeWidth="0.5" />
        <line x1="18" y1="2" x2="18" y2="-4" stroke={INK} strokeWidth="1.4" />
        <rect x="14" y="-7" width="8" height="3" rx="1" fill={INK} opacity="0.85" />
        <circle cx="18" cy="14" r="1" fill={INK} opacity="0.55" />
      </g>

      {/* Bandage box on top of cabinet */}
      <g transform="translate(312, 50)">
        <rect width="22" height="14" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="0.9" />
        <circle cx="11" cy="7" r="3" fill={BRASS} opacity="0.85" />
        <rect x="9" y="6" width="4" height="2" fill="#FFFFFF" />
        <rect x="10" y="5" width="2" height="4" fill="#FFFFFF" />
        <text x="11" y="13" fontSize="2.6" fill={INK} opacity="0.55" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.14em">+++</text>
      </g>

      {/* Wheel reflection on floor */}
      <ellipse cx="62" cy="304" rx="6" ry="1" fill={INK} opacity="0.16" />
      <ellipse cx="100" cy="304" rx="6" ry="1" fill={INK} opacity="0.16" />

      {/* Wall sign — appointment hours */}
      <g transform="translate(286, 200)">
        <rect width="50" height="16" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="0.9" />
        <rect width="50" height="4" fill={BRASS} />
        <text x="25" y="3" fontSize="2.8" fill="#FFFFFF" fontFamily="Geist, sans-serif" letterSpacing="0.16em" textAnchor="middle" fontWeight="700">CLINIC HOURS</text>
        <text x="3" y="9" fontSize="2.8" fill={INK} fontFamily="Geist, sans-serif" letterSpacing="0.04em">MON–FRI</text>
        <text x="47" y="9" fontSize="2.8" fontWeight="700" fill={INK} textAnchor="end" fontFamily="Geist, sans-serif">8 AM–6 PM</text>
        <text x="3" y="13" fontSize="2.8" fill={INK} fontFamily="Geist, sans-serif" letterSpacing="0.04em">SAT</text>
        <text x="47" y="13" fontSize="2.8" fontWeight="700" fill={INK} textAnchor="end" fontFamily="Geist, sans-serif">BY APPT.</text>
      </g>

      {/* Floor power outlet */}
      <g transform="translate(110, 360)" opacity="0.55">
        <rect width="8" height="6" rx="1" stroke={INK} strokeWidth="0.5" fill="#FFFFFF" />
        <circle cx="2.8" cy="3" r="0.6" fill={INK} />
        <circle cx="5.2" cy="3" r="0.6" fill={INK} />
      </g>

      {/* Trash receptacle (left of plant) */}
      <g transform="translate(296, 280)">
        <path d="M 0 30 L 4 4 L 22 4 L 26 30 Z" stroke={INK} strokeWidth="1" fill="#FAFAF8" />
        <ellipse cx="13" cy="4" rx="11" ry="1.4" fill={INK} opacity="0.45" />
        <line x1="6" y1="14" x2="20" y2="14" stroke={INK} strokeWidth="0.3" opacity="0.3" />
        <line x1="7" y1="22" x2="19" y2="22" stroke={INK} strokeWidth="0.3" opacity="0.3" />
        <path d="M 7 1 L 19 1" stroke={BRASS} strokeWidth="0.8" />
      </g>

      {/* Lab coat hung on hook */}
      <g transform="translate(108, 196)" opacity="0.85">
        <rect x="-4" y="-2" width="2" height="2" fill={INK} opacity="0.6" />
        <path d="M 0 0 L 4 6 L 4 38 L -4 38 L -4 6 Z" stroke={INK} strokeWidth="1" fill="#FFFFFF" />
        <line x1="0" y1="2" x2="0" y2="36" stroke={INK} strokeWidth="0.4" opacity="0.5" />
        <rect x="-3" y="12" width="2" height="4" fill={INK} opacity="0.4" />
        <rect x="1" y="12" width="2" height="4" fill={INK} opacity="0.4" />
      </g>

      {/* Floating QR badge for check-in */}
      <g transform="translate(110, 326)" opacity="0.9">
        <rect width="22" height="22" rx="1" fill="#FFFFFF" stroke={INK} strokeWidth="0.6" />
        {/* Mock QR pattern */}
        <rect x="2" y="2" width="6" height="6" fill={INK} />
        <rect x="14" y="2" width="6" height="6" fill={INK} />
        <rect x="2" y="14" width="6" height="6" fill={INK} />
        <rect x="10" y="2" width="2" height="2" fill={INK} />
        <rect x="10" y="6" width="2" height="2" fill={INK} />
        <rect x="6" y="10" width="2" height="2" fill={INK} />
        <rect x="14" y="10" width="2" height="2" fill={INK} />
        <rect x="18" y="14" width="2" height="2" fill={INK} />
        <rect x="14" y="18" width="2" height="2" fill={INK} />
        <text x="11" y="-2" fontSize="2.6" fontWeight="700" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.18em">CHECK-IN</text>
      </g>

      {/* Editorial spec strip top-left */}
      <g transform="translate(20, 56)">
        <line x1="0" y1="0" x2="68" y2="0" stroke={BRASS} strokeWidth="0.5" />
        <text x="0" y="-3" fontSize="5" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="0.18em" fontWeight="700">FIG · MED · 02</text>
      </g>

      {/* HIPAA compliance ribbon */}
      <g transform="translate(238, 326)" opacity="0.85">
        <rect width="84" height="14" rx="2" fill={INK} />
        <circle cx="8" cy="7" r="2.4" fill={BRASS} />
        <path d="M 6.5 7 L 7.5 8 L 9.5 6" stroke="#FFFFFF" strokeWidth="0.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="48" y="10" fontSize="4.4" fontWeight="700" fill="#FFE817" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.16em">HIPAA · COMPLIANT</text>
      </g>
    </svg>
  );
}

// =====================================================================
// Backward-compat exports — earlier sessions referenced the older
// names. Re-export the world illustrations under the legacy names so
// nothing currently importing them breaks.
// =====================================================================

export const LegalWorldIllustration = LegalVerticalIllustration;
export const MedicalWorldIllustration = MedicalVerticalIllustration;
