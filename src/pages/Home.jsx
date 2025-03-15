// src/pages/Home.jsx
import React from 'react';
import '../assets/styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Bienvenido a CodeKids</h1>
      <p className="home-subtitle">¡Explora y aprende jugando!</p>
      <button className="home-button" onClick={() => alert('¡Bienvenido!')}>
        Comienza ahora
      </button>
      <a className="home-links" href="/login"> Login</a>
      <a className="home-links" href="/register"> Registro</a>
    </div>
  );
};

export default Home;
