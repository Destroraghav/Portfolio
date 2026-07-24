import fs from 'node:fs';
import path from 'node:path';

/**
 * Resolve a module's hero image at build time.
 *
 * Convention: drop `public/images/study/<course>/module-<order>.jpg` (or .png/.webp)
 * and it is picked up automatically, no frontmatter edit needed. Returns the public
 * URL if a file exists, otherwise `undefined` so cards/headers fall back gracefully.
 * An explicit frontmatter `heroImage` always wins.
 */
export function moduleHeroImage(
  courseId: string,
  order: number,
  explicit?: string
): string | undefined {
  if (explicit) return explicit;
  for (const ext of ['jpg', 'jpeg', 'png', 'webp']) {
    const rel = `images/study/${courseId}/module-${order}.${ext}`;
    if (fs.existsSync(path.join(process.cwd(), 'public', rel))) return `/${rel}`;
  }
  return undefined;
}
