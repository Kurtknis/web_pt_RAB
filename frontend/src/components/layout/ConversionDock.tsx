import Link from "next/link";
import { Icon } from "@/components/icons";
import { company } from "@/content/company";

const waLink = `https://wa.me/${company.whatsapp}?text=Halo%20PT%20Cipta%20Kreasi%20Buana,%20saya%20ingin%20konsultasi%20proyek`;

export function ConversionDock() {
  return (
    <aside className="conversion-dock" aria-label="Aksi konsultasi cepat">
      <Link href="/konsultasi">
        <Icon name="calendar" size={18} />
        <span>Brief Proyek</span>
      </Link>
      <a href={waLink}>
        <Icon name="message-circle" size={18} />
        <span>WhatsApp</span>
      </a>
    </aside>
  );
}
