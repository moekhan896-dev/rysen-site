// Session 42 — TheOutcome rewritten as a connected cascade.
// Session 44 — First station broadened: "Searches happen everywhere"
// across all four search surfaces, with platform logos inline in
// the station card.

import { CascadeSpine } from "./CascadeSpine";
import {
  SearchHappensIllustration,
  RankingPositionIllustration,
  ClickHappensIllustration,
  ContactHappensIllustration,
  RevenueCompoundsIllustration,
} from "@/components/illustrations/OutcomeIllustrations";
import { TriangleMark } from "@/components/ui/TriangleMark";
import { Reveal } from "@/components/ui/Reveal";

type Station = {
  Illustration: () => React.JSX.Element;
  stat: string;
  statLabel: string;
  caption: string;
  number: string;
  showPlatforms?: boolean;
};

const STATIONS: ReadonlyArray<Station> = [
  {
    number: "01",
    Illustration: SearchHappensIllustration,
    stat: "8.5B+",
    statLabel: "Daily searches, everywhere",
    caption:
      "Across Google, ChatGPT, Perplexity, and Gemini. Billions of high-intent searches every day, not just on one engine.",
    showPlatforms: true,
  },
  {
    number: "02",
    Illustration: RankingPositionIllustration,
    stat: "1 of 6",
    statLabel: "Position #1 in your metro",
    caption: "We engineer your firm into the first organic result.",
  },
  {
    number: "03",
    Illustration: ClickHappensIllustration,
    stat: "35%",
    statLabel: "Click-through rate at position #1",
    caption: "35% of searchers click the top result. The rest split below.",
  },
  {
    number: "04",
    Illustration: ContactHappensIllustration,
    stat: "12%",
    statLabel: "Avg. conversion to inquiry",
    caption: "Our pages turn searchers into qualified inbound calls and forms.",
  },
  {
    number: "05",
    Illustration: RevenueCompoundsIllustration,
    stat: "$4,800",
    statLabel: "Avg. case/patient value across verticals",
    caption: "Each qualified contact compounds into revenue.",
  },
];

// Mini platform glyphs reused inside station 01.

function GoogleIconMini() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M22.5 12.27c0-.85-.08-1.66-.22-2.45H12v4.63h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.56c2.08-1.92 3.28-4.74 3.28-8.26z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.76c-.98.66-2.24 1.05-3.72 1.05-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.1A6.58 6.58 0 0 1 5.5 12c0-.73.13-1.44.34-2.1V7.06H2.18A11 11 0 0 0 1 12c0 1.77.42 3.45 1.18 4.94l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.07.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
        fill="#EA4335"
      />
    </svg>
  );
}

function ChatGPTIconMini() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="#10A37F"
      aria-hidden="true"
    >
      <path d="M22 9.4c0-1.3-.5-2.6-1.5-3.5-.9-.9-2.2-1.5-3.5-1.5-.4 0-.7 0-1.1.1-.7-1.5-2.3-2.5-4-2.5-1.3 0-2.6.5-3.5 1.5-.4.4-.7.8-.9 1.3-1.3-.1-2.6.3-3.6 1.2-.9.9-1.5 2.2-1.5 3.5 0 .4 0 .8.1 1.1-1.5.7-2.5 2.3-2.5 4 0 1.3.5 2.6 1.5 3.5 1.1 1.1 2.6 1.6 4 1.5.7 1.4 2.2 2.4 4 2.4 1.3 0 2.6-.5 3.5-1.5.4-.4.7-.8.9-1.3 1.3.1 2.6-.3 3.6-1.2 1-.9 1.5-2.2 1.5-3.5 0-.4 0-.8-.1-1.1 1.5-.7 2.5-2.3 2.5-4z" />
    </svg>
  );
}

function PerplexityIconMini() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect width="24" height="24" rx="4" fill="#20B8A6" />
      <path
        d="M12 6v12M6 9v6M18 9v6M9 7v10M15 7v10"
        stroke="white"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GeminiIconMini() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient
          id="outcome-gem-grad"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="50%" stopColor="#9747FF" />
          <stop offset="100%" stopColor="#EA4335" />
        </linearGradient>
      </defs>
      <path
        d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"
        fill="url(#outcome-gem-grad)"
      />
    </svg>
  );
}

export function TheOutcome() {
  return (
    <section
      className="outcome outcome--cascade"
      id="outcome"
      aria-label="The outcome"
    >
      <div className="outcome__inner">
        <Reveal className="outcome__header">
          <p className="outcome__label">
            <TriangleMark size={10} />
            <span className="outcome__label-marker" aria-hidden="true" />
            02 — The Outcome
          </p>
          <h2 className="outcome__headline">
            What being <span className="outcome__highlight">#1</span> actually
            produces.
          </h2>
          <p className="outcome__sub">
            Position #1 isn&apos;t a vanity metric. It&apos;s a data cascade.
            We engineer each step into measurable case intake and patient
            bookings.
          </p>
        </Reveal>

        <div className="outcome__cascade">
          <CascadeSpine stationCount={STATIONS.length} />

          <div className="outcome__stations">
            {STATIONS.map((station, i) => {
              const side: "left" | "right" = i % 2 === 0 ? "left" : "right";
              const Illustration = station.Illustration;
              return (
                <Reveal
                  key={station.number}
                  className={`cascade-station cascade-station--${side}`}
                  delay={i * 160}
                >
                  <div className="cascade-station__node" aria-hidden="true" />
                  <article className="cascade-station__card">
                    <div className="cascade-station__illustration">
                      <Illustration />
                    </div>
                    <div className="cascade-station__body">
                      <div className="cascade-station__number">
                        {station.number}
                      </div>
                      <div className="cascade-station__stat">
                        {station.stat}
                      </div>
                      <div className="cascade-station__stat-label">
                        {station.statLabel}
                      </div>
                      <p className="cascade-station__caption">
                        {station.caption}
                      </p>
                      {station.showPlatforms && (
                        <div className="cascade-station__platforms">
                          <GoogleIconMini />
                          <ChatGPTIconMini />
                          <PerplexityIconMini />
                          <GeminiIconMini />
                        </div>
                      )}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
