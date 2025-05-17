import React from "react";
import "../../assets/styles/home/Footer.css";

const Footer = () => {

    return (
        <footer className="site-footer">
          <div className="footer-content">
            <div className="footer-logo">
             <h3>CodeKids</h3>
             <p>Programando el futuro de los niños</p>
            </div>        
            <div className="footer-links">
            <div className="link-column">
               <h4>Explorar</h4>
               <a href="/">Módulos</a>
               <a href="/">Precios</a>
               <a href="/">Blog</a>
            </div>          
            <div className="link-column">
               <h4>Soporte</h4>
               <a href="/">Preguntas frecuentes</a>
               <a href="/">Contacto</a>
               <a href="/">Política de privacidad</a>
             </div>
            </div>        
            <div className="footer-social">
             <h4>Síguenos</h4>
             <div className="social-icons">
               <a href="/"><i className="fab fa-facebook"></i></a>
               <a href="/"><i className="fab fa-twitter"></i></a>
               <a href="/"><i className="fab fa-instagram"></i></a>
               <a href="/"><i className="fab fa-youtube"></i></a>
             </div>
            </div>
          </div>      
          <div className="footer-bottom">
           <p>&copy; {new Date().getFullYear()} CodeKids. Todos los derechos reservados.</p>
          </div>
        </footer>
    )
}

export default Footer;