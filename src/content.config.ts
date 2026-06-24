import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * BLOG — tax fundamentals / basic concepts. Published from .docx via /publish.
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
 * PROJECTS — real work, uploaded over time.
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
    }),
});

/**
 * COURSES — Study Material. A course groups ordered lessons (see `lessons`).
 * e.g. exam: 'Enrolled Agent'. Listed by `order`.
 */
const courses = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/courses' }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      exam: z.string().optional(), // e.g. "Enrolled Agent", "Corporate Finance"
      order: z.number().default(99),
      draft: z.boolean().default(false),
      heroImage: z.string().optional(),
    }),
});

/**
 * LESSONS — chapters within a course. `course` is the course entry id (slug);
 * `order` sets chapter position (drives the contents list + prev/next nav).
 */
const lessons = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/lessons' }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      course: z.string(), // matches a courses entry id
      order: z.number(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog, projects, courses, lessons };
