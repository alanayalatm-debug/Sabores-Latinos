import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sabores Latinos</h3>
          <p>Descubre y comparte las mejores recetas tradicionales de toda América Latina. Llevando el sabor de nuestra tierra a tu mesa, con instrucciones fáciles y paso a paso.</p>
        </div>
        
        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><Link to="/">Inicio / Recetas</Link></li>
            <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><Link to="/politica-de-privacidad">Política de Privacidad</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sabores Latinos. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
