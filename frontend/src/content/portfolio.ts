import { projectListSchema, type Project } from "@/schemas/content";

export type { Project };

const projectImage = (project: string, file: string) => `/projects/${project}/${file}`;

const rawPortfolio = [
  {
    slug: 'apartemen-collins',
    title: 'Apartemen Collins',
    category: 'Residential',
    location: 'Jakarta',
    year: '2024',
    description:
      'Desain interior apartemen modern dengan living dan dapur terintegrasi, material hangat, dan storage rapi untuk hunian urban.',
    image: projectImage('apartemen-collins', 'image-01.webp'),
    gallery: ['image-01.webp', 'image-02.webp', 'image-03.webp', 'image-04.webp'].map((file) => projectImage('apartemen-collins', file)),
    featured: true,
  },
  {
    slug: 'park-avenue-serpong',
    title: 'Apartment Park Avenue Serpong',
    category: 'Residential',
    location: 'Serpong, Tangerang',
    year: '2024',
    description:
      'Interior apartemen dengan konsep terbuka, pencahayaan alami, dan storage maksimal untuk ruang yang nyaman dan mudah dirawat.',
    image: projectImage('apartment-park-avenue', 'image-01.webp'),
    gallery: ['image-01.webp', 'image-02.webp', 'image-03.webp'].map((file) => projectImage('apartment-park-avenue', file)),
    featured: true,
  },
  {
    slug: 'cendana-residence-blok-c1',
    title: 'Cendana Residence Blok C1',
    category: 'Residential',
    location: 'Cendana, Tangerang Selatan',
    year: '2024',
    description:
      'Renovasi dan desain interior rumah tinggal dengan material pilihan, pencahayaan lembut, dan detail finishing yang rapi.',
    image: projectImage('cendana-residence-blok-c1', 'image-01.webp'),
    gallery: ['image-01.webp', 'image-02.webp', 'image-10.webp', 'image-13.webp'].map((file) => projectImage('cendana-residence-blok-c1', file)),
    featured: true,
  },
  {
    slug: 'facade-kampung-sawah',
    title: 'Facade Kampung Sawah',
    category: 'Architecture',
    location: 'Kampung Sawah',
    year: '2024',
    description:
      'Transformasi fasad rumah tinggal menjadi lebih modern, rapi, dan berkarakter melalui proporsi serta material yang tepat.',
    image: projectImage('facade-kampung-sawah', 'image-01.webp'),
    gallery: ['image-01.webp', 'image-02.webp'].map((file) => projectImage('facade-kampung-sawah', file)),
    featured: false,
  },
  {
    slug: 'namo-seafood-pik',
    title: 'Namo Seafood PIK',
    category: 'Commercial',
    location: 'Golf Island, PIK',
    year: '2024',
    description:
      'Interior restoran tiga lantai dengan dining area, VIP room, dapur komersial, dan fasad yang kuat secara branding.',
    image: projectImage('namo-seafood-pik', 'image-01.webp'),
    gallery: ['image-01.webp', 'image-02.webp', 'image-03.webp'].map((file) => projectImage('namo-seafood-pik', file)),
    featured: true,
  },
  {
    slug: 'rumah-gunung-sindur',
    title: 'Rumah Gunung Sindur',
    category: 'Residential',
    location: 'Gunung Sindur, Bogor',
    year: '2024',
    description:
      'Rumah tinggal skala besar dengan arsitektur interior terpadu, material premium, dan eksekusi terstruktur hingga serah terima.',
    image: projectImage('rumah-gunung-sindur', 'image-01.webp'),
    gallery: ['image-01.webp', 'image-02.webp', 'image-08.webp'].map((file) => projectImage('rumah-gunung-sindur', file)),
    featured: false,
  },
] satisfies Project[];

export const portfolio = projectListSchema.parse(rawPortfolio);
export const featuredProjects = portfolio.filter((project) => project.featured);
