import React, { useEffect, useState } from "react";
import "../assets/styles/Code-sorter.css";

const CodeSorter = ({ prompt, correctOrder, onSuccess, disabled }) => {
  const [blocks, setBlocks] = useState([]);
  const [feedback, setFeedback] = useState(null);

  function shuffle(array) {
    return array
      .map((item) => ({ item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ item }) => item);
  }

  useEffect(() => {
    const fallback = [
      "function saludar() {",
      '  console.log("Hola mundo");',
      "}",
      "saludar();",
    ];

    const codeToUse =
      correctOrder && Array.isArray(correctOrder) && correctOrder.length > 0
        ? correctOrder
        : fallback;

    setBlocks(shuffle([...codeToUse]));
    setFeedback(null); // limpia feedback al cambiar de nivel
  }, [correctOrder]);

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
    const codeToUse =
      correctOrder && Array.isArray(correctOrder) && correctOrder.length > 0
        ? correctOrder
        : [
            "function saludar() {",
            '  console.log("Hola mundo");',
            "}",
            "saludar();",
          ];

    const current = blocks.map((line) => line.trim()).join("");
    const expected = codeToUse.map((line) => line.trim()).join("");

    const isCorrect = current === expected;

    if (isCorrect) {
      setFeedback("✅ ¡Perfecto! El código está en orden.");
      if (onSuccess) onSuccess();
    } else {
      setFeedback("❌ Hay algo fuera de orden. Intenta de nuevo.");
    }
  };

  return (
    <div className="code-sorter-card">
      <h2 className="code-sorter-title">🧩 Ordena el Código</h2>
      <p className="code-sorter-prompt">{prompt}</p>

      <div className="code-sorter-blocks">
        {blocks.map((line, index) => (
          <div
            key={index}
            className="code-sorter-block"
            draggable={!disabled}
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
        disabled={disabled}
      >
        Verificar
      </button>

      

      {feedback && <div className="code-sorter-feedback">{feedback}</div>}
    </div>
  );
};

export default CodeSorter;

