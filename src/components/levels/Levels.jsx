import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../assets/styles/levels/levels.css";

const Levels = ({ secciones, titulo }) => {
  const [indice, setIndice] = useState(0);
  const seccionActual = secciones[indice];
  const navigate = useNavigate();
  const { moduleId, levelId } = useParams();
  
  const modId = parseInt(moduleId);
  const lvlId = parseInt(levelId);

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

  const handleNavigation = () => {
    if (indice === secciones.length - 1) {
      // Redirect based on lvlId
      switch (lvlId) {
        case 1:
          navigate(`/quiz/${modId}`);
          break;
        case 2:
          navigate(`/minigame/${modId}/catcher`);
          break;
        case 3:
          navigate(`/minigame/${modId}/sorter`);
          break;
        case 4:
          navigate(`/minigame/${modId}/maze`);
          break;
        default:
          navigate("/"); // Fallback to home or another default route
          break;
      }
    } else {
      avanzar();
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
        <button onClick={handleNavigation}>
          {indice === secciones.length - 1 ? "Finalizar" : "Siguiente"}
        </button>
      </div>
    </div>
  );
};

export default Levels;