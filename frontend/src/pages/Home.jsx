import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import RecipeList from '../components/RecipeList';
import EbookPromo from '../components/EbookPromo';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulamos un leve retardo para mostrar la animación de carga (opcional)
    // o simplemente seteamos las recetas directamente para carga instantánea.
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
