import type { Metadata } from "next";
import Link from "next/link";
import { formatLeadBudget, formatLeadStage } from "@/features/crm/format";
import { listInquiryPipeline } from "@/repositories/inquiryRepository";
import { assertAdminAccess } from "@/server/admin/auth";
import { listCrmActivities, listCrmLeads } from "@/server/crm/crmService";

export const metadata: Metadata = {
  title: "Admin Foundation | Cipta Kreasi Buana",
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-dynamic";

const modules = [
  "Inquiry management",
  "Project management",
  "Testimonial management",
  "Portfolio upload",
  "Blog/content management",
  "Quotation tracking",
];

export default async function AdminPage() {
  await assertAdminAccess();
  const [pipeline, leads, activities] = await Promise.all([
    listInquiryPipeline(),
    listCrmLeads(),
    listCrmActivities(),
  ]);

  return (
    <main className="admin-shell">
      <section className="admin-shell__hero">
        <p className="kicker">Internal Platform</p>
        <h1>Corporate operating layer foundation.</h1>
        <p>Role-ready shell for future admin, CRM, portfolio, content, and quotation workflows.</p>
      </section>
      <section className="admin-grid" aria-label="Admin modules">
        {modules.map((module) => (
          <article key={module}>
            <span>Module</span>
            <h2>{module}</h2>
            <p>Prepared for protected CRUD, audit log, and CMS/CRM adapter integration.</p>
          </article>
        ))}
      </section>
      <section className="admin-pipeline" aria-label="Inquiry pipeline">
        {pipeline.map((item) => (
          <article key={item.label}>
            <strong>{item.count}</strong>
            <h2>{item.label}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </section>
      <section className="admin-table-section" aria-labelledby="admin-leads-title">
        <div>
          <p className="kicker">Lead Pipeline</p>
          <h2 id="admin-leads-title">Inquiry management</h2>
        </div>
        <div className="admin-table" role="table" aria-label="Inquiry table">
          <div role="row">
            <span>Name</span>
            <span>Stage</span>
            <span>Budget</span>
            <span>Follow-up</span>
            <span>Owner</span>
          </div>
          {leads.map((lead) => (
            <Link role="row" href={`/admin/leads/${lead.id}`} key={lead.id}>
              <span>{lead.name}</span>
              <span>{formatLeadStage(lead.stage)}</span>
              <span>{formatLeadBudget(lead.budget)}</span>
              <span>{lead.nextFollowUpAt ? new Intl.DateTimeFormat("id-ID", { dateStyle: "medium" }).format(new Date(lead.nextFollowUpAt)) : "TBD"}</span>
              <span>{lead.assignedTo ?? "Unassigned"}</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="admin-activity" aria-labelledby="admin-activity-title">
        <div>
          <p className="kicker">Activity Log</p>
          <h2 id="admin-activity-title">Recent movement</h2>
        </div>
        <div>
          {activities.map((activity) => (
            <article key={activity.id}>
              <span>{activity.type}</span>
              <p>{activity.label}</p>
              <time>{new Intl.DateTimeFormat("id-ID", { dateStyle: "medium", timeStyle: "short" }).format(new Date(activity.createdAt))}</time>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
