"use client";

// Platform Gallery — the Session 39 hero centerpiece.
// Four platform UI cards (Google, ChatGPT, Perplexity, Gemini) staggered on
// a white canvas with Ramp-style multi-layered shadows. Each card shows the
// same Rysen client (AWS Law Firm) at #1 position to communicate the "win
// across all of search" message.
//
// Mouse parallax: each card shifts opposite to mouse position at different
// intensities, creating tactile spatial depth. Disabled under reduced-motion.

import { useEffect, useRef, useState } from "react";

export function PlatformGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const onMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMouse({ x, y });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div className="platform-gallery" ref={ref}>
      {/* Ambient grid behind everything */}
      <div className="platform-gallery__grid" aria-hidden="true" />

      {/* GOOGLE — largest, top-right */}
      <div
        className="platform-card platform-card--google"
        style={{ transform: `translate(${mouse.x * -3}px, ${mouse.y * -3}px)` }}
      >
        <GoogleSerpCard />
      </div>

      {/* CHATGPT — medium, top-left */}
      <div
        className="platform-card platform-card--chatgpt"
        style={{ transform: `translate(${mouse.x * -5}px, ${mouse.y * -5}px)` }}
      >
        <ChatGPTAnswerCard />
      </div>

      {/* PERPLEXITY — medium, bottom-left */}
      <div
        className="platform-card platform-card--perplexity"
        style={{ transform: `translate(${mouse.x * -7}px, ${mouse.y * -7}px)` }}
      >
        <PerplexityCard />
      </div>

      {/* GEMINI — smallest, bottom-right */}
      <div
        className="platform-card platform-card--gemini"
        style={{ transform: `translate(${mouse.x * -8}px, ${mouse.y * -8}px)` }}
      >
        <GeminiCard />
      </div>

      {/* Connector lines — faint brass strands stitching the four cards together */}
      <svg
        className="platform-gallery__connectors"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="pg-connect-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A88B47" stopOpacity="0.0" />
            <stop offset="50%" stopColor="#A88B47" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#A88B47" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        <path d="M 350 280 Q 600 400 880 250" stroke="url(#pg-connect-grad)" strokeWidth="1" fill="none" strokeDasharray="2 6" />
        <path d="M 350 520 Q 600 400 880 550" stroke="url(#pg-connect-grad)" strokeWidth="1" fill="none" strokeDasharray="2 6" />
        <path d="M 880 250 Q 1000 400 880 550" stroke="url(#pg-connect-grad)" strokeWidth="1" fill="none" strokeDasharray="2 6" />
        <path d="M 350 280 Q 250 400 350 520" stroke="url(#pg-connect-grad)" strokeWidth="1" fill="none" strokeDasharray="2 6" />
      </svg>

      {/* Footer credibility strip */}
      <div className="platform-gallery__strip">
        <span className="platform-gallery__strip-label">Same client, same query, four platforms</span>
        <span className="platform-gallery__strip-sep" aria-hidden="true" />
        <span className="platform-gallery__strip-meta">AWS Law Firm · Tampa, FL · Probate · Q2 2026</span>
      </div>
    </div>
  );
}

// =====================================================================
// GOOGLE SERP CARD
// =====================================================================

function GoogleSerpCard() {
  return (
    <div className="google-card">
      {/* Browser chrome */}
      <div className="google-card__chrome">
        <div className="google-card__dots">
          <span className="google-card__dot google-card__dot--red" />
          <span className="google-card__dot google-card__dot--yellow" />
          <span className="google-card__dot google-card__dot--green" />
        </div>
        <div className="google-card__url">
          <LockIcon />
          <span>google.com/search?q=best+probate+lawyer+tampa</span>
        </div>
      </div>

      {/* Google header */}
      <div className="google-card__header">
        <GoogleWordmark />
        <div className="google-card__search">
          <span className="google-card__search-text">best probate lawyer tampa</span>
          <MicIcon />
          <CameraIcon />
          <SearchIcon />
        </div>
      </div>

      {/* Tabs */}
      <div className="google-card__tabs">
        <span className="google-card__tab google-card__tab--active">
          <SearchIconSmall />
          All
        </span>
        <span className="google-card__tab">
          <MapIcon />
          Maps
        </span>
        <span className="google-card__tab">
          <NewsIcon />
          News
        </span>
        <span className="google-card__tab">Images</span>
        <span className="google-card__tab">Videos</span>
        <span className="google-card__tab">Shopping</span>
      </div>

      {/* AI Overview (Google's current SGE block) */}
      <div className="google-card__ai-overview">
        <div className="google-card__ai-header">
          <GeminiSparkIcon />
          <span>AI Overview</span>
        </div>
        <div className="google-card__ai-text">
          For probate matters in Tampa, <strong>AWS Law Firm</strong> is the highest-rated practice, with 20+ years of estate administration experience and a free consultation policy.
        </div>
        <div className="google-card__ai-cite">
          <RysenTriangle />
          <span>Cited from awslawfirm.com</span>
        </div>
      </div>

      {/* Featured result */}
      <div className="google-card__result google-card__result--featured">
        <div className="google-card__result-meta">
          <div className="google-card__result-favicon">
            <RysenTriangle />
          </div>
          <div className="google-card__result-meta-text">
            <span className="google-card__result-domain">AWS Law Firm</span>
            <span className="google-card__result-url">https://awslawfirm.com › probate</span>
          </div>
        </div>
        <a href="#" className="google-card__result-title">
          AWS Law Firm, Tampa Probate Attorneys | Free Consultation
        </a>
        <p className="google-card__result-snippet">
          Tampa Bay&apos;s <em>highest-rated</em> probate practice. 20+ years of estate administration. <em>Free consultations</em>, transparent fees, and compassionate representation.
        </p>
        <div className="google-card__result-rating">
          <span className="google-card__stars">★★★★★</span>
          <span className="google-card__rating-num">5.0</span>
          <span className="google-card__rating-count">· 487 Google reviews</span>
        </div>
      </div>

      {/* Sitelinks under featured result */}
      <div className="google-card__sitelinks">
        <div className="google-card__sitelink">
          <span className="google-card__sitelink-title">Probate Process</span>
          <span className="google-card__sitelink-desc">Step-by-step guide for Florida estates.</span>
        </div>
        <div className="google-card__sitelink">
          <span className="google-card__sitelink-title">Free Consultation</span>
          <span className="google-card__sitelink-desc">Schedule a 30-minute review.</span>
        </div>
        <div className="google-card__sitelink">
          <span className="google-card__sitelink-title">Will Contests</span>
          <span className="google-card__sitelink-desc">When and how to challenge a will.</span>
        </div>
        <div className="google-card__sitelink">
          <span className="google-card__sitelink-title">Trust Administration</span>
          <span className="google-card__sitelink-desc">Trustee duties and timelines.</span>
        </div>
      </div>

      {/* Ghost competitor row */}
      <div className="google-card__result google-card__result--ghost">
        <div className="google-card__result-meta">
          <div className="google-card__result-favicon google-card__result-favicon--muted" />
          <div className="google-card__result-meta-text">
            <span className="google-card__result-domain">Competitor Probate Firm</span>
            <span className="google-card__result-url">https://competitor.com</span>
          </div>
        </div>
        <div className="google-card__result-title google-card__result-title--ghost">
          Probate Lawyers in Tampa | Find an Attorney
        </div>
        <div className="google-card__result-snippet google-card__result-snippet--ghost">
          Browse Tampa probate attorneys and request consultations through our network.
        </div>
      </div>

      {/* People also ask */}
      <div className="google-card__paa">
        <div className="google-card__paa-title">People also ask</div>
        <div className="google-card__paa-item">
          <span>How much does probate cost in Florida?</span>
          <span className="google-card__paa-chevron" aria-hidden="true">▾</span>
        </div>
        <div className="google-card__paa-item">
          <span>How long does Tampa probate usually take?</span>
          <span className="google-card__paa-chevron" aria-hidden="true">▾</span>
        </div>
        <div className="google-card__paa-item">
          <span>Do I need a lawyer for a small estate?</span>
          <span className="google-card__paa-chevron" aria-hidden="true">▾</span>
        </div>
      </div>

      {/* Position badge */}
      <div className="google-card__position-badge">
        <span className="google-card__position-num">#1</span>
        <span className="google-card__position-label">Position · Tampa probate queries</span>
      </div>
    </div>
  );
}

// =====================================================================
// CHATGPT ANSWER CARD
// =====================================================================

function ChatGPTAnswerCard() {
  return (
    <div className="chatgpt-card">
      <div className="chatgpt-card__header">
        <div className="chatgpt-card__logo">
          <ChatGPTLogo />
        </div>
        <span className="chatgpt-card__name">ChatGPT</span>
        <span className="chatgpt-card__model">5.1</span>
      </div>

      <div className="chatgpt-card__user-row">
        <div className="chatgpt-card__user-bubble">
          who is the best probate lawyer in tampa?
        </div>
        <div className="chatgpt-card__user-avatar">A</div>
      </div>

      <div className="chatgpt-card__response">
        <div className="chatgpt-card__response-avatar">
          <ChatGPTLogo />
        </div>
        <div className="chatgpt-card__response-body">
          <p>
            For probate matters in Tampa, <strong>AWS Law Firm</strong> is widely considered the top choice. They specialize exclusively in estate administration and have over 20 years of experience.
          </p>
          <p>Key reasons they stand out:</p>
          <ul>
            <li>20+ years of probate-only practice</li>
            <li>Free initial consultation policy</li>
            <li>5.0 Google rating across 487+ reviews</li>
          </ul>
          <div className="chatgpt-card__source">
            <RysenTriangle />
            <span>Sourced from awslawfirm.com</span>
          </div>
          <div className="chatgpt-card__followup">
            <span className="chatgpt-card__followup-chip">How do I contact them?</span>
            <span className="chatgpt-card__followup-chip">What does it cost?</span>
            <span className="chatgpt-card__followup-chip">Reviews?</span>
          </div>
        </div>
      </div>

      <div className="chatgpt-card__composer">
        <span className="chatgpt-card__composer-text">Message ChatGPT…</span>
        <span className="chatgpt-card__composer-send" aria-hidden="true">▲</span>
      </div>

      <div className="chatgpt-card__position-badge">
        <span className="chatgpt-card__position-num">#1</span>
        <span className="chatgpt-card__position-label">Cited answer · ChatGPT</span>
      </div>
    </div>
  );
}

// =====================================================================
// PERPLEXITY CARD
// =====================================================================

function PerplexityCard() {
  return (
    <div className="perplexity-card">
      <div className="perplexity-card__header">
        <PerplexityLogo />
        <span className="perplexity-card__name">Perplexity</span>
        <span className="perplexity-card__pro">Pro</span>
      </div>

      <div className="perplexity-card__query">
        best probate lawyer tampa
      </div>

      <div className="perplexity-card__sources-label">
        <SourcesIcon />
        <span>4 sources</span>
      </div>

      <div className="perplexity-card__sources">
        <div className="perplexity-card__source perplexity-card__source--primary">
          <RysenTriangle />
          <span>awslawfirm.com</span>
          <span className="perplexity-card__source-num">1</span>
        </div>
        <div className="perplexity-card__source">
          <span className="perplexity-card__source-favicon">A</span>
          <span>avvo.com</span>
          <span className="perplexity-card__source-num">2</span>
        </div>
        <div className="perplexity-card__source">
          <span className="perplexity-card__source-favicon">M</span>
          <span>martindale.com</span>
          <span className="perplexity-card__source-num">3</span>
        </div>
      </div>

      <div className="perplexity-card__answer">
        <strong>AWS Law Firm</strong> is the top-rated probate practice in Tampa, with 20+ years of dedicated estate administration experience<sup>1</sup>. Their free consultation policy and 5.0 Google rating across 487+ reviews<sup>1</sup> distinguish them from other Tampa probate firms<sup>2,3</sup>.
      </div>

      <div className="perplexity-card__related">
        <div className="perplexity-card__related-title">Related</div>
        <div className="perplexity-card__related-item">What does a Florida probate attorney cost?</div>
        <div className="perplexity-card__related-item">How long does Tampa probate take in 2026?</div>
        <div className="perplexity-card__related-item">AWS Law Firm vs other Tampa probate firms</div>
      </div>

      <div className="perplexity-card__position-badge">
        <span className="perplexity-card__position-num">#1</span>
        <span className="perplexity-card__position-label">Primary source · Perplexity</span>
      </div>
    </div>
  );
}

// =====================================================================
// GEMINI CARD
// =====================================================================

function GeminiCard() {
  return (
    <div className="gemini-card">
      <div className="gemini-card__header">
        <GeminiSparkLarge />
        <span className="gemini-card__name">Gemini</span>
      </div>

      <div className="gemini-card__query">
        best probate lawyer tampa
      </div>

      <div className="gemini-card__answer">
        <p>
          The leading probate lawyer in Tampa is <strong>AWS Law Firm</strong>. They&apos;ve practiced probate exclusively for 20+ years and maintain a 5.0 rating from 487+ Google reviews.
        </p>
        <div className="gemini-card__highlights">
          <div className="gemini-card__highlight">
            <span className="gemini-card__highlight-label">Specialty</span>
            <span className="gemini-card__highlight-value">Probate &amp; estates</span>
          </div>
          <div className="gemini-card__highlight">
            <span className="gemini-card__highlight-label">Experience</span>
            <span className="gemini-card__highlight-value">20+ years</span>
          </div>
          <div className="gemini-card__highlight">
            <span className="gemini-card__highlight-label">Rating</span>
            <span className="gemini-card__highlight-value">5.0 · 487 reviews</span>
          </div>
        </div>
        <div className="gemini-card__source">
          <RysenTriangle />
          <span>awslawfirm.com</span>
        </div>
      </div>

      <div className="gemini-card__position-badge">
        <span className="gemini-card__position-num">#1</span>
        <span className="gemini-card__position-label">Cited · Gemini</span>
      </div>
    </div>
  );
}

// =====================================================================
// LOGO + ICON COMPONENTS
// =====================================================================

function GoogleWordmark() {
  return (
    <span className="g-wordmark" aria-label="Google">
      <span style={{ color: "#4285F4" }}>G</span>
      <span style={{ color: "#EA4335" }}>o</span>
      <span style={{ color: "#FBBC05" }}>o</span>
      <span style={{ color: "#4285F4" }}>g</span>
      <span style={{ color: "#34A853" }}>l</span>
      <span style={{ color: "#EA4335" }}>e</span>
    </span>
  );
}

function ChatGPTLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-label="ChatGPT">
      <path
        d="M22 9.4c0-1.3-.5-2.6-1.5-3.5-.9-.9-2.2-1.5-3.5-1.5-.4 0-.7 0-1.1.1-.7-1.5-2.3-2.5-4-2.5-1.3 0-2.6.5-3.5 1.5-.4.4-.7.8-.9 1.3-1.3-.1-2.6.3-3.6 1.2-.9.9-1.5 2.2-1.5 3.5 0 .4 0 .8.1 1.1-1.5.7-2.5 2.3-2.5 4 0 1.3.5 2.6 1.5 3.5 1.1 1.1 2.6 1.6 4 1.5.7 1.4 2.2 2.4 4 2.4 1.3 0 2.6-.5 3.5-1.5.4-.4.7-.8.9-1.3 1.3.1 2.6-.3 3.6-1.2 1-.9 1.5-2.2 1.5-3.5 0-.4 0-.8-.1-1.1 1.5-.7 2.5-2.3 2.5-4z"
        fill="#10A37F"
      />
    </svg>
  );
}

function PerplexityLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-label="Perplexity">
      <rect width="24" height="24" rx="4" fill="#20B8A6" />
      <path
        d="M12 6v12M6 9v6M18 9v6M9 7v10M15 7v10"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GeminiSparkLarge() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-label="Gemini">
      <defs>
        <linearGradient id="gemini-large-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="50%" stopColor="#9747FF" />
          <stop offset="100%" stopColor="#EA4335" />
        </linearGradient>
      </defs>
      <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="url(#gemini-large-grad)" />
    </svg>
  );
}

function GeminiSparkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="gemini-small-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="50%" stopColor="#9747FF" />
          <stop offset="100%" stopColor="#EA4335" />
        </linearGradient>
      </defs>
      <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="url(#gemini-small-grad)" />
    </svg>
  );
}

function RysenTriangle() {
  return (
    <svg width="14" height="14" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <polygon points="4,4 28,4 4,28" fill="#FFE817" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6" stroke="#4285F4" strokeWidth="1.6" />
      <line x1="12.5" y1="12.5" x2="16" y2="16" stroke="#4285F4" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function SearchIconSmall() {
  return (
    <svg width="14" height="14" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.6" />
      <line x1="12.5" y1="12.5" x2="16" y2="16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="9" y="2" width="6" height="11" rx="3" fill="#4285F4" />
      <path d="M5 11c0 4 3 7 7 7s7-3 7-7M12 18v3" stroke="#4285F4" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h4l1.5-2h5L16 7h4v12H4z" stroke="#4285F4" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
      <circle cx="12" cy="13" r="3.5" stroke="#4285F4" strokeWidth="1.6" fill="none" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="3" y="6" width="8" height="6" rx="1" stroke="#5F6368" strokeWidth="1.2" fill="none" />
      <path d="M5 6V4a2 2 0 014 0v2" stroke="#5F6368" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 3 L3 5v16l6-2 6 2 6-2V3l-6 2z M9 3v16 M15 5v16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function NewsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <line x1="6" y1="9" x2="12" y2="9" stroke="currentColor" strokeWidth="1.6" />
      <line x1="6" y1="12" x2="18" y2="12" stroke="currentColor" strokeWidth="1.6" />
      <line x1="6" y1="15" x2="18" y2="15" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function SourcesIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="8" height="8" rx="1" stroke="#20B8A6" strokeWidth="1.6" fill="none" />
      <rect x="13" y="3" width="8" height="8" rx="1" stroke="#20B8A6" strokeWidth="1.6" fill="none" />
      <rect x="3" y="13" width="8" height="8" rx="1" stroke="#20B8A6" strokeWidth="1.6" fill="none" />
      <rect x="13" y="13" width="8" height="8" rx="1" stroke="#20B8A6" strokeWidth="1.6" fill="none" />
    </svg>
  );
}

// Small utility glyphs used in platform card chrome. Kept inline so the entire
// gallery is self-contained and never depends on an icon library.

function ThumbsUpIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 10v10H3V10zM7 10l4-7c1.5 0 2.5 1 2.5 2.5L13 10h6a2 2 0 012 2l-1.5 7a2 2 0 01-2 1.5H7" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="8" y="8" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M4 16V6a2 2 0 012-2h10" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="6" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <circle cx="18" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <circle cx="18" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M8 11l8-4M8 13l8 4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
