import { Result } from 'neverthrow';
import { z } from 'zod';

export const authSchema = z.object({
  id: z.string().uuid(),
  token: z.string(),
  userId: z.string(),
  password: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  // Note: You'll need to define schemas for User if they are used.
});

export const authCreateSchema = z.object({
  token: z.string(),
  userId: z.string(),
  password: z.string(),
});

export const authUpdateSchema = z.object({
  token: z.string(),
  userId: z.string(),
  password: z.string().optional(),
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

// Response
export type GetAllAuthResult = Result<Auth[], Error>;
export type GetAuthResult = Result<Auth, Error>;
export type CreateAuthResult = Result<Auth, Error>;
export type UpdateAuthResult = Result<Auth, Error>;
export type DeleteAuthResult = Result<Auth, Error>;
export type LoginResult = Result<Login, Error>;
