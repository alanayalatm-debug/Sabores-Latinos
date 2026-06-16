import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { recipes } from './src/data/recipes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, 'dist');
const TEMPLATE_PATH = path.join(DIST_DIR, 'index.html');

if (!fs.existsSync(TEMPLATE_PATH)) {
  console.error('Error: dist/index.html does not exist. Build the project first.');
  process.exit(1);
}

const template = fs.readFileSync(TEMPLATE_PATH, 'utf-8');

// Shared components HTML
const navbarHtml = `
  <nav class="navbar">
    <div class="navbar-container">
      <a href="/" class="navbar-logo">
        <svg class="navbar-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
          <path d="M7 2v20"></path>
          <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
        </svg>
        <span class="navbar-title">Sabores Latinos</span>
      </a>
    </div>
  </nav>
`;

const footerHtml = `
  <footer class="app-footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>Sabores Latinos</h3>
        <p>Descubre y comparte las mejores recetas tradicionales de toda América Latina. Llevando el sabor de nuestra tierra a tu mesa, con instrucciones fáciles y paso a paso.</p>
      </div>
      <div class="footer-section">
        <h3>Enlaces Rápidos</h3>
        <ul>
          <li><a href="/">Inicio / Recetas</a></li>
          <li><a href="/sobre-nosotros">Sobre Nosotros</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Legal</h3>
        <ul>
          <li><a href="/politica-de-privacidad">Política de Privacidad</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; ${new Date().getFullYear()} Sabores Latinos. Todos los derechos reservados.</p>
    </div>
  </footer>
`;

function wrapContent(contentHtml) {
  return `
    <div class="app-container" style="display: flex; flex-direction: column; min-height: 100vh;">
      ${navbarHtml}
      <div style="flex: 1;">
        ${contentHtml}
      </div>
      ${footerHtml}
    </div>
  `;
}

function updateMeta(html, title, description, extraHead = '') {
  let result = html;
  
  // Replace title
  result = result.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
  
  // Replace description meta tag
  const descriptionRegex = /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i;
  if (descriptionRegex.test(result)) {
    result = result.replace(descriptionRegex, `<meta name="description" content="${description}" />`);
  } else {
    result = result.replace('</head>', `  <meta name="description" content="${description}" />\n  </head>`);
  }

  // Insert extra head tags (like JSON-LD, og tags, etc.)
  if (extraHead) {
    result = result.replace('</head>', `${extraHead}\n  </head>`);
  }

  return result;
}

function renderHtml(rootContent, title, description, extraHead = '') {
  let html = template.replace('<div id="root"></div>', `<div id="root">${rootContent}</div>`);
  return updateMeta(html, title, description, extraHead);
}

// 1. Home Page
const homeRecipesHtml = recipes.map(recipe => `
  <a href="/recipe/${recipe.id}" class="recipe-card-link" style="text-decoration: none;">
    <div class="recipe-card">
      <div class="recipe-image-wrapper">
        <img src="${recipe.imageUrl}" alt="${recipe.title}" class="recipe-image" loading="lazy" />
        <span class="country-badge">${recipe.country}</span>
      </div>
      <div class="recipe-content">
        <h3 class="recipe-title">${recipe.title}</h3>
        <p class="recipe-description">${recipe.description}</p>
        <div class="recipe-meta" style="flex-wrap: wrap; gap: 0.5rem;">
          <div class="meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>${recipe.prepTime} + ${recipe.cookTime}</span>
          </div>
          <div class="meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            <span>${recipe.difficulty}</span>
          </div>
        </div>
      </div>
    </div>
  </a>
`).join('\n');

const homeContentHtml = `
  <header class="app-header">
    <h1 class="app-title">Sabores Latinos</h1>
    <p class="app-subtitle">
      Descubre la riqueza culinaria de los 20 países de América Latina a través de sus platos más emblemáticos y deliciosos.
    </p>
  </header>
  <section class="seo-intro-text">
    <h2>La Auténtica Gastronomía Latinoamericana en tu Mesa</h2>
    <p>América Latina es un continente lleno de colores, culturas y, sobre todo, sabores inigualables. En <strong>Sabores Latinos</strong>, nos dedicamos a recopilar las mejores recetas tradicionales de la región. Desde el picante vibrante de México, pasando por las ricas arepas de Colombia y Venezuela, hasta llegar a los sabrosos cortes de carne del asado argentino y uruguayo.</p>
    <p>Nuestro objetivo es que puedas preparar estos deliciosos platos típicos en casa, con ingredientes accesibles e instrucciones paso a paso. Explora nuestra colección, aprende sobre la historia detrás de cada platillo y comienza tu viaje culinario hoy mismo. Ya seas un chef experimentado o un principiante entusiasta, aquí encontrarás inspiración para tu próxima comida en familia.</p>
  </section>
  <section class="ebook-promo-section">
    <div class="ebook-promo-container">
      <div class="ebook-content">
        <span class="ebook-badge">Oferta de Lanzamiento</span>
        <h2 class="ebook-title">Lleva <span>Sabores Latinos</span> a tu Cocina</h2>
        <p class="ebook-description">
          Descarga nuestro <strong>E-Book Oficial en PDF</strong> de alta calidad. Incluye las 20 recetas clásicas que amas de nuestra web, <strong>¡y 10 recetas exclusivas que no encontrarás aquí!</strong>
        </p>
        <div class="ebook-cta-container">
          <button class="ebook-cta-button">Comprar E-Book por $9.99</button>
          <span class="ebook-guarantee">💳 Pago 100% Seguro por Stripe</span>
        </div>
      </div>
      <div class="ebook-image-wrapper">
        <img src="/images/ebook-mockup.png" alt="E-Book Sabores Latinos" class="ebook-image" />
      </div>
    </div>
  </section>

  <section class="gastronomy-pillars-section">
    <div class="pillars-container">
      <h2 class="pillars-title">Pilares de la Cocina Latinoamericana</h2>
      <p class="pillars-subtitle">
        Los elementos ancestrales y fusiones culturales que definen la identidad de nuestros sabores.
      </p>
      <div class="pillars-grid">
        <div class="pillar-card">
          <div class="pillar-icon">🌽</div>
          <h3 class="pillar-card-title">El Maíz: Regalo de los Dioses</h3>
          <p class="pillar-card-text">
            Base sagrada de la alimentación prehispánica. Hoy en día, es el alma de las tortillas en México, las arepas en Colombia y Venezuela, y las pupusas en El Salvador. Un ingrediente noble y versátil que une a todo el continente.
          </p>
        </div>
        <div class="pillar-card">
          <div class="pillar-icon">🌶️</div>
          <h3 class="pillar-card-title">El Ají y el Chile: Alma y Fuego</h3>
          <p class="pillar-card-text">
            Desde los picantes chiles guajillo y habanero de México, hasta el aromático ají amarillo peruano y el locote paraguayo. La intensidad y diversidad de nuestros ajíes aportan color, identidad y calor a cada guiso.
          </p>
        </div>
        <div class="pillar-card">
          <div class="pillar-icon">🍌</div>
          <h3 class="pillar-card-title">El Plátano: El Sabor del Trópico</h3>
          <p class="pillar-card-text">
            Verde o maduro, el plátano es indispensable en la mesa caribeña y centroamericana. Se transforma mágicamente en el mofongo puertorriqueño, el mangú dominicano, el vigorón nicaragüense y las dulces tajadas venezolanas.
          </p>
        </div>
        <div class="pillar-card">
          <div class="pillar-icon">🍠</div>
          <h3 class="pillar-card-title">La Yuca: Raíz de Resistencia</h3>
          <p class="pillar-card-text">
            También conocida como mandioca, este tubérculo de origen amazónico ha alimentado a los pueblos nativos durante milenios. Su textura crujiente y suave acompaña sopas como el encebollado ecuatoriano o el sancocho panameño.
          </p>
        </div>
        <div class="pillar-card full-width-pillar">
          <div class="pillar-icon">🌎</div>
          <h3 class="pillar-card-title">El Encuentro de Mundos y Culturas</h3>
          <p class="pillar-card-text">
            La cocina latinoamericana es una de las fusiones más ricas del planeta. En ella convergen técnicas agrícolas milenarias de los pueblos originarios (mayas, aztecas e incas), la herencia culinaria traída de Europa (española y portuguesa), la influencia y sazón de la diáspora africana en las costas, y la sutil adaptación de las corrientes migratorias asiáticas de los siglos XIX y XX. Esta fusión de cuatro continentes crea un mosaico de texturas, aromas y especias único en el mundo gastronómico.
          </p>
        </div>
      </div>
    </div>
  </section>

  <main class="recipe-container">
    <div class="recipe-grid">
      ${homeRecipesHtml}
    </div>
  </main>


`;

const homeHtml = renderHtml(
  wrapContent(homeContentHtml),
  "Sabores Latinos | Las Mejores Recetas de América Latina",
  "Descubre la riqueza culinaria de América Latina. Aprende a preparar platos típicos como asado, ceviche, arepas y más con nuestras recetas paso a paso."
);
fs.writeFileSync(path.join(DIST_DIR, 'index.html'), homeHtml);
console.log('Pre-rendered: / (index.html)');

// 2. Sobre Nosotros
const aboutContentHtml = `
  <div class="static-page-container">
    <h1 class="static-title">Sobre Nosotros</h1>
    <div class="static-content">
      <p>Bienvenidos a <strong>Sabores Latinos</strong>, el rincón culinario dedicado a celebrar y compartir la inmensa riqueza gastronómica de América Latina.</p>
      <h2>Nuestra Misión</h2>
      <p>Nuestra misión es preservar y difundir las recetas tradicionales de nuestros países. Desde los tacos mexicanos hasta el asado argentino, pasando por las arepas venezolanas, la bandeja paisa colombiana y el ceviche peruano. Queremos crear un espacio donde las tradiciones culinarias se mantengan vivas y sean accesibles para todos en el mundo hispanohablante y más allá.</p>
      <h2>¿Qué Hacemos?</h2>
      <p>Recopilamos recetas auténticas, probadas y transmitidas de generación en generación. Nos aseguramos de proporcionar instrucciones claras, medidas exactas y consejos útiles para que cualquier persona, sin importar su experiencia en la cocina, pueda recrear los sabores auténticos de nuestra tierra.</p>
      <h2>Nuestra Visión</h2>
      <p>Aspiramos a ser el directorio de recetas latinoamericanas más completo y confiable de internet, uniendo a la comunidad a través del amor universal por la buena comida casera, los ingredientes frescos y el calor del hogar latino.</p>
    </div>
  </div>
`;
const aboutHtml = renderHtml(
  wrapContent(aboutContentHtml),
  "Sobre Nosotros | Sabores Latinos",
  "Conoce más sobre Sabores Latinos, nuestra misión y nuestra pasión por la gastronomía latinoamericana."
);
const aboutDir = path.join(DIST_DIR, 'sobre-nosotros');
fs.mkdirSync(aboutDir, { recursive: true });
fs.writeFileSync(path.join(aboutDir, 'index.html'), aboutHtml);
console.log('Pre-rendered: /sobre-nosotros');

// 3. Contacto
const contactContentHtml = `
  <div class="static-page-container">
    <h1 class="static-title">Contacto</h1>
    <div class="static-content">
      <p>¿Tienes alguna duda, sugerencia, o quieres compartir una receta familiar con nosotros? ¡Nos encantaría escucharte!</p>
      <div class="contact-info" style="margin-top: 2rem; padding: 1.5rem; background-color: var(--surface); border-radius: 12px; border: 1px solid var(--border);">
        <h2>Información de Contacto</h2>
        <p style="margin-top: 1rem; margin-bottom: 0.5rem;">Puedes comunicarte con nosotros a través de los siguientes medios:</p>
        <ul style="list-style-type: none; padding: 0;">
          <li style="margin-bottom: 0.5rem;">📧 <strong>Email:</strong> contacto@saboreslatinos.net</li>
          <li>🌐 <strong>Redes Sociales:</strong> Síguenos en nuestras plataformas oficiales (próximamente).</li>
        </ul>
      </div>
      <div style="margin-top: 2rem;">
        <p><em>Actualmente estamos actualizando nuestro sistema de formulario de contacto. Por favor, envíanos un correo directamente a la dirección mencionada arriba y te responderemos a la mayor brevedad posible.</em></p>
      </div>
    </div>
  </div>
`;
const contactHtml = renderHtml(
  wrapContent(contactContentHtml),
  "Contacto | Sabores Latinos",
  "Ponte en contacto con Sabores Latinos. Envíanos tus dudas, sugerencias o recetas."
);
const contactDir = path.join(DIST_DIR, 'contacto');
fs.mkdirSync(contactDir, { recursive: true });
fs.writeFileSync(path.join(contactDir, 'index.html'), contactHtml);
console.log('Pre-rendered: /contacto');

// 4. Política de Privacidad
const privacyContentHtml = `
  <div class="static-page-container">
    <h1 class="static-title">Política de Privacidad</h1>
    <div class="static-content">
      <p><strong>Última actualización:</strong> ${new Date().toLocaleDateString('es-ES')}</p>
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
`;
const privacyHtml = renderHtml(
  wrapContent(privacyContentHtml),
  "Política de Privacidad | Sabores Latinos",
  "Política de privacidad y uso de cookies de Sabores Latinos."
);
const privacyDir = path.join(DIST_DIR, 'politica-de-privacidad');
fs.mkdirSync(privacyDir, { recursive: true });
fs.writeFileSync(path.join(privacyDir, 'index.html'), privacyHtml);
console.log('Pre-rendered: /politica-de-privacidad');

// 5. Recipe Details
recipes.forEach(recipe => {
  const recipeLd = {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": recipe.title,
    "image": recipe.imageUrl,
    "description": recipe.description,
    "author": {
      "@type": "Organization",
      "name": "Sabores Latinos"
    },
    "prepTime": `PT${parseInt(recipe.prepTime) || 15}M`,
    "cookTime": `PT${parseInt(recipe.cookTime) || 30}M`,
    "recipeIngredient": recipe.ingredients?.map(i => `${i.amount} ${i.name}`) || [],
    "recipeInstructions": recipe.steps?.map(s => ({
      "@type": "HowToStep",
      "text": s
    })) || [],
    "recipeCuisine": recipe.country,
    "nutrition": recipe.nutrition ? {
      "@type": "NutritionInformation",
      "calories": recipe.nutrition.calories,
      "proteinContent": recipe.nutrition.protein,
      "fatContent": recipe.nutrition.fat,
      "carbohydrateContent": recipe.nutrition.carbs
    } : undefined
  };

  const recipeHead = `
  <meta property="og:title" content="${recipe.title} - Receta de ${recipe.country}" />
  <meta property="og:description" content="${recipe.description}" />
  <meta property="og:image" content="${recipe.imageUrl}" />
  <script type="application/ld+json">
    ${JSON.stringify(recipeLd)}
  </script>
  `;

  const ingredientsListHtml = recipe.ingredients.map(ing => `
    <li style="display: flex; justify-content: space-between; padding-right: 1rem; margin-bottom: 0.5rem;">
      <div style="display: flex; align-items: center; gap: 0.8rem;">
        <span class="check-icon" aria-hidden="true">✓</span>
        <span>${ing.name}</span>
      </div>
      <span style="font-weight: 600; color: var(--text-main);">${ing.amount}</span>
    </li>
  `).join('\n');

  const stepsListHtml = recipe.steps.map((step, idx) => `
    <li style="display: flex; gap: 1rem; margin-bottom: 1.5rem; align-items: flex-start;">
      <span class="step-number" aria-hidden="true" style="background-color: var(--primary); color: white; border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;">${idx + 1}</span>
      <p style="margin: 0; line-height: 1.6; color: var(--text-muted);">${step}</p>
    </li>
  `).join('\n');

  const historyHtml = recipe.history ? `
    <section class="recipe-history" aria-labelledby="history-heading">
      <h3 id="history-heading">Historia y Origen</h3>
      <p>${recipe.history}</p>
    </section>
  ` : '';

  const nutritionHtml = recipe.nutrition ? `
    <section class="recipe-nutrition" aria-labelledby="nutrition-heading">
      <h3 id="nutrition-heading">Información Nutricional (por porción)</h3>
      <div class="nutrition-grid">
        <div class="nutrition-item">
          <span class="nutrition-label">Calorías</span>
          <span class="nutrition-value">${recipe.nutrition.calories}</span>
        </div>
        <div class="nutrition-item">
          <span class="nutrition-label">Proteínas</span>
          <span class="nutrition-value">${recipe.nutrition.protein}</span>
        </div>
        <div class="nutrition-item">
          <span class="nutrition-label">Grasas</span>
          <span class="nutrition-value">${recipe.nutrition.fat}</span>
        </div>
        <div class="nutrition-item">
          <span class="nutrition-label">Carbohidratos</span>
          <span class="nutrition-value">${recipe.nutrition.carbs}</span>
        </div>
      </div>
    </section>
  ` : '';

  const tipsHtml = recipe.tips && recipe.tips.length > 0 ? `
    <section class="recipe-tips" aria-labelledby="tips-heading" style="margin-top: 3rem;">
      <h3 id="tips-heading">💡 Consejos del Chef</h3>
      <ul class="tips-list">
        ${recipe.tips.map(tip => `<li>${tip}</li>`).join('\n')}
      </ul>
    </section>
  ` : '';

  const recipeDetailHtml = `
    <article class="recipe-detail-container" style="max-width: 800px; margin: 0 auto; padding: 2rem 1rem;">
      <nav aria-label="breadcrumb" style="margin-bottom: 1.5rem;">
        <a href="/" class="back-button" style="text-decoration: none; color: var(--primary); font-weight: 600;">
          &larr; Volver a las recetas
        </a>
      </nav>
      
      <header class="recipe-detail-header" style="display: grid; grid-template-columns: 1fr; gap: 2rem; margin-bottom: 3rem;">
        <figure class="recipe-detail-image-wrapper" style="margin: 0; position: relative; border-radius: 16px; overflow: hidden; box-shadow: var(--shadow-md);">
          <img src="${recipe.imageUrl}" alt="Plato terminado de ${recipe.title}" class="recipe-detail-image" style="width: 100%; height: auto; display: block; object-fit: cover; aspect-ratio: 16/9;" />
          <figcaption class="country-badge detail-badge" style="position: absolute; top: 1rem; left: 1rem; background-color: var(--primary); color: white; padding: 0.5rem 1rem; border-radius: 20px; font-weight: 700; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em;">${recipe.country}</figcaption>
        </figure>
        
        <div class="recipe-detail-intro">
          <h1 class="recipe-detail-title" style="font-size: 2.5rem; font-weight: 800; color: var(--text-main); margin-bottom: 1rem; line-height: 1.2;">${recipe.title}</h1>
          <p class="recipe-detail-description" style="font-size: 1.15rem; line-height: 1.6; color: var(--text-muted); margin-bottom: 2rem;">${recipe.description}</p>
          
          <div class="recipe-meta detail-meta" style="display: flex; gap: 1.5rem; flex-wrap: wrap; margin-bottom: 2rem;">
            <div class="meta-item" style="display: flex; align-items: center; gap: 0.5rem; color: var(--text-muted); font-size: 0.95rem;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Prep: ${recipe.prepTime}</span>
            </div>
            <div class="meta-item" style="display: flex; align-items: center; gap: 0.5rem; color: var(--text-muted); font-size: 0.95rem;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2v20"></path>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              <span>Cocción: ${recipe.cookTime}</span>
            </div>
            <div class="meta-item" style="display: flex; align-items: center; gap: 0.5rem; color: var(--text-muted); font-size: 0.95rem;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span>Dificultad: ${recipe.difficulty}</span>
            </div>
          </div>
          
          ${historyHtml}
          ${nutritionHtml}
        </div>
      </header>

      <div class="recipe-detail-body" style="display: grid; grid-template-columns: 1fr; gap: 3rem;">
        <section class="recipe-section ingredients-section" aria-labelledby="ingredients-heading">
          <h2 id="ingredients-heading" style="font-size: 1.75rem; font-weight: 700; color: var(--text-main); border-bottom: 2px solid var(--border); padding-bottom: 0.5rem; margin-bottom: 1.5rem;">Ingredientes</h2>
          <ul class="ingredients-list" style="list-style-type: none; padding: 0;">
            ${ingredientsListHtml}
          </ul>
        </section>
        
        <section class="recipe-section steps-section" aria-labelledby="steps-heading">
          <h2 id="steps-heading" style="font-size: 1.75rem; font-weight: 700; color: var(--text-main); border-bottom: 2px solid var(--border); padding-bottom: 0.5rem; margin-bottom: 1.5rem;">Preparación paso a paso</h2>
          <ol class="steps-list" style="list-style-type: none; padding: 0;">
            ${stepsListHtml}
          </ol>
        </section>
      </div>

      ${tipsHtml}
    </article>
  `;

  const recipeHtml = renderHtml(
    wrapContent(recipeDetailHtml),
    `${recipe.title} - Receta Auténtica de ${recipe.country} | Sabores Latinos`,
    `Aprende a preparar ${recipe.title}, un plato típico de ${recipe.country}. ${recipe.description}`,
    recipeHead
  );

  const recipeDir = path.join(DIST_DIR, 'recipe', String(recipe.id));
  fs.mkdirSync(recipeDir, { recursive: true });
  fs.writeFileSync(path.join(recipeDir, 'index.html'), recipeHtml);
  console.log(`Pre-rendered: /recipe/${recipe.id}`);
});

console.log('All routes pre-rendered successfully!');
