import Link from "next/link";
import { SignalTriangle } from "@/components/brand/SignalTriangle";
import { ScrollReveal } from "@/components/utilities/ScrollReveal";

interface Service {
  numeral: string;
  name: string;
  description: string;
}

const SERVICES: ReadonlyArray<Service> = [
  { numeral: "I.", name: "Local search visibility", description: "Owning the map pack and local rankings in your specific metro." },
  { numeral: "II.", name: "Google Business Profile", description: "The most valuable real estate in local search, optimized weekly." },
  { numeral: "III.", name: "Authority content", description: "Long form articles that rank, get cited by AI search, and convert." },
  { numeral: "IV.", name: "AI search optimization", description: "Being the cited answer in ChatGPT, Perplexity, and Google AI Overviews." },
  { numeral: "V.", name: "Reputation management", description: "Review velocity engineered, response discipline maintained." },
  { numeral: "VI.", name: "Website and conversion", description: "The page that turns visitors into qualified consultations." },
  { numeral: "VII.", name: "Press and authority", description: "Real publication mentions that compound trust signals." },
  { numeral: "VIII.", name: "Schema and technical foundation", description: "The invisible infrastructure that makes everything else work." },
  { numeral: "IX.", name: "Email and newsletter", description: "Nurturing the long decision cycles specific to legal and medical." },
  { numeral: "X.", name: "Selected social media", description: "Brand presence at the surfaces where attention now lives." },
];

export function SelectedServices() {
  return (
    <section className="services-section" aria-label="Selected services">
      <div className="services-corner-mark" aria-hidden="true">
        <SignalTriangle size={12} decorative />
      </div>
      <div className="services-inner">
        <ScrollReveal>
          <div className="services-header">
            <span className="services-label">Selected services</span>
            <div className="services-label-rule" aria-hidden="true" />
          </div>
        </ScrollReveal>

        <div className="services-list">
          {SERVICES.map((s, i) => (
            <ScrollReveal key={s.numeral} delay={i * 50}>
              <div className="service-item">
                <span className="service-item__number">{s.numeral}</span>
                <div className="service-item__body">
                  <h4 className="service-item__name">{s.name}</h4>
                  <p className="service-item__description">{s.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <p className="services-footer">
            All ten services run together as one coordinated system.{" "}
            <Link href="/methodology" className="services-footer-link">
              Read how they compound.
            </Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
