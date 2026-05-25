"use client";

// Session 45 — Reveal wrapper.
//
// Drop-in component that fades + rises its children when they
// scroll into view. IntersectionObserver disconnects after first
// trigger so each element animates exactly once.
//
// Props:
//   children     React.ReactNode (required)
//   delay        ms to defer the transition start (used for staggers
//                across siblings; e.g. 0/80/160/240)
//   threshold    fraction of the element that must be visible
//                before the reveal fires (defaults to 0.12)
//   rootMargin   pre-trigger or post-trigger margin around root
//   as           optional element tag (defaults to "div") — useful
//                when the wrapper has to be a <span>, <section>, etc.
//   className    forwarded to the wrapper
//
// Reduced motion: short-circuits the observer, marks the element
// as shown immediately, and the CSS rule disables the transition
// + transform via `prefers-reduced-motion: reduce`.

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
  type CSSProperties,
} from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
};

export function Reveal({
  children,
  delay = 0,
  threshold = 0.12,
  rootMargin = "0px 0px -8% 0px",
  as,
  className,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const Tag = (as ?? "div") as ElementType;
  const combinedStyle: CSSProperties = {
    transitionDelay: `${delay}ms`,
    ...style,
  };

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? "is-shown" : ""} ${className ?? ""}`}
      style={combinedStyle}
    >
      {children}
    </Tag>
  );
}
