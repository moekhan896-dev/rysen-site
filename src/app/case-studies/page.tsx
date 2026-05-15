import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-sections/PageHero";
import { RelatedContent } from "@/components/primitives/RelatedContent";
import { CaseStudyFilters, type CaseStudyRecord } from "./CaseStudyFilters";

export const metadata: Metadata = {
  title: "Case Studies — Selected engagements",
  description:
    "Real revenue, attributed to source. Selected engagements across legal and medical from active client work.",
};

const CASES: ReadonlyArray<CaseStudyRecord> = [
  {
    href: "/case-studies/aws-law-firm",
    firm: "AWS Law Firm",
    vertical: "Legal",
    practiceArea: "Probate",
    resultType: ["Revenue", "Ranking", "Volume"],
    badge: "Legal · Probate · Tampa, FL",
    challenge: "Tampa probate firm with two decades of experience but no online presence. From page two to position one across priority queries in 8 months.",
    stats: [
      { value: "+240%", label: "consultations" },
      { value: "#1", label: "priority queries" },
      { value: "52%", label: "AI citation rate" },
    ],
  },
  {
    href: "/case-studies/tyler-family-law",
    firm: "Tyler Family Law",
    vertical: "Legal",
    practiceArea: "Family & Divorce",
    resultType: ["Volume", "Ranking", "Velocity"],
    badge: "Legal · Divorce · Atlanta, GA",
    challenge: "Three other agencies said ranking against national divorce-firm chains was impossible. Eight months later, #1 with a 4-week intake waitlist.",
    stats: [
      { value: "+1,240%", label: "lead growth" },
      { value: "#1", label: "priority queries" },
      { value: "4-wk", label: "intake waitlist" },
    ],
  },
  {
    href: "/case-studies/hartman-dermatology",
    firm: "Hartman Dermatology",
    vertical: "Medical",
    practiceArea: "Dermatology",
    resultType: ["Volume", "Ranking", "Revenue"],
    badge: "Medical · Dermatology · Miami, FL",
    challenge: "Miami cosmetic dermatology practice with strong clinical reputation but page-two visibility. Now Miami's go-to for cosmetic consultations.",
    stats: [
      { value: "+78%", label: "consultations" },
      { value: "#1", label: "Miami queries" },
      { value: "38%", label: "AI citation rate" },
    ],
  },
  {
    href: "/case-studies/coleman-co",
    firm: "Coleman & Co.",
    vertical: "Legal",
    practiceArea: "Estate Planning",
    resultType: ["Revenue", "Ranking", "Reputation"],
    badge: "Legal · Estate · Los Angeles, CA",
    challenge: "Quietly the best HNW estate firm in LA, but invisible online. Nine months later, #1 ranked with 67% organic share of new business.",
    stats: [
      { value: "+320%", label: "qualified leads" },
      { value: "#1", label: "LA estate queries" },
      { value: "67%", label: "organic share" },
    ],
  },
  {
    href: "/case-studies/ridge-dental",
    firm: "Ridge Dental",
    vertical: "Medical",
    practiceArea: "Dental",
    resultType: ["Volume", "Ranking", "Reputation"],
    badge: "Medical · Dental · Chicago, IL",
    challenge: "Five-location Chicago dental network losing neighborhood-level fights. Treated as a coordinated system, not five independent profiles.",
    stats: [
      { value: "+186%", label: "patient calls" },
      { value: "5/5", label: "neighborhoods #1" },
      { value: "4.9★", label: "network average" },
    ],
  },
  {
    href: "/case-studies/madison-clark",
    firm: "Madison Clark",
    vertical: "Special",
    practiceArea: "Growth capability",
    resultType: ["Volume"],
    badge: "Special · AI persona · 2024",
    challenge: "AI persona built from scratch. 100M views in 60 days. Same team, same data discipline, applied to a completely different surface.",
    stats: [
      { value: "100M+", label: "views" },
      { value: "850K", label: "followers" },
      { value: "$0", label: "ad spend" },
    ],
  },
];

const FEATURED = [
  "/case-studies/aws-law-firm",
  "/case-studies/tyler-family-law",
  "/case-studies/hartman-dermatology",
  "/case-studies/madison-clark",
];

export default function CaseStudiesPage() {
  return (
    <main>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Case studies" }]}
        eyebrow="Selected engagements"
        title={
          <>
            Real revenue,{" "}
            <span className="accent-italic">attributed to source.</span>
          </>
        }
        subtitle="Selected engagements from active client work. Each represents a specific challenge, a specific approach, and a specific measurable result reported in dollars rather than impressions."
      />

      <CaseStudyFilters cases={CASES} featured={FEATURED} />

      <RelatedContent
        items={[
          {
            href: "/methodology",
            eyebrow: "Framework",
            title: "The First Position methodology",
            description: "The pillars that underpin every engagement above.",
          },
          {
            href: "/services",
            eyebrow: "Components",
            title: "The ten components",
            description: "What we deploy in every engagement, in detail.",
          },
          {
            href: "/how-we-measure",
            eyebrow: "Data infrastructure",
            title: "How we measure",
            description: "The systems that produce the numbers reported above.",
          },
        ]}
      />

      <section className="deep-page-cta">
        <div className="deep-page-cta-eyebrow">Like what you see?</div>
        <h2 className="deep-page-cta-heading">Request an audit.</h2>
        <p className="deep-page-cta-sub">
          Audit calls walk through the methodology that produced each of the
          engagements above and what it would look like for your firm.
        </p>
        <Link href="/audit" className="deep-page-cta-button">
          Request an audit
        </Link>
        <p className="deep-page-cta-note">Average response time: 1 business day.</p>
      </section>
    </main>
  );
}
