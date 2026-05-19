import { ProcessTimeline, ProcessTimelineMobile } from "./ProcessTimeline";

export function TheProcess() {
  return (
    <section className="the-process" aria-label="Process">
      <div className="the-process__inner">
        <div className="the-work__heading-row">
          <span className="how__bar" aria-hidden="true" />
          <p className="how__label">Process</p>
        </div>
        <h2 className="how__heading">How an engagement begins.</h2>

        <ProcessTimeline />
        <ProcessTimelineMobile />
      </div>
    </section>
  );
}
