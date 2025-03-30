import React from "react";
import "../assets/styles/modulos.css";
import BarraLateral from "../components/Barralateral";
import CartaModulos from "../components/CartaModulos";

const Modulos = () => {
  return (
    <div className="modulos-container">
      <BarraLateral />
      <div className="modulos-content">
        <h2 className="modulos-title">« MODULOS »</h2>
        <div className="modulos-grid">
        <CartaModulos titulo="Introducción" disponible={true} descripcion="Aquí verás lo básico de la programación. Pensamiento lógico y resolución de problemas, tipos de datos y variables" />
        <CartaModulos titulo="Sintaxis" disponible={false} descripcion="Aquí aprenderás la sintaxis básica de Python, asignaciones, indentación, comentarios, entrada y salida de datos" />
        <CartaModulos titulo="Control de flujo" disponible={false} descripcion="El control de flujo incluye condiciones y estructuras (if-else) bucles (for, while) operadores lógicos y relacionales" />
        <CartaModulos titulo="Funciones" disponible={false} descripcion="Aquí aprenderás a crear funciones y su uso, los parámetros y valores de retorno, la modularización y reutilización de código" />
        <CartaModulos titulo="Manejo de datos" disponible={false} descripcion="En esta parte del curso aprenderás a gestionar datos con herramientas como listas, arreglos y diccionarios" />
        <CartaModulos titulo="Manejo de errores" disponible={false} descripcion="Aquí aprenderás a manejar errores y excepciones, como prevenirlos y solucionarlos" />    
        <CartaModulos titulo="Programación orientada a objetos I" disponible={false} descripcion="Aquí aprenderás el concepto de clases y objetos, como crearlos y encapsularlos" />
        <CartaModulos titulo="Programación orientada a objetos II" disponible={false} descripcion="Aquí profundizamos en el manejo de clases aprendiendo sobre herencia y polimorfismo" />
        </div>
      </div>
    </div>
  );
};

export default Modulos;
