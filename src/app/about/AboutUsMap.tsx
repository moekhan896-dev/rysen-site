"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface City {
  readonly name: string;
  readonly cx: number;
  readonly cy: number;
  readonly hq?: boolean;
}

const CITIES: ReadonlyArray<City> = [
  { name: "Detroit (HQ)", cx: 720, cy: 195, hq: true },
  { name: "Tampa", cx: 778, cy: 380 },
  { name: "Miami", cx: 808, cy: 410 },
  { name: "Orlando", cx: 790, cy: 370 },
  { name: "Jacksonville", cx: 786, cy: 350 },
  { name: "Los Angeles", cx: 162, cy: 290 },
  { name: "San Diego", cx: 178, cy: 305 },
  { name: "San Francisco", cx: 110, cy: 250 },
  { name: "Chicago", cx: 660, cy: 215 },
  { name: "New York", cx: 855, cy: 215 },
];

export function AboutUsMap() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div className="about-usmap-wrap" ref={ref}>
      <svg
        viewBox="0 0 1000 520"
        className="about-usmap"
        aria-label="US map of Rysen client cities"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M 90,250 L 60,210 L 80,160 L 130,130 L 200,110 L 290,90 L 380,80 L 470,70 L 560,80 L 660,90 L 760,100 L 840,120 L 905,160 L 935,210 L 925,260 L 905,300 L 870,335 L 830,365 L 790,395 L 760,420 L 735,440 L 700,455 L 660,455 L 620,440 L 595,420 L 575,395 L 555,370 L 520,355 L 480,350 L 440,355 L 400,360 L 360,365 L 320,360 L 280,350 L 240,335 L 205,320 L 175,300 L 150,285 L 120,275 Z"
          fill="none"
          stroke="var(--line-strong)"
          strokeWidth="1"
        />
        <path
          d="M 770,360 L 790,395 L 810,415 L 815,395 L 805,370 Z"
          fill="none"
          stroke="var(--line-strong)"
          strokeWidth="1"
        />
        {CITIES.map((city, i) =>
          city.hq ? (
            <motion.g
              key={city.name}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={inView ? { opacity: 1, scale: 1 } : undefined}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <circle
                cx={city.cx}
                cy={city.cy}
                r="16"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="0.8"
                className="about-usmap-hq-ring about-usmap-hq-ring-outer"
              />
              <circle
                cx={city.cx}
                cy={city.cy}
                r="10"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1"
                className="about-usmap-hq-ring about-usmap-hq-ring-inner"
              />
              <circle cx={city.cx} cy={city.cy} r="5" fill="var(--accent)" />
              <text
                x={city.cx}
                y={city.cy - 22}
                textAnchor="middle"
                fontFamily="var(--font-inter), system-ui, sans-serif"
                fontSize="10"
                letterSpacing="0.8"
                fill="var(--text)"
              >
                DETROIT HQ
              </text>
            </motion.g>
          ) : (
            <motion.g
              key={city.name}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={inView ? { opacity: 1, scale: 1 } : undefined}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
            >
              <circle
                cx={city.cx}
                cy={city.cy}
                r="3"
                fill="var(--accent)"
                className={`about-usmap-dot about-usmap-dot-${i % 3}`}
              />
              <text
                x={city.cx + 8}
                y={city.cy + 4}
                fontFamily="var(--font-inter), system-ui, sans-serif"
                fontSize="9"
                fill="var(--text-muted)"
              >
                {city.name}
              </text>
            </motion.g>
          )
        )}
      </svg>
    </div>
  );
}
