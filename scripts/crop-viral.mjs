// Session 47 — crop the five attached IG screenshots into the
// post images (chrome stripped) for the viral carousel.
//
// Each source is a full iPhone screenshot at ~1170 wide by ~2532 tall
// (3x retina). We detect dimensions and crop a region that excludes
// the status bar, top nav, and bottom comment/action UI.

import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const ROOT =
  "C:/Users/Arsalan K/AppData/Roaming/Claude/local-agent-mode-sessions/d0c125e2-db77-44b4-91af-f903245ef719/ab7e01b0-13e2-4e45-b555-2996c6fba25a/agent/local_ditto_ab7e01b0-13e2-4e45-b555-2996c6fba25a/uploads";

const OUT = "public/assets/viral";

await mkdir(OUT, { recursive: true });

const jobs = [
  // Quattro Labs — Aventador SVJ in lobby. Strip username header,
  // bottom action bar, and the right-side action icons overlay.
  {
    src: "03706192-IMG_0197.png",
    dst: "quattro-aventador.jpg",
    cropFraction: { topPct: 0.16, bottomPct: 0.22, leftPct: 0.02, rightPct: 0.02 },
  },
  // Quattro Labs — Canteen at Midtown. Same chrome strip.
  {
    src: "9fcfb570-IMG_0196.png",
    dst: "quattro-canteen.jpg",
    cropFraction: { topPct: 0.13, bottomPct: 0.28, leftPct: 0.04, rightPct: 0.14 },
  },
  // The Honest Maids — 30-mins reel. Strip top nav + bottom UI.
  {
    src: "13927f35-IMG_0198.png",
    dst: "honest-maids-30mins.jpg",
    cropFraction: { topPct: 0.19, bottomPct: 0.21, leftPct: 0.02, rightPct: 0.02 },
  },
  // Madison Clark — "mogged" two-image post (vertical pair). Drop top
  // bar (back arrow + camera icon) + bottom comment UI + right-side
  // action icons that overlay the second image.
  {
    src: "4929af10-IMG_0202.png",
    dst: "madison-mogged.jpg",
    cropFraction: { topPct: 0.12, bottomPct: 0.26, leftPct: 0.02, rightPct: 0.16 },
  },
  // Madison Clark — PROFILE GRID. Keep the reels-grid for spotlight.
  // Drop status bar + username + tabs row on top, very little on bottom.
  {
    src: "c9b77e6d-IMG_0199.png",
    dst: "madison-profile-grid.jpg",
    cropFraction: { topPct: 0.185, bottomPct: 0.04, leftPct: 0.0, rightPct: 0.0 },
  },
  // Quattro Labs — "Motor City — Welcome to #QuattroLabs". Model + car.
  // Strip top header + bottom caption/action UI + right action sidebar.
  {
    src: "cace2de4-IMG_0191.png",
    dst: "quattro-motor-city.jpg",
    cropFraction: { topPct: 0.07, bottomPct: 0.23, leftPct: 0.04, rightPct: 0.14 },
  },
  // Session 49 — three FEED-GRID screenshots. Crop status bar + tabs row
  // off the top, IG tab bar off the bottom; keep the full 3-col grid.
  {
    src: "79963b62-IMG_0206.png",
    dst: "honest-plumbers-feed.jpg",
    cropFraction: { topPct: 0.155, bottomPct: 0.03, leftPct: 0.0, rightPct: 0.0 },
  },
  {
    src: "4a5a6d91-IMG_0205.png",
    dst: "honest-maids-feed.jpg",
    cropFraction: { topPct: 0.155, bottomPct: 0.03, leftPct: 0.0, rightPct: 0.0 },
  },
  {
    src: "9cefacc3-IMG_0204.png",
    dst: "quattro-feed.jpg",
    cropFraction: { topPct: 0.155, bottomPct: 0.03, leftPct: 0.0, rightPct: 0.0 },
  },
];

for (const job of jobs) {
  const srcPath = path.join(ROOT, job.src);
  const meta = await sharp(srcPath).metadata();
  const W = meta.width;
  const H = meta.height;
  const { topPct, bottomPct, leftPct, rightPct } = job.cropFraction;
  const left = Math.round(W * leftPct);
  const top = Math.round(H * topPct);
  const width = Math.round(W * (1 - leftPct - rightPct));
  const height = Math.round(H * (1 - topPct - bottomPct));

  const outPath = path.join(OUT, job.dst);
  await sharp(srcPath)
    .extract({ left, top, width, height })
    .resize({ width: 1000, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(outPath);
  console.log(
    `OK  ${job.dst.padEnd(28)} ${W}x${H} -> crop ${width}x${height}`
  );
}
console.log("Done.");
