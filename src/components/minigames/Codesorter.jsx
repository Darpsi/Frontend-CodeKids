import React, { useEffect, useState } from "react";
import "../../assets/styles/minigames/Code-sorter.css";
import BarraLateral from "./../Sidebar";
import "../../assets/images/levels/puzzlew.gif";

const CodeSorter = ({ levels }) => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [blocks, setBlocks] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [levelPassed, setLevelPassed] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  const shuffle = (array) =>
    array
      .map((item) => ({ item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ item }) => item);

  useEffect(() => {
    if (!Array.isArray(levels) || currentLevel >= levels.length) return;

    const current = levels[currentLevel];
    const codeToUse =
      current.correctOrder && Array.isArray(current.correctOrder)
        ? current.correctOrder
        : [];

    setBlocks(shuffle([...codeToUse]));
    setFeedback(null);
    setLevelPassed(false);
  }, [currentLevel, levels]);

  const handleDrop = (e, index) => {
    const draggedIndex = e.dataTransfer.getData("text/plain");
    if (draggedIndex === null) return;

    const updated = [...blocks];
    const draggedItem = updated[draggedIndex];
    updated.splice(draggedIndex, 1);
    updated.splice(index, 0, draggedItem);
    setBlocks(updated);
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
  };

  const checkAnswer = () => {
    if (!Array.isArray(levels) || currentLevel >= levels.length) return;

    const current = levels[currentLevel];
    const correct = Array.isArray(current.correctOrder)
      ? current.correctOrder
      : [];

    const normalize = (lines) =>
      Array.isArray(lines)
        ? lines.map((line) => line.trim().replace(/\s+/g, " ")).join("")
        : "";

    const isCorrect = normalize(blocks) === normalize(correct);

    if (isCorrect) {
      setFeedback("✅ ¡Perfecto! El código está en orden.");
      setLevelPassed(true);
      setTimeout(() => {
        if (currentLevel < levels.length - 1) {
          setCurrentLevel((prev) => prev + 1);
        } else {
          setGameFinished(true);
        }
      }, 1000);
    } else {
      setFeedback("❌ Hay algo fuera de orden. Intenta de nuevo.");
    }
  };

  if (!Array.isArray(levels) || levels.length === 0) {
    return <div className="code-sorter-error">⚠️ No hay niveles disponibles.</div>;
  }

  const currentPrompt = levels[currentLevel]?.prompt || "";

  return (
    <div className="code-sorter-card">
      <BarraLateral />
      <h2 className="code-sorter-title">🧩 Ordena el Código</h2>
      <p className="code-sorter-prompt">{currentPrompt}</p>
      <img className="code-sorter-puzzle" 
      src={require("../../assets/images/levels/puzzlew.gif")}
      alt="Puzzle GIF" />

      <div className="code-sorter-blocks">
        {blocks.map((line, index) => (
          <div
            key={index}
            className="code-sorter-block"
            draggable={!levelPassed}
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, index)}
          >
            {line}
          </div>
        ))}
      </div>

      <button
        className="code-sorter-button"
        onClick={checkAnswer}
        disabled={levelPassed || gameFinished}
      >
        Verificar
      </button>

      {feedback && <div className="code-sorter-feedback">{feedback}</div>}

      {gameFinished && (
        <div className="code-sorter-finished">
          🎉 ¡Felicidades! Has completado todos los niveles.
          <br />
          <button
            className="code-sorter-button"
            onClick={() => (window.location.href = "/modules/2")}
          >
            🏠 Volver al Menú Principal
          </button>
        </div>
      )}
    </div>
  );
};

export default CodeSorter;
