import { testimonialListSchema, type Testimonial } from "@/schemas/content";

export type { Testimonial };

const rawTestimonials = [
  {
    name: 'Pak Yudha',
    role: 'Homeowner',
    project: 'Renovasi Interior Rumah 2 Lantai',
    quote: 'Tim sangat detail dari konsep sampai eksekusi. Hasil akhir sesuai moodboard dan kualitas pengerjaan rapi.',
    rating: 5,
    image: '/testimoni/image.webp',
  },
  {
    name: 'Rina Maharani',
    role: 'Business Owner',
    project: 'Desain Cafe dan Build Interior',
    quote: 'Layout bisnis jadi jauh lebih efektif. Banyak customer bilang tempat kami sekarang lebih premium dan nyaman.',
    rating: 5,
  },
  {
    name: 'Kevin Wijaya',
    role: 'Property Investor',
    project: 'Renovasi Unit Sewa Premium',
    quote: 'Value investasinya terasa. Unit cepat tersewa karena desain terlihat modern dan marketable.',
    rating: 5,
  },
  {
    name: 'Maya Lestari',
    role: 'Architect Partner',
    project: 'Custom Furniture Residential',
    quote: 'Kualitas custom furniture sangat baik. Finishing clean, fitting presisi, dan support after-sales juga responsif.',
    rating: 5,
  },
] satisfies Testimonial[];

export const testimonials = testimonialListSchema.parse(rawTestimonials);
