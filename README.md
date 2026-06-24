# Jairaghav — Tax & Cross-border Finance Portfolio

A fast, dark, recruiter-facing portfolio + blog built with **Astro** and a **Linear-inspired**
design system. Repositions the old `analysewithjai.com` (WordPress) toward **Luxembourg tax,
transfer pricing, and fund tax**, with proof-of-work samples as the centrepiece.

Built per the approved plan in `~/.claude/plans/claude-code-prompt-linear-blum.md`.

---

## Run it locally

> Requires Node.js (installed via winget as `OpenJS.NodeJS.LTS`). If `node` isn't found, open a
> new terminal so the updated PATH is picked up.

```bash
npm install      # once
npm run dev      # dev server at http://localhost:4321
npm run build    # production build -> dist/
npm run preview  # preview the built site
```

---

## How the site is structured

```
src/
  consts.ts              # ⭐ site name, tagline, email, LinkedIn, CV path, nav — edit here to rebrand
  content.config.ts      # schemas for the three content collections
  styles/global.css      # the Linear design tokens (colors, type, radius) + prose styling
  layouts/BaseLayout.astro
  components/             # Nav, Footer, Button, cards, ArtifactPanel, etc.
  pages/                  # index, about, contact, work/*, insights/*, archive/*, 404
  content/
    work/                # work samples (MDX)  — the proof
    insights/            # blog posts (MD/MDX) — "Analyse with Jai"
    archive/             # legacy M&A / ESG posts (demoted)
public/
  cv/Jairaghav-CV.pdf    # ⚠ placeholder — replace with the real CV
  favicon.svg, og-default.svg, _redirects, robots.txt
```

### The design system
All colors/type/radius live as Tailwind v4 theme tokens in `src/styles/global.css` (`@theme`
block). Near-black canvas `#010102`, four-step surface ladder, scarce lavender `#5e6ad2`, Inter +
JetBrains Mono. Don't hardcode hex values in components — use the token utilities
(`bg-surface-1`, `text-ink`, `border-hairline`, `text-primary`, …).

---

## Adding content

You said you'll **mostly ask Claude** to add content — so the workflow is: tell Claude what you
want, and it edits/creates the right Markdown file. To do it yourself:

**A new Tax Insight** — create `src/content/insights/<slug>.md`:
```yaml
---
title: 'Your title'
description: 'One-sentence summary.'
category: 'Pillar Two'   # or Transfer Pricing | Luxembourg Fund Tax | US / Cross-border
pubDate: 2026-06-01
draft: false             # true hides it from the production build
---
Body in Markdown…
```

**A new Work sample** — create `src/content/work/<slug>.mdx`:
```yaml
---
title: '…'
summary: '…'
status: 'published'      # or 'placeholder' for a titled outline
category: 'Transfer Pricing'
skills: ['TNMM', 'Benchmarking']
order: 1
featured: true
# deliverablePdf: '/work/<slug>.pdf'   # optional downloadable, printable PDF
---
```
> **Always** keep work samples illustrative — fictional, anonymised entities and figures. Nothing
> from confidential client work.

**YAML gotcha:** if a value contains an apostrophe (`arm's`, `Motors'`), wrap it in **double**
quotes, not single.

---

## Deploy (Cloudflare Pages — free)

1. Push this repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Build settings: **Build command** `npm run build`, **Output directory** `dist`.
4. Add your custom domain in Pages → Custom domains.
5. Point DNS for the domain at Cloudflare (registrar nameservers or a CNAME).

`public/_redirects` already maps the two old WordPress post URLs to the new archive pages.

---

## Open items before launch (need your input)

1. **Domain + surname** — set `SITE.lastName`, `SITE.url`, `SITE.wordmark` in `src/consts.ts`, and
   `site` in `astro.config.mjs`. (e.g. `jairaghav.com` / `.tax` / `.lu`.)
2. **Real CV** — replace `public/cv/Jairaghav-CV.pdf` (currently a placeholder). Keep it a light,
   printable PDF.
3. **Languages** — confirm EN/FR/(DE) levels in `src/pages/about.astro` (marked `TODO(confirm)`).
4. **Contact details** — set real `email` and `linkedin` in `src/consts.ts`.
5. **Old domain** — keep `analysewithjai.com` registered and 301-redirect it to the new domain.
6. **Full archive migration** — the two legacy posts are present as excerpt stubs; pull full bodies
   from the old site's WordPress REST API (`/wp-json/wp/v2/posts`) if you want the complete text.

## Content roadmap (you + Claude)

- Flagship work samples **published**: Transfer Pricing memo, Pillar Two impact analysis.
- **Placeholders to fill**: US R&D credit case study, Luxembourg fund-tax note.
- Starter insights published; keep adding, and repurpose each into a LinkedIn post.
- **YouTube/community: deferred** until after the role is secured (per the plan).
