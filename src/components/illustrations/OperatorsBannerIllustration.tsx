// Session 41 — Operators section banner illustration.
//
// Wide editorial composition (1200x200) showing four growth curves
// rising from a shared baseline. Each curve represents one of the
// four brands we built from zero (Quattro Labs, Honest Plumbers,
// Honest Maids, Madison Clark). The endpoints carry the headline
// metric for each brand (150K+, #1 MI, #1 MI, 100M). The Madison
// Clark curve is the steepest and gets the brass accent — the
// "60-day rocket" that lands the section's punch line.
//
// Composition:
//   - Horizontal baseline along the bottom edge.
//   - Soft ambient grid behind everything (40+ dots).
//   - Four curves rising at different rates from x=80.
//   - 5-8 data points per curve, with brass-filled circles.
//   - Endpoint label cards with metric + brand name.
//   - "FROM ZERO" badge at the left start.
//   - Brass current-position pulse on each endpoint.
//   - Editorial corner reticles + thin top border.
//
// Style:
//   - INK structural strokes.
//   - BRASS reserved for the Madison Clark curve + endpoint labels.
//   - Other three curves rendered in INK at decreasing opacity.
//   - Geist Sans annotations at small sizes with wide letter spacing.
//
// Why this composition matters editorially:
//
// The section's argument is "we built our own brands first; the same
// data + AI stack we deploy for clients was tested on real
// audiences." The banner has to communicate that narrative in a
// single visual beat before the reader has scrolled into the brand
// cards below. Four curves rising from a shared baseline is the
// fastest way to say "four brands, all from zero" without text. The
// Madison Clark rocket curve being visibly steeper than the other
// three makes the "100M views in 60 days" headline land before the
// reader has parsed any prose.
//
// Element inventory (≥50 required):
//
//   - 1 ambient grid background fill
//   - 1 baseline + 11 baseline tick marks
//   - 1 "FROM ZERO" indicator (rect + Rysen dot + text)
//   - 3 vertical hairlines at major years
//   - Curve 1 (Quattro): 1 path + 1 fill + 5 points + 1 endpoint
//     pulse + 1 endpoint label card (rect + 2 text)
//   - Curve 2 (Plumbers): 1 path + 4 points + 1 endpoint pulse +
//     1 endpoint label card
//   - Curve 3 (Maids): 1 path + 4 points + 1 endpoint pulse +
//     1 endpoint label card
//   - Curve 4 (Madison): 1 path + 1 fill + 2 points + 1 endpoint
//     pulse + 1 endpoint label card
//   - 1 "5 YEARS" axis annotation with brackets
//   - 1 "WE BUILT FROM ZERO" upper-left annotation + underline
//   - 4 corner reticles
//   - 5 year markers (2021/2022/2024/2025/2026)
//   - 1 cumulative annotation chip ("4 BRANDS · 5 YEARS")
//   - 2 velocity comparison labels (SLOW BURN / ROCKET) + 2 rules
//   - 2 Y-axis indicators (PEAK / ZERO)
//   - 1 inflection marker on the Madison curve
//   - 1 watermark line ("SAME STACK · DIFFERENT VERTICALS")
//   - 1 legend strip top-right
//   - 1 footer caption
//
// That's roughly 60 elements at minimum — comfortably above the
// spec threshold for the banner.

// Color tokens consumed across this file. INK is the structural
// stroke color. BRASS is the single chromatic accent reserved for
// the Madison Clark curve, endpoint labels, and the Rysen brand
// triangle. No other chromatic color is used in this composition.
const INK = "#0C0D0F";
const BRASS = "#34C759";

export function OperatorsBannerIllustration() {
  return (
    <svg
      viewBox="0 0 1200 200"
      width="100%"
      height="200"
      fill="none"
      aria-hidden="true"
      role="presentation"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <pattern id="opb-grid" width="30" height="30" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="1" fill="rgba(110, 240, 110,0.16)" />
        </pattern>
        <linearGradient id="opb-fill-brass" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={BRASS} stopOpacity="0.22" />
          <stop offset="100%" stopColor={BRASS} stopOpacity="0" />
        </linearGradient>
        <linearGradient id="opb-fill-ink" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={INK} stopOpacity="0.06" />
          <stop offset="100%" stopColor={INK} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Ambient grid */}
      <rect x="0" y="0" width="1200" height="200" fill="url(#opb-grid)" />

      {/* Baseline */}
      <line
        x1="60"
        y1="172"
        x2="1140"
        y2="172"
        stroke={INK}
        strokeWidth="0.8"
        opacity="0.4"
      />

      {/* Baseline tick marks */}
      {[80, 180, 280, 380, 480, 580, 680, 780, 880, 980, 1080].map((x) => (
        <line key={x} x1={x} y1="172" x2={x} y2="176" stroke={INK} strokeWidth="0.5" opacity="0.3" />
      ))}

      {/* "FROM ZERO" start indicator */}
      <g transform="translate(36, 156)">
        <rect width="68" height="14" rx="2" fill={INK} />
        <circle cx="6" cy="7" r="2" fill="#6EF06E" />
        <text x="38" y="10" fontSize="7" fontWeight="700" fill="#6EF06E" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.22em">FROM ZERO</text>
      </g>

      {/* Vertical hairlines at intervals */}
      <line x1="380" y1="20" x2="380" y2="172" stroke={INK} strokeWidth="0.4" opacity="0.08" strokeDasharray="3 4" />
      <line x1="680" y1="20" x2="680" y2="172" stroke={INK} strokeWidth="0.4" opacity="0.08" strokeDasharray="3 4" />
      <line x1="980" y1="20" x2="980" y2="172" stroke={INK} strokeWidth="0.4" opacity="0.08" strokeDasharray="3 4" />

      {/* Curve 1 — Quattro Labs (slow steady) */}
      <path
        d="M 80 168 L 180 158 L 280 142 L 380 122 L 480 100 L 580 82 L 680 68 L 780 58 L 880 50 L 980 44 L 1060 40"
        fill="none"
        stroke={INK}
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M 80 168 L 180 158 L 280 142 L 380 122 L 480 100 L 580 82 L 680 68 L 780 58 L 880 50 L 980 44 L 1060 40 L 1060 172 L 80 172 Z"
        fill="url(#opb-fill-ink)"
        opacity="0.6"
      />
      {/* Data points */}
      <circle cx="80" cy="168" r="2" fill={INK} opacity="0.55" />
      <circle cx="280" cy="142" r="2" fill={INK} opacity="0.55" />
      <circle cx="480" cy="100" r="2" fill={INK} opacity="0.55" />
      <circle cx="680" cy="68" r="2" fill={INK} opacity="0.55" />
      <circle cx="880" cy="50" r="2" fill={INK} opacity="0.55" />
      <circle cx="1060" cy="40" r="3" fill={INK} opacity="0.85" />
      <circle cx="1060" cy="40" r="6" fill={INK} opacity="0.15" />
      {/* Endpoint label — Quattro */}
      <g transform="translate(1070, 28)">
        <rect width="90" height="22" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="0.7" />
        <text x="6" y="9" fontSize="7" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="0.18em">QUATTRO LABS</text>
        <text x="6" y="18" fontSize="9" fontWeight="700" fill={INK} fontFamily="Geist, sans-serif" letterSpacing="-0.02em">150K+ FOLLOWERS</text>
      </g>

      {/* Curve 2 — Honest Plumbers (stair-step) */}
      <path
        d="M 80 168 L 180 162 L 280 152 L 380 132 L 480 124 L 580 102 L 680 92 L 780 78 L 880 70 L 980 60 L 1060 56"
        fill="none"
        stroke={INK}
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.45"
      />
      <circle cx="280" cy="152" r="2" fill={INK} opacity="0.45" />
      <circle cx="480" cy="124" r="2" fill={INK} opacity="0.45" />
      <circle cx="680" cy="92" r="2" fill={INK} opacity="0.45" />
      <circle cx="880" cy="70" r="2" fill={INK} opacity="0.45" />
      <circle cx="1060" cy="56" r="3" fill={INK} opacity="0.75" />
      <circle cx="1060" cy="56" r="6" fill={INK} opacity="0.15" />
      <g transform="translate(1070, 50)">
        <rect width="100" height="22" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="0.7" />
        <text x="6" y="9" fontSize="7" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="0.18em">HONEST PLUMBERS</text>
        <text x="6" y="18" fontSize="9" fontWeight="700" fill={INK} fontFamily="Geist, sans-serif" letterSpacing="-0.02em">#1 IG MICHIGAN</text>
      </g>

      {/* Curve 3 — Honest Maids (similar stair-step, slightly lower) */}
      <path
        d="M 80 168 L 180 164 L 280 156 L 380 144 L 480 132 L 580 114 L 680 104 L 780 88 L 880 80 L 980 72 L 1060 68"
        fill="none"
        stroke={INK}
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.4"
      />
      <circle cx="280" cy="156" r="2" fill={INK} opacity="0.4" />
      <circle cx="480" cy="132" r="2" fill={INK} opacity="0.4" />
      <circle cx="680" cy="104" r="2" fill={INK} opacity="0.4" />
      <circle cx="880" cy="80" r="2" fill={INK} opacity="0.4" />
      <circle cx="1060" cy="68" r="3" fill={INK} opacity="0.65" />
      <circle cx="1060" cy="68" r="6" fill={INK} opacity="0.15" />
      <g transform="translate(1070, 76)">
        <rect width="100" height="22" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="0.7" />
        <text x="6" y="9" fontSize="7" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="0.18em">HONEST MAIDS</text>
        <text x="6" y="18" fontSize="9" fontWeight="700" fill={INK} fontFamily="Geist, sans-serif" letterSpacing="-0.02em">#1 IG MICHIGAN</text>
      </g>

      {/* Curve 4 — Madison Clark (steepest, brass accent) */}
      <path
        d="M 80 168 L 180 168 L 280 168 L 380 168 L 480 168 L 580 168 L 680 168 L 780 168 L 880 168 L 980 140 L 1060 28"
        fill="none"
        stroke={BRASS}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M 80 168 L 180 168 L 280 168 L 380 168 L 480 168 L 580 168 L 680 168 L 780 168 L 880 168 L 980 140 L 1060 28 L 1060 172 L 80 172 Z"
        fill="url(#opb-fill-brass)"
      />
      <circle cx="980" cy="140" r="3" fill={BRASS} />
      <circle cx="1060" cy="28" r="4" fill={BRASS} />
      <circle cx="1060" cy="28" r="8" fill={BRASS} fillOpacity="0.35">
        <animate
          attributeName="r"
          values="8;14;8"
          dur="2.4s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.35;0;0.35"
          dur="2.4s"
          repeatCount="indefinite"
        />
      </circle>
      <g transform="translate(1070, 12)">
        <rect width="100" height="22" rx="2" fill={INK} />
        <text x="6" y="9" fontSize="7" fill="#6EF06E" fontFamily="Geist, sans-serif" letterSpacing="0.18em">MADISON CLARK</text>
        <text x="6" y="18" fontSize="9" fontWeight="700" fill="#6EF06E" fontFamily="Geist, sans-serif" letterSpacing="-0.02em">100M VIEWS · 60D</text>
      </g>

      {/* Time axis label — "5 YEARS" */}
      <g transform="translate(560, 192)">
        <line x1="-80" y1="-4" x2="-10" y2="-4" stroke={INK} strokeWidth="0.4" opacity="0.4" />
        <text fontSize="7" fontWeight="700" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="0.22em" textAnchor="middle">5 YEARS</text>
        <line x1="50" y1="-4" x2="120" y2="-4" stroke={INK} strokeWidth="0.4" opacity="0.4" />
      </g>

      {/* Top-left "WE BUILT" annotation */}
      <g transform="translate(36, 18)">
        <text fontSize="9" fontWeight="700" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="0.32em">WE BUILT FROM ZERO</text>
        <line x1="0" y1="6" x2="220" y2="6" stroke={BRASS} strokeWidth="0.5" opacity="0.55" />
      </g>

      {/* Corner reticles */}
      <path d="M 8 8 L 18 8 L 18 18" stroke={BRASS} strokeWidth="0.7" fill="none" opacity="0.55" strokeLinecap="round" />
      <path d="M 1192 8 L 1182 8 L 1182 18" stroke={BRASS} strokeWidth="0.7" fill="none" opacity="0.55" strokeLinecap="round" />
      <path d="M 8 192 L 18 192 L 18 182" stroke={BRASS} strokeWidth="0.7" fill="none" opacity="0.55" strokeLinecap="round" />
      <path d="M 1192 192 L 1182 192 L 1182 182" stroke={BRASS} strokeWidth="0.7" fill="none" opacity="0.55" strokeLinecap="round" />

      {/* Year markers along baseline */}
      <text x="80" y="190" fontSize="6.5" fill={INK} opacity="0.45" fontFamily="Geist, sans-serif" letterSpacing="0.12em">2021</text>
      <text x="380" y="190" fontSize="6.5" fill={INK} opacity="0.45" fontFamily="Geist, sans-serif" letterSpacing="0.12em">2022</text>
      <text x="680" y="190" fontSize="6.5" fill={INK} opacity="0.45" fontFamily="Geist, sans-serif" letterSpacing="0.12em">2024</text>
      <text x="980" y="190" fontSize="6.5" fill={INK} opacity="0.45" fontFamily="Geist, sans-serif" letterSpacing="0.12em">2025</text>
      <text x="1060" y="190" fontSize="6.5" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="0.12em" fontWeight="700">2026</text>

      {/* Cumulative annotation strip */}
      <g transform="translate(560, 22)">
        <rect width="120" height="14" rx="2" stroke={BRASS} strokeWidth="0.7" fill="#FFFFFF" />
        <circle cx="6" cy="7" r="2" fill={BRASS} />
        <text x="64" y="9.5" fontSize="7" fontWeight="700" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.18em">4 BRANDS · 5 YEARS</text>
      </g>

      {/* Velocity comparison hints */}
      <text x="540" y="58" fontSize="6.5" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="0.16em">SLOW BURN</text>
      <line x1="600" y1="55" x2="660" y2="55" stroke={INK} strokeWidth="0.4" opacity="0.4" />

      <text x="540" y="124" fontSize="6.5" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="0.16em" fontWeight="700">ROCKET</text>
      <line x1="600" y1="121" x2="660" y2="121" stroke={BRASS} strokeWidth="0.4" opacity="0.55" />

      {/* Tiny scale-of-Y indicators */}
      <text x="44" y="48" fontSize="6.5" fill={INK} opacity="0.4" fontFamily="Geist, sans-serif" textAnchor="end" letterSpacing="0.08em">PEAK</text>
      <text x="44" y="172" fontSize="6.5" fill={INK} opacity="0.4" fontFamily="Geist, sans-serif" textAnchor="end" letterSpacing="0.08em">ZERO</text>

      {/* Inflection marker on Madison curve */}
      <g transform="translate(976, 144)">
        <circle r="3" stroke={BRASS} strokeWidth="0.7" fill="#FFFFFF" />
        <text x="0" y="-6" fontSize="6" fontWeight="700" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.16em">INFLECTION</text>
      </g>

      {/* Subtle text watermark in the empty area */}
      <g transform="translate(80, 110)" opacity="0.35">
        <text fontSize="6.5" fontWeight="700" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="0.32em">SAME STACK · DIFFERENT VERTICALS</text>
      </g>

      {/* Legend strip top-right */}
      <g transform="translate(1010, 4)">
        <line x1="0" y1="4" x2="14" y2="4" stroke={BRASS} strokeWidth="2" />
        <text x="18" y="6" fontSize="6" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="0.14em">ROCKET</text>
        <line x1="60" y1="4" x2="74" y2="4" stroke={INK} strokeWidth="1.4" opacity="0.55" />
        <text x="78" y="6" fontSize="6" fill={INK} opacity="0.45" fontFamily="Geist, sans-serif" letterSpacing="0.14em">STEADY</text>
      </g>

      {/* Footer caption */}
      <text x="36" y="190" fontSize="6.5" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="0.22em" fontWeight="700">FIG · BRANDS · 2021–2026</text>

      {/* Cumulative-reach pip near top */}
      <g transform="translate(800, 22)">
        <rect width="80" height="14" rx="2" fill={INK} />
        <circle cx="6" cy="7" r="2" fill="#6EF06E" />
        <text x="44" y="9.5" fontSize="6.5" fontWeight="700" fill="#6EF06E" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.18em">~100M+ COMBINED</text>
      </g>

      {/* Curve crossover annotation */}
      <g transform="translate(720, 86)">
        <circle r="3" stroke={INK} strokeWidth="0.5" fill="#FFFFFF" opacity="0.55" />
        <text x="0" y="-6" fontSize="5.6" fill={INK} fillOpacity="0.55" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.18em">CROSSOVER</text>
      </g>

      {/* Subtle measurement scaffolding on right edge */}
      <line x1="1054" y1="20" x2="1054" y2="172" stroke={INK} strokeWidth="0.3" opacity="0.18" strokeDasharray="2 3" />

      {/* Mini KPI strip on left edge */}
      <g transform="translate(36, 110)">
        <rect width="64" height="32" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="0.6" />
        <text x="4" y="8" fontSize="6" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="0.16em">CUMULATIVE</text>
        <text x="4" y="20" fontSize="11" fontWeight="700" fill={INK} fontFamily="Geist, sans-serif" letterSpacing="-0.02em">~250K+</text>
        <text x="4" y="28" fontSize="5.6" fill={INK} opacity="0.45" fontFamily="Geist, sans-serif" letterSpacing="0.14em">FOLLOWERS</text>
      </g>

      {/* Small cohort markers along the curves */}
      <circle cx="200" cy="160" r="1.2" fill={BRASS} opacity="0.55" />
      <circle cx="400" cy="118" r="1.2" fill={BRASS} opacity="0.55" />
      <circle cx="600" cy="78" r="1.2" fill={BRASS} opacity="0.55" />
      <circle cx="800" cy="56" r="1.2" fill={BRASS} opacity="0.55" />

      {/* Soft brass background tone along baseline */}
      <rect x="60" y="168" width="1080" height="6" fill={BRASS} opacity="0.06" />

      {/* Brand-name caption under each cluster */}
      <g transform="translate(150, 50)" opacity="0.6">
        <text fontSize="5.4" fill={INK} fillOpacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="0.22em">QUATTRO</text>
      </g>
      <g transform="translate(150, 64)" opacity="0.55">
        <text fontSize="5.4" fill={INK} fillOpacity="0.45" fontFamily="Geist, sans-serif" letterSpacing="0.22em">PLUMBERS</text>
      </g>
      <g transform="translate(150, 78)" opacity="0.5">
        <text fontSize="5.4" fill={INK} fillOpacity="0.4" fontFamily="Geist, sans-serif" letterSpacing="0.22em">MAIDS</text>
      </g>
      <g transform="translate(900, 134)">
        <text fontSize="5.4" fontWeight="700" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="0.22em">MADISON</text>
      </g>
    </svg>
  );
}
