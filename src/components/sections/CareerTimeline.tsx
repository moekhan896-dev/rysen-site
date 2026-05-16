"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface TimelinePoint {
  readonly year: string;
  readonly company: string;
  readonly description: string;
}

const POINTS: ReadonlyArray<TimelinePoint> = [
  {
    year: "2017",
    company: "Salesforce",
    description:
      "Enterprise marketing strategy. Worked with B2B clients on campaign analytics and lifecycle marketing.",
  },
  {
    year: "2018",
    company: "Roku",
    description:
      "Streaming platform marketing. Growth analytics across millions of monthly users.",
  },
  {
    year: "2019",
    company: "Founded Rysen",
    description:
      "Started Rysen with one thesis: marketing agencies should report in revenue, not impressions.",
  },
  {
    year: "2021+",
    company: "Brands built",
    description:
      "Founded Quattro Labs, Honest Plumbers, Honest Maids, three fastest-growing brands in their categories.",
  },
];

export function CareerTimeline() {
  const reducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    if (reducedMotion) {
      setActiveIndex(POINTS.length - 1);
      return;
    }
    let i = 0;
    setActiveIndex(0);
    const id = setInterval(() => {
      i += 1;
      if (i >= POINTS.length) {
        clearInterval(id);
        setActiveIndex(POINTS.length - 1);
        return;
      }
      setActiveIndex(i);
    }, 3000);
    return () => clearInterval(id);
  }, [reducedMotion]);

  const displayedIndex = hovered !== null ? hovered : activeIndex;
  const active = POINTS[displayedIndex];
  const progressPct =
    POINTS.length === 1 ? 100 : (displayedIndex / (POINTS.length - 1)) * 100;

  return (
    <div className="career-timeline" aria-label="Career timeline">
      <div className="ct-track">
        <div
          className="ct-line"
          style={{
            background: `linear-gradient(90deg, var(--accent) 0%, var(--accent) ${progressPct}%, var(--line) ${progressPct}%, var(--line) 100%)`,
          }}
        />
        {/* Ambient data-pulse dot traveling along the line every 12s */}
        {!reducedMotion && (
          <span className="ct-data-pulse" aria-hidden="true" />
        )}
        <div className="ct-points">
          {POINTS.map((point, i) => {
            const isActive = i === displayedIndex;
            const isFilled = i <= displayedIndex;
            return (
              <button
                key={point.year}
                type="button"
                className={`ct-point${isActive ? " is-active" : ""}${
                  isFilled ? " is-filled" : ""
                }${displayedIndex !== activeIndex && i !== displayedIndex ? " is-dim" : ""}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(i)}
                onBlur={() => setHovered(null)}
                aria-label={`${point.year}, ${point.company}`}
                aria-pressed={isActive}
              >
                <span className="ct-circle" />
                <span className="ct-year">{point.year}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="ct-card-wrap">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.year}
            className="ct-card"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="ct-card-head">
              <span className="ct-card-year">{active.year}</span>
              <span className="ct-card-sep">·</span>
              <span className="ct-card-company">{active.company}</span>
            </div>
            <p className="ct-card-desc">{active.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
