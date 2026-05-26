import { localContentAdapter, type ContentAdapter } from "@/adapters/localContentAdapter";

const adapter: ContentAdapter = localContentAdapter;

export const contentRepository = {
  portfolio: () => adapter.getPortfolio(),
  featuredPortfolio: () => adapter.getPortfolio().filter((project) => project.featured),
  projectBySlug: (slug: string) => adapter.getPortfolio().find((project) => project.slug === slug) ?? null,
  services: () => adapter.getServices(),
  serviceBySlug: (slug: string) => adapter.getServices().find((service) => service.slug === slug) ?? null,
  testimonials: () => adapter.getTestimonials(),
  pricing: () => adapter.getPricing(),
  furniture: () => adapter.getFurniture(),
};
