import React from 'react';
import '../assets/styles/Home.css';

// Importacion de componentes
import Navbar from '../components/Navbar';
import CardHome from '../components/Card-home';
import Footer from '../components/Footer';

// Importacion de imagenes
import niño_home from '../assets/images/home/niño-home.jpg'
import logica from "../assets/images/home/logica.png"
import conceptos from "../assets/images/home/conceptos.png"
import sueños from "../assets/images/home/sueños.png"


const Home = () => {

  return (
    <div className="home-container">

      <section className="section-1">
        <Navbar />
        <div className="contenido-1">
          <div className='contenido-text1'>
            <h1>Bienvenido</h1>
            <h2>a Codekids!</h2>
            <p>Aprende las bases de la programación con Codekids, diviertete y sueña con las diversas clases que tenemos preparadas para ti! </p>
            <p>No lo dudes mas y <a href="/register">Aprende ahora!</a></p>
          </div>
          <div className='contenido-img1'>
            <img src={niño_home} alt="Codekids" />
          </div>
        </div>
      </section>

      <section className='section-2'>
        <h2 className='titulo'>En Codekids</h2>
        <h2 className='subtitulo'>Desarrollaras nuevas habilidades</h2>
        <div className='tarjetas'>

          <CardHome 
          img = {logica}
          text = "Aprende a pensar como un programador y resuelve problemas de forma eficiente"/>
          <CardHome 
          img = {conceptos}
          text = "Descubre herramientas y conocimientos que te ayudarán a crear grandes proyectos"/>
          <CardHome 
          img = {sueños}
          text = "Explora, crea e innova, el único límite es tu creatividad."/>

        </div>
      </section>

      <section className='section-footer'>
        <Footer />
      </section>

    </div>
  );
};

export default Home; 