/**
 * Page Metadata Configuration
 * 
 * Centralized SEO metadata for all static pages. Single source of truth
 * for titles and descriptions to ensure consistency across the site.
 * 
 * Usage:
 * ```astro
 * ---
 * import BaseLayout from '../layouts/BaseLayout.astro';
 * import SEO from '../components/SEO.astro';
 * import { pagesConfig } from '../pages.config';
 * ---
 * 
 * <BaseLayout>
 *   <SEO 
 *     slot="head"
 *     title={pagesConfig.projects.title}
 *     description={pagesConfig.projects.description}
 *   />
 *   <!-- Page content -->
 * </BaseLayout>
 * ```
 * 
 * @module pages.config
 */

/**
 * Page metadata interface
 */
interface PageMeta {
  /** Page title (used in browser tab and SEO) */
  title: string;
  
  /** Page description (used in meta tags and SEO) */
  description: string;
  
  /** Page heading (displayed as h1, optional - defaults to title) */
  heading?: string;
  
  /** Page intro text (displayed below heading, optional) */
  intro?: string;
}

/**
 * Pages configuration object
 * 
 * Contains metadata for all static pages. Dynamic pages (like individual
 * project or article pages) generate their own metadata from content.
 */
export const pagesConfig = {
  /**
   * Home page (/)
   * Note: Home page uses siteConfig for title/description as it represents the site itself
   */
  home: {
    title: 'Home',
    description: 'Engineering leader specializing in system architecture, technical decision-making, and delivering measurable business impact.',
  },
  
  /**
   * Projects listing page (/projects)
   */
  projects: {
    title: 'Projects - Case Studies',
    description: 'From chess engines to IoT platforms - detailed case studies showcasing technical problem-solving, architectural decisions, and real-world impact.',
    heading: 'Projects',
    intro: 'I build to understand. Each project here represents a deep dive into a problem space - whether it\'s chess engine optimization, distributed systems, or scalable IoT platforms. These case studies document the challenges, technical decisions, and lessons learned.',
  },
  
  /**
   * Decisions listing page (/decisions)
   */
  decisions: {
    title: 'Decisions - Architectural & Technical Choices',
    description: 'A log of architectural and technical decisions, documenting the context, alternatives considered, and reasoning behind key engineering choices.',
    heading: 'Decisions',
    intro: 'A transparent log of architectural and technical decisions I\'ve made throughout my career. Each entry documents the context, alternatives considered, and the reasoning behind the choice.',
  },
  
  /**
   * Journey timeline page (/journey)
   */
  journey: {
    title: 'Journey - Learning Through Building',
    description: 'My path from technical high school to software engineer - a story of curiosity, deliberate learning, and understanding systems through hands-on exploration.',
    heading: 'Journey',
    intro: 'My career is driven by curiosity. From learning fundamentals at a technical high school in Lodève, through university in Montpellier, to building production systems at Alemca and personal projects like Aspira - each step built on deep understanding through hands-on experience.',
  },
  
  /**
   * Writing/blog listing page (/writing)
   */
  writing: {
    title: 'Writing - Technical Insights & Philosophy',
    description: 'Articles about software engineering, code quality, debugging, learning strategies, and the philosophy behind building reliable systems.',
    heading: 'Writing',
    intro: 'I write about what I learn. From debugging complex systems to understanding why clean code matters, these articles capture insights from building software and thinking deeply about engineering practices.',
  },

  /**
   * Speaking engagements page (/speaking)
   */
  speaking: {
    title: 'Speaking - Talks & Presentations',
    description: 'Conference talks, meetup presentations, podcast appearances, and workshops on software engineering, architecture, and technical leadership.',
    heading: 'Speaking',
    intro: 'I regularly speak at conferences, meetups, and on podcasts about software architecture, engineering practices, and technical leadership. Here\'s a collection of my talks and presentations.',
  },
  
  /**
   * Uses/tools page (/uses)
   */
  uses: {
    title: 'Uses - Development Setup & Philosophy',
    description: 'My development tools, tech stack, and philosophy on choosing technology - favoring proven solutions over hype.',
    heading: 'Uses',
    intro: 'I focus on depth over breadth. You\'ll see only Java and Python in my tech stack - not because I don\'t know other languages, but because I believe in true expertise over resume padding. I know C, JavaScript, and others well enough, but mastering two languages beats being mediocre in ten. My setup includes a development server with Docker, standard tooling that works reliably, and a philosophy of choosing technology based on actual needs rather than trends.',
  },
  
  /**
   * Contact page (/contact)
   */
  contact: {
    title: 'Contact - Get in Touch',
    description: 'Get in touch to discuss opportunities, collaborations, or technical challenges.',
    heading: 'Let\'s Talk',
  },
} as const;

/**
 * Type export for the pages configuration
 */
export type PagesConfig = typeof pagesConfig;

/**
 * Type export for a single page metadata
 */
export type PageConfig = PageMeta;
