import React, { useState } from 'react';
import { Star, X } from 'lucide-react'; //nambahin "X" close button
import { useLanguage } from '../contexts/LanguageContext';
import { clientsList } from '../content/clientsContent';
import '../App.css';

//return gua masukin kedalem fungsi Clients biar lebih cakep & ngurangin caching
function Clients() {
  const { t } = useLanguage();
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const clientItems = clientsList.map((client, index) => ({
    id: index + 1,
    ...client,
    initials: client.name
      .split(' ')
      .slice(0, 2)
      .map((w) => w[0])
      .join('')
      .toUpperCase()
  }));

  const openImageModal = (ImageUrl) => {
    setSelectedImageUrl(ImageUrl);
    setIsClosing(false);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedImageUrl(null);
      setIsClosing(false);
      document.body.style.overflow = 'auto';
    }, 300);
  };

  //Header
  const headerContent = (
    <header className="clients-header-premium">
      <span className="clients-badge-premium">{t('clients.badge')}</span>
      <h2 className="clients-title-premium">{t('clients.title')}</h2>
      <p className="clients-subtitle-premium">
        {t('clients.realStoriesSubtitle')}
      </p>
      <div className="clients-kpi-premium">
        <div className="clients-kpi-item">
          <span className="clients-kpi-value">{clientItems.length}+</span>
          <span className="clients-kpi-label">{t('clients.kpiProfiles')}</span>
        </div>
        <div className="clients-kpi-item">
          <span className="clients-kpi-value">4.9<span className="clients-kpi-unit">/5</span></span>
          <span className="clients-kpi-label">{t('clients.kpiRating')}</span>
        </div>
        <div className="clients-kpi-item">
          <span className="clients-kpi-value">95<span className="clients-kpi-unit">%</span></span>
          <span className="clients-kpi-label">{t('clients.kpiOnTime')}</span>
        </div>
      </div>
    </header>
  );

  //grid
  const gridContent = (
    <div className="clients-grid-premium">
      {clientItems.map((client) => (
        <article key={client.id} className="client-card-premium">
          {client.photo ? (
            <div className="client-card-premium-media">
              <img
                src={client.photo}
                alt={client.name}
                // Added a custom class and onClick event here
                className="client-card-premium-img clickable-image" 
                loading="lazy"
                onClick={() => openImageModal(client.photo)}
              />
            </div>
          ) : (
            <div className="client-card-premium-avatar-wrap">
              <div className="client-card-premium-avatar">{client.initials}</div>
            </div>
          )}

          <div className="client-card-premium-content">
            <div className="client-card-premium-meta">
              <h3 className="client-card-premium-name">{client.name}</h3>
              <p className="client-card-premium-role">{client.role}</p>
            </div>
            <div className="client-card-premium-stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className={i < client.rating ? 'filled' : ''} />
              ))}
              <span className="client-card-premium-rating">{client.rating}.0</span>
            </div>
            <blockquote className="client-card-premium-quote">
              <span className="client-card-premium-quote-mark">"</span>
              {client.testimonial}
            </blockquote>
          </div>
        </article>
      ))}
    </div>
  );

  //modal
  const modalContent = selectedImageUrl ? (
    <div 
      className={`image-modal-overlay ${isClosing ? 'closing': ''}`}
      onClick={closeImageModal}
    >
      {/* e.stopPropagation() stops a click on the image itself from closing the modal */}
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal-button" onClick={closeImageModal}>
          <X size={24} />
        </button>
        <img 
          src={selectedImageUrl} 
          alt="Full view" 
          className="full-image" 
        />
      </div>
    </div>
  ) : null;

  const pageContent = (
    <section id="clients" className="section clients clients-page-premium">
      <div className="clients-bg-deco" aria-hidden="true" />
      <div className="container">
        {headerContent}
        {gridContent}
      </div>
      {modalContent}
    </section>
  );
  return pageContent
}

export default Clients;
