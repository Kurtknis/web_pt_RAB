import type { InquiryRecord } from "@/schemas/inquiry";
import { buildWhatsAppInquiryUrl } from "@/services/notification";

export function formatInquiryWhatsApp(record: InquiryRecord) {
  return buildWhatsAppInquiryUrl(record);
}
