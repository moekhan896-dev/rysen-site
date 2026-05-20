// Session 39 — Outcome illustrations.
// Five hand-coded 200x200 line-art SVGs that narrate the funnel from
// search to revenue. Each is intentionally dense: many small marks,
// reticles, gridlines, annotations, and a single brass accent moment
// per scene. Style: 1.5px stroke, ink on canvas, brass for emphasis.
//
// Composition rules:
//   - Single brass accent per scene (no chromatic noise)
//   - Corner reticles on every illustration for editorial framing
//   - Annotations use Geist Sans with wide letterspacing for the
//     "technical print" feel — never serif, never italic
//   - Animations gate on prefers-reduced-motion via global CSS
//   - All glyphs are inline SVG; no icon libraries; no external assets
//
// Why so dense: at small sizes (the OutcomeFlow grid renders them at
// roughly 120-160px tall) only ~30% of detail registers, but the dense
// scaffold reads as "instrument panel" rather than illustration. At
// any scale the eye still gets the silhouette + brass focal point.

const INK = "#18171A";
const BRASS = "#A88B47";

function CornerBracket({ x, y, flipX = false, flipY = false }: { x: number; y: number; flipX?: boolean; flipY?: boolean }) {
  const sx = flipX ? -1 : 1;
  const sy = flipY ? -1 : 1;
  return (
    <g transform={`translate(${x},${y}) scale(${sx},${sy})`}>
      <path d="M 0 8 L 0 0 L 8 0" stroke={BRASS} strokeWidth="1" fill="none" opacity="0.55" strokeLinecap="round" />
    </g>
  );
}

function CrosshairTick({ x, y, size = 4 }: { x: number; y: number; size?: number }) {
  return (
    <g opacity="0.35">
      <line x1={x - size} y1={y} x2={x + size} y2={y} stroke={INK} strokeWidth="0.6" />
      <line x1={x} y1={y - size} x2={x} y2={y + size} stroke={INK} strokeWidth="0.6" />
    </g>
  );
}

// =====================================================================
// 1) SEARCH HAPPENS
// A laptop on a desk. Screen displays a Google-like search bar mid-query.
// Around the laptop: ambient cursor blinks, soft grid, query suggestions,
// a hand silhouette implied by a single brass accent on the spacebar.
// =====================================================================

export function SearchHappensIllustration() {
  return (
    <svg viewBox="0 0 200 200" width="200" height="200" fill="none" aria-hidden="true" role="presentation">
      <defs>
        <pattern id="oi-search-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.7" fill="rgba(24,23,26,0.06)" />
        </pattern>
        <linearGradient id="oi-search-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#FAFAFA" />
        </linearGradient>
      </defs>

      {/* Ambient grid */}
      <rect x="0" y="0" width="200" height="200" fill="url(#oi-search-grid)" />

      {/* Desk plane */}
      <line x1="20" y1="158" x2="180" y2="158" stroke={INK} strokeWidth="0.8" opacity="0.25" />
      <line x1="14" y1="162" x2="186" y2="162" stroke={INK} strokeWidth="0.6" opacity="0.18" />

      {/* Laptop base */}
      <path d="M 36 156 L 164 156 L 172 168 L 28 168 Z" stroke={INK} strokeWidth="1.5" fill="#FFFFFF" strokeLinejoin="round" />
      <path d="M 36 156 L 164 156" stroke={INK} strokeWidth="1.2" />
      {/* Trackpad notch */}
      <rect x="92" y="160" width="16" height="2" rx="1" fill={INK} opacity="0.3" />

      {/* Laptop screen */}
      <rect x="42" y="48" width="116" height="110" rx="4" stroke={INK} strokeWidth="1.5" fill="url(#oi-search-screen)" />
      {/* Screen bezel inner */}
      <rect x="46" y="52" width="108" height="102" rx="2" stroke={INK} strokeWidth="0.6" opacity="0.2" fill="none" />
      {/* Webcam dot */}
      <circle cx="100" cy="51" r="0.8" fill={INK} opacity="0.45" />

      {/* Browser chrome bar */}
      <rect x="46" y="58" width="108" height="10" fill="#F1F3F4" />
      <circle cx="51" cy="63" r="1.2" fill="#FF5F57" />
      <circle cx="55" cy="63" r="1.2" fill="#FEBC2E" />
      <circle cx="59" cy="63" r="1.2" fill="#28C840" />
      {/* URL pill */}
      <rect x="68" y="60" width="78" height="6" rx="3" fill="#FFFFFF" stroke={INK} strokeWidth="0.4" opacity="0.7" />
      <rect x="71" y="62.5" width="4" height="1.2" rx="0.5" fill={INK} opacity="0.45" />
      <rect x="77" y="62.5" width="30" height="1.2" rx="0.5" fill={INK} opacity="0.35" />

      {/* Google-style header */}
      <g transform="translate(70, 78)">
        <circle cx="0" cy="0" r="2" fill="#4285F4" />
        <circle cx="4" cy="0" r="2" fill="#EA4335" />
        <circle cx="8" cy="0" r="2" fill="#FBBC05" />
        <circle cx="12" cy="0" r="2" fill="#4285F4" />
        <circle cx="16" cy="0" r="2" fill="#34A853" />
        <circle cx="20" cy="0" r="2" fill="#EA4335" />
      </g>

      {/* Search bar on screen */}
      <rect x="56" y="88" width="88" height="14" rx="7" stroke={INK} strokeWidth="1" fill="#FFFFFF" />
      {/* Magnifying glass */}
      <circle cx="62" cy="95" r="2.4" stroke={INK} strokeWidth="1" fill="none" />
      <line x1="64" y1="97" x2="66" y2="99" stroke={INK} strokeWidth="1" strokeLinecap="round" />
      {/* Query text */}
      <rect x="70" y="93" width="42" height="1.6" rx="0.8" fill={INK} opacity="0.85" />
      <rect x="70" y="96.5" width="32" height="1.2" rx="0.6" fill={INK} opacity="0.5" />
      {/* Blinking cursor */}
      <rect x="114" y="92" width="1" height="6" fill={BRASS}>
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
      </rect>
      {/* Mic + camera icons in search bar */}
      <rect x="124" y="93" width="2" height="4" rx="1" fill={INK} opacity="0.35" />
      <rect x="130" y="93" width="4" height="3" rx="0.5" stroke={INK} strokeWidth="0.6" opacity="0.35" fill="none" />
      <circle cx="132" cy="94.5" r="0.6" fill={INK} opacity="0.35" />
      <circle cx="138" cy="95" r="1" stroke={INK} strokeWidth="0.5" opacity="0.3" fill="none" />

      {/* Autocomplete suggestions */}
      <rect x="56" y="106" width="88" height="6" rx="0.5" fill="#F9FAFB" stroke={INK} strokeWidth="0.3" opacity="0.5" />
      <circle cx="61" cy="109" r="1.4" stroke={INK} strokeWidth="0.5" opacity="0.4" fill="none" />
      <rect x="65" y="108.5" width="44" height="1.2" rx="0.6" fill={INK} opacity="0.4" />
      <rect x="56" y="114" width="88" height="6" rx="0.5" fill="#F9FAFB" stroke={INK} strokeWidth="0.3" opacity="0.4" />
      <circle cx="61" cy="117" r="1.4" stroke={INK} strokeWidth="0.5" opacity="0.35" fill="none" />
      <rect x="65" y="116.5" width="36" height="1.2" rx="0.6" fill={INK} opacity="0.32" />
      <rect x="56" y="122" width="88" height="6" rx="0.5" fill="#F9FAFB" stroke={INK} strokeWidth="0.3" opacity="0.3" />
      <circle cx="61" cy="125" r="1.4" stroke={INK} strokeWidth="0.5" opacity="0.3" fill="none" />
      <rect x="65" y="124.5" width="50" height="1.2" rx="0.6" fill={INK} opacity="0.28" />

      {/* Two buttons under search */}
      <rect x="70" y="134" width="30" height="6" rx="1" stroke={INK} strokeWidth="0.5" fill="#F9FAFB" opacity="0.7" />
      <rect x="74" y="136.5" width="22" height="1.2" rx="0.6" fill={INK} opacity="0.4" />
      <rect x="104" y="134" width="30" height="6" rx="1" stroke={INK} strokeWidth="0.5" fill="#F9FAFB" opacity="0.7" />
      <rect x="108" y="136.5" width="22" height="1.2" rx="0.6" fill={INK} opacity="0.4" />

      {/* Floating query bubble (anticipating result) */}
      <g transform="translate(160, 78)">
        <rect x="0" y="0" width="32" height="16" rx="3" fill="#FFFFFF" stroke={BRASS} strokeWidth="0.7" />
        <rect x="3" y="3" width="20" height="1.4" rx="0.7" fill={INK} opacity="0.6" />
        <rect x="3" y="6.5" width="14" height="1.1" rx="0.55" fill={INK} opacity="0.4" />
        <rect x="3" y="9.5" width="18" height="1.1" rx="0.55" fill={INK} opacity="0.4" />
        <path d="M 0 4 L -6 8 L 0 10" fill="#FFFFFF" stroke={BRASS} strokeWidth="0.7" strokeLinejoin="round" />
      </g>

      {/* Ambient marker dots */}
      <circle cx="20" cy="32" r="1" fill={INK} opacity="0.2" />
      <circle cx="40" cy="32" r="1" fill={INK} opacity="0.2" />
      <circle cx="60" cy="32" r="1" fill={INK} opacity="0.2" />
      <circle cx="80" cy="32" r="1" fill={INK} opacity="0.2" />
      <circle cx="120" cy="32" r="1" fill={INK} opacity="0.2" />
      <circle cx="140" cy="32" r="1" fill={INK} opacity="0.2" />
      <circle cx="160" cy="32" r="1" fill={INK} opacity="0.2" />

      {/* Hand glyph hint — single index finger over spacebar */}
      <path d="M 96 174 L 96 184 L 100 184 L 100 178 L 104 178 L 104 184 L 110 184 L 110 174" stroke={INK} strokeWidth="1" fill="none" strokeLinejoin="round" opacity="0.7" />

      {/* Brass spacebar accent */}
      <rect x="85" y="170" width="30" height="2" rx="1" fill={BRASS} opacity="0.85" />

      {/* Crosshair ticks at strategic points */}
      <CrosshairTick x={28} y={48} />
      <CrosshairTick x={172} y={48} />
      <CrosshairTick x={28} y={172} />
      <CrosshairTick x={172} y={172} />

      {/* Tiny "Q" label corner */}
      <text x="14" y="194" fontSize="6" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="2">Q · 01</text>

      {/* Floating "voice query" hint orbiting around laptop */}
      <g transform="translate(18, 90)">
        <rect x="0" y="0" width="20" height="12" rx="6" stroke={INK} strokeWidth="0.7" fill="#FFFFFF" />
        <rect x="4" y="3" width="2" height="6" rx="1" fill={INK} opacity="0.55" />
        <path d="M 3 6 Q 3 10 6 10 Q 9 10 9 6" stroke={INK} strokeWidth="0.6" fill="none" opacity="0.55" />
        <rect x="12" y="5" width="6" height="1" rx="0.5" fill={INK} opacity="0.45" />
        <rect x="12" y="7.5" width="4" height="1" rx="0.5" fill={INK} opacity="0.35" />
      </g>

      {/* Right-side floating glyphs: signals being collected from the query */}
      <g transform="translate(170, 100)">
        <rect x="0" y="0" width="14" height="14" rx="2" stroke={INK} strokeWidth="0.6" fill="#FFFFFF" />
        <circle cx="7" cy="6" r="3" stroke={BRASS} strokeWidth="0.8" fill="none" />
        <circle cx="7" cy="6" r="1" fill={BRASS} />
        <rect x="3" y="11" width="8" height="1" rx="0.5" fill={INK} opacity="0.45" />
      </g>
      <g transform="translate(170, 120)">
        <rect x="0" y="0" width="14" height="14" rx="2" stroke={INK} strokeWidth="0.6" fill="#FFFFFF" />
        <path d="M 3 7 L 5 9 L 11 4" stroke={BRASS} strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g transform="translate(170, 140)">
        <rect x="0" y="0" width="14" height="14" rx="2" stroke={INK} strokeWidth="0.6" fill="#FFFFFF" />
        <circle cx="5" cy="7" r="1.2" fill={INK} opacity="0.5" />
        <circle cx="9" cy="7" r="1.2" fill={INK} opacity="0.5" />
        <path d="M 4 11 Q 7 13 10 11" stroke={INK} strokeWidth="0.7" fill="none" opacity="0.5" />
      </g>

      {/* Signal "trail" lines connecting laptop to floating glyphs */}
      <path d="M 154 96 Q 162 100 170 107" stroke={BRASS} strokeWidth="0.5" strokeDasharray="2 3" fill="none" opacity="0.55" />
      <path d="M 154 110 Q 162 118 170 127" stroke={BRASS} strokeWidth="0.5" strokeDasharray="2 3" fill="none" opacity="0.45" />
      <path d="M 154 122 Q 162 132 170 147" stroke={BRASS} strokeWidth="0.5" strokeDasharray="2 3" fill="none" opacity="0.35" />

      {/* Compass label */}
      <g transform="translate(178, 28)">
        <circle r="6" stroke={INK} strokeWidth="0.6" fill="#FFFFFF" />
        <line x1="0" y1="-4" x2="0" y2="4" stroke={INK} strokeWidth="0.5" opacity="0.5" />
        <line x1="-4" y1="0" x2="4" y2="0" stroke={INK} strokeWidth="0.5" opacity="0.5" />
        <polygon points="0,-3 1,0 -1,0" fill={BRASS} />
      </g>

      {/* Keystroke indicator strip */}
      <g transform="translate(60, 188)">
        <rect width="80" height="4" rx="2" fill={INK} opacity="0.06" />
        <rect width="56" height="4" rx="2" fill={BRASS} opacity="0.7" />
      </g>

      {/* Mini wifi & battery glyph */}
      <g transform="translate(168, 14)">
        <path d="M 0 4 Q 4 0 8 4" stroke={INK} strokeWidth="0.6" fill="none" opacity="0.55" />
        <path d="M 2 5 Q 4 3 6 5" stroke={INK} strokeWidth="0.6" fill="none" opacity="0.55" />
        <circle cx="4" cy="6" r="0.6" fill={INK} opacity="0.6" />
        <rect x="12" y="3" width="8" height="3" rx="0.6" stroke={INK} strokeWidth="0.5" opacity="0.5" fill="none" />
        <rect x="13" y="3.8" width="5" height="1.4" fill={BRASS} />
        <rect x="20" y="4" width="0.8" height="1.4" fill={INK} opacity="0.5" />
      </g>

      {/* Keyboard hint row */}
      <g transform="translate(46, 168)" opacity="0.55">
        <rect width="4" height="3" rx="0.5" stroke={INK} strokeWidth="0.4" fill="#FFFFFF" />
        <rect x="6" width="4" height="3" rx="0.5" stroke={INK} strokeWidth="0.4" fill="#FFFFFF" />
        <rect x="12" width="4" height="3" rx="0.5" stroke={INK} strokeWidth="0.4" fill="#FFFFFF" />
        <rect x="18" width="4" height="3" rx="0.5" stroke={INK} strokeWidth="0.4" fill="#FFFFFF" />
        <rect x="24" width="4" height="3" rx="0.5" stroke={INK} strokeWidth="0.4" fill="#FFFFFF" />
        <rect x="30" width="4" height="3" rx="0.5" stroke={INK} strokeWidth="0.4" fill="#FFFFFF" />
        <rect x="36" width="4" height="3" rx="0.5" stroke={INK} strokeWidth="0.4" fill="#FFFFFF" />
        <rect x="42" width="4" height="3" rx="0.5" stroke={INK} strokeWidth="0.4" fill="#FFFFFF" />
        <rect x="48" width="4" height="3" rx="0.5" stroke={INK} strokeWidth="0.4" fill="#FFFFFF" />
        <rect x="54" width="4" height="3" rx="0.5" stroke={INK} strokeWidth="0.4" fill="#FFFFFF" />
        <rect x="60" width="4" height="3" rx="0.5" stroke={INK} strokeWidth="0.4" fill="#FFFFFF" />
        <rect x="66" width="4" height="3" rx="0.5" stroke={INK} strokeWidth="0.4" fill={BRASS} fillOpacity="0.5" />
      </g>

      {/* Corner reticles */}
      <CornerBracket x={6} y={6} />
      <CornerBracket x={194} y={6} flipX />
      <CornerBracket x={6} y={194} flipY />
      <CornerBracket x={194} y={194} flipX flipY />
    </svg>
  );
}

// =====================================================================
// 2) RANKING POSITION
// A stacked SERP showing 5 result rows with #1 highlighted in brass.
// Side glyph: a numbered "1" medal/badge. Sidebar Knowledge-panel hint.
// =====================================================================

export function RankingPositionIllustration() {
  return (
    <svg viewBox="0 0 200 200" width="200" height="200" fill="none" aria-hidden="true" role="presentation">
      <defs>
        <linearGradient id="oi-rank-highlight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(168,139,71,0.18)" />
          <stop offset="100%" stopColor="rgba(168,139,71,0.04)" />
        </linearGradient>
        <pattern id="oi-rank-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.6" fill="rgba(24,23,26,0.05)" />
        </pattern>
      </defs>

      <rect x="0" y="0" width="200" height="200" fill="url(#oi-rank-grid)" />

      {/* SERP frame */}
      <rect x="18" y="22" width="136" height="160" rx="3" stroke={INK} strokeWidth="1.2" fill="#FFFFFF" />

      {/* Top search bar */}
      <rect x="24" y="28" width="124" height="10" rx="5" stroke={INK} strokeWidth="0.6" fill="#FAFAFA" />
      <circle cx="29" cy="33" r="2" stroke={INK} strokeWidth="0.7" fill="none" />
      <line x1="30.6" y1="34.6" x2="32" y2="36" stroke={INK} strokeWidth="0.7" strokeLinecap="round" />
      <rect x="35" y="32" width="60" height="1.4" rx="0.7" fill={INK} opacity="0.55" />
      <rect x="35" y="35" width="36" height="1.1" rx="0.55" fill={INK} opacity="0.35" />

      {/* Tabs row */}
      <line x1="24" y1="44" x2="148" y2="44" stroke={INK} strokeWidth="0.4" opacity="0.18" />
      <rect x="26" y="40.5" width="10" height="1.4" rx="0.5" fill={INK} opacity="0.7" />
      <rect x="40" y="40.5" width="12" height="1.4" rx="0.5" fill={INK} opacity="0.3" />
      <rect x="56" y="40.5" width="8" height="1.4" rx="0.5" fill={INK} opacity="0.3" />
      <rect x="68" y="40.5" width="14" height="1.4" rx="0.5" fill={INK} opacity="0.3" />
      <rect x="86" y="40.5" width="10" height="1.4" rx="0.5" fill={INK} opacity="0.3" />
      <line x1="26" y1="43.5" x2="36" y2="43.5" stroke={BRASS} strokeWidth="1" />

      {/* Result count */}
      <rect x="24" y="48" width="48" height="1" rx="0.5" fill={INK} opacity="0.25" />

      {/* #1 result row — highlighted */}
      <rect x="22" y="54" width="128" height="30" rx="2" fill="url(#oi-rank-highlight)" stroke={BRASS} strokeWidth="1">
        <animate attributeName="y" values="54;52;54" dur="3s" repeatCount="indefinite" />
      </rect>
      <circle cx="30" cy="62" r="2.5" fill={BRASS} />
      <polygon points="28,60 33,60 28,65" fill="#FFE817" />
      <rect x="36" y="60" width="48" height="1.6" rx="0.8" fill={INK} opacity="0.7" />
      <rect x="36" y="63.5" width="32" height="1.2" rx="0.6" fill={INK} opacity="0.5" />
      <rect x="36" y="68" width="100" height="1.6" rx="0.8" fill={INK} opacity="0.85" />
      <rect x="36" y="72" width="84" height="1.2" rx="0.6" fill={INK} opacity="0.55" />
      <rect x="36" y="76" width="64" height="1.2" rx="0.6" fill={INK} opacity="0.45" />
      {/* Star rating */}
      <g transform="translate(36, 80)">
        <polygon points="0,3 1,1 2,3 4,3 2.5,4.5 3,7 1,5.5 -1,7 -0.5,4.5 -2,3" fill="#F6B73C" />
        <polygon points="6,3 7,1 8,3 10,3 8.5,4.5 9,7 7,5.5 5,7 5.5,4.5 4,3" fill="#F6B73C" />
        <polygon points="12,3 13,1 14,3 16,3 14.5,4.5 15,7 13,5.5 11,7 11.5,4.5 10,3" fill="#F6B73C" />
        <polygon points="18,3 19,1 20,3 22,3 20.5,4.5 21,7 19,5.5 17,7 17.5,4.5 16,3" fill="#F6B73C" />
        <polygon points="24,3 25,1 26,3 28,3 26.5,4.5 27,7 25,5.5 23,7 23.5,4.5 22,3" fill="#F6B73C" />
      </g>
      {/* #1 badge */}
      <rect x="134" y="58" width="14" height="14" rx="3" fill={INK} />
      <text x="141" y="68" fontSize="9" fontWeight="700" fill="#FFE817" textAnchor="middle" fontFamily="Geist, sans-serif">1</text>

      {/* #2 result (faded) */}
      <rect x="22" y="88" width="128" height="20" rx="2" stroke={INK} strokeWidth="0.5" opacity="0.35" fill="none" />
      <circle cx="30" cy="96" r="2" stroke={INK} strokeWidth="0.5" opacity="0.4" fill="none" />
      <rect x="36" y="94" width="40" height="1.3" rx="0.6" fill={INK} opacity="0.4" />
      <rect x="36" y="98" width="80" height="1.4" rx="0.7" fill={INK} opacity="0.5" />
      <rect x="36" y="102" width="60" height="1.1" rx="0.55" fill={INK} opacity="0.3" />

      {/* #3 result */}
      <rect x="22" y="112" width="128" height="18" rx="2" stroke={INK} strokeWidth="0.5" opacity="0.28" fill="none" />
      <circle cx="30" cy="120" r="2" stroke={INK} strokeWidth="0.5" opacity="0.3" fill="none" />
      <rect x="36" y="118" width="32" height="1.3" rx="0.6" fill={INK} opacity="0.3" />
      <rect x="36" y="122" width="80" height="1.4" rx="0.7" fill={INK} opacity="0.35" />
      <rect x="36" y="126" width="50" height="1.1" rx="0.55" fill={INK} opacity="0.22" />

      {/* #4 result */}
      <rect x="22" y="134" width="128" height="18" rx="2" stroke={INK} strokeWidth="0.5" opacity="0.22" fill="none" />
      <rect x="36" y="140" width="32" height="1.3" rx="0.6" fill={INK} opacity="0.25" />
      <rect x="36" y="144" width="74" height="1.4" rx="0.7" fill={INK} opacity="0.28" />
      <rect x="36" y="148" width="46" height="1.1" rx="0.55" fill={INK} opacity="0.18" />

      {/* #5 result */}
      <rect x="22" y="156" width="128" height="18" rx="2" stroke={INK} strokeWidth="0.5" opacity="0.16" fill="none" />
      <rect x="36" y="162" width="30" height="1.3" rx="0.6" fill={INK} opacity="0.2" />
      <rect x="36" y="166" width="70" height="1.4" rx="0.7" fill={INK} opacity="0.22" />

      {/* Knowledge panel side card */}
      <rect x="162" y="56" width="32" height="80" rx="2" stroke={INK} strokeWidth="0.7" fill="#FFFFFF" opacity="0.85" />
      <rect x="166" y="60" width="24" height="10" rx="1" fill={BRASS} opacity="0.15" />
      <polygon points="174,63 184,63 174,73" fill={BRASS} opacity="0.9" />
      <rect x="166" y="74" width="24" height="1.4" rx="0.7" fill={INK} opacity="0.6" />
      <rect x="166" y="78" width="20" height="1.1" rx="0.55" fill={INK} opacity="0.35" />
      <line x1="166" y1="84" x2="190" y2="84" stroke={INK} strokeWidth="0.4" opacity="0.15" />
      <rect x="166" y="88" width="10" height="1" rx="0.5" fill={INK} opacity="0.4" />
      <rect x="178" y="88" width="12" height="1" rx="0.5" fill={INK} opacity="0.25" />
      <rect x="166" y="93" width="10" height="1" rx="0.5" fill={INK} opacity="0.4" />
      <rect x="178" y="93" width="10" height="1" rx="0.5" fill={INK} opacity="0.25" />
      <rect x="166" y="98" width="10" height="1" rx="0.5" fill={INK} opacity="0.4" />
      <rect x="178" y="98" width="14" height="1" rx="0.5" fill={INK} opacity="0.25" />
      <rect x="166" y="103" width="10" height="1" rx="0.5" fill={INK} opacity="0.4" />
      <rect x="178" y="103" width="8" height="1" rx="0.5" fill={INK} opacity="0.25" />
      <rect x="166" y="116" width="24" height="6" rx="1" stroke={INK} strokeWidth="0.5" opacity="0.4" fill="none" />
      <rect x="170" y="118.5" width="16" height="1" rx="0.5" fill={INK} opacity="0.5" />
      <rect x="166" y="126" width="24" height="6" rx="1" stroke={INK} strokeWidth="0.5" opacity="0.35" fill="none" />
      <rect x="170" y="128.5" width="14" height="1" rx="0.5" fill={INK} opacity="0.45" />

      {/* Pagination dots */}
      <g transform="translate(70, 184)">
        <rect width="4" height="2" rx="1" fill={BRASS} />
        <rect x="6" width="4" height="2" rx="1" fill={INK} opacity="0.25" />
        <rect x="12" width="4" height="2" rx="1" fill={INK} opacity="0.18" />
        <rect x="18" width="4" height="2" rx="1" fill={INK} opacity="0.14" />
        <rect x="24" width="4" height="2" rx="1" fill={INK} opacity="0.1" />
        <rect x="30" width="4" height="2" rx="1" fill={INK} opacity="0.08" />
      </g>

      {/* Position label */}
      <text x="14" y="194" fontSize="6" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="2">POS · 01</text>

      {/* People-also-ask accordion */}
      <g transform="translate(22, 178)">
        <rect width="128" height="2" rx="1" fill={INK} opacity="0.18" />
      </g>

      {/* Featured snippet ribbon overlay top of result */}
      <g transform="translate(20, 50)">
        <rect width="20" height="2" rx="1" fill={BRASS} opacity="0.85" />
        <rect x="22" y="0" width="14" height="2" rx="1" fill={INK} opacity="0.3" />
      </g>

      {/* Map preview row */}
      <g transform="translate(22, 6)">
        <rect width="44" height="8" rx="1" fill="#FFFFFF" stroke={INK} strokeWidth="0.4" opacity="0.65" />
        <rect x="2" y="2" width="4" height="4" rx="0.5" fill={BRASS} opacity="0.7" />
        <rect x="8" y="2" width="20" height="1.4" rx="0.7" fill={INK} opacity="0.5" />
        <rect x="8" y="4.5" width="14" height="1" rx="0.5" fill={INK} opacity="0.3" />
      </g>

      {/* Ad-disclosure marker on top result */}
      <rect x="124" y="84" width="14" height="3" rx="0.6" stroke={BRASS} strokeWidth="0.4" fill="none" opacity="0.6" />
      <text x="131" y="86.5" fontSize="2.4" fill={BRASS} fontFamily="Geist, sans-serif" textAnchor="middle" letterSpacing="0.8">ORG</text>

      {/* Tiny brass dot pulse on #1 row */}
      <circle cx="148" cy="68" r="1.4" fill={BRASS}>
        <animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite" />
      </circle>

      {/* Side "AI Overview" sub-card */}
      <g transform="translate(162, 140)">
        <rect width="32" height="30" rx="2" stroke={BRASS} strokeWidth="0.6" fill="rgba(168,139,71,0.06)" />
        <polygon points="3,3 6,2 5,5 8,4 6,7 9,8 5,8 6,11 4,9 1,11 3,8 0,7 3,6" fill={BRASS} />
        <rect x="10" y="2" width="18" height="1.4" rx="0.7" fill={INK} opacity="0.55" />
        <rect x="4" y="14" width="24" height="1.2" rx="0.6" fill={INK} opacity="0.45" />
        <rect x="4" y="17" width="22" height="1.2" rx="0.6" fill={INK} opacity="0.35" />
        <rect x="4" y="20" width="20" height="1.2" rx="0.6" fill={INK} opacity="0.25" />
        <rect x="4" y="24" width="14" height="1" rx="0.5" fill={BRASS} opacity="0.6" />
      </g>

      {/* Local pack 3-result strip with map dots */}
      <g transform="translate(22, 16)">
        <circle r="1.2" fill={BRASS} />
        <text x="3" y="1.5" fontSize="3.5" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif">A</text>
        <circle cx="14" cy="0" r="1.2" fill={INK} opacity="0.35" />
        <circle cx="28" cy="0" r="1.2" fill={INK} opacity="0.25" />
      </g>

      {/* Filter pills row */}
      <g transform="translate(80, 12)">
        <rect width="14" height="4" rx="2" stroke={INK} strokeWidth="0.4" opacity="0.4" fill="#FFFFFF" />
        <rect x="2" y="1.4" width="10" height="1.2" rx="0.6" fill={INK} opacity="0.45" />
        <rect x="16" width="16" height="4" rx="2" stroke={INK} strokeWidth="0.4" opacity="0.4" fill="#FFFFFF" />
        <rect x="18" y="1.4" width="12" height="1.2" rx="0.6" fill={INK} opacity="0.45" />
        <rect x="34" width="14" height="4" rx="2" fill={BRASS} opacity="0.85" />
        <rect x="36" y="1.4" width="10" height="1.2" rx="0.6" fill="#FFFFFF" />
      </g>

      {/* Related searches strip */}
      <g transform="translate(22, 168)">
        <text fontSize="3.4" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="1">RELATED</text>
        <rect x="18" y="-3" width="20" height="6" rx="3" stroke={INK} strokeWidth="0.4" opacity="0.45" fill="#FFFFFF" />
        <rect x="22" y="-1.5" width="12" height="1.4" rx="0.7" fill={INK} opacity="0.5" />
        <rect x="40" y="-3" width="26" height="6" rx="3" stroke={INK} strokeWidth="0.4" opacity="0.45" fill="#FFFFFF" />
        <rect x="44" y="-1.5" width="18" height="1.4" rx="0.7" fill={INK} opacity="0.5" />
        <rect x="68" y="-3" width="22" height="6" rx="3" stroke={INK} strokeWidth="0.4" opacity="0.45" fill="#FFFFFF" />
        <rect x="72" y="-1.5" width="14" height="1.4" rx="0.7" fill={INK} opacity="0.5" />
      </g>

      {/* Sort-by control */}
      <g transform="translate(132, 12)">
        <rect width="14" height="4" rx="1" stroke={INK} strokeWidth="0.4" opacity="0.4" fill="#FFFFFF" />
        <rect x="1.5" y="1.4" width="8" height="1.2" rx="0.6" fill={INK} opacity="0.45" />
        <path d="M 10.5 1.7 L 11.5 2.8 L 12.5 1.7" stroke={INK} strokeWidth="0.5" fill="none" opacity="0.5" strokeLinecap="round" />
      </g>

      {/* Bottom CTA strip */}
      <g transform="translate(22, 188)">
        <rect width="128" height="4" rx="2" stroke={BRASS} strokeWidth="0.6" fill="rgba(168,139,71,0.06)" />
        <rect x="2" y="1" width="50" height="2" rx="1" fill={BRASS} opacity="0.65" />
        <rect x="56" y="1" width="40" height="2" rx="1" fill={INK} opacity="0.35" />
        <rect x="100" y="1" width="20" height="2" rx="1" fill={INK} opacity="0.25" />
      </g>

      <CornerBracket x={6} y={6} />
      <CornerBracket x={194} y={6} flipX />
      <CornerBracket x={6} y={194} flipY />
      <CornerBracket x={194} y={194} flipX flipY />
    </svg>
  );
}

// =====================================================================
// 3) CLICK HAPPENS
// A SERP result row being clicked: cursor, expanding ripples, particle
// burst around contact point. Two ghost result rows below for context.
// =====================================================================

export function ClickHappensIllustration() {
  return (
    <svg viewBox="0 0 200 200" width="200" height="200" fill="none" aria-hidden="true" role="presentation">
      <defs>
        <radialGradient id="oi-click-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(168,139,71,0.3)" />
          <stop offset="100%" stopColor="rgba(168,139,71,0)" />
        </radialGradient>
        <pattern id="oi-click-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.6" fill="rgba(24,23,26,0.05)" />
        </pattern>
      </defs>

      <rect x="0" y="0" width="200" height="200" fill="url(#oi-click-grid)" />

      {/* Glow halo behind click point */}
      <circle cx="100" cy="100" r="60" fill="url(#oi-click-glow)" />

      {/* Featured result being clicked */}
      <rect x="22" y="62" width="156" height="56" rx="3" fill="#FFFFFF" stroke={BRASS} strokeWidth="1.4" />
      {/* Brass left border emphasis */}
      <rect x="22" y="62" width="2.5" height="56" fill={BRASS} />
      {/* Favicon */}
      <circle cx="34" cy="74" r="3" stroke={INK} strokeWidth="0.7" fill="#FFFFFF" />
      <polygon points="32,72 38,72 32,78" fill="#FFE817" />
      {/* Domain text */}
      <rect x="42" y="72" width="40" height="1.4" rx="0.7" fill={INK} opacity="0.7" />
      <rect x="42" y="75.5" width="58" height="1.2" rx="0.6" fill={INK} opacity="0.45" />
      {/* Title */}
      <rect x="32" y="84" width="116" height="2.2" rx="1.1" fill={INK} opacity="0.9" />
      <rect x="32" y="89" width="92" height="2.2" rx="1.1" fill={INK} opacity="0.85" />
      {/* Snippet */}
      <rect x="32" y="96" width="138" height="1.6" rx="0.8" fill={INK} opacity="0.55" />
      <rect x="32" y="100" width="124" height="1.6" rx="0.8" fill={INK} opacity="0.4" />
      <rect x="32" y="104" width="100" height="1.6" rx="0.8" fill={INK} opacity="0.35" />
      {/* Rating */}
      <g transform="translate(32, 109)">
        <polygon points="0,3 1,1 2,3 4,3 2.5,4.5 3,7 1,5.5 -1,7 -0.5,4.5 -2,3" fill="#F6B73C" />
        <polygon points="6,3 7,1 8,3 10,3 8.5,4.5 9,7 7,5.5 5,7 5.5,4.5 4,3" fill="#F6B73C" />
        <polygon points="12,3 13,1 14,3 16,3 14.5,4.5 15,7 13,5.5 11,7 11.5,4.5 10,3" fill="#F6B73C" />
        <polygon points="18,3 19,1 20,3 22,3 20.5,4.5 21,7 19,5.5 17,7 17.5,4.5 16,3" fill="#F6B73C" />
        <polygon points="24,3 25,1 26,3 28,3 26.5,4.5 27,7 25,5.5 23,7 23.5,4.5 22,3" fill="#F6B73C" />
      </g>

      {/* Expanding click ripples */}
      <circle cx="100" cy="120" r="6" stroke={BRASS} strokeWidth="1.4" fill="none" opacity="0.85">
        <animate attributeName="r" values="6;26;6" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.85;0;0.85" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="120" r="12" stroke={BRASS} strokeWidth="1" fill="none" opacity="0.55">
        <animate attributeName="r" values="12;34;12" dur="2s" begin="0.3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.55;0;0.55" dur="2s" begin="0.3s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="120" r="18" stroke={BRASS} strokeWidth="0.7" fill="none" opacity="0.35">
        <animate attributeName="r" values="18;42;18" dur="2s" begin="0.6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.35;0;0.35" dur="2s" begin="0.6s" repeatCount="indefinite" />
      </circle>

      {/* Particle burst */}
      <circle cx="86" cy="106" r="1" fill={BRASS} opacity="0.7">
        <animate attributeName="cy" values="106;100;106" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0;0.7" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="114" cy="106" r="1" fill={BRASS} opacity="0.7">
        <animate attributeName="cy" values="106;100;106" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0;0.7" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="80" cy="120" r="1" fill={BRASS} opacity="0.7">
        <animate attributeName="cx" values="80;74;80" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0;0.7" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="120" cy="120" r="1" fill={BRASS} opacity="0.7">
        <animate attributeName="cx" values="120;126;120" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0;0.7" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="86" cy="134" r="1" fill={BRASS} opacity="0.7">
        <animate attributeName="cy" values="134;140;134" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0;0.7" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="114" cy="134" r="1" fill={BRASS} opacity="0.7">
        <animate attributeName="cy" values="134;140;134" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0;0.7" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Cursor pointer */}
      <g transform="translate(94, 116)">
        <path d="M 0 0 L 0 18 L 5 14 L 8 20 L 11 18 L 8 12 L 14 12 Z" fill={INK} stroke="#FFFFFF" strokeWidth="0.6" strokeLinejoin="round" />
      </g>

      {/* Ghost results below (context) */}
      <rect x="22" y="128" width="156" height="16" rx="2" stroke={INK} strokeWidth="0.4" opacity="0.2" fill="none" />
      <circle cx="34" cy="136" r="2" stroke={INK} strokeWidth="0.5" opacity="0.25" fill="none" />
      <rect x="42" y="134" width="64" height="1.2" rx="0.6" fill={INK} opacity="0.25" />
      <rect x="32" y="138.5" width="120" height="1.4" rx="0.7" fill={INK} opacity="0.3" />
      <rect x="22" y="148" width="156" height="16" rx="2" stroke={INK} strokeWidth="0.4" opacity="0.15" fill="none" />
      <circle cx="34" cy="156" r="2" stroke={INK} strokeWidth="0.5" opacity="0.2" fill="none" />
      <rect x="42" y="154" width="58" height="1.2" rx="0.6" fill={INK} opacity="0.18" />
      <rect x="32" y="158.5" width="110" height="1.4" rx="0.7" fill={INK} opacity="0.22" />

      {/* Top mini chrome dots */}
      <rect x="20" y="20" width="160" height="34" rx="3" fill="#FAFAFA" stroke={INK} strokeWidth="0.5" opacity="0.55" />
      <circle cx="26" cy="26" r="1.2" fill="#FF5F57" />
      <circle cx="30" cy="26" r="1.2" fill="#FEBC2E" />
      <circle cx="34" cy="26" r="1.2" fill="#28C840" />
      <rect x="40" y="24" width="134" height="4" rx="2" stroke={INK} strokeWidth="0.4" opacity="0.3" fill="#FFFFFF" />
      <rect x="44" y="25.5" width="46" height="1.2" rx="0.6" fill={INK} opacity="0.35" />
      <rect x="20" y="32" width="160" height="22" fill="#FFFFFF" stroke={INK} strokeWidth="0.4" opacity="0.4" />
      <rect x="24" y="38" width="40" height="2.4" rx="1.2" fill={INK} opacity="0.6" />
      <rect x="24" y="44" width="100" height="1.4" rx="0.7" fill={INK} opacity="0.35" />

      <text x="14" y="194" fontSize="6" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="2">CLICK · 35%</text>

      {/* Click counter overlay */}
      <g transform="translate(154, 156)">
        <rect width="36" height="14" rx="2" fill={INK} />
        <text x="18" y="9" fontSize="6.5" fontWeight="700" fill="#FFE817" textAnchor="middle" fontFamily="Geist, sans-serif">+1 CLICK</text>
      </g>

      {/* Timing pip */}
      <g transform="translate(20, 156)">
        <circle r="5" stroke={BRASS} strokeWidth="0.7" fill="#FFFFFF" />
        <line x1="0" y1="-3" x2="0" y2="0" stroke={INK} strokeWidth="0.8" />
        <line x1="0" y1="0" x2="2" y2="0" stroke={INK} strokeWidth="0.8" />
        <text x="10" y="2" fontSize="4.5" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="1">0.42s LOAD</text>
      </g>

      {/* Breadcrumb arrow leading off-screen */}
      <path d="M 178 90 L 192 90" stroke={BRASS} strokeWidth="1" fill="none" strokeDasharray="3 3" />
      <path d="M 188 86 L 192 90 L 188 94" stroke={BRASS} strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* Second ghost cursor (history trail) */}
      <g transform="translate(48, 56)" opacity="0.3">
        <path d="M 0 0 L 0 14 L 4 11 L 6 16 L 9 14 L 7 10 L 11 10 Z" fill={INK} stroke="#FFFFFF" strokeWidth="0.4" strokeLinejoin="round" />
      </g>

      {/* Trail dots cursor → click */}
      <circle cx="56" cy="68" r="1" fill={BRASS} opacity="0.4" />
      <circle cx="68" cy="82" r="1" fill={BRASS} opacity="0.55" />
      <circle cx="80" cy="96" r="1" fill={BRASS} opacity="0.7" />
      <circle cx="92" cy="110" r="1" fill={BRASS} opacity="0.85" />

      {/* Top URL bar overlay - destination preview */}
      <g transform="translate(20, 174)">
        <rect width="120" height="6" rx="3" stroke={INK} strokeWidth="0.4" fill="#FAFAFA" />
        <rect x="3" y="2.5" width="2" height="1" rx="0.5" fill={INK} opacity="0.55" />
        <rect x="8" y="2" width="58" height="1.4" rx="0.7" fill={INK} opacity="0.55" />
        <rect x="68" y="2" width="48" height="1.4" rx="0.7" fill={BRASS} opacity="0.6" />
      </g>

      {/* Hover state tag */}
      <g transform="translate(116, 56)">
        <rect width="34" height="6" rx="3" fill={INK} />
        <circle cx="4" cy="3" r="1.2" fill="#FFE817" />
        <text x="20" y="4.2" fontSize="3.5" fill="#FFFFFF" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.6">HOVER 1.2s</text>
      </g>

      {/* Mouse wheel scroll indicator */}
      <g transform="translate(180, 100)">
        <rect width="8" height="14" rx="4" stroke={INK} strokeWidth="0.8" fill="#FFFFFF" />
        <rect x="3" y="3" width="2" height="4" rx="1" fill={BRASS}>
          <animate attributeName="y" values="3;7;3" dur="2s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* Heatmap dot scatter behind result */}
      <g opacity="0.35">
        <circle cx="40" cy="78" r="1.4" fill={BRASS} />
        <circle cx="58" cy="84" r="1.8" fill={BRASS} />
        <circle cx="72" cy="92" r="2.2" fill={BRASS} />
        <circle cx="90" cy="98" r="2.6" fill={BRASS} />
        <circle cx="110" cy="92" r="2.2" fill={BRASS} />
        <circle cx="130" cy="84" r="1.8" fill={BRASS} />
        <circle cx="146" cy="78" r="1.4" fill={BRASS} />
      </g>

      {/* Active selection box dashed */}
      <rect x="22" y="62" width="156" height="56" rx="3" stroke={BRASS} strokeWidth="0.6" strokeDasharray="4 4" fill="none" opacity="0.6" />

      {/* Selection corner anchors */}
      <rect x="20" y="60" width="3" height="3" fill={BRASS} />
      <rect x="177" y="60" width="3" height="3" fill={BRASS} />
      <rect x="20" y="117" width="3" height="3" fill={BRASS} />
      <rect x="177" y="117" width="3" height="3" fill={BRASS} />

      {/* Conversion sparkline running top */}
      <g transform="translate(20, 2)">
        <path d="M 0 4 L 8 3 L 16 4 L 24 2 L 32 3 L 40 1 L 48 2 L 56 0" stroke={BRASS} strokeWidth="0.8" fill="none" opacity="0.55" />
        <circle cx="56" cy="0" r="1.2" fill={BRASS} />
        <text x="60" y="2" fontSize="3" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1">CTR +12%</text>
      </g>

      {/* User journey funnel mini-strip */}
      <g transform="translate(20, 154)">
        <text fontSize="3.4" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="1">FUNNEL</text>
        <rect x="22" y="-3" width="24" height="6" rx="1" fill={INK} opacity="0.25" />
        <rect x="48" y="-3" width="20" height="6" rx="1" fill={INK} opacity="0.4" />
        <rect x="70" y="-3" width="16" height="6" rx="1" fill={INK} opacity="0.55" />
        <rect x="88" y="-3" width="12" height="6" rx="1" fill={BRASS} opacity="0.9" />
        <text x="102" y="2" fontSize="3.4" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1">CONVERT</text>
      </g>

      {/* Tag bubble */}
      <g transform="translate(150, 4)">
        <rect width="40" height="6" rx="3" fill={INK} />
        <text x="20" y="4.2" fontSize="3.4" fill="#FFE817" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="1">#1 RESULT</text>
      </g>

      <CornerBracket x={6} y={6} />
      <CornerBracket x={194} y={6} flipX />
      <CornerBracket x={6} y={194} flipY />
      <CornerBracket x={194} y={194} flipX flipY />
    </svg>
  );
}

// =====================================================================
// 4) CONTACT HAPPENS
// A phone with an incoming call. Ring lines emanate. Calendar slot
// confirms appointment scheduled. Notification badge with count.
// =====================================================================

export function ContactHappensIllustration() {
  return (
    <svg viewBox="0 0 200 200" width="200" height="200" fill="none" aria-hidden="true" role="presentation">
      <defs>
        <pattern id="oi-contact-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.6" fill="rgba(24,23,26,0.05)" />
        </pattern>
        <linearGradient id="oi-phone-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FCFCFA" />
          <stop offset="100%" stopColor="#F2F2EE" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="200" height="200" fill="url(#oi-contact-grid)" />

      {/* Ring waves emanating */}
      <circle cx="100" cy="98" r="60" stroke={BRASS} strokeWidth="0.8" fill="none" opacity="0.45">
        <animate attributeName="r" values="60;78;60" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.45;0;0.45" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="98" r="70" stroke={BRASS} strokeWidth="0.6" fill="none" opacity="0.3">
        <animate attributeName="r" values="70;90;70" dur="3s" begin="0.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="98" r="84" stroke={BRASS} strokeWidth="0.5" fill="none" opacity="0.2">
        <animate attributeName="r" values="84;100;84" dur="3s" begin="1s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.2;0;0.2" dur="3s" begin="1s" repeatCount="indefinite" />
      </circle>

      {/* Phone body */}
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 100 100;-3 100 100;3 100 100;0 100 100"
          dur="2s"
          repeatCount="indefinite"
        />
        <rect x="68" y="26" width="64" height="144" rx="10" stroke={INK} strokeWidth="1.5" fill="#FFFFFF" />
        {/* Inner bezel */}
        <rect x="72" y="38" width="56" height="120" rx="3" fill="url(#oi-phone-screen)" stroke={INK} strokeWidth="0.4" opacity="0.6" />
        {/* Speaker bar */}
        <rect x="92" y="30" width="14" height="1.6" rx="0.8" fill={INK} opacity="0.4" />
        {/* Camera dot */}
        <circle cx="86" cy="30.8" r="0.8" fill={INK} opacity="0.45" />
        {/* Home indicator */}
        <rect x="92" y="164" width="16" height="1.6" rx="0.8" fill={INK} opacity="0.3" />

        {/* Status bar */}
        <rect x="78" y="43" width="6" height="1.2" rx="0.5" fill={INK} opacity="0.55" />
        <g transform="translate(116, 41)">
          <rect width="3" height="3" rx="0.4" fill={INK} opacity="0.5" />
          <rect x="4" width="3" height="3" rx="0.4" fill={INK} opacity="0.5" />
          <rect x="8" y="1" width="3" height="2" rx="0.4" fill={INK} opacity="0.4" />
        </g>

        {/* Incoming call label */}
        <text x="100" y="56" fontSize="5.5" fill={INK} fontFamily="Geist, sans-serif" textAnchor="middle" letterSpacing="1.5" opacity="0.6">INCOMING CALL</text>

        {/* Caller avatar */}
        <circle cx="100" cy="78" r="14" stroke={INK} strokeWidth="1" fill={BRASS} fillOpacity="0.18" />
        <circle cx="100" cy="74" r="4" fill={INK} opacity="0.45" />
        <path d="M 90 90 Q 100 80 110 90" stroke={INK} strokeWidth="1" fill="none" opacity="0.45" />

        {/* Caller name */}
        <rect x="84" y="100" width="32" height="2.2" rx="1.1" fill={INK} opacity="0.75" />
        <rect x="88" y="105" width="24" height="1.6" rx="0.8" fill={INK} opacity="0.45" />
        {/* Phone number */}
        <rect x="86" y="111" width="28" height="1.2" rx="0.6" fill={INK} opacity="0.3" />

        {/* Tampa, FL line */}
        <rect x="88" y="116" width="24" height="1" rx="0.5" fill={INK} opacity="0.25" />

        {/* Accept (green-equivalent brass) and decline buttons */}
        <circle cx="84" cy="142" r="7" fill={BRASS} />
        <path d="M 80.5 140 Q 81 138 83 138.5 L 86 140 Q 87 141.5 86 143 L 85 145 Q 84 146 82 145.5 L 80 144.5 Z" fill="#FFFFFF" transform="rotate(30 84 142)" />

        <circle cx="116" cy="142" r="7" stroke={INK} strokeWidth="1.2" fill="#FFFFFF" />
        <path d="M 112.5 140 Q 113 138 115 138.5 L 118 140 Q 119 141.5 118 143 L 117 145 Q 116 146 114 145.5 L 112 144.5 Z" fill={INK} opacity="0.55" transform="rotate(135 116 142)" />

        {/* Message + remind */}
        <rect x="80" y="154" width="14" height="3" rx="1.5" stroke={INK} strokeWidth="0.4" opacity="0.45" fill="none" />
        <rect x="106" y="154" width="14" height="3" rx="1.5" stroke={INK} strokeWidth="0.4" opacity="0.45" fill="none" />
      </g>

      {/* Calendar slot floating to side */}
      <g transform="translate(150, 50)">
        <rect width="36" height="34" rx="3" fill="#FFFFFF" stroke={INK} strokeWidth="0.8" />
        <rect width="36" height="6" rx="3" fill={INK} />
        <rect y="3" width="36" height="3" fill={INK} />
        <text x="18" y="4.5" fontSize="3" fill="#FFE817" fontFamily="Geist, sans-serif" textAnchor="middle" letterSpacing="1.2">TUE</text>
        <text x="18" y="20" fontSize="11" fill={INK} fontFamily="Geist, sans-serif" textAnchor="middle" fontWeight="700">14</text>
        <rect x="6" y="24" width="10" height="1.4" rx="0.7" fill={INK} opacity="0.55" />
        <rect x="6" y="27" width="14" height="1" rx="0.5" fill={BRASS} opacity="0.85" />
        <rect x="6" y="29.5" width="8" height="1" rx="0.5" fill={INK} opacity="0.3" />
      </g>

      {/* Notification badge */}
      <g transform="translate(34, 36)">
        <circle r="8" fill="#FFE817" stroke={INK} strokeWidth="1" />
        <text fontSize="7" fontWeight="700" fill={INK} textAnchor="middle" y="3" fontFamily="Geist, sans-serif">3</text>
      </g>

      {/* Speed lines around phone (vibration) */}
      <line x1="42" y1="80" x2="56" y2="80" stroke={BRASS} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <line x1="44" y1="100" x2="58" y2="100" stroke={BRASS} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <line x1="42" y1="120" x2="56" y2="120" stroke={BRASS} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <line x1="144" y1="80" x2="158" y2="80" stroke={BRASS} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <line x1="142" y1="100" x2="156" y2="100" stroke={BRASS} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <line x1="144" y1="120" x2="158" y2="120" stroke={BRASS} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />

      <text x="14" y="194" fontSize="6" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="2">RING · 12%</text>

      {/* Email notification card top-left */}
      <g transform="translate(8, 56)">
        <rect width="40" height="20" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="0.7" />
        <rect x="3" y="3" width="34" height="10" rx="1" fill={INK} opacity="0.08" />
        <path d="M 3 4 L 20 12 L 37 4" stroke={INK} strokeWidth="0.7" fill="none" opacity="0.5" />
        <rect x="3" y="15" width="22" height="1.2" rx="0.6" fill={INK} opacity="0.55" />
        <circle cx="36" cy="3" r="2" fill="#FFE817" stroke={INK} strokeWidth="0.6" />
        <text x="36" y="4.6" fontSize="2.5" fontWeight="700" fill={INK} textAnchor="middle" fontFamily="Geist, sans-serif">1</text>
      </g>

      {/* Voicemail icon */}
      <g transform="translate(12, 140)">
        <rect width="32" height="14" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="0.7" />
        <circle cx="6" cy="7" r="2.4" stroke={BRASS} strokeWidth="0.8" fill="none" />
        <circle cx="14" cy="7" r="2.4" stroke={BRASS} strokeWidth="0.8" fill="none" />
        <line x1="6" y1="9.4" x2="14" y2="9.4" stroke={BRASS} strokeWidth="0.8" />
        <rect x="20" y="5" width="10" height="1.2" rx="0.6" fill={INK} opacity="0.55" />
        <rect x="20" y="8" width="8" height="1" rx="0.5" fill={INK} opacity="0.35" />
      </g>

      {/* Call duration timer top-right of phone */}
      <g transform="translate(154, 92)">
        <rect width="38" height="12" rx="2" fill={INK} />
        <circle cx="6" cy="6" r="2" stroke="#FFE817" strokeWidth="0.7" fill="none" />
        <line x1="6" y1="6" x2="6" y2="4.2" stroke="#FFE817" strokeWidth="0.6" />
        <line x1="6" y1="6" x2="7.2" y2="6" stroke="#FFE817" strokeWidth="0.6" />
        <text x="22" y="8" fontSize="5.5" fontWeight="700" fill="#FFE817" textAnchor="middle" fontFamily="Geist, sans-serif">02:14</text>
      </g>

      {/* Form-fill side card */}
      <g transform="translate(150, 130)">
        <rect width="40" height="32" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="0.7" />
        <rect x="3" y="3" width="34" height="2.4" rx="1.2" fill={INK} opacity="0.55" />
        <rect x="3" y="8" width="34" height="4" rx="1" stroke={INK} strokeWidth="0.4" opacity="0.45" fill="none" />
        <rect x="3" y="14" width="34" height="4" rx="1" stroke={INK} strokeWidth="0.4" opacity="0.45" fill="none" />
        <rect x="3" y="20" width="34" height="4" rx="1" stroke={INK} strokeWidth="0.4" opacity="0.45" fill="none" />
        <rect x="3" y="26" width="18" height="4" rx="1" fill={BRASS} />
        <rect x="6" y="27.2" width="12" height="1.4" rx="0.7" fill="#FFFFFF" />
      </g>

      {/* Source pin marker on map ribbon */}
      <g transform="translate(60, 178)">
        <circle r="3" fill={BRASS} />
        <polygon points="-2,2 0,6 2,2" fill={BRASS} />
        <rect x="6" y="-2" width="34" height="3" rx="1.5" fill={INK} />
        <text x="23" y="0.4" fontSize="3" fill="#FFE817" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="1">TAMPA · FL</text>
      </g>

      {/* Quote bubble — "I'd like a consultation" */}
      <g transform="translate(10, 90)">
        <rect width="50" height="22" rx="3" fill="#FFFFFF" stroke={INK} strokeWidth="0.7" />
        <rect x="3" y="3" width="40" height="1.6" rx="0.8" fill={INK} opacity="0.6" />
        <rect x="3" y="7" width="44" height="1.4" rx="0.7" fill={INK} opacity="0.45" />
        <rect x="3" y="11" width="34" height="1.4" rx="0.7" fill={INK} opacity="0.4" />
        <rect x="3" y="16" width="14" height="3" rx="1.5" fill={BRASS} />
        <path d="M 50 8 L 56 10 L 50 12" fill="#FFFFFF" stroke={INK} strokeWidth="0.7" strokeLinejoin="round" />
      </g>

      {/* Inbox lines on right */}
      <g transform="translate(148, 56)">
        <rect width="44" height="3" rx="1" fill={INK} opacity="0.18" />
        <rect y="6" width="40" height="3" rx="1" fill={INK} opacity="0.14" />
        <rect y="12" width="36" height="3" rx="1" fill={INK} opacity="0.1" />
      </g>

      {/* Decorative ring around phone bottom */}
      <ellipse cx="100" cy="172" rx="40" ry="3" fill={INK} opacity="0.08" />

      {/* "+3" tag floating */}
      <g transform="translate(8, 32)">
        <circle r="6" fill={BRASS} />
        <text fontSize="6" fontWeight="700" fill={INK} textAnchor="middle" y="2.4" fontFamily="Geist, sans-serif">+3</text>
      </g>

      {/* Quick reply chips */}
      <g transform="translate(34, 178)">
        <rect width="24" height="6" rx="3" stroke={BRASS} strokeWidth="0.6" fill="#FFFFFF" />
        <rect x="3" y="2.5" width="18" height="1.2" rx="0.6" fill={BRASS} opacity="0.7" />
        <rect x="28" width="32" height="6" rx="3" stroke={INK} strokeWidth="0.4" fill="#FFFFFF" opacity="0.55" />
        <rect x="31" y="2.5" width="26" height="1.2" rx="0.6" fill={INK} opacity="0.45" />
        <rect x="64" width="28" height="6" rx="3" stroke={INK} strokeWidth="0.4" fill="#FFFFFF" opacity="0.55" />
        <rect x="67" y="2.5" width="22" height="1.2" rx="0.6" fill={INK} opacity="0.45" />
      </g>

      <CornerBracket x={6} y={6} />
      <CornerBracket x={194} y={6} flipX />
      <CornerBracket x={6} y={194} flipY />
      <CornerBracket x={194} y={194} flipX flipY />
    </svg>
  );
}

// =====================================================================
// 5) REVENUE COMPOUNDS
// Bar + line chart over 5 quarters. Dollar marker bubble at peak.
// Compass crosshairs and Y-axis tick marks add measurement density.
// =====================================================================

export function RevenueCompoundsIllustration() {
  return (
    <svg viewBox="0 0 200 200" width="200" height="200" fill="none" aria-hidden="true" role="presentation">
      <defs>
        <pattern id="oi-rev-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.6" fill="rgba(24,23,26,0.05)" />
        </pattern>
        <linearGradient id="oi-rev-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={BRASS} stopOpacity="0.35" />
          <stop offset="100%" stopColor={BRASS} stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="200" height="200" fill="url(#oi-rev-grid)" />

      {/* Frame */}
      <rect x="18" y="22" width="164" height="148" rx="2" stroke={INK} strokeWidth="0.7" fill="#FFFFFF" opacity="0.85" />

      {/* Y-axis */}
      <line x1="36" y1="40" x2="36" y2="156" stroke={INK} strokeWidth="0.8" opacity="0.4" />
      {/* X-axis */}
      <line x1="36" y1="156" x2="172" y2="156" stroke={INK} strokeWidth="0.8" opacity="0.4" />

      {/* Y-axis tick labels */}
      <text x="32" y="58" fontSize="5" fill={INK} opacity="0.5" textAnchor="end" fontFamily="Geist, sans-serif">$240k</text>
      <text x="32" y="78" fontSize="5" fill={INK} opacity="0.5" textAnchor="end" fontFamily="Geist, sans-serif">$180k</text>
      <text x="32" y="98" fontSize="5" fill={INK} opacity="0.5" textAnchor="end" fontFamily="Geist, sans-serif">$120k</text>
      <text x="32" y="118" fontSize="5" fill={INK} opacity="0.5" textAnchor="end" fontFamily="Geist, sans-serif">$60k</text>
      <text x="32" y="138" fontSize="5" fill={INK} opacity="0.5" textAnchor="end" fontFamily="Geist, sans-serif">$30k</text>
      {/* tick marks */}
      <line x1="34" y1="58" x2="36" y2="58" stroke={INK} strokeWidth="0.6" opacity="0.3" />
      <line x1="34" y1="78" x2="36" y2="78" stroke={INK} strokeWidth="0.6" opacity="0.3" />
      <line x1="34" y1="98" x2="36" y2="98" stroke={INK} strokeWidth="0.6" opacity="0.3" />
      <line x1="34" y1="118" x2="36" y2="118" stroke={INK} strokeWidth="0.6" opacity="0.3" />
      <line x1="34" y1="138" x2="36" y2="138" stroke={INK} strokeWidth="0.6" opacity="0.3" />

      {/* Horizontal gridlines */}
      <line x1="36" y1="58" x2="172" y2="58" stroke={INK} strokeWidth="0.3" opacity="0.12" strokeDasharray="2 3" />
      <line x1="36" y1="78" x2="172" y2="78" stroke={INK} strokeWidth="0.3" opacity="0.12" strokeDasharray="2 3" />
      <line x1="36" y1="98" x2="172" y2="98" stroke={INK} strokeWidth="0.3" opacity="0.12" strokeDasharray="2 3" />
      <line x1="36" y1="118" x2="172" y2="118" stroke={INK} strokeWidth="0.3" opacity="0.12" strokeDasharray="2 3" />
      <line x1="36" y1="138" x2="172" y2="138" stroke={INK} strokeWidth="0.3" opacity="0.12" strokeDasharray="2 3" />

      {/* Bars */}
      <rect x="48" y="132" width="14" height="24" rx="1" fill={INK} opacity="0.18" />
      <rect x="72" y="116" width="14" height="40" rx="1" fill={INK} opacity="0.32" />
      <rect x="96" y="92" width="14" height="64" rx="1" fill={INK} opacity="0.5" />
      <rect x="120" y="68" width="14" height="88" rx="1" fill={INK} opacity="0.7" />
      <rect x="144" y="44" width="14" height="112" rx="1" fill={BRASS} />

      {/* Area under trend */}
      <path
        d="M 55 134 L 79 118 L 103 94 L 127 70 L 151 46 L 151 156 L 55 156 Z"
        fill="url(#oi-rev-area)"
      />
      {/* Trend line */}
      <path
        d="M 55 134 L 79 118 L 103 94 L 127 70 L 151 46"
        stroke={BRASS}
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Trend nodes */}
      <circle cx="55" cy="134" r="2.2" fill={BRASS} />
      <circle cx="79" cy="118" r="2.2" fill={BRASS} />
      <circle cx="103" cy="94" r="2.2" fill={BRASS} />
      <circle cx="127" cy="70" r="2.2" fill={BRASS} />
      <circle cx="151" cy="46" r="3.2" fill={BRASS} />
      <circle cx="151" cy="46" r="7" fill={BRASS} opacity="0.25">
        <animate attributeName="r" values="7;11;7" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.25;0;0.25" dur="2.4s" repeatCount="indefinite" />
      </circle>

      {/* Dollar bubble */}
      <g transform="translate(160, 34)">
        <rect x="0" y="0" width="32" height="14" rx="3" fill={INK} />
        <text x="16" y="9" fontSize="6.5" fontWeight="700" fill="#FFE817" textAnchor="middle" fontFamily="Geist, sans-serif">+186%</text>
      </g>

      {/* X-axis quarter labels */}
      <text x="55" y="166" fontSize="5" fill={INK} opacity="0.55" textAnchor="middle" fontFamily="Geist, sans-serif">Q1</text>
      <text x="79" y="166" fontSize="5" fill={INK} opacity="0.55" textAnchor="middle" fontFamily="Geist, sans-serif">Q2</text>
      <text x="103" y="166" fontSize="5" fill={INK} opacity="0.55" textAnchor="middle" fontFamily="Geist, sans-serif">Q3</text>
      <text x="127" y="166" fontSize="5" fill={INK} opacity="0.55" textAnchor="middle" fontFamily="Geist, sans-serif">Q4</text>
      <text x="151" y="166" fontSize="5" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif" fontWeight="700">Q5</text>

      {/* Mini compounding badge top-left */}
      <g transform="translate(40, 30)">
        <rect width="48" height="10" rx="2" stroke={BRASS} strokeWidth="0.7" fill="#FFFFFF" />
        <circle cx="6" cy="5" r="2" fill={BRASS} />
        <text x="10" y="7" fontSize="4.5" fill={INK} fontFamily="Geist, sans-serif" letterSpacing="1.2">COMPOUNDING · MoM</text>
      </g>

      {/* Crosshair ticks */}
      <CrosshairTick x={20} y={28} />
      <CrosshairTick x={180} y={28} />
      <CrosshairTick x={20} y={172} />
      <CrosshairTick x={180} y={172} />

      <text x="14" y="194" fontSize="6" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="2">REV · COMPOUND</text>

      {/* Secondary chart strip - CALLS metric */}
      <g transform="translate(40, 174)">
        <text x="0" y="3" fontSize="4" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="1.2">CALLS</text>
        <rect x="18" y="0" width="4" height="4" rx="0.5" fill={INK} opacity="0.18" />
        <rect x="24" y="-1" width="4" height="5" rx="0.5" fill={INK} opacity="0.3" />
        <rect x="30" y="-2" width="4" height="6" rx="0.5" fill={INK} opacity="0.45" />
        <rect x="36" y="-3" width="4" height="7" rx="0.5" fill={INK} opacity="0.6" />
        <rect x="42" y="-5" width="4" height="9" rx="0.5" fill={BRASS} />
        <text x="52" y="3" fontSize="4.5" fontWeight="700" fill={BRASS} fontFamily="Geist, sans-serif">348</text>
        <text x="68" y="3" fontSize="3.5" fill={INK} opacity="0.45" fontFamily="Geist, sans-serif" letterSpacing="0.8">QUALIFIED</text>
        <rect x="92" y="-1" width="4" height="4" rx="0.5" fill={INK} opacity="0.18" />
        <rect x="98" y="-2" width="4" height="5" rx="0.5" fill={INK} opacity="0.3" />
        <rect x="104" y="-3" width="4" height="6" rx="0.5" fill={INK} opacity="0.5" />
        <text x="112" y="3" fontSize="3.5" fill={INK} opacity="0.45" fontFamily="Geist, sans-serif" letterSpacing="0.8">+186%</text>
      </g>

      {/* Forecast band - dashed continuation */}
      <path d="M 151 46 L 168 30" stroke={BRASS} strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.7" />
      <circle cx="168" cy="30" r="2" stroke={BRASS} strokeWidth="0.8" fill="#FFFFFF" />
      <text x="172" y="32" fontSize="4" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1">FORECAST</text>

      {/* Legend */}
      <g transform="translate(38, 14)">
        <rect width="6" height="2" rx="1" fill={BRASS} />
        <text x="10" y="2.2" fontSize="4" fill={INK} opacity="0.6" fontFamily="Geist, sans-serif">REVENUE</text>
        <line x1="40" y1="1" x2="48" y2="1" stroke={BRASS} strokeWidth="1.2" />
        <circle cx="44" cy="1" r="1" fill={BRASS} />
        <text x="52" y="2.2" fontSize="4" fill={INK} opacity="0.6" fontFamily="Geist, sans-serif">TREND</text>
      </g>

      {/* Side annotations - inflection arrow */}
      <g transform="translate(108, 80)">
        <path d="M 0 0 L 8 -6" stroke={INK} strokeWidth="0.5" opacity="0.4" />
        <path d="M 6 -6 L 8 -6 L 8 -4" stroke={INK} strokeWidth="0.5" opacity="0.4" fill="none" strokeLinejoin="round" />
        <text x="10" y="-5" fontSize="3.5" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif">INFLECTION</text>
      </g>

      {/* Comparison baseline (industry avg) */}
      <line x1="36" y1="142" x2="172" y2="142" stroke={INK} strokeWidth="0.5" strokeDasharray="2 4" opacity="0.35" />
      <text x="174" y="143.5" fontSize="3.5" fill={INK} opacity="0.5" fontFamily="Geist, sans-serif">IND</text>

      {/* Goal line dashed */}
      <line x1="36" y1="50" x2="172" y2="50" stroke={BRASS} strokeWidth="0.5" strokeDasharray="2 4" opacity="0.45" />
      <text x="174" y="51.5" fontSize="3.5" fill={BRASS} fontFamily="Geist, sans-serif">GOAL</text>

      {/* Small clock pip top-right */}
      <g transform="translate(186, 28)">
        <circle r="4" stroke={INK} strokeWidth="0.5" fill="#FFFFFF" />
        <line x1="0" y1="-2" x2="0" y2="0" stroke={INK} strokeWidth="0.5" />
        <line x1="0" y1="0" x2="1.5" y2="0" stroke={INK} strokeWidth="0.5" />
      </g>

      {/* Cohort table snippet */}
      <g transform="translate(40, 96)">
        <rect width="80" height="22" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="0.5" opacity="0.55" />
        <rect width="80" height="4" fill={INK} opacity="0.06" />
        <line x1="0" y1="9" x2="80" y2="9" stroke={INK} strokeWidth="0.3" opacity="0.18" />
        <line x1="0" y1="13" x2="80" y2="13" stroke={INK} strokeWidth="0.3" opacity="0.18" />
        <line x1="0" y1="17" x2="80" y2="17" stroke={INK} strokeWidth="0.3" opacity="0.18" />
        <line x1="20" y1="0" x2="20" y2="22" stroke={INK} strokeWidth="0.3" opacity="0.18" />
        <line x1="40" y1="0" x2="40" y2="22" stroke={INK} strokeWidth="0.3" opacity="0.18" />
        <line x1="60" y1="0" x2="60" y2="22" stroke={INK} strokeWidth="0.3" opacity="0.18" />
        <rect x="22" y="10.5" width="6" height="1.4" rx="0.7" fill={BRASS} opacity="0.7" />
        <rect x="42" y="10.5" width="10" height="1.4" rx="0.7" fill={BRASS} opacity="0.8" />
        <rect x="62" y="10.5" width="12" height="1.4" rx="0.7" fill={BRASS} />
        <text x="10" y="2.8" fontSize="2.5" fill={INK} opacity="0.55" textAnchor="middle" fontFamily="Geist, sans-serif">METRIC</text>
        <text x="30" y="2.8" fontSize="2.5" fill={INK} opacity="0.55" textAnchor="middle" fontFamily="Geist, sans-serif">Q3</text>
        <text x="50" y="2.8" fontSize="2.5" fill={INK} opacity="0.55" textAnchor="middle" fontFamily="Geist, sans-serif">Q4</text>
        <text x="70" y="2.8" fontSize="2.5" fill={INK} opacity="0.55" textAnchor="middle" fontFamily="Geist, sans-serif">Q5</text>
        <text x="10" y="11.5" fontSize="2.5" fill={INK} opacity="0.55" textAnchor="middle" fontFamily="Geist, sans-serif">REV</text>
        <text x="10" y="15.5" fontSize="2.5" fill={INK} opacity="0.55" textAnchor="middle" fontFamily="Geist, sans-serif">CALL</text>
        <text x="10" y="19.5" fontSize="2.5" fill={INK} opacity="0.55" textAnchor="middle" fontFamily="Geist, sans-serif">CONV</text>
      </g>

      {/* Floating MoM badge */}
      <g transform="translate(40, 36)">
        <rect width="36" height="8" rx="2" fill={BRASS} />
        <text x="18" y="5.5" fontSize="4" fontWeight="700" fill="#FFFFFF" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="1.4">+24% MoM</text>
      </g>

      {/* Trailing currency markers (cumulative $ floating up) */}
      <g opacity="0.75">
        <text x="56" y="124" fontSize="5" fontWeight="700" fill={BRASS} fontFamily="Geist, sans-serif">$</text>
        <text x="80" y="108" fontSize="5" fontWeight="700" fill={BRASS} fontFamily="Geist, sans-serif">$</text>
        <text x="104" y="84" fontSize="5" fontWeight="700" fill={BRASS} fontFamily="Geist, sans-serif">$</text>
        <text x="128" y="60" fontSize="5" fontWeight="700" fill={BRASS} fontFamily="Geist, sans-serif">$</text>
      </g>

      <CornerBracket x={6} y={6} />
      <CornerBracket x={194} y={6} flipX />
      <CornerBracket x={6} y={194} flipY />
      <CornerBracket x={194} y={194} flipX flipY />
    </svg>
  );
}
