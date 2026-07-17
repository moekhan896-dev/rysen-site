// Session 44 — Live Demonstration section.
//
// Pulls the HeroSearchTease + RankClimb out of the hero into their
// own labeled band with breathing room, so they read as a deliberate
// "this is what we engineer" moment instead of crammed against the
// hero box.

import { TriangleMark } from "@/components/ui/TriangleMark";
import { Reveal } from "@/components/ui/Reveal";
import { MarkerUnderline } from "@/components/ui/MarkerUnderline";
import { RankClimb } from "./RankClimb";

// Session 45 — Live Demo simplified. The compact HeroSearchTease
// moved back into the Hero box (synced to the cycling word), so the
// LiveDemo section now hosts the big RankClimb demo only.

export function LiveDemo() {
  return (
    <section className="live-demo" aria-label="Live demonstration">
      <div className="live-demo__inner">
        <Reveal className="live-demo__header">
          <div className="live-demo__label">
            <TriangleMark size={10} />
            <span className="live-demo__label-dot" aria-hidden="true" />
            LIVE DEMONSTRATION
          </div>
          <h2 className="live-demo__headline">
            Watch how a query becomes a{" "}
            <span className="live-demo__highlight">
              #1 ranking
              <MarkerUnderline className="highlight-marker__underline" />
            </span>.
          </h2>
          <p className="live-demo__sub">
            This is what we do. A real query, climbing to the top across every
            search surface.
          </p>
          <p className="live-demo__define">
            We call it <em>search engineering</em> because we treat your
            website, local profiles, content, reputation, and tracking as
            one connected acquisition system.
          </p>
          <p className="live-demo__illustrative">
            Illustrative demonstration — sample query, animated for clarity.
          </p>
        </Reveal>

        <Reveal className="live-demo__main" delay={120}>
          <RankClimb />
        </Reveal>
      </div>
    </section>
  );
}
