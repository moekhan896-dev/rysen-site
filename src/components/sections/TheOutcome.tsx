// Session 42 — TheOutcome rewritten as a connected cascade.
//
// 5 stations alternate left/right along a vertical green spine.
// The spine draws on scroll and a green pulse travels down it.
// Each station carries one of the 5 OutcomeIllustrations and the
// stat/caption that was previously rendered inside the OutcomeFlow
// box-grid.

import { CascadeSpine } from "./CascadeSpine";
import {
  SearchHappensIllustration,
  RankingPositionIllustration,
  ClickHappensIllustration,
  ContactHappensIllustration,
  RevenueCompoundsIllustration,
} from "@/components/illustrations/OutcomeIllustrations";

type Station = {
  Illustration: () => React.JSX.Element;
  stat: string;
  statLabel: string;
  caption: string;
  number: string;
};

const STATIONS: ReadonlyArray<Station> = [
  {
    number: "01",
    Illustration: SearchHappensIllustration,
    stat: "8.5B+",
    statLabel: "Daily searches on Google",
    caption: "A patient or client searches for what you offer.",
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

export function TheOutcome() {
  return (
    <section className="outcome outcome--cascade" id="outcome" aria-label="The outcome">
      <div className="outcome__inner">
        <div className="outcome__header">
          <p className="outcome__label">
            <span className="outcome__label-marker" aria-hidden="true" />
            02 — The Outcome
          </p>
          <h2 className="outcome__headline">
            What being <span className="outcome__highlight">#1</span> actually produces.
          </h2>
          <p className="outcome__sub">
            Position #1 isn&apos;t a vanity metric. It&apos;s a data cascade.
            We engineer each step into measurable case intake and patient
            bookings.
          </p>
        </div>

        <div className="outcome__cascade">
          <CascadeSpine stationCount={STATIONS.length} />

          <div className="outcome__stations">
            {STATIONS.map((station, i) => {
              const side: "left" | "right" = i % 2 === 0 ? "left" : "right";
              const Illustration = station.Illustration;
              return (
                <div
                  key={station.number}
                  className={`cascade-station cascade-station--${side}`}
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
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
