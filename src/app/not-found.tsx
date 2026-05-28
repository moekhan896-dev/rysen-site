import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { TriangleMark } from "@/components/ui/TriangleMark";
import { MarkerUnderline } from "@/components/ui/MarkerUnderline";

// Session 52 — branded 404. Replaces the previous sonar design with a
// destination-led page: 4 tiles cover the main IA branches, plus a
// stronger Claim-your-city CTA. The shared header + footer wrap via
// root layout. The marker underline draws in on first paint.

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "We could not find that page. Here is where you might want to go instead.",
  robots: { index: false, follow: true },
};

const DESTINATIONS = [
  {
    href: "/",
    label: "Home",
    desc: "The full pitch, the search demo, and the live engagement feed.",
  },
  {
    href: "/work",
    label: "Selected work",
    desc: "The roster of firms now at position #1 in their metro.",
  },
  {
    href: "/about",
    label: "About",
    desc: "Who we are, the team, the methodology behind the engine.",
  },
  {
    href: "/careers",
    label: "Careers",
    desc: "Open roles for engineers and creatives in Detroit and remote.",
  },
] as const;

export default function NotFound() {
  return (
    <div className="not-found-404">
      <Reveal>
        <section className="not-found-404__inner">
          <div className="not-found-404__code" aria-hidden="true">
            <span>4</span>
            <span className="not-found-404__triangle">
              <TriangleMark size={56} />
            </span>
            <span>4</span>
          </div>
          <h1 className="not-found-404__headline">
            We did not find that page.{" "}
            <span className="not-found-404__emph">
              Here is what you might want.
              <MarkerUnderline className="not-found-404__emph-underline" />
            </span>
          </h1>
          <p className="not-found-404__sub">
            The URL you followed may be outdated or mistyped. The four
            destinations below cover most of the site.
          </p>
        </section>
      </Reveal>

      <section className="not-found-404__grid">
        {DESTINATIONS.map((d) => (
          <Link key={d.href} href={d.href} className="not-found-404__tile">
            <div className="not-found-404__tile-head">
              <TriangleMark size={12} />
              <span className="not-found-404__tile-label">{d.label}</span>
            </div>
            <p className="not-found-404__tile-desc">{d.desc}</p>
            <span className="not-found-404__tile-arrow" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7H11M11 7L7 3M11 7L7 11"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        ))}
      </section>

      <section className="not-found-404__cta-wrap">
        <Link href="/contact" className="not-found-404__cta hero__cta-primary">
          Claim your city
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
        </Link>
      </section>
    </div>
  );
}
