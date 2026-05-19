import { ScrollReveal } from "@/components/utilities/ScrollReveal";

const STROKE = "var(--ink-strong)";

function AuditIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <circle cx="18" cy="18" r="11" stroke={STROKE} strokeWidth="1.5" />
      <line x1="26" y1="26" x2="36" y2="36" stroke={STROKE} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function StrategyIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <line x1="8" y1="22" x2="36" y2="22" stroke={STROKE} strokeWidth="1.5" />
      <circle cx="14" cy="22" r="3" fill={STROKE} />
      <circle cx="24" cy="22" r="3" stroke={STROKE} strokeWidth="1.5" fill="none" />
      <circle cx="34" cy="22" r="3" stroke={STROKE} strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function BuildIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect x="8" y="14" width="28" height="20" stroke={STROKE} strokeWidth="1.5" fill="none" />
      <line x1="8" y1="22" x2="36" y2="22" stroke={STROKE} strokeWidth="1.5" />
      <line x1="14" y1="28" x2="22" y2="28" stroke={STROKE} strokeWidth="1.5" />
    </svg>
  );
}

function CompoundIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <path d="M 6 34 L 16 28 L 26 22 L 36 10" stroke={STROKE} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 30 10 L 36 10 L 36 16" stroke={STROKE} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const STEPS = [
  {
    num: "0.1",
    title: "Audit",
    body: "30 days. We model your visibility ceiling, identify the wedge query, and decide if there's a path to #1. If not, we tell you. No retainer.",
    icon: <AuditIcon />,
  },
  {
    num: "0.2",
    title: "Strategy",
    body: "We map your priority queries, your competitors, your conversion path. We agree on what success looks like at 6, 12, 24 months.",
    icon: <StrategyIcon />,
  },
  {
    num: "0.3",
    title: "Build",
    body: "Schema. Authority content. Local visibility. Reviews. Conversion. We run the engine. You run your practice.",
    icon: <BuildIcon />,
  },
  {
    num: "0.4",
    title: "Compound",
    body: "Weekly cadence. Quarterly review. Monthly attribution report in revenue, not impressions. The engine compounds while you sleep.",
    icon: <CompoundIcon />,
  },
] as const;

export function TheProcess() {
  return (
    <section className="the-process" aria-label="The process">
      <div className="the-process__inner">
        <ScrollReveal>
          <p className="the-process__label">
            <span aria-hidden="true">07 — </span>
            Process
          </p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="the-process__heading">How an engagement begins.</h2>
        </ScrollReveal>

        <ol className="the-process__steps">
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.num} delay={160 + i * 80}>
              <li className="the-process__step">
                <span className="the-process__step-num" aria-hidden="true">{step.num}</span>
                <div className="the-process__step-body">
                  <h3 className="the-process__step-title">{step.title}</h3>
                  <p className="the-process__step-text">{step.body}</p>
                </div>
                <div className="the-process__step-icon">{step.icon}</div>
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
