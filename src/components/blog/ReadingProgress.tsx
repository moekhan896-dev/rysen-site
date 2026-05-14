"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const docHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          const pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
          setProgress(Math.max(0, Math.min(100, pct)));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="reading-progress" aria-hidden="true">
      <div
        className="reading-progress-bar"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </div>
  );
}
