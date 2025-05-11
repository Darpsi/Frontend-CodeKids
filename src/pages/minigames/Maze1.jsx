import React from "react";
import CodeMaze from "../../components/minigames/Maze";

const levels = [
  {
    prompt: "Corrige la estructura condicional para que el código sea válido.",
    steps: [
      {
        question: "if (i > 0) {",
        options: ["console.log('positivo');", "console.log('positivo')"],
      },
      {
        question: "else",
        options: ["{ console.log('negativo'); }", "console.log('negativo'); }"],
      },
    ],
    correctPath: [0, 0],
  },
  {
    prompt: "Selecciona las líneas que completan correctamente un bucle for.",
    steps: [
      {
        question: "for (let i = 0; i < 5; i++) {",
        options: ["console.log(i);", "console.log(i)"],
      },
      {
        question: "¿Cómo se cierra correctamente el bucle?",
        options: ["}", "end for"],
      },
    ],
    correctPath: [0, 0],
  },
  {
    prompt: "Completa correctamente la definición de una función.",
    steps: [
      {
        question: "function saludar(nombre) {",
        options: ["return 'Hola ' + nombre;", "return Hola nombre;"],
      },
      {
        question: "¿Cómo termina correctamente la función?",
        options: ["}", "fin función"],
      },
    ],
    correctPath: [0, 0],
  },
];

const CodeMazeExample = () => {
  return <CodeMaze levels={levels} />;
};

export default CodeMazeExample;
