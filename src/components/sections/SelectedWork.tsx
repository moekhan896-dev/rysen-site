import { RosterTable } from "./RosterTable";

export function SelectedWork() {
  return (
    <section
      className="selected-work"
      id="selected-work"
      aria-label="Selected work"
    >
      <div className="selected-work__inner">
        <div className="selected-work__header">
          <p className="selected-work__label">
            <span className="selected-work__label-marker" aria-hidden="true" />
            01 — The Roster
          </p>
          <h2 className="selected-work__headline">
            Six firms. Six metros.{" "}
            <span className="selected-work__highlight">All at position #1.</span>
          </h2>
          <p className="selected-work__sub">
            We maintain a small roster of selected engagements. Each one
            operates as the dominant firm in their metro and vertical.
            Click a row to see their full case study.
          </p>
        </div>

        <div className="selected-work__dashboard">
          <RosterTable />
        </div>
      </div>
    </section>
  );
}
