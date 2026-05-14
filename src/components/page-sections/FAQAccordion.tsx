"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface FAQItem {
  readonly question: string;
  readonly answer: string;
}

interface FAQAccordionProps {
  readonly items: ReadonlyArray<FAQItem>;
  readonly allowMultiple?: boolean;
}

export function FAQAccordion({
  items,
  allowMultiple = false,
}: FAQAccordionProps) {
  const [open, setOpen] = useState<ReadonlyArray<number>>([]);

  const toggle = (i: number) => {
    setOpen((prev) => {
      const isOpen = prev.includes(i);
      if (allowMultiple) {
        return isOpen ? prev.filter((x) => x !== i) : [...prev, i];
      }
      return isOpen ? [] : [i];
    });
  };

  return (
    <div className="faq-accordion" role="region" aria-label="Frequently asked questions">
      {items.map((item, i) => {
        const isOpen = open.includes(i);
        return (
          <div
            key={i}
            className={`faq-item${isOpen ? " is-open" : ""}`}
          >
            <button
              type="button"
              className="faq-question"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${i}`}
              onClick={() => toggle(i)}
            >
              <span className="faq-question-text">{item.question}</span>
              <span
                className={`faq-chevron${isOpen ? " is-open" : ""}`}
                aria-hidden="true"
              >
                ▾
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-answer-${i}`}
                  key="content"
                  className="faq-answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="faq-answer-text">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
