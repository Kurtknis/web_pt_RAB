import { serviceListSchema, type Service } from "@/schemas/content";

export type { Service };

const rawServices = [
  {
    slug: 'desain-interior',
    title: 'Interior Design',
    eyebrow: 'Spatial identity',
    description:
      'Konsep interior, layout, material, gambar kerja, dan styling untuk hunian serta ruang komersial yang tenang, rapi, dan bernilai.',
    image: '/projects/apartment-park-avenue/image-01.webp',
    benefits: ['Moodboard dan konsep ruang', 'Layout fungsional', 'Gambar kerja interior', 'Arahan material dan warna'],
  },
  {
    slug: 'arsitektur',
    title: 'Architecture',
    eyebrow: 'Form and proportion',
    description:
      'Perencanaan fasad, proporsi bangunan, dan bahasa arsitektur yang modern tanpa kehilangan kenyamanan sehari-hari.',
    image: '/projects/facade-kampung-sawah/image-01.webp',
    benefits: ['Konsep fasad', 'Zoning bangunan', 'Proporsi dan massa', 'Koordinasi desain interior'],
  },
  {
    slug: 'design-build',
    title: 'Design Build',
    eyebrow: 'Execution control',
    description:
      'Layanan terintegrasi dari desain sampai eksekusi: koordinasi lapangan, furniture custom, material, finishing, dan quality control.',
    image: '/projects/namo-seafood-pik/image-01.webp',
    benefits: ['Manajemen proyek', 'Kontrol kualitas', 'Procurement material', 'Handover rapi'],
  },
  {
    slug: 'furniture-custom',
    title: 'Custom Furniture',
    eyebrow: 'Made to measure',
    description:
      'Kitchen set, wardrobe, TV panel, storage, dan loose furniture yang dibuat sesuai ukuran, material, dan ritme ruang.',
    image: '/furniture/kitchen-cabinet-modern.webp',
    benefits: ['Pengukuran presisi', 'Finishing tahan lama', 'Storage efektif', 'Material sesuai kebutuhan'],
  },
] satisfies Service[];

export const services = serviceListSchema.parse(rawServices);
