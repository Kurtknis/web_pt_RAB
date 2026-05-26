import Link from 'next/link';
import { company, navItems } from '@/content/company';

export function Footer() {
  return (
    <footer className="footer">
      <div className="luxury-container footer__grid">
        <div>
          <p className="kicker">PT Cipta Kreasi Buana</p>
          <h2>Ruang yang tenang, presisi, dan bernilai.</h2>
        </div>
        <div className="footer__links">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <address>
          <span>{company.address}</span>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <a href={`https://wa.me/${company.whatsapp}`}>WhatsApp {company.phone}</a>
        </address>
      </div>
    </footer>
  );
}
