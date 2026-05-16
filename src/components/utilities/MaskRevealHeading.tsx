"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface MaskRevealHeadingProps {
  as?: "h1" | "h2" | "h3";
  className?: string;
  children: ReactNode;
}

/**
 * Wraps a heading in an IntersectionObserver that toggles the
 * `is-visible` class once the heading enters the viewport. Pairs
 * with the .section-heading + .is-visible CSS rule for the
 * left-to-right serif mask reveal.
 */
export function MaskRevealHeading({
  as: Tag = "h2",
  className = "",
  children,
}: MaskRevealHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`mask-reveal${visible ? " is-visible" : ""} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
