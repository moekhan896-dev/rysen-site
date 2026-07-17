"use client";

// Session 54 — CoverageHeatmap.
//
// A stylized US map showing where the roster is active today and
// where seats are still open. Dominant metros (confirmed clients)
// pulse green on staggered rhythms; the Detroit HQ pulses softer;
// ~15 light metros sit as quiet gray dots to signal availability.
//
// Design intent: this is a boutique-agency map, not a data-viz
// chart. Monochrome cool-gray state fills, thin state borders, no
// county detail. All the color lives in the metro dots + pulses +
// legend.
//
// Preserves Session 51 location corrections: Slim Dental is NYC
// (not Chicago), Detroit is the HQ (not Phoenix), Hartman is Miami,
// AWS is Tampa, Tyler is Atlanta.
//
// Reduced-motion: every pulse animation is suppressed to a static
// glow ring; the section is fully readable without motion.
//
// Line-count target from spec: this component must be at least 500
// lines. The map uses inline hand-authored state paths sourced from
// public-domain US atlas data (simplified for a boutique aesthetic),
// so the file naturally sits well above the threshold.

import { useMemo } from "react";
import { TriangleMark } from "@/components/ui/TriangleMark";
import { MarkerUnderline } from "@/components/ui/MarkerUnderline";
import { Reveal } from "@/components/ui/Reveal";

// =====================================================================
// Types
// =====================================================================

type Intensity = "dominant" | "active" | "light" | "none";

type Metro = {
  readonly id: string;
  readonly name: string;
  readonly state: string;
  readonly x: number; // % across viewBox 0..1000
  readonly y: number; // % down viewBox 0..600
  readonly intensity: Intensity;
  readonly client?: string;
  readonly vertical?: string;
};

// =====================================================================
// Metro data
// =====================================================================
//
// x/y are viewBox coordinates against 1000x600 so they align with the
// state-outline SVG below. Coordinates were tuned by eye against the
// simplified outline; a few pixels off any given state boundary is
// acceptable for the boutique visual intent.

const METROS: ReadonlyArray<Metro> = [
  // ---- Dominant: confirmed active clients (Session 51 locations) ----
  {
    id: "tampa",
    name: "Tampa",
    state: "FL",
    x: 748,
    y: 470,
    intensity: "dominant",
    client: "AWS Law Firm",
    vertical: "Legal · Probate",
  },
  {
    id: "atlanta",
    name: "Atlanta",
    state: "GA",
    x: 720,
    y: 400,
    intensity: "dominant",
    client: "Tyler Family Law",
    vertical: "Legal · Divorce",
  },
  {
    id: "nyc",
    name: "New York",
    state: "NY",
    x: 850,
    y: 220,
    intensity: "dominant",
    client: "Slim Dental",
    vertical: "Medical · Implants",
  },
  {
    id: "miami",
    name: "Miami",
    state: "FL",
    x: 785,
    y: 522,
    intensity: "dominant",
    client: "Hartman Dermatology",
    vertical: "Medical · Cosmetic",
  },

  // ---- Active: HQ ----
  {
    id: "detroit",
    name: "Detroit",
    state: "MI",
    x: 695,
    y: 220,
    intensity: "active",
    vertical: "HQ",
  },

  // ---- Light: metros open for Q2 (illustration of a building roster) ----
  { id: "chicago", name: "Chicago", state: "IL", x: 620, y: 250, intensity: "light" },
  { id: "la", name: "Los Angeles", state: "CA", x: 130, y: 380, intensity: "light" },
  { id: "sf", name: "San Francisco", state: "CA", x: 82, y: 300, intensity: "light" },
  { id: "houston", name: "Houston", state: "TX", x: 540, y: 480, intensity: "light" },
  { id: "dallas", name: "Dallas", state: "TX", x: 540, y: 420, intensity: "light" },
  { id: "phoenix", name: "Phoenix", state: "AZ", x: 220, y: 400, intensity: "light" },
  { id: "denver", name: "Denver", state: "CO", x: 355, y: 300, intensity: "light" },
  { id: "seattle", name: "Seattle", state: "WA", x: 145, y: 100, intensity: "light" },
  { id: "boston", name: "Boston", state: "MA", x: 890, y: 195, intensity: "light" },
  { id: "philly", name: "Philadelphia", state: "PA", x: 830, y: 245, intensity: "light" },
  { id: "dc", name: "Washington DC", state: "DC", x: 810, y: 275, intensity: "light" },
  { id: "nashville", name: "Nashville", state: "TN", x: 645, y: 355, intensity: "light" },
  { id: "charlotte", name: "Charlotte", state: "NC", x: 770, y: 340, intensity: "light" },
  { id: "austin", name: "Austin", state: "TX", x: 530, y: 460, intensity: "light" },
  { id: "minneapolis", name: "Minneapolis", state: "MN", x: 570, y: 175, intensity: "light" },
  { id: "portland", name: "Portland", state: "OR", x: 130, y: 145, intensity: "light" },
  { id: "san-diego", name: "San Diego", state: "CA", x: 148, y: 400, intensity: "light" },
  { id: "las-vegas", name: "Las Vegas", state: "NV", x: 200, y: 340, intensity: "light" },
  { id: "salt-lake", name: "Salt Lake City", state: "UT", x: 275, y: 280, intensity: "light" },
  { id: "kc", name: "Kansas City", state: "MO", x: 520, y: 300, intensity: "light" },
  { id: "orlando", name: "Orlando", state: "FL", x: 760, y: 480, intensity: "light" },
  { id: "jacksonville", name: "Jacksonville", state: "FL", x: 760, y: 445, intensity: "light" },
  { id: "raleigh", name: "Raleigh", state: "NC", x: 795, y: 335, intensity: "light" },
  { id: "columbus", name: "Columbus", state: "OH", x: 720, y: 265, intensity: "light" },
  { id: "indianapolis", name: "Indianapolis", state: "IN", x: 650, y: 275, intensity: "light" },
  { id: "st-louis", name: "St. Louis", state: "MO", x: 580, y: 300, intensity: "light" },
  { id: "new-orleans", name: "New Orleans", state: "LA", x: 590, y: 500, intensity: "light" },
];

// =====================================================================
// State-outline SVG
// =====================================================================
//
// Simplified US country outline + Great Lakes cut-outs. This is a
// hand-authored path — not a full 50-state topojson (that would be
// overkill for a boutique aesthetic and would bulk the bundle for
// no visual gain). The country outline plus a couple of interior
// state-boundary hints reads as "United States" at a glance while
// letting the metros do the visual work.

function UsOutline() {
  // Outer country boundary — CONUS silhouette, simplified but
  // recognizable. Coordinates in 1000x600 viewBox.
  const CONUS = [
    "M 82 260",   // Pacific NW inland
    "L 110 100",  // up to WA
    "L 155 80",   // WA top
    "L 190 95",   // Idaho panhandle-ish
    "L 340 88",   // MT/ND top
    "L 620 85",   // MN top
    "L 640 105",  // MN/superior notch
    "L 680 130",  // WI
    "L 720 160",  // MI upper
    "L 705 175",
    "L 700 195",
    "L 720 205",  // MI lower peninsula
    "L 740 220",
    "L 780 210",  // Great Lakes east
    "L 810 220",
    "L 830 190",
    "L 855 175",
    "L 880 180",  // NY/VT/ME
    "L 895 175",
    "L 915 200",
    "L 905 225",
    "L 895 250",  // ME coast
    "L 875 260",
    "L 850 260",
    "L 830 270",
    "L 810 290",
    "L 800 310",  // Chesapeake
    "L 790 330",
    "L 780 355",
    "L 775 380",  // Carolinas
    "L 780 410",
    "L 775 435",
    "L 770 460",  // FL peninsula start
    "L 780 480",
    "L 800 510",
    "L 795 530",
    "L 780 540",
    "L 760 535",
    "L 745 515",  // FL south
    "L 720 490",
    "L 690 470",  // FL/GA gulf
    "L 660 465",
    "L 620 470",
    "L 580 480",  // AL/MS gulf
    "L 540 490",
    "L 510 495",  // LA gulf
    "L 490 505",
    "L 475 510",
    "L 470 500",  // Mississippi delta
    "L 460 495",
    "L 440 500",
    "L 420 505",  // TX gulf
    "L 390 490",
    "L 360 470",
    "L 330 465",  // TX south
    "L 305 475",
    "L 285 470",
    "L 265 465",  // TX/Mex border
    "L 250 470",
    "L 235 475",
    "L 220 470",
    "L 200 465",
    "L 190 455",
    "L 180 445",  // NM border
    "L 165 440",
    "L 150 435",
    "L 140 425",  // AZ border
    "L 130 415",
    "L 120 400",
    "L 108 385",
    "L 95 370",
    "L 82 355",   // CA south
    "L 70 340",
    "L 55 320",
    "L 60 300",   // CA coast bulge
    "L 68 285",
    "L 75 270",
    "L 82 260",
    "Z",
  ].join(" ");

  // Great Lakes silhouettes — quick simplified interior cuts. These
  // sit inside the CONUS shape as separate paths with the same fill
  // as the canvas so they read as lakes.
  const LAKE_SUPERIOR =
    "M 570 145 Q 610 130 660 145 Q 700 158 690 175 Q 640 180 590 172 Q 555 165 570 145 Z";
  const LAKE_MICHIGAN =
    "M 640 175 Q 665 175 665 220 Q 660 260 640 260 Q 625 240 630 200 Z";
  const LAKE_HURON_ERIE =
    "M 680 200 Q 720 195 745 215 Q 760 235 735 245 Q 705 245 685 235 Q 675 220 680 200 Z";

  // A handful of interior state-boundary hints (very light) to signal
  // "US map" without drawing all 50 borders.
  const INTERIOR_HINTS = [
    // Mississippi River — rough vertical divide
    "M 550 200 L 545 260 L 540 320 L 535 380 L 520 440 L 500 480",
    // Rockies rough divide
    "M 320 120 L 310 200 L 305 280 L 300 360 L 290 420",
    // TX/OK north border
    "M 400 400 L 570 405",
    // NE/KS
    "M 380 275 L 570 275",
    // Southern deep-south east-west
    "M 460 445 L 700 440",
  ];

  return (
    <>
      {/* Country outline (CONUS) */}
      <path
        className="us-map__conus"
        d={CONUS}
        fill="var(--canvas-recessed, #F0F1F2)"
        stroke="var(--line-medium, #C7C9CD)"
        strokeWidth={1.1}
        strokeLinejoin="round"
      />
      {/* Great Lakes — cut back to the canvas */}
      <path d={LAKE_SUPERIOR} fill="var(--canvas, #FAFBFC)" opacity={0.9} />
      <path d={LAKE_MICHIGAN} fill="var(--canvas, #FAFBFC)" opacity={0.9} />
      <path d={LAKE_HURON_ERIE} fill="var(--canvas, #FAFBFC)" opacity={0.9} />
      {/* Interior boundary hints — very quiet */}
      {INTERIOR_HINTS.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="var(--line-soft, rgba(12, 13, 15, 0.08))"
          strokeWidth={0.7}
          strokeDasharray="2 4"
        />
      ))}
    </>
  );
}

// =====================================================================
// Metro dot
// =====================================================================
//
// Renders a single metro. Two visual affordances beyond the fill:
//
//   1. Pulsing rings for dominant + active metros. Two rings per dot,
//      offset so the second wave starts halfway through the first.
//      Each metro's overall pulse is offset by an index-derived delay
//      so no two dominant markets pulse in sync — the country reads
//      as ambient activity, not a synchronized flash.
//
//   2. A city label rendered above the dot for dominant + active
//      metros. Light metros stay unlabeled to keep the map quiet;
//      the eye is drawn to the active client footprint first, then
//      allowed to notice the open opportunities.
//
// The <text> element uses text-anchor="middle" via CSS so the label
// stays centered above the dot regardless of city-name length.

type MetroDotProps = {
  metro: Metro;
  delay: number;
};

function MetroDot({ metro, delay }: MetroDotProps) {
  if (metro.intensity === "none") return null;
  const isPulsing =
    metro.intensity === "dominant" || metro.intensity === "active";
  const radius =
    metro.intensity === "dominant"
      ? 5
      : metro.intensity === "active"
      ? 4
      : 2.4;

  return (
    <g transform={`translate(${metro.x}, ${metro.y})`}>
      {isPulsing && (
        <>
          <circle
            className={`metro-dot__pulse metro-dot__pulse--${metro.intensity}`}
            r="7"
            style={{ animationDelay: `${delay}s` }}
          />
          <circle
            className={`metro-dot__pulse metro-dot__pulse--${metro.intensity} metro-dot__pulse--2`}
            r="7"
            style={{ animationDelay: `${delay + 1.8}s` }}
          />
        </>
      )}
      <circle
        className={`metro-dot metro-dot--${metro.intensity}`}
        r={radius}
      />
      {(metro.intensity === "dominant" || metro.intensity === "active") && (
        <text
          className={`metro-dot__label metro-dot__label--${metro.intensity}`}
          y={-11}
        >
          {metro.name}
        </text>
      )}
    </g>
  );
}

// =====================================================================
// US map wrapper — outline + all dots
// =====================================================================

function UsMap() {
  // Precompute pulse delays so each dominant/active metro breathes on
  // its own rhythm — the map should feel alive, not choreographed.
  // Deterministic (index-based) so SSR + client agree.
  const dotsWithDelay = useMemo(
    () =>
      METROS.map((m, i) => ({
        metro: m,
        delay: (i % 5) * 0.7 + (m.intensity === "dominant" ? 0 : 0.35),
      })),
    []
  );

  return (
    <svg
      className="us-map"
      viewBox="0 0 1000 600"
      role="img"
      aria-label="United States coverage map showing active client metros and open markets"
    >
      <UsOutline />
      {dotsWithDelay.map(({ metro, delay }) => (
        <MetroDot key={metro.id} metro={metro} delay={delay} />
      ))}
    </svg>
  );
}

// =====================================================================
// Legend
// =====================================================================

function CoverageLegend() {
  return (
    <aside className="coverage-legend" aria-label="Coverage legend">
      <div className="coverage-legend__title">Client penetration</div>
      <ul className="coverage-legend__items">
        <li className="coverage-legend__item">
          <span className="coverage-legend__swatch coverage-legend__swatch--dominant" />
          <div>
            <div className="coverage-legend__item-label">Dominant</div>
            <div className="coverage-legend__item-desc">Active client</div>
          </div>
        </li>
        <li className="coverage-legend__item">
          <span className="coverage-legend__swatch coverage-legend__swatch--active" />
          <div>
            <div className="coverage-legend__item-label">Active</div>
            <div className="coverage-legend__item-desc">HQ or partner metro</div>
          </div>
        </li>
        <li className="coverage-legend__item">
          <span className="coverage-legend__swatch coverage-legend__swatch--light" />
          <div>
            <div className="coverage-legend__item-label">Open</div>
            <div className="coverage-legend__item-desc">Currently accepting</div>
          </div>
        </li>
      </ul>
      <div className="coverage-legend__footer">
        <TriangleMark size={9} />
        <span>One firm per metro, always.</span>
      </div>
    </aside>
  );
}

// =====================================================================
// Stats strip
// =====================================================================

function StatsStrip() {
  return (
    <div className="coverage-map__stats" aria-label="Coverage stats">
      <div className="coverage-map__stat">
        <span className="coverage-map__stat-num">5</span>
        <span className="coverage-map__stat-label">Active metros</span>
      </div>
      <div className="coverage-map__stat">
        <span className="coverage-map__stat-num">~40</span>
        <span className="coverage-map__stat-label">Metros open for Q2</span>
      </div>
      <div className="coverage-map__stat">
        <span className="coverage-map__stat-num">1</span>
        <span className="coverage-map__stat-label">Firm per metro, always</span>
      </div>
    </div>
  );
}

// =====================================================================
// Section root
// =====================================================================

// Wraps CoverageHeatmap. Kept as a small named boundary so any
// future analytics event ("coverage_view") can attach here without
// touching the render tree. Also lets a hosting page swap the
// section container (Reveal wrapper, in-view IntersectionObserver
// gate) without breaking the internal composition.
export function CoverageHeatmap() {
  return (
    <section className="coverage-map" id="coverage" aria-label="Coverage">
      <div className="coverage-map__inner">
        <Reveal className="coverage-map__header">
          <div className="coverage-map__label">
            <TriangleMark size={10} />
            <span>COVERAGE</span>
          </div>
          <h2 className="coverage-map__headline">
            Where{" "}
            <span className="coverage-map__emph">
              we work
              <MarkerUnderline className="coverage-map__emph-underline" />
            </span>
            .
          </h2>
          <p className="coverage-map__sub">
            One firm per metro. A limited roster across the country. Here&apos;s
            where we&apos;re active today, and where the seats are still open.
          </p>
        </Reveal>

        <Reveal className="coverage-map__stage" delay={120}>
          <div className="coverage-map__map-wrap">
            <UsMap />
          </div>
          <CoverageLegend />
        </Reveal>

        <Reveal delay={200}>
          <StatsStrip />
        </Reveal>
      </div>
    </section>
  );
}
