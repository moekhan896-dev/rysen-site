import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { MoreWork } from "@/components/sections/MoreWork";
import { TrackPageView } from "@/components/analytics/TrackPageView";

// Session 52 — Quattro Labs case study, real narrative.
// Quattro is an OWNED brand (not a client). This page documents the
// proof-of-work that backs the operator claim: a brand built and
// scaled by the team using the same playbooks now applied to law
// firms and medical practices.

export const metadata: Metadata = {
  title: "Quattro Labs Case Study, Built by Us, 150K Followers in 4 Years",
  description:
    "How we built Quattro Labs into a recognized Detroit automotive media brand with 150,000+ engaged followers across social since 2021.",
};

export default function QuattroLabsPage() {
  return (
    <article className="case-study-placeholder" aria-label="Quattro Labs case study">
      <TrackPageView
        event="case_study_view"
        props={{ slug: "quattro-labs", kind: "owned-brand" }}
      />
      <div className="legal-body__breadcrumbs">
        <Breadcrumbs
          trail={[
            { name: "Home", href: "/" },
            { name: "Work", href: "/work" },
            { name: "Quattro Labs" },
          ]}
        />
      </div>

      <header className="case-study-placeholder__head">
        <p className="case-study-placeholder__tag">
          Built by us · Automotive media · Detroit · Active since 2021
        </p>
        <h1 className="case-study-placeholder__title">Quattro Labs</h1>
        <p className="case-study-placeholder__lede">
          We built our own automotive media brand from zero to 150,000+
          engaged followers since 2021. Quattro Labs is the laboratory
          where every algorithm change is tested before it gets near a
          client engagement.
        </p>
      </header>

      <section className="case-study-placeholder__body">
        <h2>The brand</h2>
        <p>
          Quattro Labs is a Detroit-based automotive media operation we
          started in 2021 to give our team a real-world surface to test
          content engineering at scale. The premise was direct: if our
          playbook for ranking and engaging an audience holds, it has to
          hold on our own brand first, where we have no client buffer and
          no marketing budget hiding the mistakes.
        </p>

        <h2>The challenge</h2>
        <p>
          The automotive social vertical is dense. The incumbents had
          decade-long head starts, six and seven-figure ad budgets, and
          relationships with manufacturers we did not have. Starting from
          zero meant we needed every post to earn its distribution.
        </p>
        <p>
          We also needed Quattro to scale without becoming a creative
          treadmill. The work had to compound. That meant production
          systems, repeatable formats, and content engineered to be
          re-distributable across platforms with minimal rework.
        </p>

        <h2>The approach</h2>
        <p>
          We treated Quattro as a four-layer engagement on our own brand.
          The Foundation Layer was the publishing system itself: a
          repeatable content production cycle, a tagged shot list per
          shoot, and a re-cut format that let each piece be repackaged
          across feed, reel, short, and longer-form surfaces.
        </p>
        <p>
          The Authority Layer was relationships: showing up consistently
          at meets, building creator-to-creator trust with the other
          Detroit and Phoenix-based automotive accounts, and standing up
          a co-creation pipeline so the same shoot could ship across
          multiple creator accounts simultaneously.
        </p>
        <p>
          The Visibility Layer was the platform work: hook formats tuned
          to the platform's algorithm of the moment, content velocity
          calibrated to each surface's appetite, and ruthless attention
          to what the analytics surfaced about retention curves.
        </p>
        <p>
          The Engagement Layer was the brand itself: the visual identity,
          the production polish, the merch drops, and the events that
          turned passive viewers into followers who came back daily.
        </p>

        <h2>The result</h2>
        <p>
          Four years in, Quattro Labs sits at 150,000+ engaged followers
          across its primary platforms. Individual posts have crossed two
          million views inside 48 hours. The brand has become a known
          presence in Detroit and Phoenix automotive scenes and has
          collaborated with major manufacturers and creators on shoots
          and meets.
        </p>
        <p>
          Beyond the audience, Quattro is the proof of work for every
          client engagement that touches social. The viral carousel on
          our homepage is real posts, real metrics, from this brand and
          the others we operate. When a law firm or medical practice
          asks whether the engagement social work compounds, we point
          them at Quattro.
        </p>

        <h2>In our words</h2>
        <blockquote>
          <p>
            &ldquo;Quattro is how we test the playbook on ourselves first.
            Every operator method we apply to a client engagement was
            stress-tested here when the only person on the line for the
            outcome was us.&rdquo;
          </p>
          <footer>— Rysen Operator team</footer>
        </blockquote>
      </section>

      <footer className="case-study-placeholder__foot">
        <Link href="/case-studies" className="case-study-placeholder__back">
          ← All case studies
        </Link>
        <Link href="/contact" className="case-study-placeholder__cta">
          Find out if your metro is open →
        </Link>
      </footer>

      {/* Quattro is an owned brand, not a search client. The MoreWork
          strip points at all 4 search case studies so the
          owned-brand page still funnels traffic back into the
          search-client narratives. */}
      <MoreWork currentSlug="quattro-labs" />
    </article>
  );
}
