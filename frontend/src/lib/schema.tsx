import { company, siteUrl } from '@/content/company';
import { getContentProvider } from '@/providers/contentProvider';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'InteriorDesign'],
    name: company.name,
    legalName: company.legalName,
    url: siteUrl,
    logo: `${siteUrl}/ptkreasi.webp`,
    image: `${siteUrl}/backgroundC1.png`,
    description: company.description,
    telephone: company.phone,
    email: company.email,
    priceRange: 'Rp 150.000/m2 - Rp 380.000/m2',
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address,
      addressLocality: 'Tangerang Selatan',
      addressRegion: 'Banten',
      addressCountry: 'ID',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: company.phone,
      contactType: 'customer service',
      availableLanguage: ['Indonesian'],
    },
    areaServed: company.areaServed,
    sameAs: Object.values(company.social),
  };
}

export function servicesSchema() {
  return getContentProvider().services().map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    serviceType: service.title,
    areaServed: company.areaServed,
    provider: {
      '@type': 'Organization',
      name: company.name,
      url: siteUrl,
    },
  }));
}

export function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Berapa harga jasa desain interior PT Cipta Kreasi Buana?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Harga desain interior dimulai dari Rp 150.000/m2, bergantung luas, kompleksitas ruang, pilihan material, dan cakupan design build.',
        },
      },
      {
        '@type': 'Question',
        name: 'Apakah PT Cipta Kreasi Buana melayani renovasi rumah?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ya. Layanan mencakup renovasi interior, fasad, custom furniture, koordinasi material, dan manajemen proyek sampai handover.',
        },
      },
      {
        '@type': 'Question',
        name: 'Area layanan PT Cipta Kreasi Buana di mana saja?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Area utama meliputi Tangerang, Tangerang Selatan, Jakarta, BSD, Serpong, dan wilayah Jabodetabek tertentu.',
        },
      },
    ],
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#local-business`,
    name: company.name,
    image: `${siteUrl}/backgroundC1.webp`,
    url: siteUrl,
    telephone: company.phone,
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address,
      addressLocality: 'Tangerang Selatan',
      addressRegion: 'Banten',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -6.3421,
      longitude: 106.7387,
    },
    areaServed: company.areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    priceRange: 'Rp 150.000/m2 - Rp 380.000/m2',
  };
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}
