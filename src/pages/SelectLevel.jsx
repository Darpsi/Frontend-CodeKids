import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/SelectLevel.css";
import BarraLateral from "../components/Sidebar";

const niveles = [
  {
    id: 1,
    label: "Nivel 1",
    info: (
      <>
        Introducción a conceptos básicos de programación.
      </>
    ),
  },
  { id: 2, label: "Nivel 2", info: "Secuencias y lógica básicas." },
  { id: 3, label: "Nivel 3", info: "Condiciones y decisiones." },
  { id: 4, label: "Nivel 4", info: "Bucles y repeticiones." },
  { id: 5, label: "Nivel 5", info: "EXAMEN FINAL" },
];

const Piramide = () => {
  const [activo, setActivo] = useState(null);
  const navigate = useNavigate();

  const toggleNivel = (id) => {
    setActivo(activo === id ? null : id);
  };

  const irANivel = (id) => {
    if (id === 1) navigate("/modules/1/levels/1");
    else if (id === 2) navigate("/level");
    else if (id === 3) navigate("/maxgame");
    else if (id === 5) navigate("/exam");
  };

  return (
    <div className="piramide-container">
      <BarraLateral />
      <div className="contenido-central">
        <h1>PIRÁMIDE DE CONOCIMIENTO</h1>
        <h2>¡Elige un nivel!</h2>
      </div>

      <div className="piramide-rectangular">
        {niveles.map((nivel) => (
          <div
            key={nivel.id}
            className={`nivel-piramide nivel-${nivel.id} ${activo === nivel.id ? "activo" : ""}`}
            onClick={() => toggleNivel(nivel.id)}
          >
            <div className="label-piramide">{nivel.label}</div>
            {activo === nivel.id && (
              <div className="contenido-piramide">
                <div>{nivel.info}</div>
                <div className="espaciado-boton">
                  {(nivel.id <= 5) && (
                    <button
                      className="boton-entrar"
                      onClick={(e) => {
                        e.stopPropagation();
                        irANivel(nivel.id);
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
