import type { MetadataRoute } from 'next';
import { siteUrl } from '@/content/company';
import { getContentProvider } from '@/providers/contentProvider';
import { listBlogPosts } from '@/repositories/blogRepository';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const content = getContentProvider();
  const staticRoutes = ['/', '/layanan', '/portfolio', '/furnitur', '/harga', '/klien', '/konsultasi', '/insights'];
  const serviceRoutes = content.services().map((service) => `/layanan/${service.slug}`);
  const projectRoutes = content.portfolio().map((project) => `/portfolio/${project.slug}`);
  const insightRoutes = listBlogPosts().map((post) => `/insights/${post.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...insightRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route.includes('/portfolio/') ? 0.75 : 0.8,
  }));
}
