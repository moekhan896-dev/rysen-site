import { Hero } from "@/components/sections/Hero";
import { FirmAtAGlance } from "@/components/sections/FirmAtAGlance";
import { WhatThisMeans } from "@/components/sections/WhatThisMeans";
import {
  WhoRunsRysenPreview,
  OrganicEnginePreview,
  TenComponentsPreview,
  SelectedEngagementsPreview,
  DataScienceEdgePreview,
  VerticalsWeServe,
  MadisonClarkPreview,
  HowWeWorkPreview,
  FinalCTAPreview,
} from "@/components/sections/homepage-previews";
import { ScrollReveal } from "@/components/utilities/ScrollReveal";
import { InterlinkBridge } from "@/components/sections/InterlinkBridge";

export default function HomePage() {
  return (
    <>
      {/* === 1. HERO === */}
      <Hero />

      {/* === 2. FIRM AT A GLANCE === */}
      <ScrollReveal>
        <FirmAtAGlance />
      </ScrollReveal>

      <ScrollReveal>
        <InterlinkBridge
          variant="paper"
          primary={{
            category: "Framework",
            title: "Read the First Position methodology",
            href: "/methodology",
          }}
          secondary={{
            category: "Operations",
            title: "See how we work, weekly",
            href: "/how-we-work",
          }}
          tertiary={{
            category: "Data",
            title: "Where the numbers come from",
            href: "/how-we-measure",
          }}
        />
      </ScrollReveal>

      {/* === 3. WHO RUNS RYSEN (preview → /about) === */}
      <ScrollReveal>
        <WhoRunsRysenPreview />
      </ScrollReveal>

      {/* === 4. WHAT THIS MEANS FOR YOUR FIRM === */}
      <ScrollReveal>
        <WhatThisMeans />
      </ScrollReveal>

      <ScrollReveal>
        <InterlinkBridge
          variant="paper"
          primary={{
            category: "Engagements",
            title: "Browse selected case studies",
            href: "/case-studies",
          }}
          secondary={{
            category: "Services",
            title: "The ten components in detail",
            href: "/services",
          }}
          tertiary={{
            category: "Audit",
            title: "Request a firm audit",
            href: "/audit",
          }}
        />
      </ScrollReveal>

      {/* === 5. ORGANIC GROWTH ENGINE PREVIEW (→ /methodology) === */}
      <ScrollReveal>
        <OrganicEnginePreview />
      </ScrollReveal>

      {/* === 6. THE TEN COMPONENTS PREVIEW (→ /services) === */}
      <ScrollReveal>
        <TenComponentsPreview />
      </ScrollReveal>

      <ScrollReveal>
        <InterlinkBridge
          variant="paper"
          primary={{
            category: "Framework",
            title: "How the components compound",
            href: "/methodology",
          }}
          secondary={{
            category: "Data",
            title: "How we measure each component",
            href: "/how-we-measure",
          }}
          tertiary={{
            category: "Operations",
            title: "The weekly production cadence",
            href: "/how-we-work",
          }}
        />
      </ScrollReveal>

      {/* === 7. SELECTED ENGAGEMENTS (→ /case-studies) === */}
      <ScrollReveal>
        <SelectedEngagementsPreview />
      </ScrollReveal>

      <ScrollReveal>
        <InterlinkBridge
          variant="paper"
          primary={{
            category: "Growth capability",
            title: "Madison Clark, 100M views in 60 days",
            href: "/case-studies/madison-clark",
          }}
          secondary={{
            category: "Vertical",
            title: "The Legal Playbook",
            href: "/legal",
          }}
          tertiary={{
            category: "Vertical",
            title: "The Medical Playbook",
            href: "/medical",
          }}
        />
      </ScrollReveal>

      {/* === 8. THE DATA SCIENCE EDGE (→ /how-we-measure) === */}
      <ScrollReveal>
        <DataScienceEdgePreview />
      </ScrollReveal>

      {/* === 9. VERTICALS WE SERVE (→ /legal /medical) === */}
      <ScrollReveal>
        <VerticalsWeServe />
      </ScrollReveal>

      <ScrollReveal>
        <InterlinkBridge
          variant="paper"
          primary={{
            category: "Framework",
            title: "The methodology behind both playbooks",
            href: "/methodology",
          }}
          secondary={{
            category: "Engagements",
            title: "Selected case studies",
            href: "/case-studies",
          }}
          tertiary={{
            category: "Operations",
            title: "How we work, weekly",
            href: "/how-we-work",
          }}
        />
      </ScrollReveal>

      {/* === 10. MADISON CLARK CASE STUDY PREVIEW === */}
      <ScrollReveal>
        <MadisonClarkPreview />
      </ScrollReveal>

      {/* === 11. HOW WE WORK PREVIEW (→ /how-we-work) === */}
      <ScrollReveal>
        <HowWeWorkPreview />
      </ScrollReveal>

      {/* === 12. FINAL CTA === */}
      <ScrollReveal>
        <FinalCTAPreview />
      </ScrollReveal>
    </>
  );
}
