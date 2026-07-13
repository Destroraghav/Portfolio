---
name: publish
description: >-
  Convert a Word (.docx) draft into a published, on-brand, SEO-complete page on the
  Jairaghav portfolio (Astro) - as a Blog post (tax fundamentals), a Project, or a
  Study-material lesson/chapter. Use whenever the user wants to publish/upload a .docx
  (or asks to "publish this", "post this", "add this as a blog/project/lesson").
---

# Publish a .docx as a portfolio page

Turns a Word draft into a native, responsive, SEO-complete MDX page in the right content
collection. No downloadable original - the draft becomes a real web page.

## Inputs to gather (ask if not provided)

1. **The .docx path** (e.g. a file in `drafts/` or wherever the user points).
2. **Target section**: `blog` | `project` | `study`.
3. **Metadata** (infer from the doc first, then confirm/ask for gaps):
   - Blog: `title` (Heading 1 / filename), `description` (1 sentence), `category`
     (default "Tax Fundamentals"), `tags` (5-ish), optional `series`/`seriesOrder`,
     `readingTime`, and up to **5 FAQ** items, optional hero `image`.
   - Project: `title`, `description`, `date` (today unless stated), `tags`,
     `status` (`complete` | `in-progress`).
   - Study lesson: `title`, `description`, the **course** it belongs to, and the
     **chapter order** (next number in that course).

## Procedure

### 1. Convert the .docx to Markdown + images
Use the **docx skill** (anthropic-skills:docx) to extract the document's content
(headings, paragraphs, lists, tables, images). If `pandoc` is available it is the
cleanest route:
`pandoc "<draft>.docx" -t gfm --extract-media="public/<section>/<slug>" -o <tmp>.md`
Otherwise use the docx skill / mammoth to get Markdown + extract images.

- **Slug**: kebab-case of the title (e.g. "What Is Tax?" -> `what-is-tax`). This becomes
  the filename and the URL.
- **Images**: put them under `public/<section>/<slug>/` and rewrite image paths in the
  body to absolute `/`-rooted paths (e.g. `/blog/<slug>/figure-1.png`). Optimize large
  images (see `scripts/optimize-hero.mjs` for the sharp pattern; flat art -> palette PNG,
  photos -> JPEG/WebP, target < 500 KB).

### 2. Clean the Markdown body
- Remove any literal heading-anchor syntax. If the source has `## Heading {#id}` and the
  file is **MDX**, `{...}` breaks the MDX parser - render those as HTML headings
  (`<h2 id="id">Heading</h2>`) instead. Astro auto-generates IDs for plain markdown
  headings, so only convert headings that need a *specific* anchor (e.g. a table of contents).
- Strip em/en dashes: run `node scripts/strip-dashes.mjs` after writing the file (the site
  standard is no long dashes).
- Keep tables, lists, bold/italic as Markdown.

### 3. Build frontmatter (match the schema in `src/content.config.ts`)
Wrap frontmatter values that contain an apostrophe in **double quotes** (single-quoted
YAML breaks on `'`).

- **Blog** -> `src/content/blog/<slug>.mdx`:
  `title, description, date (today or given), category, tags[], draft:false`,
  optional `image:{src,alt}`, `series`, `seriesOrder`, `readingTime`, and `faq:[{question,answer}]`
  (max 5 - feeds the FAQPage JSON-LD).
- **Project** -> `src/content/projects/<slug>.mdx`:
  `title, description, date, tags[], status`.
- **Study lesson** -> `src/content/lessons/<slug>.mdx`:
  `title, description, course:"<course-id>", order:<n>`.
  If the course doesn't exist yet, first create `src/content/courses/<course-slug>.mdx`
  with `title, description, exam, order`.

The blog page auto-emits **BlogPosting + FAQPage JSON-LD** and a byline from `author*`
fields in `SITE`/frontmatter - no extra work needed.

### 4. Verify
Set PATH first (Windows): `$env:Path = "C:\Program Files\nodejs;$env:APPDATA\npm;" + $env:Path`
Then `npm run build` - it must end with "Complete!" and no errors. Fix any schema errors
(usually a YAML apostrophe or a missing required field). Optionally preview the new page.

### 5. Deploy
- **If auto-deploy (Git) is set up:** commit + push; the host rebuilds automatically.
- **Otherwise (manual):** tell the user to drag the freshly built `dist/` folder onto their
  Netlify site's **Deploys** tab.

## Notes
- Content is **owner-authored** - never invent or pad the substance. Only convert/format
  what's in the .docx.
- Tax correctness matters - flag anything that looks off for the user to confirm.
