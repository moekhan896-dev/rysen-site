import { SignalTriangle } from "@/components/brand/SignalTriangle";
import { ScrollReveal } from "@/components/utilities/ScrollReveal";

interface Engagement {
  firm: string;
  location: string;
  practice: string;
}

const ENGAGEMENTS: ReadonlyArray<Engagement> = [
  { firm: "AWS Law Firm", location: "Tampa, Florida", practice: "Probate and estate administration" },
  { firm: "Tyler Family Law", location: "Atlanta, Georgia", practice: "Family law and divorce" },
  { firm: "Hartman Dermatology", location: "Miami, Florida", practice: "Cosmetic dermatology" },
  { firm: "Ridge Dental", location: "Chicago, Illinois", practice: "Implant dentistry and restoration" },
  { firm: "Coleman & Co.", location: "Los Angeles, California", practice: "Estate planning and trusts" },
  { firm: "Westbrook Plastic Surgery", location: "Miami, Florida", practice: "Cosmetic and reconstructive surgery" },
  { firm: "Mendelson Personal Injury", location: "Orlando, Florida", practice: "Personal injury and trial law" },
  { firm: "Adler Family Dentistry", location: "Naperville, Illinois", practice: "Family and pediatric dentistry" },
  { firm: "Chen Cardiology", location: "San Francisco, California", practice: "Interventional cardiology" },
  { firm: "Reichert Estate Planning", location: "Bloomfield Hills, Michigan", practice: "Estate and wealth transfer" },
];

export function SelectedEngagements() {
  return (
    <section className="engagements-section" aria-label="Selected engagements">
      <div className="engagements-corner-mark" aria-hidden="true">
        <SignalTriangle size={12} decorative />
      </div>
      <div className="engagements-inner">
        <ScrollReveal>
          <div className="engagements-header">
            <span className="engagements-label">Selected engagements</span>
            <div className="engagements-label-rule" aria-hidden="true" />
          </div>
        </ScrollReveal>

        <div className="engagements-list">
          {ENGAGEMENTS.map((e, i) => (
            <ScrollReveal key={e.firm} delay={i * 50}>
              <div className="engagement">
                <SignalTriangle size={8} className="engagement__mark" decorative />
                <div className="engagement__content">
                  <div className="engagement__firm">{e.firm}</div>
                  <div className="engagement__meta">
                    {e.location}. {e.practice}.
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <p className="engagements-footer">
            Selected from thirty-plus active engagements across four states.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
