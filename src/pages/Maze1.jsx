import React from "react";
import CodeMaze from "../components/Maze";

const levels = [
  {
    prompt: "Lleva a tu robot al final del laberinto resolviendo condicionales.",
    steps: [
      {
        question: "if (x > 5) {",
        options: ["caminar();", "saltar();"],
      },
      {
        question: "} else {",
        options: ["nadar();", "caminar();"],
      },
    ],
    correctPath: [0, 0],
  },
  {
    prompt: "Selecciona el camino correcto usando bucles.",
    steps: [
      {
        question: "for (let i = 0; i < 3; i++) {",
        options: ["caminar();", "volar();"],
      },
      {
        question: "}",
        options: ["esperar();", "romper();"],
      },
    ],
    correctPath: [0, 0],
  },
  {
    prompt: "Resuelve la función misteriosa.",
    steps: [
      {
        question: "function misteriosa() {",
        options: ["caminar();", "return 'listo';"],
      },
      {
        question: "}",
        options: ["misteriosa();", "volar();"],
      },
    ],
    correctPath: [1, 0],
  },
];

const CodeMazeExample = () => {
  return <CodeMaze levels={levels} />;
};

export default CodeMazeExample;
