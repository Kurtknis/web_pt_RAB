import type { InquiryRecord } from "@/schemas/inquiry";

export function toHubSpotContactProperties(record: InquiryRecord) {
  return {
    firstname: record.name,
    phone: record.contact,
    city: record.location,
    project_type: record.projectType,
    property_type: record.propertyType,
    project_budget: record.budget,
    project_timeline: record.timeline,
    lead_source: record.source,
    lead_status: record.status,
  };
}

export async function syncLeadToHubSpot(record: InquiryRecord) {
  const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  if (!token) return { synced: false as const };

  await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({ properties: toHubSpotContactProperties(record) }),
  });

  return { synced: true as const };
}
