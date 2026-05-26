import { company } from "@/content/company";
import type { InquiryRecord } from "@/schemas/inquiry";

export function buildInquirySummary(record: InquiryRecord) {
  return [
    `Inquiry ${record.id}`,
    `Nama: ${record.name}`,
    `Kontak: ${record.contact}`,
    `Layanan: ${record.projectType}`,
    `Properti: ${record.propertyType}`,
    `Lokasi: ${record.location}`,
    `Area: ${record.area || "Belum diisi"}`,
    `Budget: ${record.budget}`,
    `Timeline: ${record.timeline}`,
    `Brief: ${record.message}`,
  ].join("\n");
}

export function buildWhatsAppInquiryUrl(record: InquiryRecord) {
  const text = encodeURIComponent(`Halo PT Cipta Kreasi Buana,\n\n${buildInquirySummary(record)}`);
  return `https://wa.me/${company.whatsapp}?text=${text}`;
}

export async function notifyInquiry(record: InquiryRecord) {
  const endpoint = process.env.INQUIRY_WEBHOOK_URL;

  if (!endpoint) {
    return { delivered: false, channel: "manual-whatsapp" as const };
  }

  await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      to: company.email,
      subject: `Website inquiry: ${record.name}`,
      record,
      summary: buildInquirySummary(record),
    }),
  });

  return { delivered: true, channel: "webhook" as const };
}
