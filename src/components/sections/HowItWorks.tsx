import { ScrollReveal } from "@/components/utilities/ScrollReveal";

function RankIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="42" height="10" rx="2" stroke="var(--ink-strong)" strokeWidth="1.5" fill="var(--ink-strong)" />
      <rect x="4" y="20" width="42" height="10" rx="2" stroke="var(--ink-strong)" strokeWidth="1.5" fill="none" />
      <rect x="4" y="34" width="42" height="10" rx="2" stroke="var(--ink-strong)" strokeWidth="1.5" fill="none" opacity="0.5" />
    </svg>
  );
}

function CaptureIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" aria-hidden="true">
      <path d="M 8 40 L 16 28 L 24 32 L 36 16" stroke="var(--ink-strong)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 30 16 L 36 16 L 36 22" stroke="var(--ink-strong)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 38 40 L 42 36 L 46 40 M 42 36 L 42 44" stroke="var(--ink-strong)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ConvertIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" aria-hidden="true">
      <rect x="14" y="4" width="22" height="42" rx="3" stroke="var(--ink-strong)" strokeWidth="1.5" fill="none" />
      <line x1="14" y1="10" x2="36" y2="10" stroke="var(--ink-strong)" strokeWidth="1" />
      <line x1="14" y1="40" x2="36" y2="40" stroke="var(--ink-strong)" strokeWidth="1" />
      <path d="M 20 24 L 24 28 L 30 20" stroke="var(--ink-strong)" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const STEPS = [
  {
    number: "01",
    icon: <RankIcon />,
    title: "Rank #1 across every query that matters.",
    body: "We engineer first-position rankings on Google, ChatGPT, Perplexity, and Gemini for the queries your future clients actually search.",
  },
  {
    number: "02",
    icon: <CaptureIcon />,
    title: "Capture the click before competitors can.",
    body: "Position #1 wins ~35% of clicks. Position #4 wins 4%. The position determines the volume.",
  },
  {
    number: "03",
    icon: <ConvertIcon />,
    title: "Convert searchers into consultations.",
    body: "Our pages are engineered to turn searchers into consultations. We attribute every call and form fill back to source.",
  },
] as const;

export function HowItWorks() {
  return (
    <section className="how" aria-label="How it works">
      <div className="how__inner">
        <ScrollReveal>
          <p className="how__label">
            <span aria-hidden="true">02 — </span>
            How it works
          </p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="how__heading">
            Three movements. Compounded weekly. Across every query that matters to your business.
          </h2>
        </ScrollReveal>

        <div className="how__rows">
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.number} delay={160 + i * 100}>
              <div className="how__row">
                <span className="how__num" aria-hidden="true">{step.number}</span>
                <div className="how__row-body">
                  <h3 className="how__row-title">{step.title}</h3>
                  <p className="how__row-text">{step.body}</p>
                </div>
                <div className="how__row-icon">{step.icon}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
