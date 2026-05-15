"use client";

import { useEffect, useRef, useState } from "react";

interface Pillar {
  n: string;
  title: string;
  desc: string;
  bullets: ReadonlyArray<string>;
}

interface Props {
  pillars: ReadonlyArray<Pillar>;
}

/**
 * PillarReveal — scroll-progressive 5-pillar reveal on /methodology.
 * Uses IntersectionObserver to detect which pillar is currently centered
 * in the viewport. Active pillar gets a yellow left rule + "is-active"
 * class. Sticky "Pillar N of 5" indicator tracks position.
 */
export function PillarReveal({ pillars }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
            const idx = refs.current.findIndex((r) => r === entry.target);
            if (idx >= 0) setActiveIndex(idx);
          }
        });
      },
      {
        threshold: [0.4, 0.6],
        rootMargin: "-20% 0px -30% 0px",
      }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pillar-reveal">
      <div className="pillar-reveal-track">
        {pillars.map((p, i) => (
          <article
            key={p.n}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className={`pillar-reveal-block${i === activeIndex ? " is-active" : ""}`}
          >
            <div className="pillar-number">{p.n}</div>
            <div className="pillar-content">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <ul className="signal-list">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <aside className="pillar-indicator" aria-hidden="true">
        <div className="pillar-indicator-label">
          Pillar{" "}
          <span className="pillar-indicator-num">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>{" "}
          of {String(pillars.length).padStart(2, "0")}
        </div>
        <div className="pillar-indicator-ticks">
          {pillars.map((p, i) => (
            <span
              key={p.n}
              className={`pillar-indicator-tick${
                i === activeIndex ? " is-active" : ""
              }`}
            />
          ))}
        </div>
        <div className="pillar-indicator-current">
          {pillars[activeIndex]?.title}
        </div>
      </aside>
    </div>
  );
}
