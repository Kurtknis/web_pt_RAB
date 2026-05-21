import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { galleryItems } from '../content/galleryContent';
import OptimizedImage from '../components/ui/OptimizedImage';
import '../App.css';

function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <h2 className="section-title">{t('gallery.title')}</h2>
        <p className="section-subtitle">{t('gallery.subtitle')}</p>
        <div className="gallery-grid">
          {galleryItems.map((project) => (
            <div key={project.id} className="gallery-item">
              <OptimizedImage
                src={project.image}
                alt={project.title}
                width="800"
                height="600"
                sizes="(max-width: 768px) 92vw, 30vw"
              />
              <div className="gallery-overlay">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
