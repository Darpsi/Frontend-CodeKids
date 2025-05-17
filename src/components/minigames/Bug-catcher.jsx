import React, { useState, useEffect } from "react";
import BarraLateral from "./../Sidebar";
import "../../assets/styles/minigames/Bug-catcher.css"; 
import "../../assets/images/levels/caterpillar.gif";
import "../../assets/images/levels/grass.png";
import { useParams } from "react-router-dom";

const BugCatcherMultiLevel = ({ levels }) => {
  const { moduleid } = useParams();
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

  useEffect(() => {
    const bug = document.querySelector(".caterpillar");
    let direction = 1;
    let position = 251;
  
    const moveBug = () => {
      if (!bug) return;
      position += direction * 2;
      if (position >= 850 || position <= 250) {
        direction *= -1;
        if (direction === -1) {
          bug.style.transform = "scaleX(1)";
        } else {
          bug.style.transform = "scaleX(-1)";
        }
      }
      bug.style.left = `${position}px`;
      requestAnimationFrame(moveBug);
    };
  
    moveBug();
  }, []);

  return (
    <div className="bug-catcher-card">
        <BarraLateral />
        <img
          src={require("../../assets/images/levels/caterpillar.gif")}
          alt="bicho"
          className="caterpillar"
        />
        <img
          src={require("../../assets/images/levels/grass.png")}
          alt="pasto"
          className="grassbg"
        />
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
        <div className="bug-catcher-end">
          <div className="bug-catcher-feedback">
            🎊 ¡Has terminado todos los niveles!
          </div>
          <button className="bug-catcher-button" onClick={() => window.location.href = `/modules/${moduleid}`}>
            Volver al Menú Principal
          </button>
        </div>
      )}
    </div>
  );
};

export default BugCatcherMultiLevel;
