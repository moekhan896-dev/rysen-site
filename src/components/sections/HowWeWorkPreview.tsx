"use client";

import { useEffect, useRef, useState } from "react";
import { AmbientTriangle } from "@/components/brand/AmbientTriangle";
import { SignalTriangle } from "@/components/brand/SignalTriangle";
import { ContinueReading } from "@/components/primitives/ContinueReading";
import { ScrollReveal } from "@/components/utilities/ScrollReveal";

interface Day {
  dow: number;
  day: string;
  task: string;
  detail: string;
  time: string;
  /** x coordinate on the SVG rail (viewBox 0..1200). */
  x: number;
}

const DAYS: ReadonlyArray<Day> = [
  { dow: 1, day: "Monday", task: "Data sync", detail: "Dashboards refresh. Anomalies flagged.", time: "08:00 EST", x: 60 },
  { dow: 2, day: "Tuesday", task: "Strategy review", detail: "Every account reviewed. Decisions documented.", time: "10:00 EST", x: 330 },
  { dow: 3, day: "Wednesday", task: "Production", detail: "Content, links, GMB posts, schema deployed.", time: "All day", x: 600 },
  { dow: 4, day: "Thursday", task: "QA and ship", detail: "Senior strategist signs off on every output.", time: "16:00 EST", x: 870 },
  { dow: 5, day: "Friday", task: "Reports and retro", detail: "Reports sent. Retro on what worked.", time: "12:00 EST", x: 1140 },
];

const FOUNDING = new Date("2019-01-07T00:00:00Z");

function weeksSince(date: Date): number {
  const ms = Date.now() - date.getTime();
  return Math.max(0, Math.floor(ms / (7 * 24 * 60 * 60 * 1000)));
}

export function HowWeWorkPreview() {
  const [today, setToday] = useState<number>(0);
  const [workweek, setWorkweek] = useState<number>(0);
  const [reduced, setReduced] = useState(false);
  const railRef = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    setToday(new Date().getDay());
    setWorkweek(weeksSince(FOUNDING));
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setReduced(reducedMotion);
    const id = setInterval(() => {
      setToday(new Date().getDay());
      setWorkweek(weeksSince(FOUNDING));
    }, 60_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const node = railRef.current;
    if (!node) return;
    if (reduced) {
      setDrawn(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reduced]);

  // Saturday / Sunday: progress completes full rail, today indicator floats off-rail
  const offRail = today === 0 || today === 6;
  const todayDay = DAYS.find((d) => d.dow === today);
  const progressX = offRail ? 1140 : todayDay?.x ?? 60;

  // SVG path length for the progress line dasharray
  const progressLength = progressX;

  return (
    <section
      className="cadence-section preview-section preview-section--paper"
      aria-label="How we work"
      data-context="paper"
    >
      <div className="section-corner-mark">
        <AmbientTriangle size={16} />
      </div>
      <div className="preview-section-inner">
        <ScrollReveal>
          <div className="section-eyebrow">
            <SignalTriangle size={10} decorative />
            <span className="eyebrow-rule" aria-hidden="true" />
            <span className="eyebrow-text">How we work, weekly</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <h2 className="cadence-heading">
            A five-day cadence. Standing since 2019.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="cadence-intro">
            Real operations require real cadence. Rysen runs a standing
            five-day weekly rhythm. The day in <em>yellow</em> below shows
            where the firm is right now.
          </p>
        </ScrollReveal>

        <div className="cadence-roadmap">
          <svg
            ref={railRef}
            className="cadence-rail__svg"
            viewBox="0 0 1200 80"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Base line */}
            <line
              x1="60"
              y1="40"
              x2="1140"
              y2="40"
              stroke="var(--ink)"
              strokeOpacity="0.15"
              strokeWidth="1"
            />
            {/* Yellow progress line */}
            <line
              x1="60"
              y1="40"
              x2={progressX}
              y2="40"
              stroke="var(--signal)"
              strokeWidth="2"
              strokeDasharray={progressLength}
              strokeDashoffset={drawn ? 0 : progressLength}
              style={{
                transition:
                  "stroke-dashoffset 1500ms cubic-bezier(0.22, 1, 0.36, 1) 600ms",
              }}
            />
            {/* Day stations */}
            {DAYS.map((d) => (
              <circle
                key={d.day}
                cx={d.x}
                cy="40"
                r="6"
                fill="var(--paper)"
                stroke="var(--ink)"
                strokeOpacity="0.4"
                strokeWidth="1"
              />
            ))}
            {/* Today indicator */}
            {!offRail && todayDay && (
              <circle
                cx={todayDay.x}
                cy="40"
                r="8"
                fill="var(--signal)"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(245, 197, 24, 0.5))",
                }}
              >
                {!reduced && (
                  <animate
                    attributeName="r"
                    values="8;12;8"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                )}
              </circle>
            )}
          </svg>

          <div className="cadence-grid">
            {DAYS.map((d, i) => {
              const isToday = d.dow === today;
              return (
                <ScrollReveal key={d.day} delay={450 + i * 100}>
                  <article
                    className={`cadence-card${
                      isToday ? " cadence-card--today" : ""
                    }`}
                  >
                    <div className="cadence-card__day">{d.day}</div>
                    <div className="cadence-card__task">{d.task}</div>
                    <p className="cadence-card__detail">{d.detail}</p>
                    <p className="cadence-card__time">{d.time}</p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        <ScrollReveal delay={1000}>
          <p className="cadence-counter">
            Currently in workweek{" "}
            <span className="cadence-counter__num">{workweek || 387}</span>{" "}
            since the firm was founded.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={1100}>
          <ContinueReading
            href="/how-we-work"
            label="Read about our operations"
            context="paper"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
