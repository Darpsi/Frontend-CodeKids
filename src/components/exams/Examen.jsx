import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../../assets/styles/exams/Exam.css";
import BarraLateral from "../Sidebar";
import Mascota from "../pet";
import { useNavigate } from "react-router-dom";
import ToastInsignia, { intentarDesbloquearInsignia } from "../insignia/Toast";

const mapaInsigniasPorModulo = {
  1: 3,
  2: 4,
  3: 5,
  8: 6,
};

const Examen = ({ preguntas }) => {
  const [respuestas, setRespuestas] = useState(Array(preguntas.length).fill(null));
  const [resultado, setResultado] = useState(null);
  const navigate = useNavigate();
  const { moduleId } = useParams();
  const [insigniaDesbloqueada, setInsigniaDesbloqueada] = useState(null);


  const handleSeleccion = (indicePregunta, indiceOpcion) => {
    const nuevas = [...respuestas];
    nuevas[indicePregunta] = indiceOpcion;
    setRespuestas(nuevas);
  };

  const confirmarRespuestas = async () => {
  const correctas = respuestas.reduce(
    (acc, respuesta, i) => respuesta === preguntas[i].correcta ? acc + 1 : acc,
    0
  );

  const paso = correctas >= preguntas.length * 0.8;

  if (paso) {
    setResultado({
      estado: "ganaste",
      mensaje: `🎉 ¡Ganaste! Obtuviste ${correctas} de ${preguntas.length} respuestas correctas.`
    });

    const correo = localStorage.getItem("email");

    try {
      await fetch("http://localhost:4000/progreso/actualizar", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo, modulo: moduleId })
      });

      const idModulo = Number(moduleId);
      const idInsignia = mapaInsigniasPorModulo[idModulo];

      if (idInsignia) {
        await intentarDesbloquearInsignia(correo, idInsignia, setInsigniaDesbloqueada);
      }

    } catch (err) {
      console.error("Error actualizando progreso o desbloqueando insignia:", err);
    }

  } else {
    setResultado({
      estado: "perdiste",
      mensaje: `😓 Perdiste. Solo obtuviste ${correctas} de ${preguntas.length} respuestas correctas.`
    });
  }
};


  const reintentar = () => {
    setRespuestas(Array(preguntas.length).fill(null));
    setResultado(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const volverANiveles = () => {
    navigate(`/modules/${moduleId}`);
  };

  const obtenerTipoMascota = () => {
    if (!resultado) return "normal";
    return resultado.estado === "ganaste" ? "feliz" : "triste";
  };

  return (
    <div className="examen-container">
      <BarraLateral />

      {/* 🐶 Mascota flotante */}
      <div className="mascota-examen">
        <Mascota tipo={obtenerTipoMascota()} tamaño="150px" />
      </div>

      <h1>🧠 Examen Final</h1>
      {preguntas.map((pregunta, i) => (
        <div key={i} className="pregunta">
          <h3>{i + 1}. {pregunta.texto}</h3>
          <div className="opciones">
            {pregunta.opciones.map((opcion, j) => (
              <button
                key={j}
                className={`opcion-btn ${respuestas[i] === j ? "seleccionada" : ""}`}
                onClick={() => handleSeleccion(i, j)}
                disabled={resultado !== null}
              >
                {opcion}
              </button>
            ))}
          </div>
        </div>
      ))}
      <ToastInsignia info={insigniaDesbloqueada} />

      {!resultado && (
        <button className="confirmar-btn" onClick={confirmarRespuestas}>
          Confirmar respuestas
        </button>
      )}

      {resultado && (
        <div className="resultado">
          <p>{resultado.mensaje}</p>
          <button className="confirmar-btn" onClick={reintentar}>🔁 Reintentar</button>
          <button className="confirmar-btn" onClick={volverANiveles}>🏁 Volver a niveles</button>
        </div>
      )}
    </div>
  );
};

export default Examen;
