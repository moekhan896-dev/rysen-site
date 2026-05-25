// Session 44 — Live Demonstration section.
//
// Pulls the HeroSearchTease + RankClimb out of the hero into their
// own labeled band with breathing room, so they read as a deliberate
// "this is what we engineer" moment instead of crammed against the
// hero box.

import { TriangleMark } from "@/components/ui/TriangleMark";
import { HeroSearchTease } from "./HeroSearchTease";
import { RankClimb } from "./RankClimb";

export function LiveDemo() {
  return (
    <section className="live-demo" aria-label="Live demonstration">
      <div className="live-demo__inner">
        <div className="live-demo__header">
          <div className="live-demo__label">
            <TriangleMark size={10} />
            <span className="live-demo__label-dot" aria-hidden="true" />
            LIVE DEMONSTRATION
          </div>
          <h2 className="live-demo__headline">
            Watch how a query becomes a{" "}
            <span className="live-demo__highlight">#1 ranking</span>.
          </h2>
          <p className="live-demo__sub">
            This is what we engineer. A real query, a real climb to the top
            across every search surface.
          </p>
        </div>

        <div className="live-demo__tease">
          <HeroSearchTease />
        </div>

        <div className="live-demo__main">
          <RankClimb />
        </div>
      </div>
    </section>
  );
}
