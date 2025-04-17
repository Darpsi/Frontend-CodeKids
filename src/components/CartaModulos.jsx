import React, { useState } from "react";
import "../assets/styles/cartamodulos.css";
import { useNavigate } from "react-router-dom";
import Frente from "../assets/images/cartafrente.jpg";
import Reverso from "../assets/images/cartareverso.jpg";
import Bloqueado from "../assets/images/cartabloqueada.jpg";

const CartaModulos = ({ titulo, descripcion, disponible }) => {
  const [volteada, setVolteada] = useState(false);

  const volteo = () => {
    if (disponible) {
      setVolteada(!volteada);
    }
  };
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.stopPropagation();
    navigate("/level");
  };

  return (
<div className={`carta ${volteada ? "volteada" : ""} ${!disponible ? "bloqueada" : ""}`} onClick={volteo}>
  <div className="cara reverso">
    <img src={disponible ? Reverso : Bloqueado} alt="Módulo" />
    <h3>{titulo}</h3>
  </div>
  <div className="cara frente">
    <div className="contenido-frente">
      <p className="descripcion">{descripcion}</p>
      <button href= "/level" className="entrar-btn" onClick={handleClick}>Entrar</button>
    </div>
    <img className="fondo-imagen" src={Frente} alt="Frente" />
  </div>
</div>
  );
}

export default CartaModulos;
