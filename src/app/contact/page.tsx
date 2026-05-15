import type { Metadata } from "next";
import { CTABanner } from "@/components/page-sections/CTABanner";
import { FAQAccordion } from "@/components/page-sections/FAQAccordion";
import { PageHero } from "@/components/page-sections/PageHero";
import { PageSection } from "@/components/page-sections/PageSection";
import { ContactForm } from "./ContactForm";
import { ContactCards } from "./ContactCards";

export const metadata: Metadata = {
  title: "Contact Rysen Growth — Detroit, MI",
  description:
    "Get in touch with Rysen Growth. Email marketing@rysengrowth.com or call (248) 406-6223. We respond within 24 hours.",
};

const FAQ_ITEMS = [
  {
    question: "How quickly do you respond?",
    answer:
      "Within 24 hours for new inquiries. Same-day during business hours (Mon-Fri, 9AM-6PM ET).",
  },
  {
    question: "Do you work with firms outside Detroit?",
    answer:
      "Yes. We currently serve 30+ firms across Florida, California, Illinois, and New York. Detroit is just where we're headquartered.",
  },
  {
    question: "How much does it cost?",
    answer:
      "We're not the cheapest. Engagements typically start at $5K/month and scale based on your goals and competitive landscape. We'll discuss specifics on your free audit call.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Local SEO improvements: 60-90 days. AI search visibility: 90-120 days. Compound authority: 6+ months. We provide weekly accountability throughout.",
  },
];

export default function ContactPage() {
  return (
    <main className="contact-page">
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Contact"
        title={
          <>
            Let’s talk about{" "}
            <span className="accent-italic">your firm.</span>
          </>
        }
        subtitle="Tell us about your practice and we'll respond within 24 hours."
      />

      <PageSection
        eyebrow="Send us a message"
        title="Tell us about your practice."
        maxWidth="780px"
        titleAlignment="left"
      >
        <ContactForm />
      </PageSection>

      <PageSection
        eyebrow="Other ways to reach us"
        title="Three doors. Same team."
        background="tint"
      >
        <ContactCards />
      </PageSection>

      <PageSection
        eyebrow="Frequently asked"
        title="Common questions before you reach out."
        maxWidth="780px"
      >
        <FAQAccordion items={FAQ_ITEMS} />
      </PageSection>

      <CTABanner
        title="Prefer to see what we’d do first?"
        subtitle="Get a free audit of your firm’s online visibility — 48-hour turnaround."
        primaryText="Get a free audit"
        primaryHref="/audit"
      />
    </main>
  );
}
