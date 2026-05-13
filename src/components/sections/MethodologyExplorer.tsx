"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Pillar = {
  readonly num: string;
  readonly title: string;
  readonly summary: string;
  readonly description: string;
  readonly tactics: ReadonlyArray<string>;
};

const pillars: ReadonlyArray<Pillar> = [
  {
    num: "01",
    title: "Hyperlocal Dominance",
    summary: "Depth before breadth, always.",
    description:
      "We don't compete statewide. We make you the #1 choice in your metro — Tampa, Miami, Chicago, LA — wherever your firm serves. Once you own one market, we expand to the next on your terms.",
    tactics: [
      "Metro-specific keyword and competitor mapping",
      "Hyperlocal landing pages for every neighborhood you serve",
      "GMB and citation density tuned to a single market first",
    ],
  },
  {
    num: "02",
    title: "Data-First Reporting",
    summary: "Marketing without attribution is gambling.",
    description:
      "We track every conversion to its origin — channel, query, content piece — and report results in dollars, not impressions. You'll always know exactly which dollar of marketing produced which dollar of revenue.",
    tactics: [
      "End-to-end attribution from query to consultation booked",
      "Custom dashboards reviewed in every weekly meeting",
      "Monthly P&L-style reports framed in revenue, not metrics",
    ],
  },
  {
    num: "03",
    title: "Compound Visibility",
    summary: "Five surfaces, one cohesive strategy.",
    description:
      "Google rankings, Maps Pack, AI search citations, reviews, content, newsletter — each lever amplifies the others. We run all five in a coordinated cadence so the compounding starts working for you in month one, not month six.",
    tactics: [
      "Single content asset reformatted for Google, AI, and email",
      "Citation strategy reinforced by GMB review velocity",
      "Authority pieces engineered to be cited in AI surfaces",
    ],
  },
  {
    num: "04",
    title: "Weekly Accountability",
    summary: "Transparent, predictable, professional.",
    description:
      "Every client gets a standing weekly meeting. No exceptions. You see what's shipping, what's working, and what's being adjusted — alongside the data behind every recommendation. No mystery, no surprises.",
    tactics: [
      "60-minute standing weekly review with full team access",
      "Always-on dashboard with no gated information",
      "Quarterly strategy resets aligned to your firm's calendar",
    ],
  },
  {
    num: "05",
    title: "Honest Selection",
    summary: "We only take engagements we're confident we can win.",
    description:
      "If your market is too saturated or your timeline too aggressive, we'll tell you upfront. We've turned down good budgets from impossible markets because we'd rather lose a deal than lose our reputation.",
    tactics: [
      "Pre-engagement audit with a real go/no-go recommendation",
      "Disclosed conflicts in adjacent markets and verticals",
      "Roster capped at a number we can deliver against",
    ],
  },
];

export function MethodologyExplorer() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section className="methodology-section" id="methodology">
      <div className="methodology-blob" aria-hidden="true"></div>
      <div className="methodology-inner methodology-inner-explorer">
        <div className="section-2-eyebrow">Our methodology</div>
        <h2 className="methodology-h2">
          <span className="accent-text">First Position.</span>
        </h2>
        <p className="methodology-tagline">
          Our framework for getting your firm to the top — and keeping it
          there.
        </p>
        <p className="methodology-subhead">
          Most marketing agencies sell tactics. We sell outcomes. First
          Position is the framework we run with every client — five principles
          that compound into one result: your firm becomes the dominant choice
          in your market.
        </p>

        <div className="methodology-accordion" role="tablist">
          {pillars.map((p, i) => {
            const open = activeIdx === i;
            return (
              <div
                key={p.num}
                className={`methodology-item${open ? " is-open" : ""}`}
              >
                <button
                  type="button"
                  className="methodology-item-header"
                  onClick={() => setActiveIdx(open ? -1 : i)}
                  aria-expanded={open}
                >
                  <span className="methodology-item-num">{p.num}</span>
                  <span className="methodology-item-titleblock">
                    <span className="methodology-item-title">{p.title}</span>
                    <span className="methodology-item-summary">
                      {p.summary}
                    </span>
                  </span>
                  <span
                    className="methodology-item-chev"
                    aria-hidden="true"
                  ></span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="content"
                      className="methodology-item-content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <div className="methodology-item-inner">
                        <p className="methodology-item-desc">{p.description}</p>
                        <ul className="methodology-item-tactics">
                          {p.tactics.map((t, j) => (
                            <li key={j} className="methodology-item-tactic">
                              <span
                                className="methodology-item-tactic-dot"
                                aria-hidden="true"
                              ></span>
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
