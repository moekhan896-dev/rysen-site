"use client";

// Session 45 — LazyVideo.
//
// IntersectionObserver-backed video wrapper. Plays only when the
// video is in view (or near-in-view, via rootMargin); pauses when
// it scrolls off-screen. This is the proper way to fix the Quattro
// lag without downscaling the source — multiple high-res videos
// playing simultaneously is what stutters the page, so we keep
// each <video> high-res but suspend playback when offscreen.
//
// Props:
//   src      The video URL (MP4 H.264 expected)
//   poster   Optional high-res poster image for the first frame
//   aspectRatio (e.g. "9 / 16") to lock the layout box so the
//             video never causes CLS or stretches.
//   className for caller styling.

import { useEffect, useRef } from "react";

type LazyVideoProps = {
  src: string;
  poster?: string;
  aspectRatio?: string;
  className?: string;
  ariaLabel?: string;
};

export function LazyVideo({
  src,
  poster,
  aspectRatio = "9 / 16",
  className,
  ariaLabel,
}: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) {
      // Hard pause + skip the observer entirely. The poster image
      // (or first frame) is what the user sees.
      el.pause();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const promise = el.play();
            if (promise && typeof promise.catch === "function") {
              promise.catch(() => {
                /* swallow autoplay rejection */
              });
            }
          } else {
            el.pause();
          }
        });
      },
      { threshold: 0.15, rootMargin: "120px 0px 120px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-label={ariaLabel}
      style={{ aspectRatio }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
