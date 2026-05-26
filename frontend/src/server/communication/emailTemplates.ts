import type { InquiryRecord } from "@/schemas/inquiry";
import { buildInquirySummary } from "@/services/notification";

export function inquiryEmailTemplate(record: InquiryRecord) {
  return {
    subject: `Website inquiry: ${record.name}`,
    text: buildInquirySummary(record),
    html: `<pre style="font-family:Inter,Arial,sans-serif;white-space:pre-wrap">${buildInquirySummary(record)}</pre>`,
  };
}
