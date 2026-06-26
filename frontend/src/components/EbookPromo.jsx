import React from 'react';
import './EbookPromo.css';

const EbookPromo = () => {
  return (
    <section className="ebook-promo-section">
      <div className="ebook-promo-container">
        <div className="ebook-content">
          <span className="ebook-badge">Oferta de Lanzamiento</span>
          <h2 className="ebook-title">
            Lleva <span>Sabores Latinos</span> a tu Cocina
          </h2>
          <p className="ebook-description">
            Descarga nuestro <strong>E-Book Oficial en PDF</strong> de alta calidad. Incluye <strong>¡11 recetas exclusivas que no encontrarás aquí!</strong> (Como la verdadera Feijoada Imperial, el Ceviche Mixto Carretillero y los Tamales Oaxaqueños).
          </p>
          
          <ul className="ebook-features">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Listo para imprimir (Formato A4 y Carta)
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Fotos a todo color y tips de chefs locales
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Soporte al proyecto "Sabores Latinos"
            </li>
          </ul>

          <div className="ebook-cta-container">
            <button className="ebook-cta-button">
              Comprar E-Book por $4.99
            </button>
            <span className="ebook-guarantee">💳 Pago 100% Seguro por Stripe</span>
          </div>
        </div>
        
        <div className="ebook-image-wrapper">
          <img 
            src="/images/ebook-mockup.png" 
            alt="E-Book Sabores Latinos - El Gran Libro de Recetas" 
            className="ebook-image"
          />
        </div>
      </div>
    </section>
  );
};

export default EbookPromo;
