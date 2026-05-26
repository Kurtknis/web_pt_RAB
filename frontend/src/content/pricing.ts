import { pricingListSchema, type PricingPackage } from "@/schemas/content";

export type { PricingPackage };

const rawPricing = [
  {
    slug: 'basic-interior',
    name: 'Basic Interior',
    description: 'Paket desain interior untuk apartemen atau rumah kecil dengan kebutuhan layout, konsep, dan gambar kerja.',
    startingPrice: 'Mulai Rp 150.000/m2',
    features: ['Konsep desain interior', 'Layout fungsional', 'Gambar kerja', 'Arahan material standar'],
  },
  {
    slug: 'premium-interior',
    name: 'Premium Interior',
    description: 'Pendekatan interior lebih lengkap dengan opsi material, custom furniture ringan, dan koordinasi teknis.',
    startingPrice: 'Mulai Rp 200.000/m2',
    features: ['Semua Basic Interior', 'Moodboard premium', 'Custom furniture ringan', 'Koordinasi kontraktor'],
  },
  {
    slug: 'full-renovation',
    name: 'Full Renovation',
    description: 'Transformasi ruang menyeluruh untuk rumah, apartemen, atau ruko dengan manajemen proyek terpadu.',
    startingPrice: 'Mulai Rp 250.000/m2',
    features: ['Renovasi dan interior', 'Material pilihan', 'Quality control', 'Timeline terstruktur'],
  },
  {
    slug: 'design-build',
    name: 'Design Build',
    description: 'Layanan paling lengkap dari konsep sampai handover untuk proyek residensial dan komersial premium.',
    startingPrice: 'Mulai Rp 280.000/m2',
    features: ['Arsitektur interior', 'Koordinasi mekanikal elektrikal', 'Tim dedicated', 'Garansi pasca serah terima'],
  },
] satisfies PricingPackage[];

export const pricing = pricingListSchema.parse(rawPricing);
