import Link from "next/link";
import { RankClimb } from "./RankClimb";

// Session 42 hero — full-width vertical stack. Headline + sub + platform
// pills + CTAs centered on top; large RankClimb animated centerpiece
// occupies the next row at near-full-width; proof row at the bottom.
// The Position Monitor has moved into the Stack area (Session 42 P4.5).

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 7H11M11 7L7 3M11 7L7 11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GoogleIconMini() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M22.5 12.27c0-.85-.08-1.66-.22-2.45H12v4.63h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.56c2.08-1.92 3.28-4.74 3.28-8.26z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.76c-.98.66-2.24 1.05-3.72 1.05-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.1A6.58 6.58 0 0 1 5.5 12c0-.73.13-1.44.34-2.1V7.06H2.18A11 11 0 0 0 1 12c0 1.77.42 3.45 1.18 4.94l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.07.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
        fill="#EA4335"
      />
    </svg>
  );
}

function ChatGPTIconMini() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#10A37F" aria-hidden="true">
      <path d="M22 9.4c0-1.3-.5-2.6-1.5-3.5-.9-.9-2.2-1.5-3.5-1.5-.4 0-.7 0-1.1.1-.7-1.5-2.3-2.5-4-2.5-1.3 0-2.6.5-3.5 1.5-.4.4-.7.8-.9 1.3-1.3-.1-2.6.3-3.6 1.2-.9.9-1.5 2.2-1.5 3.5 0 .4 0 .8.1 1.1-1.5.7-2.5 2.3-2.5 4 0 1.3.5 2.6 1.5 3.5 1.1 1.1 2.6 1.6 4 1.5.7 1.4 2.2 2.4 4 2.4 1.3 0 2.6-.5 3.5-1.5.4-.4.7-.8.9-1.3 1.3.1 2.6-.3 3.6-1.2 1-.9 1.5-2.2 1.5-3.5 0-.4 0-.8-.1-1.1 1.5-.7 2.5-2.3 2.5-4z" />
    </svg>
  );
}

function PerplexityIconMini() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#20B8A6" />
      <path
        d="M12 6v12M6 9v6M18 9v6M9 7v10M15 7v10"
        stroke="white"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GeminiIconMini() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="hero42-gem-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="50%" stopColor="#9747FF" />
          <stop offset="100%" stopColor="#EA4335" />
        </linearGradient>
      </defs>
      <path
        d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"
        fill="url(#hero42-gem-grad)"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="hero hero--s42" aria-label="Hero">
      <div className="hero__intro">
        <div className="hero__positioning">
          <span>ENGINEERED</span>
          <span className="hero__positioning-sep" aria-hidden="true" />
          <span>CREATIVE</span>
          <span className="hero__positioning-sep" aria-hidden="true" />
          <span>BOUTIQUE</span>
        </div>

        <h1 className="hero__headline">
          A{" "}
          <span className="hero__highlight">search engineering agency</span>{" "}
          that gets <span className="hero__bold">law firms</span> and{" "}
          <span className="hero__bold">medical practices</span> at the top of
          search results
        </h1>

        <p className="hero__sub">
          A boutique studio of creatives and engineers. We compound visibility
          for one firm per metro across these search surfaces:
        </p>

        <div className="hero__platforms">
          <div className="hero__platform">
            <GoogleIconMini />
            <span>Google</span>
          </div>
          <div className="hero__platform">
            <ChatGPTIconMini />
            <span>ChatGPT</span>
          </div>
          <div className="hero__platform">
            <PerplexityIconMini />
            <span>Perplexity</span>
          </div>
          <div className="hero__platform">
            <GeminiIconMini />
            <span>Gemini</span>
          </div>
        </div>

        <div className="hero__ctas">
          <Link href="/contact" className="hero__cta-primary">
            Request audit <ArrowIcon />
          </Link>
          <Link href="#selected-work" className="hero__cta-secondary">
            See the work
          </Link>
        </div>
      </div>

      <div className="hero__centerpiece">
        <RankClimb />
      </div>

      <div className="hero__proof">
        <div className="hero__proof-item">
          <div className="hero__proof-num">1</div>
          <div className="hero__proof-label">firm per metro</div>
        </div>
        <div className="hero__proof-item">
          <div className="hero__proof-num">4</div>
          <div className="hero__proof-label">platforms monitored</div>
        </div>
        <div className="hero__proof-item">
          <div className="hero__proof-num">247</div>
          <div className="hero__proof-label">queries tracked per client</div>
        </div>
      </div>
    </section>
  );
}
