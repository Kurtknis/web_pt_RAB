import { RouteState } from "@/components/ui/RouteState";

export default function NotFound() {
  return (
    <RouteState
      eyebrow="404"
      title="Halaman tidak ditemukan."
      description="Rute yang dibuka tidak tersedia atau sudah dipindahkan. Anda tetap bisa kembali ke alur utama website."
      actionLabel="Kembali ke Home"
      actionHref="/"
    />
  );
}
