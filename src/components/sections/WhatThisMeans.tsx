import { AmbientTriangle } from "@/components/brand/AmbientTriangle";
import { SignalTriangle } from "@/components/brand/SignalTriangle";
import { ContinueReading } from "@/components/primitives/ContinueReading";

interface Phase {
  period: string;
  title: string;
  bullets: ReadonlyArray<string>;
  outcome: string;
}

const PHASES: ReadonlyArray<Phase> = [
  {
    period: "WITHIN 90 DAYS",
    title: "Foundation phase complete",
    bullets: [
      "Technical SEO audit and fixes deployed",
      "GMB profile fully optimized",
      "Initial content production pipeline active",
      "Custom attribution dashboard live",
    ],
    outcome: "Typical visibility gain: 15–25% in core local queries.",
  },
  {
    period: "WITHIN 6 MONTHS",
    title: "Compound visibility begins",
    bullets: [
      "Core practice area queries ranking in top 5",
      "Review velocity 3–5× baseline",
      "AI search citations beginning",
      "Tracked revenue attribution active",
    ],
    outcome: "Typical revenue lift: 40–80% from organic.",
  },
  {
    period: "WITHIN 12 MONTHS",
    title: "Market position established",
    bullets: [
      "#1 ranking achieved in primary metro",
      "AI Overview citations in 30%+ of relevant queries",
      "Press placements and authority signals secured",
      "Predictive modeling identifying next-quarter opportunities",
    ],
    outcome: "Typical revenue lift: 150–300% from organic.",
  },
  {
    period: "WITHIN 24 MONTHS",
    title: "Sustained dominance",
    bullets: [
      "Top-3 ranking across all priority queries",
      "Reputation moat effectively insurmountable",
      "Authority content library compounding citations",
      "Engagement transitions to operational mode",
    ],
    outcome: "Typical revenue lift: 300–500% from organic, sustained.",
  },
];

export function WhatThisMeans() {
  return (
    <section
      className="what-this-means"
      aria-label="What this means for your firm"
    >
      <div className="section-corner-mark">
        <AmbientTriangle size={16} />
      </div>

      <div className="what-this-means-inner">
        <div className="section-eyebrow">
          <SignalTriangle size={10} decorative />
          <span className="eyebrow-rule" aria-hidden="true" />
          <span className="eyebrow-text">What this means for your firm</span>
        </div>

        <h2 className="what-this-means-heading">
          Concrete outcomes, on a real timeline.
        </h2>

        <p className="what-this-means-intro">
          Marketing claims are easy. Real outcomes are not. Here&apos;s what
          actually happens when a law firm or medical practice engages Rysen, on
          a measurable timeline.
        </p>

        <div className="what-this-means-grid">
          {PHASES.map((phase) => (
            <article key={phase.period} className="wtm-phase">
              <div className="wtm-phase-period">{phase.period}</div>
              <h3 className="wtm-phase-title">{phase.title}</h3>
              <ul className="wtm-phase-bullets signal-list">
                {phase.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p className="wtm-phase-outcome">{phase.outcome}</p>
            </article>
          ))}
        </div>

        <p className="what-this-means-caption">
          Drawn from average outcomes across 30+ active engagements. Individual
          results vary by metro saturation and practice area competitiveness.
        </p>

        <ContinueReading
          href="/case-studies"
          label="See selected case studies"
          context="paper"
        />
      </div>
    </section>
  );
}
