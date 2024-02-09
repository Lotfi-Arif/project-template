import { Result } from 'neverthrow';
import { z } from 'zod';

export const userSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  username: z.string(),
  name: z.string().nullable(),
  status: z.string(),
  role: z.string(),
  phone: z.string().nullable(),
  address: z.string().nullable(),
  profilePictureUrl: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
  // Note: You'll need to define schemas for Cart, Auth, and Order if they are used.
});

export const userCreateSchema = z.object({
  email: z.string().email(),
  username: z.string(),
  name: z.string().nullable().optional(),
  status: z.string().optional(),
  role: z.string().optional(),
  phone: z.string().nullable().optional(),
  address: z.string().nullable().optional(),
  profilePictureUrl: z.string().nullable().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  // Include nested schemas for cart, Auth, and Orders if necessary
});

export const userUpdateSchema = z.object({
  email: z.string().email().optional(),
  username: z.string().optional(),
  name: z.string().nullable().optional(),
  status: z.string().optional(),
  role: z.string().optional(),
  phone: z.string().nullable().optional(),
  address: z.string().nullable().optional(),
  profilePictureUrl: z.string().nullable().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  // Include nested schemas for cart, Auth, and Orders if necessary
});

export interface User extends z.infer<typeof userSchema> {}
export interface UserCreateInput extends z.input<typeof userCreateSchema> {}
export interface UserUpdateInput extends z.input<typeof userUpdateSchema> {}

// Response
export type GetAllUserResult = Result<User[], Error>;
export type GetUserResult = Result<User, Error>;
export type CreateUserResult = Result<User, Error>;
export type UpdateUserResult = Result<User, Error>;
export type DeleteUserResult = Result<User, Error>;
export type ValidateUserResult = Result<User, Error>;
