"use client";

import { useEffect } from "react";
import { reportClientError } from "@/services/monitoring";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    reportClientError(error, { boundary: "global", digest: error.digest });
  }, [error]);

  return (
    <main className="route-state">
      <section className="route-state__panel" aria-labelledby="route-error-title">
        <p className="kicker">Runtime recovery</p>
        <h1 id="route-error-title">Halaman belum bisa ditampilkan.</h1>
        <p>Sistem menangkap masalah runtime dan menjaga pengalaman tetap aman. Silakan coba muat ulang halaman ini.</p>
        <button className="button button--light" type="button" onClick={reset}>
          Coba Lagi
        </button>
      </section>
    </main>
  );
}
