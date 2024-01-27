import { z } from 'zod';

export const orderSchema = z.object({
  id: z.string(),
  price: z.number(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const createOrderSchema = z.object({
  price: z.number(),
  userId: z.string(),
});

export const updateOrderSchema = z.object({
  price: z.number(),
  userId: z.string(),
});

export interface Order extends z.infer<typeof orderSchema> {}
export interface OrderCreateInput extends z.input<typeof createOrderSchema> {}
export interface OrderUpdateInput extends z.input<typeof updateOrderSchema> {}
