import React from 'react';
import '../assets/styles/Home.css';

// Importacion de componentes
import Navbar from '../components/Navbar';
import CardHome from '../components/Card-home';
//import Typewriter from '../components/Text-home';

// Importacion de imagenes
import img_home from '../assets/images/home.jpg';
import home1 from '../assets/images/Home1.jpg';
import home2 from '../assets/images/Home2.jpg';
import home3 from '../assets/images/Home3.jpg';

const Home = () => {
  return (
    // contenedor principal MAIN
    <div className="home-container">

    {/* Se divide la pantall principal por diferentes secciones */}
      <section className="section-1">
        <Navbar />
        {/*<Typewriter />*/} 
        <h1 className="title">Bienvenido a Codekids</h1>
        <div className="content">
          <div className="content-img">
            <img src= {img_home} alt="Codekids" />
          </div>
          <div className="content-text">
            <p className="description-text">
            CodeKids es una plataforma educativa que enseña a los niños a programar de manera divertida y creativa. 
            Con nuestros módulos de aprendizaje, los niños desarrollan habilidades tecnológicas y de resolución de problemas. 
            </p> 
              
          </div>
        </div>
      </section>

      {/* Seccion 2 se encuentran las cartas informativas */}
      <section className="section-2">
        <CardHome 
          img={home1}
          title="Conoce mas sobre CodeKids"
          text="Con Codektids podrás programar tus sueños, no dudes más y empieza ahora esta gran aventura."
        />

        <CardHome 
          img={home2}
          title="Módulos de aprendizaje"
          text="Tenemos diversos módulos de aprendizaje en donde te enfrentarás a grandes retos, ganarás premios y te divertirás como nunca!"
          reverse={true}
        />
      </section>

      {/* Seccion 3 se encuentra una carta informativa y el footer */}
      <section className="section-3">
        <CardHome 
          img={home3}
          title="Aprende a programar"
          text="La programación es como un superpoder. ¡Desarrolla tu creatividad y conviértete en
          un genio digital!"
        />

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
      </section>

    </div>
  );
};

export default Home; 