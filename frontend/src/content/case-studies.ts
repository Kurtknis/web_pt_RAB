export const caseStudyDetails: Record<string, {
  challenge: string;
  approach: string;
  result: string;
  timeline: string[];
  materials: string[];
  palette: string[];
}> = {
  "namo-seafood-pik": {
    challenge: "Menyatukan kebutuhan operasional restoran, alur tamu, VIP room, kitchen, dan identitas komersial dalam ruang bertingkat.",
    approach: "Zoning dibuat dari customer journey, lalu diterjemahkan ke material yang tahan traffic tinggi dan tetap terasa premium.",
    result: "Ruang makan, area VIP, dan back-of-house lebih mudah dibaca, lebih nyaman, dan lebih kuat secara brand.",
    timeline: ["Discovery operasional", "Layout dan flow tamu", "Material direction", "Site coordination", "Handover bertahap"],
    materials: ["Warm veneer tone", "Commercial-grade surface", "Layered lighting", "Custom booth seating"],
    palette: ["#1d1a16", "#6f5b43", "#b89b72", "#ece7df"],
  },
  "cendana-residence-blok-c1": {
    challenge: "Membuat rumah keluarga terasa lebih rapi, hangat, dan fungsional tanpa menghilangkan karakter hunian.",
    approach: "Storage, lighting, dan material disusun untuk mengurangi visual clutter dan memperbaiki ritme sirkulasi.",
    result: "Rumah terasa lebih tenang untuk aktivitas harian dengan detail finishing yang lebih matang.",
    timeline: ["Site audit", "Spatial planning", "Furniture detailing", "Production", "Installation"],
    materials: ["Neutral wall finish", "Wood laminate", "Soft ambient lighting", "Integrated storage"],
    palette: ["#f5f1ea", "#d8c9b3", "#6f5b43", "#17120c"],
  },
  "apartemen-collins": {
    challenge: "Mengoptimalkan apartemen compact agar storage bertambah tanpa membuat ruang terasa padat.",
    approach: "Built-in storage dan layout terbuka dipakai untuk menjaga sirkulasi tetap ringan.",
    result: "Unit terasa lebih lega, rapi, dan marketable untuk kebutuhan hunian urban.",
    timeline: ["Measurement", "Compact layout", "Furniture production", "Styling", "Final inspection"],
    materials: ["Light wood tone", "Compact hardware", "Easy-clean surface", "Warm lighting"],
    palette: ["#ece7df", "#c8b99f", "#8a8175", "#111111"],
  },
};

export function getCaseStudyDetail(slug: string) {
  return caseStudyDetails[slug] ?? {
    challenge: "Membaca kebutuhan ruang, fungsi harian, dan ekspektasi visual sebelum menentukan arah desain.",
    approach: "Menggabungkan zoning, material, dan detail eksekusi agar hasil akhir terasa rapi dan tahan digunakan.",
    result: "Ruang menjadi lebih jelas, lebih nyaman, dan lebih bernilai untuk pemilik maupun pengguna.",
    timeline: ["Discovery", "Design direction", "Material alignment", "Execution", "Handover"],
    materials: ["Selected surface", "Custom furniture", "Layered lighting", "Durable finishing"],
    palette: ["#f5f1ea", "#b89b72", "#6f5b43", "#111111"],
  };
}
