import type { Metadata } from "next";
import Link from "next/link";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { TriangleMark } from "@/components/ui/TriangleMark";
import { MarkerUnderline } from "@/components/ui/MarkerUnderline";
import { CaseStudyChart } from "@/components/ui/CaseStudyChart";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Selected Work — Rysen Growth",
  description:
    "Search engineering for a small roster of law firms and medical practices. Every engagement is engineered to produce qualified inbound at the top of the page.",
  robots: { index: true, follow: true },
};

// Session 51 — /work index page. CTAs across the site now link here
// instead of scrolling to an anchor. Quattro Labs + Madison Clark do
// not appear here (they live in viral posts + Operators, never framed
// as a search-case-study).

type ClientCard = {
  id: string;
  href: string;
  name: string;
  vertical: "LEGAL" | "MEDICAL";
  metro: string;
  metric: string;
  desc: string;
  chartType: "calls-growth" | "growth-curve" | "donut-gauge";
  chartProps?: {
    peakLabel?: string;
    bars?: number[];
    growthLabel?: string;
    percent?: number;
    centerLabel?: string;
  };
};

const CLIENTS: ReadonlyArray<ClientCard> = [
  {
    id: "aws",
    href: "/case-studies/aws-law-firm",
    name: "AWS Law Firm",
    vertical: "LEGAL",
    metro: "Tampa, FL",
    metric: "~348 qualified calls in 4 months",
    desc: "Probate engagement. Took the firm to #1 across Google, ChatGPT, Perplexity, and Gemini for the metro's top probate queries.",
    chartType: "calls-growth",
    chartProps: { peakLabel: "348 calls", bars: [12, 28, 44, 76, 118, 168, 232, 348] },
  },
  {
    id: "tyler",
    href: "/case-studies/tyler-family-law",
    name: "Tyler Family Law",
    vertical: "LEGAL",
    metro: "Atlanta, GA",
    metric: "~169 calls in 6 months",
    desc: "Divorce and custody. Moved from page two to #1 in the Atlanta map pack and across AI surfaces.",
    chartType: "calls-growth",
    chartProps: { peakLabel: "169 calls", bars: [8, 18, 32, 54, 82, 112, 140, 169] },
  },
  {
    id: "slim",
    href: "/case-studies/slim-dental",
    name: "Slim Dental",
    vertical: "MEDICAL",
    metro: "New York, NY",
    metric: "+186% qualified consultation calls",
    desc: "Implant dentistry. Map-pack dominance, structured-data lift, and a review-velocity program that produced compounding intake.",
    chartType: "growth-curve",
    chartProps: { growthLabel: "+186%" },
  },
  {
    id: "hartman",
    href: "/case-studies/hartman-dermatology",
    name: "Hartman Dermatology",
    vertical: "MEDICAL",
    metro: "Miami, FL",
    metric: "38% AI citation rate",
    desc: "Cosmetic dermatology. Hartman is now the named answer when patients ask ChatGPT, Perplexity, or Gemini who to see in Miami.",
    chartType: "donut-gauge",
    chartProps: { percent: 38, centerLabel: "AI citation" },
  },
];

export default function WorkIndexPage() {
  return (
    <main className="work-page">
      <section className="work-hero">
        <Reveal>
          <Breadcrumbs
            trail={[
              { name: "Home", href: "/" },
              { name: "Work" },
            ]}
          />
          <div className="work-hero__label">
            <TriangleMark size={10} />
            <span>SELECTED WORK</span>
          </div>
          <h1 className="work-hero__headline">
            A small roster of firms,{" "}
            <span className="work-hero__emph">
              all at position #1.
              <MarkerUnderline className="work-hero__emph-underline" />
            </span>
          </h1>
          <p className="work-hero__sub">
            We work with one firm per metro and one practice per vertical so
            our engineering produces outsized results. Every engagement below
            ships qualified inbound the operator can measure in revenue.
          </p>
        </Reveal>
      </section>

      <section className="work-grid-section">
        <RevealGroup className="work-grid" stagger={90}>
          {CLIENTS.map((c) => (
            <Link
              key={c.id}
              href={c.href}
              className="work-card"
              aria-label={`View ${c.name} case study`}
            >
              <div className="work-card__head">
                <span className="work-card__vertical">
                  {c.vertical} · {c.metro}
                </span>
                <span className="work-card__metric">{c.metric}</span>
              </div>
              <div className="work-card__chart">
                <CaseStudyChart type={c.chartType} {...(c.chartProps ?? {})} />
              </div>
              <h2 className="work-card__name">{c.name}</h2>
              <p className="work-card__desc">{c.desc}</p>
              <div className="work-card__cta">
                View case study
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M3 7H11M11 7L7 3M11 7L7 11"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          ))}
          <div className="work-card work-card--placeholder">
            <span className="work-card__vertical">LEGAL · COMING</span>
            <h2 className="work-card__name">Next engagement</h2>
            <p className="work-card__desc">
              By invitation. One firm per metro means the next case study is
              your firm if your city is open.
            </p>
            <Link href="/contact" className="work-card__cta">
              Claim your city
            </Link>
          </div>
          <div className="work-card work-card--placeholder">
            <span className="work-card__vertical">MEDICAL · COMING</span>
            <h2 className="work-card__name">Next engagement</h2>
            <p className="work-card__desc">
              We open one practice per vertical per metro. If your specialty
              is open, we'd like to talk.
            </p>
            <Link href="/contact" className="work-card__cta">
              Claim your specialty
            </Link>
          </div>
        </RevealGroup>
      </section>

      <section className="work-methodology-callout">
        <Reveal>
          <p className="work-methodology-callout__label">
            <TriangleMark size={10} />
            <span>METHODOLOGY</span>
          </p>
          <h2 className="work-methodology-callout__headline">
            How we engineer the result.
          </h2>
          <p className="work-methodology-callout__sub">
            Every engagement runs through our four-layer methodology. Read the
            full breakdown of the system that produced the cases above.
          </p>
          <Link
            href="/methodology"
            className="work-methodology-callout__cta"
          >
            See the methodology
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M3 7H11M11 7L7 3M11 7L7 11"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </Reveal>
      </section>

      <section className="work-final-cta">
        <Reveal>
          <h2 className="work-final-cta__headline">
            Your competitors are #1.
            <br />
            Until they&apos;re not.
          </h2>
          <Link href="/contact" className="work-final-cta__btn hero__cta-primary">
            Claim your city
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M3 7H11M11 7L7 3M11 7L7 11"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
