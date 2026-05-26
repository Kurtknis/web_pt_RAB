import { furnitureListSchema, type FurnitureItem } from "@/schemas/content";

const rawFurniture = [
  {
    slug: 'kitchen-cabinet-modern',
    title: 'Kitchen Cabinet Modern',
    category: 'Kitchen',
    image: '/furniture/kitchen-cabinet-modern.webp',
    description: 'Kitchen storage custom dengan finishing tahan lama, proporsi bersih, dan area kerja efisien.',
  },
  {
    slug: 'wardrobe-built-in',
    title: 'Wardrobe Built-in',
    category: 'Bedroom',
    image: '/furniture/wardrobe-built-in.webp',
    description: 'Sistem wardrobe built-in sesuai ukuran ruang dan kebiasaan penyimpanan harian.',
  },
  {
    slug: 'dining-set-premium',
    title: 'Set Meja Makan Premium',
    category: 'Dining',
    image: '/furniture/dining-set-premium.webp',
    description: 'Furniture dining dengan komposisi material hangat dan durabilitas untuk penggunaan sehari-hari.',
  },
] satisfies FurnitureItem[];

export const furniture = furnitureListSchema.parse(rawFurniture);
