# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal **portfolio + learning hub** for Jairaghav, an early-career tax person working toward a
Luxembourg tax role. Static site, **Astro 5 + Tailwind v4**, with a **Revolut-inspired LIGHT design
system**. It has three content pillars — **Blog** (tax fundamentals), **Projects** (real work), and
**Study Material** (chapter-by-chapter courses, e.g. Enrolled Agent prep). The owner writes all
content himself; the intended workflow is drafting in Word and publishing via a `/publish` skill
(see "Content workflow"). Full background + phased plan live in
`~/.claude/plans/claude-code-prompt-linear-blum.md` (note: the filename is historical — the current
plan in that file is "v2 Revolut-light", not the original Linear one).

## Commands

```bash
npm install        # once
npm run dev        # dev server -> http://localhost:4321
npm run build      # static build -> dist/ (also the CI/deploy command)
npm run preview    # serve the built dist/
npm run check      # astro check (type-check .astro + content schemas)
node scripts/make-placeholder-cv.mjs   # regenerate the placeholder CV PDF
```

There are no unit tests; **`npm run build` is the verification gate** — it fails on content-schema
violations and broken collection references, so always run it after editing content or schemas.
(Empty collections log an info line "collection … is empty" — that is not a failure.)

**Windows PATH gotcha:** Node was installed via winget. A freshly-spawned shell often doesn't have
it on PATH — prepend `C:\Program Files\nodejs` (and `%APPDATA%\npm`) to `$env:Path`, or open a new
terminal.

**Renaming files in `public/` while `npm run dev` runs** can throw an EBUSY watcher rejection on
Windows (Vite holds a lock). Restart the dev server if it gets stuck.

**Visual checks:** `.claude/launch.json` defines an `astro-dev` server for the Claude Preview MCP
tools (`preview_start` → `preview_screenshot`/`preview_inspect`/`preview_resize`). Use
`preview_inspect` to verify exact token colors — screenshots aren't reliable for that.

## Architecture — the big picture

**Single source of config: `src/consts.ts`.** Brand name, surname, tagline, domain (`SITE.url`),
email, LinkedIn, CV path, hero **photo** path, and the primary nav array all live here. Rebranding
or repointing the domain = editing this file (+ the duplicated `site` in `astro.config.mjs`).

**The design system is token-driven and lives entirely in `src/styles/global.css`** as Tailwind v4
`@theme` variables. It is a **Revolut LIGHT** system: white `canvas` (`#ffffff`), `surface-soft`
(`#f4f4f4`), warm `ink` (`#191c1f`) / `body` text, and a **scarce cobalt-violet `primary`
(`#494fdf`)** — used only on the brand mark, a "featured" badge, or the odd accent, never as a
general theme. The file also defines the `.t-*` type scale (`t-display-xl`, `t-heading-md`,
`t-eyebrow`, …) — Inter, with **display sizes tightened** (negative letter-spacing, line-height ~1)
to emulate Aeonik Pro — and the `.prose` styling for article/lesson bodies. **Components never
hardcode hex** — they use token utilities (`bg-canvas`, `text-ink`, `border-hairline`,
`bg-surface-soft`, `text-primary`).

**The light/dark band rhythm is core.** The site is mostly light, punctuated by **true-black
(`#000000`) full-bleed bands** — the home closing CTA and the footer. On light, the primary CTA is
a **black pill** (`<Button variant="dark">`); on the black bands it inverts to a **white pill**
(`variant="white"`). `Button.astro` carries all pill variants (`dark`/`white`/`soft`/`outline`/
`outline-dark`/`primary`); everything is `rounded-full`, cards are `rounded-lg` (20px). No drop
shadows — depth comes from the band switches and the `#fff`/`#f4f4f4` surface split.

**Four content collections** (`src/content.config.ts`, Astro Content Layer `glob` loaders over
`src/content/<name>/`):
- `blog` — tax-fundamentals posts.
- `projects` — real work; `status: 'in-progress' | 'complete'`.
- `courses` — Study Material. A course (`exam`, `order`) groups lessons.
- `lessons` — chapters; each has a **`course`** field (matching a courses entry id) and an `order`.
  The study pages join them: `lessons` are filtered by `course` and sorted by `order` to build the
  course contents list and the per-lesson prev/next navigation.

`draft: true` hides an entry from the **production** build only (dev still shows it; see the
`import.meta.env.PROD` filters in the listing/`getStaticPaths` pages).

**Page → content wiring.** `[...slug].astro` (blog, projects) and `study/[course]/[lesson].astro`
use `getStaticPaths` + `render(entry)`. `BaseLayout.astro` owns all `<head>`/SEO/OG and the
Nav/Footer shell; pages supply `title`/`description`/`article`.

## Content workflow

Content is **authored by the owner, not fabricated** — never invent blog posts, projects, or
lessons. The intended pipeline: the owner drafts in **Word (.docx)**, and a **`/publish` skill**
(planned) converts it to a styled, responsive, SEO-complete MDX page in the right collection
(images extracted to `public/<section>/<slug>/`), with **no downloadable original**. Until that
skill exists, content entries are MDX files added directly under `src/content/<collection>/`.

## Conventions that bite

- **YAML apostrophes:** a frontmatter value containing `'` (e.g. `arm's`, `Motors'`) **must** use
  double quotes. Single-quoted YAML with an apostrophe breaks the build (backslash does NOT escape
  in single-quoted YAML).
- **Don't reintroduce dark styling or hardcoded hex.** Match the light token system; keep cobalt
  scarce; reach for a black band only for the home close + footer.
- **Tax correctness matters** for this audience — fact-check Pillar Two / transfer-pricing /
  Luxembourg claims before treating content as done.

## Deploy

Target is **Cloudflare Pages** (free): build command `npm run build`, output dir `dist`. The old
domain should 301 to the new one at the DNS level. Pre-launch open items (final domain, surname,
real CV at `public/cv/Jairaghav-CV.pdf`, real email/LinkedIn) live in `src/consts.ts` / `README.md`.

> Note: `README.md`, `public/_redirects`, and `public/og-default.svg` still reference the previous
> (v1) structure and need updating to match the current pillars — pending the Phase E cleanup.
