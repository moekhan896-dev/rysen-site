"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number; // ms
  duration?: number; // ms
  yOffset?: number; // px
  className?: string;
  once?: boolean;
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 800,
  yOffset = 24,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [shouldReduceMotion, once]);

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? false : { opacity: 0, y: yOffset }}
      animate={
        shouldReduceMotion
          ? undefined
          : isInView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: yOffset }
      }
      transition={{
        duration: duration / 1000,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
