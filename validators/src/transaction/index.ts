import { z } from 'zod';

export const transactionItemSchema = z.object({
  wasteCategoryId: z.string().uuid(),
  weightKg: z.number().positive().min(0.1),
});

export const createTransactionSchema = z.object({
  wasteBankId: z.string().uuid(),
  items: z.array(transactionItemSchema).nonempty(),
  pickupRequested: z.boolean().default(false),
  pickupAddress: z.string().optional(),
  scheduledDate: z.string().datetime().optional(),
  notes: z.string().optional(),
});

export type TransactionItemInput = z.infer<typeof transactionItemSchema>;
export type CreateTransactionInput = z.infer<typeof createTransactionSchema>;
