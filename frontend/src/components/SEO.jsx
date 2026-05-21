import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://ptciptakreasibuana.com';

const pageMeta = {
  '/': {
    title: 'PT Cipta Kreasi Buana | Jasa Interior Tangerang dan Arsitektur Premium',
    description: 'Jasa interior Tangerang Selatan untuk design interior modern, modular kitchen, kontraktor interior premium, desain rumah minimalis, interior apartemen mewah, dan furniture custom.',
    image: `${SITE_URL}/backgroundC1.png`,
  },
  '/harga': {
    title: 'Harga Jasa Interior Premium Tangerang | PT Cipta Kreasi Buana',
    description: 'Paket design interior modern, kontraktor interior premium, custom furniture, dan design-build dengan estimasi transparan untuk hunian dan komersial.',
    image: `${SITE_URL}/photo_proyek/photoPJK/Cendana%20Residence%20Blok%20C1/Cendana-C1-1.webp`,
  },
  '/klien': {
    title: 'Testimoni Klien Interior dan Renovasi | PT Cipta Kreasi Buana',
    description: 'Cerita transformasi klien untuk desain rumah minimalis, interior apartemen mewah, showroom, kantor, cafe, dan furniture custom Tangerang.',
    image: `${SITE_URL}/testimoni/image.png`,
  },
  '/konsultasi': {
    title: 'Konsultasi Interior Gratis | PT Cipta Kreasi Buana',
    description: 'Mulai konsultasi design interior modern, arsitektur, renovasi, dan furniture custom bersama studio premium di Tangerang Selatan.',
    image: `${SITE_URL}/backgroundC1.png`,
  },
};

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
}

function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = pageMeta[pathname] || pageMeta['/'];
    const canonical = `${SITE_URL}${pathname === '/' ? '/' : pathname}`;

    document.title = meta.title;
    upsertMeta('meta[name="description"]', { name: 'description', content: meta.description });
    upsertMeta('meta[name="keywords"]', {
      name: 'keywords',
      content: 'jasa interior Tangerang, design interior modern, kontraktor interior premium, desain rumah minimalis, interior apartemen mewah, furniture custom Tangerang',
    });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: meta.title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: meta.description });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: meta.image });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: meta.title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: meta.description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: meta.image });

    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    let serviceSchema = document.head.querySelector('script[data-schema="interior-services"]');
    if (!serviceSchema) {
      serviceSchema = document.createElement('script');
      serviceSchema.type = 'application/ld+json';
      serviceSchema.dataset.schema = 'interior-services';
      document.head.appendChild(serviceSchema);
    }
    serviceSchema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Jasa Interior Tangerang dan Furniture Custom',
      provider: {
        '@type': 'LocalBusiness',
        name: 'PT Cipta Kreasi Buana',
        areaServed: ['Tangerang Selatan', 'Jakarta', 'Jabodetabek'],
      },
      serviceType: [
        'Design Interior Modern',
        'Kontraktor Interior Premium',
        'Desain Rumah Minimalis',
        'Interior Apartemen Mewah',
        'Furniture Custom Tangerang',
        'Modular Kitchen',
      ],
      url: canonical,
      image: meta.image,
      description: meta.description,
    });
  }, [pathname]);

  return null;
}

export default SEO;
