import {
  LocalVisibilityIllustration,
  GBPIllustration,
  AuthorityContentIllustration,
  AISearchIllustration,
  ReputationIllustration,
  WebsiteConversionIllustration,
  PressIllustration,
  SchemaIllustration,
  EmailIllustration,
  SocialIllustration,
} from "@/components/services/ServiceIllustrations";

const SERVICES = [
  { num: "01", title: "Local search visibility", body: "Owning the map pack and local rankings in your metro.", meta: ["GOOGLE", "MAPS"], Vis: LocalVisibilityIllustration },
  { num: "02", title: "Google Business Profile", body: "The most valuable real estate in local search. Optimized weekly.", meta: ["GBP", "REVIEWS"], Vis: GBPIllustration },
  { num: "03", title: "Authority content", body: "Long-form articles that rank, get cited by AI, and convert.", meta: ["SEO", "AI CITATION"], Vis: AuthorityContentIllustration },
  { num: "04", title: "AI search optimization", body: "Being the cited answer in ChatGPT, Perplexity, and Gemini.", meta: ["CHATGPT", "GEMINI", "PERPLEXITY"], Vis: AISearchIllustration },
  { num: "05", title: "Reputation management", body: "Review velocity engineered. Response discipline maintained.", meta: ["REVIEWS", "SENTIMENT"], Vis: ReputationIllustration },
  { num: "06", title: "Website and conversion", body: "The page that turns visitors into qualified consultations.", meta: ["CRO", "FUNNEL"], Vis: WebsiteConversionIllustration },
  { num: "07", title: "Press and authority", body: "Real publication mentions that compound trust signals.", meta: ["PR", "BACKLINKS"], Vis: PressIllustration },
  { num: "08", title: "Schema and technical foundation", body: "The invisible infrastructure that makes everything else work.", meta: ["TECHNICAL SEO", "SCHEMA"], Vis: SchemaIllustration },
  { num: "09", title: "Email and newsletter", body: "Nurturing the long decision cycles in legal and medical.", meta: ["EMAIL", "CRM"], Vis: EmailIllustration },
  { num: "10", title: "Selected social media", body: "Brand presence at the surfaces where attention now lives.", meta: ["ORGANIC SOCIAL"], Vis: SocialIllustration },
] as const;

export function TheServices() {
  return (
    <section className="the-services" aria-label="The services">
      <div className="the-services__inner">
        <p className="verticals__label">
          <span aria-hidden="true" /> 06 — Services
        </p>
        <h2 className="verticals__headline">
          Ten coordinated practices. <em>One engine.</em>
        </h2>
        <p className="verticals__sub">
          Every service runs in concert. Stack them in any combination, they amplify each other.
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
                  <div className="service-row__meta">
                    {s.meta.map((m, i) => (
                      <span key={m}>
                        {i > 0 && <span className="service-row__meta-bullet" aria-hidden="true">·</span>}
                        {m}
                      </span>
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
