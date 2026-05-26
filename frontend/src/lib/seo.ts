import type { Metadata } from 'next';
import { company, seoKeywords, siteUrl } from '@/content/company';

type SeoInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
};

export function createMetadata({
  title = 'Jasa Interior dan Arsitektur Premium | Cipta Kreasi Buana',
  description = company.description,
  path = '/',
  image = '/backgroundC1.png',
  keywords = [],
}: SeoInput = {}): Metadata {
  const canonical = new URL(path, siteUrl).toString();
  const absoluteImage = new URL(image, siteUrl).toString();

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords: [...seoKeywords, ...keywords],
    manifest: '/site.webmanifest',
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [{ url: '/icon-192.png', sizes: '192x192', type: 'image/png' }],
    },
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: company.name,
      locale: 'id_ID',
      type: 'website',
      images: [{ url: absoluteImage, width: 1200, height: 630, alt: company.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteImage],
    },
  };
}
