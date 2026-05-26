export const routes = {
  home: "/",
  layanan: "/layanan",
  furnitur: "/furnitur",
  harga: "/harga",
  klien: "/klien",
  konsultasi: "/konsultasi",
  portfolio: "/portfolio",
} as const;

export const criticalRoutes = Object.values(routes);
