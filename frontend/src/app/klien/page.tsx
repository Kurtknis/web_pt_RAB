import type { Metadata } from 'next';
import { company } from '@/content/company';
import { createMetadata } from '@/lib/seo';
import { CTASection } from '@/components/sections/CTASection';
import { getContentProvider } from '@/providers/contentProvider';

export const metadata: Metadata = createMetadata({
  title: 'Klien dan Testimoni Interior | Cipta Kreasi Buana',
  description: 'Cerita klien, metrik kepercayaan, dan testimoni proyek interior PT Cipta Kreasi Buana.',
  path: '/klien',
});

export default function ClientsPage() {
  const testimonials = getContentProvider().testimonials();

  return (
    <main className="page-shell clients-page">
      <section className="section section--ivory">
        <div className="luxury-container clients-hero">
          <p className="kicker">Trust and Transformation</p>
          <h1>Ruang yang dipercayakan, dikerjakan dengan presisi.</h1>
          <div className="trust-grid">
            {company.stats.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="luxury-container testimonial-masonry">
          {testimonials.map((item) => (
            <article className="testimonial-card testimonial-card--light" key={item.name}>
              <p>&ldquo;{item.quote}&rdquo;</p>
              <div>
                <strong>{item.name}</strong>
                <span>
                  {item.role} / {item.project}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </main>
  );
}
