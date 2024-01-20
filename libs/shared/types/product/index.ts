import { z } from 'zod';

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const createProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.object({
    connect: z.object({
      id: z.string(),
    }),
  }),
});

export const updateProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.object({
    connect: z.object({
      id: z.string(),
    }),
  }),
});

export interface Product extends z.infer<typeof productSchema> {}
export interface ProductCreateInput
  extends z.input<typeof createProductSchema> {}
export interface ProductUpdateInput
  extends z.input<typeof updateProductSchema> {}
