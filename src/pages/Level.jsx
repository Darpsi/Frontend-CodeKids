import React, { useState, useEffect } from "react";
import "../assets/styles/Level.css";
import BarraLateral from "../components/Barralateral";

const Level0 = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(100);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="container">
      <BarraLateral />
      <h1>NIVEL 0</h1>
      <h2>¡Demuestra lo que sabes!</h2>
      <div className="question-box">
        ¿Cuál de los siguientes es un lenguaje de programación?
      </div>
      <div className="option" onClick={() => handleOptionClick("Inglés")}>
        Inglés
      </div>
      <div className="option" onClick={() => handleOptionClick("Python")}>
        Python
      </div>
      <div className="option" onClick={() => handleOptionClick("Español")}>
        Español
      </div>
      <div className="option" onClick={() => handleOptionClick("Lenguaje HTML")}>
        Lenguaje HTML
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${timeLeft}%` }}></div>
      </div>
    </div>
  );
};

export default Level0;
