"use client";

// Session 46 — Reveal + RevealGroup.
//
// Single motion language for the whole site. Default variant is
// "rise-blur" — the wearen5.com feel: opacity 0 → 1 + translateY
// (--reveal-rise) → 0 + filter blur(--reveal-blur) → blur(0), all on
// var(--motion-ease) at var(--reveal-duration). The blur-to-sharp is
// what makes the reveal feel "developed" rather than just sliding.
//
// All animation values reference :root motion tokens — no per-call-site
// timing knobs. Stagger across siblings via RevealGroup using
// --reveal-stagger.
//
// Reduced motion: short-circuits the IntersectionObserver and marks
// the element shown immediately. CSS rule disables transforms +
// transitions in the reduced-motion media query.

import {
  Children,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type RevealVariant = "rise" | "rise-blur" | "fade";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  variant?: RevealVariant;
  threshold?: number;
  rootMargin?: string;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
};

export function Reveal({
  children,
  delay = 0,
  variant = "rise-blur",
  threshold = 0.1,
  rootMargin = "0px 0px -10% 0px",
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
      className={`reveal reveal--${variant} ${shown ? "is-shown" : ""} ${
        className ?? ""
      }`}
      style={combinedStyle}
    >
      {children}
    </Tag>
  );
}

// ---------- RevealGroup ----------
//
// Wraps a list of siblings and auto-staggers each child by
// --reveal-stagger (90ms by default), with an optional baseDelay
// before the first child enters. Each child becomes its own Reveal,
// inheriting the variant.

type RevealGroupProps = {
  children: ReactNode;
  variant?: RevealVariant;
  baseDelay?: number;
  stagger?: number;
  className?: string;
};

export function RevealGroup({
  children,
  variant = "rise-blur",
  baseDelay = 0,
  stagger = 90,
  className,
}: RevealGroupProps) {
  const items = Children.toArray(children);
  return (
    <>
      {className ? (
        <div className={className}>
          {items.map((child, i) => (
            <Reveal key={i} delay={baseDelay + i * stagger} variant={variant}>
              {child}
            </Reveal>
          ))}
        </div>
      ) : (
        items.map((child, i) => (
          <Reveal key={i} delay={baseDelay + i * stagger} variant={variant}>
            {child}
          </Reveal>
        ))
      )}
    </>
  );
}
