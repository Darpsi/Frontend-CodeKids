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
    try {
          navigate("/level");
        } catch (error) {
          alert(error.message);
        }
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
      <button className="entrar-btn" onClick={handleClick}>Entrar</button>
    </div>
    <img className="fondo-imagen" src={Frente} alt="Frente" />
  </div>
</div>
  );
}

export default CartaModulos;
