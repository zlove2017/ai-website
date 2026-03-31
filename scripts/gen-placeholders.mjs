import { writeFileSync } from "fs";

function makeSvg(w, h, label, accent = "#00e5ff", seed = 0) {
  const lines = [];
  for (let i = 0; i < 8; i++) {
    const x1 = ((seed + i * 137) % w);
    const y1 = ((seed + i * 89) % h);
    const x2 = ((seed + i * 211 + 300) % w);
    const y2 = ((seed + i * 173 + 200) % h);
    lines.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${accent}" opacity="0.07" stroke-width="0.8"/>`);
  }
  const nodes = [];
  for (let i = 0; i < 6; i++) {
    const cx = ((seed + i * 251 + 100) % (w - 100)) + 50;
    const cy = ((seed + i * 167 + 50) % (h - 100)) + 50;
    const r = 3 + (i % 3);
    nodes.push(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${accent}" opacity="0.2"/>`);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="#0a1120"/>
  <pattern id="g${seed}" width="40" height="40" patternUnits="userSpaceOnUse">
    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${accent}" opacity="0.05" stroke-width="0.5"/>
  </pattern>
  <rect width="${w}" height="${h}" fill="url(#g${seed})"/>
  ${lines.join("\n  ")}
  ${nodes.join("\n  ")}
  <text x="${w/2}" y="${h/2}" text-anchor="middle" font-family="monospace" font-size="14" fill="${accent}" opacity="0.25">${label}</text>
</svg>`;
}

const images = [
  { path: "solutions/smart-factory.svg", label: "SMART FACTORY", w: 800, h: 500, seed: 42 },
  { path: "solutions/energy-monitoring.svg", label: "ENERGY MONITORING", w: 800, h: 500, seed: 77 },
  { path: "solutions/predictive-maintenance.svg", label: "PREDICTIVE MAINTENANCE", w: 800, h: 500, seed: 113 },
  { path: "cases/steel-factory.svg", label: "STEEL // SMART FACTORY", w: 800, h: 500, seed: 200, accent: "#ff6b35" },
  { path: "cases/chemical-park.svg", label: "CHEMICAL // ENERGY", w: 800, h: 500, seed: 250, accent: "#ff6b35" },
  { path: "cases/cement-plant.svg", label: "CEMENT // MAINTENANCE", w: 800, h: 500, seed: 300, accent: "#ff6b35" },
  { path: "cases/steel-1.svg", label: "DETAIL 01", w: 800, h: 500, seed: 310 },
  { path: "cases/steel-2.svg", label: "DETAIL 02", w: 800, h: 500, seed: 320 },
  { path: "cases/steel-3.svg", label: "DETAIL 03", w: 800, h: 500, seed: 330 },
  { path: "cases/chemical-1.svg", label: "DETAIL 01", w: 800, h: 500, seed: 340 },
  { path: "cases/chemical-2.svg", label: "DETAIL 02", w: 800, h: 500, seed: 350 },
  { path: "cases/cement-1.svg", label: "DETAIL 01", w: 800, h: 500, seed: 360 },
  { path: "cases/cement-2.svg", label: "DETAIL 02", w: 800, h: 500, seed: 370 },
];

const base = "F:/ai-website/public/images";
for (const img of images) {
  const svg = makeSvg(img.w, img.h, img.label, img.accent || "#00e5ff", img.seed);
  writeFileSync(`${base}/${img.path}`, svg);
  console.log(`Created ${img.path}`);
}
