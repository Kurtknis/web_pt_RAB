import { company, navItems } from "@/content/company";
import { SiteNavbarClient } from "./SiteNavbarClient";

const waLink = `https://wa.me/${company.whatsapp}?text=Halo%20PT%20Cipta%20Kreasi%20Buana,%20saya%20ingin%20konsultasi%20proyek`;

export function SiteNavbar() {
  return <SiteNavbarClient navItems={navItems} whatsappHref={waLink} />;
}
