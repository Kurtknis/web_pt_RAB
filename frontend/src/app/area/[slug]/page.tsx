import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CTASection } from '@/components/sections/CTASection';
import { serviceAreas, getServiceArea } from '@/content/locations';
import { createMetadata } from '@/lib/seo';
import { JsonLd, breadcrumbSchema, serviceAreaSchema } from '@/lib/schema';

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) return createMetadata({ title: 'Area Layanan Interior', path: '/layanan' });

  return createMetadata({
    title: `Jasa Interior ${area.name}`,
    description: area.description,
    path: `/area/${area.slug}`,
    keywords: area.intent,
  });
}

export default async function ServiceAreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) notFound();

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Area Layanan', path: '/layanan' }, { name: area.name, path: `/area/${area.slug}` }])} />
      <JsonLd data={serviceAreaSchema(area)} />
      <main className="page-shell">
        <section className="section section--ivory local-area">
          <div className="luxury-container consultation-path">
            <div>
              <p className="kicker">Area Layanan / {area.province}</p>
              <h1>{area.headline}</h1>
              <p>{area.description}</p>
              <div className="consultation-proof">
                {area.intent.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className="consultation-options">
              <article className="consult-card">
                <h2>Interior dan renovasi</h2>
                <p>
                  Cocok untuk rumah keluarga, apartemen compact, studio apartment, ruang kerja, restoran, retail, dan
                  kebutuhan renovasi interior dengan arahan material yang jelas.
                </p>
              </article>
              <article className="consult-card">
                <h2>Design build dan furniture custom</h2>
                <p>
                  Scope dapat mencakup layout, gambar kerja, kitchen set, wardrobe, TV panel, storage, produksi,
                  instalasi, dan koordinasi handover.
                </p>
              </article>
              <Link className="consult-card" href="/konsultasi">
                <h2>Konsultasi proyek {area.name}</h2>
                <p>Kirim foto ruang, ukuran, lokasi, budget awal, dan timeline agar tim dapat membaca prioritas proyek.</p>
              </Link>
            </div>
          </div>
        </section>
        <CTASection />
      </main>
    </>
  );
}
