import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f1115"/>
      <stop offset="100%" stop-color="#1c3d5a"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="64" y="64" width="1072" height="502" rx="28" fill="#17191e" stroke="#2c313a" stroke-width="2"/>
  <text x="100" y="220" font-family="Segoe UI, Arial, sans-serif" font-size="72" font-weight="700" fill="#f1f3f5">Volodymyr</text>
  <text x="100" y="300" font-family="Segoe UI, Arial, sans-serif" font-size="36" font-weight="600" fill="#4dabf7">Full Stack Developer</text>
  <text x="100" y="380" font-family="Segoe UI, Arial, sans-serif" font-size="28" fill="#adb5bd">React · Next.js · Node.js</text>
  <rect x="100" y="440" width="180" height="10" rx="5" fill="#0057b7"/>
  <rect x="280" y="440" width="180" height="10" rx="5" fill="#ffd700"/>
</svg>`;

const out = path.join(__dirname, "..", "public", "og.png");

await sharp(Buffer.from(svg)).png().toFile(out);
console.log("created", out);
