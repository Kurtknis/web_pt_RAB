import { RouteState } from "@/components/ui/RouteState";

export default function NotFound() {
  return (
    <RouteState
      eyebrow="404"
      title="Konten tidak ditemukan."
      description="Konten yang Anda cari tidak tersedia, tetapi alur utama website tetap bisa diakses."
      actionLabel="Kembali ke Home"
      actionHref="/"
    />
  );
}