import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/recipes/${id}`);
        if (!response.ok) {
          throw new Error('Receta no encontrada');
        }
        const data = await response.json();
        setRecipe(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <div className="loading-state" aria-live="polite">Preparando los fogones...</div>;
  if (error) return <div className="error-state" role="alert">Error: {error}</div>;
  if (!recipe) return <div className="error-state" role="alert">Receta no disponible.</div>;

  // JSON-LD Structured Data for Google SEO
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": recipe.title,
    "image": recipe.imageUrl,
    "description": recipe.description,
    "author": {
      "@type": "Organization",
      "name": "Sabores Latinos"
    },
    "prepTime": `PT${parseInt(recipe.prepTime) || 15}M`, // Format as ISO 8601
    "cookTime": `PT${parseInt(recipe.cookTime) || 30}M`,
    "recipeIngredient": recipe.ingredients?.map(i => `${i.amount} ${i.name}`) || [],
    "recipeInstructions": recipe.steps?.map(s => ({
      "@type": "HowToStep",
      "text": s
    })) || [],
    "recipeCuisine": recipe.country
  };

  return (
    <article className="recipe-detail-container">
      <Helmet>
        <title>{recipe.title} - Receta Auténtica de {recipe.country} | Sabores Latinos</title>
        <meta name="description" content={`Aprende a preparar ${recipe.title}, un plato típico de ${recipe.country}. ${recipe.description}`} />
        <meta property="og:title" content={`${recipe.title} - Receta de ${recipe.country}`} />
        <meta property="og:description" content={recipe.description} />
        <meta property="og:image" content={recipe.imageUrl} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <nav aria-label="breadcrumb">
        <Link to="/" className="back-button">
          &larr; Volver a las recetas
        </Link>
      </nav>
      
      <header className="recipe-detail-header">
        <figure className="recipe-detail-image-wrapper" style={{ margin: 0 }}>
          <img src={recipe.imageUrl} alt={`Plato terminado de ${recipe.title}`} className="recipe-detail-image" />
          <figcaption className="country-badge detail-badge">{recipe.country}</figcaption>
        </figure>
        
        <div className="recipe-detail-intro">
          <h1 className="recipe-detail-title">{recipe.title}</h1>
          <p className="recipe-detail-description">{recipe.description}</p>
          
          <div className="recipe-meta detail-meta" style={{ gap: '1.5rem', flexWrap: 'wrap' }}>
            <div className="meta-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Prep: {recipe.prepTime}</span>
            </div>
            <div className="meta-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2v20"></path>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              <span>Cocción: {recipe.cookTime}</span>
            </div>
            <div className="meta-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span>Dificultad: {recipe.difficulty}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="recipe-detail-body">
        <section className="recipe-section ingredients-section" aria-labelledby="ingredients-heading">
          <h2 id="ingredients-heading">Ingredientes</h2>
          <ul className="ingredients-list">
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index} style={{ justifyContent: 'space-between', paddingRight: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <span className="check-icon" aria-hidden="true">✓</span> 
                  <span>{ingredient.name}</span>
                </div>
                <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>{ingredient.amount}</span>
              </li>
            ))}
          </ul>
        </section>
        
        <section className="recipe-section steps-section" aria-labelledby="steps-heading">
          <h2 id="steps-heading">Preparación paso a paso</h2>
          <ol className="steps-list">
            {recipe.steps?.map((step, index) => (
              <li key={index}>
                <span className="step-number" aria-hidden="true">{index + 1}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </article>
  );
};

export default RecipeDetail;
