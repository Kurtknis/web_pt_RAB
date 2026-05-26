import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/icons';
import type { IconName } from '@/components/icons';
import { company } from '@/content/company';
import { InquiryForm } from '@/features/inquiry/InquiryForm';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Konsultasi Interior Premium | Cipta Kreasi Buana',
  description: 'Konsultasi desain interior, renovasi, dan design build melalui WhatsApp atau email.',
  path: '/konsultasi',
});

const options = [
  {
    title: 'WhatsApp Brief',
    body: 'Kirim foto ruang, ukuran, timeline, dan budget awal untuk respons cepat dari studio.',
    href: `https://wa.me/${company.whatsapp}`,
    icon: 'message-circle',
  },
  {
    title: 'Editorial Project Brief',
    body: 'Kirim referensi, denah, dan scope pekerjaan untuk arahan tertulis yang lebih lengkap.',
    href: `mailto:${company.email}`,
    icon: 'mail',
  },
  {
    title: 'Studio Call',
    body: 'Jadwalkan sesi discovery untuk membahas layout, material, dan langkah awal proyek.',
    href: `https://wa.me/${company.whatsapp}?text=Halo%20PT%20Cipta%20Kreasi%20Buana%2C%20saya%20ingin%20menjadwalkan%20konsultasi.`,
    icon: 'calendar',
  },
] satisfies Array<{ title: string; body: string; href: string; icon: IconName }>;

export default function ConsultationPage() {
  return (
    <main className="page-shell consultation-page">
      <section className="section section--ivory">
        <div className="luxury-container consultation-grid">
          <div>
            <p className="kicker">Konsultasi</p>
            <h1>Start with a calm, useful brief.</h1>
            <p>
              Isi brief ringkas agar tim dapat membaca tipe ruang, budget, timeline, dan prioritas desain sebelum
              menyusun langkah konsultasi yang paling tepat.
            </p>
            <div className="consultation-proof">
              <span>Respons awal 24 jam</span>
              <span>CRM-ready brief</span>
              <span>Tanpa spam</span>
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>

      <section className="section section--charcoal">
        <div className="luxury-container consultation-path">
          <div>
            <p className="kicker">Jalur Cepat</p>
            <h2>Butuh respons lebih cepat?</h2>
            <p>Gunakan kanal langsung sambil tetap mengirim brief proyek lewat form agar follow-up lebih rapi.</p>
          </div>
          <div className="consultation-options">
            {options.map((item) => (
              <Link className="consult-card" href={item.href} key={item.title}>
                <Icon name={item.icon} size={24} />
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
