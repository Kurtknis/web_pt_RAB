"use client";

import { useEffect } from "react";
import { reportClientError } from "@/services/monitoring";

export function RouteErrorBoundary({
  error,
  reset,
  label = "Route recovery",
}: {
  error: Error & { digest?: string };
  reset: () => void;
  label?: string;
}) {
  useEffect(() => {
    reportClientError(error, { boundary: label, digest: error.digest });
  }, [error, label]);

  return (
    <main className="route-state">
      <section className="route-state__panel" aria-labelledby="route-error-title">
        <p className="kicker">{label}</p>
        <h1 id="route-error-title">Konten belum bisa dimuat.</h1>
        <p>Halaman ini aman, tetapi sebagian data gagal diproses. Silakan coba lagi.</p>
        <button className="button button--light" type="button" onClick={reset}>
          Coba Lagi
        </button>
      </section>
    </main>
  );
}
