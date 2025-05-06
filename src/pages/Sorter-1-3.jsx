import React from "react";
import CodeSorter from "../components/Codesorter";

const levels = [
  {
    prompt: "Nivel 1: Ordena el código para que la función 'saludar' funcione correctamente.",
    correctOrder: [
      "function saludar() {",
      '  console.log("Hola mundo");',
      "}",
      "saludar();",
    ],
  },
  {
    prompt: "Nivel 2: Ordena el código para sumar dos números y mostrar el resultado.",
    correctOrder: [
      "function sumar(a, b) {",
      "  return a + b;",
      "}",
      "console.log(sumar(5, 7));",
    ],
  },
  {
    prompt: "Nivel 3: Ordena el código para verificar si un número es par.",
    correctOrder: [
      "function esPar(n) {",
      "  return n % 2 === 0;",
      "}",
      "console.log(esPar(6));",
    ],
  },
];

const Code_Sorter = () => {
  return <CodeSorter levels={levels} />;
};

export default Code_Sorter;

