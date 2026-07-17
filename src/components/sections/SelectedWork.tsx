import { RosterTable } from "./RosterTable";
import { Reveal } from "@/components/ui/Reveal";
import { MarkerUnderline } from "@/components/ui/MarkerUnderline";

export function SelectedWork() {
  return (
    <section
      className="selected-work"
      id="selected-work"
      aria-label="Selected work"
    >
      <div className="selected-work__inner">
        <Reveal className="selected-work__header">
          <p className="selected-work__label">
            <span className="selected-work__label-marker" aria-hidden="true" />
            01 — The Roster
          </p>
          <h2 className="selected-work__headline">
            Six firms. Six metros.{" "}
            <span className="selected-work__highlight">
              All at position #1.
              <MarkerUnderline className="highlight-marker__underline" />
            </span>
          </h2>
          <p className="selected-work__sub-note"><em>Our whole client list, on purpose.</em></p>
          <p className="selected-work__sub">
            A short list, on purpose. When we take a firm on, we work
            with them for years, not months.
          </p>
        </Reveal>

        <Reveal className="selected-work__dashboard" delay={120}>
          <RosterTable />
        </Reveal>
      </div>
    </section>
  );
}
