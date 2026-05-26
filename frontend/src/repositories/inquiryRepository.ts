import type { InquiryRecord } from "@/schemas/inquiry";
import { createCrmLead, getCrmPipelineSummary } from "@/server/crm/crmService";

export async function createInquiryRecord(input: Omit<InquiryRecord, "id" | "createdAt" | "updatedAt" | "source" | "status" | "stage" | "tags" | "notes">) {
  const record: InquiryRecord = {
    ...input,
    id: crypto.randomUUID(),
    status: "new",
    stage: "capture",
    source: "website",
    tags: [input.projectType, input.propertyType, input.budget],
    notes: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  return createCrmLead(record);
}

export async function listInquiryPipeline() {
  const summary = await getCrmPipelineSummary();

  return summary.map((item) => ({
    label: item.stage,
    count: item.count,
    description: {
      capture: "Brief baru dari website, WhatsApp, referral, dan organic search.",
      discovery: "Lead yang sedang dilengkapi kebutuhan, foto ruang, dan ukuran.",
      quotation: "Lead siap proposal, RAB, atau scope of work.",
      closing: "Negosiasi dan persetujuan final.",
      delivery: "Proyek masuk onboarding dan tracking.",
    }[item.stage],
  }));
}
