"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HERO_SEARCH_CYCLES } from "@/lib/heroSearchCycles";
import { HeroSearchAnimation } from "./HeroSearchAnimation";

function GoogleWordmark() {
  return (
    <span
      style={{
        fontFamily: "var(--font-inter), system-ui, sans-serif",
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: "-0.01em",
      }}
      aria-label="Google"
    >
      <span style={{ color: "#4285F4" }}>G</span>
      <span style={{ color: "#EA4335" }}>o</span>
      <span style={{ color: "#FBBC05" }}>o</span>
      <span style={{ color: "#4285F4" }}>g</span>
      <span style={{ color: "#34A853" }}>l</span>
      <span style={{ color: "#EA4335" }}>e</span>
    </span>
  );
}

function ChatGPTMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill="#0a0908" />
      <path
        d="M 8 2 L 9.5 6.5 L 14 6.8 L 10.5 9.3 L 11.8 13.8 L 8 11 L 4.2 13.8 L 5.5 9.3 L 2 6.8 L 6.5 6.5 Z"
        fill="#ffffff"
      />
    </svg>
  );
}

function PerplexityMark() {
  return (
    <svg width="12" height="14" viewBox="0 0 14 16" aria-hidden="true">
      <rect x="0" y="2" width="14" height="2" rx="1" fill="#20B8CD" />
      <rect x="0" y="6" width="14" height="2" rx="1" fill="#20B8CD" />
      <rect x="0" y="10" width="14" height="2" rx="1" fill="#20B8CD" />
      <rect x="0" y="14" width="14" height="2" rx="1" fill="#20B8CD" />
    </svg>
  );
}

function GeminiMark() {
  return (
    <svg width="12" height="14" viewBox="0 0 14 16" aria-hidden="true">
      <defs>
        <linearGradient id="gemini-hero-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4796E3" />
          <stop offset="50%" stopColor="#9168C0" />
          <stop offset="100%" stopColor="#E94436" />
        </linearGradient>
      </defs>
      <path
        d="M 7 0 L 8.4 6.4 L 14 8 L 8.4 9.6 L 7 16 L 5.6 9.6 L 0 8 L 5.6 6.4 Z"
        fill="url(#gemini-hero-grad)"
      />
    </svg>
  );
}

export function Hero() {
  const [cycleIndex, setCycleIndex] = useState(0);
  const currentCycle = HERO_SEARCH_CYCLES[cycleIndex];

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const t = setTimeout(() => {
      setCycleIndex((idx) => (idx + 1) % HERO_SEARCH_CYCLES.length);
    }, 8000);
    return () => clearTimeout(t);
  }, [cycleIndex]);

  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__spotlight" aria-hidden="true" />

      <div className="hero__badge">
        <span className="hero__badge-dot" aria-hidden="true" />
        <span>Currently accepting 2 new engagements for Q2 2026</span>
      </div>

      <h1 className="hero__headline">
        Imagine your{" "}
        <span className="hero__highlight">{currentCycle.vertical}</span> appeared
        as the <span className="hero__signal">#1 result</span> for every search
        in your city.
      </h1>

      <p className="hero__sub">
        We make law firms and medical practices famous on Google. One per metro.
        By invitation.
      </p>

      <div className="hero__platforms">
        <span className="hero__platforms-label">Tracked across</span>
        <span className="hero__platform">
          <GoogleWordmark />
        </span>
        <span className="hero__platforms-divider" aria-hidden="true">
          ·
        </span>
        <span className="hero__platform">
          <ChatGPTMark /> ChatGPT
        </span>
        <span className="hero__platforms-divider" aria-hidden="true">
          ·
        </span>
        <span className="hero__platform">
          <PerplexityMark /> Perplexity
        </span>
        <span className="hero__platforms-divider" aria-hidden="true">
          ·
        </span>
        <span className="hero__platform">
          <GeminiMark /> Gemini
        </span>
      </div>

      <div className="hero__demo">
        <HeroSearchAnimation cycle={currentCycle} />
      </div>

      <div className="hero__ctas">
        <Link href="/contact" className="hero__cta-primary">
          See if your metro is open
        </Link>
        <Link href="#work" className="hero__cta-secondary">
          View the work →
        </Link>
      </div>
    </section>
  );
}
