"use client";

// Session 45 — MarkerUnderline.
//
// Hand-drawn whiteboard-marker style underline. Two stacked SVG
// paths in --signal green: a main stroke at 5px with stroke-linecap
// round, and a faint second pass at 2.5px offset slightly for the
// layered marker texture. Both paths have subtle bezier wobble so
// the line reads as drawn-by-hand, not as a flat rectangle.
//
// Animation: IntersectionObserver-driven "draw in" — the stroke
// stays invisible (stroke-dashoffset = stroke-dasharray length)
// until the parent enters the viewport, then transitions to 0 over
// ~700ms. Reduced motion: the path is fully drawn on mount, no
// transition.
//
// Usage: wrap the emphasized phrase in a positioned inline-block
// element (or use the existing .hero__highlight class with the
// underline as an inner ::after-style svg), drop <MarkerUnderline />
// inside, position it absolute / bottom / negative-margin to bleed
// just outside the text bounds for the hand-drawn overshoot feel.

import { useEffect, useRef, useState } from "react";

type MarkerUnderlineProps = {
  className?: string;
};

export function MarkerUnderline({ className }: MarkerUnderlineProps) {
  const ref = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) {
      setDrawn(true);
      return;
    }
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setDrawn(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      className={`marker-underline ${drawn ? "is-drawn" : ""} ${
        className ?? ""
      }`}
      viewBox="0 0 200 16"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      {/* Main marker stroke: slight wobble + overshoot at the right */}
      <path
        className="marker-underline__stroke"
        d="M3 9 C 32 6, 64 12, 96 8 S 152 7, 184 9 C 192 9.4, 196 10.6, 199 10"
        stroke="var(--signal, #6EF06E)"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.92"
      />
      {/* Faint second pass for layered marker texture, offset 1.5px */}
      <path
        className="marker-underline__stroke2"
        d="M5 11 C 36 9, 70 13, 104 10 S 156 11, 188 11.5 C 194 11.6, 197 11.2, 196 11"
        stroke="var(--signal, #6EF06E)"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}
