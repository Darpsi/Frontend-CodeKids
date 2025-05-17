import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/levels/SelectLevel.css";
import BarraLateral from "../Sidebar";
import nube from "../../assets/images/levels/nube.png";
import sol from "../../assets/images/levels/sol.gif";
import cactus from "../../assets/images/levels/cactus.png";
import desert from "../../assets/images/levels/desert.png";

const Piramide = ({ titulo = "PIRÁMIDE DE CONOCIMIENTO", subtitulo = "¡Elije un nivel!", niveles = [] }) => {
  const [activo, setActivo] = useState(null);
  const navigate = useNavigate();

  const toggleNivel = (id) => {
    setActivo(activo === id ? null : id);
  };

  const irANivel = (ruta) => {
    navigate(ruta);
  };

  return (
    <div className="piramide-container">
      <BarraLateral />
      <div className="contenido-central-piramide">
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
      </div>

      <div className="piramide-rectangular">
        {niveles.map((nivel) => (
          <div
            key={nivel.id}
            className={`nivel nivel-${nivel.id} ${activo === Number(nivel.id) ? "activo" : ""}`}
            onClick={() => toggleNivel(nivel.id)}
          >
            <div className="label-piramide">{nivel.label}</div>
            {activo === nivel.id && (
              <div className="contenido-piramide">
                <div>{nivel.info}</div>
                <div className="espaciado-boton-piramide">
                  {nivel.ruta && (
                    <button
                      className="boton-entrar-piramide"
                      onClick={(e) => {
                        e.stopPropagation();
                        irANivel(nivel.ruta);
                      }}
                    >
                      ENTRAR
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
        <div className="decoraciones-piramide">
          <img src={nube} alt="Nube 1" className="nube-1" />
          <img src={nube} alt="Nube 2" className="nube-2" />
          <img src={cactus} alt="Cactus 1" className="cactus-1" />
          <img src={cactus} alt="Cactus 2" className="cactus-2" />
          <img src={sol} alt="Sol" className="sol" />
          <img src={desert} alt="Desierto" className="desert" />
        </div>
      </div>
    </div>
  );
};

export default Piramide;
