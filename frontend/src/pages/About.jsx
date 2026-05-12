import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <div className="static-page-container">
      <Helmet>
        <title>Sobre Nosotros | Sabores Latinos</title>
        <meta name="description" content="Conoce más sobre Sabores Latinos, nuestra misión y nuestra pasión por la gastronomía latinoamericana." />
      </Helmet>
      
      <h1 className="static-title">Sobre Nosotros</h1>
      
      <div className="static-content">
        <p>Bienvenidos a <strong>Sabores Latinos</strong>, el rincón culinario dedicado a celebrar y compartir la inmensa riqueza gastronómica de América Latina.</p>
        
        <h2>Nuestra Misión</h2>
        <p>Nuestra misión es preservar y difundir las recetas tradicionales de nuestros países. Desde los tacos mexicanos hasta el asado argentino, pasando por las arepas venezolanas, la bandeja paisa colombiana y el ceviche peruano. Queremos crear un espacio donde las tradiciones culinarias se mantengan vivas y sean accesibles para todos en el mundo hispanohablante y más allá.</p>
        
        <h2>¿Qué Hacemos?</h2>
        <p>Recopilamos recetas auténticas, probadas y transmitidas de generación en generación. Nos aseguramos de proporcionar instrucciones claras, medidas exactas y consejos útiles para que cualquier persona, sin importar su experiencia en la cocina, pueda recrear los sabores auténticos de nuestra tierra.</p>
        
        <h2>Nuestra Visión</h2>
        <p>Aspiramos a ser el directorio de recetas latinoamericanas más completo y confiable de internet, uniendo a la comunidad a través del amor universal por la buena comida casera, los ingredientes frescos y el calor del hogar latino.</p>
      </div>
    </div>
  );
};

export default About;
