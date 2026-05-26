import type { InquiryRecord } from "@/schemas/inquiry";

export function formatLeadBudget(value: InquiryRecord["budget"]) {
  const map: Record<InquiryRecord["budget"], string> = {
    "under-50": "< Rp 50 juta",
    "50-150": "Rp 50-150 juta",
    "150-300": "Rp 150-300 juta",
    "300-750": "Rp 300-750 juta",
    "750-plus": "> Rp 750 juta",
    undecided: "Belum ditentukan",
  };

  return map[value];
}

export function formatLeadStage(stage: InquiryRecord["stage"]) {
  return stage.replace("-", " ");
}
