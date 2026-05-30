"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@/components/icons";
import type { NavItem } from "@/content/company";

export function SiteNavbarClient({
  navItems,
  whatsappHref,
}: {
  navItems: readonly NavItem[];
  whatsappHref: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className={`site-nav ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="site-nav__shell">
        <Link href="/" className="site-nav__brand" aria-label="PT Cipta Kreasi Buana home" onClick={() => setOpen(false)}>
          <Image src="/ptkreasi.jpg" alt="Logo PT Cipta Kreasi Buana" width={42} height={42} priority />
          <span>Cipta Kreasi Buana</span>
        </Link>
        <nav className="site-nav__links" aria-label="Navigasi utama">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "is-active" : ""}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="site-nav__right" aria-label="Aksi utama">
          <a className="site-nav__cta" href={whatsappHref}>
            Konsultasi Gratis
          </a>
          <button
            type="button"
            className="site-nav__toggle"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>
      <div className="mobile-drawer" aria-hidden={!open}>
        <nav id="mobile-navigation" className="mobile-drawer__links" aria-label="Navigasi mobile">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "is-active" : ""} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a href={whatsappHref} onClick={() => setOpen(false)}>Konsultasi Gratis</a>
        </nav>
      </div>
    </header>
  );
}
