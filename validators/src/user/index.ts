import { z } from 'zod';

export const customerProfileSchema = z.object({
  name: z.string().min(2),
  phoneNumber: z.string().optional(),
  address: z.string().optional(),
  ktpNumber: z.string().optional(),
});

export const wasteBankProfileSchema = z.object({
  name: z.string().min(2),
  phoneNumber: z.string().optional(),
  businessLicenseUrl: z.string().url(),
  location: z.string(),
  address: z.string(),
  maxCapacityKg: z.number().positive().optional(),
  openingHours: z.string().optional(),
  closingHours: z.string().optional(),
});

export type CustomerProfileInput = z.infer<typeof customerProfileSchema>;
export type WasteBankProfileInput = z.infer<typeof wasteBankProfileSchema>;
