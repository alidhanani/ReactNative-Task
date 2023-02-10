import { z } from 'zod';

export const Task = z.object({
  Title: z.string().min(2),
  Description: z.string().min(2),
  Time: z.string(),
});

export type Task = z.infer<typeof Task>;
