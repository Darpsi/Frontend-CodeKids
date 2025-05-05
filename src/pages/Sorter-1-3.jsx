import CodeSorter from "../components/Codesorter";
import React, { useState } from "react";

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
  const [currentLevel, setCurrentLevel] = useState(0);
  const [levelPassed, setLevelPassed] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  const handleSuccess = () => {
    if (currentLevel < levels.length - 1) {
      setLevelPassed(true);
    } else {
      setGameFinished(true);
    }
  };

  const goToNextLevel = () => {
    setCurrentLevel((prev) => prev + 1);
    setLevelPassed(false);
  };

  return (
    <div>
      {!gameFinished ? (
        <>
          <CodeSorter
            prompt={levels[currentLevel].prompt}
            correctOrder={levels[currentLevel].correctOrder}
            onSuccess={handleSuccess}
            disabled={levelPassed}
          />

          {levelPassed && (
            <button className="code-sorter-next-button" onClick={goToNextLevel}>
              ➡️ Siguiente nivel
            </button>
          )}
        </>
      ) : (
        <div className="code-sorter-finished">
          🎉 ¡Felicidades! Has completado todos los niveles.
        </div>
      )}
    </div>
  );
};

export default Code_Sorter;

