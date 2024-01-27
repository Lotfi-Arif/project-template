import { z } from 'zod';

export const authSchema = z.object({
  id: z.string().uuid(),
  token: z.string(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  // Note: You'll need to define schemas for User if they are used.
});

export const authCreateSchema = z.object({
  token: z.string(),
  userId: z.string(),
});

export const authUpdateSchema = z.object({
  token: z.string(),
  userId: z.string(),
});

export const loginInputSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export const loginschema = z.object({
  access_token: z.string(),
  token_type: z.string(),
});

export interface Auth extends z.infer<typeof authSchema> {}
export interface AuthCreateInput extends z.input<typeof authCreateSchema> {}
export interface AuthUpdateInput extends z.input<typeof authUpdateSchema> {}
export interface LoginInput extends z.input<typeof loginInputSchema> {}
export interface Login extends z.input<typeof loginschema> {}
