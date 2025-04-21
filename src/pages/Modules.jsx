import React from "react";
import "../assets/styles/modules.css";
import Sidebar from "../components/Sidebar";
import CartaModulos from "../components/Card-modules";


const Modulos = () => {
  return (
    <div className="modulos-container">
      <Sidebar />
      <div className="modulos-content">
        <h2 className="modulos-title">« MODULOS »</h2>
        <div className="modulos-grid">
        <CartaModulos
          titulo="Introducción"
          descripcion="Aquí verás lo básico de la programación. Pensamiento lógico y resolución de problemas, tipos de datos y variables"
          disponible={true}
          moduleId={1}
        />
        <CartaModulos
          titulo="Sintaxis"
          descripcion="Aquí aprenderás la sintaxis básica de Python, asignaciones, indentación, comentarios, entrada y salida de datos"
          disponible={false}
          moduleId={2}
        />
        <CartaModulos
          titulo="Control de flujo"
          descripcion="El control de flujo incluye condiciones y estructuras (if-else) bucles (for, while) operadores lógicos y relacionales"
          disponible={false}
          moduleId={3}
        />
        <CartaModulos
          titulo="Funciones"
          descripcion="Aquí aprenderás a crear funciones y su uso, los parámetros y valores de retorno, la modularización y reutilización de código"
          disponible={false}
          moduleId={4}
        />
        <CartaModulos
          titulo="Manejo de datos"
          descripcion="En esta parte del curso aprenderás a gestionar datos con herramientas como listas, arreglos y diccionarios"
          disponible={false}
          moduleId={5}
        />
        <CartaModulos
          titulo="Manejo de errores"
          descripcion="Aquí aprenderás a manejar errores y excepciones, como prevenirlos y solucionarlos"
          disponible={false}
          moduleId={6}
        />
        <CartaModulos
          titulo="Programación orientada a objetos I"
          descripcion="Aquí aprenderás el concepto de clases y objetos, como crearlos y encapsularlos"
          disponible={false}
          moduleId={7}
        />
        <CartaModulos
          titulo="Programación orientada a objetos II"
          descripcion="Aquí profundizamos en el manejo de clases aprendiendo sobre herencia y polimorfismo"
          disponible={false}
          moduleId={8}
        />
        </div>
      </div>
    </div>
  );
};

export default Modulos;
