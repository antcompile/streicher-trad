import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const i18nString = z.object({
  en: z.string(),
  ar: z.string(),
  fr: z.string(),
});

const i18nStringArray = z.object({
  en: z.array(z.string()),
  ar: z.array(z.string()),
  fr: z.array(z.string()),
});

const products = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/products' }),
  schema: z.object({
    id: z.string(),
    name: i18nString,
    price_usd: z.number(),
    weight_kg: z.number(),
    description: i18nString,
    tasting_notes: i18nString,
    flora_source: i18nString,
    season: z.string(),
    in_stock: z.boolean(),
    includes_spoon: z.boolean(),
    image: z.string(),
    badge: z.string().nullable(),
  }),
});

const tours = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/tours' }),
  schema: z.object({
    id: z.string(),
    name: i18nString,
    tagline: i18nString,
    price_display: i18nString,
    price_usd: z.number(),
    duration: z.string(),
    max_group: z.number(),
    availability: i18nString,
    includes: i18nStringArray,
    description: i18nString,
    image: z.string(),
    gallery: z.array(z.string()),
    badge: z.string().nullable(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: i18nString,
    date: z.string(),
    author: z.string(),
    description: i18nString,
    image: z.string(),
    tags: z.array(z.string()),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    location: i18nString,
    quote: i18nString,
    type: z.enum(['product', 'tour']),
    rating: z.number(),
    date: z.string(),
  }),
});

export const collections = { products, tours, blog, testimonials };
