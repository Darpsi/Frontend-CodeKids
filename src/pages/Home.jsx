import React from 'react';
import '../assets/styles/Home.css';

// Importacion de componentes
import Navbar from '../components/Navbar';
import CardHome from '../components/Card-home';
import CardHome2 from '../components/Card-home2';
import Footer from '../components/Footer';

// Importacion de imagenes
import niño_home from '../assets/images/home/niño-home.jpg'
import logica from "../assets/images/home/logica.png"
import conceptos from "../assets/images/home/conceptos.png"
import sueños from "../assets/images/home/sueños.png"
import ControlFLujo from "../assets/images/home/control-flujo.png"
import Funciones from "../assets/images/home/funciones.png"
import ManejoDatos from "../assets/images/home/manejo_datos.png"
import OrientadaObjetos from "../assets/images/home/orientada_objetos.png"


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

      <section id="section3" className="section-3">
        <div className='card-contain-total2'>
          <div className='card-cont1'>
          <CardHome2
          img = {ControlFLujo}
          text = "En codeKids aprenderas los diferentes manejos de control de flujo" />
          <CardHome2
          img = {ManejoDatos}
          text = "Aprende a guardar, modificar y usar tus datos para crear programas útiles"
          reverse />
          </div>

          <div className='card-cont2'>
          <CardHome2
          img = {Funciones}
          text = "Las funciones te ayudarán a reutilizar código y organizar tus ideas" />
          <CardHome2
          img = {OrientadaObjetos}
          text = "Descubre cómo los objetos y clases pueden dar vida a tus programas"
          reverse />
          </div>
        </div>
      </section>

      <section className='section-footer'>
        <Footer />
      </section>

    </div>
  );
};

export default Home; 