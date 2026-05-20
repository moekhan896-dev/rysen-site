type Testimonial = {
  category: string;
  quote: string;
  author: string;
  firm: string;
  metric: string;
};

const TESTIMONIALS: ReadonlyArray<Testimonial> = [
  {
    category: "REVENUE",
    quote:
      "We went from a 4-attorney firm doing $2.1M to scaling toward $5M in 18 months. The pipeline went from referral-dependent to predictable.",
    author: "Managing Partner",
    firm: "Personal injury · Tampa",
    metric: "+$2.9M projected · 18 mo",
  },
  {
    category: "RANKINGS",
    quote:
      "We're now the #1 result on Google and the cited answer in ChatGPT for our practice area in our city. That didn't exist for us before.",
    author: "Founding Partner",
    firm: "Family law · Atlanta",
    metric: "#1 across 4 search platforms",
  },
  {
    category: "VOLUME",
    quote:
      "348 qualified calls in four months. We had to hire two intake paralegals just to handle the flow. Good problem.",
    author: "Operating Partner",
    firm: "Probate · Tampa",
    metric: "348 calls · 4 months",
  },
  {
    category: "SPEED",
    quote:
      "First-page rankings on competitive queries within 90 days. Then they kept compounding. By month 6 we owned the map pack.",
    author: "Practice Manager",
    firm: "Family law · Atlanta",
    metric: "Page 1 · 90 days",
  },
  {
    category: "QUALITY",
    quote:
      "What I appreciate most is the reporting honesty. They track every call, every form fill, every dollar back to source. Nothing inflated.",
    author: "Managing Attorney",
    firm: "Estate planning · Detroit",
    metric: "100% attributed reporting",
  },
  {
    category: "REVENUE",
    quote:
      "The implant queries we were losing are now the implant queries we own. Patient acquisition cost dropped by half.",
    author: "Dentist & owner",
    firm: "Implant dentistry · Chicago",
    metric: "−50% patient acquisition cost",
  },
  {
    category: "VOLUME",
    quote:
      "169 inbound calls in six months from Google Business Profile alone. Half my new clients say they found us through search.",
    author: "Founder",
    firm: "Divorce attorney · Atlanta",
    metric: "169 calls · 6 months",
  },
  {
    category: "RANKINGS",
    quote:
      "We're getting cited as the recommended cosmetic dermatologist in Miami when patients ask ChatGPT directly. The AI search citation rate is real.",
    author: "Cosmetic Dermatologist",
    firm: "Dermatology · Miami",
    metric: "38% AI citation rate",
  },
  {
    category: "SPEED",
    quote:
      "Within 30 days of the launch they had us ranking in the top 3 for our core service query. Within 90, we were #1.",
    author: "Managing Partner",
    firm: "Probate · Tampa",
    metric: "Top 3 · 30 days",
  },
  {
    category: "QUALITY",
    quote:
      "Every other agency promised volume. Rysen promised dominance and territory exclusivity. Big difference in how we got treated.",
    author: "Owner",
    firm: "Implant practice · Chicago",
    metric: "Exclusive territory rights",
  },
  {
    category: "VOLUME",
    quote:
      "Our metro is closed to my competitors. Every new patient that searches and finds someone, finds us. That's the moat.",
    author: "Owner",
    firm: "Cosmetic dermatology · Miami",
    metric: "Metro lockup · permanent",
  },
  {
    category: "REVENUE",
    quote:
      "Six months in and the engagement has paid for itself for the next three years from the cases that came directly from search.",
    author: "Practice Manager",
    firm: "Family law · Atlanta",
    metric: "ROI: 3-year payback achieved",
  },
];

export function TheWall() {
  return (
    <section className="wall" aria-label="Results wall">
      <div className="wall__inner">
        <div className="wall__header">
          <p className="verticals__label">
            <span aria-hidden="true" /> 03 — Results
          </p>
          <h2 className="verticals__headline">
            What our clients <em>actually see.</em>
          </h2>
          <p className="verticals__sub">
            Results vary by metro, vertical, and starting position. The pattern doesn&apos;t.
          </p>
        </div>

        <div className="wall__grid">
          {TESTIMONIALS.map((t, i) => (
            <article key={`wall-${i}`} className="wall-card">
              <span className="wall-card__category">{t.category}</span>
              <p className="wall-card__quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="wall-card__divider" aria-hidden="true" />
              <p className="wall-card__attribution">
                {t.author} · {t.firm}
              </p>
              <p className="wall-card__metric">{t.metric}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
