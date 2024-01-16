import { z } from 'zod';

export const userSchema = z.object({
  id: z.string().uuid(),
  email: z.string(),
  password: z.string(),
  name: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const userCreateSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  name: z.string().nullable().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export const userUpdateSchema = z.object({
  email: z.string().optional(),
  password: z.string().optional(),
  name: z.string().nullable().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export interface User extends z.infer<typeof userSchema> {}
export interface UserCreateInput extends z.input<typeof userCreateSchema> {}
export interface UserUpdateInput extends z.input<typeof userUpdateSchema> {}
