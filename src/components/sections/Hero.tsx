"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SignalTriangle } from "@/components/brand/SignalTriangle";
import { HERO_SEARCH_CYCLES } from "@/lib/heroSearchCycles";
import {
  HeroSearchDemonstration,
  type CyclePhase,
} from "./HeroSearchDemonstration";

const NAV_ITEMS: ReadonlyArray<{ label: string; href: string }> = [
  { label: "Methodology", href: "/methodology" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

function GoogleWordmark() {
  return (
    <span className="hero__google" aria-label="Google">
      <span style={{ color: "#4285F4" }}>G</span>
      <span style={{ color: "#EA4335" }}>o</span>
      <span style={{ color: "#FBBC05" }}>o</span>
      <span style={{ color: "#4285F4" }}>g</span>
      <span style={{ color: "#34A853" }}>l</span>
      <span style={{ color: "#EA4335" }}>e</span>
    </span>
  );
}

function ChatGPTIcon() {
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

function PerplexityIcon() {
  return (
    <svg width="12" height="14" viewBox="0 0 14 16" aria-hidden="true">
      <rect x="0" y="2" width="14" height="2" rx="1" fill="#20B8CD" />
      <rect x="0" y="6" width="14" height="2" rx="1" fill="#20B8CD" />
      <rect x="0" y="10" width="14" height="2" rx="1" fill="#20B8CD" />
      <rect x="0" y="14" width="14" height="2" rx="1" fill="#20B8CD" />
    </svg>
  );
}

function GeminiIcon() {
  return (
    <svg width="12" height="14" viewBox="0 0 14 16" aria-hidden="true">
      <defs>
        <linearGradient id="gemini-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4796E3" />
          <stop offset="50%" stopColor="#9168C0" />
          <stop offset="100%" stopColor="#E94436" />
        </linearGradient>
      </defs>
      <path
        d="M 7 0 L 8.4 6.4 L 14 8 L 8.4 9.6 L 7 16 L 5.6 9.6 L 0 8 L 5.6 6.4 Z"
        fill="url(#gemini-grad)"
      />
    </svg>
  );
}

export function Hero() {
  const [cycleIndex, setCycleIndex] = useState(0);
  const [phase, setPhase] = useState<CyclePhase>("idle");
  const [typedQuery, setTypedQuery] = useState("");
  const [revealedElements, setRevealedElements] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const currentCycle = HERO_SEARCH_CYCLES[cycleIndex];

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTypedQuery(currentCycle.query);
      setRevealedElements(5);
      setPhase("holding");
      return;
    }

    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const cycle = currentCycle;
    const chars = cycle.query.length;

    setPhase("idle");
    setTypedQuery("");
    setRevealedElements(0);

    timeouts.push(setTimeout(() => setPhase("typing"), 500));

    const typingStart = 500;
    const typingDuration = 2500;
    const perChar = typingDuration / chars;
    for (let i = 0; i < chars; i++) {
      timeouts.push(
        setTimeout(() => {
          setTypedQuery(cycle.query.slice(0, i + 1));
        }, typingStart + perChar * (i + 1))
      );
    }

    timeouts.push(setTimeout(() => setPhase("pulse"), 3000));
    timeouts.push(setTimeout(() => setPhase("revealing"), 3500));
    for (let i = 1; i <= 5; i++) {
      timeouts.push(
        setTimeout(() => setRevealedElements(i), 3500 + i * 150)
      );
    }

    timeouts.push(setTimeout(() => setPhase("holding"), 5000));
    timeouts.push(setTimeout(() => setPhase("deleting"), 7000));

    const deleteStart = 7000;
    const deleteDuration = 800;
    const perCharDel = deleteDuration / chars;
    for (let i = chars; i > 0; i--) {
      timeouts.push(
        setTimeout(() => {
          setTypedQuery(cycle.query.slice(0, i - 1));
        }, deleteStart + perCharDel * (chars - i + 1))
      );
    }
    timeouts.push(setTimeout(() => setRevealedElements(0), 7400));

    timeouts.push(
      setTimeout(() => {
        setCycleIndex((idx) => (idx + 1) % HERO_SEARCH_CYCLES.length);
      }, 8000)
    );

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [cycleIndex, currentCycle]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__spotlight" aria-hidden="true" />
      <div className="hero__noise" aria-hidden="true" />

      <Link href="/" className="hero__mark" aria-label="Rysen home">
        <SignalTriangle size={18} decorative />
        <div className="hero__mark-text">
          <span className="hero__mark-wordmark">Rysen</span>
          <span className="hero__mark-sub">Detroit, Michigan</span>
        </div>
      </Link>

      <button
        type="button"
        className="hero__menu-trigger"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
          <line x1="0" y1="1" x2="20" y2="1" stroke="var(--signal)" strokeWidth="1.5" />
          <line x1="0" y1="7" x2="20" y2="7" stroke="var(--signal)" strokeWidth="1.5" />
          <line x1="0" y1="13" x2="20" y2="13" stroke="var(--signal)" strokeWidth="1.5" />
        </svg>
      </button>

      {menuOpen && (
        <div
          className="hero__menu-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <button
            type="button"
            className="hero__menu-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <line x1="3" y1="3" x2="17" y2="17" stroke="var(--signal)" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="17" y1="3" x2="3" y2="17" stroke="var(--signal)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <nav className="hero__menu-list" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hero__menu-item"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <div className="hero__composition">
        <div className="hero__left">
          <p className="hero__kicker">Stop competing for visibility.</p>

          <h1 className="hero-headline">
            Imagine your{" "}
            <span
              className="hero-headline__vertical"
              style={{ opacity: phase === "deleting" ? 0 : 1 }}
            >
              {currentCycle.vertical}
            </span>{" "}
            appeared as the{" "}
            <span className="hero-headline__highlight">#1 result</span> on every
            search in your city.
          </h1>

          <p className="hero__support">
            We rank one law firm and one medical practice per metro. That's the
            whole offer.
          </p>

          <Link href="/contact" className="hero__cta">
            Find out if your metro is open.
          </Link>
        </div>

        <div className="hero__right">
          <HeroSearchDemonstration
            cycle={currentCycle}
            phase={phase}
            typedQuery={typedQuery}
            revealedElements={revealedElements}
          />
        </div>
      </div>

      <div className="hero__platforms">
        <span className="hero__platforms-label">Optimized for</span>
        <div className="hero__platforms-row">
          <span className="hero__platform">
            <GoogleWordmark />
          </span>
          <span className="hero__platforms-divider" aria-hidden="true">·</span>
          <span className="hero__platform">
            <ChatGPTIcon /> ChatGPT
          </span>
          <span className="hero__platforms-divider" aria-hidden="true">·</span>
          <span className="hero__platform">
            <PerplexityIcon /> Perplexity
          </span>
          <span className="hero__platforms-divider" aria-hidden="true">·</span>
          <span className="hero__platform">
            <GeminiIcon /> Gemini
          </span>
        </div>
      </div>

      <div className="hero__ambient-triangle" aria-hidden="true">
        <SignalTriangle size={32} decorative />
      </div>
    </section>
  );
}
