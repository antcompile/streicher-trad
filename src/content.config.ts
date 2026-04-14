import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const i18nString = z.object({
  en: z.string(),
  fr: z.string(),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: i18nString,
    date: z.string(),
    author: z.string(),
    description: i18nString,
    category: z.enum([
      'prevoyance',
      'epargne',
      'retraite',
      'patrimoine',
      'fiscalite',
    ]),
    tags: z.array(z.string()),
  }),
});

export const collections = { blog };
