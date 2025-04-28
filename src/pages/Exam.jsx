import React from "react";
import Examen from "../components/Examen";

const preguntasExamenFinal = [
  {
    texto: "¿Qué es la programación?",
    opciones: ["Jugar con la consola", "Escribir instrucciones para una computadora", "Hablar otro idioma", "Crear música"],
    correcta: 1,
  },
  {
    texto: "¿Para qué sirve programar?",
    opciones: ["Para enseñar a las computadoras qué hacer", "Para contar historias", "Para hacer ejercicio", "Para jugar videojuegos"],
    correcta: 0,
  },
  {
    texto: "¿Cuál de estos NO es un lenguaje de programación?",
    opciones: ["Python", "Scratch", "Español", "Java"],
    correcta: 2,
  },
  {
    texto: "¿Qué es una secuencia en programación?",
    opciones: ["Un juego de cartas", "Un conjunto de colores", "Un orden de instrucciones", "Una canción"],
    correcta: 2,
  },
  {
    texto: "¿Qué pasaría si cambias el orden de una secuencia?",
    opciones: ["Todo funcionará igual", "La computadora se adaptará sola", "Puede que no funcione correctamente", "No pasa nada"],
    correcta: 2,
  },
  {
    texto: "¿Cuál es la forma correcta de una secuencia para preparar té?",
    opciones: ["Poner el té, luego hervir el agua", "Hervir agua, poner té, esperar", "Comer primero, luego hacer té", "Dormir y después preparar"],
    correcta: 1,
  },
  {
    texto: "¿Qué es una condicional en programación?",
    opciones: ["Una fórmula matemática", "Una instrucción que se repite", "Una decisión que depende de algo", "Una función que pinta"],
    correcta: 2,
  },
  {
    texto: "¿Cuál de estas frases representa una condicional?",
    opciones: ["Repite 5 veces", "Si está lloviendo, usa paraguas", "Haz clic para jugar", "Muévete hacia adelante"],
    correcta: 1,
  },
  {
    texto: "¿Qué hace un bucle o ciclo?",
    opciones: ["Ejecuta una acción solo una vez", "Detiene el programa", "Repite una acción varias veces", "Cambia el color de fondo"],
    correcta: 2,
  },
  {
    texto: "¿Cuál instrucción representa un bucle?",
    opciones: ["Caminar", "Si tienes hambre, come", "Repite 3 veces: saltar", "Saluda a un amigo"],
    correcta: 2,
  },
];

const Exam = () => {
  return <Examen preguntas={preguntasExamenFinal} />;
};

export default Exam;
