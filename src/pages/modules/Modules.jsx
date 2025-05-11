import React, { useEffect, useState } from "react";
import "../../assets/styles/modules/modules.css";
import Sidebar from "../../components/Sidebar";
import CartaModulos from "../../components/modules/Card-modules";

const Modulos = () => {
  const [maxModulo, setMaxModulo] = useState(0);
  console.log("Maximo modulo:", maxModulo, localStorage.getItem("email"));
  useEffect(() => {
    const correo = localStorage.getItem("email");
    if (!correo) return;
    fetch(`http://localhost:4000/progreso/${correo}`)
      .then(res => res.json())
      .then(data => {
        setMaxModulo(data.maxModulo);
        console.log("Progreso del usuario:", data.maxModulo);
      })
      .catch(error => {
        console.error("Error obteniendo el progreso:", error);
      });
  }, []);

  const modulos = [
    {
      id: 1,
      titulo: "Introducción",
      descripcion: "Aquí verás lo básico de la programación. Pensamiento lógico y resolución de problemas, tipos de datos y variables.",
      disponible: true
    },
    {
      id: 2,
      titulo: "Sintaxis",
      descripcion: "Aquí aprenderás la sintaxis básica de Python, asignaciones, indentación, comentarios, entrada y salida de datos.",
      disponible: false
    },
    {
      id: 3,
      titulo: "Control de flujo",
      descripcion: "El control de flujo incluye condiciones y estructuras (if-else), bucles (for, while), operadores lógicos y relacionales.",
      disponible: false
    },
    {
      id: 4,
      titulo: "Funciones",
      descripcion: "Aquí aprenderás a crear funciones y su uso, los parámetros y valores de retorno, la modularización y reutilización de código.",
      disponible: false
    },
    {
      id: 5,
      titulo: "Manejo de datos",
      descripcion: "En esta parte del curso aprenderás a gestionar datos con herramientas como listas, arreglos y diccionarios.",
      disponible: false
    },
    {
      id: 6,
      titulo: "Manejo de errores",
      descripcion: "Aquí aprenderás a manejar errores y excepciones, cómo prevenirlos y solucionarlos.",
      disponible: false
    },
    {
      id: 7,
      titulo: "Programación orientada a objetos I",
      descripcion: "Aquí aprenderás el concepto de clases y objetos, cómo crearlos y encapsularlos.",
      disponible: false
    },
    {
      id: 8,
      titulo: "Programación orientada a objetos II",
      descripcion: "Aquí profundizamos en el manejo de clases aprendiendo sobre herencia y polimorfismo.",
      disponible: false
    }
  ];

  const getModuleAvailability = (moduleId) => {
    return moduleId <= maxModulo;
  };

  return (
    <div className="modulos-container">
      <Sidebar />
      <div className="modulos-content">
        <h2 className="modulos-title">« MODULOS »</h2>
        <div className="modulos-grid">
          {modulos.map((modulo) => (
            <CartaModulos
              key={modulo.id}
              titulo={modulo.titulo}
              descripcion={modulo.descripcion}
              disponible={getModuleAvailability(modulo.id)}
              moduleId={modulo.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modulos;
