// Replaces em dashes (—) and en dashes (–) with a normal hyphen across all
// source + content files, so no "long dashes" appear on the site.
import { readdirSync, statSync, readFileSync, writeFileSync } from 'node:fs';
import { join, extname } from 'node:path';

const exts = new Set(['.astro', '.ts', '.mjs', '.mdx', '.md']);
const extra = ['public/robots.txt'];
const changed = [];

function processFile(p) {
  const orig = readFileSync(p, 'utf8');
  // Collapse " — " / " – " to " - " and any bare em/en dash to "-".
  const next = orig.replace(/—/g, '-').replace(/–/g, '-');
  if (next !== orig) {
    writeFileSync(p, next);
    changed.push(p);
  }
}
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (exts.has(extname(name))) processFile(p);
  }
}

walk('src');
for (const f of extra) processFile(f);

console.log(`Cleaned long dashes in ${changed.length} file(s):`);
changed.forEach((c) => console.log('  -', c));
