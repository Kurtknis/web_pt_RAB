import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { createMetadata } from '@/lib/seo';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';
import { getServiceBySlug, parseSlugParam } from '@/services/content';
import { CTASection } from '@/components/sections/CTASection';
import { getContentProvider } from '@/providers/contentProvider';

export const dynamicParams = false;

export function generateStaticParams() {
  return getContentProvider().services().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = parseSlugParam(await params);
  if (!slug) return createMetadata({ title: 'Layanan | Cipta Kreasi Buana', path: '/layanan' });

  const service = getServiceBySlug(slug);
  if (!service) return createMetadata({ title: 'Layanan | Cipta Kreasi Buana', path: '/layanan' });

  return createMetadata({
    title: `${service.title} Premium | Cipta Kreasi Buana`,
    description: service.description,
    path: `/layanan/${service.slug}`,
    image: service.image,
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = parseSlugParam(await params);
  if (!slug) notFound();

  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Layanan', path: '/layanan' }, { name: service.title, path: `/layanan/${service.slug}` }])} />
      <main className="page-shell">
        <section className="section section--ivory detail-grid">
          <div className="luxury-container detail-grid__inner">
            <div>
              <p className="kicker">{service.eyebrow}</p>
              <h1>{service.title}</h1>
              <p>{service.description}</p>
              <ul>
                {service.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>
            <Image
              src={service.image}
              alt={`${service.title} PT Cipta Kreasi Buana`}
              width={900}
              height={680}
              priority
              sizes="(max-width: 760px) 100vw, 44vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </section>
        <CTASection />
      </main>
    </>
  );
}
