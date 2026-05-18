"use client";

import { useEffect, useRef, useState } from "react";

const DAYS: ReadonlyArray<{
  abbr: string;
  name: string;
  activity: string;
  x: number;
}> = [
  {
    abbr: "M",
    name: "Monday",
    activity: "Data sync. Anomalies flagged.",
    x: 100,
  },
  {
    abbr: "T",
    name: "Tuesday",
    activity: "Strategy review. Each account.",
    x: 350,
  },
  {
    abbr: "W",
    name: "Wednesday",
    activity: "Production. Content, links, technical.",
    x: 600,
  },
  {
    abbr: "T",
    name: "Thursday",
    activity: "QA. Senior review.",
    x: 850,
  },
  {
    abbr: "F",
    name: "Friday",
    activity: "Client reports. Internal retrospective.",
    x: 1100,
  },
];

function getTodayIndex(): number | null {
  const dayOfWeek = new Date().getDay();
  return dayOfWeek >= 1 && dayOfWeek <= 5 ? dayOfWeek - 1 : null;
}

export function WeeklyRail() {
  const [isVisible, setIsVisible] = useState(false);
  const [todayIndex, setTodayIndex] = useState<number | null>(null);
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    setTodayIndex(getTodayIndex());

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 1200 240"
      className="weekly-rail"
      aria-hidden="true"
    >
      {/* Rail line */}
      <line
        x1="100"
        y1="80"
        x2="1100"
        y2="80"
        stroke="#f5c518"
        strokeWidth="2.5"
        strokeDasharray="1000"
        strokeDashoffset={isVisible ? "0" : "1000"}
        style={{
          transition: "stroke-dashoffset 1500ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />

      {/* Day nodes */}
      {DAYS.map((day, i) => {
        const isToday = todayIndex === i;
        const revealAfterMs = 200 + i * 200;
        return (
          <g
            key={day.name}
            opacity={isVisible ? 1 : 0}
            style={{
              transition: `opacity 400ms cubic-bezier(0.22, 1, 0.36, 1)`,
              transitionDelay: isVisible ? `${revealAfterMs}ms` : "0ms",
            }}
          >
            {isToday && (
              <circle
                cx={day.x}
                cy="80"
                r="36"
                fill="none"
                stroke="#f5c518"
                strokeWidth="1"
                opacity="0.3"
              />
            )}
            <circle
              cx={day.x}
              cy="80"
              r="24"
              stroke="#f5c518"
              strokeWidth="2"
              fill={isToday ? "#f5c518" : "#f4f1e8"}
            />
            <text
              x={day.x}
              y="80"
              fontFamily="var(--font-fraunces), Georgia, serif"
              fontWeight="500"
              fontSize="13"
              fill={isToday ? "#0a0a0a" : "#0a0a0a"}
              textAnchor="middle"
              dominantBaseline="central"
            >
              {day.abbr}
            </text>

            <text
              x={day.x}
              y="130"
              fontFamily="var(--font-fraunces), Georgia, serif"
              fontWeight="500"
              fontSize="18"
              fill="#0a0a0a"
              textAnchor="middle"
            >
              {day.name}
            </text>

            <text
              x={day.x}
              y="158"
              fontFamily="var(--font-inter), system-ui, sans-serif"
              fontStyle="italic"
              fontSize="13"
              fill="#44423d"
              textAnchor="middle"
            >
              {day.activity}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function WeeklyRailMobile() {
  const [todayIndex, setTodayIndex] = useState<number | null>(null);
  useEffect(() => {
    setTodayIndex(getTodayIndex());
  }, []);

  return (
    <ol className="weekly-rail-mobile">
      {DAYS.map((day, i) => (
        <li
          key={day.name}
          className={`weekly-rail-mobile__row${todayIndex === i ? " is-today" : ""}`}
        >
          <span className="weekly-rail-mobile__node" aria-hidden="true">
            {day.abbr}
          </span>
          <div className="weekly-rail-mobile__body">
            <span className="weekly-rail-mobile__day">{day.name}</span>
            <span className="weekly-rail-mobile__activity">{day.activity}</span>
          </div>
        </li>
      ))}
    </ol>
  );
}
