"use client";

import { useState } from "react";
import Link from "next/link";
import { SerpVisualization } from "./SerpVisualization";
import { PreviewChips } from "./PreviewChips";
import { HERO_CLIENTS, type HeroClient } from "@/lib/heroClients";

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M3 7H11M11 7L7 3M11 7L7 11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Hero() {
  const [activeClient, setActiveClient] = useState<HeroClient>(HERO_CLIENTS[0]);

  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__inner">
        <div className="hero__top">
          <div className="hero__left">
            <div className="hero__status">
              <span className="hero__status-dot" aria-hidden="true" />
              <span>Currently accepting 2 engagements · Q2 2026</span>
            </div>

            <h1 className="hero__headline">
              Make your firm the{" "}
              <span className="hero__highlight">#1 result</span>{" "}
              for every search that matters.
            </h1>

            <p className="hero__sub">
              Rysen is the marketing firm engineered to dominate Google, ChatGPT, Perplexity, and Gemini for law firms and medical practices. We work with one firm per metro.
            </p>

            <div className="hero__ctas">
              <Link href="/contact" className="hero__cta-primary">
                Request audit <ArrowIcon />
              </Link>
              <Link href="#work" className="hero__cta-secondary">
                See the work →
              </Link>
            </div>

            <div className="hero__credibility">
              <span>Working across</span>
              <strong>Google</strong>
              <span className="hero__credibility-dot">·</span>
              <strong>ChatGPT</strong>
              <span className="hero__credibility-dot">·</span>
              <strong>Perplexity</strong>
              <span className="hero__credibility-dot">·</span>
              <strong>Gemini</strong>
            </div>
          </div>

          <div className="hero__right">
            <SerpVisualization client={activeClient} />
          </div>
        </div>

        <div className="hero__chips-row">
          <p className="hero__chips-label">
            <span>We rank clients across</span>
            <span className="hero__chips-count">6 active</span>
          </p>
          <PreviewChips
            clients={HERO_CLIENTS}
            activeId={activeClient.id}
            onSelect={setActiveClient}
          />
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <div className="hero__stat-num">30+</div>
            <div className="hero__stat-label">Firms ranked #1</div>
          </div>
          <div className="hero__stat">
            <div className="hero__stat-num">348</div>
            <div className="hero__stat-label">Top-month qualified calls, single client</div>
          </div>
          <div className="hero__stat">
            <div className="hero__stat-num">100M</div>
            <div className="hero__stat-label">Brand views generated, internal AI persona</div>
          </div>
        </div>
      </div>
    </section>
  );
}
