"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HeroSearchAnimation } from "./HeroSearchAnimation";
import { HERO_CYCLES, type HeroCycle } from "@/lib/heroCycles";

export function Hero() {
  const [cycleIdx, setCycleIdx] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const cycle: HeroCycle = HERO_CYCLES[cycleIdx];

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCycleIdx((i) => (i + 1) % HERO_CYCLES.length);
        setTransitioning(false);
      }, 400);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__inner">
        <p className="hero__editorial-label">
          <span aria-hidden="true">01 — </span>
          Detroit · Phoenix
        </p>

        <h1 className="hero__headline">
          Imagine your{" "}
          <span className={`hero__vertical${transitioning ? " is-transitioning" : ""}`}>
            {cycle.vertical}
          </span>{" "}
          appeared as the <span className="hero__signal">#1 result</span> for every
          search in your city.
        </h1>

        <p className="hero__sub">
          We make law firms and medical practices famous on Google. One per metro. By invitation.
        </p>

        <div className="hero__demo">
          <HeroSearchAnimation cycle={cycle} key={cycle.id} />
        </div>

        <div className="hero__ctas">
          <Link href="/contact" className="hero__cta-primary">
            Request audit
          </Link>
          <Link href="#work" className="hero__cta-secondary">
            View the work <span aria-hidden="true">→</span>
          </Link>
        </div>

        <p className="hero__platforms">
          <span className="hero__platforms-label">Tracked across</span>
          <span> Google · ChatGPT · Perplexity · Gemini</span>
        </p>
      </div>
    </section>
  );
}
