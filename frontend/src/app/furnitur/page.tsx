import type { Metadata } from 'next';
import Image from 'next/image';
import { createMetadata } from '@/lib/seo';
import { CTASection } from '@/components/sections/CTASection';
import { getContentProvider } from '@/providers/contentProvider';

export const metadata: Metadata = createMetadata({
  title: 'Furniture Custom Tangerang | Cipta Kreasi Buana',
  description: 'Kitchen set, wardrobe, TV panel, storage, dan furniture custom premium untuk hunian modern.',
  path: '/furnitur',
});

export default function FurniturePage() {
  const furniture = getContentProvider().furniture();

  return (
    <main className="page-shell">
      <section className="section section--ivory">
        <div className="luxury-container">
          <div className="section-heading">
            <div>
              <p className="kicker">Furnitur Custom</p>
              <h1>Made-to-measure furniture with quiet proportion.</h1>
            </div>
            <p>Setiap elemen dibuat sesuai ukuran ruang, kebutuhan harian, dan bahasa material interior.</p>
          </div>
          <div className="service-grid">
            {furniture.map((item) => (
              <article className="service-card" key={item.slug}>
                <Image
                  src={item.image}
                  alt={`${item.title} PT Cipta Kreasi Buana`}
                  width={720}
                  height={520}
                  sizes="(max-width: 760px) 100vw, 30vw"
                  style={{ width: '100%', height: 'auto' }}
                />
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
