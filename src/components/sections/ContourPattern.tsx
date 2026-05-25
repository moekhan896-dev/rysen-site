// Session 43 — ContourPattern.
//
// Faint green topographic contour background for the hero box. Hand-coded
// SVG of nested organic curves that read like elevation lines on a map.
// 14 paths total: 10 main contours stepping outward from a focal cluster,
// plus 4 smaller secondary loops in a separate region for visual rhythm.
//
// Opacity stepping: the inner contours are slightly brighter (~0.16) to
// give the eye a focal beat; the outer contours fade to ~0.04 so the
// pattern never competes with the text it sits behind.
//
// The whole pattern is rendered at viewBox 1080x520 with
// preserveAspectRatio="xMidYMid slice" so it crops/scales gracefully
// inside the hero box at any width while keeping its character.
//
// Style:
//   - stroke: var(--signal, #6EF06E)
//   - stroke-width: 1 (primary) / 0.7 (secondary)
//   - fill: none
//   - per-path opacity 0.04 → 0.18
//
// All animation lives in CSS (a slow drift on the parent SVG); this
// component is otherwise static markup.

export function ContourPattern() {
  return (
    <svg
      viewBox="0 0 1080 520"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <linearGradient id="contour-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--signal-deep, #34C759)" stopOpacity="0.85" />
          <stop offset="100%" stopColor="var(--signal, #6EF06E)" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* Innermost focal contour — slightly brighter */}
      <path
        d="M 540 220 C 620 200, 720 220, 760 270 C 800 320, 760 380, 660 400 C 560 420, 460 400, 420 340 C 380 280, 460 240, 540 220 Z"
        stroke="url(#contour-grad)"
        strokeWidth="1.2"
        opacity="0.18"
      />

      {/* Second ring */}
      <path
        d="M 540 196 C 640 174, 760 196, 810 256 C 860 316, 808 396, 690 422 C 572 448, 444 426, 396 354 C 348 282, 440 216, 540 196 Z"
        stroke="var(--signal, #6EF06E)"
        strokeWidth="1"
        opacity="0.14"
      />

      {/* Third ring */}
      <path
        d="M 540 174 C 660 148, 800 172, 860 244 C 920 316, 860 412, 720 444 C 580 476, 432 452, 372 368 C 312 284, 420 198, 540 174 Z"
        stroke="var(--signal, #6EF06E)"
        strokeWidth="1"
        opacity="0.12"
      />

      {/* Fourth ring */}
      <path
        d="M 540 150 C 680 120, 840 148, 910 232 C 980 316, 912 428, 750 466 C 588 504, 420 478, 348 380 C 276 282, 400 180, 540 150 Z"
        stroke="var(--signal, #6EF06E)"
        strokeWidth="1"
        opacity="0.10"
      />

      {/* Fifth ring */}
      <path
        d="M 540 126 C 700 92, 880 124, 960 220 C 1040 316, 964 444, 780 488 C 596 532, 408 504, 324 392 C 240 280, 380 162, 540 126 Z"
        stroke="var(--signal, #6EF06E)"
        strokeWidth="1"
        opacity="0.08"
      />

      {/* Sixth ring (offset slightly upward for the topographic feel) */}
      <path
        d="M 540 104 C 720 66, 920 100, 1010 208 C 1100 316, 1016 460, 810 510 C 604 560, 396 530, 300 404 C 204 278, 360 144, 540 104 Z"
        stroke="var(--signal, #6EF06E)"
        strokeWidth="0.9"
        opacity="0.07"
      />

      {/* Seventh ring */}
      <path
        d="M 540 84 C 740 42, 960 76, 1060 196 C 1160 316, 1068 476, 840 532 C 612 588, 384 556, 276 416 C 168 276, 340 126, 540 84 Z"
        stroke="var(--signal, #6EF06E)"
        strokeWidth="0.9"
        opacity="0.06"
      />

      {/* Eighth ring */}
      <path
        d="M 540 62 C 760 18, 1000 52, 1110 184 C 1220 316, 1120 492, 870 554 C 620 616, 372 582, 252 428 C 132 274, 320 108, 540 62 Z"
        stroke="var(--signal, #6EF06E)"
        strokeWidth="0.8"
        opacity="0.05"
      />

      {/* Ninth ring */}
      <path
        d="M 540 38 C 780 -8, 1040 28, 1160 172 C 1280 316, 1172 508, 900 576 C 628 644, 360 608, 228 440 C 96 272, 300 90, 540 38 Z"
        stroke="var(--signal, #6EF06E)"
        strokeWidth="0.8"
        opacity="0.04"
      />

      {/* Tenth (outermost) ring */}
      <path
        d="M 540 16 C 800 -34, 1080 4, 1210 160 C 1340 316, 1224 524, 930 598 C 636 672, 348 634, 204 452 C 60 270, 280 72, 540 16 Z"
        stroke="var(--signal, #6EF06E)"
        strokeWidth="0.7"
        opacity="0.035"
      />

      {/* Secondary contour cluster — smaller loops in the upper-left region
          for visual rhythm. Smaller scale, lower stroke weight. */}
      <g transform="translate(170 130)">
        <path
          d="M 0 0 C 30 -14, 70 -8, 86 24 C 102 56, 76 92, 36 98 C -4 104, -38 76, -42 44 C -46 12, -30 14, 0 0 Z"
          stroke="var(--signal, #6EF06E)"
          strokeWidth="0.7"
          opacity="0.12"
        />
        <path
          d="M -14 -16 C 22 -34, 80 -24, 102 16 C 124 56, 96 110, 44 122 C -8 134, -54 100, -62 60 C -70 20, -50 2, -14 -16 Z"
          stroke="var(--signal, #6EF06E)"
          strokeWidth="0.6"
          opacity="0.08"
        />
        <path
          d="M -28 -32 C 14 -54, 90 -40, 118 8 C 146 56, 116 128, 52 144 C -12 160, -68 124, -82 76 C -96 28, -70 -10, -28 -32 Z"
          stroke="var(--signal, #6EF06E)"
          strokeWidth="0.6"
          opacity="0.05"
        />
      </g>

      {/* Tertiary contour cluster — bottom-right region for balance */}
      <g transform="translate(900 410)">
        <path
          d="M 0 0 C 28 -10, 60 -2, 70 22 C 80 46, 60 76, 30 80 C 0 84, -28 60, -32 36 C -36 12, -28 10, 0 0 Z"
          stroke="var(--signal, #6EF06E)"
          strokeWidth="0.7"
          opacity="0.1"
        />
        <path
          d="M -10 -14 C 22 -28, 64 -20, 82 12 C 100 44, 76 88, 36 96 C -4 104, -42 82, -50 50 C -58 18, -42 0, -10 -14 Z"
          stroke="var(--signal, #6EF06E)"
          strokeWidth="0.6"
          opacity="0.06"
        />
      </g>

      {/* A few faint horizontal ridge lines crossing the field, very low
          opacity, to suggest a topographic baseline. */}
      <path
        d="M 0 458 C 200 446, 420 466, 640 452 C 860 438, 1000 458, 1080 442"
        stroke="var(--signal, #6EF06E)"
        strokeWidth="0.6"
        opacity="0.05"
      />
      <path
        d="M 0 486 C 220 478, 460 494, 700 480 C 900 468, 1000 488, 1080 476"
        stroke="var(--signal, #6EF06E)"
        strokeWidth="0.6"
        opacity="0.04"
      />
    </svg>
  );
}
