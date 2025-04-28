import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BarraLateral from "./Sidebar";
import "../assets/styles/Level.css";

const Quiz = ({ titulo = "NIVEL", subtitulo = "¡Demuestra tu conocimiento!", questions = [], rutaVolver = "/select-level" }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(100);
  const [quizFinished, setQuizFinished] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [optionStyles, setOptionStyles] = useState({});
  const [result, setResult] = useState("");

  const navigate = useNavigate();
  const correctAnswer = questions[currentQuestionIndex]?.correct;

  useEffect(() => {
    if (!quizFinished) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev > 0) return prev - 2;
          return 0;
        });
      }, 100);

      return () => clearInterval(timer);
    }
  }, [currentQuestionIndex, quizFinished]);

  useEffect(() => {
    if (!quizFinished && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 2 : 0));
      }, 100);

      setOptionStyles({
        [selectedOption]: "selected",
      });

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      const isCorrect = selectedOption === correctAnswer;
      if (isCorrect) setCorrectCount((prev) => prev + 1);

      setOptionStyles({
        [selectedOption]: isCorrect ? "correct" : "wrong",
        [correctAnswer]: "correct",
      });

      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setSelectedOption(null);
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
          setTimeLeft(100);
          setOptionStyles({});
        } else {
          setQuizFinished(true);
          setResult(isCorrect || correctCount >= 2 ? "ganado" : "perdido");
        }
      }, 1000);
    }
  }, [timeLeft, quizFinished, currentQuestionIndex, selectedOption, correctAnswer, correctCount, questions.length]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setTimeLeft(100);
    setQuizFinished(false);
    setCorrectCount(0);
    setOptionStyles({});
    setResult("");
  };

  const handleBack = () => {
    navigate(rutaVolver);
  };

  if (quizFinished) {
    return (
      <div className="app-container">
        <BarraLateral />
        <h1>{titulo}</h1>
        {result === "ganado" ? (
          <h2>✅ ¡Has completado el cuestionario con éxito!</h2>
        ) : (
          <h2>❌ No lograste responder suficientes preguntas. Intenta de nuevo.</h2>
        )}
        <div>
          <button onClick={handleRetry} className="boton-final">🔁 Reintentar</button>
          <button onClick={handleBack} className="boton-final" style={{ marginLeft: "1rem" }}>
            🔙 Volver
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <BarraLateral />
      <h1>{titulo}</h1>
      <h2>{subtitulo}</h2>
      <div className="question-box">{questions[currentQuestionIndex]?.question}</div>
      {questions[currentQuestionIndex]?.options.map((option) => (
        <div
          key={option}
          className={`option ${optionStyles[option] || ""}`}
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </div>
      ))}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${timeLeft}%` }}></div>
      </div>
    </div>
  );
};

export default Quiz;