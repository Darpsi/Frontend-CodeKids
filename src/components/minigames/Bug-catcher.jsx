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
    if (!bug) return;

    let direction = 1;
    let position = 0; // Initial position will be set based on media query
    let minPosition, maxPosition, speed;

    // Define movement parameters based on media query
    const setMovementParameters = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        // 768px: caterpillar width 120px, left 45%, container ~90% of viewport
        position = window.innerWidth * 0.45; // Start at 45% of viewport
        minPosition = window.innerWidth * 0.05; // 5% from left
        maxPosition = window.innerWidth * 0.85 - 120; // 85% minus bug width
        speed = 1.5; // Slower speed for smaller screen
      } else if (window.matchMedia("(max-width: 992px)").matches) {
        // 992px: caterpillar width 160px, left ~15% (adjusted for centering)
        position = window.innerWidth * 0.15;
        minPosition = window.innerWidth * 0.10;
        maxPosition = window.innerWidth * 0.80 - 160;
        speed = 1.8;
      } else if (window.matchMedia("(max-width: 1200px)").matches) {
        // 1200px: caterpillar width 180px, left 20%
        position = window.innerWidth * 0.20;
        minPosition = window.innerWidth * 0.15;
        maxPosition = window.innerWidth * 0.75 - 180;
        speed = 2.0;
      } else {
        // Default: caterpillar width 200px, left 50%
        position = 251; // Original starting point
        minPosition = 250;
        maxPosition = 850;
        speed = 2.0;
      }
    };

    setMovementParameters();

    const moveBug = () => {
      position += direction * speed;
      if (position >= maxPosition || position <= minPosition) {
        direction *= -1;
        bug.style.transform = direction === -1 ? "scaleX(1)" : "scaleX(-1)";
      }
      bug.style.left = `${position}px`;
      requestAnimationFrame(moveBug);
    };

    moveBug();

    // Update movement parameters on window resize
    const handleResize = () => {
      setMovementParameters();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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