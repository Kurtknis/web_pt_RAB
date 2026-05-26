export type FormFieldContract = {
  name: string;
  label: string;
  type: "text" | "select" | "textarea" | "email" | "tel";
  required?: boolean;
};

export const inquiryFieldContracts: FormFieldContract[] = [
  { name: "name", label: "Nama", type: "text", required: true },
  { name: "contact", label: "WhatsApp / Email", type: "tel", required: true },
  { name: "projectType", label: "Kategori Proyek", type: "select", required: true },
  { name: "propertyType", label: "Tipe Properti", type: "select", required: true },
  { name: "location", label: "Lokasi Proyek", type: "text", required: true },
  { name: "message", label: "Brief Kebutuhan", type: "textarea", required: true },
];
