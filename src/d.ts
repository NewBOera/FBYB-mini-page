import { z } from 'zod';

export const ExampleSchema = z.object({
  prop1: z.string().optional(),
  prop2: z.array(z.string()),
});
