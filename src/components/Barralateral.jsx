import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import perfil from "../assets/images/perfil.png";
import "../assets/styles/barralateral.css";

const BarraLateral = () => {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  const irAPerfil = () => {
    navigate("/perfil");
  };

  return (
    <div className={`barra-lateral ${visible ? "visible" : "oculta"}`}>
      <button className="toggle" onClick={() => setVisible(!visible)}>
        {visible ? "<<" : ">>"}
      </button>
      <div className="contenido-barra">
        <div className="perfil">
          <img src={perfil} alt="Perfil" />
          <button onClick={irAPerfil}>Perfil</button>
        </div>
        <div className="botones-barra">
          <a href="/">Salir</a>
        </div>
      </div>
    </div>
  );
};

export default BarraLateral;
