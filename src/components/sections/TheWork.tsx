import { QuattroLabsTile } from "@/components/case-studies/QuattroLabsTile";
import { AWSLawFirmTile } from "@/components/case-studies/AWSLawFirmTile";
import { TylerFamilyLawTile } from "@/components/case-studies/TylerFamilyLawTile";
import { SlimDentalTile } from "@/components/case-studies/SlimDentalTile";
import { HartmanDermatologyTile } from "@/components/case-studies/HartmanDermatologyTile";
import { MadisonClarkTile } from "@/components/case-studies/MadisonClarkTile";
import { ScrollReveal } from "@/components/utilities/ScrollReveal";

export function TheWork() {
  return (
    <section className="the-work" id="work" aria-label="The work">
      <div className="the-work__inner">
        <ScrollReveal>
          <p className="the-work__kicker">The Work</p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="the-work__heading">
            Top-tier clients. Real results. No exceptions.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={160}>
          <p className="the-work__sub">
            We work with one firm per metro by invitation. The ones we choose go big. The ones we don't keep paying for clicks.
          </p>
        </ScrollReveal>

        <div className="the-work__grid">
          <ScrollReveal delay={0} yOffset={40} duration={800}>
            <QuattroLabsTile />
          </ScrollReveal>
          <ScrollReveal delay={100} yOffset={40} duration={800}>
            <AWSLawFirmTile />
          </ScrollReveal>
          <ScrollReveal delay={200} yOffset={40} duration={800}>
            <TylerFamilyLawTile />
          </ScrollReveal>
          <ScrollReveal delay={300} yOffset={40} duration={800}>
            <SlimDentalTile />
          </ScrollReveal>
          <ScrollReveal delay={400} yOffset={40} duration={800}>
            <HartmanDermatologyTile />
          </ScrollReveal>
          <ScrollReveal delay={500} yOffset={40} duration={800}>
            <MadisonClarkTile />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
