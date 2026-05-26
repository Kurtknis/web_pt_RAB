import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatLeadBudget, formatLeadStage } from "@/features/crm/format";
import { assertAdminAccess } from "@/server/admin/auth";
import { getCrmLead } from "@/server/crm/crmService";

export const metadata: Metadata = {
  title: "Lead Detail | Cipta Kreasi Buana",
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-dynamic";

export default async function LeadDetailPage({ params }: { params: Promise<{ id: string }> }) {
  await assertAdminAccess();
  const { id } = await params;
  const lead = await getCrmLead(id);
  if (!lead) notFound();

  return (
    <main className="admin-shell">
      <section className="admin-shell__hero">
        <p className="kicker">Lead Detail</p>
        <h1>{lead.name}</h1>
        <p>{lead.message}</p>
      </section>
      <section className="lead-detail-grid">
        <article>
          <span>Status</span>
          <h2>{lead.status}</h2>
          <p>{formatLeadStage(lead.stage)}</p>
        </article>
        <article>
          <span>Budget</span>
          <h2>{formatLeadBudget(lead.budget)}</h2>
          <p>{lead.timeline}</p>
        </article>
        <article>
          <span>Contact</span>
          <h2>{lead.contact}</h2>
          <p>{lead.location}</p>
        </article>
      </section>
      <section className="admin-activity">
        <div>
          <p className="kicker">Internal Notes</p>
          <h2>Follow-up intelligence</h2>
        </div>
        <div>
          {lead.notes.length ? lead.notes.map((note) => (
            <article key={note.id}>
              <span>{note.author}</span>
              <p>{note.body}</p>
              <time>{new Intl.DateTimeFormat("id-ID", { dateStyle: "medium", timeStyle: "short" }).format(new Date(note.createdAt))}</time>
            </article>
          )) : (
            <article>
              <span>System</span>
              <p>No notes yet. Prepared for assignment, follow-up history, and audit trail.</p>
            </article>
          )}
        </div>
      </section>
    </main>
  );
}
