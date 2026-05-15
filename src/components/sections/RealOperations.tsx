"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const WORKFLOW_DAYS: ReadonlyArray<{
  readonly day: string;
  readonly dow: number; // 1=Mon ... 5=Fri
  readonly title: string;
  readonly desc: string;
}> = [
  {
    day: "MONDAY",
    dow: 1,
    title: "Data sync",
    desc: "All client dashboards refresh. Anomalies flagged for review.",
  },
  {
    day: "TUESDAY",
    dow: 2,
    title: "Strategy review",
    desc: "Each client account reviewed by their lead strategist. Decisions documented.",
  },
  {
    day: "WEDNESDAY",
    dow: 3,
    title: "Production",
    desc: "Content, links, GMB posts, schema deployments executed.",
  },
  {
    day: "THURSDAY",
    dow: 4,
    title: "QA + ship",
    desc: "Everything reviewed by senior strategist before going live.",
  },
  {
    day: "FRIDAY",
    dow: 5,
    title: "Client reports + retro",
    desc: "Reports sent. Internal retro on what worked, what didn't, what's next.",
  },
];

function useDetroitClock(): string {
  const [label, setLabel] = useState<string>("");
  useEffect(() => {
    const tick = () => {
      try {
        const now = new Date();
        const t = now.toLocaleTimeString("en-US", {
          timeZone: "America/Detroit",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });
        setLabel(t);
      } catch {
        setLabel("");
      }
    };
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);
  return label;
}

function useToday(): number {
  const [dow, setDow] = useState<number>(0);
  useEffect(() => {
    setDow(new Date().getDay());
    const id = setInterval(() => setDow(new Date().getDay()), 60_000);
    return () => clearInterval(id);
  }, []);
  return dow;
}

/* ============ Tool mockups ============ */

interface RankRow {
  readonly domain: string;
  readonly query: string;
  readonly pos: number;
  readonly delta: number;
}

const RANK_ROWS: ReadonlyArray<RankRow> = [
  { domain: "awslawfirm.com", query: "probate lawyer tampa", pos: 1, delta: 0 },
  { domain: "tylerfamilylaw.com", query: "divorce attorney atlanta", pos: 1, delta: 0 },
  { domain: "hartmandermatology.com", query: "cosmetic dermatologist miami", pos: 1, delta: 0 },
  { domain: "colemanco.com", query: "estate attorney los angeles", pos: 1, delta: 0 },
  { domain: "ridgedental.com", query: "dentist lincoln park chicago", pos: 2, delta: 1 },
];

function MockRankTracker({ active }: { active: boolean }) {
  const [highlightIdx, setHighlightIdx] = useState<number>(-1);
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => {
      setHighlightIdx((i) => (i + 1) % RANK_ROWS.length);
    }, 6000);
    return () => clearInterval(id);
  }, [active]);

  return (
    <div className="ops-mock ops-mock-rank">
      <div className="ops-mock-titlebar">
        <span className="ops-mock-title">Rysen Rank Tracker · Production</span>
        <span className="ops-mock-livedot" aria-hidden="true" />
      </div>
      <div className="ops-mock-body">
        {RANK_ROWS.map((r, i) => (
          <div
            key={r.domain}
            className={`ops-rank-row${highlightIdx === i ? " is-up" : ""}`}
          >
            <span className="ops-rank-domain">{r.domain}</span>
            <span className="ops-rank-query">{r.query}</span>
            <span className="ops-rank-pos">#{r.pos}</span>
            <span className="ops-rank-delta">
              {highlightIdx === i ? "↑ +3" : r.delta > 0 ? `↑ +${r.delta}` : "–"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockAttribution({ active }: { active: boolean }) {
  const [vals, setVals] = useState<number[]>([34800, 12400, 8200, 4400, 2100]);
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => {
      setVals((v) => v.map((x, i) => x + (i === 0 ? 120 : 40 + i * 10)));
    }, 8000);
    return () => clearInterval(id);
  }, [active]);
  const labels = ["Organic", "GMB", "LSA", "AI", "Direct"];
  const max = Math.max(...vals);
  return (
    <div className="ops-mock ops-mock-attribution">
      <div className="ops-mock-titlebar">
        <span className="ops-mock-title">Client: Tampa Probate · Revenue Attribution</span>
        <span className="ops-mock-livedot" aria-hidden="true" />
      </div>
      <div className="ops-mock-body">
        {vals.map((v, i) => (
          <div key={labels[i]} className="ops-attr-row">
            <span className="ops-attr-label">{labels[i]}</span>
            <div className="ops-attr-bar-wrap">
              <div
                className="ops-attr-bar"
                style={{ width: `${(v / max) * 100}%` }}
              />
            </div>
            <span className="ops-attr-val">${v.toLocaleString()}</span>
          </div>
        ))}
        <div className="ops-attr-foot">Last updated: 4m ago</div>
      </div>
    </div>
  );
}

const SLACK_MESSAGES: ReadonlyArray<{ from: string; body: string }> = [
  { from: "art", body: "Hartman Dermatology hit #1 for 'miami dermatologist' this morning 🎯" },
  { from: "maria", body: "Tyler Family Law: 6 new reviews this week, all 5-star" },
  { from: "dave", body: "New AI Overview citation for Coleman & Co — estate planning Los Angeles" },
  { from: "sarah", body: "Ridge Dental added 3 keywords to monitor" },
  { from: "art", body: "Weekly review tomorrow 10am — bring the AWS attribution numbers" },
];

interface SlackEvt {
  readonly id: number;
  readonly from: string;
  readonly body: string;
}

function MockSlack({ active }: { active: boolean }) {
  const [feed, setFeed] = useState<SlackEvt[]>([
    { id: 1, from: SLACK_MESSAGES[0].from, body: SLACK_MESSAGES[0].body },
    { id: 2, from: SLACK_MESSAGES[1].from, body: SLACK_MESSAGES[1].body },
    { id: 3, from: SLACK_MESSAGES[2].from, body: SLACK_MESSAGES[2].body },
  ]);
  const idxRef = useRef<number>(3);
  const keyRef = useRef<number>(4);

  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => {
      const msg = SLACK_MESSAGES[idxRef.current % SLACK_MESSAGES.length];
      idxRef.current += 1;
      const evt: SlackEvt = { id: keyRef.current++, from: msg.from, body: msg.body };
      setFeed((prev) => [...prev.slice(-2), evt]);
    }, 5000);
    return () => clearInterval(id);
  }, [active]);

  return (
    <div className="ops-mock ops-mock-slack">
      <div className="ops-mock-titlebar">
        <span className="ops-mock-title">#client-ops · 24 members</span>
        <span className="ops-mock-livedot" aria-hidden="true" />
      </div>
      <div className="ops-mock-body ops-slack-body">
        {feed.map((m) => (
          <motion.div
            key={m.id}
            className="ops-slack-msg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <span className="ops-slack-from">@{m.from}</span>
            <span className="ops-slack-body-text">{m.body}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ============ Workspace SVG scene ============ */

function WorkspaceScene({ clock }: { clock: string }) {
  return (
    <div className="ops-workspace">
      <svg
        className="ops-workspace-svg"
        viewBox="0 0 480 360"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Stylized illustration of the Rysen Detroit workspace"
      >
        <defs>
          <linearGradient id="ops-wall" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f1ede1" />
            <stop offset="100%" stopColor="#e6e0d0" />
          </linearGradient>
          <linearGradient id="ops-floor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d8d0bd" />
            <stop offset="100%" stopColor="#c2bca8" />
          </linearGradient>
          <linearGradient id="ops-light" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255, 240, 200, 0.45)" />
            <stop offset="100%" stopColor="rgba(255, 240, 200, 0)" />
          </linearGradient>
          <linearGradient id="ops-monitor-rank" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fafaf6" />
            <stop offset="100%" stopColor="#e8e8ee" />
          </linearGradient>
        </defs>

        {/* Wall + floor */}
        <rect x="0" y="0" width="480" height="240" fill="url(#ops-wall)" />
        <rect x="0" y="240" width="480" height="120" fill="url(#ops-floor)" />
        <line x1="0" y1="240" x2="480" y2="240" stroke="rgba(0,0,0,0.06)" />
        <rect x="0" y="0" width="480" height="360" fill="url(#ops-light)" />

        {/* Window with Detroit skyline silhouette */}
        <rect x="32" y="44" width="156" height="92" rx="3" fill="#cfdbe8" stroke="#1a1a1f" strokeWidth="0.8" />
        <line x1="110" y1="44" x2="110" y2="136" stroke="#1a1a1f" strokeWidth="0.6" />
        <line x1="32" y1="90" x2="188" y2="90" stroke="#1a1a1f" strokeWidth="0.6" />
        {/* Skyline */}
        <g transform="translate(36, 100)">
          <rect x="0" y="20" width="8" height="14" fill="#1a1a1f" />
          <rect x="10" y="14" width="6" height="20" fill="#1a1a1f" />
          {/* Renaissance Center (central tower) */}
          <rect x="22" y="2" width="10" height="32" fill="#1a1a1f" />
          <rect x="20" y="2" width="14" height="3" fill="#1a1a1f" />
          {/* Guardian Building approximation */}
          <rect x="38" y="10" width="6" height="24" fill="#1a1a1f" />
          <polygon points="41,7 38,10 44,10" fill="#1a1a1f" />
          <rect x="48" y="18" width="6" height="16" fill="#1a1a1f" />
          <rect x="58" y="14" width="8" height="20" fill="#1a1a1f" />
          <rect x="70" y="22" width="6" height="12" fill="#1a1a1f" />
          <rect x="80" y="16" width="8" height="18" fill="#1a1a1f" />
          <rect x="92" y="20" width="6" height="14" fill="#1a1a1f" />
          <rect x="102" y="18" width="6" height="16" fill="#1a1a1f" />
          <rect x="112" y="22" width="8" height="12" fill="#1a1a1f" />
          <rect x="124" y="14" width="6" height="20" fill="#1a1a1f" />
          <rect x="134" y="18" width="8" height="16" fill="#1a1a1f" />
        </g>

        {/* Wall clock */}
        <g transform="translate(412, 60)">
          <circle cx="22" cy="22" r="22" fill="#fafaf6" stroke="#1a1a1f" strokeWidth="1" />
          <circle cx="22" cy="22" r="18" fill="#fafaf6" stroke="#9a9aa3" strokeWidth="0.3" />
          <text
            x="22"
            y="26"
            textAnchor="middle"
            fontFamily="var(--font-inter), system-ui, sans-serif"
            fontSize="8"
            fill="#1a1a1f"
          >
            {clock || "--"}
          </text>
        </g>

        {/* Desk */}
        <rect x="50" y="240" width="380" height="10" rx="2" fill="#3a342a" />
        <rect x="60" y="250" width="6" height="80" fill="#3a342a" />
        <rect x="414" y="250" width="6" height="80" fill="#3a342a" />

        {/* Monitor 1 — rank tracking */}
        <rect x="84" y="148" width="160" height="92" rx="4" fill="#1a1a1f" />
        <rect x="88" y="152" width="152" height="80" rx="2" fill="url(#ops-monitor-rank)" />
        {/* mini lines climbing */}
        <polyline
          points="92,224 110,210 128,212 146,194 164,196 182,178 200,180 220,162 236,152"
          stroke="#1d4ed8"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="236" cy="152" r="2.5" fill="#1d4ed8" />
        <text x="92" y="164" fontFamily="var(--font-inter), system-ui, sans-serif" fontSize="6" fill="#1a1a1f">
          rank-tracker · live
        </text>
        {/* Stand */}
        <rect x="148" y="240" width="32" height="6" fill="#2a2520" />

        {/* Monitor 2 — slack-style chat */}
        <rect x="260" y="148" width="148" height="92" rx="4" fill="#1a1a1f" />
        <rect x="264" y="152" width="140" height="80" rx="2" fill="#fafaf6" />
        <rect x="268" y="158" width="60" height="4" rx="1" fill="#1a1a1f" />
        {/* Chat bubbles */}
        <rect x="268" y="170" width="40" height="4" rx="1" fill="#1d4ed8" opacity="0.7" />
        <rect x="268" y="178" width="120" height="3" rx="1" fill="#9a9aa3" />
        <rect x="268" y="186" width="32" height="4" rx="1" fill="#1d4ed8" opacity="0.7" />
        <rect x="268" y="194" width="100" height="3" rx="1" fill="#9a9aa3" />
        <rect x="268" y="202" width="44" height="4" rx="1" fill="#1d4ed8" opacity="0.7" />
        <rect className="ops-slack-newline" x="268" y="210" width="90" height="3" rx="1" fill="#9a9aa3" />
        {/* Stand */}
        <rect x="318" y="240" width="32" height="6" fill="#2a2520" />

        {/* Coffee mug with steam */}
        <g>
          <rect x="60" y="216" width="20" height="22" rx="3" fill="#b48238" />
          <rect
            x="78"
            y="222"
            width="4"
            height="10"
            rx="2"
            fill="none"
            stroke="#b48238"
            strokeWidth="1.5"
          />
          <path
            className="ops-steam"
            d="M66 212 Q 70 204, 66 198 Q 62 194, 66 188"
            stroke="rgba(150,140,120,0.7)"
            strokeWidth="1"
            fill="none"
          />
          <path
            className="ops-steam ops-steam-2"
            d="M72 212 Q 76 204, 72 198 Q 68 194, 72 188"
            stroke="rgba(150,140,120,0.5)"
            strokeWidth="0.8"
            fill="none"
          />
        </g>

        {/* Notebook with moving pen */}
        <g transform="translate(420, 220)">
          <rect x="0" y="0" width="20" height="22" rx="1" fill="#fafaf6" stroke="#1a1a1f" strokeWidth="0.6" />
          <line x1="2" y1="6" x2="18" y2="6" stroke="#9a9aa3" strokeWidth="0.3" />
          <line x1="2" y1="10" x2="14" y2="10" stroke="#9a9aa3" strokeWidth="0.3" />
          <line x1="2" y1="14" x2="16" y2="14" stroke="#9a9aa3" strokeWidth="0.3" />
          <line className="ops-pen" x1="2" y1="18" x2="6" y2="18" stroke="#1d4ed8" strokeWidth="0.5" />
        </g>

        {/* Lamp / desk plant */}
        <g transform="translate(388, 218)">
          <rect x="0" y="14" width="16" height="6" rx="1" fill="#3a342a" />
          <rect x="6" y="0" width="4" height="16" fill="#3a342a" />
          <ellipse cx="8" cy="0" rx="6" ry="2" fill="#1a1a1f" />
        </g>
      </svg>

      <div className="ops-workspace-caption">
        Detroit HQ · 1 Campus Martius · Mon–Fri · Real desks. Real humans. Real Detroit.
      </div>
    </div>
  );
}

/* ============ Main section ============ */

export function RealOperations() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { margin: "-10%" });
  const reducedMotion = useReducedMotion();
  const clock = useDetroitClock();
  const today = useToday();
  const active = inView && !reducedMotion;

  return (
    <section className="real-ops" ref={sectionRef} id="real-operations">
      <div className="real-ops-inner">
        <div className="real-ops-header">
          <div className="page-section-eyebrow">Behind the work</div>
          <h2 className="real-ops-h2">
            This is what{" "}
            <span className="accent-italic">real operations</span> looks like.
          </h2>
          <p className="real-ops-sub">
            No black-box AI doing everything. No outsourced VAs in different
            time zones. A US-based team that meets weekly, reviews data
            together, and runs your engine with the same discipline as a senior
            in-house team — at boutique scale.
          </p>
        </div>

        <div className="real-ops-grid">
          {/* LEFT — Workspace scene */}
          <div className="real-ops-col real-ops-col-left">
            <WorkspaceScene clock={clock} />
          </div>

          {/* MIDDLE — Tool mockups */}
          <div className="real-ops-col real-ops-col-mid">
            <MockRankTracker active={active} />
            <MockAttribution active={active} />
            <MockSlack active={active} />
          </div>

          {/* RIGHT — Workflow diagram */}
          <div className="real-ops-col real-ops-col-right">
            <div className="real-ops-col-head">Weekly Operational Rhythm</div>
            <ol className="real-ops-flow">
              {WORKFLOW_DAYS.map((d, i) => {
                const isToday = today === d.dow;
                return (
                  <motion.li
                    key={d.day}
                    className={`real-ops-flow-row${isToday ? " is-today" : ""}`}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.4, delay: 0.08 * i }}
                  >
                    <div className="real-ops-flow-day">
                      <span className="real-ops-flow-dot" aria-hidden="true" />
                      {d.day}
                      {isToday && (
                        <span className="real-ops-flow-today">Today</span>
                      )}
                    </div>
                    <div className="real-ops-flow-title">{d.title}</div>
                    <p className="real-ops-flow-desc">{d.desc}</p>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </div>

        <div className="real-ops-editorial">
          <p>
            There's no secret AI doing the work in the background. There's a
            team of senior SEO strategists, content engineers, data analysts,
            and operations leads — all based in the US, most based in Detroit
            — running a tight weekly rhythm for every client account. The same
            rhythm Rysen has run since 2019.
          </p>
          <p>
            This is what &ldquo;data-driven&rdquo; means in practice: not a
            slogan, not a sales line, but a literal operational cadence with
            named owners, scheduled reviews, documented decisions, and weekly
            accountability. The kind of thing most agencies say they do — but
            actually don't.
          </p>
        </div>

        <div className="real-ops-foot-mark">
          Detroit, MI. 5-day operational rhythm. Weekly since 2019.
        </div>
      </div>
    </section>
  );
}
