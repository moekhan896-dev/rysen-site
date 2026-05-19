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
  { num: "01", title: "Local search visibility", body: "Owning the map pack and local rankings in your metro.", tags: ["GOOGLE", "MAPS"], Vis: LocalVisibilityIllustration },
  { num: "02", title: "Google Business Profile", body: "The most valuable real estate in local search. Optimized weekly.", tags: ["GBP", "REVIEWS"], Vis: GBPIllustration },
  { num: "03", title: "Authority content", body: "Long-form articles that rank, get cited by AI, and convert.", tags: ["SEO", "AI CITATION"], Vis: AuthorityContentIllustration },
  { num: "04", title: "AI search optimization", body: "Being the cited answer in ChatGPT, Perplexity, and Gemini.", tags: ["CHATGPT", "GEMINI", "PERPLEXITY"], Vis: AISearchIllustration },
  { num: "05", title: "Reputation management", body: "Review velocity engineered. Response discipline maintained.", tags: ["REVIEWS", "SENTIMENT"], Vis: ReputationIllustration },
  { num: "06", title: "Website and conversion", body: "The page that turns visitors into qualified consultations.", tags: ["CRO", "FUNNEL"], Vis: WebsiteConversionIllustration },
  { num: "07", title: "Press and authority", body: "Real publication mentions that compound trust signals.", tags: ["PR", "BACKLINKS"], Vis: PressIllustration },
  { num: "08", title: "Schema and technical foundation", body: "The invisible infrastructure that makes everything else work.", tags: ["TECHNICAL SEO", "SCHEMA"], Vis: SchemaIllustration },
  { num: "09", title: "Email and newsletter", body: "Nurturing the long decision cycles in legal and medical.", tags: ["EMAIL", "CRM"], Vis: EmailIllustration },
  { num: "10", title: "Selected social media", body: "Brand presence at the surfaces where attention now lives.", tags: ["ORGANIC SOCIAL"], Vis: SocialIllustration },
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
