// Session 48 — AwardsStrip.
//
// Recognition row: three designed seals (Google Partner, AI Search
// Excellence, Viral Social Media). Placed on the homepage just after
// the Live Demonstration band.
//
// The seals are original designed representations — the awarding
// bodies declined to provide digital badges. If official assets are
// supplied later, swap the body of each seal in AwardSeals.tsx.

import {
  GooglePartnerSeal,
  AISearchSeal,
  ViralSocialSeal,
} from "@/components/ui/AwardSeals";
import { TriangleMark } from "@/components/ui/TriangleMark";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";

export function AwardsStrip() {
  return (
    <section className="awards-strip" aria-label="Recognized for our work">
      <Reveal>
        <div className="awards-strip__label">
          <TriangleMark size={10} />
          <span>RECOGNIZED FOR OUR WORK</span>
        </div>
      </Reveal>
      <RevealGroup className="awards-strip__seals" stagger={140}>
        <div className="awards-strip__seal">
          <GooglePartnerSeal />
          <span className="awards-strip__seal-name">Google Partner</span>
        </div>
        <div className="awards-strip__seal">
          <AISearchSeal />
          <span className="awards-strip__seal-name">AI Search Excellence</span>
        </div>
        <div className="awards-strip__seal">
          <ViralSocialSeal />
          <span className="awards-strip__seal-name">Viral Social Media</span>
        </div>
      </RevealGroup>
    </section>
  );
}
