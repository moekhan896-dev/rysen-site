"use client";

import { useState } from "react";
import { SerpVisualization } from "./SerpVisualization";
import { PreviewChips } from "./PreviewChips";
import { HERO_CLIENTS, type HeroClient } from "@/lib/heroClients";

export function SelectedWork() {
  const [activeClient, setActiveClient] = useState<HeroClient>(HERO_CLIENTS[0]);

  return (
    <section className="selected-work" id="selected-work" aria-label="Selected work">
      <div className="selected-work__inner">
        <div className="selected-work__header">
          <p className="selected-work__label">01 — Selected Work</p>
          <h2 className="selected-work__headline">
            Rankings, <em>engineered.</em>
          </h2>
          <p className="selected-work__sub">
            Six firms we&apos;ve taken to position #1. Each one owns their metro. Click through to see their actual search positioning.
          </p>
        </div>

        <div className="selected-work__display">
          <SerpVisualization client={activeClient} />
        </div>

        <div className="selected-work__chips-row">
          <PreviewChips
            clients={HERO_CLIENTS}
            activeId={activeClient.id}
            onSelect={setActiveClient}
          />
          <p className="selected-work__chips-hint">
            Click a client to see their ranking →
          </p>
        </div>
      </div>
    </section>
  );
}
