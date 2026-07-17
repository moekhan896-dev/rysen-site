import { Reveal } from "@/components/ui/Reveal";
import { MarkerUnderline } from "@/components/ui/MarkerUnderline";

// Session 40 — TheWall.
//
// Compressed from 12 testimonials to 5, arranged in an editorial
// layout: one large featured quote centered, two supporting quotes
// stacked on the left, two stacked on the right.

type WallQuote = {
  quote: string;
  author: string;
  firm: string;
  metric: string;
};

const FEATURED: WallQuote = {
  quote:
    "~348 qualified calls in four months. We had to hire two intake paralegals just to handle the flow. Good problem.",
  author: "Operating Partner",
  firm: "Probate · Tampa",
  metric: "~348 calls · 4 months",
};

const SUPPORTING_LEFT: ReadonlyArray<WallQuote> = [
  {
    quote:
      "Within 30 days of the launch they had us ranking in the top 3 for our core service query. Within 90, we were #1.",
    author: "Managing Partner",
    firm: "Probate · Tampa",
    metric: "Top 3 · 30 days",
  },
  {
    quote:
      "~169 inbound calls in six months from Google Business Profile alone.",
    author: "Founder",
    firm: "Divorce attorney · Atlanta",
    metric: "~169 calls · 6 months",
  },
];

const SUPPORTING_RIGHT: ReadonlyArray<WallQuote> = [
  {
    quote:
      "Our metro is closed to my competitors. Every new patient that searches and finds someone, finds us. That's the moat.",
    author: "Owner",
    firm: "Cosmetic dermatology · Miami",
    metric: "Metro lockup · permanent",
  },
  {
    quote:
      "We're getting cited as the recommended cosmetic dermatologist in Miami when patients ask ChatGPT directly.",
    author: "Cosmetic Dermatologist",
    firm: "Dermatology · Miami",
    metric: "38% AI citation rate",
  },
];

function QuoteCard({
  quote,
  author,
  firm,
  metric,
  featured = false,
}: WallQuote & { featured?: boolean }) {
  return (
    <article
      className={`wall-quote ${featured ? "wall-quote--featured" : "wall-quote--supporting"}`}
    >
      <p className="wall-quote__quote">&ldquo;{quote}&rdquo;</p>
      <div className="wall-quote__attribution">
        <div className="wall-quote__author">{author}</div>
        <div className="wall-quote__firm">{firm}</div>
      </div>
      <div className="wall-quote__metric">{metric}</div>
    </article>
  );
}

export function TheWall() {
  return (
    <section className="wall" aria-label="Results wall">
      <div className="wall__inner">
        <Reveal className="wall__header">
          <p className="wall__label">
            <span className="wall__label-marker" aria-hidden="true" />
            06 — Results
          </p>
          <h2 className="wall__headline">
            What our clients{" "}
            <span className="wall__highlight">
              actually see.
              <MarkerUnderline className="highlight-marker__underline" />
            </span>
          </h2>
          <p className="wall__sub">
            The kind of thing our clients say when we&apos;re not in the
            room.
          </p>
        </Reveal>

        <div className="wall__editorial">
          <Reveal className="wall__column wall__column--left" delay={120}>
            {SUPPORTING_LEFT.map((q, i) => (
              <QuoteCard key={`left-${i}`} {...q} />
            ))}
          </Reveal>

          <Reveal className="wall__column wall__column--center" delay={240}>
            <QuoteCard {...FEATURED} featured />
          </Reveal>

          <Reveal className="wall__column wall__column--right" delay={360}>
            {SUPPORTING_RIGHT.map((q, i) => (
              <QuoteCard key={`right-${i}`} {...q} />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
