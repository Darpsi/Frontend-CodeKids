import React, { useState, useEffect } from "react";
import "../assets/styles/SelectLevel.css";
import BarraLateral from "../components/Barralateral";

const niveles = [
    { id: 1, label: "Nivel 1", info: "Conceptos básicos de programación." },
    { id: 2, label: "Nivel 2", info: "Sintaxis y estructuras de control." },
    { id: 3, label: "Nivel 3", info: "Tipos de datos y variables." },
    { id: 4, label: "Nivel 4", info: "Funciones y modularidad." },
    { id: 5, label: "Nivel 5", info: "Estructuras de datos." },
  ];
  
  const Piramide = () => {
    const [activo, setActivo] = useState(null);
  
    const toggleNivel = (id) => {
      setActivo(activo === id ? null : id);
    };
  
    return (
      <div className="piramide-container">
        <BarraLateral />
        <div className="contenido-central">
          <h1>PIRÁMIDE DE CONOCIMIENTO</h1>
          <h2>¡Elije un nivel!</h2>
        </div>
  
        <div className="piramide-rectangular">
          {niveles.map((nivel) => (
            <div
              key={nivel.id}
              className={`nivel nivel-${nivel.id} ${activo === nivel.id ? "activo" : ""}`}
              onClick={() => toggleNivel(nivel.id)}
            >
              <div className="label">{nivel.label}</div>
              {activo === nivel.id && <div className="contenido">{nivel.info}</div>}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Piramide;
