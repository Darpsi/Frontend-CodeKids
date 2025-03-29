import React from "react";
import "../assets/styles/modulos.css";
import BarraLateral from "../components/Barralateral";
import CartaModulos from "../components/CartaModulos";

const Modulos = () => {
  return (
    <div className="modulos-container">
      <BarraLateral />
      <div className="modulos-content">
        <h2 className="modulos-title">« MODULOS »</h2>
        <div className="modulos-grid">
          <CartaModulos titulo="Introducción" />
          <CartaModulos titulo="Control de flujo" />
          <CartaModulos titulo="Funciones" />
          <CartaModulos titulo="Manejo de datos" />
        </div>
      </div>
    </div>
  );
};

export default Modulos;
