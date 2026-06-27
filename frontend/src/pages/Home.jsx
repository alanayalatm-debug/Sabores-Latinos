import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import RecipeList from '../components/RecipeList';
import EbookPromo from '../components/EbookPromo';
import { blogPosts } from '../data/blogPosts';

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

  // Search & Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

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

  // Dynamically extract unique countries for the filter dropdown
  const countries = [...new Set(recipes.map((r) => r.country))].sort();

  // Filter recipes
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch =
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = !selectedCountry || recipe.country === selectedCountry;
    const matchesDifficulty = !selectedDifficulty || recipe.difficulty === selectedDifficulty;
    return matchesSearch && matchesCountry && matchesDifficulty;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCountry('');
    setSelectedDifficulty('');
  };

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

      {/* Filter and Search Panel */}
      <section className="search-filter-panel" aria-label="Buscador y filtros de recetas">
        <div className="search-box">
          <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            placeholder="Buscar recetas (ej. Tacos, Ceviche...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
            aria-label="Buscar recetas por nombre o descripción"
          />
        </div>

        <div className="filter-dropdowns">
          <div className="select-wrapper">
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="filter-select"
              aria-label="Filtrar por país"
            >
              <option value="">Todos los países</option>
              {countries.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="select-wrapper">
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="filter-select"
              aria-label="Filtrar por dificultad"
            >
              <option value="">Todas las dificultades</option>
              <option value="Fácil">Fácil</option>
              <option value="Media">Media</option>
              <option value="Difícil">Difícil</option>
            </select>
          </div>

          {(searchTerm || selectedCountry || selectedDifficulty) && (
            <button onClick={clearFilters} className="clear-filters-btn">
              Limpiar filtros
            </button>
          )}
        </div>
      </section>

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
            <>
              <div className="recipes-count" style={{ marginBottom: '1.2rem', color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: '500' }}>
                Mostrando {filteredRecipes.length} de {recipes.length} recetas
              </div>
              <RecipeList recipes={filteredRecipes} />
            </>
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

      {/* Blog Posts Teaser Section */}
      <section className="blog-teaser-section">
        <div className="blog-teaser-header">
          <h2>Crónicas de la Cocina Latina</h2>
          <p>Explora nuestras últimas historias sobre ingredientes típicos y tradiciones culinarias.</p>
        </div>

        <div className="blog-teaser-grid">
          {blogPosts.slice(0, 3).map((post) => (
            <article key={post.id} className="blog-teaser-card">
              <div className="blog-teaser-img-wrap" style={{ position: 'relative', height: '140px', overflow: 'hidden' }}>
                <img src={post.imageUrl} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition)' }} className="blog-teaser-img" />
              </div>
              <div className="blog-teaser-body">
                <div className="blog-teaser-meta">
                  <span className="blog-teaser-date">{post.date}</span>
                  <span className="blog-teaser-dot">•</span>
                  <span className="blog-teaser-time">{post.readTime}</span>
                </div>
                <h3 className="blog-teaser-title">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="blog-teaser-summary">{post.summary}</p>
                <Link to={`/blog/${post.id}`} className="blog-teaser-link">
                  Leer artículo
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginLeft: '4px' }}>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-teaser-footer">
          <Link to="/blog" className="view-all-blog-btn">
            Explorar todo el Blog
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
