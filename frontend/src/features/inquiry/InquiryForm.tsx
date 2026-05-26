"use client";

import { useActionState } from "react";
import { submitInquiry, type InquiryActionState } from "@/app/konsultasi/actions";

const initialState: InquiryActionState = {
  status: "idle",
  message: "",
};

const projectTypes = [
  ["interior", "Interior Design"],
  ["architecture", "Architecture"],
  ["design-build", "Design Build"],
  ["furniture", "Custom Furniture"],
  ["renovation", "Renovation"],
  ["commercial", "Commercial Space"],
] as const;

const propertyTypes = [
  ["rumah", "Rumah"],
  ["apartemen", "Apartemen"],
  ["ruko", "Ruko"],
  ["kantor", "Kantor"],
  ["retail", "Retail"],
  ["hospitality", "Hospitality"],
  ["lainnya", "Lainnya"],
] as const;

const budgets = [
  ["under-50", "< Rp 50 juta"],
  ["50-150", "Rp 50-150 juta"],
  ["150-300", "Rp 150-300 juta"],
  ["300-750", "Rp 300-750 juta"],
  ["750-plus", "> Rp 750 juta"],
  ["undecided", "Belum ditentukan"],
] as const;

const timelines = [
  ["urgent", "Segera"],
  ["1-3-months", "1-3 bulan"],
  ["3-6-months", "3-6 bulan"],
  ["planning", "Masih perencanaan"],
] as const;

function fieldError(state: InquiryActionState, name: string) {
  return state.errors?.[name]?.[0];
}

export function InquiryForm() {
  const [state, formAction, isPending] = useActionState(submitInquiry, initialState);

  return (
    <form className="inquiry-form" action={formAction}>
      <input className="inquiry-form__trap" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="inquiry-form__grid">
        <label>
          <span>Nama</span>
          <input name="name" placeholder="Nama lengkap" autoComplete="name" aria-invalid={Boolean(fieldError(state, "name"))} />
          {fieldError(state, "name") ? <small>{fieldError(state, "name")}</small> : null}
        </label>
        <label>
          <span>WhatsApp / Email</span>
          <input name="contact" placeholder="+62..." autoComplete="tel" aria-invalid={Boolean(fieldError(state, "contact"))} />
          {fieldError(state, "contact") ? <small>{fieldError(state, "contact")}</small> : null}
        </label>
      </div>

      <div className="inquiry-form__grid">
        <label>
          <span>Kategori Proyek</span>
          <select name="projectType" defaultValue="interior">
            {projectTypes.map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Tipe Properti</span>
          <select name="propertyType" defaultValue="rumah">
            {propertyTypes.map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="inquiry-form__grid">
        <label>
          <span>Lokasi Proyek</span>
          <input name="location" placeholder="BSD, Jakarta Selatan, Tangerang..." aria-invalid={Boolean(fieldError(state, "location"))} />
          {fieldError(state, "location") ? <small>{fieldError(state, "location")}</small> : null}
        </label>
        <label>
          <span>Luas Area</span>
          <input name="area" placeholder="Contoh: 80 m2 / 2 lantai" />
        </label>
      </div>

      <div className="inquiry-form__grid">
        <label>
          <span>Estimasi Budget</span>
          <select name="budget" defaultValue="undecided">
            {budgets.map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Timeline</span>
          <select name="timeline" defaultValue="planning">
            {timelines.map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </label>
      </div>

      <label>
        <span>Brief Kebutuhan</span>
        <textarea name="message" rows={5} placeholder="Ceritakan kondisi ruang, kebutuhan utama, referensi gaya, dan kendala yang perlu dibantu." aria-invalid={Boolean(fieldError(state, "message"))} />
        {fieldError(state, "message") ? <small>{fieldError(state, "message")}</small> : null}
      </label>

      {state.message ? <p className={`inquiry-form__status inquiry-form__status--${state.status}`}>{state.message}</p> : null}

      <div className="inquiry-form__actions">
        <button className="button button--light" type="submit" disabled={isPending}>
          {isPending ? "Mengirim Brief..." : "Kirim Brief Proyek"}
        </button>
        {state.whatsappUrl ? (
          <a className="button button--ghost" href={state.whatsappUrl}>
            Lanjut WhatsApp
          </a>
        ) : null}
      </div>
    </form>
  );
}
