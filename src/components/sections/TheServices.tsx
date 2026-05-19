import { ScrollReveal } from "@/components/utilities/ScrollReveal";

const STROKE = "var(--ink-strong)";
const SW = 1.5;

function LocalIcon() {
  return (
    <svg viewBox="0 0 80 80" width="64" height="64" fill="none" aria-hidden="true">
      <rect x="8" y="8" width="64" height="64" stroke={STROKE} strokeWidth={SW} fill="none" />
      <line x1="8" y1="32" x2="72" y2="32" stroke={STROKE} strokeWidth={SW * 0.5} />
      <line x1="8" y1="56" x2="72" y2="56" stroke={STROKE} strokeWidth={SW * 0.5} />
      <line x1="32" y1="8" x2="32" y2="72" stroke={STROKE} strokeWidth={SW * 0.5} />
      <line x1="56" y1="8" x2="56" y2="72" stroke={STROKE} strokeWidth={SW * 0.5} />
      <path d="M 40 30 C 36 30 32 33 32 38 C 32 44 40 52 40 52 C 40 52 48 44 48 38 C 48 33 44 30 40 30 Z" fill="#FFE817" stroke={STROKE} strokeWidth={SW} />
      <circle cx="40" cy="38" r="3" fill={STROKE} />
    </svg>
  );
}

function GBPIcon() {
  return (
    <svg viewBox="0 0 80 80" width="64" height="64" fill="none" aria-hidden="true">
      <path d="M 14 30 L 14 64 L 66 64 L 66 30" stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" fill="none" />
      <path d="M 14 30 L 20 14 L 60 14 L 66 30" stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" fill="none" />
      <line x1="32" y1="30" x2="48" y2="30" stroke={STROKE} strokeWidth={SW} />
      <line x1="20" y1="30" x2="20" y2="42" stroke={STROKE} strokeWidth={SW * 0.5} opacity="0.6" />
      <line x1="60" y1="30" x2="60" y2="42" stroke={STROKE} strokeWidth={SW * 0.5} opacity="0.6" />
      <path d="M 38 8 L 40 12 L 44 12 L 41 15 L 42 19 L 38 17 L 34 19 L 35 15 L 32 12 L 36 12 Z" fill="#FFE817" stroke="none" />
    </svg>
  );
}

function AuthorityIcon() {
  return (
    <svg viewBox="0 0 80 80" width="64" height="64" fill="none" aria-hidden="true">
      <rect x="14" y="14" width="40" height="54" stroke={STROKE} strokeWidth={SW} fill="none" />
      <rect x="22" y="22" width="40" height="54" stroke={STROKE} strokeWidth={SW} fill="none" opacity="0.55" />
      <line x1="28" y1="34" x2="56" y2="34" stroke={STROKE} strokeWidth={SW * 0.7} />
      <line x1="28" y1="42" x2="52" y2="42" stroke={STROKE} strokeWidth={SW * 0.7} />
      <line x1="28" y1="50" x2="56" y2="50" stroke={STROKE} strokeWidth={SW * 0.7} />
      <text x="50" y="20" fontFamily="Georgia, serif" fontSize="14" fontWeight="700" fill="#FFE817">&ldquo;</text>
    </svg>
  );
}

function AIIcon() {
  return (
    <svg viewBox="0 0 80 80" width="64" height="64" fill="none" aria-hidden="true">
      <path d="M 14 22 L 14 52 L 28 52 L 36 62 L 36 52 L 60 52 L 60 22 Z" stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" fill="none" />
      <path d="M 36 28 L 38 33 L 43 35 L 38 37 L 36 42 L 34 37 L 29 35 L 34 33 Z" fill="#FFE817" />
      <circle cx="50" cy="30" r="1.4" fill={STROKE} />
      <circle cx="56" cy="40" r="1.4" fill={STROKE} />
    </svg>
  );
}

function ReputationIcon() {
  return (
    <svg viewBox="0 0 80 80" width="64" height="64" fill="none" aria-hidden="true">
      {[12, 26, 40, 54, 68].map((cx) => (
        <path key={cx} d={`M ${cx} 28 L ${cx + 2.5} 34 L ${cx + 9} 34.5 L ${cx + 4} 39 L ${cx + 5.5} 45 L ${cx} 41.5 L ${cx - 5.5} 45 L ${cx - 4} 39 L ${cx - 9} 34.5 L ${cx - 2.5} 34 Z`} stroke={STROKE} strokeWidth={SW * 0.6} fill={cx === 12 ? "#FFE817" : "none"} strokeLinejoin="round" />
      ))}
      <path d="M 36 56 L 42 60 L 48 64 L 52 66" stroke={STROKE} strokeWidth={SW} fill="none" strokeLinecap="round" />
      <circle cx="36" cy="56" r="2.5" fill={STROKE} />
    </svg>
  );
}

function WebsiteIcon() {
  return (
    <svg viewBox="0 0 80 80" width="64" height="64" fill="none" aria-hidden="true">
      <rect x="10" y="14" width="60" height="48" rx="2" stroke={STROKE} strokeWidth={SW} fill="none" />
      <line x1="10" y1="24" x2="70" y2="24" stroke={STROKE} strokeWidth={SW} />
      <circle cx="16" cy="19" r="1.2" fill={STROKE} />
      <circle cx="20" cy="19" r="1.2" fill={STROKE} />
      <circle cx="24" cy="19" r="1.2" fill={STROKE} />
      <path d="M 32 36 L 50 44 L 32 52 Z" fill="#FFE817" stroke={STROKE} strokeWidth={SW} strokeLinejoin="round" />
    </svg>
  );
}

function PressIcon() {
  return (
    <svg viewBox="0 0 80 80" width="64" height="64" fill="none" aria-hidden="true">
      <rect x="10" y="14" width="60" height="52" stroke={STROKE} strokeWidth={SW} fill="none" />
      <rect x="14" y="18" width="52" height="10" fill={STROKE} />
      <text x="40" y="26" fontFamily="Georgia, serif" fontSize="9" fontWeight="700" fill="#FFE817" textAnchor="middle">TIMES</text>
      <line x1="14" y1="36" x2="40" y2="36" stroke={STROKE} strokeWidth={SW * 0.6} />
      <line x1="14" y1="42" x2="44" y2="42" stroke={STROKE} strokeWidth={SW * 0.5} />
      <line x1="14" y1="48" x2="38" y2="48" stroke={STROKE} strokeWidth={SW * 0.5} />
      <line x1="14" y1="54" x2="42" y2="54" stroke={STROKE} strokeWidth={SW * 0.5} />
      <line x1="48" y1="36" x2="66" y2="36" stroke={STROKE} strokeWidth={SW * 0.6} />
      <line x1="48" y1="42" x2="66" y2="42" stroke={STROKE} strokeWidth={SW * 0.5} />
      <line x1="48" y1="48" x2="66" y2="48" stroke={STROKE} strokeWidth={SW * 0.5} />
    </svg>
  );
}

function SchemaIcon() {
  return (
    <svg viewBox="0 0 80 80" width="64" height="64" fill="none" aria-hidden="true">
      <path d="M 20 16 L 12 40 L 20 64" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M 60 16 L 68 40 L 60 64" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="32" y="34" width="16" height="12" stroke={STROKE} strokeWidth={SW} fill="none" rx="1" />
      <circle cx="40" cy="40" r="2.5" fill="#FFE817" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 80 80" width="64" height="64" fill="none" aria-hidden="true">
      <rect x="10" y="22" width="60" height="40" stroke={STROKE} strokeWidth={SW} fill="none" rx="1" />
      <path d="M 10 24 L 40 46 L 70 24" stroke={STROKE} strokeWidth={SW} fill="none" strokeLinejoin="round" />
      <line x1="74" y1="32" x2="78" y2="32" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
      <line x1="74" y1="40" x2="78" y2="40" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
      <circle cx="62" cy="20" r="2" fill="#FFE817" />
    </svg>
  );
}

function SocialIcon() {
  return (
    <svg viewBox="0 0 80 80" width="64" height="64" fill="none" aria-hidden="true">
      <circle cx="20" cy="40" r="6" stroke={STROKE} strokeWidth={SW} fill="none" />
      <circle cx="60" cy="22" r="6" stroke={STROKE} strokeWidth={SW} fill="#FFE817" />
      <circle cx="60" cy="58" r="6" stroke={STROKE} strokeWidth={SW} fill="none" />
      <line x1="25" y1="37" x2="55" y2="25" stroke={STROKE} strokeWidth={SW} />
      <line x1="25" y1="43" x2="55" y2="55" stroke={STROKE} strokeWidth={SW} />
    </svg>
  );
}

const SERVICES = [
  { num: "0.1", title: "Local search visibility", body: "Owning the map pack and local rankings in your specific metro.", icon: <LocalIcon /> },
  { num: "0.2", title: "Google Business Profile", body: "The most valuable real estate in local search. Optimized weekly.", icon: <GBPIcon /> },
  { num: "0.3", title: "Authority content", body: "Long-form articles that rank, get cited by AI search, and convert.", icon: <AuthorityIcon /> },
  { num: "0.4", title: "AI search optimization", body: "Being the cited answer in ChatGPT, Perplexity, and Gemini.", icon: <AIIcon /> },
  { num: "0.5", title: "Reputation management", body: "Review velocity engineered. Response discipline maintained.", icon: <ReputationIcon /> },
  { num: "0.6", title: "Website and conversion", body: "The page that turns visitors into qualified consultations.", icon: <WebsiteIcon /> },
  { num: "0.7", title: "Press and authority", body: "Real publication mentions that compound trust signals.", icon: <PressIcon /> },
  { num: "0.8", title: "Schema and technical foundation", body: "The invisible infrastructure that makes everything else work.", icon: <SchemaIcon /> },
  { num: "0.9", title: "Email and newsletter", body: "Nurturing the long decision cycles in legal and medical.", icon: <EmailIcon /> },
  { num: "1.0", title: "Selected social media", body: "Brand presence at the surfaces where attention now lives.", icon: <SocialIcon /> },
] as const;

export function TheServices() {
  return (
    <section className="the-services" aria-label="The services">
      <div className="the-services__inner">
        <ScrollReveal>
          <p className="the-services__label">
            <span aria-hidden="true">06 — </span>
            Services
          </p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="the-services__heading">
            Ten coordinated practices. One engine.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={140}>
          <p className="the-services__sub">
            Each runs in concert with the others. Stack them in any combination. Run them all for compounding velocity.
          </p>
        </ScrollReveal>

        <ul className="the-services__list">
          {SERVICES.map((s, i) => (
            <ScrollReveal key={s.num} delay={200 + i * 40}>
              <li className="the-services__row">
                <span className="the-services__row-num" aria-hidden="true">{s.num}</span>
                <div className="the-services__row-body">
                  <h3 className="the-services__row-title">{s.title}</h3>
                  <p className="the-services__row-text">{s.body}</p>
                </div>
                <div className="the-services__row-icon">{s.icon}</div>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
