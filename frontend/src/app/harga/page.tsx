import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { createMetadata } from '@/lib/seo';
import { JsonLd } from '@/lib/schema';

const PricingExperience = dynamic(() =>
  import('@/features/pricing/PricingExperience').then((mod) => mod.PricingExperience),
);

export const metadata: Metadata = createMetadata({
  title: 'Harga Jasa Interior, Renovasi, dan Design Build | PT Cipta Kreasi Buana',
  description:
    'Estimasi harga jasa interior premium, renovasi rumah, design build, ruang komersial, dan furniture custom PT Cipta Kreasi Buana di Tangerang dan Jabodetabek.',
  path: '/harga',
  image: '/projects/namo-seafood-pik/image-01.webp',
  keywords: ['harga jasa interior', 'biaya renovasi rumah', 'jasa design build Tangerang', 'kontraktor interior Jabodetabek'],
});

export default function PricingPage() {
  const serviceOfferSchema = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Harga layanan interior dan design build PT Cipta Kreasi Buana',
    itemListElement: [
      'Interior Consultation',
      'Full Renovation',
      'Design Build',
      'Commercial Space',
      'Custom Furniture',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name,
        provider: {
          '@type': 'LocalBusiness',
          name: 'PT Cipta Kreasi Buana',
        },
      },
    })),
  };

  return (
    <>
      <JsonLd data={serviceOfferSchema} />
      <PricingExperience />
    </>
  );
}
