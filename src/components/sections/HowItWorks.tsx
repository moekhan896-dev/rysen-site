import { HowItWorksDiagram } from "./HowItWorksDiagram";

export function HowItWorks() {
  return (
    <section className="how" aria-label="How it works">
      <div className="how__inner">
        <div className="how__heading-row">
          <span className="how__bar" aria-hidden="true" />
          <p className="how__label">How it works</p>
        </div>
        <h2 className="how__heading">Three movements. Compounded weekly.</h2>
        <p className="how__sub">
          Every engagement runs through the same three-step compound system. Across every query that matters to your business.
        </p>

        <HowItWorksDiagram />
      </div>
    </section>
  );
}
