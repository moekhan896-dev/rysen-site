// Session 40 — TheStack.
//
// New section between Verticals and BuiltByOperators. Establishes the
// proprietary data + AI infrastructure that powers everything we
// deliver. Four blocks, each with a custom illustration, body copy,
// and a brass-accented specs strip.

import {
  QueryIntelligenceIllustration,
  AICitationEngineIllustration,
  AttributionModelingIllustration,
  ContentEngineeringIllustration,
} from "@/components/illustrations/StackIllustrations";

type StackBlock = {
  Illustration: () => React.JSX.Element;
  title: string;
  body: string;
  specs: string;
};

const BLOCKS: ReadonlyArray<StackBlock> = [
  {
    Illustration: QueryIntelligenceIllustration,
    title: "Query Intelligence",
    body: "We track 200-300 high-intent queries per client across 4 search platforms. Daily monitoring. Weekly competitive analysis.",
    specs: "DAILY UPDATES · 4 PLATFORMS · AUTO-ALERTS",
  },
  {
    Illustration: AICitationEngineIllustration,
    title: "AI Citation Engine",
    body: "We engineer content so it gets cited as the answer in ChatGPT, Perplexity, Gemini, and Google's AI Overview. The new SEO.",
    specs: "4 AI SURFACES · SCHEMA-FIRST · CITATION-OPTIMIZED",
  },
  {
    Illustration: AttributionModelingIllustration,
    title: "Attribution Modeling",
    body: "Every call, form fill, and consult traced back to source. We report in dollars, not impressions. CFO-grade tracking.",
    specs: "CALL TRACKING · FORM ATTRIBUTION · REVENUE ROI",
  },
  {
    Illustration: ContentEngineeringIllustration,
    title: "Content Engineering",
    body: "Long-form articles built around your highest-value queries. Schema markup. Internal linking architecture. Compounding monthly.",
    specs: "TOPIC MODELING · SCHEMA · INTERNAL LINKING",
  },
];

export function TheStack() {
  return (
    <section className="stack-section" aria-label="The Stack">
      <div className="stack-section__inner">
        <div className="stack-section__header">
          <p className="stack-section__label">
            <span className="stack-section__label-marker" aria-hidden="true" />
            04 — The Stack
          </p>
          <h2 className="stack-section__headline">
            Built on a proprietary engine.{" "}
            <span className="stack-section__highlight">
              Powered by data and AI.
            </span>
          </h2>
          <p className="stack-section__sub">
            Every engagement runs through our internal infrastructure:
            query monitoring, AI citation tracking, attribution modeling,
            and content engineering. This is what makes us a data firm,
            not an agency.
          </p>
        </div>

        <div className="stack-section__grid">
          {BLOCKS.map((block) => {
            const Illustration = block.Illustration;
            return (
              <article key={block.title} className="stack-block">
                <div className="stack-block__illustration">
                  <Illustration />
                </div>
                <h3 className="stack-block__title">{block.title}</h3>
                <p className="stack-block__body">{block.body}</p>
                <div className="stack-block__specs">{block.specs}</div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
