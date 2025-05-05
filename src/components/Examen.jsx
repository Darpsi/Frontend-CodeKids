import React, { useState } from "react";
import "../assets/styles/Exam.css";
import BarraLateral from "./Sidebar";
import { useNavigate } from "react-router-dom";

const Examen = ({ preguntas }) => {
  const [respuestas, setRespuestas] = useState(Array(preguntas.length).fill(null));
  const [resultado, setResultado] = useState(null);
  const navigate = useNavigate();

  const handleSeleccion = (indicePregunta, indiceOpcion) => {
    const nuevas = [...respuestas];
    nuevas[indicePregunta] = indiceOpcion;
    setRespuestas(nuevas);
  };

  const confirmarRespuestas = () => {
    const correctas = respuestas.reduce((acc, respuesta, i) => (
      respuesta === preguntas[i].correcta ? acc + 1 : acc
    ), 0);

    if (correctas >= preguntas.length * 0.8) {
      setResultado({
        estado: "ganaste",
        mensaje: `🎉 ¡Ganaste! Obtuviste ${correctas} de ${preguntas.length} respuestas correctas.`
      });
    
      const correo = localStorage.getItem("email");
    
      fetch("http://localhost:4000/progreso/actualizar", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          correo,
          modulo: 1// Actualizar 100% componente para sprint 5
        })
      })
        .then(res => res.json())
        .then(data => console.log("Progreso actualizado:", data))
        .catch(err => console.error("Error actualizando progreso:", err));
    }else {
      setResultado({ estado: "perdiste", mensaje: `😓 Perdiste. Solo obtuviste ${correctas} de ${preguntas.length} respuestas correctas.` });
    }
  };

  const reintentar = () => {
    setRespuestas(Array(preguntas.length).fill(null));
    setResultado(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const volverANiveles = () => {
    navigate("/modules/1");
  };

  return (
    <div className="examen-container">
      <BarraLateral />
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
      {!resultado && (
        <button className="confirmar-btn" onClick={confirmarRespuestas}>Confirmar respuestas</button>
      )}
      {resultado && (
        <div className="resultado">
          <p>{resultado.mensaje}</p>
          <button className="confirmar-btn" onClick={reintentar}>🔁 Reintentar examen</button>
          <button className="confirmar-btn" onClick={volverANiveles}>🏁 Volver a niveles</button>
        </div>
      )}
    </div>
  );
};

export default Examen;