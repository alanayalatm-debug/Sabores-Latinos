import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blogPosts';

const BlogPostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [relatedRecipes, setRelatedRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Find the blog post
    const foundPost = blogPosts.find((p) => p.id === id);
    if (!foundPost) {
      setError('Artículo no encontrado');
      setLoading(false);
      return;
    }
    setPost(foundPost);

    // Map related recipes based on post ID
    import('../data/recipes')
      .then((module) => {
        let recipeIds = [];
        if (id === 'el-cacao-regalo-de-los-dioses') {
          // Tacos al Pastor (1), Pepián (20)
          recipeIds = [1, 20];
        } else if (id === 'la-arepa-pan-de-maiz-que-une-fronteras') {
          // Arepas Rellenas (3), Pabellón Criollo (7)
          recipeIds = [3, 7];
        } else if (id === 'el-aji-y-el-chile-el-fuego-sagrado') {
          // Ceviche Peruano (2), Tacos al Pastor (1)
          recipeIds = [2, 1];
        } else if (id === 'el-maiz-sosten-de-la-vida') {
          // Pupusas (19), Arepas Rellenas (3)
          recipeIds = [19, 3];
        }

        const foundRecipes = module.recipes.filter((r) => recipeIds.includes(r.id));
        setRelatedRecipes(foundRecipes);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error al cargar recetas relacionadas:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="loading-state" aria-live="polite">Cargando artículo...</div>;
  }
  if (error) {
    return (
      <div className="error-state" role="alert">
        <h2>{error}</h2>
        <Link to="/blog" className="back-button" style={{ marginTop: '1rem', display: 'inline-block' }}>
          Volver al Blog
        </Link>
      </div>
    );
  }
  if (!post) return null;

  // JSON-LD for Article SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.imageUrl,
    "datePublished": "2026-06-27T00:00:00Z", // Static match date
    "author": {
      "@type": "Person",
      "name": post.author,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sabores Latinos",
      "logo": {
        "@type": "ImageObject",
        "url": "https://saboreslatinos.net/images/logo.png" // Mock domain logo
      }
    },
    "description": post.summary
  };

  return (
    <article className="blog-detail-container">
      <Helmet>
        <title>{post.title} | Blog Sabores Latinos</title>
        <meta name="description" content={post.summary} />
        <meta property="og:title" content={`${post.title} | Sabores Latinos`} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <nav aria-label="breadcrumb">
        <Link to="/blog" className="back-button">
          &larr; Volver al Blog
        </Link>
      </nav>

      <header className="blog-detail-header">
        <div className="blog-detail-meta">
          <span className="blog-detail-date">{post.date}</span>
          <span className="blog-detail-dot">•</span>
          <span className="blog-detail-author">Por {post.author}</span>
          <span className="blog-detail-dot">•</span>
          <span className="blog-detail-time">{post.readTime} de lectura</span>
        </div>
        <h1 className="blog-detail-title">{post.title}</h1>
        <p className="blog-detail-summary">{post.summary}</p>
      </header>

      {/* Hero Image */}
      <div className="blog-detail-hero-wrapper" style={{ position: 'relative', height: '380px', borderRadius: 'var(--border-radius)', overflow: 'hidden', marginBottom: '3rem', boxShadow: '0 10px 25px rgba(0,0,0,0.25)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <img src={post.imageUrl} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      <div className="blog-detail-content">
        {post.sections.map((section, idx) => {
          if (section.type === 'heading') {
            return <h2 key={idx} className="blog-content-heading">{section.text}</h2>;
          } else if (section.type === 'list') {
            return (
              <ul key={idx} className="blog-content-list">
                {section.items.map((item, itemIdx) => {
                  // Replace markdown bold **text** with HTML bold tag
                  const formattedItem = item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                  return (
                    <li key={itemIdx} dangerouslySetInnerHTML={{ __html: formattedItem }} />
                  );
                })}
              </ul>
            );
          } else {
            return <p key={idx} className="blog-content-paragraph">{section.text}</p>;
          }
        })}
      </div>

      {relatedRecipes.length > 0 && (
        <section className="related-recipes-section">
          <h3 className="related-recipes-heading">Recetas relacionadas con este artículo</h3>
          <div className="recipe-grid">
            {relatedRecipes.map((recipe) => (
              <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="recipe-card-link" style={{ textDecoration: 'none' }}>
                <div className="recipe-card">
                  <div className="recipe-image-wrapper">
                    <img src={recipe.imageUrl} alt={recipe.title} className="recipe-image" loading="lazy" />
                    <span className="country-badge">{recipe.country}</span>
                  </div>
                  <div className="recipe-content">
                    <h4 className="recipe-title">{recipe.title}</h4>
                    <p className="recipe-description">{recipe.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
};

export default BlogPostDetail;
