"use server";

import { inquirySchema } from "@/schemas/inquiry";
import { createInquiryRecord } from "@/repositories/inquiryRepository";
import { buildWhatsAppInquiryUrl, notifyInquiry } from "@/services/notification";
import { createBusinessEvent } from "@/server/automation/events";
import { dispatchBusinessEvent } from "@/server/automation/webhookDispatcher";

export type InquiryActionState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Record<string, string[]>;
  whatsappUrl?: string;
};

export async function submitInquiry(_: InquiryActionState, formData: FormData): Promise<InquiryActionState> {
  const payload = Object.fromEntries(formData.entries());
  const parsed = inquirySchema.safeParse(payload);

  if (!parsed.success) {
    return {
      status: "error",
      message: "Mohon lengkapi brief proyek dengan data yang valid.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  if (parsed.data.website) {
    return {
      status: "success",
      message: "Brief diterima.",
    };
  }

  const record = await createInquiryRecord(parsed.data);
  await notifyInquiry(record);
  await dispatchBusinessEvent(createBusinessEvent({ type: "lead.created", leadId: record.id, createdAt: record.createdAt }));

  return {
    status: "success",
    message: "Brief proyek sudah tersusun. Lanjutkan ke WhatsApp agar tim dapat merespons lebih cepat.",
    whatsappUrl: buildWhatsAppInquiryUrl(record),
  };
}
