// Session 39 — Service illustrations.
// Ten hand-coded 200x200 SVGs, one per Rysen service line. Each
// illustrates the service's mechanism rather than its brand: a map for
// local visibility, a directory card for GBP, a citation web for
// authority content, etc. Style mirrors OutcomeIllustrations: ink line
// work, brass accents, dense annotation, no external assets.
//
// Exports (in service-list order, matching TheServices.tsx ordering):
//   1.  LocalVisibilityIllustration
//        Map composition. Pin clusters. Brass for "your firm" pin.
//        Search radius rings. Local 3-pack floating card overlay.
//        Distance bubbles to nearby competitor pins. Route polyline.
//        Compass rose + zoom controls + neighborhood labels for the
//        "actual product UI" feel.
//
//   2.  GBPIllustration
//        Full GBP listing card: header photo, business name, 5.0
//        rating row, Call/Directions/Save/Website buttons, verified
//        badge, hours, address, phone, latest post preview, photo
//        grid, Q&A row, insights metric strip (directions/calls/web).
//
//   3.  AuthorityContentIllustration
//        Document with article structure (eyebrow → H1 → byline →
//        hero photo → H2 with citation marker → paragraph → pull
//        quote in brass → H3 → bulleted list with citation markers →
//        sources footer → outbound source bubbles fanning around the
//        page connected by dashed brass strands). Reading progress
//        bar + word count chip + page numbering + TOC sidebar.
//
//   4.  AISearchIllustration
//        Knowledge-graph composition. Central brass node (your firm).
//        Inner ring of 6 connected concept nodes. Outer ring of 8
//        secondary nodes. Far ring of 8 dim tertiary nodes. Embedding
//        vector strip showing dimensions = 1536 with brass-tinted
//        feature columns. "Cited #1" overlay. Floating answer card
//        with bulleted highlights. Token meter showing 4,812 used.
//
//   5.  ReputationIllustration
//        Live review feed. Aggregate score card showing 5.0 across
//        487 reviews with a 90-day trend sparkline. Two individual
//        review cards each with avatar, 5-star rating, body lines,
//        timestamp, and a "REPLIED" badge. Owner reply ribbon. Side
//        sentiment chart + reply/flag/dispute metrics + rating
//        distribution histogram + review-platform tabs.
//
//   6.  WebsiteConversionIllustration
//        Landing page wireframe inside browser chrome. Annotated A-F
//        conversion elements (hero CTA, proof bar, trust badges,
//        form, submit, sticky bar) with pinpoint dots, lines, and
//        right-side annotation panel. A/B variant indicator. Live
//        visitor count. Heatmap overlay on the hero CTA. Scroll
//        depth indicator. Bottom conversion-rate meter.
//
//   7.  PressIllustration
//        Editorial paper stack. Back paper rotated -4°, front paper
//        with masthead ribbon, large title, byline + date, two-column
//        layout with photo on left and dense body text right, brass
//        pull-quote bar. Trophy medallion in brass. "Featured In"
//        logos strip + backlinks counter + edition number + related
//        pieces row + Twitter share counter + editor mark.
//
//   8.  SchemaIllustration
//        Code editor with traffic-light chrome and dark theme. Line
//        numbers gutter. JSON-LD body with brass attribute keys, blue
//        string values, yellow numeric values. Validated badge.
//        Cursor highlight on active line. Validator results panel
//        showing 7 PASS · 1 WARN across schema fields. Tab strip
//        with .json (active), .tsx, .html.
//
//   9.  EmailIllustration
//        Inbox view. Left sidebar with active "Campaigns" item, then
//        Drafts/Sent/Templates/Archive items, segment list. Center
//        pane shows the open email: avatar, subject, body block, CTA
//        button. Bottom metrics card showing OPEN 68% / CLICK 24% /
//        REPLY 9%. Footer tag. Send-time + recipient count strip +
//        7-day engagement timeline.
//
//  10.  SocialIllustration
//        Three platform mockups (Instagram square card, TikTok
//        portrait card with brass border, X post card). Each shows
//        a real-ish post with engagement metrics. Aggregate strip
//        below with REACH/FOLLOWERS/SHARE-RATE + mini trend
//        sparkline. Trending hashtags row. Top-performing-post
//        badge. Cadence chart strip + bottom credibility tag.
//
// Composition rules:
//   - Single brass accent per illustration (no chromatic noise).
//   - Corner reticles via the Reticles helper for editorial framing.
//   - Geist Sans annotation text with wide letterspacing ("technical
//     print" tone). Never serif. Never italic.
//   - All glyphs hand-coded inline. No icon libs. No external assets.
//   - Animations gate on prefers-reduced-motion via global CSS.
//
// Sizing: rendered around 80-120px tall inside service cards. At those
// sizes only the silhouette + brass focal point register sharply, but
// the dense scaffold reads as "instrumented" rather than illustrative.
// Per-illustration element counts hover in the 40-60 range so every
// scene contains enough structural noise to feel like a real product.
//
// Why not photographs: the spec for Session 39 explicitly bans
// atmospheric photos. Illustrations are the load-bearing visual layer
// of this redesign — they earn the "instrument cluster" feel that
// Ramp/Linear/Vercel get from their custom isometric work, but in a
// 2D editorial style appropriate for a firm-services brand.
//
// Performance: each SVG is ~200 lines of inline JSX. With 10 services
// + 5 outcomes + 2 verticals rendered on the homepage, total inline
// SVG is large but trivially compressible. We accept the bundle hit
// because none of these illustrations would be tractable to author as
// raster (no good source) and bringing in an icon set would dilute the
// brand-specific feel.
//
// Color tokens used across the file (kept here for fast review):
//   INK   = #0C0D0F — primary ink, all strokes, headline text
//   BRASS = #34C759 — single accent per illustration, highlights,
//                     callouts, the "your firm" beat
//   #6EF06E        — signal yellow, used only inside brass blocks to
//                     pull eye to the most important data point (the
//                     "5.0" rating digits, "+1" badge counters, etc.)
//   #F6B73C        — review stars only — kept distinct from brass so
//                     star ratings read as a real product affordance
//   #7CB7FF        — JSON-LD string values in SchemaIllustration only
//   #10A37F        — ChatGPT logo only (PlatformGallery owns the rest
//                     of the platform-color tokens; we reuse only what
//                     these illustrations actually need)
//
// Accessibility:
//   - Every <svg> has aria-hidden="true" role="presentation" because
//     the *surrounding card* contains the real heading and copy. The
//     illustration is decorative; meaning lives outside it.
//   - prefers-reduced-motion suppresses <animate>/<animateMotion>
//     globally through the rule appended to globals.css this session.
//
// Naming convention: every export ends with "Illustration" so call
// sites can import unambiguously, e.g.:
//     import { LocalVisibilityIllustration } from
//       "@/components/illustrations/ServiceIllustrations";
//
// Consuming components (Session 39):
//   src/components/sections/TheServices.tsx
// Each service card calls one illustration, sized via the parent's
// .service-card__illustration container in globals.css.
//
// Future drop-ins: if a new service line is added, follow the existing
// pattern — same viewBox, same Reticles call at the end, single brass
// accent, no chromatic explosion. Keep the file scrolling at this
// density so the visual language stays consistent.

const INK = "#0C0D0F";
const BRASS = "#34C759";

function CornerBracket({ x, y, flipX = false, flipY = false }: { x: number; y: number; flipX?: boolean; flipY?: boolean }) {
  const sx = flipX ? -1 : 1;
  const sy = flipY ? -1 : 1;
  return (
    <g transform={`translate(${x},${y}) scale(${sx},${sy})`}>
      <path d="M 0 8 L 0 0 L 8 0" stroke={BRASS} strokeWidth="1" fill="none" opacity="0.55" strokeLinecap="round" />
    </g>
  );
}

function Reticles() {
  return (
    <>
      <CornerBracket x={6} y={6} />
      <CornerBracket x={194} y={6} flipX />
      <CornerBracket x={6} y={194} flipY />
      <CornerBracket x={194} y={194} flipX flipY />
    </>
  );
}

// =====================================================================
// 1) LOCAL VISIBILITY
// City map with pin clusters, your firm marked in brass, three-pack
// hovering above. Distance rings and a search radius.
// =====================================================================

export function LocalVisibilityIllustration() {
  return (
    <svg viewBox="0 0 200 200" width="200" height="200" fill="none" aria-hidden="true" role="presentation">
      <defs>
        <pattern id="si-loc-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" stroke="rgba(12, 13, 15,0.06)" strokeWidth="0.4" fill="none" />
        </pattern>
        <radialGradient id="si-loc-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(110, 240, 110,0.25)" />
          <stop offset="100%" stopColor="rgba(110, 240, 110,0)" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="200" height="200" fill="#FAFBFC" />
      <rect x="0" y="0" width="200" height="200" fill="url(#si-loc-grid)" />

      {/* Map roads */}
      <path d="M 18 60 L 182 60" stroke={INK} strokeWidth="2" opacity="0.18" />
      <path d="M 18 110 L 182 110" stroke={INK} strokeWidth="2" opacity="0.18" />
      <path d="M 18 150 L 182 150" stroke={INK} strokeWidth="1.4" opacity="0.14" />
      <path d="M 50 22 L 50 178" stroke={INK} strokeWidth="2" opacity="0.18" />
      <path d="M 100 22 L 100 178" stroke={INK} strokeWidth="2" opacity="0.18" />
      <path d="M 150 22 L 150 178" stroke={INK} strokeWidth="1.4" opacity="0.14" />

      {/* Curved highway */}
      <path d="M 22 80 Q 80 130 178 90" stroke={INK} strokeWidth="1.5" opacity="0.22" fill="none" />
      <path d="M 22 80 Q 80 130 178 90" stroke={INK} strokeWidth="1.5" opacity="0.22" fill="none" strokeDasharray="3 4" />

      {/* Search radius glow */}
      <circle cx="100" cy="100" r="56" fill="url(#si-loc-glow)" />
      <circle cx="100" cy="100" r="56" stroke={BRASS} strokeWidth="0.8" strokeDasharray="3 4" fill="none" opacity="0.5" />
      <circle cx="100" cy="100" r="36" stroke={BRASS} strokeWidth="0.6" strokeDasharray="3 3" fill="none" opacity="0.4" />
      <circle cx="100" cy="100" r="20" stroke={BRASS} strokeWidth="0.5" strokeDasharray="2 3" fill="none" opacity="0.3" />

      {/* Competitor pins (faded) */}
      <g opacity="0.5">
        <path d="M 60 70 Q 60 64 64 64 Q 68 64 68 70 L 64 78 Z" fill={INK} />
        <circle cx="64" cy="68" r="1.6" fill="#FFFFFF" />
        <text x="74" y="71" fontSize="4" fill={INK} fontFamily="Geist, sans-serif" opacity="0.65">Firm B</text>
      </g>
      <g opacity="0.4">
        <path d="M 140 80 Q 140 74 144 74 Q 148 74 148 80 L 144 88 Z" fill={INK} />
        <circle cx="144" cy="78" r="1.6" fill="#FFFFFF" />
        <text x="124" y="73" fontSize="4" fill={INK} fontFamily="Geist, sans-serif" opacity="0.55" textAnchor="end">Firm C</text>
      </g>
      <g opacity="0.35">
        <path d="M 56 132 Q 56 126 60 126 Q 64 126 64 132 L 60 140 Z" fill={INK} />
        <circle cx="60" cy="130" r="1.6" fill="#FFFFFF" />
      </g>
      <g opacity="0.3">
        <path d="M 144 140 Q 144 134 148 134 Q 152 134 152 140 L 148 148 Z" fill={INK} />
        <circle cx="148" cy="138" r="1.6" fill="#FFFFFF" />
      </g>
      <g opacity="0.4">
        <path d="M 132 158 Q 132 152 136 152 Q 140 152 140 158 L 136 166 Z" fill={INK} />
        <circle cx="136" cy="156" r="1.6" fill="#FFFFFF" />
      </g>

      {/* Your firm pin (brass, larger) */}
      <g>
        <path d="M 90 96 Q 90 84 100 84 Q 110 84 110 96 L 100 112 Z" fill={BRASS} />
        <circle cx="100" cy="94" r="3" fill="#FFFFFF" />
        <polygon points="98,92 102,92 98,96" fill="#6EF06E" />
      </g>
      <ellipse cx="100" cy="116" rx="8" ry="2" fill={INK} opacity="0.18" />

      {/* Pin pulse */}
      <circle cx="100" cy="94" r="6" stroke={BRASS} strokeWidth="0.8" fill="none">
        <animate attributeName="r" values="6;14;6" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0;0.7" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* 3-pack floating card */}
      <g transform="translate(20, 20)">
        <rect width="80" height="32" rx="3" fill="#FFFFFF" stroke={INK} strokeWidth="0.8" />
        <text x="4" y="6" fontSize="3.5" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="1.2">LOCAL PACK · 3 OF 3</text>

        <g transform="translate(4, 10)">
          <circle cx="2.5" cy="3" r="2.5" fill={BRASS} />
          <text x="2.5" y="4" fontSize="3.4" fontWeight="700" fill="#6EF06E" textAnchor="middle" fontFamily="Geist, sans-serif">1</text>
          <rect x="8" y="0" width="34" height="1.4" rx="0.7" fill={INK} opacity="0.7" />
          <rect x="8" y="3" width="42" height="1.2" rx="0.6" fill={INK} opacity="0.45" />
          <g transform="translate(58, 1)">
            <polygon points="0,2 0.6,0.6 1.2,2 2.4,2 1.5,3 1.8,4.2 1,3.4 0.2,4.2 0.5,3 -0.4,2" fill="#F6B73C" />
            <polygon points="3.2,2 3.8,0.6 4.4,2 5.6,2 4.7,3 5,4.2 4,3.4 3,4.2 3.3,3 2.4,2" fill="#F6B73C" />
            <polygon points="6.4,2 7,0.6 7.6,2 8.8,2 7.9,3 8.2,4.2 7,3.4 6,4.2 6.3,3 5.4,2" fill="#F6B73C" />
            <polygon points="9.6,2 10.2,0.6 10.8,2 12,2 11.1,3 11.4,4.2 10,3.4 9,4.2 9.3,3 8.4,2" fill="#F6B73C" />
            <polygon points="12.8,2 13.4,0.6 14,2 15.2,2 14.3,3 14.6,4.2 13,3.4 12,4.2 12.3,3 11.6,2" fill="#F6B73C" />
          </g>
        </g>

        <g transform="translate(4, 18)" opacity="0.4">
          <circle cx="2.5" cy="3" r="2.5" stroke={INK} strokeWidth="0.6" fill="none" />
          <text x="2.5" y="4" fontSize="3.4" fill={INK} textAnchor="middle" fontFamily="Geist, sans-serif">2</text>
          <rect x="8" y="0" width="30" height="1.4" rx="0.7" fill={INK} opacity="0.7" />
          <rect x="8" y="3" width="38" height="1.2" rx="0.6" fill={INK} opacity="0.45" />
        </g>

        <g transform="translate(4, 26)" opacity="0.3">
          <circle cx="2.5" cy="3" r="2.5" stroke={INK} strokeWidth="0.6" fill="none" />
          <text x="2.5" y="4" fontSize="3.4" fill={INK} textAnchor="middle" fontFamily="Geist, sans-serif">3</text>
          <rect x="8" y="0" width="26" height="1.4" rx="0.7" fill={INK} opacity="0.7" />
          <rect x="8" y="3" width="34" height="1.2" rx="0.6" fill={INK} opacity="0.45" />
        </g>
      </g>

      {/* Direction marker */}
      <g transform="translate(150, 20)">
        <rect width="40" height="14" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="0.7" />
        <polygon points="4,7 9,3 9,11" fill={BRASS} />
        <rect x="14" y="3" width="22" height="2" rx="1" fill={INK} opacity="0.65" />
        <rect x="14" y="7" width="18" height="1.4" rx="0.7" fill={INK} opacity="0.4" />
        <rect x="14" y="10" width="14" height="1.2" rx="0.6" fill={INK} opacity="0.3" />
      </g>

      {/* Bottom radius callout */}
      <g transform="translate(18, 184)">
        <text fontSize="3.5" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="1.4">RADIUS · 8 mi · TAMPA</text>
        <line x1="60" y1="-1.5" x2="80" y2="-1.5" stroke={BRASS} strokeWidth="0.8" />
        <circle cx="60" cy="-1.5" r="0.8" fill={BRASS} />
        <circle cx="80" cy="-1.5" r="0.8" fill={BRASS} />
      </g>

      {/* Compass + scale */}
      <g transform="translate(180, 178)">
        <circle r="6" stroke={INK} strokeWidth="0.5" fill="#FFFFFF" />
        <polygon points="0,-4 1,0 -1,0" fill={BRASS} />
        <polygon points="0,4 1,0 -1,0" fill={INK} opacity="0.5" />
        <text fontSize="3" fill={INK} y="-6.5" textAnchor="middle" fontFamily="Geist, sans-serif">N</text>
      </g>

      {/* Map blocks — parks, water bodies */}
      <rect x="22" y="22" width="22" height="14" rx="1" fill={INK} opacity="0.06" />
      <text x="33" y="30" fontSize="3" fill={INK} opacity="0.4" textAnchor="middle" fontFamily="Geist, sans-serif">PARK</text>
      <rect x="156" y="22" width="22" height="14" rx="1" fill={INK} opacity="0.06" />
      <rect x="22" y="164" width="22" height="14" rx="1" fill={INK} opacity="0.06" />
      <rect x="156" y="164" width="22" height="14" rx="1" fill={INK} opacity="0.06" />

      {/* River line */}
      <path d="M 12 124 Q 60 140 100 130 Q 140 122 188 138" stroke="#7CB7FF" strokeWidth="2" opacity="0.25" fill="none" />
      <path d="M 12 124 Q 60 140 100 130 Q 140 122 188 138" stroke={INK} strokeWidth="0.4" opacity="0.18" fill="none" />

      {/* Route polyline from your pin to a customer pin */}
      <path d="M 100 112 L 100 130 L 140 130 L 140 156 L 136 156" stroke={BRASS} strokeWidth="1.2" fill="none" strokeDasharray="3 3" />
      <circle cx="100" cy="112" r="1.2" fill={BRASS} />
      <circle cx="136" cy="156" r="1.6" fill={BRASS} />

      {/* Distance bubble */}
      <g transform="translate(118, 142)">
        <rect width="18" height="8" rx="4" fill={INK} />
        <text x="9" y="5.5" fontSize="4" fontWeight="700" fill="#6EF06E" textAnchor="middle" fontFamily="Geist, sans-serif">2.4mi</text>
      </g>

      {/* Mini insets — neighborhood labels */}
      <text x="40" y="100" fontSize="3" fill={INK} opacity="0.4" fontFamily="Geist, sans-serif" letterSpacing="1">HYDE PARK</text>
      <text x="158" y="100" fontSize="3" fill={INK} opacity="0.4" fontFamily="Geist, sans-serif" letterSpacing="1" textAnchor="end">YBOR</text>
      <text x="100" y="64" fontSize="3" fill={INK} opacity="0.4" fontFamily="Geist, sans-serif" letterSpacing="1" textAnchor="middle">DOWNTOWN</text>

      {/* Top-right rank delta */}
      <g transform="translate(150, 156)">
        <rect width="30" height="14" rx="2" fill="#FFFFFF" stroke={BRASS} strokeWidth="0.7" />
        <polygon points="3,8 5,4 7,8" fill={BRASS} />
        <text x="15" y="6" fontSize="3.4" fontWeight="700" fill={INK} fontFamily="Geist, sans-serif">+5 RANK</text>
        <text x="15" y="11" fontSize="3" fill={INK} opacity="0.5" fontFamily="Geist, sans-serif">vs 90 days</text>
      </g>

      {/* Zoom control */}
      <g transform="translate(176, 50)">
        <rect width="10" height="20" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="0.5" />
        <text x="5" y="7" fontSize="6" fontWeight="700" fill={INK} textAnchor="middle" fontFamily="Geist, sans-serif">+</text>
        <line x1="2" y1="10" x2="8" y2="10" stroke={INK} strokeWidth="0.4" opacity="0.4" />
        <text x="5" y="16" fontSize="6" fontWeight="700" fill={INK} textAnchor="middle" fontFamily="Geist, sans-serif">−</text>
      </g>

      {/* User location pulse */}
      <g transform="translate(78, 142)">
        <circle r="3" fill="#7CB7FF" opacity="0.45" />
        <circle r="1.4" fill="#4285F4" stroke="#FFFFFF" strokeWidth="0.6" />
      </g>

      {/* Floating traffic card */}
      <g transform="translate(8, 102)">
        <rect width="30" height="18" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="0.7" />
        <text x="3" y="4" fontSize="2.6" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1">TRAFFIC</text>
        <g transform="translate(3, 6)">
          <rect width="3" height="3" rx="0.5" fill="#28C840" />
          <rect x="4" width="3" height="3" rx="0.5" fill="#FEBC2E" />
          <rect x="8" width="3" height="3" rx="0.5" fill="#FF5F57" />
        </g>
        <text x="3" y="14" fontSize="2.6" fontWeight="700" fill={INK} fontFamily="Geist, sans-serif">CLEAR</text>
        <text x="14" y="14" fontSize="2.4" fill={INK} opacity="0.5" fontFamily="Geist, sans-serif">5 min eta</text>
      </g>

      {/* "Saves" bookmark counter */}
      <g transform="translate(8, 76)">
        <rect width="30" height="10" rx="2" fill={INK} />
        <polygon points="3,2 8,2 8,8 5.5,6 3,8" fill="#6EF06E" />
        <text x="14" y="6" fontSize="2.6" fill="#6EF06E" fontFamily="Geist, sans-serif" letterSpacing="1">SAVED</text>
        <text x="14" y="9" fontSize="3" fontWeight="700" fill="#FFFFFF" fontFamily="Geist, sans-serif">1.2K</text>
      </g>

      {/* Public transit dotted route */}
      <g opacity="0.45">
        <circle cx="22" cy="174" r="1.2" fill="#7CB7FF" />
        <line x1="22" y1="174" x2="178" y2="174" stroke="#7CB7FF" strokeWidth="0.6" strokeDasharray="3 4" />
        <circle cx="178" cy="174" r="1.2" fill="#7CB7FF" />
      </g>

      <Reticles />
    </svg>
  );
}

// =====================================================================
// 2) GOOGLE BUSINESS PROFILE
// A GBP listing card with photos, rating, hours, posts.
// =====================================================================

export function GBPIllustration() {
  return (
    <svg viewBox="0 0 200 200" width="200" height="200" fill="none" aria-hidden="true" role="presentation">
      <rect x="0" y="0" width="200" height="200" fill="#FAFBFC" />
      {/* Card frame */}
      <rect x="16" y="16" width="168" height="168" rx="4" fill="#FFFFFF" stroke={INK} strokeWidth="1" />

      {/* Header photo */}
      <rect x="16" y="16" width="168" height="44" fill="#F1F3F4" />
      <polygon points="20,60 60,40 100,52 140,30 184,46 184,60" fill={INK} opacity="0.18" />
      <polygon points="50,60 86,46 130,56 184,42 184,60" fill={INK} opacity="0.12" />
      <circle cx="160" cy="32" r="6" fill={BRASS} opacity="0.7" />
      <circle cx="160" cy="32" r="3" fill="#6EF06E" />
      {/* Camera count chip */}
      <g transform="translate(154, 50)">
        <rect width="26" height="8" rx="4" fill={INK} fillOpacity="0.85" />
        <rect x="3" y="3" width="3" height="2" rx="0.4" stroke="#FFFFFF" strokeWidth="0.5" fill="none" />
        <circle cx="4.5" cy="4" r="0.5" fill="#FFFFFF" />
        <text x="14" y="5.5" fontSize="3.5" fill="#FFFFFF" fontFamily="Geist, sans-serif">+ 248 photos</text>
      </g>

      {/* Title row */}
      <text x="24" y="74" fontSize="9" fontWeight="700" fill={INK} fontFamily="Geist, sans-serif">AWS Law Firm</text>
      <rect x="24" y="80" width="92" height="2" rx="1" fill={INK} opacity="0.45" />
      <rect x="24" y="84" width="64" height="1.6" rx="0.8" fill={INK} opacity="0.3" />

      {/* Rating */}
      <g transform="translate(24, 90)">
        <text fontSize="6" fontWeight="700" fill={INK} fontFamily="Geist, sans-serif" y="4">5.0</text>
        <g transform="translate(12, 1)">
          <polygon points="0,3 1,1 2,3 4,3 2.5,4.5 3,7 1,5.5 -1,7 -0.5,4.5 -2,3" fill="#F6B73C" />
          <polygon points="6,3 7,1 8,3 10,3 8.5,4.5 9,7 7,5.5 5,7 5.5,4.5 4,3" fill="#F6B73C" />
          <polygon points="12,3 13,1 14,3 16,3 14.5,4.5 15,7 13,5.5 11,7 11.5,4.5 10,3" fill="#F6B73C" />
          <polygon points="18,3 19,1 20,3 22,3 20.5,4.5 21,7 19,5.5 17,7 17.5,4.5 16,3" fill="#F6B73C" />
          <polygon points="24,3 25,1 26,3 28,3 26.5,4.5 27,7 25,5.5 23,7 23.5,4.5 22,3" fill="#F6B73C" />
        </g>
        <text x="44" y="4" fontSize="3.5" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif">487 reviews</text>
      </g>

      {/* Buttons row */}
      <g transform="translate(24, 102)">
        <rect width="32" height="12" rx="6" fill={BRASS} />
        <rect x="6" y="5" width="20" height="2" rx="1" fill="#FFFFFF" />
        <rect x="36" width="32" height="12" rx="6" stroke={INK} strokeWidth="0.7" fill="#FFFFFF" />
        <rect x="42" y="5" width="20" height="2" rx="1" fill={INK} opacity="0.7" />
        <rect x="72" width="32" height="12" rx="6" stroke={INK} strokeWidth="0.7" fill="#FFFFFF" />
        <rect x="78" y="5" width="20" height="2" rx="1" fill={INK} opacity="0.7" />
        <rect x="108" width="32" height="12" rx="6" stroke={INK} strokeWidth="0.7" fill="#FFFFFF" />
        <rect x="114" y="5" width="20" height="2" rx="1" fill={INK} opacity="0.7" />
      </g>

      {/* Verified badge */}
      <g transform="translate(150, 90)">
        <circle r="4" fill={BRASS} />
        <path d="M -1.5 0 L -0.5 1.5 L 1.8 -1" stroke="#FFFFFF" strokeWidth="0.9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <text x="160" y="92" fontSize="3.5" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif">VERIFIED</text>

      {/* Hours */}
      <g transform="translate(24, 124)">
        <circle r="3" stroke={INK} strokeWidth="0.7" fill="none" />
        <line x1="0" y1="-1.8" x2="0" y2="0" stroke={INK} strokeWidth="0.6" />
        <line x1="0" y1="0" x2="1.4" y2="0" stroke={INK} strokeWidth="0.6" />
        <text x="6" y="1.5" fontSize="4" fill={INK} fontFamily="Geist, sans-serif">Open · Closes 6PM</text>
        <text x="6" y="6" fontSize="3.4" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif">Mon–Fri 8AM–6PM · Sat by appt.</text>
      </g>

      {/* Address */}
      <g transform="translate(24, 138)">
        <path d="M 0 -1 Q 0 -4 3 -4 Q 6 -4 6 -1 L 3 4 Z" fill={INK} opacity="0.7" />
        <circle cx="3" cy="-1.5" r="1" fill="#FFFFFF" />
        <text x="10" y="1.5" fontSize="4" fill={INK} fontFamily="Geist, sans-serif">200 N Tampa St · Tampa, FL</text>
      </g>

      {/* Phone */}
      <g transform="translate(24, 150)">
        <path d="M 0 -1 Q 0 -3 2 -3 L 3 -3 Q 4 -3 4 -2 L 4 -1 Q 4 0 3 0 Q 4 3 6 3 Q 6 2 7 2 L 8 2 Q 9 2 9 3 L 9 5 Q 9 6 8 6 Q 2 6 0 0 Z" fill={INK} opacity="0.7" />
        <text x="13" y="3" fontSize="4" fill={INK} fontFamily="Geist, sans-serif">(813) 555-0142</text>
      </g>

      {/* Post preview */}
      <g transform="translate(24, 158)">
        <rect width="152" height="20" rx="2" stroke={INK} strokeWidth="0.5" fill="#FAFAFA" />
        <rect x="4" y="3" width="14" height="14" rx="1" fill={BRASS} opacity="0.18" />
        <polygon points="8,7 14,7 8,13" fill={BRASS} />
        <text x="22" y="7" fontSize="3.4" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="1">NEW POST · 2d ago</text>
        <rect x="22" y="9" width="100" height="1.6" rx="0.8" fill={INK} opacity="0.6" />
        <rect x="22" y="12.5" width="120" height="1.4" rx="0.7" fill={INK} opacity="0.4" />
        <rect x="22" y="15.5" width="80" height="1.4" rx="0.7" fill={INK} opacity="0.3" />
      </g>

      {/* Q&A / Reviews tags */}
      <g transform="translate(24, 182)">
        <text fontSize="3.5" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1.4">GBP · OPTIMIZED · UPDATED 14 DAYS</text>
      </g>

      {/* Service categories chips */}
      <g transform="translate(120, 92)">
        <rect width="28" height="6" rx="3" stroke={INK} strokeWidth="0.4" fill="#FAFAFA" />
        <text x="14" y="4" fontSize="2.8" fill={INK} opacity="0.55" textAnchor="middle" fontFamily="Geist, sans-serif">Probate</text>
      </g>
      <g transform="translate(120, 100)">
        <rect width="28" height="6" rx="3" stroke={INK} strokeWidth="0.4" fill="#FAFAFA" />
        <text x="14" y="4" fontSize="2.8" fill={INK} opacity="0.55" textAnchor="middle" fontFamily="Geist, sans-serif">Estate</text>
      </g>
      <g transform="translate(120, 108)">
        <rect width="28" height="6" rx="3" stroke={INK} strokeWidth="0.4" fill="#FAFAFA" />
        <text x="14" y="4" fontSize="2.8" fill={INK} opacity="0.55" textAnchor="middle" fontFamily="Geist, sans-serif">Trust</text>
      </g>

      {/* Q&A row */}
      <g transform="translate(24, 116)">
        <rect width="152" height="14" rx="2" stroke={INK} strokeWidth="0.5" fill="#FAFAFA" opacity="0.7" />
        <text x="4" y="5" fontSize="3" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1.2">Q&amp;A · 18 ANSWERED</text>
        <rect x="4" y="7" width="120" height="1.4" rx="0.7" fill={INK} opacity="0.5" />
        <rect x="4" y="10.5" width="98" height="1.2" rx="0.6" fill={INK} opacity="0.35" />
      </g>

      {/* Photo grid mini */}
      <g transform="translate(150, 116)">
        <rect width="6" height="6" rx="1" fill={INK} opacity="0.18" />
        <rect x="8" width="6" height="6" rx="1" fill={INK} opacity="0.18" />
        <rect x="16" width="6" height="6" rx="1" fill={INK} opacity="0.18" />
        <rect y="8" width="6" height="6" rx="1" fill={INK} opacity="0.18" />
        <rect x="8" y="8" width="6" height="6" rx="1" fill={BRASS} opacity="0.65" />
        <rect x="16" y="8" width="6" height="6" rx="1" fill={INK} opacity="0.18" />
      </g>

      {/* Insights metric strip */}
      <g transform="translate(24, 144)">
        <text fontSize="3" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="1.2">GBP INSIGHTS · 90D</text>
        <g transform="translate(0, 4)">
          <text fontSize="6" fontWeight="700" fill={INK} fontFamily="Geist, sans-serif">2.4K</text>
          <text x="0" y="4" fontSize="2.8" fill={INK} opacity="0.5" fontFamily="Geist, sans-serif">DIRECTION</text>
        </g>
        <g transform="translate(40, 4)">
          <text fontSize="6" fontWeight="700" fill={INK} fontFamily="Geist, sans-serif">1.8K</text>
          <text x="0" y="4" fontSize="2.8" fill={INK} opacity="0.5" fontFamily="Geist, sans-serif">CALLS</text>
        </g>
        <g transform="translate(80, 4)">
          <text fontSize="6" fontWeight="700" fill={INK} fontFamily="Geist, sans-serif">684</text>
          <text x="0" y="4" fontSize="2.8" fill={INK} opacity="0.5" fontFamily="Geist, sans-serif">WEBSITE</text>
        </g>
        <g transform="translate(120, 4)">
          <text fontSize="6" fontWeight="700" fill={BRASS} fontFamily="Geist, sans-serif">+38%</text>
          <text x="0" y="4" fontSize="2.8" fill={BRASS} fontFamily="Geist, sans-serif">vs IND</text>
        </g>
      </g>

      {/* Suggested edit pending banner */}
      <g transform="translate(24, 165)">
        <rect width="152" height="10" rx="2" fill="#FFFCE6" stroke="#6EF06E" strokeWidth="0.6" />
        <circle cx="6" cy="5" r="2" fill={BRASS} />
        <text x="6" y="6.2" fontSize="2.6" fontWeight="700" fill="#6EF06E" textAnchor="middle" fontFamily="Geist, sans-serif">!</text>
        <text x="12" y="6.2" fontSize="2.8" fill={INK} fontFamily="Geist, sans-serif" letterSpacing="0.6">2 suggested edits pending owner approval</text>
        <rect x="124" y="2.5" width="22" height="5" rx="2.5" fill={BRASS} />
        <text x="135" y="6" fontSize="2.4" fontWeight="700" fill="#FFFFFF" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="0.8">REVIEW</text>
      </g>

      {/* Verified attributes pills */}
      <g transform="translate(118, 102)">
        <rect width="26" height="4" rx="2" fill={INK} fillOpacity="0.06" />
        <circle cx="3" cy="2" r="1" fill={BRASS} />
        <text x="6" y="2.8" fontSize="2.2" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif">Wheelchair</text>
        <rect y="5" width="26" height="4" rx="2" fill={INK} fillOpacity="0.06" />
        <circle cx="3" cy="7" r="1" fill={BRASS} />
        <text x="6" y="7.8" fontSize="2.2" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif">Wi-Fi</text>
        <rect y="10" width="26" height="4" rx="2" fill={INK} fillOpacity="0.06" />
        <circle cx="3" cy="12" r="1" fill={BRASS} />
        <text x="6" y="12.8" fontSize="2.2" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif">Free Estimates</text>
      </g>

      <Reticles />
    </svg>
  );
}

// =====================================================================
// 3) AUTHORITY CONTENT
// A page with hierarchical headings, inline citations, source links
// fanning out. Brass highlights on the cited blocks.
// =====================================================================

export function AuthorityContentIllustration() {
  return (
    <svg viewBox="0 0 200 200" width="200" height="200" fill="none" aria-hidden="true" role="presentation">
      <rect x="0" y="0" width="200" height="200" fill="#FAFBFC" />

      {/* Document */}
      <rect x="38" y="18" width="124" height="164" rx="3" fill="#FFFFFF" stroke={INK} strokeWidth="0.9" />

      {/* Header eyebrow */}
      <rect x="46" y="26" width="32" height="2" rx="1" fill={BRASS} />
      <rect x="46" y="32" width="80" height="3" rx="1.5" fill={INK} />
      <rect x="46" y="38" width="60" height="3" rx="1.5" fill={INK} opacity="0.85" />

      {/* Byline */}
      <rect x="46" y="48" width="36" height="1.4" rx="0.7" fill={INK} opacity="0.5" />
      <rect x="46" y="52" width="42" height="1.2" rx="0.6" fill={INK} opacity="0.35" />

      {/* Hero image placeholder */}
      <rect x="46" y="58" width="108" height="22" fill={INK} opacity="0.08" />
      <polygon points="46,80 70,68 92,76 116,62 142,72 154,68 154,80" fill={INK} opacity="0.18" />
      <circle cx="142" cy="64" r="3" fill={BRASS} opacity="0.6" />

      {/* H2 with cite */}
      <rect x="46" y="88" width="46" height="2.4" rx="1.2" fill={INK} />
      <g transform="translate(94, 86)">
        <rect width="10" height="4" rx="1" fill={BRASS} fillOpacity="0.18" stroke={BRASS} strokeWidth="0.5" />
        <text x="5" y="3" fontSize="2.6" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif">[1]</text>
      </g>

      {/* Paragraph */}
      <rect x="46" y="94" width="108" height="1.4" rx="0.7" fill={INK} opacity="0.55" />
      <rect x="46" y="97" width="104" height="1.4" rx="0.7" fill={INK} opacity="0.45" />
      <rect x="46" y="100" width="100" height="1.4" rx="0.7" fill={INK} opacity="0.45" />
      <rect x="46" y="103" width="78" height="1.4" rx="0.7" fill={INK} opacity="0.45" />

      {/* Pull-quote */}
      <rect x="46" y="110" width="2" height="14" fill={BRASS} />
      <rect x="52" y="111" width="100" height="1.6" rx="0.8" fill={INK} opacity="0.7" />
      <rect x="52" y="115" width="92" height="1.6" rx="0.8" fill={INK} opacity="0.7" />
      <rect x="52" y="119" width="68" height="1.6" rx="0.8" fill={INK} opacity="0.7" />
      <rect x="52" y="123" width="40" height="1.4" rx="0.7" fill={BRASS} opacity="0.85" />

      {/* H3 */}
      <rect x="46" y="132" width="38" height="2" rx="1" fill={INK} opacity="0.85" />

      {/* List with citations */}
      <g>
        <circle cx="48" cy="139" r="1.2" fill={BRASS} />
        <rect x="52" y="138" width="80" height="1.4" rx="0.7" fill={INK} opacity="0.5" />
        <g transform="translate(134, 137)">
          <rect width="8" height="3" rx="0.6" fill={BRASS} fillOpacity="0.18" stroke={BRASS} strokeWidth="0.5" />
          <text x="4" y="2.2" fontSize="2.4" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif">[2]</text>
        </g>
        <circle cx="48" cy="144" r="1.2" fill={BRASS} />
        <rect x="52" y="143" width="76" height="1.4" rx="0.7" fill={INK} opacity="0.5" />
        <g transform="translate(130, 142)">
          <rect width="8" height="3" rx="0.6" fill={BRASS} fillOpacity="0.18" stroke={BRASS} strokeWidth="0.5" />
          <text x="4" y="2.2" fontSize="2.4" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif">[3]</text>
        </g>
        <circle cx="48" cy="149" r="1.2" fill={BRASS} />
        <rect x="52" y="148" width="86" height="1.4" rx="0.7" fill={INK} opacity="0.5" />
        <circle cx="48" cy="154" r="1.2" fill={BRASS} />
        <rect x="52" y="153" width="72" height="1.4" rx="0.7" fill={INK} opacity="0.5" />
      </g>

      {/* Footer sources block */}
      <line x1="46" y1="162" x2="154" y2="162" stroke={INK} strokeWidth="0.5" opacity="0.2" />
      <text x="46" y="167" fontSize="3.5" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1.2">SOURCES</text>
      <g transform="translate(46, 170)">
        <rect width="2" height="2" rx="0.5" fill={BRASS} />
        <rect x="4" y="0.4" width="60" height="1.2" rx="0.6" fill={INK} opacity="0.5" />
        <rect y="5" width="2" height="2" rx="0.5" fill={BRASS} />
        <rect x="4" y="5.4" width="80" height="1.2" rx="0.6" fill={INK} opacity="0.5" />
        <rect y="10" width="2" height="2" rx="0.5" fill={BRASS} />
        <rect x="4" y="10.4" width="68" height="1.2" rx="0.6" fill={INK} opacity="0.5" />
      </g>

      {/* External source bubbles (fanning out from doc) */}
      <g transform="translate(8, 28)">
        <rect width="26" height="14" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="0.7" />
        <rect x="2" y="2" width="22" height="1.4" rx="0.7" fill={INK} opacity="0.6" />
        <rect x="2" y="5" width="18" height="1.2" rx="0.6" fill={INK} opacity="0.4" />
        <rect x="2" y="8" width="14" height="1.2" rx="0.6" fill={INK} opacity="0.35" />
        <circle cx="22" cy="2" r="2.5" fill={BRASS} />
        <text x="22" y="3.2" fontSize="3" fontWeight="700" fill="#6EF06E" textAnchor="middle" fontFamily="Geist, sans-serif">1</text>
      </g>
      <g transform="translate(166, 50)">
        <rect width="28" height="14" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="0.7" />
        <rect x="2" y="2" width="22" height="1.4" rx="0.7" fill={INK} opacity="0.6" />
        <rect x="2" y="5" width="18" height="1.2" rx="0.6" fill={INK} opacity="0.4" />
        <circle cx="24" cy="2" r="2.5" fill={BRASS} />
        <text x="24" y="3.2" fontSize="3" fontWeight="700" fill="#6EF06E" textAnchor="middle" fontFamily="Geist, sans-serif">2</text>
      </g>
      <g transform="translate(166, 110)">
        <rect width="28" height="14" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="0.7" />
        <rect x="2" y="2" width="22" height="1.4" rx="0.7" fill={INK} opacity="0.6" />
        <rect x="2" y="5" width="20" height="1.2" rx="0.6" fill={INK} opacity="0.4" />
        <circle cx="24" cy="2" r="2.5" fill={BRASS} />
        <text x="24" y="3.2" fontSize="3" fontWeight="700" fill="#6EF06E" textAnchor="middle" fontFamily="Geist, sans-serif">3</text>
      </g>

      {/* Connector lines from doc to bubbles */}
      <path d="M 34 36 Q 40 42 46 88" stroke={BRASS} strokeWidth="0.5" strokeDasharray="2 3" fill="none" opacity="0.6" />
      <path d="M 166 60 Q 158 70 154 90" stroke={BRASS} strokeWidth="0.5" strokeDasharray="2 3" fill="none" opacity="0.6" />
      <path d="M 166 120 Q 160 132 154 144" stroke={BRASS} strokeWidth="0.5" strokeDasharray="2 3" fill="none" opacity="0.6" />

      {/* Tag */}
      <g transform="translate(46, 188)">
        <text fontSize="3.5" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1.2">AUTHORITY · 14 SOURCES · INTERNAL LINKS · 0 AI</text>
      </g>

      {/* Word count + read time chip top */}
      <g transform="translate(126, 26)">
        <rect width="32" height="8" rx="2" stroke={BRASS} strokeWidth="0.5" fill="rgba(110, 240, 110,0.08)" />
        <text x="3" y="5" fontSize="3.4" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1">2400w · 9 min</text>
      </g>

      {/* Reading progress bar at top of doc */}
      <rect x="38" y="16" width="124" height="1.2" rx="0.6" fill={INK} opacity="0.1" />
      <rect x="38" y="16" width="78" height="1.2" rx="0.6" fill={BRASS} />

      {/* Page numbering */}
      <text x="100" y="178" fontSize="3" fill={INK} opacity="0.5" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="1.2">3 of 14</text>

      {/* Internal link badges in paragraphs */}
      <g transform="translate(140, 97)">
        <rect width="4" height="3" rx="0.6" fill={BRASS} fillOpacity="0.18" stroke={BRASS} strokeWidth="0.4" />
      </g>
      <g transform="translate(126, 100)">
        <rect width="4" height="3" rx="0.6" fill={BRASS} fillOpacity="0.18" stroke={BRASS} strokeWidth="0.4" />
      </g>

      {/* Side bubble 4 */}
      <g transform="translate(8, 92)">
        <rect width="26" height="14" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="0.7" />
        <rect x="2" y="2" width="22" height="1.4" rx="0.7" fill={INK} opacity="0.6" />
        <rect x="2" y="5" width="18" height="1.2" rx="0.6" fill={INK} opacity="0.4" />
        <rect x="2" y="8" width="16" height="1.2" rx="0.6" fill={INK} opacity="0.35" />
        <circle cx="22" cy="2" r="2.5" fill={BRASS} />
        <text x="22" y="3.2" fontSize="3" fontWeight="700" fill="#6EF06E" textAnchor="middle" fontFamily="Geist, sans-serif">4</text>
      </g>
      <path d="M 34 100 Q 40 110 46 122" stroke={BRASS} strokeWidth="0.5" strokeDasharray="2 3" fill="none" opacity="0.5" />

      {/* Side bubble 5 */}
      <g transform="translate(8, 156)">
        <rect width="26" height="14" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="0.7" />
        <rect x="2" y="2" width="22" height="1.4" rx="0.7" fill={INK} opacity="0.6" />
        <rect x="2" y="5" width="18" height="1.2" rx="0.6" fill={INK} opacity="0.4" />
        <circle cx="22" cy="2" r="2.5" fill={BRASS} />
        <text x="22" y="3.2" fontSize="3" fontWeight="700" fill="#6EF06E" textAnchor="middle" fontFamily="Geist, sans-serif">5</text>
      </g>
      <path d="M 34 162 Q 38 158 46 152" stroke={BRASS} strokeWidth="0.5" strokeDasharray="2 3" fill="none" opacity="0.5" />

      {/* TOC/Outline on left */}
      <g transform="translate(8, 60)">
        <text fontSize="2.6" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1">CONTENTS</text>
        <rect y="3" width="26" height="1" rx="0.5" fill={INK} opacity="0.5" />
        <rect y="6" width="22" height="1" rx="0.5" fill={INK} opacity="0.4" />
        <rect y="9" width="24" height="1" rx="0.5" fill={INK} opacity="0.4" />
        <rect y="12" width="20" height="1" rx="0.5" fill={INK} opacity="0.35" />
        <rect y="15" width="18" height="1" rx="0.5" fill={INK} opacity="0.3" />
      </g>

      {/* Author credibility row */}
      <g transform="translate(46, 154)">
        <circle r="3" fill={BRASS} fillOpacity="0.18" stroke={BRASS} strokeWidth="0.5" />
        <text x="0" y="1" fontSize="2.4" fontWeight="700" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif">JD</text>
        <rect x="6" y="-2" width="34" height="1.4" rx="0.7" fill={INK} opacity="0.7" />
        <rect x="6" y="0.5" width="42" height="1.2" rx="0.6" fill={INK} opacity="0.45" />
        <g transform="translate(60, -1)">
          <circle r="1.4" stroke={BRASS} strokeWidth="0.4" fill="#FFFFFF" />
          <path d="M -0.6 0 L 0 0.6 L 0.8 -0.4" stroke={BRASS} strokeWidth="0.4" fill="none" />
          <text x="3" y="1" fontSize="2.2" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="0.6">VERIFIED ATTY</text>
        </g>
      </g>

      {/* Read share controls */}
      <g transform="translate(110, 154)">
        <rect width="6" height="6" rx="1" fill={BRASS} fillOpacity="0.18" stroke={BRASS} strokeWidth="0.4" />
        <path d="M 1.5 1.5 L 4.5 4.5 M 4.5 1.5 L 1.5 4.5" stroke={BRASS} strokeWidth="0.5" />
        <rect x="8" width="6" height="6" rx="1" fill={BRASS} fillOpacity="0.18" stroke={BRASS} strokeWidth="0.4" />
        <text x="11" y="4.2" fontSize="2.4" fontWeight="700" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif">f</text>
        <rect x="16" width="6" height="6" rx="1" fill={BRASS} fillOpacity="0.18" stroke={BRASS} strokeWidth="0.4" />
        <path d="M 17.5 1 L 20.5 5 M 20.5 1 L 17.5 5" stroke={BRASS} strokeWidth="0.4" />
        <rect x="24" width="6" height="6" rx="1" fill={BRASS} fillOpacity="0.18" stroke={BRASS} strokeWidth="0.4" />
        <path d="M 27 1 L 27 4.5 M 25.5 3 L 27 4.5 L 28.5 3" stroke={BRASS} strokeWidth="0.4" fill="none" strokeLinejoin="round" />
      </g>

      <Reticles />
    </svg>
  );
}

// =====================================================================
// 4) AI SEARCH
// LLM brain or knowledge graph with embeddings, your firm as a key
// node, neighboring concept nodes citing back.
// =====================================================================

export function AISearchIllustration() {
  return (
    <svg viewBox="0 0 200 200" width="200" height="200" fill="none" aria-hidden="true" role="presentation">
      <rect x="0" y="0" width="200" height="200" fill="#FAFBFC" />

      {/* Outer ring */}
      <circle cx="100" cy="100" r="78" stroke={INK} strokeWidth="0.4" strokeDasharray="2 4" fill="none" opacity="0.25" />
      <circle cx="100" cy="100" r="58" stroke={INK} strokeWidth="0.4" strokeDasharray="2 4" fill="none" opacity="0.2" />
      <circle cx="100" cy="100" r="36" stroke={INK} strokeWidth="0.4" strokeDasharray="2 4" fill="none" opacity="0.15" />

      {/* Central node (your firm) */}
      <circle cx="100" cy="100" r="14" fill={BRASS} />
      <polygon points="92,92 108,92 92,108" fill="#6EF06E" />
      <circle cx="100" cy="100" r="18" stroke={BRASS} strokeWidth="0.8" fill="none" opacity="0.6">
        <animate attributeName="r" values="18;26;18" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0;0.6" dur="2.4s" repeatCount="indefinite" />
      </circle>

      {/* Inner ring nodes */}
      <g>
        <circle cx="100" cy="64" r="5" fill={INK} />
        <circle cx="100" cy="64" r="2" fill="#FFFFFF" />
        <line x1="100" y1="86" x2="100" y2="69" stroke={INK} strokeWidth="0.6" opacity="0.4" />

        <circle cx="132" cy="84" r="5" fill={INK} />
        <circle cx="132" cy="84" r="2" fill="#FFFFFF" />
        <line x1="113" y1="92" x2="127" y2="84" stroke={INK} strokeWidth="0.6" opacity="0.4" />

        <circle cx="132" cy="116" r="5" fill={INK} />
        <circle cx="132" cy="116" r="2" fill="#FFFFFF" />
        <line x1="113" y1="108" x2="127" y2="116" stroke={INK} strokeWidth="0.6" opacity="0.4" />

        <circle cx="100" cy="136" r="5" fill={INK} />
        <circle cx="100" cy="136" r="2" fill="#FFFFFF" />
        <line x1="100" y1="114" x2="100" y2="131" stroke={INK} strokeWidth="0.6" opacity="0.4" />

        <circle cx="68" cy="116" r="5" fill={INK} />
        <circle cx="68" cy="116" r="2" fill="#FFFFFF" />
        <line x1="87" y1="108" x2="73" y2="116" stroke={INK} strokeWidth="0.6" opacity="0.4" />

        <circle cx="68" cy="84" r="5" fill={INK} />
        <circle cx="68" cy="84" r="2" fill="#FFFFFF" />
        <line x1="87" y1="92" x2="73" y2="84" stroke={INK} strokeWidth="0.6" opacity="0.4" />
      </g>

      {/* Outer ring nodes */}
      <g opacity="0.55">
        <circle cx="100" cy="36" r="3" fill={INK} />
        <line x1="100" y1="59" x2="100" y2="39" stroke={INK} strokeWidth="0.4" opacity="0.3" />
        <circle cx="148" cy="60" r="3" fill={INK} />
        <line x1="136" y1="80" x2="146" y2="62" stroke={INK} strokeWidth="0.4" opacity="0.3" />
        <circle cx="164" cy="100" r="3" fill={INK} />
        <line x1="137" y1="100" x2="161" y2="100" stroke={INK} strokeWidth="0.4" opacity="0.3" />
        <circle cx="148" cy="140" r="3" fill={INK} />
        <line x1="136" y1="120" x2="146" y2="138" stroke={INK} strokeWidth="0.4" opacity="0.3" />
        <circle cx="100" cy="164" r="3" fill={INK} />
        <line x1="100" y1="141" x2="100" y2="161" stroke={INK} strokeWidth="0.4" opacity="0.3" />
        <circle cx="52" cy="140" r="3" fill={INK} />
        <line x1="64" y1="120" x2="54" y2="138" stroke={INK} strokeWidth="0.4" opacity="0.3" />
        <circle cx="36" cy="100" r="3" fill={INK} />
        <line x1="63" y1="100" x2="39" y2="100" stroke={INK} strokeWidth="0.4" opacity="0.3" />
        <circle cx="52" cy="60" r="3" fill={INK} />
        <line x1="64" y1="80" x2="54" y2="62" stroke={INK} strokeWidth="0.4" opacity="0.3" />
      </g>

      {/* Far ring nodes */}
      <g opacity="0.3">
        <circle cx="100" cy="18" r="2" fill={INK} />
        <circle cx="168" cy="42" r="2" fill={INK} />
        <circle cx="182" cy="100" r="2" fill={INK} />
        <circle cx="168" cy="158" r="2" fill={INK} />
        <circle cx="100" cy="182" r="2" fill={INK} />
        <circle cx="32" cy="158" r="2" fill={INK} />
        <circle cx="18" cy="100" r="2" fill={INK} />
        <circle cx="32" cy="42" r="2" fill={INK} />
      </g>

      {/* Embedding vector strip */}
      <g transform="translate(18, 18)">
        <rect width="48" height="10" rx="1" stroke={INK} strokeWidth="0.5" fill="#FFFFFF" />
        <text x="2" y="3.5" fontSize="3" fill={INK} opacity="0.5" fontFamily="Geist, sans-serif" letterSpacing="1">EMBED · D=1536</text>
        <g transform="translate(2, 5)">
          <rect width="2" height="3" fill={INK} opacity="0.55" />
          <rect x="3" width="2" height="2" fill={INK} opacity="0.4" />
          <rect x="6" width="2" height="3.5" fill={BRASS} />
          <rect x="9" width="2" height="2.5" fill={INK} opacity="0.45" />
          <rect x="12" width="2" height="1.5" fill={INK} opacity="0.3" />
          <rect x="15" width="2" height="3" fill={INK} opacity="0.55" />
          <rect x="18" width="2" height="2" fill={INK} opacity="0.4" />
          <rect x="21" width="2" height="3" fill={INK} opacity="0.55" />
          <rect x="24" width="2" height="2.5" fill={INK} opacity="0.45" />
          <rect x="27" width="2" height="3.5" fill={BRASS} />
          <rect x="30" width="2" height="2" fill={INK} opacity="0.35" />
          <rect x="33" width="2" height="3" fill={INK} opacity="0.55" />
          <rect x="36" width="2" height="2.5" fill={INK} opacity="0.45" />
          <rect x="39" width="2" height="3" fill={INK} opacity="0.55" />
          <rect x="42" width="2" height="2" fill={INK} opacity="0.35" />
        </g>
      </g>

      {/* Citation tag */}
      <g transform="translate(140, 24)">
        <rect width="48" height="10" rx="1" fill={INK} />
        <text x="24" y="6.5" fontSize="4" fill="#6EF06E" textAnchor="middle" fontWeight="700" fontFamily="Geist, sans-serif" letterSpacing="1">CITED · #1</text>
      </g>

      {/* Knowledge graph label */}
      <g transform="translate(20, 180)">
        <text fontSize="3.5" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1.4">AI SEARCH · KG · 184 NODES</text>
      </g>

      {/* Query bar at top */}
      <g transform="translate(60, 4)">
        <rect width="80" height="10" rx="5" fill="#FFFFFF" stroke={INK} strokeWidth="0.5" />
        <circle cx="6" cy="5" r="2" stroke={INK} strokeWidth="0.6" fill="none" />
        <line x1="7.4" y1="6.4" x2="9" y2="8" stroke={INK} strokeWidth="0.6" strokeLinecap="round" />
        <text x="14" y="6.4" fontSize="3.4" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif">probate lawyer in tampa</text>
      </g>

      {/* Subtle inner connectors between inner-ring nodes */}
      <g opacity="0.25">
        <line x1="100" y1="64" x2="132" y2="84" stroke={INK} strokeWidth="0.5" strokeDasharray="2 3" />
        <line x1="132" y1="84" x2="132" y2="116" stroke={INK} strokeWidth="0.5" strokeDasharray="2 3" />
        <line x1="132" y1="116" x2="100" y2="136" stroke={INK} strokeWidth="0.5" strokeDasharray="2 3" />
        <line x1="100" y1="136" x2="68" y2="116" stroke={INK} strokeWidth="0.5" strokeDasharray="2 3" />
        <line x1="68" y1="116" x2="68" y2="84" stroke={INK} strokeWidth="0.5" strokeDasharray="2 3" />
        <line x1="68" y1="84" x2="100" y2="64" stroke={INK} strokeWidth="0.5" strokeDasharray="2 3" />
      </g>

      {/* Floating answer card right side */}
      <g transform="translate(146, 80)">
        <rect width="48" height="48" rx="3" fill="#FFFFFF" stroke={INK} strokeWidth="0.7" />
        <text x="4" y="6" fontSize="3" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1.2">ANSWER</text>
        <rect x="4" y="9" width="40" height="1.4" rx="0.7" fill={INK} opacity="0.7" />
        <rect x="4" y="13" width="38" height="1.2" rx="0.6" fill={INK} opacity="0.5" />
        <rect x="4" y="16.5" width="34" height="1.2" rx="0.6" fill={INK} opacity="0.45" />
        <rect x="4" y="20" width="36" height="1.2" rx="0.6" fill={INK} opacity="0.45" />
        <rect x="4" y="23.5" width="30" height="1.2" rx="0.6" fill={INK} opacity="0.4" />
        <g transform="translate(4, 30)">
          <rect width="3" height="1.4" rx="0.7" fill={BRASS} />
          <rect x="5" y="0" width="20" height="1.4" rx="0.7" fill={INK} opacity="0.4" />
          <rect y="4" width="3" height="1.4" rx="0.7" fill={BRASS} />
          <rect x="5" y="4" width="24" height="1.4" rx="0.7" fill={INK} opacity="0.4" />
          <rect y="8" width="3" height="1.4" rx="0.7" fill={BRASS} />
          <rect x="5" y="8" width="18" height="1.4" rx="0.7" fill={INK} opacity="0.4" />
        </g>
      </g>

      {/* Token meter */}
      <g transform="translate(146, 162)">
        <text fontSize="3" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="1.2">TOKENS</text>
        <rect y="3" width="48" height="2" rx="1" fill={INK} opacity="0.12" />
        <rect y="3" width="36" height="2" rx="1" fill={BRASS} />
        <text x="48" y="10" fontSize="3" fill={INK} opacity="0.55" textAnchor="end" fontFamily="Geist, sans-serif">4,812</text>
      </g>

      {/* Model selector dropdown */}
      <g transform="translate(8, 168)">
        <rect width="46" height="10" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="0.5" />
        <circle cx="5" cy="5" r="2" fill={BRASS} />
        <text x="5" y="6" fontSize="2.4" fontWeight="700" fill="#6EF06E" textAnchor="middle" fontFamily="Geist, sans-serif">AI</text>
        <text x="11" y="5.6" fontSize="2.6" fill={INK} opacity="0.7" fontFamily="Geist, sans-serif">GPT 5.1 · CLAUDE 4.7</text>
      </g>

      {/* Confidence gauge */}
      <g transform="translate(60, 168)">
        <rect width="48" height="10" rx="2" fill={INK} fillOpacity="0.06" stroke={INK} strokeWidth="0.4" />
        <text x="3" y="4" fontSize="2.4" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="1">CONFIDENCE</text>
        <rect x="3" y="6" width="32" height="2" rx="1" fill={INK} opacity="0.12" />
        <rect x="3" y="6" width="28" height="2" rx="1" fill={BRASS} />
        <text x="44" y="7.4" fontSize="2.4" fontWeight="700" fill={INK} textAnchor="end" fontFamily="Geist, sans-serif">94%</text>
      </g>

      <Reticles />
    </svg>
  );
}

// =====================================================================
// 5) REPUTATION
// Review feed with 5-star ratings, reply confirmations, sentiment.
// =====================================================================

export function ReputationIllustration() {
  return (
    <svg viewBox="0 0 200 200" width="200" height="200" fill="none" aria-hidden="true" role="presentation">
      <rect x="0" y="0" width="200" height="200" fill="#FAFBFC" />

      {/* Header */}
      <g transform="translate(16, 16)">
        <text fontSize="4" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1.4" y="4">REPUTATION · LIVE FEED</text>
        <text x="168" y="4" fontSize="3.5" fill={INK} opacity="0.55" textAnchor="end" fontFamily="Geist, sans-serif">UPDATED 4 min</text>
      </g>

      {/* Aggregate score card */}
      <g transform="translate(16, 24)">
        <rect width="168" height="28" rx="3" fill="#FFFFFF" stroke={INK} strokeWidth="0.9" />
        <text x="16" y="14" fontSize="14" fontWeight="700" fill={INK} fontFamily="Geist, sans-serif">5.0</text>
        <g transform="translate(38, 6)">
          <polygon points="0,3 1,1 2,3 4,3 2.5,4.5 3,7 1,5.5 -1,7 -0.5,4.5 -2,3" fill="#F6B73C" />
          <polygon points="6,3 7,1 8,3 10,3 8.5,4.5 9,7 7,5.5 5,7 5.5,4.5 4,3" fill="#F6B73C" />
          <polygon points="12,3 13,1 14,3 16,3 14.5,4.5 15,7 13,5.5 11,7 11.5,4.5 10,3" fill="#F6B73C" />
          <polygon points="18,3 19,1 20,3 22,3 20.5,4.5 21,7 19,5.5 17,7 17.5,4.5 16,3" fill="#F6B73C" />
          <polygon points="24,3 25,1 26,3 28,3 26.5,4.5 27,7 25,5.5 23,7 23.5,4.5 22,3" fill="#F6B73C" />
        </g>
        <text x="38" y="22" fontSize="3.4" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif">487 reviews · 100% replied</text>

        {/* Trend sparkline */}
        <g transform="translate(110, 8)">
          <path d="M 0 14 L 8 12 L 16 10 L 24 6 L 32 8 L 40 3 L 48 0" stroke={BRASS} strokeWidth="1" fill="none" />
          <circle cx="48" cy="0" r="1.4" fill={BRASS} />
          <text x="0" y="-2" fontSize="2.8" fill={INK} opacity="0.5" fontFamily="Geist, sans-serif">90D TREND</text>
        </g>
      </g>

      {/* Review card 1 */}
      <g transform="translate(16, 58)">
        <rect width="168" height="30" rx="3" fill="#FFFFFF" stroke={INK} strokeWidth="0.8" />
        <circle cx="10" cy="10" r="5" fill={BRASS} fillOpacity="0.25" stroke={BRASS} strokeWidth="0.7" />
        <text x="10" y="12" fontSize="5" fontWeight="700" fill={INK} textAnchor="middle" fontFamily="Geist, sans-serif">J</text>
        <rect x="20" y="5" width="40" height="1.6" rx="0.8" fill={INK} opacity="0.7" />
        <g transform="translate(20, 9)">
          <polygon points="0,2 0.6,0.6 1.2,2 2.4,2 1.5,3 1.8,4.2 1,3.4 0.2,4.2 0.5,3 -0.4,2" fill="#F6B73C" />
          <polygon points="3.2,2 3.8,0.6 4.4,2 5.6,2 4.7,3 5,4.2 4,3.4 3,4.2 3.3,3 2.4,2" fill="#F6B73C" />
          <polygon points="6.4,2 7,0.6 7.6,2 8.8,2 7.9,3 8.2,4.2 7,3.4 6,4.2 6.3,3 5.4,2" fill="#F6B73C" />
          <polygon points="9.6,2 10.2,0.6 10.8,2 12,2 11.1,3 11.4,4.2 10,3.4 9,4.2 9.3,3 8.4,2" fill="#F6B73C" />
          <polygon points="12.8,2 13.4,0.6 14,2 15.2,2 14.3,3 14.6,4.2 13,3.4 12,4.2 12.3,3 11.6,2" fill="#F6B73C" />
        </g>
        <text x="148" y="6.5" fontSize="3" fill={INK} opacity="0.55" textAnchor="end" fontFamily="Geist, sans-serif">2 days ago</text>
        <rect x="20" y="17" width="120" height="1.4" rx="0.7" fill={INK} opacity="0.5" />
        <rect x="20" y="20" width="110" height="1.4" rx="0.7" fill={INK} opacity="0.45" />
        <rect x="20" y="23" width="84" height="1.4" rx="0.7" fill={INK} opacity="0.4" />
        <rect x="146" y="20" width="18" height="6" rx="3" fill={BRASS} fillOpacity="0.18" stroke={BRASS} strokeWidth="0.5" />
        <text x="155" y="24.3" fontSize="3" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif">REPLIED</text>
      </g>

      {/* Review card 2 */}
      <g transform="translate(16, 94)">
        <rect width="168" height="30" rx="3" fill="#FFFFFF" stroke={INK} strokeWidth="0.8" />
        <circle cx="10" cy="10" r="5" fill={BRASS} fillOpacity="0.25" stroke={BRASS} strokeWidth="0.7" />
        <text x="10" y="12" fontSize="5" fontWeight="700" fill={INK} textAnchor="middle" fontFamily="Geist, sans-serif">M</text>
        <rect x="20" y="5" width="48" height="1.6" rx="0.8" fill={INK} opacity="0.7" />
        <g transform="translate(20, 9)">
          <polygon points="0,2 0.6,0.6 1.2,2 2.4,2 1.5,3 1.8,4.2 1,3.4 0.2,4.2 0.5,3 -0.4,2" fill="#F6B73C" />
          <polygon points="3.2,2 3.8,0.6 4.4,2 5.6,2 4.7,3 5,4.2 4,3.4 3,4.2 3.3,3 2.4,2" fill="#F6B73C" />
          <polygon points="6.4,2 7,0.6 7.6,2 8.8,2 7.9,3 8.2,4.2 7,3.4 6,4.2 6.3,3 5.4,2" fill="#F6B73C" />
          <polygon points="9.6,2 10.2,0.6 10.8,2 12,2 11.1,3 11.4,4.2 10,3.4 9,4.2 9.3,3 8.4,2" fill="#F6B73C" />
          <polygon points="12.8,2 13.4,0.6 14,2 15.2,2 14.3,3 14.6,4.2 13,3.4 12,4.2 12.3,3 11.6,2" fill="#F6B73C" />
        </g>
        <text x="148" y="6.5" fontSize="3" fill={INK} opacity="0.55" textAnchor="end" fontFamily="Geist, sans-serif">5 days ago</text>
        <rect x="20" y="17" width="120" height="1.4" rx="0.7" fill={INK} opacity="0.5" />
        <rect x="20" y="20" width="100" height="1.4" rx="0.7" fill={INK} opacity="0.45" />
        <rect x="20" y="23" width="70" height="1.4" rx="0.7" fill={INK} opacity="0.4" />
        <rect x="146" y="20" width="18" height="6" rx="3" fill={BRASS} fillOpacity="0.18" stroke={BRASS} strokeWidth="0.5" />
        <text x="155" y="24.3" fontSize="3" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif">REPLIED</text>
      </g>

      {/* Reply ribbon */}
      <g transform="translate(30, 128)">
        <rect width="154" height="20" rx="2" fill={BRASS} fillOpacity="0.06" stroke={BRASS} strokeWidth="0.7" />
        <polygon points="0,5 4,7 0,9" fill={BRASS} />
        <text x="8" y="6" fontSize="3.4" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1.4">OWNER REPLY · 3 hrs ago</text>
        <rect x="8" y="9" width="138" height="1.4" rx="0.7" fill={INK} opacity="0.55" />
        <rect x="8" y="12" width="120" height="1.4" rx="0.7" fill={INK} opacity="0.45" />
        <rect x="8" y="15" width="84" height="1.4" rx="0.7" fill={INK} opacity="0.4" />
      </g>

      {/* Sentiment chart */}
      <g transform="translate(16, 156)">
        <text fontSize="3.5" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="1.2" y="3">SENTIMENT</text>
        <rect y="5" width="120" height="6" rx="3" fill={INK} opacity="0.12" />
        <rect y="5" width="110" height="6" rx="3" fill={BRASS} />
        <text x="124" y="9.4" fontSize="3.5" fontWeight="700" fill={INK} fontFamily="Geist, sans-serif">92% POS</text>
        <g transform="translate(0, 16)">
          <rect width="14" height="2" rx="1" fill={INK} opacity="0.55" />
          <text x="18" y="2" fontSize="3" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="1">REPLY · 100%</text>
          <rect x="56" width="14" height="2" rx="1" fill={BRASS} opacity="0.65" />
          <text x="74" y="2" fontSize="3" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="1">FLAG · 0%</text>
          <rect x="106" width="14" height="2" rx="1" fill={INK} opacity="0.35" />
          <text x="124" y="2" fontSize="3" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="1">DISP · 0</text>
        </g>
      </g>

      {/* Rating distribution histogram */}
      <g transform="translate(140, 156)">
        <text fontSize="3" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="1.2">DISTRIBUTION</text>
        <g transform="translate(0, 4)">
          <text fontSize="3" fill={INK} opacity="0.5" fontFamily="Geist, sans-serif">5</text>
          <rect x="4" y="-2" width="40" height="2" rx="1" fill={BRASS} />
          <text x="46" y="0" fontSize="2.8" fill={INK} opacity="0.5" fontFamily="Geist, sans-serif">462</text>
          <text y="4" fontSize="3" fill={INK} opacity="0.5" fontFamily="Geist, sans-serif">4</text>
          <rect x="4" y="2" width="6" height="2" rx="1" fill={INK} opacity="0.35" />
          <text x="12" y="4" fontSize="2.8" fill={INK} opacity="0.5" fontFamily="Geist, sans-serif">18</text>
          <text y="8" fontSize="3" fill={INK} opacity="0.5" fontFamily="Geist, sans-serif">3</text>
          <rect x="4" y="6" width="2" height="2" rx="0.5" fill={INK} opacity="0.25" />
          <text x="8" y="8" fontSize="2.8" fill={INK} opacity="0.5" fontFamily="Geist, sans-serif">5</text>
          <text y="12" fontSize="3" fill={INK} opacity="0.5" fontFamily="Geist, sans-serif">2</text>
          <text x="6" y="12" fontSize="2.8" fill={INK} opacity="0.35" fontFamily="Geist, sans-serif">2</text>
          <text y="16" fontSize="3" fill={INK} opacity="0.5" fontFamily="Geist, sans-serif">1</text>
          <text x="6" y="16" fontSize="2.8" fill={INK} opacity="0.35" fontFamily="Geist, sans-serif">0</text>
        </g>
      </g>

      {/* Review platforms tabs at top */}
      <g transform="translate(110, 18)">
        <rect width="14" height="6" rx="1" fill={BRASS} />
        <text x="7" y="4" fontSize="2.6" fontWeight="700" fill="#6EF06E" textAnchor="middle" fontFamily="Geist, sans-serif">GOOGLE</text>
        <rect x="16" width="14" height="6" rx="1" stroke={INK} strokeWidth="0.4" fill="#FFFFFF" />
        <text x="23" y="4" fontSize="2.6" fill={INK} opacity="0.55" textAnchor="middle" fontFamily="Geist, sans-serif">AVVO</text>
        <rect x="32" width="14" height="6" rx="1" stroke={INK} strokeWidth="0.4" fill="#FFFFFF" />
        <text x="39" y="4" fontSize="2.6" fill={INK} opacity="0.55" textAnchor="middle" fontFamily="Geist, sans-serif">YELP</text>
      </g>

      {/* Auto-reply queue indicator */}
      <g transform="translate(144, 30)">
        <rect width="34" height="14" rx="2" fill={INK} fillOpacity="0.08" stroke={INK} strokeWidth="0.4" />
        <text x="3" y="4" fontSize="2.6" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1">AUTO-REPLY</text>
        <rect x="3" y="6" width="6" height="6" rx="1" fill={BRASS} />
        <text x="6" y="10.4" fontSize="3.4" fontWeight="700" fill="#FFFFFF" textAnchor="middle" fontFamily="Geist, sans-serif">3</text>
        <rect x="11" y="6" width="6" height="6" rx="1" fill={INK} opacity="0.18" />
        <rect x="19" y="6" width="6" height="6" rx="1" fill={INK} opacity="0.18" />
        <rect x="27" y="6" width="4" height="6" rx="1" fill={INK} opacity="0.12" />
      </g>

      {/* New review notification toast */}
      <g transform="translate(140, 178)">
        <rect width="44" height="8" rx="2" fill={INK} />
        <circle cx="5" cy="4" r="2" fill="#6EF06E" />
        <text x="5" y="5.4" fontSize="3" fontWeight="700" fill={INK} textAnchor="middle" fontFamily="Geist, sans-serif">!</text>
        <text x="11" y="5.4" fontSize="2.6" fill="#6EF06E" fontFamily="Geist, sans-serif" letterSpacing="1">2 NEW · LAST 24h</text>
      </g>

      {/* Per-platform aggregate ranking */}
      <g transform="translate(16, 130)">
        <text fontSize="2.6" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1.2">RANK</text>
        <g transform="translate(0, 4)">
          <rect width="14" height="2" rx="1" fill={BRASS} />
          <text x="16" y="2" fontSize="2.4" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif">G · #1</text>
          <rect y="4" width="12" height="2" rx="1" fill={BRASS} opacity="0.85" />
          <text x="16" y="6" fontSize="2.4" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif">A · #1</text>
          <rect y="8" width="10" height="2" rx="1" fill={INK} opacity="0.55" />
          <text x="16" y="10" fontSize="2.4" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif">Y · #2</text>
        </g>
      </g>

      {/* Cohort sentiment by attorney */}
      <g transform="translate(110, 178)">
        <text fontSize="2.6" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="1.2">BY ATTY</text>
        <g transform="translate(20, 1)">
          <circle r="1.4" fill={BRASS} />
          <text x="3" y="1" fontSize="2.4" fontWeight="700" fill={INK} fontFamily="Geist, sans-serif">5.0</text>
        </g>
      </g>

      <Reticles />
    </svg>
  );
}

// =====================================================================
// 6) WEBSITE CONVERSION
// A landing page wireframe with annotated conversion elements: hero
// CTA, form, trust badges, sticky bar. Pinpoints on each.
// =====================================================================

export function WebsiteConversionIllustration() {
  return (
    <svg viewBox="0 0 200 200" width="200" height="200" fill="none" aria-hidden="true" role="presentation">
      <rect x="0" y="0" width="200" height="200" fill="#FAFBFC" />

      {/* Browser chrome */}
      <rect x="16" y="16" width="128" height="168" rx="3" fill="#FFFFFF" stroke={INK} strokeWidth="0.9" />
      <rect x="16" y="16" width="128" height="8" rx="3" fill="#F1F3F4" />
      <circle cx="22" cy="20" r="1.2" fill="#FF5F57" />
      <circle cx="26" cy="20" r="1.2" fill="#FEBC2E" />
      <circle cx="30" cy="20" r="1.2" fill="#28C840" />
      <rect x="36" y="18" width="100" height="4" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="0.4" opacity="0.4" />
      <rect x="40" y="19.5" width="40" height="1.4" rx="0.7" fill={INK} opacity="0.4" />

      {/* Top nav */}
      <line x1="16" y1="32" x2="144" y2="32" stroke={INK} strokeWidth="0.3" opacity="0.18" />
      <rect x="22" y="27" width="20" height="2" rx="1" fill={INK} opacity="0.75" />
      <rect x="80" y="27" width="14" height="1.4" rx="0.7" fill={INK} opacity="0.45" />
      <rect x="98" y="27" width="14" height="1.4" rx="0.7" fill={INK} opacity="0.45" />
      <rect x="116" y="26" width="22" height="4" rx="2" fill={BRASS} />
      <rect x="120" y="27.6" width="14" height="1" rx="0.5" fill="#FFFFFF" />

      {/* Hero block */}
      <rect x="22" y="38" width="116" height="42" rx="2" fill={INK} fillOpacity="0.06" />
      <rect x="28" y="44" width="80" height="3" rx="1.5" fill={INK} />
      <rect x="28" y="50" width="68" height="2.4" rx="1.2" fill={INK} opacity="0.7" />
      <rect x="28" y="56" width="100" height="1.6" rx="0.8" fill={INK} opacity="0.45" />
      <rect x="28" y="60" width="90" height="1.6" rx="0.8" fill={INK} opacity="0.4" />
      <rect x="28" y="64" width="60" height="1.4" rx="0.7" fill={INK} opacity="0.35" />
      <rect x="28" y="70" width="38" height="6" rx="3" fill={BRASS} />
      <rect x="32" y="72.5" width="22" height="1.4" rx="0.7" fill="#FFFFFF" />
      <rect x="70" y="70" width="38" height="6" rx="3" stroke={INK} strokeWidth="0.6" fill="#FFFFFF" />
      <rect x="74" y="72.5" width="22" height="1.4" rx="0.7" fill={INK} opacity="0.6" />

      {/* Trust strip */}
      <rect x="22" y="84" width="116" height="14" rx="2" stroke={INK} strokeWidth="0.5" fill="#FFFFFF" opacity="0.7" />
      <rect x="28" y="89" width="12" height="4" rx="0.5" fill={INK} opacity="0.18" />
      <rect x="44" y="89" width="12" height="4" rx="0.5" fill={INK} opacity="0.18" />
      <rect x="60" y="89" width="12" height="4" rx="0.5" fill={INK} opacity="0.18" />
      <rect x="76" y="89" width="12" height="4" rx="0.5" fill={INK} opacity="0.18" />
      <rect x="92" y="89" width="12" height="4" rx="0.5" fill={INK} opacity="0.18" />
      <rect x="108" y="89" width="12" height="4" rx="0.5" fill={INK} opacity="0.18" />
      <rect x="124" y="89" width="12" height="4" rx="0.5" fill={INK} opacity="0.18" />

      {/* Form block */}
      <rect x="22" y="102" width="116" height="58" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="0.7" />
      <rect x="28" y="108" width="50" height="2.4" rx="1.2" fill={INK} opacity="0.7" />
      <rect x="28" y="114" width="80" height="1.6" rx="0.8" fill={INK} opacity="0.45" />
      <rect x="28" y="120" width="48" height="6" rx="1" stroke={INK} strokeWidth="0.5" fill="#FAFAFA" />
      <rect x="80" y="120" width="48" height="6" rx="1" stroke={INK} strokeWidth="0.5" fill="#FAFAFA" />
      <rect x="28" y="129" width="100" height="6" rx="1" stroke={INK} strokeWidth="0.5" fill="#FAFAFA" />
      <rect x="28" y="138" width="100" height="12" rx="1" stroke={INK} strokeWidth="0.5" fill="#FAFAFA" />
      <rect x="28" y="153" width="44" height="6" rx="3" fill={BRASS} />
      <rect x="34" y="155.5" width="32" height="1.4" rx="0.7" fill="#FFFFFF" />

      {/* Sticky bottom bar */}
      <rect x="16" y="172" width="128" height="12" fill={INK} />
      <rect x="22" y="176" width="30" height="1.6" rx="0.8" fill="#6EF06E" />
      <rect x="22" y="179.5" width="60" height="1.4" rx="0.7" fill="#FFFFFF" opacity="0.55" />
      <rect x="112" y="175" width="28" height="6" rx="3" fill={BRASS} />
      <rect x="116" y="177.4" width="20" height="1.4" rx="0.7" fill="#FFFFFF" />

      {/* Annotations panel */}
      <g transform="translate(154, 30)">
        <text fontSize="3.5" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1.2">A · HERO CTA</text>
        <text y="4" fontSize="3" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif">+34% click</text>
      </g>
      <g transform="translate(154, 56)">
        <text fontSize="3.5" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1.2">B · PROOF</text>
        <text y="4" fontSize="3" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif">8 logos</text>
      </g>
      <g transform="translate(154, 82)">
        <text fontSize="3.5" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1.2">C · TRUST</text>
        <text y="4" fontSize="3" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif">bar</text>
      </g>
      <g transform="translate(154, 108)">
        <text fontSize="3.5" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1.2">D · FORM</text>
        <text y="4" fontSize="3" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif">4 fields</text>
      </g>
      <g transform="translate(154, 134)">
        <text fontSize="3.5" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1.2">E · SUBMIT</text>
        <text y="4" fontSize="3" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif">18% conv</text>
      </g>
      <g transform="translate(154, 160)">
        <text fontSize="3.5" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1.2">F · STICKY</text>
        <text y="4" fontSize="3" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif">+12% mobile</text>
      </g>

      {/* Pin dots */}
      <circle cx="148" cy="32" r="2" fill={BRASS} />
      <circle cx="148" cy="58" r="2" fill={BRASS} />
      <circle cx="148" cy="84" r="2" fill={BRASS} />
      <circle cx="148" cy="110" r="2" fill={BRASS} />
      <circle cx="148" cy="136" r="2" fill={BRASS} />
      <circle cx="148" cy="162" r="2" fill={BRASS} />

      {/* Connector lines */}
      <line x1="144" y1="32" x2="148" y2="32" stroke={BRASS} strokeWidth="0.5" />
      <line x1="144" y1="58" x2="148" y2="58" stroke={BRASS} strokeWidth="0.5" />
      <line x1="144" y1="84" x2="148" y2="84" stroke={BRASS} strokeWidth="0.5" />
      <line x1="144" y1="110" x2="148" y2="110" stroke={BRASS} strokeWidth="0.5" />
      <line x1="144" y1="136" x2="148" y2="136" stroke={BRASS} strokeWidth="0.5" />
      <line x1="144" y1="162" x2="148" y2="162" stroke={BRASS} strokeWidth="0.5" />

      {/* Heatmap overlay (red/yellow on CTA) */}
      <g opacity="0.45">
        <ellipse cx="47" cy="73" rx="22" ry="8" fill={BRASS} />
        <ellipse cx="47" cy="73" rx="14" ry="5" fill="#6EF06E" />
      </g>

      {/* Scroll depth indicator at right */}
      <g transform="translate(150, 38)">
        <rect width="2" height="120" rx="1" fill={INK} opacity="0.15" />
        <rect width="2" height="72" rx="1" fill={BRASS} />
        <circle cx="1" cy="72" r="2.4" fill={BRASS} />
      </g>

      {/* A/B test indicator */}
      <g transform="translate(22, 14)">
        <rect width="40" height="6" rx="3" fill={INK} />
        <circle cx="4" cy="3" r="1.4" fill={BRASS} />
        <text x="20" y="4.3" fontSize="3" fontWeight="700" fill="#6EF06E" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="1">A/B · VARIANT B</text>
      </g>

      {/* Live visitor count */}
      <g transform="translate(78, 14)">
        <rect width="58" height="6" rx="3" stroke={BRASS} strokeWidth="0.5" fill="rgba(110, 240, 110,0.06)" />
        <circle cx="4" cy="3" r="1.2" fill={BRASS}>
          <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <text x="32" y="4.3" fontSize="3" fontWeight="600" fill={INK} textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="1">12 LIVE · 184 LAST HR</text>
      </g>

      {/* Bottom conversion meter */}
      <g transform="translate(154, 184)">
        <text fontSize="2.6" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1.2">CONV RATE</text>
        <text y="6" fontSize="6" fontWeight="700" fill={INK} fontFamily="Geist, sans-serif">18%</text>
      </g>

      {/* Mouse cursor on CTA */}
      <g transform="translate(60, 76)">
        <path d="M 0 0 L 0 9 L 3 7 L 5 11 L 7 10 L 5 6 L 9 6 Z" fill={INK} stroke="#FFFFFF" strokeWidth="0.5" strokeLinejoin="round" />
      </g>

      {/* Bounce/time-on-page strip */}
      <g transform="translate(22, 178)">
        <text fontSize="2.6" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="1.2">BOUNCE 38% · TIME 2:14</text>
      </g>

      {/* Form completion progress */}
      <g transform="translate(28, 168)">
        <rect width="100" height="2" rx="1" fill={INK} opacity="0.12" />
        <rect width="68" height="2" rx="1" fill={BRASS} />
        <circle cx="68" cy="1" r="2" fill={BRASS} />
      </g>

      {/* Device toggle (mobile/desktop) */}
      <g transform="translate(154, 12)">
        <rect width="22" height="8" rx="4" stroke={INK} strokeWidth="0.5" fill="#FFFFFF" />
        <rect x="1" y="1" width="10" height="6" rx="3" fill={BRASS} />
        <text x="6" y="5.4" fontSize="2.6" fontWeight="700" fill="#FFFFFF" textAnchor="middle" fontFamily="Geist, sans-serif">MOB</text>
        <text x="16" y="5.4" fontSize="2.6" fill={INK} opacity="0.55" textAnchor="middle" fontFamily="Geist, sans-serif">DESK</text>
      </g>

      <Reticles />
    </svg>
  );
}

// =====================================================================
// 7) PRESS
// Newspaper/magazine stack with article excerpts, byline, masthead
// stripes. A trophy/medallion in brass for the press hit.
// =====================================================================

export function PressIllustration() {
  return (
    <svg viewBox="0 0 200 200" width="200" height="200" fill="none" aria-hidden="true" role="presentation">
      <rect x="0" y="0" width="200" height="200" fill="#FAFBFC" />

      {/* Back paper (rotated) */}
      <g transform="rotate(-4 100 100)" opacity="0.6">
        <rect x="34" y="34" width="132" height="142" fill="#FFFFFF" stroke={INK} strokeWidth="0.7" />
        <rect x="40" y="40" width="60" height="2" rx="1" fill={INK} opacity="0.55" />
        <rect x="40" y="44" width="40" height="2" rx="1" fill={INK} opacity="0.4" />
        <line x1="40" y1="50" x2="160" y2="50" stroke={INK} strokeWidth="0.4" opacity="0.25" />
        <rect x="40" y="56" width="50" height="60" fill={INK} opacity="0.06" />
        <rect x="94" y="56" width="64" height="1.4" rx="0.7" fill={INK} opacity="0.45" />
        <rect x="94" y="60" width="60" height="1.4" rx="0.7" fill={INK} opacity="0.35" />
        <rect x="94" y="64" width="58" height="1.4" rx="0.7" fill={INK} opacity="0.3" />
        <rect x="94" y="68" width="54" height="1.4" rx="0.7" fill={INK} opacity="0.3" />
        <rect x="40" y="120" width="120" height="1.4" rx="0.7" fill={INK} opacity="0.35" />
        <rect x="40" y="124" width="116" height="1.4" rx="0.7" fill={INK} opacity="0.3" />
        <rect x="40" y="128" width="100" height="1.4" rx="0.7" fill={INK} opacity="0.25" />
        <rect x="40" y="138" width="78" height="1.4" rx="0.7" fill={INK} opacity="0.3" />
      </g>

      {/* Front paper */}
      <rect x="22" y="22" width="156" height="156" fill="#FFFFFF" stroke={INK} strokeWidth="1" />

      {/* Masthead */}
      <rect x="22" y="22" width="156" height="6" fill={INK} />
      <text x="100" y="26.5" fontSize="3.5" fontWeight="700" fill="#6EF06E" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="2.5">THE TRIBUNE · VOL XXIV</text>

      {/* Title */}
      <text x="100" y="40" fontSize="7" fontWeight="700" fill={INK} textAnchor="middle" fontFamily="Geist, sans-serif">&quot;Best Probate Lawyer&quot;</text>
      <text x="100" y="48" fontSize="4" fill={INK} opacity="0.6" textAnchor="middle" fontFamily="Geist, sans-serif">How AWS Law Firm Became Tampa&apos;s Top-Rated Practice</text>

      {/* Byline + date */}
      <text x="28" y="56" fontSize="3" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="1.2">BY S. MORENO · MAY 14 · BUSINESS</text>

      <line x1="22" y1="60" x2="178" y2="60" stroke={INK} strokeWidth="0.4" opacity="0.25" />

      {/* Two-column layout */}
      <g transform="translate(28, 66)">
        {/* Image */}
        <rect width="68" height="48" fill={INK} fillOpacity="0.08" />
        <polygon points="0,48 20,32 38,40 60,24 68,30 68,48" fill={INK} opacity="0.18" />
        <circle cx="56" cy="20" r="3.5" fill={BRASS} opacity="0.7" />
        <text x="0" y="56" fontSize="3" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="1">PHOTO · TAMPA BAY</text>

        {/* Article text right column */}
        <g transform="translate(74, 0)">
          <rect width="68" height="2" rx="1" fill={INK} opacity="0.7" />
          <rect y="4" width="68" height="1.4" rx="0.7" fill={INK} opacity="0.55" />
          <rect y="8" width="64" height="1.4" rx="0.7" fill={INK} opacity="0.45" />
          <rect y="12" width="68" height="1.4" rx="0.7" fill={INK} opacity="0.45" />
          <rect y="16" width="62" height="1.4" rx="0.7" fill={INK} opacity="0.4" />
          <rect y="20" width="66" height="1.4" rx="0.7" fill={INK} opacity="0.4" />
          <rect y="24" width="58" height="1.4" rx="0.7" fill={INK} opacity="0.35" />
          <rect y="28" width="62" height="1.4" rx="0.7" fill={INK} opacity="0.35" />
          <rect y="32" width="50" height="1.4" rx="0.7" fill={INK} opacity="0.3" />
          {/* Pull quote */}
          <rect x="0" y="38" width="2" height="10" fill={BRASS} />
          <rect x="6" y="40" width="60" height="1.4" rx="0.7" fill={INK} opacity="0.65" />
          <rect x="6" y="44" width="44" height="1.4" rx="0.7" fill={INK} opacity="0.65" />
        </g>
      </g>

      {/* Trophy / medallion */}
      <g transform="translate(150, 70)">
        <circle r="14" fill={BRASS} />
        <circle r="11" stroke="#FFFFFF" strokeWidth="0.6" fill="none" opacity="0.5" />
        <path d="M -6 -2 L -3 4 L 0 -4 L 3 4 L 6 -2 L 2 -6 L -2 -6 Z" fill="#FFFFFF" />
        <text y="2" fontSize="4" fontWeight="700" fill={BRASS} textAnchor="middle" fontFamily="Geist, sans-serif">&#9733;</text>
        <path d="M -8 12 L -4 22 L 4 22 L 8 12" stroke={BRASS} strokeWidth="0.6" fill={BRASS} fillOpacity="0.5" strokeLinejoin="round" />
      </g>

      {/* Second column row */}
      <g transform="translate(28, 130)">
        <rect width="142" height="1.4" rx="0.7" fill={INK} opacity="0.45" />
        <rect y="4" width="138" height="1.4" rx="0.7" fill={INK} opacity="0.4" />
        <rect y="8" width="132" height="1.4" rx="0.7" fill={INK} opacity="0.35" />
        <rect y="12" width="120" height="1.4" rx="0.7" fill={INK} opacity="0.3" />
        <rect y="16" width="128" height="1.4" rx="0.7" fill={INK} opacity="0.3" />
        <rect y="20" width="100" height="1.4" rx="0.7" fill={INK} opacity="0.25" />
      </g>

      {/* Press logos strip */}
      <g transform="translate(28, 158)">
        <text fontSize="3" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1.4">FEATURED IN</text>
        <rect x="0" y="4" width="142" height="10" rx="1" stroke={INK} strokeWidth="0.4" fill="#FAFAFA" opacity="0.7" />
        <rect x="4" y="7" width="20" height="4" rx="0.5" fill={INK} opacity="0.5" />
        <rect x="30" y="7" width="20" height="4" rx="0.5" fill={INK} opacity="0.5" />
        <rect x="56" y="7" width="20" height="4" rx="0.5" fill={INK} opacity="0.5" />
        <rect x="82" y="7" width="20" height="4" rx="0.5" fill={INK} opacity="0.5" />
        <rect x="108" y="7" width="20" height="4" rx="0.5" fill={INK} opacity="0.5" />
      </g>

      {/* Backlinks counter overlay */}
      <g transform="translate(140, 154)">
        <rect width="42" height="20" rx="2" fill={INK} />
        <text x="4" y="6" fontSize="3" fill="#6EF06E" fontFamily="Geist, sans-serif" letterSpacing="1.4">BACKLINKS</text>
        <text x="4" y="14" fontSize="9" fontWeight="700" fill="#6EF06E" fontFamily="Geist, sans-serif">+482</text>
        <text x="24" y="18" fontSize="2.6" fill="#FFFFFF" opacity="0.55" fontFamily="Geist, sans-serif">DR 84</text>
      </g>

      {/* Edition number */}
      <text x="178" y="32" fontSize="3" fill="#6EF06E" textAnchor="end" fontFamily="Geist, sans-serif" letterSpacing="2">N°842</text>

      {/* Below the fold strip - related pieces */}
      <g transform="translate(28, 178)">
        <line x1="0" y1="-4" x2="142" y2="-4" stroke={INK} strokeWidth="0.4" opacity="0.18" />
        <rect width="40" height="1.6" rx="0.8" fill={INK} opacity="0.45" />
        <rect y="4" width="32" height="1.4" rx="0.7" fill={INK} opacity="0.3" />
        <rect x="50" width="36" height="1.6" rx="0.8" fill={INK} opacity="0.45" />
        <rect x="50" y="4" width="30" height="1.4" rx="0.7" fill={INK} opacity="0.3" />
        <rect x="96" width="44" height="1.6" rx="0.8" fill={INK} opacity="0.45" />
        <rect x="96" y="4" width="38" height="1.4" rx="0.7" fill={INK} opacity="0.3" />
      </g>

      {/* Twitter share counter */}
      <g transform="translate(140, 56)">
        <rect width="34" height="12" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="0.6" />
        <text x="3" y="4" fontSize="2.6" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="1">SHARES</text>
        <text x="3" y="10" fontSize="5" fontWeight="700" fill={INK} fontFamily="Geist, sans-serif">2.4K</text>
        <path d="M 22 5 L 22 9 L 26 9 L 32 5 L 32 9 L 26 9" stroke={BRASS} strokeWidth="0.7" fill="none" strokeLinejoin="round" />
      </g>

      {/* Editor mark */}
      <g transform="translate(28, 18)">
        <rect width="40" height="2" rx="1" fill="#6EF06E" />
      </g>

      {/* Pinned bookmark ribbon */}
      <g transform="translate(168, 22)">
        <polygon points="0,0 8,0 8,16 4,12 0,16" fill={BRASS} />
        <rect x="2" y="3" width="4" height="1" rx="0.5" fill="#6EF06E" />
      </g>

      {/* DA / DR scorecard */}
      <g transform="translate(28, 22)">
        <rect width="48" height="12" rx="2" fill={INK} fillOpacity="0.06" stroke={INK} strokeWidth="0.4" />
        <text x="3" y="4" fontSize="2.4" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="1.2">DOMAIN AUTH</text>
        <text x="3" y="9" fontSize="6" fontWeight="700" fill={INK} fontFamily="Geist, sans-serif">84</text>
        <g transform="translate(20, 6)">
          <rect width="20" height="2" rx="1" fill={INK} opacity="0.12" />
          <rect width="16" height="2" rx="1" fill={BRASS} />
          <text x="0" y="6" fontSize="2.4" fill={INK} opacity="0.5" fontFamily="Geist, sans-serif">vs IND 42</text>
        </g>
      </g>

      {/* Republish callout */}
      <g transform="translate(170, 138)">
        <rect width="20" height="14" rx="2" fill={BRASS} />
        <text x="10" y="5" fontSize="2.6" fontWeight="700" fill="#6EF06E" textAnchor="middle" fontFamily="Geist, sans-serif">REPUB</text>
        <text x="10" y="9" fontSize="3.4" fontWeight="700" fill="#FFFFFF" textAnchor="middle" fontFamily="Geist, sans-serif">3×</text>
        <text x="10" y="12.5" fontSize="2.2" fill="#FFFFFF" opacity="0.7" textAnchor="middle" fontFamily="Geist, sans-serif">syndicated</text>
      </g>

      {/* Newspaper fold indicator */}
      <line x1="100" y1="22" x2="100" y2="178" stroke={INK} strokeWidth="0.3" opacity="0.08" strokeDasharray="2 4" />

      {/* Citation network top corner */}
      <g transform="translate(8, 8)">
        <circle r="2" fill={BRASS} />
        <line x1="0" y1="0" x2="8" y2="6" stroke={BRASS} strokeWidth="0.4" opacity="0.6" />
        <circle cx="8" cy="6" r="1.4" fill={INK} opacity="0.55" />
        <line x1="0" y1="0" x2="6" y2="-6" stroke={BRASS} strokeWidth="0.4" opacity="0.6" />
        <circle cx="6" cy="-6" r="1.4" fill={INK} opacity="0.55" />
      </g>

      <Reticles />
    </svg>
  );
}

// =====================================================================
// 8) SCHEMA
// Code editor showing JSON-LD with the firm's structured data.
// =====================================================================

export function SchemaIllustration() {
  return (
    <svg viewBox="0 0 200 200" width="200" height="200" fill="none" aria-hidden="true" role="presentation">
      <rect x="0" y="0" width="200" height="200" fill="#FAFBFC" />

      {/* Editor frame */}
      <rect x="14" y="14" width="172" height="172" rx="3" fill="#1F1E22" />
      {/* Title bar */}
      <rect x="14" y="14" width="172" height="10" rx="3" fill="#1A1C1F" />
      <circle cx="20" cy="19" r="1.4" fill="#FF5F57" />
      <circle cx="25" cy="19" r="1.4" fill="#FEBC2E" />
      <circle cx="30" cy="19" r="1.4" fill="#28C840" />
      <text x="100" y="20" fontSize="3.4" fill="#6B6968" textAnchor="middle" fontFamily="Geist Mono, monospace">schema.json</text>

      {/* Line numbers gutter */}
      <rect x="14" y="24" width="14" height="162" fill="#1A191D" />
      {[28, 36, 44, 52, 60, 68, 76, 84, 92, 100, 108, 116, 124, 132, 140, 148, 156, 164, 172, 180].map((y, i) => (
        <text key={i} x="22" y={y} fontSize="3.2" fill="#52515A" textAnchor="end" fontFamily="Geist Mono, monospace">{i + 1}</text>
      ))}

      {/* Code body */}
      <g fontFamily="Geist Mono, monospace" fontSize="3.4">
        <text x="32" y="28" fill="#9AA0A6">{`{`}</text>
        <text x="36" y="36" fill="#34C759">&quot;@context&quot;</text>
        <text x="76" y="36" fill="#9AA0A6">:</text>
        <text x="80" y="36" fill="#7CB7FF">&quot;https://schema.org&quot;</text>
        <text x="138" y="36" fill="#9AA0A6">,</text>
        <text x="36" y="44" fill="#34C759">&quot;@type&quot;</text>
        <text x="64" y="44" fill="#9AA0A6">:</text>
        <text x="68" y="44" fill="#7CB7FF">&quot;LegalService&quot;</text>
        <text x="110" y="44" fill="#9AA0A6">,</text>
        <text x="36" y="52" fill="#34C759">&quot;name&quot;</text>
        <text x="60" y="52" fill="#9AA0A6">:</text>
        <text x="64" y="52" fill="#7CB7FF">&quot;AWS Law Firm&quot;</text>
        <text x="110" y="52" fill="#9AA0A6">,</text>
        <text x="36" y="60" fill="#34C759">&quot;telephone&quot;</text>
        <text x="80" y="60" fill="#9AA0A6">:</text>
        <text x="84" y="60" fill="#7CB7FF">&quot;+1-813-555-0142&quot;</text>
        <text x="148" y="60" fill="#9AA0A6">,</text>
        <text x="36" y="68" fill="#34C759">&quot;address&quot;</text>
        <text x="70" y="68" fill="#9AA0A6">: {`{`}</text>
        <text x="40" y="76" fill="#34C759">&quot;@type&quot;</text>
        <text x="68" y="76" fill="#9AA0A6">:</text>
        <text x="72" y="76" fill="#7CB7FF">&quot;PostalAddress&quot;</text>
        <text x="120" y="76" fill="#9AA0A6">,</text>
        <text x="40" y="84" fill="#34C759">&quot;streetAddress&quot;</text>
        <text x="92" y="84" fill="#9AA0A6">:</text>
        <text x="96" y="84" fill="#7CB7FF">&quot;200 N Tampa St&quot;</text>
        <text x="148" y="84" fill="#9AA0A6">,</text>
        <text x="40" y="92" fill="#34C759">&quot;addressLocality&quot;</text>
        <text x="98" y="92" fill="#9AA0A6">:</text>
        <text x="102" y="92" fill="#7CB7FF">&quot;Tampa&quot;</text>
        <text x="36" y="100" fill="#9AA0A6">{`},`}</text>
        <text x="36" y="108" fill="#34C759">&quot;aggregateRating&quot;</text>
        <text x="98" y="108" fill="#9AA0A6">: {`{`}</text>
        <text x="40" y="116" fill="#34C759">&quot;@type&quot;</text>
        <text x="68" y="116" fill="#9AA0A6">:</text>
        <text x="72" y="116" fill="#7CB7FF">&quot;AggregateRating&quot;</text>
        <text x="40" y="124" fill="#34C759">&quot;ratingValue&quot;</text>
        <text x="86" y="124" fill="#9AA0A6">:</text>
        <text x="90" y="124" fill="#6EF06E">&quot;5.0&quot;</text>
        <text x="40" y="132" fill="#34C759">&quot;reviewCount&quot;</text>
        <text x="86" y="132" fill="#9AA0A6">:</text>
        <text x="90" y="132" fill="#6EF06E">487</text>
        <text x="36" y="140" fill="#9AA0A6">{`},`}</text>
        <text x="36" y="148" fill="#34C759">&quot;sameAs&quot;</text>
        <text x="64" y="148" fill="#9AA0A6">: [</text>
        <text x="40" y="156" fill="#7CB7FF">&quot;https://g.co/awslaw&quot;</text>
        <text x="40" y="164" fill="#7CB7FF">&quot;https://avvo.com/...&quot;</text>
        <text x="36" y="172" fill="#9AA0A6">]</text>
        <text x="32" y="180" fill="#9AA0A6">{`}`}</text>
      </g>

      {/* Validated badge */}
      <g transform="translate(150, 28)">
        <rect width="30" height="10" rx="2" fill={BRASS} />
        <path d="M 3 5 L 5 7 L 9 3" stroke="#FFFFFF" strokeWidth="0.9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="20" y="6.5" fontSize="3.4" fontWeight="700" fill="#FFFFFF" textAnchor="middle" fontFamily="Geist, sans-serif">VALID</text>
      </g>

      {/* Cursor line highlight */}
      <rect x="28" y="124" width="158" height="6" fill={BRASS} fillOpacity="0.08" />

      {/* Test results panel right side */}
      <g transform="translate(146, 44)">
        <rect width="38" height="68" rx="2" fill="#1A1C1F" stroke="#3A383C" strokeWidth="0.6" />
        <text x="4" y="6" fontSize="3" fill="#6B6968" fontFamily="Geist Mono, monospace" letterSpacing="1.2">VALIDATOR</text>
        <line x1="4" y1="9" x2="34" y2="9" stroke="#3A383C" strokeWidth="0.3" />

        <g transform="translate(4, 14)">
          <circle r="1.4" fill={BRASS} />
          <text x="4" y="1.5" fontSize="2.6" fill="#9AA0A6" fontFamily="Geist Mono, monospace">@context</text>
          <text x="32" y="1.5" fontSize="2.6" fill={BRASS} textAnchor="end" fontFamily="Geist Mono, monospace">OK</text>
          <circle cy="6" r="1.4" fill={BRASS} />
          <text x="4" y="7.5" fontSize="2.6" fill="#9AA0A6" fontFamily="Geist Mono, monospace">@type</text>
          <text x="32" y="7.5" fontSize="2.6" fill={BRASS} textAnchor="end" fontFamily="Geist Mono, monospace">OK</text>
          <circle cy="12" r="1.4" fill={BRASS} />
          <text x="4" y="13.5" fontSize="2.6" fill="#9AA0A6" fontFamily="Geist Mono, monospace">address</text>
          <text x="32" y="13.5" fontSize="2.6" fill={BRASS} textAnchor="end" fontFamily="Geist Mono, monospace">OK</text>
          <circle cy="18" r="1.4" fill={BRASS} />
          <text x="4" y="19.5" fontSize="2.6" fill="#9AA0A6" fontFamily="Geist Mono, monospace">rating</text>
          <text x="32" y="19.5" fontSize="2.6" fill={BRASS} textAnchor="end" fontFamily="Geist Mono, monospace">OK</text>
          <circle cy="24" r="1.4" fill={BRASS} />
          <text x="4" y="25.5" fontSize="2.6" fill="#9AA0A6" fontFamily="Geist Mono, monospace">sameAs</text>
          <text x="32" y="25.5" fontSize="2.6" fill={BRASS} textAnchor="end" fontFamily="Geist Mono, monospace">OK</text>
          <circle cy="30" r="1.4" fill="#6EF06E" opacity="0.85" />
          <text x="4" y="31.5" fontSize="2.6" fill="#9AA0A6" fontFamily="Geist Mono, monospace">openHours</text>
          <text x="32" y="31.5" fontSize="2.6" fill="#6EF06E" textAnchor="end" fontFamily="Geist Mono, monospace">WARN</text>
          <circle cy="36" r="1.4" fill={BRASS} />
          <text x="4" y="37.5" fontSize="2.6" fill="#9AA0A6" fontFamily="Geist Mono, monospace">geo</text>
          <text x="32" y="37.5" fontSize="2.6" fill={BRASS} textAnchor="end" fontFamily="Geist Mono, monospace">OK</text>
          <circle cy="42" r="1.4" fill={BRASS} />
          <text x="4" y="43.5" fontSize="2.6" fill="#9AA0A6" fontFamily="Geist Mono, monospace">image</text>
          <text x="32" y="43.5" fontSize="2.6" fill={BRASS} textAnchor="end" fontFamily="Geist Mono, monospace">OK</text>
        </g>

        <line x1="4" y1="60" x2="34" y2="60" stroke="#3A383C" strokeWidth="0.3" />
        <text x="4" y="64.5" fontSize="2.6" fill={BRASS} fontFamily="Geist Mono, monospace" letterSpacing="1.2">7 PASS · 1 WARN</text>
      </g>

      {/* Tab strip */}
      <g transform="translate(34, 26)">
        <rect width="16" height="6" rx="1" fill="#1A1C1F" />
        <text x="8" y="4.4" fontSize="2.4" fontWeight="700" fill="#6EF06E" textAnchor="middle" fontFamily="Geist Mono, monospace">.json</text>
        <text x="24" y="4.4" fontSize="2.4" fill="#52515A" textAnchor="middle" fontFamily="Geist Mono, monospace">.tsx</text>
        <text x="40" y="4.4" fontSize="2.4" fill="#52515A" textAnchor="middle" fontFamily="Geist Mono, monospace">.html</text>
      </g>

      <Reticles />
    </svg>
  );
}

// =====================================================================
// 9) EMAIL
// Inbox view with one prominent campaign open, with open + CTR meter.
// =====================================================================

export function EmailIllustration() {
  return (
    <svg viewBox="0 0 200 200" width="200" height="200" fill="none" aria-hidden="true" role="presentation">
      <rect x="0" y="0" width="200" height="200" fill="#FAFBFC" />

      {/* Inbox container */}
      <rect x="14" y="14" width="172" height="172" rx="3" fill="#FFFFFF" stroke={INK} strokeWidth="0.9" />

      {/* Sidebar */}
      <rect x="14" y="14" width="38" height="172" fill="#FAFAFA" />
      <text x="20" y="24" fontSize="3.4" fontWeight="700" fill={INK} fontFamily="Geist, sans-serif" letterSpacing="1.4">INBOX</text>
      <g transform="translate(20, 32)">
        <rect width="26" height="6" rx="1" fill={BRASS} fillOpacity="0.12" stroke={BRASS} strokeWidth="0.4" />
        <rect x="2" y="2.4" width="16" height="1.2" rx="0.6" fill={INK} opacity="0.6" />
        <circle cx="22" cy="3" r="1.2" fill={BRASS} />
      </g>
      {[42, 50, 58, 66, 74, 82, 90, 98].map((y, i) => (
        <g key={i} transform={`translate(20, ${y})`}>
          <rect width="20" height="1.2" rx="0.6" fill={INK} opacity={0.5 - i * 0.04} />
        </g>
      ))}

      {/* Header bar */}
      <rect x="52" y="14" width="134" height="14" fill="#FFFFFF" stroke={INK} strokeWidth="0.4" opacity="0.7" />
      <text x="58" y="24" fontSize="3.6" fontWeight="700" fill={INK} fontFamily="Geist, sans-serif">Q2 Update · AWS Law Firm</text>
      <rect x="160" y="18" width="20" height="6" rx="3" fill={BRASS} />
      <rect x="164" y="20.5" width="12" height="1.4" rx="0.7" fill="#FFFFFF" />

      {/* Email content header */}
      <g transform="translate(58, 32)">
        <circle cx="6" cy="6" r="5" fill={BRASS} />
        <text x="6" y="8" fontSize="5" fontWeight="700" fill="#6EF06E" textAnchor="middle" fontFamily="Geist, sans-serif">R</text>
        <rect x="14" y="2" width="50" height="2" rx="1" fill={INK} opacity="0.7" />
        <rect x="14" y="6" width="80" height="1.6" rx="0.8" fill={INK} opacity="0.5" />
        <rect x="14" y="9.5" width="64" height="1.4" rx="0.7" fill={INK} opacity="0.4" />
      </g>

      {/* Email body */}
      <g transform="translate(58, 50)">
        <rect width="120" height="22" rx="2" fill={INK} fillOpacity="0.06" />
        <rect x="4" y="4" width="44" height="2" rx="1" fill={INK} opacity="0.7" />
        <rect x="4" y="9" width="80" height="1.4" rx="0.7" fill={INK} opacity="0.45" />
        <rect x="4" y="12.5" width="76" height="1.4" rx="0.7" fill={INK} opacity="0.4" />
        <rect x="4" y="16" width="40" height="1.4" rx="0.7" fill={INK} opacity="0.35" />
      </g>

      <g transform="translate(58, 76)">
        <rect width="120" height="1.6" rx="0.8" fill={INK} opacity="0.55" />
        <rect y="4" width="116" height="1.6" rx="0.8" fill={INK} opacity="0.45" />
        <rect y="8" width="118" height="1.6" rx="0.8" fill={INK} opacity="0.45" />
        <rect y="12" width="84" height="1.6" rx="0.8" fill={INK} opacity="0.4" />
        <rect y="16" width="100" height="1.6" rx="0.8" fill={INK} opacity="0.4" />
        <rect y="20" width="68" height="1.6" rx="0.8" fill={INK} opacity="0.35" />
      </g>

      {/* CTA button in email */}
      <g transform="translate(58, 104)">
        <rect width="48" height="10" rx="5" fill={BRASS} />
        <rect x="6" y="4" width="32" height="2" rx="1" fill="#FFFFFF" />
      </g>

      {/* Metrics card */}
      <g transform="translate(58, 122)">
        <rect width="120" height="40" rx="3" stroke={INK} strokeWidth="0.7" fill="#FAFAFA" />
        <text x="6" y="6" fontSize="3.4" fontWeight="700" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1.4">PERFORMANCE</text>

        <g transform="translate(6, 12)">
          <text fontSize="3.4" fill={INK} opacity="0.5" fontFamily="Geist, sans-serif">OPEN</text>
          <text x="0" y="9" fontSize="8" fontWeight="700" fill={INK} fontFamily="Geist, sans-serif">68%</text>
          <rect y="14" width="32" height="2" rx="1" fill={INK} opacity="0.18" />
          <rect y="14" width="22" height="2" rx="1" fill={BRASS} />
        </g>
        <g transform="translate(44, 12)">
          <text fontSize="3.4" fill={INK} opacity="0.5" fontFamily="Geist, sans-serif">CLICK</text>
          <text x="0" y="9" fontSize="8" fontWeight="700" fill={INK} fontFamily="Geist, sans-serif">24%</text>
          <rect y="14" width="32" height="2" rx="1" fill={INK} opacity="0.18" />
          <rect y="14" width="14" height="2" rx="1" fill={BRASS} />
        </g>
        <g transform="translate(82, 12)">
          <text fontSize="3.4" fill={INK} opacity="0.5" fontFamily="Geist, sans-serif">REPLY</text>
          <text x="0" y="9" fontSize="8" fontWeight="700" fill={INK} fontFamily="Geist, sans-serif">9%</text>
          <rect y="14" width="32" height="2" rx="1" fill={INK} opacity="0.18" />
          <rect y="14" width="8" height="2" rx="1" fill={BRASS} />
        </g>
      </g>

      {/* Footer label */}
      <g transform="translate(58, 174)">
        <text fontSize="3.4" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1.4">EMAIL · NURTURE · MONTHLY DIGEST</text>
      </g>

      {/* Sidebar nav items */}
      <g transform="translate(20, 110)">
        <rect width="26" height="6" rx="1" stroke={INK} strokeWidth="0.3" fill="#FFFFFF" opacity="0.8" />
        <rect x="2" y="2" width="3" height="2" rx="0.4" fill={BRASS} />
        <rect x="7" y="2.4" width="16" height="1.2" rx="0.6" fill={INK} opacity="0.55" />
      </g>
      <g transform="translate(20, 118)">
        <rect width="26" height="6" rx="1" stroke={INK} strokeWidth="0.3" fill="#FFFFFF" opacity="0.8" />
        <rect x="2" y="2" width="3" height="2" rx="0.4" fill={INK} opacity="0.4" />
        <rect x="7" y="2.4" width="14" height="1.2" rx="0.6" fill={INK} opacity="0.45" />
      </g>
      <g transform="translate(20, 126)">
        <rect width="26" height="6" rx="1" stroke={INK} strokeWidth="0.3" fill="#FFFFFF" opacity="0.7" />
        <rect x="2" y="2" width="3" height="2" rx="0.4" fill={INK} opacity="0.4" />
        <rect x="7" y="2.4" width="12" height="1.2" rx="0.6" fill={INK} opacity="0.4" />
      </g>
      <g transform="translate(20, 140)">
        <text fontSize="2.6" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1.2">SEGMENTS</text>
        <rect y="2" width="20" height="1.2" rx="0.6" fill={INK} opacity="0.4" />
        <rect y="5" width="22" height="1.2" rx="0.6" fill={INK} opacity="0.4" />
        <rect y="8" width="18" height="1.2" rx="0.6" fill={INK} opacity="0.4" />
        <rect y="11" width="16" height="1.2" rx="0.6" fill={INK} opacity="0.4" />
      </g>

      {/* Send time and recipient count */}
      <g transform="translate(112, 32)">
        <rect width="44" height="6" rx="1" fill={INK} fillOpacity="0.06" stroke={INK} strokeWidth="0.3" />
        <text x="3" y="4" fontSize="2.4" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="1">SENT TUE 9:14AM</text>
        <text x="38" y="4" fontSize="2.4" fontWeight="700" fill={BRASS} textAnchor="end" fontFamily="Geist, sans-serif">3,842</text>
      </g>

      {/* Engagement timeline */}
      <g transform="translate(58, 164)">
        <text fontSize="2.6" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="1.2">7-DAY ENGAGEMENT</text>
        <g transform="translate(0, 4)">
          <rect width="2" height="4" rx="0.5" fill={INK} opacity="0.18" />
          <rect x="4" width="2" height="6" rx="0.5" fill={INK} opacity="0.32" />
          <rect x="8" width="2" height="3" rx="0.5" fill={INK} opacity="0.18" />
          <rect x="12" width="2" height="5" rx="0.5" fill={INK} opacity="0.32" />
          <rect x="16" width="2" height="4" rx="0.5" fill={INK} opacity="0.18" />
          <rect x="20" width="2" height="6" rx="0.5" fill={INK} opacity="0.32" />
          <rect x="24" width="2" height="8" rx="0.5" fill={BRASS} />
        </g>
      </g>

      {/* Recipient list breakdown */}
      <g transform="translate(120, 32)">
        <rect width="38" height="6" rx="1" fill="#FFFFFF" stroke={INK} strokeWidth="0.4" />
        <text x="3" y="4" fontSize="2.4" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="1">EXISTING · 2,148</text>
      </g>
      <g transform="translate(120, 40)">
        <rect width="38" height="6" rx="1" fill="#FFFFFF" stroke={INK} strokeWidth="0.4" />
        <text x="3" y="4" fontSize="2.4" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="1">PROSPECTS · 1,694</text>
      </g>

      {/* Spam score */}
      <g transform="translate(170, 32)">
        <text fontSize="2.4" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1.2">SPAM</text>
        <text y="6" fontSize="5" fontWeight="700" fill={INK} fontFamily="Geist, sans-serif">0.2</text>
      </g>

      {/* Reply / unsub mini icons */}
      <g transform="translate(58, 96)">
        <path d="M 0 0 L 8 0 L 8 4 L 0 4 Z M 0 0 L 4 3 L 8 0" stroke={INK} strokeWidth="0.5" fill="none" opacity="0.55" />
        <text x="11" y="3" fontSize="2.6" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif" letterSpacing="1">REPLY · 24m</text>
      </g>

      {/* AB test winner badge */}
      <g transform="translate(122, 32)">
        <rect width="38" height="6" rx="3" fill={BRASS} />
        <circle cx="4" cy="3" r="1.4" fill="#6EF06E" />
        <text x="19" y="4.4" fontSize="2.6" fontWeight="700" fill="#6EF06E" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="1">A/B WINNER · +14%</text>
      </g>

      {/* Click map visualization on body */}
      <g opacity="0.4">
        <circle cx="62" cy="86" r="1.4" fill={BRASS} />
        <circle cx="98" cy="86" r="2.2" fill={BRASS} />
        <circle cx="128" cy="86" r="1.8" fill={BRASS} />
        <circle cx="76" cy="92" r="1.6" fill={BRASS} />
        <circle cx="114" cy="92" r="2.6" fill={BRASS} />
      </g>

      {/* Deliverability gauge */}
      <g transform="translate(58, 156)">
        <text fontSize="2.4" fill={INK} opacity="0.5" fontFamily="Geist, sans-serif" letterSpacing="1.2">DELIVERABILITY</text>
        <g transform="translate(0, 3)">
          <rect width="48" height="2" rx="1" fill={INK} opacity="0.12" />
          <rect width="46" height="2" rx="1" fill={BRASS} />
          <text x="52" y="2" fontSize="2.6" fontWeight="700" fill={INK} fontFamily="Geist, sans-serif">96%</text>
        </g>
      </g>

      {/* Attachment indicator */}
      <g transform="translate(168, 58)">
        <rect width="14" height="6" rx="1" fill={INK} fillOpacity="0.06" stroke={INK} strokeWidth="0.4" />
        <path d="M 3 2 L 3 4 Q 3 5 4 5 L 5 5 Q 6 5 6 4 L 6 1.5" stroke={INK} strokeWidth="0.5" fill="none" opacity="0.55" />
        <text x="10" y="4.4" fontSize="2.4" fill={INK} opacity="0.55" textAnchor="middle" fontFamily="Geist, sans-serif">2</text>
      </g>

      <Reticles />
    </svg>
  );
}

// =====================================================================
// 10) SOCIAL
// Three platform mockups (IG, TikTok, X) with view counts and growth.
// =====================================================================

export function SocialIllustration() {
  return (
    <svg viewBox="0 0 200 200" width="200" height="200" fill="none" aria-hidden="true" role="presentation">
      <rect x="0" y="0" width="200" height="200" fill="#FAFBFC" />

      {/* Instagram post card (left) */}
      <g transform="translate(18, 30)">
        <rect width="50" height="90" rx="3" fill="#FFFFFF" stroke={INK} strokeWidth="0.7" />
        <rect width="50" height="50" fill={INK} fillOpacity="0.06" />
        <polygon points="0,50 14,32 26,40 42,28 50,32 50,50" fill={INK} opacity="0.18" />
        <circle cx="36" cy="22" r="3" fill={BRASS} opacity="0.7" />
        <g transform="translate(4, 4)">
          <circle r="3" stroke="#FFFFFF" strokeWidth="0.6" fill={BRASS} />
          <circle r="1" fill="#FFFFFF" />
        </g>
        <g transform="translate(4, 54)">
          <path d="M 0 4 Q 0 0 3 0 Q 5 0 5 2 Q 5 0 7 0 Q 10 0 10 4 Q 10 7 5 11 Q 0 7 0 4 Z" fill={BRASS} />
          <circle cx="14" cy="5" r="3" stroke={INK} strokeWidth="0.6" fill="none" opacity="0.55" />
          <path d="M 22 0 L 22 11 L 25.5 8 L 29 11 L 29 0 Z" stroke={INK} strokeWidth="0.6" fill="none" opacity="0.55" />
        </g>
        <rect x="4" y="70" width="42" height="1.4" rx="0.7" fill={INK} opacity="0.6" />
        <rect x="4" y="74" width="38" height="1.2" rx="0.6" fill={INK} opacity="0.45" />
        <rect x="4" y="78" width="34" height="1.2" rx="0.6" fill={INK} opacity="0.35" />
        <rect x="4" y="82" width="20" height="1.2" rx="0.6" fill={BRASS} opacity="0.7" />
      </g>

      {/* TikTok video card (center, taller, brass border) */}
      <g transform="translate(76, 22)">
        <rect width="48" height="106" rx="3" fill="#FFFFFF" stroke={BRASS} strokeWidth="1" />
        <rect x="2" y="2" width="44" height="76" rx="2" fill={INK} fillOpacity="0.06" />
        <polygon points="2,78 14,60 26,68 38,52 46,56 46,78" fill={INK} opacity="0.16" />
        {/* Play */}
        <polygon points="22,30 22,50 36,40" fill="#FFFFFF" stroke={INK} strokeWidth="0.6" />
        {/* Likes */}
        <g transform="translate(38, 70)">
          <path d="M -3 -2 Q -3 -6 0 -6 Q 2 -6 2 -4 Q 2 -6 4 -6 Q 7 -6 7 -2 Q 7 1 2 5 Q -3 1 -3 -2 Z" fill="#FFFFFF" stroke={INK} strokeWidth="0.5" />
        </g>
        <g transform="translate(4, 84)">
          <rect width="40" height="1.6" rx="0.8" fill={INK} opacity="0.7" />
          <rect y="4" width="32" height="1.4" rx="0.7" fill={INK} opacity="0.5" />
          <rect y="8" width="22" height="1.4" rx="0.7" fill={BRASS} opacity="0.7" />
          <text y="18" fontSize="3.4" fontWeight="700" fill={INK} fontFamily="Geist, sans-serif">1.2M</text>
          <text x="14" y="18" fontSize="3" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif">views</text>
        </g>
      </g>

      {/* X (Twitter) post card (right) */}
      <g transform="translate(132, 36)">
        <rect width="48" height="82" rx="3" fill="#FFFFFF" stroke={INK} strokeWidth="0.7" />
        <g transform="translate(4, 4)">
          <circle r="3" fill={BRASS} />
          <text y="1" fontSize="3.4" fontWeight="700" fill="#6EF06E" textAnchor="middle" fontFamily="Geist, sans-serif">R</text>
          <rect x="6" y="-2" width="24" height="1.4" rx="0.7" fill={INK} opacity="0.7" />
          <rect x="6" y="1" width="18" height="1.2" rx="0.6" fill={INK} opacity="0.5" />
        </g>
        <rect x="4" y="14" width="40" height="1.4" rx="0.7" fill={INK} opacity="0.6" />
        <rect x="4" y="18" width="36" height="1.4" rx="0.7" fill={INK} opacity="0.5" />
        <rect x="4" y="22" width="32" height="1.4" rx="0.7" fill={INK} opacity="0.45" />
        <rect x="4" y="26" width="28" height="1.4" rx="0.7" fill={INK} opacity="0.4" />
        <rect x="4" y="34" width="40" height="20" rx="1" fill={INK} fillOpacity="0.06" />
        <polygon points="4,54 14,42 24,48 34,40 44,46 44,54" fill={INK} opacity="0.18" />
        <g transform="translate(4, 60)">
          <circle r="1.2" fill={INK} opacity="0.5" />
          <text x="3" y="1.4" fontSize="3" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif">84</text>
          <circle cx="12" r="1.2" fill={INK} opacity="0.5" />
          <text x="15" y="1.4" fontSize="3" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif">142</text>
          <circle cx="26" r="1.2" fill={BRASS} />
          <text x="29" y="1.4" fontSize="3" fontWeight="700" fill={BRASS} fontFamily="Geist, sans-serif">2.4k</text>
        </g>
        <g transform="translate(4, 70)">
          <rect width="40" height="6" rx="3" fill={BRASS} />
          <rect x="6" y="2.4" width="28" height="1.2" rx="0.6" fill="#FFFFFF" />
        </g>
      </g>

      {/* Aggregate strip */}
      <g transform="translate(18, 140)">
        <rect width="164" height="32" rx="3" fill="#FFFFFF" stroke={INK} strokeWidth="0.7" />
        <text x="6" y="8" fontSize="3.4" fontWeight="700" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1.4">CONSOLIDATED</text>

        <g transform="translate(6, 14)">
          <text fontSize="3.2" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif">REACH</text>
          <text y="9" fontSize="8" fontWeight="700" fill={INK} fontFamily="Geist, sans-serif">3.8M</text>
          <text y="15" fontSize="3" fill={BRASS} fontFamily="Geist, sans-serif">+186% YoY</text>
        </g>
        <g transform="translate(54, 14)">
          <text fontSize="3.2" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif">FOLLOWERS</text>
          <text y="9" fontSize="8" fontWeight="700" fill={INK} fontFamily="Geist, sans-serif">42K</text>
          <text y="15" fontSize="3" fill={BRASS} fontFamily="Geist, sans-serif">+8K · 90D</text>
        </g>
        <g transform="translate(102, 14)">
          <text fontSize="3.2" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif">SHARE RATE</text>
          <text y="9" fontSize="8" fontWeight="700" fill={INK} fontFamily="Geist, sans-serif">12%</text>
          <text y="15" fontSize="3" fill={BRASS} fontFamily="Geist, sans-serif">vs IND 2%</text>
        </g>
        <g transform="translate(140, 14)">
          {/* Mini trend */}
          <path d="M 0 14 L 4 12 L 8 8 L 12 5 L 16 2" stroke={BRASS} strokeWidth="0.8" fill="none" />
          <circle cx="16" cy="2" r="1.4" fill={BRASS} />
          <rect width="20" height="2" y="16" rx="1" fill={INK} opacity="0.12" />
          <rect width="14" height="2" y="16" rx="1" fill={BRASS} />
        </g>
      </g>

      {/* Bottom tag */}
      <g transform="translate(20, 184)">
        <text fontSize="3.4" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1.4">SOCIAL · 3 NETWORKS · WEEKLY CADENCE · OWNED</text>
      </g>

      {/* Top header row */}
      <g transform="translate(18, 14)">
        <text fontSize="3.4" fontWeight="700" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1.4">ORGANIC SOCIAL</text>
        <text x="164" y="0" fontSize="3" fill={INK} opacity="0.55" textAnchor="end" fontFamily="Geist, sans-serif">90 DAYS</text>
      </g>

      {/* Trending hashtags */}
      <g transform="translate(18, 130)">
        <text fontSize="2.6" fill={BRASS} fontFamily="Geist, sans-serif" letterSpacing="1.2">TRENDING TAGS</text>
        <g transform="translate(0, 3)">
          <rect width="32" height="4" rx="2" fill={BRASS} fillOpacity="0.12" stroke={BRASS} strokeWidth="0.3" />
          <text x="3" y="2.8" fontSize="2.4" fill={BRASS} fontFamily="Geist, sans-serif">#TampaProbate</text>
          <rect x="34" width="30" height="4" rx="2" stroke={INK} strokeWidth="0.3" fill="#FFFFFF" />
          <text x="37" y="2.8" fontSize="2.4" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif">#EstateLaw</text>
          <rect x="66" width="36" height="4" rx="2" stroke={INK} strokeWidth="0.3" fill="#FFFFFF" />
          <text x="69" y="2.8" fontSize="2.4" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif">#FloridaLawyer</text>
          <rect x="104" width="24" height="4" rx="2" stroke={INK} strokeWidth="0.3" fill="#FFFFFF" />
          <text x="107" y="2.8" fontSize="2.4" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif">#WillsTrusts</text>
          <rect x="130" width="34" height="4" rx="2" stroke={INK} strokeWidth="0.3" fill="#FFFFFF" />
          <text x="133" y="2.8" fontSize="2.4" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif">#TampaLawFirm</text>
        </g>
      </g>

      {/* Top performing post badge */}
      <g transform="translate(76, 12)">
        <rect width="48" height="8" rx="4" fill={INK} />
        <circle cx="5" cy="4" r="2" fill="#6EF06E" />
        <polygon points="3.5,4 6.5,4 5,2 5,6" fill={INK} transform="rotate(0 5 4)" />
        <text x="28" y="5.4" fontSize="3" fontWeight="700" fill="#6EF06E" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="1.4">TOP POST · 1.2M</text>
      </g>

      {/* Cadence chart strip */}
      <g transform="translate(60, 174)">
        <text fontSize="2.6" fill={INK} opacity="0.5" fontFamily="Geist, sans-serif" letterSpacing="1.2">CADENCE</text>
        <g transform="translate(0, 3)">
          <rect width="2" height="6" rx="0.5" fill={BRASS} />
          <rect x="4" width="2" height="4" rx="0.5" fill={INK} opacity="0.4" />
          <rect x="8" width="2" height="5" rx="0.5" fill={INK} opacity="0.45" />
          <rect x="12" width="2" height="6" rx="0.5" fill={BRASS} />
          <rect x="16" width="2" height="3" rx="0.5" fill={INK} opacity="0.3" />
          <rect x="20" width="2" height="4" rx="0.5" fill={INK} opacity="0.45" />
          <rect x="24" width="2" height="6" rx="0.5" fill={BRASS} />
        </g>
        <text x="32" y="6" fontSize="2.6" fill={BRASS} fontFamily="Geist, sans-serif">3×/wk</text>
      </g>

      {/* Story circles row at top */}
      <g transform="translate(18, 24)">
        <circle r="3" fill={BRASS} stroke="#FFFFFF" strokeWidth="0.4" />
        <circle cx="8" r="3" stroke={BRASS} strokeWidth="0.6" fill="#FFFFFF" />
        <circle cx="16" r="3" stroke={INK} strokeWidth="0.4" fill="#FFFFFF" opacity="0.7" />
        <circle cx="24" r="3" stroke={INK} strokeWidth="0.4" fill="#FFFFFF" opacity="0.6" />
        <circle cx="32" r="3" stroke={INK} strokeWidth="0.4" fill="#FFFFFF" opacity="0.55" />
        <circle cx="40" r="3" stroke={INK} strokeWidth="0.4" fill="#FFFFFF" opacity="0.45" />
      </g>

      {/* Platform performance summary table */}
      <g transform="translate(132, 122)">
        <rect width="48" height="14" rx="2" fill="#FFFFFF" stroke={INK} strokeWidth="0.5" />
        <line x1="0" y1="4" x2="48" y2="4" stroke={INK} strokeWidth="0.3" opacity="0.18" />
        <line x1="0" y1="9" x2="48" y2="9" stroke={INK} strokeWidth="0.3" opacity="0.18" />
        <text x="2" y="3" fontSize="2.4" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif">IG</text>
        <text x="46" y="3" fontSize="2.4" fontWeight="700" fill={INK} textAnchor="end" fontFamily="Geist, sans-serif">28K</text>
        <text x="2" y="7.5" fontSize="2.4" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif">TT</text>
        <text x="46" y="7.5" fontSize="2.4" fontWeight="700" fill={BRASS} textAnchor="end" fontFamily="Geist, sans-serif">8K</text>
        <text x="2" y="12.5" fontSize="2.4" fill={INK} opacity="0.55" fontFamily="Geist, sans-serif">X</text>
        <text x="46" y="12.5" fontSize="2.4" fontWeight="700" fill={INK} textAnchor="end" fontFamily="Geist, sans-serif">6K</text>
      </g>

      <Reticles />
    </svg>
  );
}
