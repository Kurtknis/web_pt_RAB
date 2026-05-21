import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import '../App.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('nav-mobile-open');
    } else {
      document.body.classList.remove('nav-mobile-open');
    }
    return () => document.body.classList.remove('nav-mobile-open');
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar luxury-navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="luxury-nav-shell">
        <div className="nav-content luxury-nav-content">
          <div className="logo logo-text-only">
            <Link to="/" className="logo-link">
              <span className="logo-brand">CIPTA KREASI BUANA</span>
            </Link>
          </div>

          <div className="nav-right">
            <ul className={`nav-menu luxury-nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <li><Link to="/" className={isActive('/') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>{t('nav.home')}<ArrowUpRight size={13} /></Link></li>
              <li><Link to="/layanan" className={isActive('/layanan') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>{t('nav.services')}<ArrowUpRight size={13} /></Link></li>
              <li><Link to="/furnitur" className={isActive('/furnitur') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>{t('nav.furniture')}<ArrowUpRight size={13} /></Link></li>
              <li><Link to="/harga" className={isActive('/harga') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>{t('nav.pricing')}<ArrowUpRight size={13} /></Link></li>
              <li><Link to="/klien" className={isActive('/klien') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>{t('nav.clients')}<ArrowUpRight size={13} /></Link></li>
              <li><Link to="/konsultasi" className={isActive('/konsultasi') ? 'active luxury-nav-cta' : 'luxury-nav-cta'} onClick={() => setIsMenuOpen(false)}>{t('nav.consultation')}<ArrowUpRight size={13} /></Link></li>
            </ul>

            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
