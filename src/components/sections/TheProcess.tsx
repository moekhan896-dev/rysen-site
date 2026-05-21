const PHASES = [
  {
    num: "0.1",
    badge: "PHASE 0.1",
    duration: "DAYS 1–30",
    title: "Comprehensive audit.",
    desc: "Full analysis of your current visibility, competitive positioning, and the engineered path to #1.",
    photo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=85",
    alt: "Laptop displaying analytics dashboard",
  },
  {
    num: "0.2",
    badge: "PHASE 0.2",
    duration: "DAYS 31–45",
    title: "Custom strategy.",
    desc: "We build a 12-month plan with attributed targets across content, technical, and conversion.",
    photo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=85",
    alt: "Notebook with strategic planning notes",
  },
  {
    num: "0.3",
    badge: "PHASE 0.3",
    duration: "DAYS 46–120",
    title: "Engineered build.",
    desc: "Execution begins. Content, technical SEO, GBP, reviews, schema, conversion architecture.",
    photo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=85",
    alt: "Developer working across multiple monitors",
  },
  {
    num: "0.4",
    badge: "PHASE 0.4",
    duration: "ONGOING",
    title: "Compound velocity.",
    desc: "Velocity engineered. Results compound weekly across queries, platforms, and platforms.",
    photo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=85",
    alt: "Analytics dashboards showing upward growth",
  },
] as const;

export function TheProcess() {
  return (
    <section className="process" aria-label="Process">
      <div className="process__inner">
        <div className="process__header">
          <p className="process__label">10 — Process</p>
          <h2 className="process__headline">An engineered methodology.</h2>
          <p className="process__sub">
            An engineered methodology with measurable checkpoints. Four phases. 120 days to compound velocity.
          </p>
        </div>

        <div className="process__phases">
          {PHASES.map((p) => (
            <article key={p.num} className="process-phase">
              <div className="process-phase__photo">
                <img src={p.photo} alt={p.alt} loading="lazy" />
                <div className="process-phase__photo-overlay" aria-hidden="true" />
                <div className="process-phase__photo-badge">{p.badge}</div>
              </div>
              <div className="process-phase__body">
                <div className="process-phase__label">{p.num} · {p.title.replace(".", "")}</div>
                <div className="process-phase__duration">{p.duration}</div>
                <h3 className="process-phase__title">{p.title}</h3>
                <p className="process-phase__desc">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
