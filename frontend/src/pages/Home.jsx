import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import RecipeList from '../components/RecipeList';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/recipes');
        if (!response.ok) {
          throw new Error('Error al obtener las recetas');
        }
        const data = await response.json();
        setRecipes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
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
