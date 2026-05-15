"use client";

import { useEffect, useRef } from "react";
import { SignalTriangle } from "./SignalTriangle";

interface AmbientTriangleProps {
  size?: number;
  className?: string;
}

/**
 * AmbientTriangle — a SignalTriangle that rotates 0.5deg per 100px of scroll.
 * Used as a watermark in section corners. Skips the rotation entirely when
 * prefers-reduced-motion: reduce is set.
 */
export function AmbientTriangle({ size = 16, className = "" }: AmbientTriangleProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let rafId = 0;
    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (ref.current) {
          const rotation = (window.scrollY / 100) * 0.5;
          ref.current.style.transform = `rotate(${rotation}deg)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <span ref={ref} className={`ambient-triangle ${className}`} aria-hidden="true">
      <SignalTriangle size={size} decorative />
    </span>
  );
}
