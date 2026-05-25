"use client";

// THE OUTCOME FLOW — a 5-stage horizontal flow diagram explaining how
// a #1 ranking cascades into measurable business outcomes (calls, leads,
// revenue). 4 staggered animated data-pulse connectors between stages.
// Session 39: illustrations are now imported from the dedicated
// OutcomeIllustrations module rather than declared inline.

import { Fragment } from "react";
import {
  SearchHappensIllustration,
  RankingPositionIllustration,
  ClickHappensIllustration,
  ContactHappensIllustration,
  RevenueCompoundsIllustration,
} from "@/components/illustrations/OutcomeIllustrations";

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
          stroke="#34C759"
          strokeWidth="1.5"
          strokeDasharray="3 4"
          opacity="0.5"
        />
        <path
          d="M 70 14 L 76 20 L 70 26"
          stroke="#34C759"
          strokeWidth="1.5"
          fill="none"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <circle r="3" fill="#34C759">
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
    Illustration: SearchHappensIllustration,
    stat: "8.5B+",
    statLabel: "Daily searches on Google",
    caption: "A patient or client searches for what you offer.",
  },
  {
    Illustration: RankingPositionIllustration,
    stat: "1 of 6",
    statLabel: "Position #1 in your metro (Rysen)",
    caption: "We engineer your firm into the first organic result.",
  },
  {
    Illustration: ClickHappensIllustration,
    stat: "35%",
    statLabel: "Click-through rate at position #1",
    caption: "35% of searchers click the top result. The rest split below.",
  },
  {
    Illustration: ContactHappensIllustration,
    stat: "12%",
    statLabel: "Avg. conversion to inquiry",
    caption: "Our pages turn searchers into qualified inbound calls and forms.",
  },
  {
    Illustration: RevenueCompoundsIllustration,
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
