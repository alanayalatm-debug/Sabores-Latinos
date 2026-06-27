import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPostDetail from './pages/BlogPostDetail';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipe/:id" element={<RecipeDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPostDetail />} />
              <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
              <Route path="/sobre-nosotros" element={<About />} />
              <Route path="/contacto" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
      <Analytics />
    </HelmetProvider>
  );
}

export default App;
