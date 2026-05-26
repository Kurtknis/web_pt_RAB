export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  category: "renovasi" | "interior" | "furniture" | "quotation";
  author: string;
  readingMinutes: number;
  tags: string[];
};

export const authors = {
  studio: {
    name: "Cipta Kreasi Buana Studio",
    role: "Interior, Architecture, and Design Build Team",
  },
};

export const topicClusters = [
  { title: "Quotation readiness", description: "Brief, budget, timeline, dan scope agar proposal lebih akurat." },
  { title: "Residential renovation", description: "Panduan renovasi rumah dan apartemen untuk keluarga modern." },
  { title: "Custom furniture", description: "Storage, kitchen, wardrobe, dan built-in furniture yang presisi." },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "cara-menyiapkan-brief-desain-interior",
    title: "Cara Menyiapkan Brief Desain Interior Sebelum Konsultasi",
    excerpt: "Panduan menyiapkan foto ruang, ukuran, budget, timeline, dan referensi agar proses quotation lebih cepat.",
    publishedAt: "2026-01-12",
    category: "quotation",
    author: authors.studio.name,
    readingMinutes: 4,
    tags: ["brief desain interior", "konsultasi interior", "quotation renovasi"],
  },
  {
    slug: "estimasi-biaya-renovasi-rumah-tangerang",
    title: "Estimasi Biaya Renovasi Rumah di Tangerang",
    excerpt: "Faktor yang memengaruhi biaya renovasi rumah, mulai dari scope, material, ukuran ruang, sampai kualitas finishing.",
    publishedAt: "2026-01-18",
    category: "renovasi",
    author: authors.studio.name,
    readingMinutes: 5,
    tags: ["biaya renovasi rumah", "renovasi Tangerang", "design build"],
  },
  {
    slug: "custom-furniture-vs-furniture-jadi",
    title: "Custom Furniture vs Furniture Jadi untuk Hunian Premium",
    excerpt: "Perbandingan fungsi, durabilitas, presisi ukuran, dan tampilan visual untuk ruang tinggal modern.",
    publishedAt: "2026-01-24",
    category: "furniture",
    author: authors.studio.name,
    readingMinutes: 4,
    tags: ["custom furniture", "kitchen set", "wardrobe built in"],
  },
];
