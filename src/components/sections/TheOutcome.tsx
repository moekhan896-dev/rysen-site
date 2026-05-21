import { OutcomeFlow } from "./OutcomeFlow";

export function TheOutcome() {
  return (
    <section className="outcome" id="outcome" aria-label="The outcome">
      <div className="outcome__inner">
        <div className="outcome__header">
          <p className="outcome__label">
            <span className="outcome__label-marker" aria-hidden="true" />
            02 — The Outcome
          </p>
          <h2 className="outcome__headline">
            What being <span className="outcome__highlight">#1</span> actually produces.
          </h2>
          <p className="outcome__sub">
            Position #1 isn&apos;t a vanity metric. It&apos;s a data cascade. We engineer each step into measurable case intake and patient bookings.
          </p>
        </div>

        <OutcomeFlow />
      </div>
    </section>
  );
}
