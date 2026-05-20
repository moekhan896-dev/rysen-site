"use client";

import { type HeroClient } from "@/lib/heroClients";

export function PreviewChips({
  clients,
  activeId,
  onSelect,
}: {
  clients: HeroClient[];
  activeId: string;
  onSelect: (c: HeroClient) => void;
}) {
  return (
    <div className="chips" role="tablist" aria-label="Client search rankings">
      {clients.map((c) => (
        <button
          key={c.id}
          type="button"
          role="tab"
          aria-selected={c.id === activeId}
          aria-controls="serp-display"
          className={`chip${c.id === activeId ? " is-active" : ""}`}
          onClick={() => onSelect(c)}
        >
          <span className="chip__vert">{c.vertical}</span>
          <span className="chip__name">{c.brandName}</span>
          <span className="chip__metro">{c.metro}</span>
        </button>
      ))}
    </div>
  );
}
