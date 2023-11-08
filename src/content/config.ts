import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    description: z.string(),
    body: z.string().optional(),
  }),
});

const articleCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    body: z.string().optional(),
    date: z.date(),
    tags: z.array(z.string()),
    description: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  article: articleCollection,
};
