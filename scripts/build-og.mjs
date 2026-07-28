import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

/**
 * Rasterise the course share cards (SVG -> 1200x630 PNG) into public/.
 * Social platforms don't render SVG og:images, so we commit the PNG.
 * Regenerate after editing a card:  npm run og
 *
 * Note: SVG text renders with whatever sans the host has (Arial on Windows,
 * Liberation/DejaVu Sans on Linux CI) via the font-family fallback stack.
 */
const here = dirname(fileURLToPath(import.meta.url));

const cards = [{ svg: 'og/transfer-pricing.svg', png: '../public/og-transfer-pricing.png' }];

for (const card of cards) {
  const svg = readFileSync(join(here, card.svg));
  const out = join(here, card.png);
  await sharp(svg, { density: 144 }).resize(1200, 630, { fit: 'fill' }).png().toFile(out);
  console.log('wrote', out);
}
