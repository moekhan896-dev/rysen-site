// Session 45 — TheOffice rebuilt as a magazine collage.
//
// Varied frame sizes, one large feature slot left + smaller tiles
// on the right. Each tile is a labeled PhotoPlaceholder so the user
// knows exactly what shot to drop in (subject + aspect ratio).
// Replaces Session 44's three-image gallery — when real photography
// is captured, the placeholders swap to <img> in place.

import { TriangleMark } from "@/components/ui/TriangleMark";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";

export function TheOffice() {
  return (
    <section
      className="office-section office-section--collage"
      aria-label="The studio"
    >
      <div className="office-section__inner">
        <Reveal className="office-section__header">
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
        </Reveal>

        <div className="office-section__gallery">
          <Reveal delay={0}>
            <PhotoPlaceholder
              label="OFFICE — WIDE EXTERIOR"
              ratio="3 / 4"
            />
          </Reveal>
          <Reveal delay={80}>
            <PhotoPlaceholder
              label="TEAM AT WORK"
              ratio="4 / 5"
            />
          </Reveal>
          <Reveal delay={160}>
            <PhotoPlaceholder
              label="FOUNDER PORTRAIT"
              ratio="16 / 9"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
