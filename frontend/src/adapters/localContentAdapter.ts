import { furniture } from "@/content/furniture";
import { portfolio } from "@/content/portfolio";
import { pricing } from "@/content/pricing";
import { services } from "@/content/services";
import { testimonials } from "@/content/testimonials";
import type { FurnitureItem, PricingPackage, Project, Service, Testimonial } from "@/types/content";

export type ContentAdapter = {
  getPortfolio(): readonly Project[];
  getServices(): readonly Service[];
  getTestimonials(): readonly Testimonial[];
  getPricing(): readonly PricingPackage[];
  getFurniture(): readonly FurnitureItem[];
};

export const localContentAdapter: ContentAdapter = {
  getPortfolio: () => portfolio,
  getServices: () => services,
  getTestimonials: () => testimonials,
  getPricing: () => pricing,
  getFurniture: () => furniture,
};
