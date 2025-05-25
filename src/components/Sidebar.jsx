import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import perfil from "../assets/images/perfil.png";
import useUserData from "../hooks/User-data";
import "../assets/styles/sidebar.css";
import logo from "../assets/images/codekids_logo_n.png";

const BarraLateral = () => {
  const [visible, setVisible] = useState(true);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [modalChisteAbierto, setModalChisteAbierto] = useState(false);
  const [chiste, setChiste] = useState("");

  const navigate = useNavigate();
  const { userName, institutionName } = useUserData();

  const irAPerfil = () => {
    navigate("/perfil");
  };

  const abrirModalChiste = async () => {
    setModalChisteAbierto(true);
    try {
      const response = await fetch("https://v2.jokeapi.dev/joke/Programming?lang=es");
      const data = await response.json();
      if (data.type === "single") {
        setChiste(data.joke);
      } else {
        setChiste(`${data.setup}\n\n${data.delivery}`);
      }
    } catch (error) {
      console.error("Error al obtener el consejo:", error);
      setChiste("No se pudo obtener un consejo en este momento.");
    }
  }
  const cerrarModalChiste = () => setModalChisteAbierto(false);

  const abrirModal = () => setModalAbierto(true);
  const cerrarModal = () => setModalAbierto(false);

  return (
    <>
      {/* BOTÓN FUERA DEL SIDEBAR */}
      <button className="toggle" onClick={() => setVisible(!visible)}>
        {visible ? "<<" : ">>"}
      </button>

      {/* SIDEBAR */}
      <div className={`barra-lateral ${visible ? "visible" : "oculta"}`}>
        <div className="logo-container">
          <img src={logo} alt="Logo" />
        </div>
        <div className="contenido-barra">
          <div className="perfil">
            <img src={perfil} alt="Perfil" />
            <button onClick={irAPerfil}>Perfil</button>
          </div>
          <div className="botones-barra">
            <button onClick={abrirModal}>Institución</button>
            <button onClick={abrirModalChiste}>Chiste</button>
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
      {/* MODAL CONSEJO */}
      {modalChisteAbierto && (
        <div className="modal-overlay" onClick={cerrarModalChiste}>
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <h2>Chiste del día</h2>
            <p>{chiste}</p>
            <button onClick={cerrarModalChiste}>Cerrar</button>
          </div>
        </div>
      )}

    </>
  );
};

export default BarraLateral;
