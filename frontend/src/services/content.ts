import { getContentProvider } from "@/providers/contentProvider";
import { routeParamsSchema } from "@/schemas/content";

const content = getContentProvider();

export function parseSlugParam(params: { slug: string }) {
  return routeParamsSchema.safeParse(params).success ? params.slug : null;
}

export function getProjectBySlug(slug: string) {
  return content.projectBySlug(slug);
}

export function getServiceBySlug(slug: string) {
  return content.serviceBySlug(slug);
}
