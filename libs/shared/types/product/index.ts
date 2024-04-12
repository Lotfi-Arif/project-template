import { Result, ResultAsync } from 'neverthrow';
import { z } from 'zod';

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  categoryId: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const createProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  categoryId: z.string().nullable(),
});

export const updateProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  categoryId: z.string().nullable(),
});

export interface Product extends z.infer<typeof productSchema> {}
export interface ProductCreateInput
  extends z.input<typeof createProductSchema> {}
export interface ProductUpdateInput
  extends z.input<typeof updateProductSchema> {}

// Response
export type GetAllProductResult = Result<Product[], Error>;
export type GetProductResult = Result<Product, Error>;
export type CreateProductResult = Result<Product, Error>;
export type UpdateProductResult = Result<Product, Error>;
export type DeleteProductResult = Result<Product, Error>;
