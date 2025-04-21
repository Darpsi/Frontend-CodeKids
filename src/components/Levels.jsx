import React, { useState } from "react";
import "../assets/styles/levels.css";

const Levels = ({ secciones, titulo }) => {
  const [indice, setIndice] = useState(0);
  const seccionActual = secciones[indice];

  const avanzar = () => {
    if (indice < secciones.length - 1) {
      setIndice(indice + 1);
    }
  };

  const retroceder = () => {
    if (indice > 0) {
      setIndice(indice - 1);
    }
  };

  const soloTexto = !seccionActual.imagen && !seccionActual.video;

  return (
    <div className={`seccion ${soloTexto ? "solo-texto" : ""}`}>
      <h2 className="titulo-nivel">{titulo}</h2>
      <div className="contenido">
        <div className="texto">
          <p style={{ whiteSpace: "pre-wrap" }}>
            {seccionActual.text}
          </p>
        </div>

        {seccionActual.imagen && (
          <img
            src={seccionActual.imagen}
            alt="Contenido visual"
            className="imagen"
          />
        )}

        {seccionActual.video && (
          <div className="video">
            {seccionActual.video.includes("youtube") ? (
              <iframe
                src={seccionActual.video}
                title="Video tutorial"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <video controls>
                <source src={seccionActual.video} type="video/mp4" />
                Video no soportado
              </video>
            )}
          </div>
        )}
      </div>

      <div className="navegacion">
        <button
          onClick={retroceder}
          style={{ visibility: indice > 0 ? "visible" : "hidden" }}
        >
          Atrás
        </button>
        <button onClick={avanzar}>
          {indice === secciones.length - 1 ? "Finalizar" : "Siguiente"}
        </button>
      </div>
    </div>
  );
};

export default Levels;
