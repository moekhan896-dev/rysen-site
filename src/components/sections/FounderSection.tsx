"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";
import { CareerTimeline } from "./CareerTimeline";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const PARA_1 =
  "I started Rysen because I watched marketing agencies bill millions and deliver impressions. I was inside Salesforce and Roku — companies that knew exactly how to attribute revenue to channel — and then I'd talk to agency partners who couldn't tell me whether their campaigns generated a single dollar. That gap stopped making sense to me.";

const CURRENTLY_STATUSES: ReadonlyArray<string> = [
  "Reviewing Tyler Family Law Q4 strategy",
  "On Zoom with AWS Law Firm — Detroit HQ",
  "Writing this quarter’s playbook updates",
  "Reviewing GMB optimization results for Hartman",
  "Strategy session with Coleman & Co. team",
  "Drafting next month’s client reviews",
];

export function FounderSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const monoWrapRef = useRef<HTMLDivElement | null>(null);
  const monoRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();
  const inView = useInView(sectionRef, { once: true, margin: "-15%" });
  const ambientInView = useInView(sectionRef, { margin: "-15%" });

  // Typewriter (V3) state
  const words = PARA_1.split(" ");
  const [revealedCount, setRevealedCount] = useState<number>(0);
  const typewriterComplete = revealedCount >= words.length;

  // "Currently" status cycle
  const [statusIdx, setStatusIdx] = useState<number>(0);

  // Chip cascade — ticks each "pulse cycle" so we can stagger via CSS animation-delay reapplication
  const [chipCascadeTick, setChipCascadeTick] = useState<number>(0);

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion) {
      setRevealedCount(words.length);
      return;
    }
    setRevealedCount(0);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setRevealedCount(i);
      if (i >= words.length) clearInterval(id);
    }, 80);
    return () => clearInterval(id);
  }, [inView, reducedMotion, words.length]);

  // Currently status — auto-cycle every 8s
  useEffect(() => {
    if (!ambientInView || reducedMotion) return;
    const id = setInterval(() => {
      setStatusIdx((i) => (i + 1) % CURRENTLY_STATUSES.length);
    }, 8000);
    return () => clearInterval(id);
  }, [ambientInView, reducedMotion]);

  // Chip cascade — fire every 8s
  useEffect(() => {
    if (!ambientInView || reducedMotion) return;
    const id = setInterval(() => setChipCascadeTick((t) => t + 1), 8000);
    return () => clearInterval(id);
  }, [ambientInView, reducedMotion]);

  // Mouse-following 3D tilt
  useEffect(() => {
    const wrap = monoWrapRef.current;
    const mono = monoRef.current;
    if (!wrap || !mono || reducedMotion) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId = 0;
    let active = true;

    const onMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = Math.max(-1, Math.min(1, (e.clientX - cx) / (rect.width * 1.5)));
      const dy = Math.max(-1, Math.min(1, (e.clientY - cy) / (rect.height * 1.5)));
      targetY = dx * 8;
      targetX = -dy * 8;
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const tick = () => {
      if (!active) return;
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      mono.style.transform = `perspective(800px) rotateX(${currentX.toFixed(2)}deg) rotateY(${currentY.toFixed(2)}deg)`;
      rafId = requestAnimationFrame(tick);
    };

    wrap.addEventListener("mousemove", onMove, { passive: true });
    wrap.addEventListener("mouseleave", onLeave);
    rafId = requestAnimationFrame(tick);

    return () => {
      active = false;
      cancelAnimationFrame(rafId);
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, [reducedMotion]);

  return (
    <section className="founder-section founder-section-v4" id="founder" ref={sectionRef}>
      {/* Ambient background blobs */}
      <div className="founder-ambient" aria-hidden="true">
        <span className="founder-blob founder-blob-1" />
        <span className="founder-blob founder-blob-2" />
      </div>

      <div className="founder-inner">
        <div className="founder-photo-col">
          <div className="founder-monogram-wrap" ref={monoWrapRef}>
            <div className="founder-monogram-glow" aria-hidden="true" />

            {/* Concentric radar pulse rings (every 5s) */}
            <span className="founder-mono-ring founder-mono-ring-1" aria-hidden="true" />
            <span className="founder-mono-ring founder-mono-ring-2" aria-hidden="true" />

            <div
              className="founder-monogram founder-monogram-hueshift"
              role="img"
              aria-label="Art Khan"
              ref={monoRef}
            >
              <div className="founder-monogram-noise" aria-hidden="true"></div>
              <div className="founder-monogram-drift" aria-hidden="true"></div>
              <span className="founder-monogram-text">AK</span>
            </div>
          </div>
          <div className="founder-name">Art Khan</div>
          <div className="founder-role">Founder & Managing Partner</div>

          {/* Credibility chips with periodic cascade pulse */}
          <div
            className={`founder-chips${chipCascadeTick > 0 ? " is-cascading" : ""}`}
            key={`cascade-${chipCascadeTick}`}
          >
            <span className="founder-chip" style={{ animationDelay: "0ms" }}>ROSS BBA</span>
            <span className="founder-chip" style={{ animationDelay: "80ms" }}>ex-SALESFORCE</span>
            <span className="founder-chip" style={{ animationDelay: "160ms" }}>ex-ROKU</span>
          </div>

          <div
            className="founder-detroit-badge"
            style={{ animationDelay: "240ms" }}
          >
            <MapPin size={11} strokeWidth={2} aria-hidden="true" />
            <span>Detroit, MI</span>
          </div>

          {/* "Currently" live status card */}
          <div className="founder-currently" aria-live="polite">
            <div className="founder-currently-head">
              <span className="founder-currently-dot" aria-hidden="true" />
              <span className="founder-currently-label">Currently</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={statusIdx}
                className="founder-currently-text"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {CURRENTLY_STATUSES[statusIdx]}
              </motion.div>
            </AnimatePresence>
          </div>

          <CareerTimeline />
        </div>

        <div className="founder-message-col">
          <div className="section-2-eyebrow">From the founder</div>
          <h2 className="founder-h2">
            A note from <span className="accent-text">Art.</span>
          </h2>
          <div className="founder-prose">
            <p className="founder-typewriter-p">
              {words.map((w, i) => (
                <span
                  key={i}
                  className="founder-tw-word"
                  style={{ opacity: i < revealedCount ? 1 : 0 }}
                >
                  {w}
                  {i < words.length - 1 ? " " : ""}
                </span>
              ))}
              {typewriterComplete && (
                <span className="founder-tw-cursor" aria-hidden="true">|</span>
              )}
            </p>
            <p>
              Most marketing firms sell tactics. We sell outcomes. Most firms
              report on what they did. We report on what it generated. When
              you engage Rysen, every dollar of work we do gets tracked to a
              specific client outcome — a ranking gained, a citation earned,
              a phone call attributed, a revenue figure produced. If we
              can't show you the math, we don't bill you.
            </p>
            <p>
              That sounds obvious. It isn't. Most agencies actively avoid
              attribution because attribution exposes which tactics actually
              work. Ours doesn't, because we built the firm around the
              discipline of measuring what matters. We've turned away
              dozens of engagements from firms wanting templated services or
              quarterly reports — we work weekly, we work hyperlocally, and we
              work with the clients we know we can win for.
            </p>

            <aside className="founder-pullquote founder-pullquote-v4" aria-hidden="false">
              <span
                className="founder-pullquote-mark founder-pullquote-mark-open founder-pullquote-mark-rotate"
                aria-hidden="true"
              >
                “
              </span>
              <span className="founder-pullquote-text founder-pullquote-text-glow">
                Pick the agency that can show you the math.
              </span>
              <span
                className="founder-pullquote-mark founder-pullquote-mark-close founder-pullquote-mark-rotate"
                aria-hidden="true"
              >
                ”
              </span>
            </aside>

            <p>
              Founded in Detroit in 2019. Still based in Detroit. Still
              hands-on with every major client account. We're based in
              Detroit because Detroit produces operators who do the work.
              We're founder-led because every client gets my attention.
              We're 18 people because 18 is the size we've proven we can run
              with discipline. We've grown carefully since 2019, and we'll
              keep growing carefully — because the alternative is the agency
              model we started Rysen to avoid.
            </p>
            <p>
              If you're a law firm or medical practice and you want to be
              the first answer when a client asks who they should call — not
              the eleventh result, not the impression-counted ad — let's
              talk. We'll audit your visibility for free. If we can win
              for you, we'll tell you exactly how, exactly when, and
              exactly what it will cost. If we can't, we'll tell
              you that too.
            </p>
          </div>
          <div className="founder-signature">— Art</div>
          <a href="#brands-built" className="founder-link">
            See Art's brands <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
