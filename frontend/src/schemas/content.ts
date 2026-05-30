import { z } from "zod";

const slugSchema = z.string().min(1).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const imagePathSchema = z.string().min(1).startsWith("/");
const nonEmptyString = z.string().trim().min(1);

export const routeParamsSchema = z.object({
  slug: slugSchema,
});

export const projectSchema = z.object({
  slug: slugSchema,
  title: nonEmptyString,
  category: nonEmptyString,
  location: nonEmptyString,
  year: nonEmptyString,
  description: nonEmptyString,
  designStyle: nonEmptyString,
  roomType: nonEmptyString,
  areaSize: nonEmptyString,
  timeline: nonEmptyString,
  materials: z.array(nonEmptyString).min(1),
  image: imagePathSchema,
  gallery: z.array(imagePathSchema).min(1),
  featured: z.boolean(),
});

export const serviceSchema = z.object({
  slug: slugSchema,
  title: nonEmptyString,
  eyebrow: nonEmptyString,
  description: nonEmptyString,
  image: imagePathSchema,
  benefits: z.array(nonEmptyString).min(1),
});

export const testimonialSchema = z.object({
  name: nonEmptyString,
  role: nonEmptyString,
  quote: nonEmptyString,
  rating: z.number().int().min(1).max(5),
  image: imagePathSchema.optional(),
  project: nonEmptyString,
});

export const pricingPackageSchema = z.object({
  slug: slugSchema,
  name: nonEmptyString,
  description: nonEmptyString,
  startingPrice: nonEmptyString,
  features: z.array(nonEmptyString).min(1),
});

export const furnitureItemSchema = z.object({
  slug: slugSchema,
  title: nonEmptyString,
  category: nonEmptyString,
  image: imagePathSchema,
  description: nonEmptyString,
});

export const projectListSchema = z.array(projectSchema).min(1);
export const serviceListSchema = z.array(serviceSchema).min(1);
export const testimonialListSchema = z.array(testimonialSchema).min(1);
export const pricingListSchema = z.array(pricingPackageSchema).min(1);
export const furnitureListSchema = z.array(furnitureItemSchema).min(1);

export type Project = z.infer<typeof projectSchema>;
export type Service = z.infer<typeof serviceSchema>;
export type Testimonial = z.infer<typeof testimonialSchema>;
export type PricingPackage = z.infer<typeof pricingPackageSchema>;
export type FurnitureItem = z.infer<typeof furnitureItemSchema>;
