// Session 44 — TheOffice.
//
// Photo-forward section that drops in right after TheOutcome. The
// purpose is to show Rysen is a real, physical operation — not a
// faceless agency. Short header, editorial gallery layout: one
// large feature photo on the left + two smaller supporting photos
// stacked on the right.

import { TriangleMark } from "@/components/ui/TriangleMark";

export function TheOffice() {
  return (
    <section className="office-section" aria-label="The studio">
      <div className="office-section__inner">
        <div className="office-section__header">
          <div className="office-section__label">
            <TriangleMark size={10} />
            <span>THE STUDIO</span>
          </div>
          <h2 className="office-section__headline">
            A real team.{" "}
            <span className="office-section__highlight">A real place.</span>
          </h2>
          <p className="office-section__sub">
            We are a working studio of engineers and creatives. Not a faceless
            agency.
          </p>
        </div>

        <div className="office-section__gallery">
          <div className="office-section__photo office-section__photo--feature">
            <img
              src="/assets/office/exterior-front.png"
              alt="Rysen studio exterior"
              loading="lazy"
            />
          </div>
          <div className="office-section__photo">
            <img
              src="/assets/office/interior-workspace.png"
              alt="Rysen studio workspace"
              loading="lazy"
            />
          </div>
          <div className="office-section__photo">
            <img
              src="/assets/office/interior-collaboration.png"
              alt="Rysen team collaborating"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
