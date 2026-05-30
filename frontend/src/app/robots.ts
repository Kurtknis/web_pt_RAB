import type { MetadataRoute } from 'next';
import { siteUrl } from '@/content/company';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/area', '/layanan', '/portfolio', '/furnitur', '/harga', '/klien', '/konsultasi', '/insights', '/llms.txt', '/llms-full.txt'],
      disallow: ['/admin', '/observability'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
