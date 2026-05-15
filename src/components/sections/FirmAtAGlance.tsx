import { AmbientTriangle } from "@/components/brand/AmbientTriangle";
import { SignalTriangle } from "@/components/brand/SignalTriangle";

interface GlanceRow {
  label: string;
  value: string;
  meta?: React.ReactNode;
}

const ROWS: ReadonlyArray<GlanceRow> = [
  {
    label: "Founded",
    value: "2019, in Detroit, Michigan.",
    meta: "Six years of compounding engagements.",
  },
  {
    label: "Team",
    value: "18 senior operators. 100% US-based. Most in Detroit.",
    meta: "No outsourced content. No overseas contractors. No junior staff running accounts.",
  },
  {
    label: "Engagements",
    value: "30+ active law firms and medical practices.",
    meta: "Across Florida, California, Illinois, and New York.",
  },
];

const CADENCE_DAYS: ReadonlyArray<string> = [
  "Monday — Data sync",
  "Tuesday — Strategy review",
  "Wednesday — Production",
  "Thursday — QA",
  "Friday — Client reports",
];

export function FirmAtAGlance() {
  return (
    <section className="firm-at-a-glance" aria-label="The firm at a glance">
      <div className="section-corner-mark">
        <AmbientTriangle size={16} />
      </div>

      <div className="firm-at-a-glance-inner">
        <div className="section-eyebrow">
          <SignalTriangle size={10} decorative />
          <span className="eyebrow-rule" aria-hidden="true" />
          <span className="eyebrow-text">The firm at a glance</span>
        </div>

        <h2 className="firm-at-a-glance-heading">The publishing details.</h2>

        <p className="firm-at-a-glance-intro">
          A real boutique firm with a real US team, real Detroit office, and a
          real 5-day operating cadence. The kind of details that separate
          established firms from anonymous freelancers.
        </p>

        <div className="glance-table">
          {ROWS.map((row) => (
            <div key={row.label} className="glance-row">
              <div className="glance-label">{row.label}</div>
              <div className="glance-value">
                {row.value}
                {row.meta && <span className="glance-meta">{row.meta}</span>}
              </div>
            </div>
          ))}

          <div className="glance-row">
            <div className="glance-label">Operating cadence</div>
            <div className="glance-value">
              5-day weekly rhythm, standing since 2019.
              <span className="glance-meta">
                {CADENCE_DAYS.map((d) => (
                  <span key={d} className="cadence-day">
                    {d}
                  </span>
                ))}
              </span>
            </div>
          </div>

          <div className="glance-row">
            <div className="glance-label">Office</div>
            <div className="glance-value">
              1 Campus Martius, Suite 200
              <span className="glance-meta">
                Detroit, Michigan 48226 ·{" "}
                <a href="tel:+12484066223" className="text-link">
                  (248) 406-6223
                </a>{" "}
                ·{" "}
                <a
                  href="mailto:marketing@rysengrowth.com"
                  className="text-link"
                >
                  marketing@rysengrowth.com
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="glance-closing">
          <hr className="glance-rule" aria-hidden="true" />
          <p>
            An independent firm. Founder-operated. No outside capital. No exits.
            No drift from the original mandate.
          </p>
        </div>
      </div>
    </section>
  );
}
