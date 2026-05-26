import type { Metadata } from 'next';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { CTASection } from '@/components/sections/CTASection';
import { createMetadata } from '@/lib/seo';
import { JsonLd } from '@/lib/schema';
import { siteUrl } from '@/content/company';
import { getContentProvider } from '@/providers/contentProvider';

export const metadata: Metadata = createMetadata({
  title: 'Transformasi Ruang dan Portofolio Interior | Cipta Kreasi Buana',
  description: 'Portfolio desain interior, renovasi, arsitektur, ruang komersial, apartemen, dan custom furniture PT Cipta Kreasi Buana.',
  path: '/portfolio',
});

export default function PortfolioPage() {
  const portfolio = getContentProvider().portfolio();

  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Portfolio PT Cipta Kreasi Buana',
    itemListElement: portfolio.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: project.title,
        description: project.description,
        image: `${siteUrl}${project.image}`,
        url: `${siteUrl}/portfolio/${project.slug}`,
        about: project.category,
        spatialCoverage: project.location,
      },
    })),
  };

  return (
    <>
      <JsonLd data={portfolioSchema} />
      <main className="page-shell page-shell--dark">
        <PortfolioSection all />
        <CTASection />
      </main>
    </>
  );
}
