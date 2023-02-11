import { z } from 'zod';

export const Task = z.object({
  Title: z.string().min(2),
  Description: z.string().min(2),
  Checked: z.boolean(),
  Time: z.string(),
});

export type Task = z.infer<typeof Task>;


export const tasks: Task[] = [
    {
        Title: "Title",
        Description: "XXXXX",
        Checked: false,
        Time: "9/2/2019"
    },
    {
        Title: "Title :D",
        Description: "XXXXX",
        Checked: false,
        Time: "9/2/2019"
    }
]