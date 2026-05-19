const STROKE = "#FAFAF7";
const ACCENT = "#FFE817";

// ---- 10 unique 100×100 line-art illustrations with single yellow accent ----

function LocalSearchVis() {
  return (
    <svg viewBox="0 0 100 100" fill="none" width="100" height="100" aria-hidden="true">
      <line x1="10" y1="30" x2="90" y2="30" stroke={STROKE} strokeWidth="0.5" opacity="0.3" />
      <line x1="10" y1="50" x2="90" y2="50" stroke={STROKE} strokeWidth="0.5" opacity="0.3" />
      <line x1="10" y1="70" x2="90" y2="70" stroke={STROKE} strokeWidth="0.5" opacity="0.3" />
      <line x1="30" y1="10" x2="30" y2="90" stroke={STROKE} strokeWidth="0.5" opacity="0.3" />
      <line x1="50" y1="10" x2="50" y2="90" stroke={STROKE} strokeWidth="0.5" opacity="0.3" />
      <line x1="70" y1="10" x2="70" y2="90" stroke={STROKE} strokeWidth="0.5" opacity="0.3" />
      <path d="M 50 36 C 44 36 40 40 40 46 C 40 54 50 64 50 64 C 50 64 60 54 60 46 C 60 40 56 36 50 36 Z" stroke={STROKE} strokeWidth="1.5" fill="rgba(255, 232, 23, 0.1)" strokeLinejoin="round" />
      <polygon points="46,42 56,42 46,52" fill={ACCENT} />
    </svg>
  );
}

function GBPVis() {
  return (
    <svg viewBox="0 0 100 100" fill="none" width="100" height="100" aria-hidden="true">
      <path d="M 18 42 L 18 78 L 82 78 L 82 42" stroke={STROKE} strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <path d="M 18 42 L 26 26 L 74 26 L 82 42" stroke={STROKE} strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <rect x="38" y="48" width="24" height="30" stroke={STROKE} strokeWidth="1.2" fill="none" />
      <line x1="34" y1="42" x2="66" y2="42" stroke={STROKE} strokeWidth="1.2" />
      <polygon points="46,12 48,17 53,17 49,20 50.5,25 46,22 41.5,25 43,20 39,17 44,17" fill={ACCENT} />
      <line x1="58" y1="12" x2="62" y2="20" stroke={STROKE} strokeWidth="0.8" opacity="0.4" />
      <line x1="68" y1="14" x2="70" y2="22" stroke={STROKE} strokeWidth="0.8" opacity="0.4" />
    </svg>
  );
}

function AuthorityVis() {
  return (
    <svg viewBox="0 0 100 100" fill="none" width="100" height="100" aria-hidden="true">
      <rect x="20" y="18" width="48" height="60" stroke={STROKE} strokeWidth="1.5" fill="none" />
      <rect x="26" y="26" width="48" height="60" stroke={STROKE} strokeWidth="1.5" fill="none" opacity="0.55" />
      <line x1="32" y1="38" x2="70" y2="38" stroke={STROKE} strokeWidth="0.8" />
      <line x1="32" y1="46" x2="64" y2="46" stroke={STROKE} strokeWidth="0.8" />
      <rect x="32" y="52" width="38" height="3" fill={ACCENT} />
      <line x1="32" y1="62" x2="70" y2="62" stroke={STROKE} strokeWidth="0.8" />
      <line x1="32" y1="70" x2="60" y2="70" stroke={STROKE} strokeWidth="0.8" />
    </svg>
  );
}

function AISearchVis() {
  return (
    <svg viewBox="0 0 100 100" fill="none" width="100" height="100" aria-hidden="true">
      <path d="M 16 28 L 16 60 L 32 60 L 40 70 L 40 60 L 70 60 L 70 28 Z" stroke={STROKE} strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <path d="M 78 32 L 80 38 L 86 40 L 80 42 L 78 48 L 76 42 L 70 40 L 76 38 Z" fill={ACCENT} />
      <line x1="24" y1="38" x2="60" y2="38" stroke={STROKE} strokeWidth="1" opacity="0.7" />
      <line x1="24" y1="46" x2="50" y2="46" stroke={STROKE} strokeWidth="1" opacity="0.5" />
      <polygon points="56,50 62,50 56,56" fill={ACCENT} opacity="0.7" />
    </svg>
  );
}

function ReputationVis() {
  return (
    <svg viewBox="0 0 100 100" fill="none" width="100" height="100" aria-hidden="true">
      {[20, 36, 52, 68, 84].map((cx, i) => (
        <path key={cx} d={`M ${cx} 36 L ${cx + 3} 44 L ${cx + 11} 44 L ${cx + 5} 50 L ${cx + 7} 58 L ${cx} 53 L ${cx - 7} 58 L ${cx - 5} 50 L ${cx - 11} 44 L ${cx - 3} 44 Z`} stroke={STROKE} strokeWidth="0.8" fill={i === 0 ? ACCENT : "none"} strokeLinejoin="round" />
      ))}
      <path d="M 14 70 L 30 66 L 50 62 L 70 56 L 86 48" stroke={ACCENT} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 80 50 L 88 46 L 86 54" stroke={ACCENT} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ConversionVis() {
  return (
    <svg viewBox="0 0 100 100" fill="none" width="100" height="100" aria-hidden="true">
      <rect x="14" y="20" width="72" height="56" stroke={STROKE} strokeWidth="1.5" fill="none" rx="2" />
      <line x1="14" y1="30" x2="86" y2="30" stroke={STROKE} strokeWidth="1.2" />
      <circle cx="20" cy="25" r="1.2" fill={STROKE} />
      <circle cx="24" cy="25" r="1.2" fill={STROKE} />
      <circle cx="28" cy="25" r="1.2" fill={STROKE} />
      <polygon points="30,42 70,42 60,56 40,56" fill="rgba(255, 232, 23, 0.1)" stroke={STROKE} strokeWidth="1" />
      <polygon points="40,58 60,58 50,72" fill={ACCENT} />
    </svg>
  );
}

function PressVis() {
  return (
    <svg viewBox="0 0 100 100" fill="none" width="100" height="100" aria-hidden="true">
      <rect x="14" y="18" width="72" height="64" stroke={STROKE} strokeWidth="1.5" fill="none" />
      <rect x="18" y="22" width="64" height="14" fill={STROKE} />
      <rect x="22" y="44" width="28" height="3" fill={ACCENT} />
      <line x1="22" y1="52" x2="48" y2="52" stroke={STROKE} strokeWidth="0.8" />
      <line x1="22" y1="58" x2="44" y2="58" stroke={STROKE} strokeWidth="0.8" />
      <line x1="22" y1="64" x2="48" y2="64" stroke={STROKE} strokeWidth="0.8" />
      <line x1="22" y1="70" x2="46" y2="70" stroke={STROKE} strokeWidth="0.8" />
      <line x1="56" y1="44" x2="78" y2="44" stroke={STROKE} strokeWidth="0.8" />
      <line x1="56" y1="50" x2="78" y2="50" stroke={STROKE} strokeWidth="0.8" />
      <line x1="56" y1="56" x2="78" y2="56" stroke={STROKE} strokeWidth="0.8" />
      <line x1="56" y1="62" x2="74" y2="62" stroke={STROKE} strokeWidth="0.8" />
    </svg>
  );
}

function SchemaVis() {
  return (
    <svg viewBox="0 0 100 100" fill="none" width="100" height="100" aria-hidden="true">
      <path d="M 26 22 L 16 50 L 26 78" stroke={STROKE} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 74 22 L 84 50 L 74 78" stroke={STROKE} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="42" y="38" width="16" height="24" stroke={STROKE} strokeWidth="1.5" fill="none" />
      <line x1="46" y1="46" x2="54" y2="46" stroke={STROKE} strokeWidth="0.8" />
      <line x1="46" y1="52" x2="54" y2="52" stroke={STROKE} strokeWidth="0.8" />
      <circle cx="50" cy="58" r="2" fill={ACCENT} />
    </svg>
  );
}

function EmailVis() {
  return (
    <svg viewBox="0 0 100 100" fill="none" width="100" height="100" aria-hidden="true">
      <rect x="16" y="28" width="68" height="44" stroke={STROKE} strokeWidth="1.5" fill="none" rx="2" />
      <path d="M 16 30 L 50 56 L 84 30" stroke={STROKE} strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <line x1="86" y1="36" x2="92" y2="36" stroke={STROKE} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="86" y1="44" x2="92" y2="44" stroke={STROKE} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="86" y1="52" x2="92" y2="52" stroke={STROKE} strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="72" cy="22" r="3" fill={ACCENT} />
    </svg>
  );
}

function SocialVis() {
  return (
    <svg viewBox="0 0 100 100" fill="none" width="100" height="100" aria-hidden="true">
      <circle cx="24" cy="50" r="6" stroke={STROKE} strokeWidth="1.5" fill="none" />
      <circle cx="72" cy="28" r="6" stroke={STROKE} strokeWidth="1.5" fill={ACCENT} />
      <circle cx="76" cy="72" r="6" stroke={STROKE} strokeWidth="1.5" fill="none" />
      <line x1="29" y1="47" x2="67" y2="31" stroke={STROKE} strokeWidth="1.2" />
      <line x1="29" y1="53" x2="71" y2="69" stroke={STROKE} strokeWidth="1.2" />
      <circle cx="46" cy="40" r="1.5" fill={ACCENT}>
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="52" cy="60" r="1.5" fill={ACCENT}>
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

const SERVICES = [
  { num: "01", title: "Local search visibility", body: "Owning the map pack and local rankings in your metro.", tags: ["GOOGLE", "MAPS"], Vis: LocalSearchVis },
  { num: "02", title: "Google Business Profile", body: "The most valuable real estate in local search. Optimized weekly.", tags: ["GBP", "REVIEWS"], Vis: GBPVis },
  { num: "03", title: "Authority content", body: "Long-form articles that rank, get cited by AI, and convert.", tags: ["SEO", "AI CITATION"], Vis: AuthorityVis },
  { num: "04", title: "AI search optimization", body: "Being the cited answer in ChatGPT, Perplexity, and Gemini.", tags: ["CHATGPT", "GEMINI", "PERPLEXITY"], Vis: AISearchVis },
  { num: "05", title: "Reputation management", body: "Review velocity engineered. Response discipline maintained.", tags: ["REVIEWS", "SENTIMENT"], Vis: ReputationVis },
  { num: "06", title: "Website and conversion", body: "The page that turns visitors into qualified consultations.", tags: ["CRO", "FUNNEL"], Vis: ConversionVis },
  { num: "07", title: "Press and authority", body: "Real publication mentions that compound trust signals.", tags: ["PR", "BACKLINKS"], Vis: PressVis },
  { num: "08", title: "Schema and technical foundation", body: "The invisible infrastructure that makes everything else work.", tags: ["TECHNICAL SEO", "SCHEMA"], Vis: SchemaVis },
  { num: "09", title: "Email and newsletter", body: "Nurturing the long decision cycles in legal and medical.", tags: ["EMAIL", "CRM"], Vis: EmailVis },
  { num: "10", title: "Selected social media", body: "Brand presence at the surfaces where attention now lives.", tags: ["ORGANIC SOCIAL"], Vis: SocialVis },
] as const;

export function TheServices() {
  return (
    <section className="the-services" aria-label="The services">
      <div className="the-services__inner">
        <div className="the-work__heading-row">
          <span className="how__bar" aria-hidden="true" />
          <p className="how__label">Services</p>
        </div>
        <h2 className="how__heading">Ten coordinated practices. One engine.</h2>
        <p className="how__sub">
          Every service runs in concert. Stack them in any combination — they amplify each other.
        </p>

        <ul className="services-list">
          {SERVICES.map((s) => {
            const Vis = s.Vis;
            return (
              <li key={s.num} className="service-row">
                <div className="service-row__num">
                  <span>{s.num}</span>
                  <span className="service-row__num-dot" aria-hidden="true" />
                </div>
                <div className="service-row__body">
                  <h3 className="service-row__title">{s.title}</h3>
                  <p className="service-row__text">{s.body}</p>
                  <div className="service-row__tags">
                    {s.tags.map((t) => (
                      <span key={t} className="service-row__tag">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="service-row__vis">
                  <Vis />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
