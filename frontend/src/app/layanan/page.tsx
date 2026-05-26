import type { Metadata } from 'next';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { CTASection } from '@/components/sections/CTASection';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Layanan Interior dan Design Build | Cipta Kreasi Buana',
  description: 'Jasa desain interior, arsitektur, custom furniture, renovasi, dan design build di Tangerang dan Jabodetabek.',
  path: '/layanan',
});

export default function ServicesPage() {
  return (
    <main className="page-shell">
      <ServicesSection />
      <CTASection />
    </main>
  );
}
