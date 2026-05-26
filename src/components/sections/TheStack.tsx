// Session 42 — TheStack rewritten as a stacked-slab tower.
//
// 4 horizontal slabs stacked vertically, each with its illustration,
// title, body, and specs. Green data-conduits connect slab to slab.
// Flow labels top + bottom communicate the bottom-to-top hierarchy:
// raw content foundation at the bottom, provable revenue at the top.

import {
  QueryIntelligenceIllustration,
  AICitationEngineIllustration,
  AttributionModelingIllustration,
  ContentEngineeringIllustration,
} from "@/components/illustrations/StackIllustrations";
import { Reveal } from "@/components/ui/Reveal";
import { MarkerUnderline } from "@/components/ui/MarkerUnderline";

type Slab = {
  num: string;
  Illustration: () => React.JSX.Element;
  title: string;
  body: string;
  specs: string;
};

// Logical order top-to-bottom in the array (top of tower first):
//   Attribution Modeling     (top — closest to revenue)
//   AI Citation Engine
//   Query Intelligence
//   Content Engineering      (bottom — content foundation)
const SLABS: ReadonlyArray<Slab> = [
  {
    num: "04",
    Illustration: AttributionModelingIllustration,
    title: "Attribution Modeling",
    body: "Every call, form fill, and consult traced back to source. We report in dollars, not impressions. CFO-grade tracking.",
    specs: "CALL TRACKING · FORM ATTRIBUTION · REVENUE ROI",
  },
  {
    num: "03",
    Illustration: AICitationEngineIllustration,
    title: "AI Citation Engine",
    body: "We engineer content so it gets cited as the answer in ChatGPT, Perplexity, Gemini, and Google's AI Overview.",
    specs: "4 AI SURFACES · SCHEMA-FIRST · CITATION-OPTIMIZED",
  },
  {
    num: "02",
    Illustration: QueryIntelligenceIllustration,
    title: "Query Intelligence",
    body: "We track 200-300 high-intent queries per client across 4 search platforms. Daily monitoring. Weekly competitive analysis.",
    specs: "DAILY UPDATES · 4 PLATFORMS · AUTO-ALERTS",
  },
  {
    num: "01",
    Illustration: ContentEngineeringIllustration,
    title: "Content Engineering",
    body: "Long-form articles built around your highest-value queries. Schema markup. Internal linking. Compounding monthly.",
    specs: "TOPIC MODELING · SCHEMA · INTERNAL LINKING",
  },
];

export function TheStack() {
  return (
    <section className="stack-section stack-section--tower" aria-label="The Stack">
      <div className="stack-section__inner">
        <Reveal className="stack-section__header">
          <p className="stack-section__label">
            <span className="stack-section__label-marker" aria-hidden="true" />
            04 — The Stack
          </p>
          <h2 className="stack-section__headline">
            Built on a proprietary engine.{" "}
            <span className="stack-section__highlight">
              Powered by data and AI.
              <MarkerUnderline className="highlight-marker__underline" />
            </span>
          </h2>
          <p className="stack-section__sub">
            Four engineered layers, stacked. Foundation feeds intelligence,
            intelligence feeds citation, citation feeds attribution. Every
            engagement runs through all four.
          </p>
        </Reveal>

        <div className="stack-tower">
          <div className="stack-tower__flow-top" aria-hidden="true">
            <span>PROVABLE REVENUE</span>
            <span className="stack-tower__flow-arrow">↑</span>
          </div>

          {SLABS.map((slab, i) => {
            const Illustration = slab.Illustration;
            const isFirst = i === 0;
            return (
              <Reveal
                as="article"
                key={slab.num}
                className="stack-slab"
                delay={i * 130}
              >
                {!isFirst && (
                  <span className="stack-slab__conduit" aria-hidden="true" />
                )}
                <div className="stack-slab__num">{slab.num}</div>
                <div className="stack-slab__illustration">
                  <Illustration />
                </div>
                <div className="stack-slab__body">
                  <h3 className="stack-slab__title">{slab.title}</h3>
                  <p className="stack-slab__text">{slab.body}</p>
                  <div className="stack-slab__specs">{slab.specs}</div>
                </div>
              </Reveal>
            );
          })}

          <div className="stack-tower__flow-bottom" aria-hidden="true">
            <span className="stack-tower__flow-arrow">↑</span>
            <span>RAW CONTENT FOUNDATION</span>
          </div>
        </div>
      </div>
    </section>
  );
}
