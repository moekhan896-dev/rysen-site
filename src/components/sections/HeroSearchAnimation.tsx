"use client";

import { useEffect, useState } from "react";
import { SignalTriangle } from "@/components/brand/SignalTriangle";

interface Result {
  rank: number;
  domain: string;
  title: string;
  description: string;
  isClient: boolean;
}

interface Query {
  query: string;
  results: ReadonlyArray<Result>;
}

const QUERIES: ReadonlyArray<Query> = [
  {
    query: "best probate lawyer tampa",
    results: [
      {
        rank: 1,
        domain: "awslaw.com",
        title: "AWS Law Firm · Tampa Probate Attorneys",
        description:
          "Tampa's leading probate firm. 30+ years of estate planning, will contests, and probate administration.",
        isClient: true,
      },
      {
        rank: 2,
        domain: "tampaprobate.com",
        title: "Tampa Probate Law Group",
        description:
          "Estate planning and probate administration services in Tampa Bay.",
        isClient: false,
      },
      {
        rank: 3,
        domain: "floridawills.net",
        title: "Florida Wills & Probate",
        description: "Statewide probate services across Florida.",
        isClient: false,
      },
    ],
  },
  {
    query: "miami dermatologist consultation",
    results: [
      {
        rank: 1,
        domain: "hartmanderm.com",
        title: "Hartman Dermatology · Miami's Premier Dermatology Practice",
        description:
          "Board-certified dermatologists specializing in medical, surgical, and cosmetic dermatology in Miami.",
        isClient: true,
      },
      {
        rank: 2,
        domain: "miamiderm.com",
        title: "Miami Dermatology Specialists",
        description:
          "Comprehensive dermatology services in Miami-Dade county.",
        isClient: false,
      },
      {
        rank: 3,
        domain: "southfloridaskin.com",
        title: "South Florida Skin Center",
        description: "Skin care, acne treatment, and cosmetic procedures.",
        isClient: false,
      },
    ],
  },
  {
    query: "atlanta divorce attorney",
    results: [
      {
        rank: 1,
        domain: "tylerfamilylaw.com",
        title: "Tyler Family Law · Atlanta Divorce & Family Attorneys",
        description:
          "Atlanta's trusted divorce and family law firm. Custody, alimony, and asset division.",
        isClient: true,
      },
      {
        rank: 2,
        domain: "atlantadivorce.org",
        title: "Atlanta Divorce Lawyers",
        description:
          "Experienced family law attorneys serving Atlanta and surrounding counties.",
        isClient: false,
      },
      {
        rank: 3,
        domain: "georgiafamilylaw.com",
        title: "Georgia Family Law",
        description: "Family law services throughout Georgia.",
        isClient: false,
      },
    ],
  },
  {
    query: "chicago dental implants",
    results: [
      {
        rank: 1,
        domain: "ridgedental.com",
        title: "Ridge Dental · Chicago Dental Implant Specialists",
        description:
          "Chicago's leading dental implant practice. Same-day implants, full mouth restoration, and cosmetic dentistry.",
        isClient: true,
      },
      {
        rank: 2,
        domain: "chicagoimplants.com",
        title: "Chicago Implant Center",
        description: "Dental implant services across Chicago metro area.",
        isClient: false,
      },
      {
        rank: 3,
        domain: "illinoisdental.com",
        title: "Illinois Dental Implant Group",
        description: "Statewide implant dentistry services.",
        isClient: false,
      },
    ],
  },
];

const CYCLE_DURATION = 6000;

export function HeroSearchAnimation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setReduced(prefersReducedMotion);
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % QUERIES.length);
    }, CYCLE_DURATION);
    return () => clearInterval(interval);
  }, []);

  const current = QUERIES[activeIndex];

  return (
    <div
      className="hero-search-animation"
      role="img"
      aria-label="Live search ranking demonstration for Rysen clients"
    >
      <div className="hero-search-bar">
        <div className="search-bar-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="search-bar-input">
          <span className="search-bar-icon" aria-hidden="true">
            ⌕
          </span>
          <span
            className="search-bar-query"
            key={`q-${activeIndex}`}
            data-reduced={reduced ? "true" : "false"}
          >
            {current.query}
          </span>
        </div>
      </div>

      <div className="hero-search-results">
        {current.results.map((result, idx) => (
          <div
            key={`${activeIndex}-${idx}`}
            className={`search-result${
              result.isClient ? " search-result--client" : ""
            }`}
            style={{ animationDelay: `${1300 + (2 - idx) * 180}ms` }}
          >
            {result.isClient && (
              <div className="search-result-rank-tag">Rank #1</div>
            )}
            <div className="search-result-domain">{result.domain}</div>
            <h3 className="search-result-title">{result.title}</h3>
            <p className="search-result-description">{result.description}</p>
          </div>
        ))}
      </div>

      <div className="hero-search-caption">
        <SignalTriangle size={8} decorative />
        <span>Real client rankings · Updated daily</span>
      </div>
    </div>
  );
}
