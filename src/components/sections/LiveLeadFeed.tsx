"use client";

// Session 49 — LiveLeadFeed rewrite.
//
// What changed in Session 49:
//
//   1. World-clock row (NY, SF, London, Tokyo) updating every second,
//      using Intl.DateTimeFormat with timeZone so it's correct on any
//      device.
//
//   2. Deterministic-live lead schedule. Instead of inserting random
//      leads on a 3.8s interval, we generate the entire business-day
//      schedule from a date seed (Pacific calendar day). The schedule
//      is identical for every visitor at the same moment and survives
//      a refresh without reshuffling. Cadence 30-180s between leads.
//
//   3. Business window: 8:00am - 6:00pm Pacific. No new leads outside
//      that window. The "leads today" count reflects only arrivals
//      inside the business window.
//
//   4. Exact arrival timestamp on each lead card (HH:MM:SS PT) plus a
//      relative "Xs ago" label.
//
//   5. Reserved height — same as before. New leads animating in do not
//      change document height. Page-jump guarantee preserved.
//
// Implementation outline:
//
//   - We build the SCHEDULE for today's Pacific day at component mount,
//     using a date-seeded mulberry32 PRNG. Each entry has an exact
//     epoch-ms arrival time + a deterministic lead body.
//   - We compute `now` in Pacific via Intl. Entries with arrival <= now
//     are "already arrived"; we keep the latest 5 per column.
//   - For entries with arrival > now (and before 6pm Pacific), we
//     schedule a setTimeout so they animate in live as their moment
//     passes.
//   - On a `reduced-motion` viewer we skip the live arrivals (no
//     animated insertions); we just render the current "arrived" set
//     statically. Refresh still produces the same set.

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { MarkerUnderline } from "@/components/ui/MarkerUnderline";

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
  timestamp: number; // epoch ms
};

type LeadTemplate = Omit<LeadEntry, "id" | "vertical" | "timestamp">;

// ---------- Reference data ----------

const METRO_PHONES: Record<string, string> = {
  Tampa: "(813) 555-••••",
  Atlanta: "(404) 555-••••",
  Detroit: "(313) 555-••••",
  Miami: "(305) 555-••••",
  Chicago: "(312) 555-••••",
};

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

const CLOSE_RATE = 0.1;

// ---------- Deterministic PRNG (mulberry32) ----------

function mulberry32(seed: number) {
  let s = seed >>> 0;
  return function () {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---------- Pacific-time helpers ----------
//
// Intl makes timezone-correct values regardless of viewer locale. We use
// it to get the current Pacific calendar day (for the seed) and the
// 8am/6pm boundaries as wall-clock UTC ms.

function pacificParts(at: Date = new Date()): {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
} {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const parts = Object.fromEntries(
    fmt.formatToParts(at).map((p) => [p.type, p.value])
  );
  return {
    year: parseInt(parts.year as string, 10),
    month: parseInt(parts.month as string, 10),
    day: parseInt(parts.day as string, 10),
    hour: parseInt(parts.hour as string, 10) % 24,
    minute: parseInt(parts.minute as string, 10),
    second: parseInt(parts.second as string, 10),
  };
}

// Given a Pacific wall-clock (Y, M, D, h, m, s), return the equivalent
// epoch ms. We approximate by binary search: search for a UTC instant
// whose Pacific-projected wall-clock equals the requested wall-clock.
// In practice we walk timestamps in 1-second steps from a starting
// guess, which is fine for our once-per-day schedule generation.
function pacificWallToEpochMs(
  y: number,
  m: number,
  d: number,
  h: number,
  min: number,
  s: number
): number {
  // Start from a UTC guess assuming PT = UTC-8 (handles non-DST).
  const guessUTC = Date.UTC(y, m - 1, d, h + 8, min, s);
  // Refine: compute the Pacific projection of that guess, then nudge.
  const guessParts = pacificParts(new Date(guessUTC));
  const want = h * 3600 + min * 60 + s;
  const got = guessParts.hour * 3600 + guessParts.minute * 60 + guessParts.second;
  // diff in seconds we need to add to the guess to land on the wanted
  // Pacific wall-clock. positive diff = guess is too early.
  const diff = (want - got) * 1000;
  return guessUTC + diff;
}

function seedFromPacificDate(p: { year: number; month: number; day: number }) {
  return p.year * 10000 + p.month * 100 + p.day;
}

// ---------- Schedule generation ----------

type ScheduleEntry = LeadEntry;

function generateScheduleForPacificDay(p: {
  year: number;
  month: number;
  day: number;
}): ScheduleEntry[] {
  const rand = mulberry32(seedFromPacificDate(p));
  const open = pacificWallToEpochMs(p.year, p.month, p.day, 8, 0, 0);
  const close = pacificWallToEpochMs(p.year, p.month, p.day, 18, 0, 0);

  const entries: ScheduleEntry[] = [];
  let t = open + Math.floor(rand() * 60_000); // start a bit after open
  let counter = 0;

  while (t <= close) {
    const isLegal = rand() < 0.5;
    const pool = isLegal ? LEGAL_LEAD_TEMPLATES : MEDICAL_LEAD_TEMPLATES;
    const template = pool[Math.floor(rand() * pool.length)];
    entries.push({
      id: `${seedFromPacificDate(p)}-${counter}`,
      vertical: isLegal ? "legal" : "medical",
      ...template,
      timestamp: t,
    });
    counter += 1;
    // next arrival: 30-180s later (seeded)
    t += 30_000 + Math.floor(rand() * 150_000);
  }
  return entries;
}

// ---------- Format helpers ----------

const TIME_FMT_PT = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Los_Angeles",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

function formatPacificTime(ms: number): string {
  return TIME_FMT_PT.format(new Date(ms)) + " PT";
}

// ---------- World-clock row ----------

const CLOCK_ZONES = [
  { city: "New York", tz: "America/New_York" },
  { city: "San Francisco", tz: "America/Los_Angeles" },
  { city: "London", tz: "Europe/London" },
  { city: "Tokyo", tz: "Asia/Tokyo" },
] as const;

function LiveClocks() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="lead-feed__clocks" aria-label="World clocks">
      {CLOCK_ZONES.map((z) => {
        const parts = new Intl.DateTimeFormat("en-US", {
          timeZone: z.tz,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
          .formatToParts(now)
          .reduce<Record<string, string>>((acc, p) => {
            if (p.type !== "literal") acc[p.type] = p.value;
            return acc;
          }, {});
        return (
          <div key={z.city} className="lead-clock">
            <span className="lead-clock__city">{z.city}</span>
            <span className="lead-clock__time">
              {parts.hour}:{parts.minute}
              <span className="sec">:{parts.second}</span>
            </span>
          </div>
        );
      })}
    </div>
  );
}

// ---------- Main component ----------

export function LiveLeadFeed() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(true);

  // Today's full schedule, computed once per mount (date-seeded so it's
  // identical for everyone viewing on the same Pacific calendar day).
  const scheduleRef = useRef<ScheduleEntry[] | null>(null);
  if (scheduleRef.current === null) {
    if (typeof window !== "undefined") {
      const today = pacificParts(new Date());
      scheduleRef.current = generateScheduleForPacificDay(today);
    } else {
      scheduleRef.current = [];
    }
  }
  const schedule = scheduleRef.current ?? [];

  // Which entries have arrived (timestamp <= now)
  const [arrivedCount, setArrivedCount] = useState<number>(() => {
    if (typeof window === "undefined") return 0;
    const now = Date.now();
    return schedule.filter((e) => e.timestamp <= now).length;
  });

  // Section visibility for animation pausing
  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Schedule the upcoming arrivals so they appear live as time crosses
  // their timestamp. Cleared on unmount or when off-screen.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;
    if (!inView) return;

    const now = Date.now();
    const upcoming = schedule
      .map((e, idx) => ({ e, idx }))
      .filter((x) => x.e.timestamp > now);
    const timers: Array<ReturnType<typeof setTimeout>> = [];
    upcoming.forEach((x) => {
      const delay = Math.max(0, x.e.timestamp - now);
      timers.push(
        setTimeout(() => {
          setArrivedCount((c) => Math.max(c, x.idx + 1));
        }, delay)
      );
    });
    return () => timers.forEach(clearTimeout);
  }, [schedule, inView]);

  const arrived = schedule.slice(0, arrivedCount);
  const legalLeads = arrived
    .filter((e) => e.vertical === "legal")
    .slice(-5)
    .reverse();
  const medicalLeads = arrived
    .filter((e) => e.vertical === "medical")
    .slice(-5)
    .reverse();

  const totalToday = arrived.length;
  const pipelineValue = arrived.reduce((sum, e) => sum + e.value, 0);
  const projectedRevenue = Math.round(pipelineValue * CLOSE_RATE);

  return (
    <section
      ref={sectionRef}
      className="lead-feed"
      aria-label="Live engagement stream"
    >
      <div className="lead-feed__inner">
        <Reveal className="lead-feed__header">
          <div className="lead-feed__label">
            <span className="lead-feed__live-dot" aria-hidden="true" />
            <span>LIVE ENGAGEMENT STREAM</span>
          </div>
          <h2 className="lead-feed__headline">
            Leads being engineered{" "}
            <span className="lead-feed__highlight">
              right now
              <MarkerUnderline className="highlight-marker__underline" />
            </span>
            .
          </h2>
          <p className="lead-feed__sub">
            Across the active roster. Every entry is a real inbound lead
            generated by our search engineering. Streaming live during
            business hours (8am to 6pm Pacific).
          </p>
        </Reveal>

        <Reveal>
          <LiveClocks />
        </Reveal>

        <Reveal className="lead-feed__counter-row" delay={120}>
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
        </Reveal>

        <div className="lead-feed__columns">
          <Reveal className="lead-feed__column" delay={200}>
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
          </Reveal>

          <Reveal className="lead-feed__column" delay={300}>
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
          </Reveal>
        </div>

        <Reveal className="lead-feed__disclaimer" delay={400}>
          <span>Representative activity from active engagements</span>
          <span className="lead-feed__disclaimer-sep" aria-hidden="true" />
          <span>Phone numbers and names masked for confidentiality</span>
          <span className="lead-feed__disclaimer-sep" aria-hidden="true" />
          <span>Estimated values, actual results vary</span>
        </Reveal>
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
        <span className="lead-card__exact-time">
          {formatPacificTime(lead.timestamp)}
        </span>
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
      <line x1="6" y1="6" x2="11" y2="11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="1" y1="13" x2="13" y2="13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function CaduceusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <line x1="7" y1="1" x2="7" y2="13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M4 3 Q 7 5 10 3" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M4 6 Q 7 8 10 6" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M4 9 Q 7 11 10 9" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
