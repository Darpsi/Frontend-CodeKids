import React from "react";
import "../assets/styles/cartamodulos.css";

const CartaModulos = ({ titulo }) => {
  return (
    <div className="carta">
      <div className="carta-contenido">
        <div className="carta-circulo"></div>
        <p className="carta-texto">{titulo}</p>
      </div>
    </div>
  );
};

export default CartaModulos;
