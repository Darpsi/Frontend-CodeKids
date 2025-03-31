import React, { useState } from "react";
import "../assets/styles/barralateral.css";
import perfil from "../assets/images/perfil.png";

const BarraLateral = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div className={`barra-lateral ${visible ? "visible" : "oculta"}`}>
      <button className="toggle" onClick={() => setVisible(!visible)}>
        {visible ? "<<" : ">>"}
      </button>
      <div className="contenido-barra">
        <div className="perfil">
          <img src={perfil} alt="Perfil" />
          <p>Perfil</p>
        </div>
        <div className="botones-barra">
        <button>Institución</button>
        <button>Progreso</button>
        <button>Insignias</button>
        <a href="/">Salir</a>
      </div>
    </div>
    </div>
  );
};

export default BarraLateral;
