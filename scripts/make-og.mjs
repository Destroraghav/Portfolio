// Generates the default social-share (Open Graph) image -> public/og-default.png
// Light, on-brand Revolut card. Re-run after changing the name/tagline.
import sharp from 'sharp';

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#ffffff"/>
  <rect x="0" y="0" width="1200" height="630" fill="none" stroke="#e2e2e7" stroke-width="2"/>

  <!-- brand -->
  <rect x="90" y="84" width="56" height="56" rx="13" fill="#494fdf"/>
  <text x="118" y="123" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="700" fill="#ffffff" text-anchor="middle">J</text>
  <text x="166" y="124" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="600" fill="#191c1f">Jairaghav Thummala</text>

  <!-- headline -->
  <text x="90" y="322" font-family="Arial, Helvetica, sans-serif" font-size="82" font-weight="700" fill="#191c1f" letter-spacing="-2">Cross-border &amp;</text>
  <text x="90" y="412" font-family="Arial, Helvetica, sans-serif" font-size="82" font-weight="700" fill="#191c1f" letter-spacing="-2">Luxembourg tax.</text>

  <!-- accent rule -->
  <rect x="92" y="452" width="120" height="6" rx="3" fill="#494fdf"/>

  <!-- sub -->
  <text x="90" y="524" font-family="Arial, Helvetica, sans-serif" font-size="30" fill="#505a63">Tax fundamentals · Projects · Study material</text>
  <text x="90" y="576" font-family="Arial, Helvetica, sans-serif" font-size="23" fill="#8d969e">Learning and working toward a tax role in Luxembourg</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og-default.png');
console.log('Wrote public/og-default.png');
