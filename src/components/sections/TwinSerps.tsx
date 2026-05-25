"use client";

// Twin SERP composition — the hero centerpiece for Session 38.
// Two complete Google search result cards rendered at full size, side by side.
// Each card has: browser chrome, search bar, tabs, featured #1 result with
// brass-tinted background and animated metric counter, plus a ghosted
// position-2 row hint to ground the visual in reality.

import { useEffect, useRef, useState } from "react";

type SerpData = {
  vertical: "Legal" | "Medical";
  verticalMetro: string;
  query: string;
  domain: string;
  title: string;
  snippet: string;
  metricValue: string;
  metricLabel: string;
  sitelinks: string[];
};

const LEGAL_SERP: SerpData = {
  vertical: "Legal",
  verticalMetro: "LEGAL · TAMPA",
  query: "best probate lawyer tampa",
  domain: "awslawfirm.com",
  title: "AWS Law Firm, Tampa Probate Attorneys",
  snippet:
    "Highest-rated probate practice in Tampa Bay. Free consultations. 20+ years of estate administration experience.",
  metricValue: "348",
  metricLabel: "qualified calls · Q1 2026",
  sitelinks: ["Practice areas", "Free consultation", "Contact"],
};

const MEDICAL_SERP: SerpData = {
  vertical: "Medical",
  verticalMetro: "MEDICAL · MIAMI",
  query: "miami cosmetic dermatologist",
  domain: "hartmandermatology.com",
  title: "Hartman Dermatology, Miami Cosmetic Practice",
  snippet:
    "Board-certified cosmetic dermatology in Miami. Same-week appointments. Laser, aesthetic, and medical care.",
  metricValue: "38",
  metricLabel: "percent AI citation rate",
  sitelinks: ["Treatments", "Book appointment", "About"],
};

// SerpCardProps tightens the TS signature on the card to make this file
// safely importable in isolation and to clarify what data each card needs.

// === Icon components ===

function GoogleMark() {
  return (
    <span className="serp-card__google" aria-label="Google">
      <span style={{ color: "#4285F4" }}>G</span>
      <span style={{ color: "#EA4335" }}>o</span>
      <span style={{ color: "#FBBC05" }}>o</span>
      <span style={{ color: "#4285F4" }}>g</span>
      <span style={{ color: "#34A853" }}>l</span>
      <span style={{ color: "#EA4335" }}>e</span>
    </span>
  );
}

function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6" stroke="#5F6368" strokeWidth="1.6" />
      <line
        x1="12.5"
        y1="12.5"
        x2="16"
        y2="16"
        stroke="#5F6368"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="6" y="2" width="6" height="9" rx="3" fill="#9AA0A6" />
      <path
        d="M4 9c0 3 2 5 5 5s5-2 5-5M9 14v2"
        stroke="#9AA0A6"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M3 5h12v9H3z M7 5l1-2h2l1 2"
        stroke="#9AA0A6"
        strokeWidth="1.4"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="9" cy="10" r="2.5" stroke="#9AA0A6" strokeWidth="1.4" fill="none" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="3" y="6" width="8" height="6" rx="1" stroke="#5F6368" strokeWidth="1.2" />
      <path d="M5 6V4a2 2 0 014 0v2" stroke="#5F6368" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

function RysenTriangle() {
  return (
    <svg width="14" height="14" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <polygon points="4,4 28,4 4,28" fill="#6EF06E" />
    </svg>
  );
}

// === Animated counter ===
// IntersectionObserver fires once, then disconnects so the counter doesn't
// re-trigger on subsequent scrolls back into view.

function AnimatedMetric({ value }: { value: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setDisplay(value);
      hasAnimated.current = true;
      return;
    }

    const target = parseInt(value, 10);
    if (isNaN(target)) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const duration = 1600;
            const steps = 50;
            const stepTime = duration / steps;
            const increment = target / steps;
            let current = 0;

            const interval = setInterval(() => {
              current += increment;
              if (current >= target) {
                setDisplay(target.toString());
                clearInterval(interval);
              } else {
                setDisplay(Math.floor(current).toString());
              }
            }, stepTime);

            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="serp-card__metric-num">
      {display}
    </span>
  );
}

// === Individual SERP card ===

function SerpCard({ data }: { data: SerpData }) {
  return (
    <div className="serp-card">
      {/* Browser chrome */}
      <div className="serp-card__chrome">
        <div className="serp-card__dots">
          <span className="serp-card__dot serp-card__dot--red" />
          <span className="serp-card__dot serp-card__dot--yellow" />
          <span className="serp-card__dot serp-card__dot--green" />
        </div>
        <div className="serp-card__url">
          <LockIcon />
          <span>google.com</span>
        </div>
      </div>

      {/* Search bar with mic + camera widgets */}
      <div className="serp-card__searchbar">
        <GoogleMark />
        <div className="serp-card__query">
          <SearchIcon />
          <span>{data.query}</span>
          <span className="serp-card__query-widgets">
            <MicIcon />
            <CameraIcon />
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="serp-card__tabs">
        <span className="serp-card__tab serp-card__tab--active">All</span>
        <span className="serp-card__tab">Maps</span>
        <span className="serp-card__tab">News</span>
        <span className="serp-card__tab">Images</span>
        <span className="serp-card__tab">Videos</span>
      </div>

      {/* Featured #1 result */}
      <div className="serp-card__result">
        <div className="serp-card__result-position">#1</div>
        <div className="serp-card__result-meta">
          <div className="serp-card__result-favicon">
            <RysenTriangle />
          </div>
          <span className="serp-card__result-domain">{data.domain}</span>
        </div>
        <a href="#" className="serp-card__result-title">
          {data.title}
        </a>
        <p className="serp-card__result-snippet">{data.snippet}</p>

        {/* Sitelinks (real Google SERPs show these for #1 results) */}
        <div className="serp-card__sitelinks">
          {data.sitelinks.map((link, i) => (
            <span key={link} className="serp-card__sitelink">
              {i > 0 && <span className="serp-card__sitelink-sep">·</span>}
              <a href="#" className="serp-card__sitelink-link">
                {link}
              </a>
            </span>
          ))}
        </div>

        <div className="serp-card__metric">
          <AnimatedMetric value={data.metricValue} />
          <span className="serp-card__metric-label">{data.metricLabel}</span>
        </div>
      </div>

      {/* Ghost position-2 row for grounding */}
      <div className="serp-card__result serp-card__result--ghost">
        <div className="serp-card__result-meta">
          <div className="serp-card__result-favicon serp-card__result-favicon--muted">
            <span>·</span>
          </div>
          <span className="serp-card__result-domain">competitor.com</span>
        </div>
        <div className="serp-card__result-title serp-card__result-title--ghost">
          Position 2 ↓
        </div>
      </div>

      {/* "People also ask" footer strip for realism */}
      <div className="serp-card__paa">
        <span className="serp-card__paa-label">People also ask</span>
        <span className="serp-card__paa-question">
          {data.vertical === "Legal"
            ? "How much does a probate attorney charge?"
            : "How long do cosmetic dermatology results last?"}
        </span>
        <span className="serp-card__paa-chevron" aria-hidden="true">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 4 L5 7 L8 4" stroke="#5F6368" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  );
}

// === Twin layout root ===

export function TwinSerps() {
  return (
    <div className="twin-serps" aria-label="Client search rankings">
      <div className="twin-serps__col">
        <SerpCard data={LEGAL_SERP} />
        <div className="twin-serps__caption">
          <span className="twin-serps__caption-marker" aria-hidden="true" />
          <span>{LEGAL_SERP.verticalMetro}</span>
        </div>
      </div>
      <div className="twin-serps__col">
        <SerpCard data={MEDICAL_SERP} />
        <div className="twin-serps__caption">
          <span className="twin-serps__caption-marker" aria-hidden="true" />
          <span>{MEDICAL_SERP.verticalMetro}</span>
        </div>
      </div>
    </div>
  );
}
