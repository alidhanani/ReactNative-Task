import { z } from 'zod';

const Taskes = z.object({
  ID: z.number(),
  Title: z.string().min(2),
  Description: z.string().min(2),
  Checked: z.boolean(),
  Time: z.string(),
});

export type Task = z.infer<typeof Taskes>;

export const tasks: Task[] = [
  {
    ID: 0,
    Title: 'Title',
    Description: 'XXXXX',
    Checked: false,
    Time: '9/2/2019',
  },
  {
    ID: 1,
    Title: 'Title :D',
    Description: 'XXXXX',
    Checked: false,
    Time: '9/2/2019',
  },
];
