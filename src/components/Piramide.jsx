import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/SelectLevel.css";
import BarraLateral from "../components/Barralateral";

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
            className={`nivel nivel-${nivel.id} ${activo === nivel.id ? "activo" : ""}`}
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
      </div>
    </div>
  );
};

export default Piramide;
