import React, { useState } from "react";
import BarraLateral from "../components/Sidebar";
import "../assets/styles/Bug-catcher.css"; 

const BugCatcherMultiLevel = ({ levels }) => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [userCode, setUserCode] = useState(levels[0].buggyCode);
  const [feedback, setFeedback] = useState(null);
  const [completed, setCompleted] = useState(false);

  const normalize = (str) =>
    str.trim().replace(/\s+/g, " ").toLowerCase();

  const checkAnswer = () => {
    if (normalize(userCode) === normalize(levels[currentLevel].correctCode)) {
      setFeedback("¡Correcto! Has atrapado el bug 🐞✅");
      setCompleted(true);
    } else {
      setFeedback("Ups... aún hay errores. ¡Sigue intentando! ❌");
      setCompleted(false);
    }
  };

  const goToNextLevel = () => {
    const next = currentLevel + 1;
    if (next < levels.length) {
      setCurrentLevel(next);
      setUserCode(levels[next].buggyCode);
      setFeedback(null);
      setCompleted(false);
    } else {
      setFeedback("🎉 ¡Felicidades! Has completado todos los niveles.");
    }
  };

  const levelData = levels[currentLevel];

  return (
    <div className="bug-catcher-card">
        <BarraLateral />
      <h2 className="bug-catcher-title">🧠 Atrapa el Bug - Nivel {currentLevel + 1}</h2>
      <p className="bug-catcher-prompt">{levelData.prompt}</p>

      <textarea
        className="bug-catcher-textarea"
        value={userCode}
        onChange={(e) => setUserCode(e.target.value)}
      />

      <button className="bug-catcher-button" onClick={checkAnswer}>
        Verificar
      </button>

      {feedback && (
        <div className="bug-catcher-feedback">{feedback}</div>
      )}

      {completed && currentLevel < levels.length - 1 && (
        <button className="bug-catcher-button" onClick={goToNextLevel}>
          Siguiente Nivel →
        </button>
      )}

      {completed && currentLevel === levels.length - 1 && (
        <div className="bug-catcher-feedback">
          🎊 ¡Has terminado todos los niveles!
        </div>
      )}
    </div>
  );
};

export default BugCatcherMultiLevel;
