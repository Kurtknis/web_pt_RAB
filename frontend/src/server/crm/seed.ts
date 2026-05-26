import type { InquiryRecord } from "@/schemas/inquiry";
import type { LeadActivity } from "./types";

export const seededLeads: InquiryRecord[] = [
  {
    id: "lead-namo-001",
    name: "Bapak Adrian",
    contact: "+62 812-0000-1188",
    projectType: "commercial",
    location: "PIK, Jakarta Utara",
    propertyType: "hospitality",
    area: "310 m2",
    budget: "300-750",
    timeline: "1-3-months",
    message: "Butuh design build untuk restoran seafood dengan VIP room, kitchen flow, dan facade yang lebih kuat.",
    website: "",
    status: "proposal",
    stage: "quotation",
    source: "website",
    tags: ["commercial", "high-intent", "restaurant"],
    assignedTo: "Studio Lead",
    nextFollowUpAt: "2026-06-02T03:00:00.000Z",
    notes: [
      {
        id: "note-namo-001",
        author: "Studio Lead",
        body: "Prioritas: flow tamu, area VIP, dan durability material.",
        createdAt: "2026-05-25T09:10:00.000Z",
      },
    ],
    createdAt: "2026-05-25T08:45:00.000Z",
    updatedAt: "2026-05-25T09:10:00.000Z",
  },
  {
    id: "lead-cendana-002",
    name: "Ibu Nadia",
    contact: "+62 813-0000-2299",
    projectType: "renovation",
    location: "Cendana Residence, Tangerang Selatan",
    propertyType: "rumah",
    area: "118 m2",
    budget: "150-300",
    timeline: "3-6-months",
    message: "Renovasi rumah keluarga, storage lebih rapi, lighting hangat, dan kitchen yang mudah dirawat.",
    website: "",
    status: "qualified",
    stage: "discovery",
    source: "referral",
    tags: ["residential", "renovation", "warm-lead"],
    assignedTo: "Project Consultant",
    nextFollowUpAt: "2026-05-29T04:00:00.000Z",
    notes: [],
    createdAt: "2026-05-24T05:30:00.000Z",
    updatedAt: "2026-05-24T05:30:00.000Z",
  },
];

export const seededActivities: LeadActivity[] = [
  {
    id: "activity-001",
    leadId: "lead-namo-001",
    type: "quotation",
    label: "Proposal scope restoran disiapkan untuk review.",
    createdAt: "2026-05-25T09:25:00.000Z",
  },
  {
    id: "activity-002",
    leadId: "lead-cendana-002",
    type: "follow-up",
    label: "Follow-up foto kondisi eksisting dan ukuran ruang.",
    createdAt: "2026-05-24T07:40:00.000Z",
  },
];
