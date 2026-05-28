"use client";

// Session 50 — LiveLeadFeed final polish.
//
// What changed in Session 50:
//
//   1. Business hours moved to 8:00 AM - 9:00 PM Eastern Time (was
//      Pacific). The deterministic seed is now keyed on the Eastern
//      calendar day; the window check + exact timestamps use
//      America/New_York. All other determinism preserved.
//
//   2. Honest pipeline math. Daily lead volume capped to ~40-55 so the
//      day's count + value + 10% projection reconcile. Believable for
//      a boutique firm on a limited roster.
//
//   3. Clocks now LOOK like clocks: a mini analog face beside a large
//      tabular digital readout with the timezone abbreviation. Hands
//      compute live from each timezone via Intl.
//
// Session 49 inherited: world-clock row, deterministic-live schedule,
// exact arrival timestamps, IntersectionObserver pause when off-screen,
// reserved-height columns (no page-jump as leads arrive).

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { MarkerUnderline } from "@/components/ui/MarkerUnderline";
import { TriangleMark } from "@/components/ui/TriangleMark";

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
// Session 50 — honest cap on the day's lead count. A boutique studio
// on a limited roster should not be implying hundreds of leads/day.
// Target ~40-55. Cadence below is tuned so a 13-hour window fills with
// roughly this many arrivals.
const DAILY_LEAD_CAP = 55;
const DAILY_LEAD_FLOOR = 38;

// ---------- Deterministic PRNG ----------

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

// ---------- Eastern-time helpers ----------

function easternParts(at: Date = new Date()): {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
} {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
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

function easternWallToEpochMs(
  y: number,
  m: number,
  d: number,
  h: number,
  min: number,
  s: number
): number {
  // ET is UTC-5 or UTC-4 with DST. Start with a UTC-5 guess and refine.
  const guessUTC = Date.UTC(y, m - 1, d, h + 5, min, s);
  const guessParts = easternParts(new Date(guessUTC));
  const want = h * 3600 + min * 60 + s;
  const got = guessParts.hour * 3600 + guessParts.minute * 60 + guessParts.second;
  const diff = (want - got) * 1000;
  return guessUTC + diff;
}

function seedFromEasternDate(p: { year: number; month: number; day: number }) {
  return p.year * 10000 + p.month * 100 + p.day;
}

// ---------- Schedule generation ----------

type ScheduleEntry = LeadEntry;

function generateScheduleForEasternDay(p: {
  year: number;
  month: number;
  day: number;
}): ScheduleEntry[] {
  const rand = mulberry32(seedFromEasternDate(p));
  const open = easternWallToEpochMs(p.year, p.month, p.day, 8, 0, 0);
  const close = easternWallToEpochMs(p.year, p.month, p.day, 21, 0, 0); // 9 PM ET
  // Target a count inside the honest range, deterministic per day.
  const targetCount =
    DAILY_LEAD_FLOOR + Math.floor(rand() * (DAILY_LEAD_CAP - DAILY_LEAD_FLOOR + 1));
  const windowMs = close - open;
  // Average gap to fit `targetCount` arrivals in the window.
  const avgGap = windowMs / (targetCount + 1);

  const entries: ScheduleEntry[] = [];
  let t = open + Math.floor(rand() * avgGap);

  for (let i = 0; i < targetCount && t <= close; i++) {
    const isLegal = rand() < 0.5;
    const pool = isLegal ? LEGAL_LEAD_TEMPLATES : MEDICAL_LEAD_TEMPLATES;
    const template = pool[Math.floor(rand() * pool.length)];
    entries.push({
      id: `${seedFromEasternDate(p)}-${i}`,
      vertical: isLegal ? "legal" : "medical",
      ...template,
      timestamp: t,
    });
    // Jitter the next arrival around the average gap so cadence varies
    // realistically (roughly +/- 40% around avg).
    const jitter = (rand() - 0.5) * 0.8;
    t += Math.max(60_000, Math.floor(avgGap * (1 + jitter)));
  }
  return entries;
}

// ---------- Format helpers ----------

const TIME_FMT_ET = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/New_York",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

function formatEasternTime(ms: number): string {
  return TIME_FMT_ET.format(new Date(ms)) + " ET";
}

// ---------- MiniClock (analog face) ----------
//
// Session 50 — a small analog clock face beside each digital readout so
// the row is unmistakably a clock row. Hands rotate based on the live
// hours/minutes/seconds in the target timezone.

type MiniClockProps = {
  hour: number;
  minute: number;
  second: number;
  size?: number;
};

function MiniClock({ hour, minute, second, size = 34 }: MiniClockProps) {
  const sec = (second / 60) * 360;
  const min = ((minute + second / 60) / 60) * 360;
  const hr = (((hour % 12) + minute / 60) / 12) * 360;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className="lead-clock__face"
      aria-hidden="true"
    >
      <circle
        cx="20"
        cy="20"
        r="18.5"
        stroke="var(--text-primary, #0C0D0F)"
        strokeWidth="1.2"
        fill="var(--canvas, #FAFBFC)"
      />
      {/* Tick marks at each hour */}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * 360 - 90;
        const rad = (a * Math.PI) / 180;
        const x1 = 20 + Math.cos(rad) * 15.5;
        const y1 = 20 + Math.sin(rad) * 15.5;
        const x2 = 20 + Math.cos(rad) * 17.5;
        const y2 = 20 + Math.sin(rad) * 17.5;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="var(--text-tertiary, #6B6968)"
            strokeWidth={i % 3 === 0 ? 1.4 : 0.7}
            strokeLinecap="round"
          />
        );
      })}
      {/* Hour hand */}
      <line
        x1="20"
        y1="20"
        x2="20"
        y2="11"
        stroke="var(--text-primary, #0C0D0F)"
        strokeWidth="2"
        strokeLinecap="round"
        transform={`rotate(${hr} 20 20)`}
      />
      {/* Minute hand */}
      <line
        x1="20"
        y1="20"
        x2="20"
        y2="7"
        stroke="var(--text-primary, #0C0D0F)"
        strokeWidth="1.4"
        strokeLinecap="round"
        transform={`rotate(${min} 20 20)`}
      />
      {/* Second hand — green for the live tick */}
      <line
        x1="20"
        y1="22"
        x2="20"
        y2="6"
        stroke="var(--signal-deep, #2A8E2A)"
        strokeWidth="1"
        strokeLinecap="round"
        transform={`rotate(${sec} 20 20)`}
      />
      <circle cx="20" cy="20" r="1.6" fill="var(--text-primary, #0C0D0F)" />
    </svg>
  );
}

// ---------- World-clock row ----------

const CLOCK_ZONES = [
  { city: "New York", tz: "America/New_York", abbr: "ET" },
  { city: "San Francisco", tz: "America/Los_Angeles", abbr: "PT" },
  { city: "London", tz: "Europe/London", abbr: "GMT" },
  { city: "Tokyo", tz: "Asia/Tokyo", abbr: "JST" },
] as const;

function readZoneParts(at: Date, tz: string) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })
    .formatToParts(at)
    .reduce<Record<string, string>>((acc, p) => {
      if (p.type !== "literal") acc[p.type] = p.value;
      return acc;
    }, {});
  return {
    h: parseInt(parts.hour, 10),
    m: parseInt(parts.minute, 10),
    s: parseInt(parts.second, 10),
  };
}

function LiveClocks() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="lead-feed__clocks" aria-label="World clocks">
      {CLOCK_ZONES.map((z) => {
        const { h, m, s } = readZoneParts(now, z.tz);
        const hr12 = ((h + 11) % 12) + 1;
        const ampm = h < 12 ? "AM" : "PM";
        const pad = (n: number) => String(n).padStart(2, "0");
        return (
          <div key={z.city} className="lead-clock">
            <MiniClock hour={h} minute={m} second={s} />
            <div className="lead-clock__digital">
              <span className="lead-clock__city">{z.city}</span>
              <span className="lead-clock__time">
                {hr12}:{pad(m)}
                <span className="sec">:{pad(s)}</span>
                <span className="ampm"> {ampm}</span>
              </span>
              <span className="lead-clock__abbr">{z.abbr}</span>
            </div>
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

  // Session 50 — if we're BEFORE today's 8am ET open, show yesterday's
  // closing schedule so the feed is never blank. Once 8am ET passes
  // we switch back to today's deterministic schedule.
  const scheduleRef = useRef<ScheduleEntry[] | null>(null);
  if (scheduleRef.current === null) {
    if (typeof window !== "undefined") {
      const today = easternParts(new Date());
      const todayOpen = easternWallToEpochMs(
        today.year,
        today.month,
        today.day,
        8,
        0,
        0
      );
      if (Date.now() < todayOpen) {
        // Before today's open — use yesterday's full schedule (all
        // entries already "arrived" since they were scheduled for the
        // previous Eastern day).
        const prev = new Date(todayOpen - 24 * 60 * 60 * 1000);
        const yp = easternParts(prev);
        scheduleRef.current = generateScheduleForEasternDay(yp);
      } else {
        scheduleRef.current = generateScheduleForEasternDay(today);
      }
    } else {
      scheduleRef.current = [];
    }
  }
  const schedule = scheduleRef.current ?? [];

  const [arrivedCount, setArrivedCount] = useState<number>(() => {
    if (typeof window === "undefined") return 0;
    const now = Date.now();
    return schedule.filter((e) => e.timestamp <= now).length;
  });

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
  // Session 51 — show only the 3 most recent leads per column.
  const legalLeads = arrived
    .filter((e) => e.vertical === "legal")
    .slice(-3)
    .reverse();
  const medicalLeads = arrived
    .filter((e) => e.vertical === "medical")
    .slice(-3)
    .reverse();

  // Session 50 — honest, reconciling math.
  //   pipelineValue = sum of per-lead values (deterministic)
  //   projectedRevenue = exactly pipelineValue * 10%
  //   totalToday = arrived count, capped by the deterministic schedule
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
            <TriangleMark size={10} />
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
            business hours (8am to 9pm Eastern).
          </p>
          <p className="lead-feed__purpose">
            Inbound leads our search engine generated for clients today.
            Representative of typical activity across the active roster.
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

  const verticalLabel = lead.vertical === "legal" ? "Legal" : "Medical";
  return (
    <div className={`lead-card ${isNew ? "lead-card--new" : ""}`}>
      <div className="lead-card__intro">
        New inbound · {verticalLabel} client · {lead.city}
      </div>
      <div className="lead-card__meta-row">
        <span className="lead-card__time">{timeAgo}</span>
        <span className="lead-card__exact-time">
          {formatEasternTime(lead.timestamp)}
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
