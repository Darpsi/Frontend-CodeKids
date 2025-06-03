import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BarraLateral from "../Sidebar";
import "../../assets/styles/exams/quiz.css";

const Quiz = ({ titulo = "NIVEL", subtitulo = "¡Demuestra tu conocimiento!", questions = [], rutaVolver = "/select-level" }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(100);
  const [quizFinished, setQuizFinished] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [optionStyles, setOptionStyles] = useState({});

  const navigate = useNavigate();
  const correctAnswer = questions[currentQuestionIndex]?.correct;

  useEffect(() => {
    if (quizFinished || selectedOption || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 2 : 0));
    }, 100);

    return () => clearInterval(timer);
  }, [timeLeft, quizFinished, selectedOption]);

  useEffect(() => {
    if (!selectedOption && timeLeft > 0) return;

    const isCorrect = selectedOption === correctAnswer;
    const newCorrectCount = isCorrect ? correctCount + 1 : correctCount;

    setOptionStyles({
      [selectedOption]: isCorrect ? "correct" : "wrong",
      [correctAnswer]: "correct",
    });

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setSelectedOption(null);
        setCurrentQuestionIndex((prev) => prev + 1);
        setTimeLeft(100);
        setOptionStyles({});
      } else {
        setQuizFinished(true);
        setCorrectCount(newCorrectCount);
      }
    }, 1000);
  }, [selectedOption, timeLeft, quizFinished, currentQuestionIndex, correctAnswer, correctCount, questions.length]);

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
  };

  const handleBack = () => {
    navigate(rutaVolver);
  };

  if (quizFinished) {
    const result = correctCount / questions.length >= 0.6 ? "ganado" : "perdido";
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