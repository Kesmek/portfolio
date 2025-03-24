import { file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  loader: file("src/data/projects.json"),
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

const skills = defineCollection({
  loader: file("src/data/skills.json"),
  schema: z.object({
    category: z.string(),
    description: z.string(),
  }),
});

export const collections = { projects, skills };
