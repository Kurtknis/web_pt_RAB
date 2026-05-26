import type { InquiryRecord } from "@/schemas/inquiry";

export function toSalesforceLeadPayload(record: InquiryRecord) {
  return {
    LastName: record.name,
    Company: record.propertyType,
    Phone: record.contact,
    City: record.location,
    LeadSource: record.source,
    Status: record.status,
    Description: record.message,
  };
}
