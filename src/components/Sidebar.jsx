import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import perfil from "../assets/images/perfil.png";
import useUserData from "../hooks/User-data"; // Asegúrate de que el nombre del archivo coincida exactamente
import "../assets/styles/sidebar.css";
import logo from "../assets/images/logo.png";



const BarraLateral = () => {
  const [visible, setVisible] = useState(true);
  const [modalAbierto, setModalAbierto] = useState(false);
  const navigate = useNavigate();
  const { userName, institutionName } = useUserData();

  const irAPerfil = () => {
    navigate("/perfil");
  };

  const abrirModal = () => setModalAbierto(true);
  const cerrarModal = () => setModalAbierto(false);

  return (
    <>
      <div className={`barra-lateral ${visible ? "visible" : "oculta"}`}>
        <div className="logo-container">
          <img src={logo} alt="Logo" />
        </div>

        <button className="toggle" onClick={() => setVisible(!visible)}>
          {visible ? "<<" : ">>"}
        </button>
        <div className="contenido-barra">
          <div className="perfil">
            <img src={perfil} alt="Perfil" />
            <button onClick={irAPerfil}>Perfil</button>
          </div>
          <div className="botones-barra">
            <button onClick={abrirModal}>Institución</button>
            <a href="/modules">Módulos</a>
            <a href="/">Salir</a>
          </div>
        </div>
      </div>

      {modalAbierto && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <h2>Hola, {userName}</h2>
            <p>La institución a la que perteneces es:</p>
            <h3>{institutionName}</h3>
            <button onClick={cerrarModal}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default BarraLateral;