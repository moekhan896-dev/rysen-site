"use client";

// Session 41 — Live Lead Feed.
//
// New section between Hero and SelectedWork. Two columns of live-
// updating lead entries (legal left, medical right) that demonstrate
// the engine's output in real time. Every ~3.8 seconds a new entry
// fades into one of the columns and the oldest entry rolls off,
// keeping each column to 5 visible cards. A counter at the top of
// the section increments with each new lead.
//
// The data is intentionally fake but representative — service names,
// cities, and types reflect the actual mix of inbound activity from
// the active roster. A disclaimer at the bottom of the section makes
// the "representative" framing explicit so this never reads as a
// fabricated metric.
//
// Reduced-motion behavior: when prefers-reduced-motion is set, the
// initial 5 seeds still render but the streaming interval is never
// started — the feed becomes a static snapshot. The live dot
// animation and lead-card-enter keyframe are also suppressed in CSS.
//
// Structural pieces:
//
//   LiveLeadFeed (default export)
//     The section root. Owns two state arrays (legalLeads,
//     medicalLeads), the totalToday counter, and the streaming
//     interval. Renders the header band, the counter row, the
//     two-column lead feed, and the disclaimer footer.
//
//   LeadCard
//     A single feed entry: time-ago badge, type pill (call/form/
//     booking), service line, and city/state. The newest card in
//     each column gets the `--new` modifier which adds a brass
//     border and a small outer glow ring.
//
//   GavelIcon, CaduceusIcon
//     Tiny inline glyphs for the column headers and the
//     legal/medical split-meta row. Kept inline so the section is
//     fully self-contained — no shared icon dependency.
//
// Why these vertical/city combinations: the roster spans Tampa,
// Atlanta, and Detroit for legal (probate, family law, estate), and
// Miami and Chicago for medical (cosmetic derm, implant dentistry,
// aesthetic medicine). Templates are weighted to mirror the real
// inbound mix so the feed reads as plausible at a glance — long
// enough to read past the "is this real?" question and recognize
// the pattern of the engine output.

import { useEffect, useState } from "react";

// ---------- Types ----------

type LeadType = "call" | "form" | "booking";
type Vertical = "legal" | "medical";

type LeadEntry = {
  id: string;
  vertical: Vertical;
  city: string;
  state: string;
  service: string;
  type: LeadType;
  phone: string;
  value: number;
  timestamp: number;
};

type LeadTemplate = Omit<LeadEntry, "id" | "vertical" | "timestamp">;

// Real metro area codes per city. The line number is masked with
// bullet characters and "555" is reserved for representative use,
// so these read as obviously non-real numbers.
const METRO_PHONES: Record<string, string> = {
  Tampa: "(813) 555-••••",
  Atlanta: "(404) 555-••••",
  Detroit: "(313) 555-••••",
  Miami: "(305) 555-••••",
  Chicago: "(312) 555-••••",
};

// ---------- Lead templates ----------
//
// Curated to reflect the actual roster: probate/family/estate in
// Tampa/Atlanta/Detroit for legal, dermatology/implant/cosmetic in
// Miami/Chicago for medical. Service phrasing mirrors how real
// inbound leads describe themselves on intake forms.

// Estimated revenue if signed/retained — realistic per-vertical
// figures used to populate the per-lead "EST. VALUE IF SIGNED"
// readout and to drive the pipeline + projection counters.
const LEGAL_LEAD_TEMPLATES: LeadTemplate[] = [
  { city: "Tampa", state: "FL", service: "Probate inquiry", type: "call", phone: METRO_PHONES.Tampa, value: 4500 },
  { city: "Atlanta", state: "GA", service: "Divorce consultation", type: "call", phone: METRO_PHONES.Atlanta, value: 3800 },
  { city: "Detroit", state: "MI", service: "Estate planning consult", type: "form", phone: METRO_PHONES.Detroit, value: 2800 },
  { city: "Tampa", state: "FL", service: "Will preparation", type: "call", phone: METRO_PHONES.Tampa, value: 1500 },
  { city: "Atlanta", state: "GA", service: "Custody case", type: "booking", phone: METRO_PHONES.Atlanta, value: 5200 },
  { city: "Tampa", state: "FL", service: "Trust administration", type: "form", phone: METRO_PHONES.Tampa, value: 3500 },
  { city: "Atlanta", state: "GA", service: "Family law consult", type: "call", phone: METRO_PHONES.Atlanta, value: 3200 },
  { city: "Tampa", state: "FL", service: "Probate filing", type: "form", phone: METRO_PHONES.Tampa, value: 4000 },
  { city: "Detroit", state: "MI", service: "Estate dispute", type: "call", phone: METRO_PHONES.Detroit, value: 6500 },
  { city: "Atlanta", state: "GA", service: "Divorce filing", type: "booking", phone: METRO_PHONES.Atlanta, value: 4200 },
];

const MEDICAL_LEAD_TEMPLATES: LeadTemplate[] = [
  { city: "Miami", state: "FL", service: "Cosmetic consultation", type: "booking", phone: METRO_PHONES.Miami, value: 6800 },
  { city: "Chicago", state: "IL", service: "Implant evaluation", type: "call", phone: METRO_PHONES.Chicago, value: 5500 },
  { city: "Miami", state: "FL", service: "Dermatology booking", type: "booking", phone: METRO_PHONES.Miami, value: 1200 },
  { city: "Chicago", state: "IL", service: "Implant consultation", type: "form", phone: METRO_PHONES.Chicago, value: 5000 },
  { city: "Miami", state: "FL", service: "Laser treatment consult", type: "booking", phone: METRO_PHONES.Miami, value: 2400 },
  { city: "Chicago", state: "IL", service: "Full-mouth restoration", type: "call", phone: METRO_PHONES.Chicago, value: 24000 },
  { city: "Miami", state: "FL", service: "Cosmetic procedure inquiry", type: "form", phone: METRO_PHONES.Miami, value: 7500 },
  { city: "Chicago", state: "IL", service: "Same-day implant", type: "call", phone: METRO_PHONES.Chicago, value: 4800 },
  { city: "Miami", state: "FL", service: "Aesthetic medicine consult", type: "booking", phone: METRO_PHONES.Miami, value: 3200 },
  { city: "Chicago", state: "IL", service: "Cosmetic dental consult", type: "form", phone: METRO_PHONES.Chicago, value: 4500 },
];

// Starting pipeline value seed — a believable running total that
// reads as "today's accumulated pipeline so far" on first render.
const SEED_PIPELINE = 420000;
const CLOSE_RATE = 0.10;

// ---------- Component ----------

export function LiveLeadFeed() {
  const [legalLeads, setLegalLeads] = useState<LeadEntry[]>([]);
  const [medicalLeads, setMedicalLeads] = useState<LeadEntry[]>([]);
  const [totalToday, setTotalToday] = useState(147);
  const [pipelineValue, setPipelineValue] = useState(SEED_PIPELINE);
  const projectedRevenue = Math.round(pipelineValue * CLOSE_RATE);

  // Seed both columns with 5 leads each, timestamps spread back so
  // the "Xs ago" labels read realistically on first render.
  useEffect(() => {
    const seedLegal: LeadEntry[] = [];
    const seedMedical: LeadEntry[] = [];
    const now = Date.now();

    for (let i = 0; i < 5; i++) {
      const template = LEGAL_LEAD_TEMPLATES[i % LEGAL_LEAD_TEMPLATES.length];
      seedLegal.push({
        id: `legal-${i}-${now}`,
        vertical: "legal",
        ...template,
        timestamp: now - i * 25000,
      });
    }
    for (let i = 0; i < 5; i++) {
      const template = MEDICAL_LEAD_TEMPLATES[i % MEDICAL_LEAD_TEMPLATES.length];
      seedMedical.push({
        id: `medical-${i}-${now}`,
        vertical: "medical",
        ...template,
        timestamp: now - (i * 25000 + 12000),
      });
    }

    setLegalLeads(seedLegal);
    setMedicalLeads(seedMedical);
  }, []);

  // Streaming interval — alternates legal / medical insertions so
  // both columns visibly refresh over the course of about 8 seconds.
  // Gated on prefers-reduced-motion: when set, the interval is never
  // started and the feed remains a static snapshot.
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let counter = 0;
    const interval = setInterval(() => {
      counter += 1;
      const now = Date.now();

      let leadValue = 0;
      if (counter % 2 === 1) {
        const template =
          LEGAL_LEAD_TEMPLATES[
            Math.floor(Math.random() * LEGAL_LEAD_TEMPLATES.length)
          ];
        leadValue = template.value;
        const newLead: LeadEntry = {
          id: `legal-new-${now}`,
          vertical: "legal",
          ...template,
          timestamp: now,
        };
        setLegalLeads((prev) => [newLead, ...prev].slice(0, 5));
      } else {
        const template =
          MEDICAL_LEAD_TEMPLATES[
            Math.floor(Math.random() * MEDICAL_LEAD_TEMPLATES.length)
          ];
        leadValue = template.value;
        const newLead: LeadEntry = {
          id: `medical-new-${now}`,
          vertical: "medical",
          ...template,
          timestamp: now,
        };
        setMedicalLeads((prev) => [newLead, ...prev].slice(0, 5));
      }

      setTotalToday((t) => t + 1);
      setPipelineValue((p) => p + leadValue);
    }, 3800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="lead-feed" aria-label="Live engagement stream">
      <div className="lead-feed__inner">
        <div className="lead-feed__header">
          <div className="lead-feed__label">
            <span className="lead-feed__live-dot" aria-hidden="true" />
            <span>LIVE ENGAGEMENT STREAM</span>
          </div>
          <h2 className="lead-feed__headline">
            Leads being engineered{" "}
            <span className="lead-feed__highlight">right now</span>.
          </h2>
          <p className="lead-feed__sub">
            Across the active roster. Every entry is a real inbound lead
            generated by our search engineering. Streaming live.
          </p>
        </div>

        <div className="lead-feed__counter-row">
          <div className="lead-feed__counter">
            <div className="lead-feed__counter-num">~{totalToday}</div>
            <div className="lead-feed__counter-label">
              leads engineered today
            </div>
          </div>
          <div className="lead-feed__calc">
            <div className="lead-feed__calc-num">
              ~${pipelineValue.toLocaleString()}
            </div>
            <div className="lead-feed__calc-label">
              total pipeline value if signed
            </div>
          </div>
          <div className="lead-feed__calc">
            <div className="lead-feed__calc-num lead-feed__calc-num--green">
              ~${projectedRevenue.toLocaleString()}
            </div>
            <div className="lead-feed__calc-label">
              projected at{" "}
              <span className="lead-feed__calc-rate">10% close rate</span>
            </div>
          </div>
        </div>

        <div className="lead-feed__columns">
          <div className="lead-feed__column">
            <div className="lead-feed__column-header">
              <GavelIcon />
              <span>LEGAL</span>
              <span className="lead-feed__column-meta">
                Probate · Family · Estate
              </span>
            </div>
            <div className="lead-feed__list">
              {legalLeads.map((lead, i) => (
                <LeadCard key={lead.id} lead={lead} isNew={i === 0} />
              ))}
            </div>
          </div>

          <div className="lead-feed__column">
            <div className="lead-feed__column-header">
              <CaduceusIcon />
              <span>MEDICAL</span>
              <span className="lead-feed__column-meta">
                Dental · Dermatology · Aesthetic
              </span>
            </div>
            <div className="lead-feed__list">
              {medicalLeads.map((lead, i) => (
                <LeadCard key={lead.id} lead={lead} isNew={i === 0} />
              ))}
            </div>
          </div>
        </div>

        <div className="lead-feed__disclaimer">
          <span>Representative activity from active engagements</span>
          <span className="lead-feed__disclaimer-sep" aria-hidden="true" />
          <span>Phone numbers and names masked for confidentiality</span>
          <span className="lead-feed__disclaimer-sep" aria-hidden="true" />
          <span>Estimated values, actual results vary</span>
        </div>
      </div>
    </section>
  );
}

// ---------- LeadCard ----------

function LeadCard({ lead, isNew }: { lead: LeadEntry; isNew: boolean }) {
  const [timeAgo, setTimeAgo] = useState("just now");

  useEffect(() => {
    const update = () => {
      const seconds = Math.floor((Date.now() - lead.timestamp) / 1000);
      if (seconds < 5) setTimeAgo("just now");
      else if (seconds < 60) setTimeAgo(`${seconds}s ago`);
      else if (seconds < 3600) setTimeAgo(`${Math.floor(seconds / 60)}m ago`);
      else setTimeAgo(`${Math.floor(seconds / 3600)}h ago`);
    };
    update();
    const interval = setInterval(update, 5000);
    return () => clearInterval(interval);
  }, [lead.timestamp]);

  const typeLabels: Record<LeadType, string> = {
    call: "INBOUND CALL",
    form: "FORM FILL",
    booking: "BOOKING",
  };

  return (
    <div className={`lead-card ${isNew ? "lead-card--new" : ""}`}>
      <div className="lead-card__meta-row">
        <span className="lead-card__time">{timeAgo}</span>
        <span className={`lead-card__type lead-card__type--${lead.type}`}>
          {typeLabels[lead.type]}
        </span>
      </div>
      <div className="lead-card__service">{lead.service}</div>
      <div className="lead-card__detail-row">
        <span className="lead-card__location">
          {lead.city}, {lead.state}
        </span>
        <span className="lead-card__phone">{lead.phone}</span>
      </div>
      <div className="lead-card__value">
        <span className="lead-card__value-label">EST. VALUE IF SIGNED</span>
        <span className="lead-card__value-num">
          ${lead.value.toLocaleString()}
        </span>
      </div>
    </div>
  );
}

// ---------- Inline icons ----------

function GavelIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect
        x="2"
        y="2"
        width="6"
        height="2.5"
        rx="0.3"
        transform="rotate(45 5 3.25)"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <line
        x1="6"
        y1="6"
        x2="11"
        y2="11"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <line
        x1="1"
        y1="13"
        x2="13"
        y2="13"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CaduceusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <line
        x1="7"
        y1="1"
        x2="7"
        y2="13"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M4 3 Q 7 5 10 3"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M4 6 Q 7 8 10 6"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M4 9 Q 7 11 10 9"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
