// One-off: optimize the Post 1 hero illustration into public/images/blog/.
// Flat-color art with text → palette PNG keeps strokes crisp at a fraction of size.
import { mkdirSync, copyFileSync } from 'node:fs';

const SRC = 'C:/Users/user/Downloads/ChatGPT Image Jun 24, 2026, 05_39_53 PM.png';
const OUT = 'public/images/blog/01-what-is-tax-hero.png';

mkdirSync('public/images/blog', { recursive: true });

try {
  const sharp = (await import('sharp')).default;
  const info = await sharp(SRC)
    .resize({ width: 1600, withoutEnlargement: true })
    .png({ palette: true, quality: 90, effort: 9 })
    .toFile(OUT);
  console.log(`Optimized -> ${OUT}  (${info.width}x${info.height}, ${(info.size / 1024).toFixed(0)} KB)`);
} catch (err) {
  console.warn('sharp unavailable, copying raw PNG instead:', err.message);
  copyFileSync(SRC, OUT);
  console.log(`Copied -> ${OUT}`);
}
