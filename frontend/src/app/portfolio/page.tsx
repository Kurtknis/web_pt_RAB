import type { Metadata } from 'next';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { CTASection } from '@/components/sections/CTASection';
import { createMetadata } from '@/lib/seo';
import { JsonLd, portfolioItemListSchema } from '@/lib/schema';
import { getContentProvider } from '@/providers/contentProvider';

export const metadata: Metadata = createMetadata({
  title: 'Transformasi Ruang dan Portofolio Interior | Cipta Kreasi Buana',
  description: 'Portfolio desain interior, renovasi, arsitektur, ruang komersial, apartemen, dan custom furniture PT Cipta Kreasi Buana.',
  path: '/portfolio',
});

export default function PortfolioPage() {
  const portfolio = getContentProvider().portfolio();

  return (
    <>
      <JsonLd data={portfolioItemListSchema(portfolio)} />
      <main className="page-shell page-shell--dark">
        <PortfolioSection all />
        <CTASection />
      </main>
    </>
  );
}
