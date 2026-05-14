"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const TARGET = 47_000_000;

function formatDollars(n: number): string {
  if (n >= 1_000_000) {
    const millions = n / 1_000_000;
    return `$${millions.toFixed(millions >= 10 ? 0 : 1)}M+`;
  }
  return `$${Math.round(n).toLocaleString()}`;
}

export function RevenueClaim() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const reducedMotion = useReducedMotion();
  const [value, setValue] = useState<number>(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;

    if (reducedMotion) {
      setValue(TARGET);
      return;
    }

    const duration = 1800;
    const start = performance.now();
    const ease = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setValue(Math.round(ease(t) * TARGET));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reducedMotion]);

  return (
    <section className="revenue-claim" ref={ref}>
      <div className="revenue-claim-inner">
        <div className="revenue-claim-eyebrow">SINCE 2019</div>
        <div className="revenue-claim-number" aria-label="$47 million plus">
          {formatDollars(value)}
        </div>
        <p className="revenue-claim-sub">
          in attributed client revenue. Tracked, sourced, and reported.
        </p>
        <div className="revenue-claim-live">
          <span className="revenue-claim-livedot" aria-hidden="true" />
          <span>Updated weekly</span>
        </div>
      </div>
    </section>
  );
}
