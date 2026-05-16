"use client";

import { Children } from "react";
import type { ReactNode } from "react";
import { ScrollReveal } from "./ScrollReveal";

interface StaggerRevealProps {
  children: ReactNode;
  baseDelay?: number;
  staggerDelay?: number;
  className?: string;
}

/**
 * Wraps each direct child in ScrollReveal with an incrementing delay
 * so a grid or list reveals sequentially on scroll-into-view.
 *
 * NOTE: this wraps each child in an extra <div>. For grid layouts where
 * each child must be a direct grid item, set className on the parent
 * grid container and let StaggerReveal render as its children, the
 * grid will receive the wrapper <div>s as items.
 */
export function StaggerReveal({
  children,
  baseDelay = 0,
  staggerDelay = 100,
  className = "",
}: StaggerRevealProps) {
  const items = Children.toArray(children);
  return (
    <div className={className}>
      {items.map((child, i) => (
        <ScrollReveal key={i} delay={baseDelay + i * staggerDelay} duration={800}>
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
}
