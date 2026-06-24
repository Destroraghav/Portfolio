// Generates a minimal, valid one-page placeholder PDF at public/cv/Jairaghav-CV.pdf.
// Replace that file with the real CV before launch. Offsets are computed so the
// xref table is correct regardless of content length.
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, '../public/cv/Jairaghav-CV.pdf');

const lines = [
  'Jairaghav  -  CV (placeholder)',
  '',
  'This is a placeholder. Replace public/cv/Jairaghav-CV.pdf with the real CV.',
  'Target: Luxembourg tax role (corporate tax / transfer pricing / fund tax), Dec 2026.',
];

// Build a simple text content stream.
const text = lines
  .map((l, i) => `BT /F1 ${i === 0 ? 20 : 12} Tf 72 ${740 - i * 26} Td (${l.replace(/[()\\]/g, '\\$&')}) Tj ET`)
  .join('\n');

const objects = [
  '<< /Type /Catalog /Pages 2 0 R >>',
  '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
  '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>',
  `<< /Length ${text.length} >>\nstream\n${text}\nendstream`,
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
];

let pdf = '%PDF-1.4\n';
const offsets = [];
objects.forEach((body, i) => {
  offsets.push(pdf.length);
  pdf += `${i + 1} 0 obj\n${body}\nendobj\n`;
});

const xrefStart = pdf.length;
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
offsets.forEach((o) => {
  pdf += `${String(o).padStart(10, '0')} 00000 n \n`;
});
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, pdf, 'latin1');
console.log('Wrote', out, `(${pdf.length} bytes)`);
