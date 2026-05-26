import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { portalPreview } from "@/features/client-portal/clientPortalData";

export const metadata: Metadata = createMetadata({
  title: "Client Portal Preview | Cipta Kreasi Buana",
  description: "Preview fondasi client portal untuk progress proyek, quotation, dokumen, dan jadwal konsultasi.",
  path: "/client-portal",
});

export default function ClientPortalPage() {
  return (
    <main className="page-shell">
      <section className="section section--ivory client-portal">
        <div className="luxury-container client-portal__hero">
          <p className="kicker">Client Portal</p>
          <h1>Project clarity for every client milestone.</h1>
          <p>Fondasi portal untuk quotation tracking, progress proyek, document sharing, dan consultation scheduling.</p>
        </div>
        <div className="luxury-container client-portal__grid">
          <article>
            <span>Client</span>
            <h2>{portalPreview.client}</h2>
            <p>{portalPreview.project}</p>
          </article>
          <article>
            <span>Quotation</span>
            <h2>{portalPreview.quotationStatus}</h2>
            <p>Prepared for future secure client login and approval workflow.</p>
          </article>
          <article>
            <span>Documents</span>
            <h2>{portalPreview.documents.length} files</h2>
            <p>{portalPreview.documents.join(", ")}</p>
          </article>
        </div>
        <div className="luxury-container portal-progress">
          {portalPreview.progress.map((item) => (
            <article key={item.label} data-state={item.state}>
              <span>{item.state}</span>
              <h2>{item.label}</h2>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
