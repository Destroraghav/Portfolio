// ---------------------------------------------------------------------------
// Central site configuration. Edit these to rebrand / repoint the site.
// ---------------------------------------------------------------------------

export const SITE = {
  /** First name - the brand. */
  firstName: 'Jairaghav',
  /** Surname - used in the wordmark + <title>. */
  lastName: 'Thummala',
  /** Short brand mark shown in the nav. */
  wordmark: 'Jairaghav',
  /** One-line positioning, used in meta + footer. */
  tagline: 'Learning and working in cross-border & Luxembourg tax.',
  /** Live site URL. Keep in sync with `site` in astro.config.mjs. */
  url: 'https://jairaghav.netlify.app',
  description:
    "I'm Jairaghav - an early-career tax person working toward Luxembourg tax. I share tax fundamentals, real projects, and chapter-by-chapter study material.",
  /** Public contact email. */
  email: 'jairaghavthummala@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jairaghavthummala/',
  /** Path to the downloadable CV (drop the PDF in /public/cv/). */
  cvPath: '/cv/Jairaghav-CV.pdf',
  /** Hero portrait (professional B&W headshot). */
  photo: '/images/jairaghav.jpg',
  location: 'Paris, France',
} as const;

export const fullName = `${SITE.firstName}${SITE.lastName ? ' ' + SITE.lastName : ''}`;

/** Primary navigation - the three content pillars + about/contact. */
export const NAV_LINKS: { label: string; href: string }[] = [
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Projects', href: '/projects' },
  { label: 'Study Material', href: '/study' },
  { label: 'Contact', href: '/contact' },
];
