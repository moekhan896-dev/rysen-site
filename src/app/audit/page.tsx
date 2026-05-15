import type { Metadata } from "next";
import { CTABanner } from "@/components/page-sections/CTABanner";
import { FAQAccordion } from "@/components/page-sections/FAQAccordion";
import { PageHero } from "@/components/page-sections/PageHero";
import { PageSection } from "@/components/page-sections/PageSection";
import { AuditForm } from "./AuditForm";
import { AuditDeliverableGrid } from "./AuditDeliverableGrid";
import { AuditHowItWorks } from "./AuditHowItWorks";

export const metadata: Metadata = {
  title: "Free Marketing Audit for Law Firms & Medical Practices",
  description:
    "Get a free 12-page audit of your firm's online visibility — Google, AI search, Maps, content. 48-hour turnaround. No sales call required.",
};

const AUDIT_FAQ = [
  {
    question: "Is the audit really free?",
    answer:
      "Yes. No credit card, no commitment, no upsells embedded in the PDF. We do them because most firms have no idea how invisible they actually are.",
  },
  {
    question: "Will you spam me after?",
    answer:
      "One follow-up email about a week after the audit. That's it. Unsubscribe with one click. If you want a quote, you'll ask us.",
  },
  {
    question: "What if my firm is tiny?",
    answer:
      "We audit firms of all sizes. Smaller firms often benefit most because the gaps are bigger and the wins are faster.",
  },
  {
    question: "Do I have to be a law firm or medical practice?",
    answer:
      "That's our specialty, but we'll do audits for other professional services on request. Mention it in the message and we'll let you know if we can help.",
  },
];

export default function AuditPage() {
  const auditJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Free Marketing Audit",
    provider: { "@type": "Organization", name: "Rysen Growth" },
    description:
      "A 12-page audit covering Google rankings, AI search visibility, Maps presence, content gaps, and competitor analysis. 48-hour turnaround.",
    areaServed: "United States",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <main className="audit-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(auditJsonLd) }}
      />

      <PageHero
        eyebrow="Free audit · 48-hour turnaround"
        title={
          <>
            We’ll audit your firm’s online visibility —{" "}
            <span className="accent-italic">for free.</span>
          </>
        }
        subtitle="Tell us your firm's website. Within 48 hours we'll send you a 12-page audit covering your Google rankings, AI search visibility, Google Maps presence, content gaps, and competitor analysis. No sales call required."
      />

      <PageSection
        eyebrow="Start your audit"
        title="Submit your firm — get the PDF in 48 hours."
        maxWidth="720px"
        id="audit-form"
        titleAlignment="left"
      >
        <AuditForm />
      </PageSection>

      <PageSection
        eyebrow="WHAT’S IN YOUR AUDIT"
        title={
          <>
            12 pages. Real data.{" "}
            <span className="accent-italic">Zero fluff.</span>
          </>
        }
        background="tint"
      >
        <AuditDeliverableGrid />
      </PageSection>

      <PageSection
        eyebrow="How it works"
        title="Three steps. Two days."
      >
        <AuditHowItWorks />
      </PageSection>

      <PageSection
        eyebrow="WHY IT’S FREE"
        title={
          <>
            Because most firms have{" "}
            <span className="accent-italic">no idea</span> how invisible they are.
          </>
        }
        titleAlignment="left"
        maxWidth="780px"
      >
        <div className="audit-why-free">
          <p>
            We do free audits because most firms have no idea how invisible they
            actually are. They have a website, a Google Business Profile, a few
            stale blog posts — and they assume that means they show up when their
            future clients search. They usually don’t.
          </p>
          <p>
            The audit shows you the gap. If you want to close it, we’ll quote
            you. If you want to fix it yourself, we’ll wish you luck. Either
            way, you walk away with the data.
          </p>
        </div>
      </PageSection>

      <PageSection
        eyebrow="What clients say"
        title="A few words from firms who’ve been where you are."
        background="tint"
      >
        <div className="audit-proof-row">
          <blockquote className="audit-proof">
            <p>
              “We went from invisible to inevitable. Rysen doesn’t just
              rank you — they make you the answer.”
            </p>
            <cite>Managing Partner, AWS Law Firm · Tampa</cite>
          </blockquote>
          <blockquote className="audit-proof">
            <p>
              “Three other agencies told us ranking in Atlanta was impossible.
              Eight months in we’re #1 with a four-week intake waitlist.”
            </p>
            <cite>Founder, Tyler Family Law · Atlanta</cite>
          </blockquote>
          <blockquote className="audit-proof">
            <p>
              “Their reporting is the cleanest I’ve seen in fifteen years
              of running this practice. Every dollar tied to a source.”
            </p>
            <cite>Owner, Hartman Dermatology · Miami</cite>
          </blockquote>
        </div>
      </PageSection>

      <PageSection
        eyebrow="Frequently asked"
        title="Quick answers before you submit."
        maxWidth="780px"
      >
        <FAQAccordion items={AUDIT_FAQ} />
      </PageSection>

      <CTABanner
        title="Ready? It takes 30 seconds."
        subtitle="Submit your firm’s website and we’ll send the audit within 48 hours."
        primaryText="Submit my firm"
        primaryHref="#audit-form"
      />
    </main>
  );
}
