"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Testimonial = {
  readonly quote: string;
  readonly name: string;
  readonly role: string;
};

const testimonials: ReadonlyArray<Testimonial> = [
  {
    quote:
      "Rysen approaches our marketing the way a serious litigation team approaches a case — with data, with structure, and without hype. Almost two years in, we're cited by ChatGPT in our target queries and our consultation calendar has never been fuller.",
    name: "Marcus Webb",
    role: "Managing Partner, AWS Law Firm",
  },
  {
    quote:
      "The team understood medical marketing in a way our previous agency never did. Compliance-aware, results-focused, and refreshingly honest about what's working and what isn't. Worth every dollar.",
    name: "Dr. Sarah Hartman",
    role: "Hartman Dermatology",
  },
  {
    quote:
      "We hired Rysen specifically because they only work with legal firms. The depth of expertise shows up in every recommendation they make. Our consultation volume has tripled since engagement began.",
    name: "Coleman Reyes",
    role: "Founding Partner, Coleman & Co.",
  },
];

const AUTO_ADVANCE_MS = 8000;

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((nextIdx: number, dir: 1 | -1 = 1) => {
    setDirection(dir);
    setIndex(((nextIdx % testimonials.length) + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => {
      goTo(index + 1, 1);
    }, AUTO_ADVANCE_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index, paused, goTo]);

  const current = testimonials[index];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-inner">
        <div className="section-2-eyebrow">What clients say</div>
        <h2 className="section-2-h2">
          Trusted by firms that{" "}
          <span className="accent-text">don&apos;t compromise on craft.</span>
        </h2>

        <div
          className="testimonial-carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <span className="testimonial-quote-mark" aria-hidden="true">
            “
          </span>

          <div className="testimonial-stage">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.article
                key={index}
                className="testimonial-slide"
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="testimonial-big-quote">{current.quote}</p>
                <div className="testimonial-rule" aria-hidden="true"></div>
                <div className="testimonial-name">{current.name}</div>
                <div className="testimonial-role">{current.role}</div>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="testimonial-dots" role="tablist">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show testimonial ${i + 1}`}
                className={`testimonial-dot${i === index ? " is-active" : ""}`}
                onClick={() => goTo(i, i > index ? 1 : -1)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
