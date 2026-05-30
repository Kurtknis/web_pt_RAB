export type ServiceArea = {
  slug: string;
  name: string;
  province: string;
  headline: string;
  description: string;
  intent: string[];
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'jakarta',
    name: 'Jakarta',
    province: 'DKI Jakarta',
    headline: 'Jasa interior Jakarta untuk apartemen, rumah, dan ruang komersial modern.',
    description:
      'PT Cipta Kreasi Buana membantu klien Jakarta menata interior apartemen, rumah, kantor, retail, dan restoran dengan layout fungsional, material premium, serta eksekusi design build yang rapi.',
    intent: ['jasa interior jakarta', 'interior apartemen jakarta', 'jasa renovasi interior jakarta'],
  },
  {
    slug: 'tangerang-selatan',
    name: 'Tangerang Selatan',
    province: 'Banten',
    headline: 'Studio interior Tangerang Selatan untuk hunian premium dan custom furniture.',
    description:
      'Area layanan utama mencakup Pamulang, Bintaro, BSD, Serpong, dan Alam Sutera untuk desain interior, renovasi, custom furniture, arsitektur, dan design build.',
    intent: ['jasa interior tangerang selatan', 'interior bintaro', 'custom furniture tangerang selatan'],
  },
  {
    slug: 'bsd',
    name: 'BSD',
    province: 'Banten',
    headline: 'Desain interior BSD dengan pendekatan modern, tenang, dan presisi.',
    description:
      'Layanan interior BSD difokuskan pada rumah keluarga, apartemen, kitchen set, wardrobe, ruang kerja, dan renovasi interior yang membutuhkan detail material serta storage yang efektif.',
    intent: ['jasa interior bsd', 'desain interior bsd', 'custom furniture bsd'],
  },
  {
    slug: 'alam-sutera',
    name: 'Alam Sutera',
    province: 'Banten',
    headline: 'Interior Alam Sutera untuk rumah modern, apartemen, dan ruang bisnis.',
    description:
      'Studio membantu proyek Alam Sutera dari brief, konsep ruang, gambar kerja, arahan material, furniture custom, sampai koordinasi produksi dan instalasi.',
    intent: ['jasa interior alam sutera', 'desain interior alam sutera', 'renovasi interior alam sutera'],
  },
  {
    slug: 'bintaro',
    name: 'Bintaro',
    province: 'Banten',
    headline: 'Jasa interior Bintaro untuk renovasi rumah dan furniture custom.',
    description:
      'Pendekatan desain Bintaro mengutamakan rumah yang nyaman dipakai harian: sirkulasi jelas, storage rapi, pencahayaan lembut, dan material tahan lama.',
    intent: ['jasa interior bintaro', 'renovasi interior bintaro', 'kitchen set bintaro'],
  },
  {
    slug: 'serpong',
    name: 'Serpong',
    province: 'Banten',
    headline: 'Desain interior Serpong untuk hunian compact, rumah keluarga, dan komersial.',
    description:
      'Untuk proyek Serpong, tim merapikan kebutuhan layout, material, furniture built-in, dan timeline agar desain interior terasa premium tanpa kehilangan fungsi.',
    intent: ['jasa interior serpong', 'interior apartemen serpong', 'custom furniture serpong'],
  },
];

export function getServiceArea(slug: string) {
  return serviceAreas.find((area) => area.slug === slug) ?? null;
}
