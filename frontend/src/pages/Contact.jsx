import React from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <div className="static-page-container">
      <Helmet>
        <title>Contacto | Sabores Latinos</title>
        <meta name="description" content="Ponte en contacto con Sabores Latinos. Envíanos tus dudas, sugerencias o recetas." />
      </Helmet>
      
      <h1 className="static-title">Contacto</h1>
      
      <div className="static-content">
        <p>¿Tienes alguna duda, sugerencia, o quieres compartir una receta familiar con nosotros? ¡Nos encantaría escucharte!</p>
        
        <div className="contact-info" style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--border)' }}>
          <h2>Información de Contacto</h2>
          <p style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Puedes comunicarte con nosotros a través de los siguientes medios:</p>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>📧 <strong>Email:</strong> contacto@saboreslatinos.net</li>
            <li>🌐 <strong>Redes Sociales:</strong> Síguenos en nuestras plataformas oficiales (próximamente).</li>
          </ul>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <p><em>Actualmente estamos actualizando nuestro sistema de formulario de contacto. Por favor, envíanos un correo directamente a la dirección mencionada arriba y te responderemos a la mayor brevedad posible.</em></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
