import { defineCollection } from 'astro:content';
import { ExampleSchema } from '../d';

const collectionExample = defineCollection({
  type: 'data',
  schema: ExampleSchema,
});

export const collections = { collectionExample };
