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
    designStyle: 'Modern warm minimalism',
    roomType: 'Apartemen compact, living room, dapur, dan storage built-in',
    areaSize: 'Studio hingga 2 bedroom compact',
    timeline: '6-10 minggu desain, produksi, dan instalasi',
    materials: ['Light wood laminate', 'Easy-clean surface', 'Compact hardware', 'Warm ambient lighting'],
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
    designStyle: 'Modern apartment interior with calm neutral palette',
    roomType: 'Interior apartemen, living area, bedroom, kitchen, dan storage',
    areaSize: 'Apartemen urban menengah',
    timeline: '6-12 minggu sesuai scope furniture dan finishing',
    materials: ['Warm veneer tone', 'Neutral wall finish', 'Layered lighting', 'Custom storage'],
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
    designStyle: 'Residential modern classic with warm material balance',
    roomType: 'Rumah tinggal, living room, bedroom, dining, dan built-in furniture',
    areaSize: 'Rumah keluarga multi-ruang',
    timeline: '8-14 minggu desain, produksi, renovasi, dan handover',
    materials: ['Wood laminate', 'Neutral wall finish', 'Soft ambient lighting', 'Integrated storage'],
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
    designStyle: 'Modern tropical facade',
    roomType: 'Fasad rumah tinggal dan tampilan eksterior',
    areaSize: 'Rumah tapak keluarga',
    timeline: '4-8 minggu desain fasad dan koordinasi pekerjaan',
    materials: ['Textured wall finish', 'Architectural profile', 'Exterior lighting', 'Weather-ready coating'],
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
    designStyle: 'Commercial hospitality interior with premium dining atmosphere',
    roomType: 'Restoran, VIP room, dining area, kitchen, corridor, dan facade',
    areaSize: 'Ruko komersial bertingkat',
    timeline: '10-18 minggu desain, koordinasi lapangan, dan handover bertahap',
    materials: ['Commercial-grade surface', 'Warm veneer tone', 'Custom booth seating', 'Layered hospitality lighting'],
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
    designStyle: 'Premium residential architecture and interior',
    roomType: 'Rumah tinggal, interior keluarga, facade, dan custom furniture',
    areaSize: 'Rumah tinggal skala besar',
    timeline: '12-20 minggu menyesuaikan scope arsitektur dan interior',
    materials: ['Selected stone texture', 'Wood surface', 'Custom cabinetry', 'Warm architectural lighting'],
    image: projectImage('rumah-gunung-sindur', 'image-01.webp'),
    gallery: ['image-01.webp', 'image-02.webp', 'image-08.webp'].map((file) => projectImage('rumah-gunung-sindur', file)),
    featured: false,
  },
] satisfies Project[];

export const portfolio = projectListSchema.parse(rawPortfolio);
export const featuredProjects = portfolio.filter((project) => project.featured);
