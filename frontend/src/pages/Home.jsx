import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import RecipeList from '../components/RecipeList';
import EbookPromo from '../components/EbookPromo';

const pillarsData = [
  {
    id: 'maiz',
    icon: '/images/pillar_maiz.png',
    title: 'El Maíz: Regalo de los Dioses',
    text:
      'Base sagrada de la alimentación prehispánica. Hoy en día, es el alma de las tortillas en México, las arepas en Colombia y Venezuela, y las pupusas en El Salvador. Un ingrediente noble y versátil que une a todo el continente.',
    tag: 'Mesoamérica',
  },
  {
    id: 'aji',
    icon: '/images/pillar_aji.png',
    title: 'El Ají y el Chile: Alma y Fuego',
    text:
      'Desde los picantes chiles guajillo y habanero de México, hasta el aromático ají amarillo peruano y el locote paraguayo. La intensidad de nuestros ajíes aporta color, identidad y calor a cada guiso.',
    tag: 'Toda Latinoamérica',
  },
  {
    id: 'frijol',
    icon: '/images/pillar_frijol.png',
    title: 'El Frijol y la Legumbre',
    text:
      'Pilar proteínico de civilizaciones como los mayas y los aztecas. El frijol negro, pinto o bayo acompaña platillos de desayuno, almuerzo y cena. Símbolo de resistencia y sencillez culinaria.',
    tag: 'Centroamérica y México',
  },
  {
    id: 'cacao',
    icon: '/images/pillar_cacao.png',
    title: 'El Cacao: El Oro Negro',
    text:
      'Originario de las selvas mesoamericanas, el cacao fue moneda y bebida sagrada. Hoy trasciende al chocolate artesanal, el mole oscuro y el tejate oaxaqueño. América lo regaló al mundo.',
    tag: 'México y el Caribe',
  },
];

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    import('../data/recipes').then((module) => {
      const basicInfo = module.recipes.map((r) => ({
        id: r.id,
        title: r.title,
        country: r.country,
        description: r.description,
        imageUrl: r.imageUrl,
        prepTime: r.prepTime,
        cookTime: r.cookTime,
        difficulty: r.difficulty,
      }));
      setRecipes(basicInfo);
      setLoading(false);
    }).catch((err) => {
      setError(err.message);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Sabores Latinos | Las Mejores Recetas de América Latina</title>
        <meta
          name="description"
          content="Descubre la riqueza culinaria de América Latina. Aprende a preparar platos típicos como asado, ceviche, arepas y más con nuestras recetas paso a paso."
        />
        <meta property="og:title" content="Sabores Latinos | Las Mejores Recetas de América Latina" />
        <meta
          property="og:description"
          content="Aprende a preparar platos típicos de toda América Latina con nuestras recetas detalladas."
        />
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
        <p>
          América Latina es un continente lleno de colores, culturas y, sobre todo, sabores inigualables. En{' '}
          <strong>Sabores Latinos</strong>, nos dedicamos a recopilar las mejores recetas tradicionales de la región. Desde
          el picante vibrante de México, pasando por las ricas arepas de Colombia y Venezuela, hasta llegar a los sabrosos
          cortes de carne del asado argentino y uruguayo.
        </p>
        <p>
          Nuestro objetivo es que puedas preparar estos deliciosos platos típicos en casa, con ingredientes accesibles e
          instrucciones paso a paso. Explora nuestra colección, aprende sobre la historia detrás de cada platillo y comienza
          tu viaje culinario hoy mismo.
        </p>
      </section>

      <EbookPromo />

      {/* Main two-column layout: recipes left, pillars right */}
      <div className="home-main-layout">
        {/* LEFT — Recipe grid */}
        <main className="recipe-container">
          {loading ? (
            <div className="loading-state" aria-live="polite">
              Cargando delicias de toda Latinoamérica...
            </div>
          ) : error ? (
            <div className="error-state" role="alert">
              Hubo un problema: {error}
            </div>
          ) : (
            <RecipeList recipes={recipes} />
          )}
        </main>

        {/* RIGHT — Pillars sidebar */}
        <aside className="pillars-sidebar">
          <div className="pillars-sidebar-header">
            <h2 className="pillars-sidebar-title">Pilares de la Cocina Latinoamericana</h2>
            <p className="pillars-sidebar-subtitle">
              Los elementos ancestrales que definen nuestra identidad gastronómica.
            </p>
          </div>

          <div className="pillars-sidebar-list">
            {pillarsData.map((pillar) => (
              <div key={pillar.id} className="pillar-sidebar-card">
                <div className="pillar-sidebar-img-wrap">
                  <img
                    src={pillar.icon}
                    alt={pillar.title}
                    className="pillar-sidebar-img"
                    loading="lazy"
                  />
                  <span className="pillar-tag">{pillar.tag}</span>
                </div>
                <div className="pillar-sidebar-body">
                  <h3 className="pillar-sidebar-card-title">{pillar.title}</h3>
                  <p className="pillar-sidebar-card-text">{pillar.text}</p>
                </div>
              </div>
            ))}

            {/* Fusion card */}
            <div className="pillar-sidebar-card pillar-fusion-card">
              <div className="pillar-fusion-icon">🌎</div>
              <h3 className="pillar-sidebar-card-title">El Encuentro de Mundos y Culturas</h3>
              <p className="pillar-sidebar-card-text">
                La cocina latinoamericana es una de las fusiones más ricas del planeta. En ella convergen técnicas agrícolas
                milenarias de los pueblos originarios, la herencia culinaria europea, la sazón de la diáspora africana y la
                influencia asiática del siglo XIX. Esta mezcla de cuatro continentes crea un mosaico de texturas y aromas
                único en el mundo.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Home;
