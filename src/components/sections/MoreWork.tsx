// Session 53 — MoreWork.
//
// A shared "More work" strip rendered at the bottom of every case
// study page. Shows the OTHER 3 search case studies (AWS / Tyler /
// Slim / Hartman, minus the current one) as compact cards with the
// existing CaseStudyChart visual.
//
// Quattro Labs and Madison Clark pages can also render this — they
// pass a slug that isn't in the search-case-study list, so all 4
// cards render. That gives cross-traffic from the owned-brand pages
// back into the search-client narratives without exposing Quattro /
// Madison as search cases themselves.

import Link from "next/link";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { TriangleMark } from "@/components/ui/TriangleMark";
import { MarkerUnderline } from "@/components/ui/MarkerUnderline";
import { CaseStudyChart } from "@/components/ui/CaseStudyChart";

type ChartType = "calls-growth" | "growth-curve" | "donut-gauge";

type CaseEntry = {
  slug: string;
  brand: string;
  vertical: "Legal" | "Medical";
  metro: string;
  metric: string;
  chartType: ChartType;
  chartProps?: Record<string, unknown>;
};

const SEARCH_CASES: ReadonlyArray<CaseEntry> = [
  {
    slug: "aws-law-firm",
    brand: "AWS Law Firm",
    vertical: "Legal",
    metro: "Tampa, FL",
    metric: "~348 calls · Q1 2026",
    chartType: "calls-growth",
    chartProps: {
      peakLabel: "348 calls",
      bars: [12, 28, 44, 76, 118, 168, 232, 348],
    },
  },
  {
    slug: "tyler-family-law",
    brand: "Tyler Family Law",
    vertical: "Legal",
    metro: "Atlanta, GA",
    metric: "~169 calls · 6 months",
    chartType: "calls-growth",
    chartProps: {
      peakLabel: "169 calls",
      bars: [8, 18, 32, 54, 82, 112, 140, 169],
    },
  },
  {
    slug: "slim-dental",
    brand: "Slim Dental",
    vertical: "Medical",
    metro: "New York, NY",
    metric: "+186% qualified calls",
    chartType: "growth-curve",
    chartProps: { growthLabel: "+186%" },
  },
  {
    slug: "hartman-dermatology",
    brand: "Hartman Dermatology",
    vertical: "Medical",
    metro: "Miami, FL",
    metric: "38% AI citation rate",
    chartType: "donut-gauge",
    chartProps: { percent: 38, centerLabel: "AI citation" },
  },
];

type Props = {
  currentSlug: string;
};

export function MoreWork({ currentSlug }: Props) {
  const others = SEARCH_CASES.filter((c) => c.slug !== currentSlug);
  return (
    <section className="more-work" aria-labelledby="more-work-heading">
      <div className="more-work__inner">
        <Reveal>
          <div className="more-work__header">
            <div className="more-work__label">
              <TriangleMark size={10} />
              <span>MORE WORK</span>
            </div>
            <h2 id="more-work-heading" className="more-work__headline">
              See how we&apos;ve done it for{" "}
              <span className="more-work__emph">
                other firms
                <MarkerUnderline className="more-work__emph-underline" />
              </span>
              .
            </h2>
          </div>
        </Reveal>
        <RevealGroup className="more-work__grid" stagger={90}>
          {others.map((c) => (
            <Link
              key={c.slug}
              href={`/case-studies/${c.slug}`}
              className="more-work__card"
              aria-label={`View ${c.brand} case study`}
            >
              <div className="more-work__card-meta">
                {c.vertical.toUpperCase()} · {c.metro.toUpperCase()}
              </div>
              <div className="more-work__card-chart">
                <CaseStudyChart
                  type={c.chartType}
                  {...(c.chartProps ?? {})}
                />
              </div>
              <div className="more-work__card-name">{c.brand}</div>
              <div className="more-work__card-metric">{c.metric}</div>
              <div className="more-work__card-cta">
                View case study
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
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
        </RevealGroup>
      </div>
    </section>
  );
}
