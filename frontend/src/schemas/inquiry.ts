import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().trim().min(2, "Nama wajib diisi").max(120),
  contact: z.string().trim().min(6, "Kontak wajib diisi").max(160),
  projectType: z.enum(["interior", "architecture", "design-build", "furniture", "renovation", "commercial"]),
  location: z.string().trim().min(2, "Lokasi proyek wajib diisi").max(160),
  propertyType: z.enum(["rumah", "apartemen", "ruko", "kantor", "retail", "hospitality", "lainnya"]),
  area: z.string().trim().max(80).optional(),
  budget: z.enum(["under-50", "50-150", "150-300", "300-750", "750-plus", "undecided"]),
  timeline: z.enum(["urgent", "1-3-months", "3-6-months", "planning"]),
  message: z.string().trim().min(20, "Brief minimal 20 karakter").max(1600),
  website: z.string().max(0).optional(),
});

export type InquiryInput = z.infer<typeof inquirySchema>;

export type InquiryRecord = InquiryInput & {
  id: string;
  status: "new" | "qualified" | "proposal" | "negotiation" | "won" | "lost" | "archived";
  createdAt: string;
  updatedAt: string;
  source: "website" | "whatsapp" | "referral" | "instagram" | "organic";
  stage: "capture" | "discovery" | "quotation" | "closing" | "delivery";
  tags: string[];
  assignedTo?: string;
  nextFollowUpAt?: string;
  notes: Array<{
    id: string;
    author: string;
    body: string;
    createdAt: string;
  }>;
};
