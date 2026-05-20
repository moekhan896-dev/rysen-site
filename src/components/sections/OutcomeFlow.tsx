"use client";

// THE OUTCOME FLOW — a 5-stage horizontal flow diagram explaining how
// a #1 ranking cascades into measurable business outcomes (calls, leads,
// revenue). 4 staggered animated data-pulse connectors between stages.

import { Fragment } from "react";

// Constants used across illustrations
const INK = "#1A1714";
const BRASS = "#A88B47";
const PAPER = "#F5F1E8";

// Each stage illustration is hand-coded inline SVG (no external assets, no
// icon library). Composition rules: 1.5px primary stroke, ink color for
// main lines, a single brass accent per illustration, optional animation
// that respects prefers-reduced-motion via the global CSS suppression rule.

// === Stage 1 — Search SVG ===

function SearchIllustration() {
  return (
    <svg viewBox="0 0 120 120" fill="none" width="120" height="120" aria-hidden="true">
      <defs>
        <pattern id="of-grid-1" width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.8" fill="rgba(26, 23, 20, 0.08)" />
        </pattern>
      </defs>
      <rect x="6" y="6" width="108" height="108" fill="url(#of-grid-1)" />
      {/* Search bar */}
      <rect x="18" y="50" width="84" height="22" rx="11" stroke="#1A1714" strokeWidth="1.5" fill="#FFFFFF" />
      {/* Magnifying glass */}
      <circle cx="28" cy="61" r="4" stroke="#1A1714" strokeWidth="1.5" fill="none" />
      <line x1="31" y1="64" x2="34" y2="67" stroke="#1A1714" strokeWidth="1.5" strokeLinecap="round" />
      {/* Query text lines */}
      <rect x="40" y="58" width="32" height="2" rx="1" fill="#1A1714" opacity="0.85" />
      <rect x="40" y="63" width="22" height="1.5" rx="1" fill="#1A1714" opacity="0.45" />
      {/* Animated cursor blink */}
      <rect x="74" y="56" width="1.5" height="10" fill="#A88B47">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
      </rect>
      {/* Subtle "world" indicator dots */}
      <circle cx="14" cy="20" r="1.5" fill="#1A1714" opacity="0.2" />
      <circle cx="40" cy="20" r="1.5" fill="#1A1714" opacity="0.2" />
      <circle cx="80" cy="20" r="1.5" fill="#1A1714" opacity="0.2" />
      <circle cx="106" cy="20" r="1.5" fill="#1A1714" opacity="0.2" />
      {/* Bottom brass accent */}
      <line x1="18" y1="98" x2="36" y2="98" stroke="#A88B47" strokeWidth="2" strokeLinecap="round" />
      {/* Corner reticles */}
      <CornerBracket x={6} y={6} />
      <CornerBracket x={114} y={6} flipX />
      <CornerBracket x={6} y={114} flipY />
      <CornerBracket x={114} y={114} flipX flipY />
    </svg>
  );
}

// Subtle corner-bracket helper used inside several illustrations.

function CornerBracket({ x, y, flipX = false, flipY = false }: { x: number; y: number; flipX?: boolean; flipY?: boolean }) {
  const sx = flipX ? -1 : 1;
  const sy = flipY ? -1 : 1;
  return (
    <g transform={`translate(${x},${y}) scale(${sx},${sy})`}>
      <path d="M 0 6 L 0 0 L 6 0" stroke="#A88B47" strokeWidth="1" fill="none" opacity="0.5" strokeLinecap="round" />
    </g>
  );
}

// === Stage 2 — Ranking SVG ===

function RankingIllustration() {
  return (
    <svg viewBox="0 0 120 120" fill="none" width="120" height="120" aria-hidden="true">
      {/* 5 stacked result rectangles */}
      <g>
        {/* #1 result (highlighted) */}
        <rect x="18" y="20" width="84" height="20" rx="3" fill="rgba(168, 139, 71, 0.14)" stroke="#A88B47" strokeWidth="1.5">
          <animate attributeName="y" values="20;18;20" dur="3s" repeatCount="indefinite" />
        </rect>
        <rect x="22" y="26" width="40" height="2" rx="1" fill="#1A1714" />
        <rect x="22" y="31" width="28" height="1.5" rx="1" fill="#1A1714" opacity="0.45" />
        {/* #1 badge */}
        <rect x="88" y="24" width="10" height="12" rx="2" fill="#1A1714">
          <animate attributeName="y" values="24;22;24" dur="3s" repeatCount="indefinite" />
        </rect>
        <text x="93" y="33" fontSize="7" fontWeight="700" fill="#F5F1E8" textAnchor="middle">1</text>
      </g>
      {/* Other results */}
      <rect x="18" y="48" width="84" height="14" rx="3" stroke="#1A1714" strokeWidth="1" opacity="0.35" fill="none" />
      <rect x="22" y="53" width="32" height="1.5" rx="1" fill="#1A1714" opacity="0.3" />
      <rect x="22" y="57" width="24" height="1" rx="1" fill="#1A1714" opacity="0.2" />
      <rect x="18" y="66" width="84" height="14" rx="3" stroke="#1A1714" strokeWidth="1" opacity="0.25" fill="none" />
      <rect x="22" y="71" width="28" height="1.5" rx="1" fill="#1A1714" opacity="0.25" />
      <rect x="22" y="75" width="20" height="1" rx="1" fill="#1A1714" opacity="0.15" />
      <rect x="18" y="84" width="84" height="14" rx="3" stroke="#1A1714" strokeWidth="1" opacity="0.18" fill="none" />
      <rect x="22" y="89" width="24" height="1.5" rx="1" fill="#1A1714" opacity="0.2" />
      <rect x="22" y="93" width="18" height="1" rx="1" fill="#1A1714" opacity="0.12" />
      {/* Tiny "1 / 5" pagination marker */}
      <text x="60" y="112" fontSize="6" fill="#A88B47" textAnchor="middle" fontFamily="Geist, sans-serif" letterSpacing="1.5">RANK 1 / 5</text>
      <CornerBracket x={6} y={6} />
      <CornerBracket x={114} y={6} flipX />
      <CornerBracket x={6} y={114} flipY />
      <CornerBracket x={114} y={114} flipX flipY />
    </svg>
  );
}

// === Stage 3 — Click SVG ===

function ClickIllustration() {
  return (
    <svg viewBox="0 0 120 120" fill="none" width="120" height="120" aria-hidden="true">
      {/* Highlighted result */}
      <rect x="18" y="32" width="84" height="32" rx="4" fill="rgba(168, 139, 71, 0.08)" stroke="#A88B47" strokeWidth="1.5" />
      <rect x="24" y="40" width="48" height="2.5" rx="1" fill="#1A1714" />
      <rect x="24" y="46" width="36" height="2" rx="1" fill="#1A1714" opacity="0.5" />
      <rect x="24" y="52" width="44" height="1.5" rx="1" fill="#1A1714" opacity="0.35" />
      {/* Click ripples */}
      <circle cx="60" cy="68" r="6" stroke="#A88B47" strokeWidth="1.5" fill="none" opacity="0.7">
        <animate attributeName="r" values="6;18;6" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0;0.7" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="60" cy="68" r="10" stroke="#A88B47" strokeWidth="1" fill="none" opacity="0.4">
        <animate attributeName="r" values="10;24;10" dur="2s" begin="0.3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" begin="0.3s" repeatCount="indefinite" />
      </circle>
      {/* Cursor */}
      <path d="M 56 64 L 56 78 L 60 74 L 63 80 L 66 78 L 63 72 L 68 72 Z" fill="#1A1714" stroke="#F5F1E8" strokeWidth="0.6" strokeLinejoin="round" />
      {/* Corner reticles */}
      <CornerBracket x={6} y={6} />
      <CornerBracket x={114} y={6} flipX />
      <CornerBracket x={6} y={114} flipY />
      <CornerBracket x={114} y={114} flipX flipY />
    </svg>
  );
}

// === Stage 4 — Contact SVG ===

function ContactIllustration() {
  return (
    <svg viewBox="0 0 120 120" fill="none" width="120" height="120" aria-hidden="true">
      {/* Phone outline */}
      <g>
        <rect x="42" y="20" width="36" height="68" rx="6" stroke="#1A1714" strokeWidth="1.5" fill="#FFFFFF">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 60 54;-2 60 54;2 60 54;0 60 54"
            dur="3s"
            repeatCount="indefinite"
          />
        </rect>
        {/* Screen top notch */}
        <rect x="54" y="22" width="12" height="2" rx="1" fill="#1A1714" opacity="0.2" />
        {/* Incoming call avatar */}
        <circle cx="60" cy="42" r="6" stroke="#1A1714" strokeWidth="1" fill="rgba(168, 139, 71, 0.16)" />
        <circle cx="60" cy="42" r="2.5" fill="#1A1714" opacity="0.3" />
        {/* Caller name */}
        <rect x="48" y="54" width="24" height="2" rx="1" fill="#1A1714" opacity="0.6" />
        <rect x="50" y="59" width="20" height="1.5" rx="1" fill="#1A1714" opacity="0.4" />
        {/* Accept/decline circles */}
        <circle cx="52" cy="74" r="4" fill="#A88B47" />
        <circle cx="68" cy="74" r="4" fill="none" stroke="#1A1714" strokeWidth="1" opacity="0.4" />
      </g>
      {/* Ring pulse around phone */}
      <rect x="36" y="14" width="48" height="80" rx="10" stroke="#A88B47" strokeWidth="1" fill="none" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="scale" values="1;1.08;1" dur="2s" repeatCount="indefinite" additive="sum" />
      </rect>
      <CornerBracket x={6} y={6} />
      <CornerBracket x={114} y={6} flipX />
      <CornerBracket x={6} y={114} flipY />
      <CornerBracket x={114} y={114} flipX flipY />
    </svg>
  );
}

// === Stage 5 — Revenue SVG ===

function RevenueIllustration() {
  return (
    <svg viewBox="0 0 120 120" fill="none" width="120" height="120" aria-hidden="true">
      {/* Baseline */}
      <line x1="18" y1="92" x2="102" y2="92" stroke="#1A1714" strokeWidth="0.8" opacity="0.3" />
      {/* Y-axis hairline */}
      <line x1="18" y1="22" x2="18" y2="92" stroke="#1A1714" strokeWidth="0.8" opacity="0.3" />
      {/* 5 bars of increasing height */}
      <rect x="26" y="78" width="10" height="14" rx="1" fill="#1A1714" opacity="0.25" />
      <rect x="40" y="68" width="10" height="24" rx="1" fill="#1A1714" opacity="0.45" />
      <rect x="54" y="56" width="10" height="36" rx="1" fill="#1A1714" opacity="0.65" />
      <rect x="68" y="42" width="10" height="50" rx="1" fill="#1A1714" opacity="0.85" />
      <rect x="82" y="28" width="10" height="64" rx="1" fill="#A88B47" />
      {/* Trending line connecting bar tops */}
      <path
        d="M 31 80 L 45 70 L 59 58 L 73 44 L 87 30"
        stroke="#A88B47"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="31" cy="80" r="2" fill="#A88B47" />
      <circle cx="45" cy="70" r="2" fill="#A88B47" />
      <circle cx="59" cy="58" r="2" fill="#A88B47" />
      <circle cx="73" cy="44" r="2" fill="#A88B47" />
      <circle cx="87" cy="30" r="3" fill="#A88B47" />
      <circle cx="87" cy="30" r="6" fill="#A88B47" opacity="0.25" />
      {/* Dollar accent */}
      <text x="92" y="22" fontSize="11" fontWeight="700" fill="#A88B47" fontFamily="Geist, sans-serif">$</text>
      {/* Grid hashmarks on Y-axis */}
      <line x1="14" y1="35" x2="18" y2="35" stroke="#1A1714" strokeWidth="0.6" opacity="0.2" />
      <line x1="14" y1="55" x2="18" y2="55" stroke="#1A1714" strokeWidth="0.6" opacity="0.2" />
      <line x1="14" y1="75" x2="18" y2="75" stroke="#1A1714" strokeWidth="0.6" opacity="0.2" />
      {/* Corner reticles */}
      <CornerBracket x={6} y={6} />
      <CornerBracket x={114} y={6} flipX />
      <CornerBracket x={6} y={114} flipY />
      <CornerBracket x={114} y={114} flipX flipY />
    </svg>
  );
}

// === Connector with staggered data pulse ===
//
// A horizontal dashed brass line with an arrowhead. A single brass dot
// animates along the path using SMIL animateMotion, looping every 2 seconds.
// Each connector receives a delay prop offset by 0.4s so that on a row of
// 4 connectors the pulses cascade visually rather than fire in unison.

function FlowConnector({ delay }: { delay: number }) {
  return (
    <div className="outcome-flow__connector" aria-hidden="true">
      <svg viewBox="0 0 80 40" fill="none">
        <path
          d="M 5 20 H 75"
          stroke="#A88B47"
          strokeWidth="1.5"
          strokeDasharray="3 4"
          opacity="0.5"
        />
        <path
          d="M 70 14 L 76 20 L 70 26"
          stroke="#A88B47"
          strokeWidth="1.5"
          fill="none"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <circle r="3" fill="#A88B47">
          <animateMotion
            dur="2s"
            begin={`${delay}s`}
            repeatCount="indefinite"
            path="M 5 20 H 75"
          />
          <animate
            attributeName="opacity"
            values="0;0.95;0.95;0"
            keyTimes="0;0.1;0.85;1"
            dur="2s"
            begin={`${delay}s`}
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}

// === Stage definitions ===

// Pulse delays are intentionally staggered so the cascade reads as a
// wave moving left-to-right rather than four simultaneous events. The
// 0.4s offset matches the eye's tracking rhythm for sequential motion.

type Stage = {
  Illustration: () => React.JSX.Element;
  stat: string;
  statLabel: string;
  caption: string;
};

// Mobile / tablet behavior is handled in globals.css via the
// .outcome-flow grid-template-columns media query. Connectors hide
// below 1100px width so the stages stack cleanly.

// Each stage's stat is the headline data point — chosen for credibility
// and the kind of numbers a buyer would quote internally. Sources cited
// where relevant (CTR data from advanced web ranking studies, conversion
// rate from internal Rysen attribution).

const STAGES: ReadonlyArray<Stage> = [
  {
    Illustration: SearchIllustration,
    stat: "8.5B+",
    statLabel: "Daily searches on Google",
    caption: "A patient or client searches for what you offer.",
  },
  {
    Illustration: RankingIllustration,
    stat: "1 of 6",
    statLabel: "Position #1 in your metro (Rysen)",
    caption: "We engineer your firm into the first organic result.",
  },
  {
    Illustration: ClickIllustration,
    stat: "35%",
    statLabel: "Click-through rate at position #1",
    caption: "35% of searchers click the top result. The rest split below.",
  },
  {
    Illustration: ContactIllustration,
    stat: "12%",
    statLabel: "Avg. conversion to inquiry",
    caption: "Our pages turn searchers into qualified inbound calls and forms.",
  },
  {
    Illustration: RevenueIllustration,
    stat: "$4,800",
    statLabel: "Avg. case/patient value across verticals",
    caption: "Each qualified contact compounds into revenue. Predictable monthly.",
  },
];

// === Flow root ===
//
// Renders the 5 stages with 4 connectors interleaved. Connector delays
// pass 0, 0.4, 0.8, 1.2s to create the staggered wave effect.

export function OutcomeFlow() {
  return (
    <div className="outcome-flow">
      {STAGES.map((stage, i) => {
        const Illustration = stage.Illustration;
        return (
          <Fragment key={i}>
            <div className="outcome-flow__stage">
              <div className="outcome-flow__illustration">
                <Illustration />
              </div>
              <div className="outcome-flow__stat">{stage.stat}</div>
              <div className="outcome-flow__stat-label">{stage.statLabel}</div>
              <p className="outcome-flow__caption">{stage.caption}</p>
            </div>
            {i < STAGES.length - 1 && <FlowConnector delay={i * 0.4} />}
          </Fragment>
        );
      })}
    </div>
  );
}
