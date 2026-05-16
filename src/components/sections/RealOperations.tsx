"use client";

import { useEffect, useState } from "react";
import { AmbientTriangle } from "@/components/brand/AmbientTriangle";
import { SignalTriangle } from "@/components/brand/SignalTriangle";

interface Day {
  dow: number; // 1=Mon ... 5=Fri
  eyebrow: string;
  title: string;
  desc: string;
  deliverable: string;
  time: string;
}

const DAYS: ReadonlyArray<Day> = [
  {
    dow: 1,
    eyebrow: "Monday",
    title: "Data sync",
    desc: "All client dashboards refresh. Anomaly flagging.",
    deliverable: "Weekly report queued",
    time: "08:00 EST",
  },
  {
    dow: 2,
    eyebrow: "Tuesday",
    title: "Strategy review",
    desc: "Each client account reviewed by their lead strategist.",
    deliverable: "Tuesday decisions documented",
    time: "10:00 EST",
  },
  {
    dow: 3,
    eyebrow: "Wednesday",
    title: "Production",
    desc: "Content, links, GMB posts, schema deployments.",
    deliverable: "Weekly production complete",
    time: "All day",
  },
  {
    dow: 4,
    eyebrow: "Thursday",
    title: "QA + ship",
    desc: "Everything reviewed by senior strategist before going live.",
    deliverable: "Friday-ready",
    time: "16:00 EST",
  },
  {
    dow: 5,
    eyebrow: "Friday",
    title: "Client reports + retro",
    desc: "Reports sent. Internal retro on what worked.",
    deliverable: "Weekly report shipped to client",
    time: "12:00 EST",
  },
];

// Rysen founded January 2019. Anchor at the first Monday: Jan 7, 2019.
const FOUNDING = new Date("2019-01-07T00:00:00Z");

function weeksSince(date: Date): number {
  const ms = Date.now() - date.getTime();
  return Math.max(0, Math.floor(ms / (7 * 24 * 60 * 60 * 1000)));
}

export function RealOperations() {
  const [today, setToday] = useState<number>(0);
  const [workweek, setWorkweek] = useState<number>(0);

  useEffect(() => {
    setToday(new Date().getDay());
    setWorkweek(weeksSince(FOUNDING));
    const id = setInterval(() => {
      setToday(new Date().getDay());
      setWorkweek(weeksSince(FOUNDING));
    }, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="real-ops-rebrand"
      aria-label="How we work, weekly"
    >
      <div className="section-corner-mark">
        <AmbientTriangle size={16} />
      </div>

      <div className="real-ops-rebrand-inner">
        <div className="section-eyebrow">
          <SignalTriangle size={10} decorative />
          <span className="eyebrow-rule" aria-hidden="true" />
          <span className="eyebrow-text">How we work, weekly</span>
        </div>

        <h2 className="real-ops-rebrand-heading">
          A five-day operating cadence, every week, since 2019.
        </h2>

        <p className="real-ops-rebrand-intro">
          This is what &ldquo;data-driven&rdquo; actually means in operations: a
          literal weekly rhythm with named owners, scheduled reviews, documented
          decisions, and weekly accountability. The same cadence Rysen has run
          for every client engagement since the firm was founded.
        </p>

        <div className="real-ops-rebrand-cadence-grid">
          {DAYS.map((d) => {
            const isToday = d.dow === today;
            return (
              <article
                key={d.eyebrow}
                className={`real-ops-day-card${isToday ? " is-today" : ""}`}
                aria-label={d.eyebrow}
              >
                {isToday && (
                  <span className="real-ops-day-today-tag" aria-label="Today">
                    TODAY
                  </span>
                )}
                <span className="real-ops-day-eyebrow">{d.eyebrow}</span>
                <h3 className="real-ops-day-title">{d.title}</h3>
                <p className="real-ops-day-desc">{d.desc}</p>
                <p className="real-ops-day-deliverable">{d.deliverable}</p>
                <p className="real-ops-day-time">{d.time}</p>
              </article>
            );
          })}
        </div>

        <div className="real-ops-rebrand-coda">
          <p className="real-ops-rebrand-coda-text">
            Standing meetings. Documented decisions. Named owners for every
            workstream. The kind of operating rigor that most agencies talk
            about but few actually maintain, because it requires real US-based
            senior staff working real hours in real time zones.
          </p>
          <p className="real-ops-rebrand-workweek">
            Currently in workweek {workweek || 387} since founding
          </p>
        </div>
      </div>
    </section>
  );
}
