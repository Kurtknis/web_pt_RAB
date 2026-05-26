import type { InquiryRecord } from "@/schemas/inquiry";

export type LeadStage = InquiryRecord["stage"];
export type LeadStatus = InquiryRecord["status"];

export type LeadActivity = {
  id: string;
  leadId: string;
  type: "created" | "note" | "status-change" | "follow-up" | "quotation";
  label: string;
  createdAt: string;
};

export type CrmAdapter = {
  createLead(record: InquiryRecord): Promise<InquiryRecord>;
  listLeads(): Promise<InquiryRecord[]>;
  getLead(id: string): Promise<InquiryRecord | null>;
  listActivities(): Promise<LeadActivity[]>;
};
