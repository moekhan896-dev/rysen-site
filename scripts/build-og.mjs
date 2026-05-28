// Session 52 — build the default OG image at /public/og-default.png.
//
// 1200x630, cool-canvas background, big RYSEN wordmark + green
// triangle, tagline, subtle dot grid. Generated from inline SVG via
// sharp so it stays in repo and ships with every deploy.

import sharp from "sharp";
import { mkdir } from "node:fs/promises";

await mkdir("public", { recursive: true });

const W = 1200;
const H = 630;

// Background dot grid — render dots as SVG circles.
const dotGrid = [];
for (let y = 60; y < H; y += 36) {
  for (let x = 60; x < W; x += 36) {
    dotGrid.push(
      `<circle cx="${x}" cy="${y}" r="1.4" fill="#0C0D0F" opacity="0.06"/>`
    );
  }
}

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FAFBFC"/>
      <stop offset="100%" stop-color="#F0F1F2"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bgGrad)"/>
  ${dotGrid.join("\n  ")}

  <!-- Subtle ambient green glow top-right -->
  <circle cx="980" cy="120" r="220" fill="#6EF06E" opacity="0.08"/>

  <!-- Brand mark + wordmark, vertically centered -->
  <g transform="translate(100, 240)">
    <!-- Triangle -->
    <polygon points="0,0 70,0 0,70" fill="#6EF06E"/>
    <!-- Wordmark -->
    <text x="100" y="56"
          font-family="Geist, -apple-system, system-ui, sans-serif"
          font-size="92"
          font-weight="800"
          fill="#0C0D0F"
          letter-spacing="-4">RYSEN</text>
  </g>

  <!-- Tagline -->
  <text x="100" y="400"
        font-family="Geist, -apple-system, system-ui, sans-serif"
        font-size="36"
        font-weight="500"
        fill="#1A1C20"
        letter-spacing="-1.2">A search engineering agency</text>
  <text x="100" y="446"
        font-family="Geist, -apple-system, system-ui, sans-serif"
        font-size="36"
        font-weight="500"
        fill="#1A1C20"
        letter-spacing="-1.2">for law firms and medical practices.</text>

  <!-- Bottom strip -->
  <rect x="100" y="540" width="120" height="3" fill="#6EF06E"/>
  <text x="100" y="578"
        font-family="Geist, -apple-system, system-ui, sans-serif"
        font-size="18"
        font-weight="700"
        fill="#6B6968"
        letter-spacing="3">RANK #1 ON GOOGLE · CHATGPT · PERPLEXITY · GEMINI</text>
</svg>
`;

await sharp(Buffer.from(svg))
  .png({ quality: 95 })
  .toFile("public/og-default.png");
console.log("Wrote public/og-default.png (1200x630)");
