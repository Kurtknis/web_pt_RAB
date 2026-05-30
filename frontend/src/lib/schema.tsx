import { company, siteUrl } from '@/content/company';
import { getContentProvider } from '@/providers/contentProvider';
import type { Project, Service } from '@/schemas/content';

const businessId = `${siteUrl}/#local-business`;
const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': organizationId,
    name: company.name,
    legalName: company.legalName,
    url: siteUrl,
    logo: absoluteUrl('/ptkreasi.webp'),
    image: absoluteUrl('/backgroundC1.png'),
    description: company.description,
    telephone: company.phone,
    email: company.email,
    foundingDate: company.foundingYear,
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
    areaServed: company.areaServed.map((area) => ({ '@type': 'City', name: area })),
    sameAs: Object.values(company.social),
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId,
    name: company.name,
    alternateName: company.shortName,
    url: siteUrl,
    inLanguage: 'id-ID',
    publisher: {
      '@id': organizationId,
    },
    about: ['jasa interior Jakarta', 'jasa interior Tangerang Selatan', 'desain interior minimalis', 'custom furniture interior'],
  };
}

export function servicesSchema() {
  return getContentProvider().services().map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteUrl}/layanan/${service.slug}#service`,
    name: service.title,
    description: service.description,
    serviceType: service.title,
    url: `${siteUrl}/layanan/${service.slug}`,
    image: absoluteUrl(service.image),
    areaServed: company.areaServed.map((area) => ({ '@type': 'City', name: area })),
    provider: {
      '@id': businessId,
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed: company.areaServed.join(', '),
      priceCurrency: 'IDR',
    },
  }));
}

export function serviceDetailSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteUrl}/layanan/${service.slug}#service`,
    name: service.title,
    serviceType: service.title,
    description: service.description,
    url: `${siteUrl}/layanan/${service.slug}`,
    image: absoluteUrl(service.image),
    provider: {
      '@id': businessId,
    },
    areaServed: company.areaServed.map((area) => ({ '@type': 'City', name: area })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.title} PT Cipta Kreasi Buana`,
      itemListElement: service.benefits.map((benefit) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: benefit,
        },
      })),
    },
  };
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
        name: 'Apakah PT Cipta Kreasi Buana melayani jasa interior Jakarta?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ya. Tim melayani desain interior apartemen, rumah, kantor, restoran, retail, custom furniture, dan renovasi interior untuk Jakarta dan area Jabodetabek tertentu.',
        },
      },
      {
        '@type': 'Question',
        name: 'Area layanan PT Cipta Kreasi Buana di mana saja?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Area utama meliputi Jakarta, Tangerang Selatan, BSD, Alam Sutera, Bintaro, Serpong, Tangerang, dan wilayah Jabodetabek tertentu.',
        },
      },
      {
        '@type': 'Question',
        name: 'Apakah tersedia custom furniture untuk ruang kecil?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ya. Tim merancang kitchen set, wardrobe, TV panel, storage, dan built-in furniture sesuai ukuran ruang agar apartemen studio, kamar, atau rumah compact tetap rapi dan mudah digunakan.',
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
    '@type': ['LocalBusiness', 'ProfessionalService', 'InteriorDesign'],
    '@id': businessId,
    name: company.name,
    legalName: company.legalName,
    image: absoluteUrl('/backgroundC1.webp'),
    logo: absoluteUrl('/ptkreasi.webp'),
    url: siteUrl,
    telephone: company.phone,
    email: company.email,
    description: company.description,
    priceRange: 'Rp 150.000/m2 - Rp 380.000/m2',
    openingHours: company.openingHours,
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
    sameAs: Object.values(company.social),
    parentOrganization: {
      '@id': organizationId,
    },
  };
}

export function portfolioItemListSchema(projects: readonly Project[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Portfolio desain interior PT Cipta Kreasi Buana',
    description: 'Portofolio interior, arsitektur, renovasi, custom furniture, dan ruang komersial di Jakarta, Tangerang Selatan, BSD, Bintaro, Alam Sutera, dan Serpong.',
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: projectCreativeWorkSchema(project),
    })),
  };
}

export function projectCreativeWorkSchema(project: Project) {
  return {
    '@type': ['CreativeWork', 'Project'],
    '@id': `${siteUrl}/portfolio/${project.slug}#project`,
    name: project.title,
    headline: `${project.title} - ${project.category} ${project.location}`,
    description: project.description,
    url: `${siteUrl}/portfolio/${project.slug}`,
    image: absoluteUrl(project.image),
    datePublished: `${project.year}-01-01`,
    creator: {
      '@id': organizationId,
    },
    provider: {
      '@id': businessId,
    },
    about: [project.category, project.designStyle, project.roomType],
    genre: project.designStyle,
    spatialCoverage: {
      '@type': 'Place',
      name: project.location,
    },
    locationCreated: {
      '@type': 'Place',
      name: project.location,
    },
    material: project.materials.join(', '),
    keywords: [project.category, project.location, project.designStyle, project.roomType, ...project.materials].join(', '),
  };
}

export function serviceAreaSchema(area: { slug: string; name: string; province: string; description: string; intent: string[] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Jasa interior ${area.name}`,
    description: area.description,
    url: `${siteUrl}/area/${area.slug}`,
    inLanguage: 'id-ID',
    about: area.intent,
    spatialCoverage: {
      '@type': 'Place',
      name: `${area.name}, ${area.province}`,
    },
    provider: {
      '@id': businessId,
    },
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
