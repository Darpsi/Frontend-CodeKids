import React, { useState } from "react";
import "../../assets/styles/modules/card-modules.css";
import { useNavigate } from "react-router-dom";
import Frente from "../../assets/images/modules/cartafrente.jpg";
import Reverso from "../../assets/images/modules/cartareverso.jpg";
import Bloqueado from "../../assets/images/modules/cartabloqueada.jpg";

const CartaModulos = ({ titulo, descripcion, disponible, moduleId }) => {
  const [volteada, setVolteada] = useState(false);
  const navigate = useNavigate();

  const volteo = () => {
    if (disponible) {
      setVolteada(!volteada);
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();
    navigate(`/modules/${moduleId}`); 
  };

  return (
    <div
      className={`carta ${volteada ? "volteada" : ""} ${!disponible ? "bloqueada" : ""}`}
      onClick={volteo}
    >
      <div className="cara reverso">
        <img src={disponible ? Reverso : Bloqueado} alt="Módulo" />
        <h3>{titulo}</h3>
      </div>
      <div className="cara frente">
        <div className="contenido-frente">
          <p className="descripcion">{descripcion}</p>
          {disponible && (
            <button className="entrar-btn" onClick={handleClick}>
              Entrar
            </button>
          )}
        </div>
        <img className="fondo-imagen" src={Frente} alt="Frente" />
      </div>
    </div>
  );
};

export default CartaModulos;
