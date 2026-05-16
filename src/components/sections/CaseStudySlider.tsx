"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

type Result = {
  readonly title: string;
  readonly url: string;
  readonly snippet: string;
};

const BEFORE_RESULTS: ReadonlyArray<Result> = [
  {
    title: "Florida Probate Court Self-Help Center",
    url: "flcourts.gov › self-help › probate",
    snippet: "Official resources for filing probate in Florida courts.",
  },
  {
    title: "Tampa Bay Probate Lawyers Directory",
    url: "lawyerdirectory.com › tampa › probate",
    snippet: "Browse 87 verified probate attorneys serving the Tampa Bay area.",
  },
  {
    title: "How probate works in Florida, Avvo Guide",
    url: "avvo.com › legal-guides › fl › probate",
    snippet:
      "Avvo's free legal guide covers the basics of Florida probate proceedings.",
  },
];

const AFTER_RESULT: Result = {
  title: "AWS Law Firm, Tampa's Top Probate & Estate Planning Attorneys",
  url: "awslawfirm.com › probate",
  snippet:
    "Tampa's leading probate and estate practice. Cited in ChatGPT, Perplexity, and Google AI Overviews. Six-week consultation waitlist.",
};

export function CaseStudySlider() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(640);
  const x = useMotionValue(width * 0.5);
  const clipPct = useTransform(x, (v) => {
    const pct = width === 0 ? 50 : (v / width) * 100;
    return `inset(0 ${100 - Math.max(0, Math.min(100, pct))}% 0 0)`;
  });
  const labelPct = useTransform(x, (v) =>
    width === 0 ? "50%" : `${Math.max(0, Math.min(100, (v / width) * 100))}%`
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () => {
      const w = el.getBoundingClientRect().width;
      setWidth(w);
      x.set(w * 0.5);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [x]);

  // Auto-animate on first viewport entry
  useEffect(() => {
    const el = containerRef.current;
    if (!el || width === 0) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      x.set(width * 0.5);
      return;
    }

    let played = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || played) return;
          played = true;
          const start = performance.now();
          const duration = 2200;
          const startX = width * 0.1;
          const endX = width * 0.5;
          const ease = (t: number): number =>
            t < 0.5
              ? 4 * t * t * t
              : 1 - Math.pow(-2 * t + 2, 3) / 2;
          x.set(startX);
          const frame = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            x.set(startX + (endX - startX) * ease(t));
            if (t < 1) requestAnimationFrame(frame);
          };
          requestAnimationFrame(frame);
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [width, x]);

  return (
    <div className="cs-slider">
      <div className="cs-slider-frame" ref={containerRef}>
        {/* BEFORE state (buried at position 8), visible behind, full width */}
        <div className="cs-slider-state cs-slider-before">
          <div className="cs-slider-header">
            <span className="cs-slider-traffic">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span className="cs-slider-url">
              google.com/search?q=probate+lawyer+tampa
            </span>
          </div>
          <div className="cs-slider-body">
            <div className="cs-slider-meta">About 2,140,000 results</div>
            {BEFORE_RESULTS.map((r, i) => (
              <div key={i} className="cs-result">
                <div className="cs-result-url">{r.url}</div>
                <div className="cs-result-title">{r.title}</div>
                <div className="cs-result-snippet">{r.snippet}</div>
              </div>
            ))}
            <div className="cs-result cs-result-buried">
              <div className="cs-result-url">{AFTER_RESULT.url}</div>
              <div className="cs-result-title">{AFTER_RESULT.title}</div>
              <div className="cs-result-snippet">
                Buried at position 8. Below the fold for every prospective
                client.
              </div>
              <span className="cs-result-position">Position 8</span>
            </div>
          </div>
        </div>

        {/* AFTER state (clipped overlay) */}
        <motion.div
          className="cs-slider-state cs-slider-after"
          style={{ clipPath: clipPct }}
        >
          <div className="cs-slider-header">
            <span className="cs-slider-traffic">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span className="cs-slider-url">
              google.com/search?q=probate+lawyer+tampa
            </span>
          </div>
          <div className="cs-slider-body">
            <div className="cs-slider-meta">About 2,140,000 results</div>
            <div className="cs-result cs-result-promoted">
              <span className="cs-result-rank-badge">#1</span>
              <div className="cs-result-url">{AFTER_RESULT.url}</div>
              <div className="cs-result-title">{AFTER_RESULT.title}</div>
              <div className="cs-result-snippet">{AFTER_RESULT.snippet}</div>
            </div>
            {BEFORE_RESULTS.slice(0, 2).map((r, i) => (
              <div key={i} className="cs-result">
                <div className="cs-result-url">{r.url}</div>
                <div className="cs-result-title">{r.title}</div>
                <div className="cs-result-snippet">{r.snippet}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Vertical divider */}
        <motion.div
          className="cs-slider-divider"
          style={{ left: labelPct }}
          drag="x"
          dragConstraints={containerRef}
          dragElastic={0}
          dragMomentum={false}
          onDrag={(_event, info) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (!rect) return;
            const nx = info.point.x - rect.left;
            x.set(Math.max(0, Math.min(width, nx)));
          }}
        >
          <span className="cs-slider-handle" aria-hidden="true">
            <span className="cs-slider-handle-arrow">‹</span>
            <span className="cs-slider-handle-arrow">›</span>
          </span>
        </motion.div>

        {/* Corner labels */}
        <span className="cs-slider-corner cs-slider-corner-before">Before</span>
        <span className="cs-slider-corner cs-slider-corner-after">After</span>
      </div>
      <p className="cs-slider-caption">Drag to see the transformation.</p>
    </div>
  );
}
