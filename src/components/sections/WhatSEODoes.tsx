import { Fragment } from "react";
import { ScrollReveal } from "@/components/utilities/ScrollReveal";

function RankIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" width="56" height="56" aria-hidden="true">
      <rect x="8" y="10" width="48" height="14" rx="3" fill="var(--signal)" stroke="var(--ink)" strokeWidth="1.5" />
      <rect x="8" y="28" width="48" height="14" rx="3" fill="none" stroke="var(--ink-muted)" strokeWidth="1.5" opacity="0.4" />
      <rect x="8" y="46" width="48" height="14" rx="3" fill="none" stroke="var(--ink-muted)" strokeWidth="1.5" opacity="0.2" />
      <circle cx="16" cy="17" r="4" fill="var(--ink)" />
      <text x="16" y="20" fontSize="7" fontWeight="800" fill="var(--signal)" textAnchor="middle">1</text>
    </svg>
  );
}

function CaptureIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" width="56" height="56" aria-hidden="true">
      <path d="M 32 56 L 32 12" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
      <path d="M 20 24 L 32 12 L 44 24" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="14" cy="40" r="3" fill="var(--signal)" />
      <circle cx="50" cy="32" r="3" fill="var(--signal)" />
      <circle cx="46" cy="48" r="3" fill="var(--signal)" />
      <circle cx="18" cy="52" r="3" fill="var(--signal)" />
    </svg>
  );
}

function ConvertIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" width="56" height="56" aria-hidden="true">
      <rect x="18" y="8" width="28" height="48" rx="4" stroke="var(--ink)" strokeWidth="2" fill="none" />
      <line x1="18" y1="16" x2="46" y2="16" stroke="var(--ink)" strokeWidth="1.5" />
      <line x1="18" y1="48" x2="46" y2="48" stroke="var(--ink)" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="10" fill="var(--signal)" />
      <path d="M 27 32 L 31 36 L 38 28" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function Connector() {
  return (
    <svg viewBox="0 0 60 12" fill="none" width="60" height="12" aria-hidden="true">
      <line x1="0" y1="6" x2="48" y2="6" stroke="var(--signal)" strokeWidth="1.5" strokeDasharray="4 4" />
      <path d="M 48 2 L 56 6 L 48 10" stroke="var(--signal)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const STEPS = [
  {
    icon: <RankIcon />,
    number: "01",
    title: "Rank #1 across every query.",
    body: "We engineer first-position rankings on Google, ChatGPT, Perplexity, and Gemini for every query your future clients actually search.",
  },
  {
    icon: <CaptureIcon />,
    number: "02",
    title: "Capture the click.",
    body: "When you're #1, you get 35% of the clicks. When you're #4, you get 4%. The position determines the volume.",
  },
  {
    icon: <ConvertIcon />,
    number: "03",
    title: "Convert into clients.",
    body: "Our pages are engineered to turn searchers into consultations. We track every call, every form fill, every dollar back to source.",
  },
] as const;

export function WhatSEODoes() {
  return (
    <section className="what-seo" aria-label="How it works">
      <div className="what-seo__inner">
        <ScrollReveal>
          <h2 className="what-seo__heading">How it works.</h2>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <p className="what-seo__sub">
            Three steps. Repeated weekly. Compounded across every query that matters to your business.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <div className="what-seo__steps">
            {STEPS.map((step, i) => (
              <Fragment key={step.number}>
                <div className="what-seo__step">
                  <div className="what-seo__step-icon">{step.icon}</div>
                  <span className="what-seo__step-number">Step {step.number}</span>
                  <h3 className="what-seo__step-title">{step.title}</h3>
                  <p className="what-seo__step-body">{step.body}</p>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="what-seo__connector" aria-hidden="true">
                    <Connector />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
