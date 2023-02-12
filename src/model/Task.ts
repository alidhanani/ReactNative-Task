import { z } from 'zod';

const Taskes = z.object({
  ID: z.number(),
  Title: z.string().min(2),
  Description: z.string().min(2),
  Checked: z.boolean(),
  Time: z.string(),
});

export type Task = z.infer<typeof Taskes>;
