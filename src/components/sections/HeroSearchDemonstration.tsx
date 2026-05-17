"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SignalTriangle } from "@/components/brand/SignalTriangle";

type Vertical = "legal" | "medical";

interface Query {
  query: string;
  url: string;
  firm: string;
  title: string;
  description: string;
  vertical: Vertical;
}

const QUERIES: ReadonlyArray<Query> = [
  {
    query: "best probate lawyer tampa",
    url: "awslawfirm.com › probate-services",
    firm: "AWS Law Firm",
    title: "Tampa Probate & Estate Administration Attorneys",
    description:
      "Over 20 years of experience handling probate, estate planning, and trust administration throughout Tampa Bay. Free initial consultations.",
    vertical: "legal",
  },
  {
    query: "miami dermatologist consultation",
    url: "hartmandermatology.com › cosmetic",
    firm: "Hartman Dermatology",
    title: "Miami Cosmetic Dermatology & Aesthetic Treatments",
    description:
      "Board-certified dermatology specializing in cosmetic and medical skin care for the greater Miami area. Same-week appointments available.",
    vertical: "medical",
  },
  {
    query: "atlanta divorce attorney",
    url: "tylerfamilylaw.com › divorce",
    firm: "Tyler Family Law",
    title: "Atlanta Family Law, Divorce & Custody Attorneys",
    description:
      "Atlanta's trusted family law firm. Compassionate representation in divorce, child custody, and complex family matters. Four-week intake waitlist.",
    vertical: "legal",
  },
  {
    query: "chicago dental implants",
    url: "ridgedental.com › implants",
    firm: "Ridge Dental",
    title: "Chicago Dental Implants & Full Mouth Restoration",
    description:
      "Chicago's premier implant dentistry practice. Same-day implants, complex restorations, and sedation dentistry. Voted Chicago's best 2024 and 2025.",
    vertical: "medical",
  },
];

const CYCLE_MS = 12000;
const TYPING_START_MS = 500;
const TYPING_END_MS = 3000;
const SUBMIT_MS = 3000;
const REVEAL_START_MS = 3500;
const HOLD_END_MS = 10000;
const TRANSITION_END_MS = 12000;

function useTypewriter(text: string, startAt: number, endAt: number, active: boolean) {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (!active) {
      setTyped(text);
      return;
    }
    setTyped("");
    const totalChars = text.length;
    const typingWindow = endAt - startAt;
    // Slight per-char variance, plus a 200ms pause halfway
    let cancelled = false;
    const halfwayIndex = Math.floor(totalChars / 2);

    function step(i: number) {
      if (cancelled) return;
      if (i > totalChars) return;
      setTyped(text.slice(0, i));
      if (i === totalChars) return;
      // base interval = typing window / chars; add slight variance, plus
      // 200ms pause at the halfway mark
      const base = typingWindow / totalChars;
      const variance = (Math.random() - 0.5) * 40;
      const pause = i === halfwayIndex ? 200 : 0;
      const delay = Math.max(40, base + variance) + pause;
      const id = setTimeout(() => step(i + 1), delay);
      timers.current.push(id);
    }

    const startId = setTimeout(() => step(1), startAt);
    const timers = { current: [startId] as Array<ReturnType<typeof setTimeout>> };
    return () => {
      cancelled = true;
      timers.current.forEach(clearTimeout);
    };
  }, [text, startAt, endAt, active]);

  return typed;
}

export function HeroSearchDemonstration() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState<
    "idle" | "typing" | "submitting" | "revealing" | "holding" | "transitioning"
  >("idle");
  const [reducedMotion, setReducedMotion] = useState(false);
  const phaseTimers = useRef<Array<ReturnType<typeof setTimeout>>>([]);

  // Detect reduced motion
  useEffect(() => {
    const prefers = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReducedMotion(prefers);
  }, []);

  // Phase scheduling per cycle
  useEffect(() => {
    if (reducedMotion) {
      setPhase("holding");
      return;
    }
    // Clear previous phase timers
    phaseTimers.current.forEach(clearTimeout);
    phaseTimers.current = [];

    setPhase("idle");
    const t1 = setTimeout(() => setPhase("typing"), TYPING_START_MS);
    const t2 = setTimeout(() => setPhase("submitting"), SUBMIT_MS);
    const t3 = setTimeout(() => setPhase("revealing"), REVEAL_START_MS);
    const t4 = setTimeout(() => setPhase("holding"), REVEAL_START_MS + 1500);
    const t5 = setTimeout(() => setPhase("transitioning"), HOLD_END_MS);
    const t6 = setTimeout(() => {
      setActiveIndex((i) => (i + 1) % QUERIES.length);
    }, TRANSITION_END_MS);

    phaseTimers.current = [t1, t2, t3, t4, t5, t6];
    return () => phaseTimers.current.forEach(clearTimeout);
  }, [activeIndex, reducedMotion]);

  const current = QUERIES[activeIndex];
  const isTyping = phase === "typing";
  const showCursor = phase === "idle" || phase === "typing";
  const fieldActive = phase === "typing" || phase === "submitting";
  const resultVisible = phase === "revealing" || phase === "holding";
  const isTransitioning = phase === "transitioning";

  // For typewriter: only run when in typing phase. Use derived state.
  const typedText = useTypewriter(
    current.query,
    0,
    TYPING_END_MS - TYPING_START_MS,
    isTyping && !reducedMotion
  );

  // What appears in the field
  const displayedText = reducedMotion
    ? current.query
    : phase === "idle"
      ? ""
      : phase === "typing"
        ? typedText
        : isTransitioning
          ? "" // deleted during transition (we just collapse)
          : current.query;

  // Headline noun, toggles by vertical
  const headlineNoun = current.vertical === "legal" ? "law firm" : "medical practice";

  return (
    <div className="hero-demo">
      <div className="hero-demo__grid">
        <div className="hero-demo__search">
          <div
            className={`hero-search-field${
              fieldActive ? " hero-search-field--active" : ""
            }${phase === "submitting" ? " hero-search-field--submitting" : ""}`}
          >
            <span className="hero-search-field__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="7" />
                <line x1="20" y1="20" x2="16" y2="16" strokeLinecap="round" />
              </svg>
            </span>
            <span className="hero-search-field__query">
              {displayedText}
              {showCursor && <span className="hero-search-field__cursor" aria-hidden="true" />}
            </span>
            <span className="hero-search-field__google-mark" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </span>
          </div>

          <div
            className={`hero-result${resultVisible ? " hero-result--visible" : ""}${
              isTransitioning ? " hero-result--leaving" : ""
            }`}
            aria-live="polite"
          >
            <div className="hero-result__rank">
              <SignalTriangle size={10} decorative />
              <span>1st result</span>
            </div>
            <div className="hero-result__url">{current.url}</div>
            <h3 className="hero-result__title">
              {current.firm}. {current.title}
            </h3>
            <p className="hero-result__description">{current.description}</p>
          </div>
        </div>

        <div className="hero-headline">
          <h1 className="hero-headline__main">
            <span className="hero-headline__highlight">Imagine</span> your{" "}
            <span
              key={headlineNoun}
              className="hero-headline__noun"
              data-vertical={current.vertical}
            >
              {headlineNoun}
            </span>{" "}
            at the top of Google.
          </h1>
          <p className="hero-headline__support">
            For boutique law firms and medical practices that intend to dominate
            their market through organic search.
          </p>
          <Link href="/contact" className="hero-headline__cta">
            Request audit
          </Link>
        </div>
      </div>
    </div>
  );
}
