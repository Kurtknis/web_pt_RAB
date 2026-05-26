'use client';

import { AnimatePresence, animate, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { MouseEvent, ReactNode } from 'react';
import { Icon } from '@/components/icons';
import { company } from '@/content/company';

type ServiceCard = {
  slug: string;
  title: string;
  eyebrow: string;
  price: string;
  timeline: string;
  image: string;
  description: string;
  features: string[];
  detail: string;
};

const waLink = `https://wa.me/${company.whatsapp}?text=Halo%20PT%20Cipta%20Kreasi%20Buana,%20saya%20ingin%20konsultasi%20proyek`;

const services: ServiceCard[] = [
  {
    slug: 'interior-consultation',
    title: 'Interior Consultation',
    eyebrow: 'Concept audit',
    price: 'Mulai Rp 150.000/m2',
    timeline: '7-14 hari kerja',
    image: '/projects/apartment-park-avenue/image-01.webp',
    description: 'Sesi desain untuk membaca potensi ruang, merapikan zoning, dan menentukan arah material sebelum proyek bergerak.',
    features: ['Layout review', 'Moodboard material', 'Arahan lighting', 'Shopping list prioritas'],
    detail:
      'Ideal untuk apartemen, rumah baru, atau ruang yang perlu keputusan visual cepat sebelum masuk renovasi besar.',
  },
  {
    slug: 'full-renovation',
    title: 'Full Renovation',
    eyebrow: 'Total transformation',
    price: 'Mulai Rp 250.000/m2',
    timeline: '6-12 minggu',
    image: '/projects/cendana-residence-blok-c1/image-10.webp',
    description: 'Renovasi menyeluruh dengan koordinasi desain, pembongkaran, pekerjaan sipil ringan, furniture, dan finishing.',
    features: ['Site measurement', 'RAB terstruktur', 'Quality control', 'Handover bertahap'],
    detail:
      'Dirancang untuk klien yang ingin satu alur kerja rapi dari konsep sampai ruang siap digunakan.',
  },
  {
    slug: 'design-build',
    title: 'Design Build',
    eyebrow: 'Studio to site',
    price: 'Mulai Rp 280.000/m2',
    timeline: '8-16 minggu',
    image: '/projects/namo-seafood-pik/image-01.webp',
    description: 'Layanan terintegrasi untuk proyek residensial dan komersial dengan kontrol desain sampai eksekusi lapangan.',
    features: ['Concept development', 'Gambar kerja', 'Procurement material', 'Tim lapangan dedicated'],
    detail:
      'Paling tepat untuk proyek yang membutuhkan kontrol estetika, teknis, biaya, dan jadwal dalam satu koordinasi.',
  },
  {
    slug: 'commercial-space',
    title: 'Commercial Space',
    eyebrow: 'Brand environment',
    price: 'Proposal khusus',
    timeline: '10-20 minggu',
    image: '/projects/namo-seafood-pik/image-02.webp',
    description: 'Interior bisnis untuk restoran, kantor, retail, dan hospitality yang menyatukan sirkulasi, brand, dan operasional.',
    features: ['Customer journey', 'Brand touchpoint', 'Back-of-house planning', 'Durability planning'],
    detail:
      'Kami membaca ruang sebagai alat bisnis: mudah dioperasikan, mudah diingat, dan cukup kuat untuk dipakai setiap hari.',
  },
  {
    slug: 'custom-furniture',
    title: 'Custom Furniture',
    eyebrow: 'Made to measure',
    price: 'Mulai Rp 3.500.000/m',
    timeline: '3-8 minggu',
    image: '/furniture/kitchen-cabinet-modern.webp',
    description: 'Furniture custom untuk storage, kitchen, wardrobe, TV panel, dan elemen built-in sesuai ritme ruang.',
    features: ['Pengukuran presisi', 'Material board', 'Detail hardware', 'Instalasi rapi'],
    detail:
      'Dibuat untuk memaksimalkan ukuran aktual ruang, bukan memaksa ruang mengikuti ukuran produk massal.',
  },
];

const portfolioItems = [
  {
    title: 'Cendana Residence',
    category: 'Residential Renovation',
    location: 'Tangerang Selatan',
    timeline: '10 minggu',
    before: '/projects/cendana-residence-blok-c1/image-01.webp',
    after: '/projects/cendana-residence-blok-c1/image-13.webp',
    quote: 'Ruang keluarga terasa lebih tenang, rapi, dan jauh lebih fungsional untuk aktivitas harian.',
  },
  {
    title: 'Apartment Collins',
    category: 'Urban Apartment',
    location: 'Jakarta',
    timeline: '6 minggu',
    before: '/projects/apartemen-collins/image-01.webp',
    after: '/projects/apartemen-collins/image-04.webp',
    quote: 'Storage bertambah tanpa membuat apartemen terasa penuh.',
  },
  {
    title: 'Namo Seafood PIK',
    category: 'Commercial Interior',
    location: 'Golf Island PIK',
    timeline: '14 minggu',
    before: '/projects/namo-seafood-pik/image-before.webp',
    after: '/projects/namo-seafood-pik/image-01.webp',
    quote: 'Alur tamu, VIP room, dan kitchen menjadi lebih jelas untuk operasional restoran.',
  },
];

const trustStats = [
  { value: 120, suffix: '+', label: 'Ruang selesai' },
  { value: 8, suffix: '+', label: 'Tahun pengalaman' },
  { value: 95, suffix: '%', label: 'Kepuasan klien' },
  { value: 24, suffix: 'h', label: 'Respons awal' },
];

const clientLogos = ['Cendana', 'Collins', 'Namo', 'Graha Raya', 'Park Avenue'];

const serviceRoutes: Record<string, string> = {
  'interior-consultation': '/layanan/desain-interior',
  'full-renovation': '/layanan/design-build',
  'design-build': '/layanan/design-build',
  'commercial-space': '/layanan/design-build',
  'custom-furniture': '/layanan/furniture-custom',
};

function MagneticButton({
  href,
  children,
  variant = 'dark',
  onClick,
}: {
  href?: string;
  children: ReactNode;
  variant?: 'dark' | 'light' | 'ghost';
  onClick?: () => void;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 16 });
  const springY = useSpring(y, { stiffness: 180, damping: 16 });

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.16);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.22);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const className = `magnetic-btn magnetic-btn--${variant}`;
  const content = (
    <>
      <span>{children}</span>
      <Icon name="arrow-up-right" size={16} />
    </>
  );

  if (href) {
    return (
      <motion.a href={href} className={className} style={{ x: springX, y: springY }} onMouseMove={handleMove} onMouseLeave={handleLeave}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
    >
      {content}
    </motion.button>
  );
}

function BeforeAfterSlider({ item }: { item: (typeof portfolioItems)[number] }) {
  const [value, setValue] = useState(54);

  return (
    <article className="ba-showcase-card">
      <div className="ba-slider" style={{ '--clip': `${value}%` } as React.CSSProperties}>
        <Image src={item.before} alt={`Kondisi awal proyek ${item.title}`} fill sizes="(max-width: 980px) 100vw, 46vw" className="ba-image" />
        <div className="ba-after">
          <Image src={item.after} alt={`Hasil akhir proyek ${item.title}`} fill sizes="(max-width: 980px) 100vw, 46vw" className="ba-image" />
        </div>
        <div className="ba-handle" aria-hidden>
          <Icon name="move-horizontal" size={20} />
        </div>
        <input
          aria-label={`Bandingkan sebelum dan sesudah ${item.title}`}
          type="range"
          min="12"
          max="88"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />
      </div>
      <div className="ba-card-copy">
        <span>{item.location} / {item.timeline}</span>
        <h3>{item.title}</h3>
        <p>{item.category}</p>
        <blockquote>{item.quote}</blockquote>
      </div>
    </article>
  );
}

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => `${Math.round(latest)}${suffix}`);

  return (
    <motion.div
      className="trust-stat"
      viewport={{ once: true, margin: '-90px' }}
      onViewportEnter={() => animate(motionValue, value, { duration: 1.15, ease: [0.22, 1, 0.36, 1] })}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.strong>{rounded}</motion.strong>
      <span>{label}</span>
    </motion.div>
  );
}

export function PricingExperience() {
  const [activeService, setActiveService] = useState<ServiceCard | null>(null);

  return (
    <main className="pricing-experience">
      <section id="harga" className="pricing-hero section" aria-labelledby="pricing-title">
        <motion.div
          className="pricing-noise"
          aria-hidden
          animate={{ y: [0, -24, 0], x: [0, 12, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="luxury-container pricing-editorial-grid">
          <aside className="pricing-editorial-copy">
            <p className="kicker">Harga dan cakupan</p>
            <h1 id="pricing-title">Investasi ruang yang dirancang untuk bertahan.</h1>
            <p>
              Setiap proposal dimulai dari cara ruang dipakai, bukan sekadar daftar item. Kami menyusun desain, material, timeline,
              dan eksekusi dalam alur yang jelas agar keputusan terasa tenang sejak konsultasi pertama.
            </p>
            <div className="editorial-divider" aria-hidden />
            <div className="pricing-metrics" aria-label="Indikator kepercayaan proyek">
              <div>
                <strong>120+</strong>
                <span>Ruang dirancang</span>
              </div>
              <div>
                <strong>8+</strong>
                <span>Tahun pengalaman</span>
              </div>
              <div>
                <strong>95%</strong>
                <span>Kepuasan klien</span>
              </div>
            </div>
            <div className="pricing-trust">
              <span>Proposal transparan</span>
              <span>Tim lapangan terkurasi</span>
              <span>Material terarah</span>
            </div>
            <div className="pricing-actions">
              <MagneticButton href="#portfolio-transformasi">Lihat Portofolio</MagneticButton>
              <MagneticButton href={waLink} variant="ghost">Konsultasi Proyek</MagneticButton>
            </div>
          </aside>

          <div className="service-stack" aria-label="Daftar layanan dan estimasi harga">
            {services.map((service, index) => (
              <motion.article
                className="service-pricing-card"
                key={service.slug}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.58, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="service-card-media">
                  <Image src={service.image} alt={`Preview layanan ${service.title}`} fill sizes="(max-width: 980px) 100vw, 38vw" />
                </div>
                <div className="service-card-content">
                  <div className="service-card-topline">
                    <span>{service.eyebrow}</span>
                    <span>{service.price}</span>
                  </div>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <ul>
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <Icon name="check" size={15} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="service-card-footer">
                    <span><Icon name="clock" size={15} /> {service.timeline}</span>
                    <button type="button" onClick={() => setActiveService(service)}>
                      Detail layanan
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio-transformasi" className="section ba-section" aria-labelledby="portfolio-title">
        <div className="luxury-container">
          <div className="section-heading">
            <div>
              <p className="kicker">Before and after</p>
              <h2 id="portfolio-title">Transformasi yang terasa sebelum terlihat mahal.</h2>
            </div>
            <p>
              Slider interaktif memperlihatkan bagaimana proporsi, cahaya, storage, dan material mengubah fungsi ruang tanpa membuatnya
              terasa berlebihan.
            </p>
          </div>
          <div className="ba-grid">
            {portfolioItems.map((item) => (
              <BeforeAfterSlider key={item.title} item={item} />
            ))}
          </div>
          <div className="portfolio-masonry" aria-label="Cuplikan portofolio tambahan">
            {portfolioItems.map((item, index) => (
              <figure key={`${item.title}-gallery`} className={index === 1 ? 'is-tall' : ''}>
                <Image src={item.after} alt={`Galeri hasil proyek ${item.title}`} fill sizes="(max-width: 980px) 100vw, 30vw" />
                <figcaption>
                  <span>{item.category}</span>
                  <strong>{item.location}</strong>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="portfolio-cta">
            <MagneticButton href="/portfolio" variant="dark">Lihat Transformasi Ruang</MagneticButton>
          </div>
        </div>
      </section>

      <section id="trust" className="section trust-section" aria-labelledby="trust-title">
        <div className="luxury-container trust-layout">
          <div>
            <p className="kicker">Trust index</p>
            <h2 id="trust-title">Dibangun dengan ritme studio, dieksekusi dengan disiplin proyek.</h2>
          </div>
          <div className="trust-panel">
            <div className="logo-row" aria-label="Logo dan proyek klien">
              {clientLogos.map((logo) => (
                <span key={logo}>{logo}</span>
              ))}
            </div>
            <div className="trust-stats">
              {trustStats.map((stat) => (
                <AnimatedStat key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <a className="floating-wa" href={waLink} aria-label="Konsultasi WhatsApp PT Cipta Kreasi Buana">
        <Icon name="message-circle" size={20} />
        <span>Konsultasi</span>
      </a>

      <AnimatePresence>
        {activeService && (
          <motion.div className="service-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.dialog
              className="service-modal"
              open
              aria-labelledby="service-modal-title"
              initial={{ opacity: 0, y: 32, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 22, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <button className="modal-close" type="button" onClick={() => setActiveService(null)} aria-label="Tutup detail layanan">
                <Icon name="close" size={20} />
              </button>
              <span>{activeService.price}</span>
              <h2 id="service-modal-title">{activeService.title}</h2>
              <p>{activeService.detail}</p>
              <div className="modal-actions">
                <Link href={serviceRoutes[activeService.slug]}>Buka halaman layanan</Link>
                <a href={waLink}>Konsultasi WhatsApp</a>
              </div>
            </motion.dialog>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
