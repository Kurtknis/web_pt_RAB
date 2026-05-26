import type { InquiryRecord } from "@/schemas/inquiry";
import { syncLeadToHubSpot } from "./hubspotAdapter";
import { localCrmAdapter } from "./localCrmAdapter";

const crm = localCrmAdapter;

export async function createCrmLead(record: InquiryRecord) {
  const lead = await crm.createLead(record);
  await syncLeadToHubSpot(lead);
  return lead;
}

export async function listCrmLeads() {
  return crm.listLeads();
}

export async function getCrmLead(id: string) {
  return crm.getLead(id);
}

export async function listCrmActivities() {
  return crm.listActivities();
}

export async function getCrmPipelineSummary() {
  const leads = await listCrmLeads();
  const stages: InquiryRecord["stage"][] = ["capture", "discovery", "quotation", "closing", "delivery"];

  return stages.map((stage) => ({
    stage,
    count: leads.filter((lead) => lead.stage === stage).length,
  }));
}
