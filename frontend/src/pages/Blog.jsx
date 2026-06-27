import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  return (
    <div className="blog-page-container">
      <Helmet>
        <title>Blog Culinario | Sabores Latinos - Historia e Ingredientes</title>
        <meta 
          name="description" 
          content="Explora la historia, leyendas y secretos de los ingredientes típicos de la comida de América Latina. Artículos interesantes sobre el maíz, ají, cacao y más." 
        />
        <meta property="og:title" content="Blog Culinario | Sabores Latinos - Historia e Ingredientes" />
        <meta 
          property="og:description" 
          content="Conoce el origen precolombino de tus platos favoritos y los secretos de sus ingredientes autóctonos." 
        />
      </Helmet>
      
      <header className="blog-header">
        <h1 className="blog-page-title">Blog Sabores Latinos</h1>
        <p className="blog-page-subtitle">
          Historias, mitos, secretos e ingredientes que definen la cultura gastronómica de América Latina.
        </p>
      </header>

      <div className="blog-posts-grid">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-post-card">
            <div className="blog-card-img-wrap">
              <img src={post.imageUrl} alt={post.title} className="blog-card-img" loading="lazy" />
              <span className="blog-card-badge">{post.readTime}</span>
            </div>
            <div className="blog-card-content">
              <div className="blog-card-meta">
                <span className="blog-card-date">{post.date}</span>
                <span className="blog-card-dot">•</span>
                <span className="blog-card-author">{post.author}</span>
              </div>
              <h2 className="blog-card-title">
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </h2>
              <p className="blog-card-summary">{post.summary}</p>
              <Link to={`/blog/${post.id}`} className="blog-card-link">
                Leer artículo
                <svg className="blog-link-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
