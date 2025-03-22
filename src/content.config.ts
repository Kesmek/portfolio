import { file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  loader: file("src/projects/projects.json"),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      image: image(),
      imageAlt: z.string(),
      tags: z.array(z.string()),
      github: z.string().url().optional(),
      website: z.string().url().optional(),
    }),
});

export const collections = { projects };
