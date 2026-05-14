"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const STORAGE_KEY = "rysen_signature_seen";

type Phase = "dot" | "fragment" | "form" | "lines" | "hold" | "out";

interface Particle {
  readonly id: number;
  readonly dx: number;
  readonly dy: number;
  readonly r: number; // rotation
  readonly o: number; // opacity
}

const SUBLINES: ReadonlyArray<string> = [
  "Detroit",
  "Est. 2019",
  "30+ firms",
  "Real numbers.",
];

function generateParticles(count: number): ReadonlyArray<Particle> {
  return Array.from({ length: count }, (_, i) => {
    const angle = Math.random() * Math.PI * 2;
    const dist = 180 + Math.random() * 220;
    return {
      id: i,
      dx: Math.cos(angle) * dist,
      dy: Math.sin(angle) * dist,
      r: (Math.random() - 0.5) * 30,
      o: 0.3 + Math.random() * 0.4,
    };
  });
}

export function SignatureOpening() {
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState<boolean>(false);
  const [phase, setPhase] = useState<Phase>("dot");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const particles = useMemo(() => generateParticles(40), []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = window.sessionStorage.getItem(STORAGE_KEY) === "true";

    if (seen || reducedMotion) {
      window.sessionStorage.setItem(STORAGE_KEY, "true");
      setActive(false);
      return;
    }

    setActive(true);
    document.body.style.overflow = "hidden";

    const schedule = (fn: () => void, delay: number) => {
      const t = setTimeout(fn, delay);
      timers.current.push(t);
    };

    schedule(() => setPhase("fragment"), 800);
    schedule(() => setPhase("form"), 1800);
    schedule(() => setPhase("lines"), 3000);
    schedule(() => setPhase("hold"), 4700);
    schedule(() => setPhase("out"), 5200);
    schedule(() => {
      setActive(false);
      document.body.style.overflow = "";
      window.sessionStorage.setItem(STORAGE_KEY, "true");
    }, 6200);

    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
      document.body.style.overflow = "";
    };
  }, [reducedMotion]);

  const dismiss = () => {
    if (!active) return;
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setPhase("out");
    const t = setTimeout(() => {
      setActive(false);
      document.body.style.overflow = "";
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(STORAGE_KEY, "true");
      }
    }, 220);
    timers.current.push(t);
  };

  useEffect(() => {
    if (!active) return;
    const onKey = () => dismiss();
    const onClick = () => dismiss();
    const onScroll = () => dismiss();
    window.addEventListener("keydown", onKey);
    window.addEventListener("click", onClick);
    window.addEventListener("wheel", onScroll, { passive: true });
    window.addEventListener("touchmove", onScroll, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("click", onClick);
      window.removeEventListener("wheel", onScroll);
      window.removeEventListener("touchmove", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="sig-opening"
          initial={{ opacity: 1 }}
          animate={
            phase === "out"
              ? { opacity: 0, scale: 0.96 }
              : { opacity: 1, scale: 1 }
          }
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: phase === "out" ? 0.8 : 0.2 }}
          aria-hidden="true"
        >
          {/* Atmospheric layers */}
          <div className="sig-atmosphere" />
          <div className="sig-grain" />

          {/* Ambient background particles (faint, slow) */}
          <div className="sig-ambient-particles" aria-hidden="true">
            {Array.from({ length: 10 }, (_, i) => (
              <span
                key={i}
                className={`sig-ambient-particle sig-ap-${i % 4}`}
                style={{
                  top: `${(i * 11) % 100}%`,
                  left: `${(i * 17 + 5) % 100}%`,
                }}
              />
            ))}
          </div>

          {/* Center stage */}
          <div className="sig-stage">
            <AnimatePresence>
              {phase === "dot" && (
                <motion.span
                  key="dot"
                  className="sig-dot"
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              )}
            </AnimatePresence>

            {/* Fragment + form particles */}
            <div className="sig-particles-wrap">
              {particles.map((p) => {
                const fragmentTransform = `translate(${p.dx}px, ${p.dy}px) rotate(${p.r}deg)`;
                const convergedTransform = "translate(0, 0) rotate(0deg)";
                return (
                  <motion.span
                    key={p.id}
                    className="sig-particle"
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    animate={
                      phase === "fragment"
                        ? {
                            opacity: p.o,
                            transform: fragmentTransform,
                          }
                        : phase === "form" ||
                            phase === "lines" ||
                            phase === "hold"
                          ? {
                              opacity: 0,
                              transform: convergedTransform,
                            }
                          : { opacity: 0 }
                    }
                    transition={{
                      duration:
                        phase === "fragment"
                          ? 1.0
                          : phase === "form"
                            ? 1.2
                            : 0.3,
                      ease:
                        phase === "form"
                          ? [0.34, 1.56, 0.64, 1]
                          : "easeOut",
                      delay: phase === "fragment" ? (p.id % 8) * 0.02 : 0,
                    }}
                  />
                );
              })}
            </div>

            <AnimatePresence>
              {(phase === "form" ||
                phase === "lines" ||
                phase === "hold" ||
                phase === "out") && (
                <motion.div
                  key="wordmark"
                  className="sig-wordmark"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                >
                  Rysen
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {(phase === "lines" || phase === "hold" || phase === "out") && (
                <motion.div
                  key="lines"
                  className="sig-lines"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {SUBLINES.map((line, i) => (
                    <motion.span
                      key={line}
                      className="sig-line"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.2 }}
                    >
                      {line}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            type="button"
            className="sig-skip"
            onClick={(e) => {
              e.stopPropagation();
              dismiss();
            }}
            aria-label="Skip intro"
          >
            Skip <span aria-hidden="true">→</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
