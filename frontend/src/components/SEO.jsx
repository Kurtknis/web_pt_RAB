import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://ptciptakreasibuana.com';
const BRAND_NAME = 'PT Cipta Kreasi Buana';
const DEFAULT_IMAGE = `${SITE_URL}/backgroundC1.png`;
const LOGO_URL = `${SITE_URL}/ptkreasi.jpg`;
const PRIMARY_KEYWORDS = [
  'jasa interior Tangerang',
  'design interior modern',
  'kontraktor interior premium',
  'desain rumah minimalis',
  'interior apartemen mewah',
  'furniture custom Tangerang',
  'modular kitchen Tangerang',
  'arsitektur Tangerang Selatan',
];

const pageMeta = {
  '/': {
    title: 'Jasa Interior & Arsitektur Premium | Cipta Kreasi Buana',
    description:
      'Studio interior, arsitektur, kontraktor interior premium, modular kitchen, dan furniture custom Tangerang Selatan untuk hunian dan ruang komersial modern.',
    image: DEFAULT_IMAGE,
    type: 'website',
    priorityService: 'Jasa Interior Tangerang',
  },
  '/home-full': {
    title: 'Studio Interior dan Arsitektur Tangerang | PT Cipta Kreasi Buana',
    description:
      'Pengalaman lengkap PT Cipta Kreasi Buana untuk desain interior modern, arsitektur, renovasi, custom furniture, dan kontraktor premium Jabodetabek.',
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/layanan': {
    title: 'Jasa Desain Interior, Arsitektur & Renovasi | PT Cipta Kreasi Buana',
    description:
      'Layanan desain interior, arsitektur, kontraktor, renovasi, modular kitchen, dan furniture custom dengan pendekatan premium dan eksekusi presisi.',
    image: `${SITE_URL}/photo_proyek/photoPJK/Apartment%20Park%20Avenue/Apartment-Park-Avenue-Serpong-1.webp`,
    type: 'service',
    priorityService: 'Design Interior Modern',
  },
  '/layanan/design-interior': {
    title: 'Jasa Design Interior Modern Tangerang | PT Cipta Kreasi Buana',
    description:
      'Jasa design interior modern untuk rumah, apartemen, kantor, cafe, dan ruang komersial dengan konsep tenang, detail rapi, dan material premium.',
    image: `${SITE_URL}/photo_proyek/photoPJK/Apartment%20Park%20Avenue/Apartment-Park-Avenue-Serpong-1.webp`,
    type: 'service',
    priorityService: 'Jasa Design Interior Modern',
  },
  '/layanan/arsitektur': {
    title: 'Jasa Arsitektur Tangerang Selatan | PT Cipta Kreasi Buana',
    description:
      'Jasa arsitektur untuk fasad, rumah tinggal, ruang komersial, gambar kerja, dan perencanaan bangunan dengan proporsi modern dan fungsional.',
    image: `${SITE_URL}/photo_proyek/photoPJK/Facade%20Kampung%20Sawah/Rumah-Tinggal-Kampung-Sawah-1.webp`,
    type: 'service',
    priorityService: 'Jasa Arsitektur Tangerang Selatan',
  },
  '/layanan/kontraktor': {
    title: 'Kontraktor Interior Premium Tangerang | PT Cipta Kreasi Buana',
    description:
      'Kontraktor interior premium untuk renovasi rumah, apartemen, kantor, cafe, dan custom furniture dengan kontrol material dan finishing presisi.',
    image: `${SITE_URL}/photo_proyek/photoPJK/Cendana%20Residence%20Blok%20C1/Cendana-C1-1.webp`,
    type: 'service',
    priorityService: 'Kontraktor Interior Premium',
  },
  '/layanan/renovasi': {
    title: 'Jasa Renovasi Interior Rumah dan Apartemen | PT Cipta Kreasi Buana',
    description:
      'Jasa renovasi interior rumah, apartemen, dan ruang komersial dengan desain modern, estimasi jelas, dan pengerjaan rapi di Jabodetabek.',
    image: `${SITE_URL}/photo_proyek/photoPJK/Cendana%20Residence%20Blok%20C1/Cendana-C1-1.webp`,
    type: 'service',
    priorityService: 'Jasa Renovasi Interior',
  },
  '/portfolio': {
    title: 'Portfolio Desain Interior dan Renovasi | PT Cipta Kreasi Buana',
    description:
      'Lihat portfolio proyek interior apartemen, rumah tinggal, fasad, kantor, cafe, showroom, dan custom furniture di Tangerang, Jakarta, dan Jabodetabek.',
    image: `${SITE_URL}/photo_proyek/photoPJK/Cendana%20Residence%20Blok%20C1/Cendana-C1-1.webp`,
    type: 'collection',
  },
  '/furnitur': {
    title: 'Furniture Custom Tangerang dan Modular Kitchen | PT Cipta Kreasi Buana',
    description:
      'Furniture custom Tangerang untuk kitchen set, wardrobe, TV panel, storage built-in, dan loose furniture dengan ukuran presisi dan finishing premium.',
    image: `${SITE_URL}/Photo_furnitur/pexels-artbovich-6782440.jpg`,
    type: 'product.group',
    priorityService: 'Furniture Custom Tangerang',
  },
  '/harga': {
    title: 'Harga Jasa Interior Premium Tangerang 2026 | PT Cipta Kreasi Buana',
    description:
      'Estimasi harga design interior modern, kontraktor interior premium, custom furniture, dan design-build untuk hunian dan komersial.',
    image: `${SITE_URL}/photo_proyek/photoPJK/Cendana%20Residence%20Blok%20C1/Cendana-C1-1.webp`,
    type: 'service',
  },
  '/galeri': {
    title: 'Galeri Interior Modern dan Furniture Custom | PT Cipta Kreasi Buana',
    description:
      'Inspirasi visual interior modern, modular kitchen, apartemen mewah, rumah minimalis, dan furniture custom dari proyek PT Cipta Kreasi Buana.',
    image: `${SITE_URL}/design-interior-flyer.png`,
    type: 'collection',
  },
  '/klien': {
    title: 'Testimoni Klien Interior dan Renovasi | PT Cipta Kreasi Buana',
    description:
      'Cerita transformasi klien untuk desain rumah minimalis, interior apartemen mewah, showroom, kantor, cafe, dan furniture custom Tangerang.',
    image: `${SITE_URL}/testimoni/image.png`,
    type: 'article',
  },
  '/konsultasi': {
    title: 'Konsultasi Interior Gratis Tangerang | PT Cipta Kreasi Buana',
    description:
      'Mulai konsultasi design interior modern, arsitektur, renovasi, modular kitchen, dan furniture custom bersama studio premium Tangerang Selatan.',
    image: DEFAULT_IMAGE,
    type: 'website',
  },
  '/kontak': {
    title: 'Kontak PT Cipta Kreasi Buana | Konsultasi Interior Tangerang',
    description:
      'Hubungi PT Cipta Kreasi Buana untuk konsultasi interior, arsitektur, kontraktor, renovasi, dan furniture custom di Tangerang Selatan.',
    image: DEFAULT_IMAGE,
    type: 'website',
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

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
}

function upsertJsonLd(id, schema) {
  let element = document.head.querySelector(`script[data-schema="${id}"]`);
  if (!element) {
    element = document.createElement('script');
    element.type = 'application/ld+json';
    element.dataset.schema = id;
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(schema);
}

function absoluteUrl(pathname) {
  return `${SITE_URL}${pathname === '/' ? '/' : pathname}`;
}

function getBreadcrumb(pathname) {
  const names = {
    '/': 'Home',
    '/home-full': 'Studio',
    '/layanan': 'Layanan',
    '/layanan/design-interior': 'Design Interior',
    '/layanan/arsitektur': 'Arsitektur',
    '/layanan/kontraktor': 'Kontraktor',
    '/layanan/renovasi': 'Renovasi',
    '/portfolio': 'Portfolio',
    '/furnitur': 'Furnitur',
    '/harga': 'Harga',
    '/galeri': 'Galeri',
    '/klien': 'Klien',
    '/konsultasi': 'Konsultasi',
    '/kontak': 'Kontak',
  };

  if (pathname === '/') {
    return [{ name: names['/'], url: absoluteUrl('/') }];
  }

  const parts = pathname.split('/').filter(Boolean);
  const crumbs = [{ name: names['/'], url: absoluteUrl('/') }];
  parts.reduce((currentPath, part) => {
    const nextPath = `${currentPath}/${part}`;
    crumbs.push({
      name: names[nextPath] || part.replace(/-/g, ' '),
      url: absoluteUrl(nextPath),
    });
    return nextPath;
  }, '');
  return crumbs;
}

function buildSchemaGraph(pathname, meta, canonical) {
  const localBusinessId = `${SITE_URL}/#localbusiness`;
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const serviceId = `${canonical}#service`;
  const breadcrumb = getBreadcrumb(pathname);

  const baseGraph = [
    {
      '@type': ['Organization', 'LocalBusiness', 'HomeAndConstructionBusiness'],
      '@id': localBusinessId,
      name: BRAND_NAME,
      alternateName: ['Cipta Kreasi Buana', 'Kreasi Buana'],
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL,
      },
      image: [DEFAULT_IMAGE, meta.image],
      description:
        'Studio interior, arsitektur, kontraktor interior premium, renovasi, modular kitchen, dan furniture custom di Tangerang Selatan.',
      telephone: '+6281903140377',
      email: 'ciptaBuanaKreasi@gmail.com',
      priceRange: 'Rp150.000 - Rp380.000 per meter persegi',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Pamulang 2, Cendana Residence',
        addressLocality: 'Tangerang Selatan',
        addressRegion: 'Banten',
        addressCountry: 'ID',
      },
      areaServed: [
        { '@type': 'City', name: 'Tangerang Selatan' },
        { '@type': 'City', name: 'Tangerang' },
        { '@type': 'City', name: 'Jakarta' },
        { '@type': 'AdministrativeArea', name: 'Jabodetabek' },
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '15:00',
        },
      ],
      sameAs: [
        'https://www.instagram.com/ciptakreasibuana.idn',
      ],
    },
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: BRAND_NAME,
      url: SITE_URL,
      logo: LOGO_URL,
      parentOrganization: {
        '@id': localBusinessId,
      },
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: SITE_URL,
      name: BRAND_NAME,
      inLanguage: 'id-ID',
      publisher: {
        '@id': localBusinessId,
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/portfolio?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: meta.title,
      description: meta.description,
      inLanguage: 'id-ID',
      isPartOf: {
        '@id': websiteId,
      },
      about: {
        '@id': localBusinessId,
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: meta.image,
      },
      breadcrumb: {
        '@id': `${canonical}#breadcrumb`,
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${canonical}#breadcrumb`,
      itemListElement: breadcrumb.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    },
  ];

  if (meta.type === 'service' || meta.priorityService) {
    baseGraph.push({
      '@type': 'Service',
      '@id': serviceId,
      name: meta.priorityService || 'Jasa Interior Tangerang dan Furniture Custom',
      description: meta.description,
      image: meta.image,
      url: canonical,
      provider: {
        '@id': localBusinessId,
      },
      areaServed: ['Tangerang Selatan', 'Tangerang', 'Jakarta', 'Jabodetabek'],
      serviceType: [
        'Design Interior Modern',
        'Kontraktor Interior Premium',
        'Desain Rumah Minimalis',
        'Interior Apartemen Mewah',
        'Furniture Custom Tangerang',
        'Modular Kitchen',
      ],
      offers: {
        '@type': 'Offer',
        priceCurrency: 'IDR',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/konsultasi`,
      },
    });
  }

  if (pathname === '/konsultasi') {
    baseGraph.push({
      '@type': 'FAQPage',
      '@id': `${canonical}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Berapa biaya jasa design interior PT Cipta Kreasi Buana?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Estimasi biaya bergantung pada luas ruang, kompleksitas desain, material, dan cakupan pekerjaan. Tim kami membantu menghitung kebutuhan proyek setelah konsultasi awal.',
          },
        },
        {
          '@type': 'Question',
          name: 'Apakah PT Cipta Kreasi Buana melayani furniture custom?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ya. Kami melayani furniture custom, modular kitchen, wardrobe, TV panel, storage built-in, dan loose furniture dengan ukuran sesuai ruang.',
          },
        },
      ],
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': baseGraph,
  };
}

function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const cleanPath = pathname.replace(/\/$/, '') || '/';
    const meta = pageMeta[cleanPath] || pageMeta['/'];
    const canonical = absoluteUrl(cleanPath);
    const keywords = PRIMARY_KEYWORDS.join(', ');

    document.documentElement.lang = 'id';
    document.title = meta.title;

    upsertMeta('meta[name="description"]', { name: 'description', content: meta.description });
    upsertMeta('meta[name="keywords"]', { name: 'keywords', content: keywords });
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    });
    upsertMeta('meta[name="author"]', { name: 'author', content: BRAND_NAME });
    upsertMeta('meta[name="application-name"]', { name: 'application-name', content: BRAND_NAME });
    upsertMeta('meta[name="apple-mobile-web-app-title"]', { name: 'apple-mobile-web-app-title', content: BRAND_NAME });
    upsertMeta('meta[name="geo.region"]', { name: 'geo.region', content: 'ID-BT' });
    upsertMeta('meta[name="geo.placename"]', { name: 'geo.placename', content: 'Tangerang Selatan' });

    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: meta.type === 'article' ? 'article' : 'website' });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: meta.title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: meta.description });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: meta.image });
    upsertMeta('meta[property="og:image:alt"]', {
      property: 'og:image:alt',
      content: `${BRAND_NAME} - ${meta.priorityService || 'studio interior dan arsitektur premium'}`,
    });
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'id_ID' });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: BRAND_NAME });

    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:url"]', { name: 'twitter:url', content: canonical });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: meta.title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: meta.description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: meta.image });

    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonical });
    upsertLink('link[rel="alternate"][hreflang="id-ID"]', { rel: 'alternate', hreflang: 'id-ID', href: canonical });
    upsertLink('link[rel="alternate"][hreflang="x-default"]', { rel: 'alternate', hreflang: 'x-default', href: canonical });

    upsertJsonLd('enterprise-seo-graph', buildSchemaGraph(cleanPath, meta, canonical));
  }, [pathname]);

  return null;
}

export default SEO;
