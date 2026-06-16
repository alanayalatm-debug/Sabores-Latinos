import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import RecipeList from '../components/RecipeList';
import EbookPromo from '../components/EbookPromo';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    import('../data/recipes').then((module) => {
      const basicInfo = module.recipes.map(r => ({
        id: r.id,
        title: r.title,
        country: r.country,
        description: r.description,
        imageUrl: r.imageUrl,
        prepTime: r.prepTime,
        cookTime: r.cookTime,
        difficulty: r.difficulty
      }));
      setRecipes(basicInfo);
      setLoading(false);
    }).catch(err => {
      setError(err.message);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Sabores Latinos | Las Mejores Recetas de América Latina</title>
        <meta name="description" content="Descubre la riqueza culinaria de América Latina. Aprende a preparar platos típicos como asado, ceviche, arepas y más con nuestras recetas paso a paso." />
        <meta property="og:title" content="Sabores Latinos | Las Mejores Recetas de América Latina" />
        <meta property="og:description" content="Aprende a preparar platos típicos de toda América Latina con nuestras recetas detalladas." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <header className="app-header">
        <h1 className="app-title">Sabores Latinos</h1>
        <p className="app-subtitle">
          Descubre la riqueza culinaria de los 20 países de América Latina a través de sus platos más emblemáticos y deliciosos.
        </p>
      </header>
      
      <section className="seo-intro-text">
        <h2>La Auténtica Gastronomía Latinoamericana en tu Mesa</h2>
        <p>América Latina es un continente lleno de colores, culturas y, sobre todo, sabores inigualables. En <strong>Sabores Latinos</strong>, nos dedicamos a recopilar las mejores recetas tradicionales de la región. Desde el picante vibrante de México, pasando por las ricas arepas de Colombia y Venezuela, hasta llegar a los sabrosos cortes de carne del asado argentino y uruguayo.</p>
        <p>Nuestro objetivo es que puedas preparar estos deliciosos platos típicos en casa, con ingredientes accesibles e instrucciones paso a paso. Explora nuestra colección, aprende sobre la historia detrás de cada platillo y comienza tu viaje culinario hoy mismo. Ya seas un chef experimentado o un principiante entusiasta, aquí encontrarás inspiración para tu próxima comida en familia.</p>
      </section>
      
      <EbookPromo />

      <section className="gastronomy-pillars-section">
        <div className="pillars-container">
          <h2 className="pillars-title">Pilares de la Cocina Latinoamericana</h2>
          <p className="pillars-subtitle">
            Los elementos ancestrales y fusiones culturales que definen la identidad de nuestros sabores.
          </p>
          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon">🌽</div>
              <h3 className="pillar-card-title">El Maíz: Regalo de los Dioses</h3>
              <p className="pillar-card-text">
                Base sagrada de la alimentación prehispánica. Hoy en día, es el alma de las tortillas en México, las arepas en Colombia y Venezuela, y las pupusas en El Salvador. Un ingrediente noble y versátil que une a todo el continente.
              </p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon">🌶️</div>
              <h3 className="pillar-card-title">El Ají y el Chile: Alma y Fuego</h3>
              <p className="pillar-card-text">
                Desde los picantes chiles guajillo y habanero de México, hasta el aromático ají amarillo peruano y el locote paraguayo. La intensidad y diversidad de nuestros ajíes aportan color, identidad y calor a cada guiso.
              </p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon">🍌</div>
              <h3 className="pillar-card-title">El Plátano: El Sabor del Trópico</h3>
              <p className="pillar-card-text">
                Verde o maduro, el plátano es indispensable en la mesa caribeña y centroamericana. Se transforma mágicamente en el mofongo puertorriqueño, el mangú dominicano, el vigorón nicaragüense y las dulces tajadas venezolanas.
              </p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon">🍠</div>
              <h3 className="pillar-card-title">La Yuca: Raíz de Resistencia</h3>
              <p className="pillar-card-text">
                También conocida como mandioca, este tubérculo de origen amazónico ha alimentado a los pueblos nativos durante milenios. Su textura crujiente y suave acompaña sopas como el encebollado ecuatoriano o el sancocho panameño.
              </p>
            </div>
            <div className="pillar-card full-width-pillar">
              <div className="pillar-icon">🌎</div>
              <h3 className="pillar-card-title">El Encuentro de Mundos y Culturas</h3>
              <p className="pillar-card-text">
                La cocina latinoamericana es una de las fusiones más ricas del planeta. En ella convergen técnicas agrícolas milenarias de los pueblos originarios (mayas, aztecas e incas), la herencia culinaria traída de Europa (española y portuguesa), la influencia y sazón de la diáspora africana en las costas, y la sutil adaptación de las corrientes migratorias asiáticas de los siglos XIX y XX. Esta fusión de cuatro continentes crea un mosaico de texturas, aromas y especias único en el mundo gastronómico.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="recipe-container">
        {loading ? (
          <div className="loading-state" aria-live="polite">Cargando delicias de toda Latinoamérica...</div>
        ) : error ? (
          <div className="error-state" role="alert">Hubo un problema: {error}</div>
        ) : (
          <RecipeList recipes={recipes} />
        )}
      </main>
    </>
  );
};

export default Home;
