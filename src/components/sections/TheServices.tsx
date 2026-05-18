import type { ReactNode } from "react";
import { ScrollReveal } from "@/components/utilities/ScrollReveal";
import {
  LocalSearchIcon,
  GBPIcon,
  AuthorityIcon,
  AISearchIcon,
  ReputationIcon,
  ConversionIcon,
  PressIcon,
  SchemaIcon,
  EmailIcon,
  SocialIcon,
} from "@/components/icons/ServiceIcons";

type Service = {
  icon: ReactNode;
  name: string;
  description: string;
};

const SERVICES: ReadonlyArray<Service> = [
  {
    icon: <LocalSearchIcon />,
    name: "Local search visibility",
    description: "Owning the map pack and local rankings in your specific metro.",
  },
  {
    icon: <GBPIcon />,
    name: "Google Business Profile",
    description: "The most valuable real estate in local search, optimized weekly.",
  },
  {
    icon: <AuthorityIcon />,
    name: "Authority content",
    description: "Long-form articles that rank, get cited by AI search, and convert.",
  },
  {
    icon: <AISearchIcon />,
    name: "AI search optimization",
    description: "Being the cited answer in ChatGPT, Perplexity, and Gemini.",
  },
  {
    icon: <ReputationIcon />,
    name: "Reputation management",
    description: "Review velocity engineered. Response discipline maintained.",
  },
  {
    icon: <ConversionIcon />,
    name: "Website and conversion",
    description: "The page that turns visitors into qualified consultations.",
  },
  {
    icon: <PressIcon />,
    name: "Press and authority",
    description: "Real publication mentions that compound trust signals.",
  },
  {
    icon: <SchemaIcon />,
    name: "Schema and technical foundation",
    description: "The invisible infrastructure that makes everything else work.",
  },
  {
    icon: <EmailIcon />,
    name: "Email and newsletter",
    description: "Nurturing the long decision cycles in legal and medical.",
  },
  {
    icon: <SocialIcon />,
    name: "Selected social media",
    description: "Brand presence at the surfaces where attention now lives.",
  },
];

function ServiceTile({
  icon,
  name,
  description,
}: {
  icon: ReactNode;
  name: string;
  description: string;
}) {
  return (
    <div className="service-tile">
      <div className="service-tile__icon">{icon}</div>
      <h3 className="service-tile__name">{name}</h3>
      <p className="service-tile__description">{description}</p>
      <span className="service-tile__arrow" aria-hidden="true">→</span>
    </div>
  );
}

export function TheServices() {
  return (
    <section className="the-services" aria-label="The services">
      <div className="the-services__inner">
        <ScrollReveal>
          <p className="the-services__kicker">What we do.</p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="the-services__heading">Ten services. One engine.</h2>
        </ScrollReveal>
        <ScrollReveal delay={160}>
          <p className="the-services__sub">
            Run together as one coordinated system. Each one amplifies the others.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={240} yOffset={20}>
          <div className="the-services__grid">
            {SERVICES.map((service) => (
              <ServiceTile key={service.name} {...service} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
