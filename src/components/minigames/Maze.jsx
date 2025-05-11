import React, { useState } from "react";
import "../../assets/styles/minigames/Maze.css";
import "../../assets/styles/minigames/Maze.css";import BarraLateral from "./../Sidebar";

const CodeMaze = ({ levels }) => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [path, setPath] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [completed, setCompleted] = useState(false);

  const level = levels[currentLevel];

  const handleChoice = (stepIndex, choice) => {
    const newPath = [...path];
    newPath[stepIndex] = choice;
    setPath(newPath);
  };

  const checkAnswer = () => {
    const userPath = path.join(",");
    const correctPath = level.correctPath.join(",");

    if (userPath === correctPath) {
      setFeedback("✅ ¡Has salido del laberinto!");
      setCompleted(true);
    } else {
      setFeedback("❌ Camino incorrecto, intenta otra vez.");
    }
  };

  const nextLevel = () => {
    setCurrentLevel((prev) => prev + 1);
    setPath([]);
    setFeedback(null);
    setCompleted(false);
  };

  return (
    <div className="code-maze-card">
        <BarraLateral />
      <h2 className="code-maze-title">🧠 Laberinto de Código</h2>
      <p className="code-maze-prompt">{level.prompt}</p>

      {level.steps.map((step, index) => (
        <div key={index} className="code-maze-step">
          <p>{step.question}</p>
          <div className="code-maze-options">
            {step.options.map((opt, i) => (
              <button
                key={i}
                className={`code-maze-option ${
                  path[index] === i ? "selected" : ""
                }`}
                onClick={() => handleChoice(index, i)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}

      <button
        className="code-maze-button"
        onClick={checkAnswer}
        disabled={completed}
      >
        Verificar
      </button>

      {feedback && <div className="code-maze-feedback">{feedback}</div>}

      {completed && currentLevel < levels.length - 1 && (
        <button className="code-maze-next" onClick={nextLevel}>
          Siguiente Nivel →
        </button>
      )}

        {completed && currentLevel === levels.length - 1 && (
        <div className="code-maze-end">
            🎉 ¡Completaste todos los niveles!
            <br />
            <button className="code-maze-return" onClick={() => window.location.href = "/modules/2"}>
            ⬅ Volver al Menú Principal
            </button>
        </div>
        )}
    </div>
  );
};

export default CodeMaze;
