"use client";

import { useEffect, useState } from "react";

const TICKER_PHRASES = [
  "Tampa probate",
  "Atlanta divorce",
  "Miami dermatology",
  "LA estate",
  "Chicago dental",
  "Detroit HQ",
];

function buildTickerText(): string {
  // Two passes so the marquee loops cleanly
  const single = TICKER_PHRASES.join(" · ");
  return `NOW OPTIMIZING FOR — ${single} · ${single}`;
}

function useDetroitTime(): string {
  const [label, setLabel] = useState<string>("");

  useEffect(() => {
    const tick = () => {
      try {
        const now = new Date();
        const t = now.toLocaleTimeString("en-US", {
          timeZone: "America/Detroit",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });
        setLabel(`DETROIT · ${t} EST`);
      } catch {
        setLabel("DETROIT");
      }
    };
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  return label;
}

export function NavTopRibbon() {
  const clock = useDetroitTime();
  const tickerText = buildTickerText();

  return (
    <div className="nav-top-ribbon" aria-hidden="true">
      <div className="nav-top-ribbon-inner">
        <div className="nav-top-ribbon-live">
          <span className="nav-top-ribbon-livedot" />
          <span className="nav-top-ribbon-live-label">LIVE</span>
        </div>

        <div className="nav-top-ribbon-marquee">
          <div className="nav-top-ribbon-track">
            <span className="nav-top-ribbon-text">{tickerText}</span>
            <span className="nav-top-ribbon-text" aria-hidden="true">
              {tickerText}
            </span>
          </div>
        </div>

        <div className="nav-top-ribbon-clock">{clock}</div>
      </div>
    </div>
  );
}
