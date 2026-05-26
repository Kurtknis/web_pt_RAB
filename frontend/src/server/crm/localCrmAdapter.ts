import type { InquiryRecord } from "@/schemas/inquiry";
import { seededActivities, seededLeads } from "./seed";
import type { CrmAdapter } from "./types";

let memoryLeads = [...seededLeads];

export const localCrmAdapter: CrmAdapter = {
  async createLead(record: InquiryRecord) {
    memoryLeads = [record, ...memoryLeads];
    return record;
  },
  async listLeads() {
    return memoryLeads;
  },
  async getLead(id: string) {
    return memoryLeads.find((lead) => lead.id === id) ?? null;
  },
  async listActivities() {
    return seededActivities;
  },
};
