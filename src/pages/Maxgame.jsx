import React, { useState, useEffect } from "react";
import "../assets/styles/Maxgame.css";
import duchaImg from "../assets/images/ducha.png";
import ropaImg from "../assets/images/ropa.png";
import desayunoImg from "../assets/images/desayuno.png";
import casaImg from "../assets/images/casa.png";
import maxImg from "../assets/images/max.png";

const acciones = [
  { id: 1, nombre: "🧼 Bañarse", imagen: duchaImg },
  { id: 2, nombre: "👕 Vestirse", imagen: ropaImg },
  { id: 3, nombre: "🥣 Desayunar", imagen: desayunoImg },
  { id: 4, nombre: "🚪 Salir", imagen: casaImg },
];

const MaxGame = () => {
  const [orden, setOrden] = useState([]);
  const [mostrarMensaje, setMostrarMensaje] = useState(true);
  const [mostrarBoton, setMostrarBoton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarBoton(true);
    }, 4000); // Aparece el botón después del fade-in del mensaje

    return () => clearTimeout(timer);
  }, []);

  const handleClick = (accion) => {
    if (orden.find((a) => a.id === accion.id)) return;
    setOrden([...orden, accion]);
  };

  const verificarOrden = () => {
    const correcto = [1, 2, 3, 4];
    const actual = orden.map((a) => a.id);
    if (JSON.stringify(correcto) === JSON.stringify(actual)) {
      alert("¡Muy bien! Max está listo para salir 🎉");
    } else {
      alert("¡Ups! Revisa el orden. ¿Está Max en pijama todavía? 😅");
    }
  };

  const reiniciar = () => setOrden([]);

  return (
    <div className="maxgame-container">
      {mostrarMensaje ? (
        <div className="mensaje-inicial">
          <p>
            🧠 Las computadoras no piensan como los humanos. Solo entienden pasos precisos y en orden.
            Por eso, cuando les damos instrucciones, el orden en que las escribimos puede cambiarlo todo.
            En este juego, tendrás que ayudar a Max a prepararse siguiendo el orden correcto para que pueda comenzar su día. ¡Buena suerte! 💻🌞
          </p>
          {mostrarBoton && (
            <button className="boton-continuar" onClick={() => setMostrarMensaje(false)}>
              Continuar
            </button>
          )}
        </div>
      ) : (
        <>
          <h2>🧩 Ayuda a Max a Prepararse</h2>
          <img src={maxImg} alt="Max" className="max-img" />

          <div className="acciones-container">
            {acciones.map((accion) => (
              <button
                key={accion.id}
                className="accion-btn"
                onClick={() => handleClick(accion)}
              >
                <img src={accion.imagen} alt={accion.nombre} />
                <span>{accion.nombre}</span>
              </button>
            ))}
          </div>

          <div className="orden-container">
            <h3>Tu orden:</h3>
            {orden.map((accion, index) => (
              <div key={index} className="orden-item">
                <img src={accion.imagen} alt={accion.nombre} />
                <span>{accion.nombre}</span>
              </div>
            ))}
          </div>

          <div className="botones">
            <button onClick={verificarOrden}>Verificar</button>
            <button onClick={reiniciar}>Reiniciar</button>
          </div>
        </>
      )}
    </div>
  );
};

export default MaxGame;

