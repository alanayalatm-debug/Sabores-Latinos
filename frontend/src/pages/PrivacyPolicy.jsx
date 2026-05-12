import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  return (
    <div className="static-page-container">
      <Helmet>
        <title>Política de Privacidad | Sabores Latinos</title>
        <meta name="description" content="Política de privacidad y uso de cookies de Sabores Latinos." />
      </Helmet>
      
      <h1 className="static-title">Política de Privacidad</h1>
      
      <div className="static-content">
        <p><strong>Última actualización:</strong> {new Date().toLocaleDateString()}</p>
        
        <h2>1. Información que recopilamos</h2>
        <p>En Sabores Latinos, accesible desde saboreslatinos.net, una de nuestras principales prioridades es la privacidad de nuestros visitantes. Este documento de Política de Privacidad contiene los tipos de información que recopilamos y cómo la utilizamos.</p>
        
        <h2>2. Archivos de registro (Log Files)</h2>
        <p>Sabores Latinos sigue un procedimiento estándar de uso de archivos de registro. Estos archivos registran a los visitantes cuando visitan sitios web. La información recopilada incluye direcciones de protocolo de Internet (IP), tipo de navegador, proveedor de servicios de Internet (ISP), marca de fecha y hora, páginas de referencia/salida y posiblemente el número de clics.</p>
        
        <h2>3. Cookies y Web Beacons</h2>
        <p>Como cualquier otro sitio web, Sabores Latinos utiliza "cookies". Estas cookies se utilizan para almacenar información, incluidas las preferencias de los visitantes y las páginas del sitio web a las que el visitante accedió o visitó. La información se utiliza para optimizar la experiencia de los usuarios personalizando el contenido de nuestra página web.</p>
        
        <h2>4. Cookie DART de Google DoubleClick</h2>
        <p>Google es uno de los proveedores externos de nuestro sitio. También utiliza cookies, conocidas como cookies DART, para publicar anuncios a los visitantes de nuestro sitio basados en su visita a www.website.com y otros sitios en Internet.</p>
        <ul>
          <li>Google, como proveedor de terceros, utiliza cookies para publicar anuncios en Sabores Latinos.</li>
          <li>El uso de la cookie DART por parte de Google le permite mostrar anuncios a los usuarios basándose en su visita a Sabores Latinos y otros sitios en Internet.</li>
          <li>Los usuarios pueden inhabilitar el uso de la cookie DART visitando la política de privacidad de la red de contenido y anuncios de Google.</li>
        </ul>
        
        <h2>5. Políticas de Privacidad de Terceros</h2>
        <p>La Política de Privacidad de Sabores Latinos no se aplica a otros anunciantes o sitios web. Por lo tanto, le aconsejamos que consulte las respectivas Políticas de Privacidad de estos servidores de anuncios de terceros para obtener información más detallada.</p>
        
        <h2>6. Consentimiento</h2>
        <p>Al utilizar nuestro sitio web, usted acepta por la presente nuestra Política de Privacidad y acepta sus términos.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
