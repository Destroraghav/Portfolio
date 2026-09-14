import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * BLOG - tax fundamentals / basic concepts. Published from .docx via /publish.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: () =>
    z
      .object({
        title: z.string(),
        description: z.string(),
        // Accept either `pubDate` or `date`; normalized in the transform below.
        pubDate: z.coerce.date().optional(),
        date: z.coerce.date().optional(),
        updatedDate: z.coerce.date().optional(),
        lastModified: z.coerce.date().optional(),
        // E-E-A-T author signals (named, credentialed author for AI citations).
        author: z.string().optional(),
        authorUrl: z.string().optional(),
        authorTitle: z.string().optional(),
        category: z.string().optional(),
        topic: z.string().default('Tax'),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
        readingTime: z.string().optional(),
        series: z.string().optional(),
        seriesOrder: z.number().optional(),
        heroImage: z.string().optional(),
        image: z
          .object({
            src: z.string(),
            alt: z.string().default(''),
            heroPrompt: z.string().optional(),
          })
          .optional(),
        schema: z
          .object({
            type: z.string().optional(),
            articleSection: z.string().optional(),
            keywords: z.string().optional(),
          })
          .optional(),
        faq: z
          .array(z.object({ question: z.string(), answer: z.string() }))
          .default([]),
      })
      // Normalize so pages can always read `pubDate` / `updatedDate`.
      .transform((data) => ({
        ...data,
        pubDate: data.pubDate ?? data.date ?? new Date(),
        updatedDate: data.updatedDate ?? data.lastModified,
      })),
});

/**
 * PROJECTS - real work, uploaded over time.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      status: z.enum(['in-progress', 'complete']).default('complete'),
      draft: z.boolean().default(false),
      heroImage: z.string().optional(),
      // Optional rich-project fields. When present, the detail page renders a
      // full case-study masthead (meta row, at-a-glance box, download, skills).
      // Absent -> the simple article layout still applies.
      summary: z.string().optional(), // index card + card teaser
      type: z.string().optional(), // e.g. "Technical project"
      featured: z.boolean().default(false),
      order: z.number().default(99), // lower sorts first among featured
      companion: z.object({ href: z.string(), label: z.string() }).optional(),
      skills: z.array(z.string()).default([]),
      downloadFile: z.string().optional(), // public path to the document
      downloadName: z.string().optional(), // filename shown on save
      downloadMeta: z.string().optional(), // e.g. "PDF · 44 pages"
      meta: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
      atAGlance: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
      related: z
        .object({ href: z.string(), label: z.string(), note: z.string().optional() })
        .optional(),
      seoTitle: z.string().optional(),
      seoDescription: z.string().optional(),
    }),
});

/**
 * COURSES - Study Material. A course groups ordered lessons (see `lessons`).
 * e.g. exam: 'Enrolled Agent'. Listed by `order`.
 */
const courses = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/courses' }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      exam: z.string().optional(), // e.g. "Enrolled Agent", "Corporate Finance"
      hook: z.string().optional(), // one-line teaser for the course landing hero
      order: z.number().default(99),
      draft: z.boolean().default(false),
      heroImage: z.string().optional(),
    }),
});

/**
 * MODULES - a course is split into ordered modules; each module groups lessons.
 * `course` = course id · `slug` = URL segment · `status` gates published vs coming-soon.
 */
const modules = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/modules' }),
  schema: () =>
    z.object({
      course: z.string(),
      slug: z.string(),
      order: z.number(),
      title: z.string(),
      summary: z.string(),
      status: z.enum(['published', 'coming-soon']).default('coming-soon'),
      draft: z.boolean().default(false),
      // Optional module hero art at public/images/study/transfer-pricing/module-<n>.jpg.
      // Falls back to a numbered tile when absent, so cards render fine before art lands.
      heroImage: z.string().optional(),
    }),
});

/**
 * LESSONS - a lesson belongs to a `module` (by slug) within a `course`. `slug` is
 * the URL segment; `order` sets position within the module (contents list + prev/next).
 */
const lessons = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/lessons' }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      course: z.string(), // matches a courses entry id
      module: z.string(), // parent module slug
      slug: z.string(), // URL segment within the module
      order: z.number(),
      tldr: z.string(),
      readTimeMinutes: z.number().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog, projects, courses, modules, lessons };
