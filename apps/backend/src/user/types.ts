import { z } from 'zod';

export const userSchema = z.object({
  id: z.number(),
  email: z.string(),
  password: z.string(),
  name: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type User = z.infer<typeof userSchema>;

// export type User = {
//   id: number;
//   email: string;
//   password: string;
//   name: string | null;
//   createdAt: Date;
//   updatedAt: Date;
// };
