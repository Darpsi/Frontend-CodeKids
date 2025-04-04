import React, { useState, useEffect } from "react";
import "../assets/styles/Level.css";
import BarraLateral from "../components/Barralateral";

const questions = [
  {
    question: "¿Cuál de los siguientes es un lenguaje de programación?",
    options: ["Inglés", "Python", "Español", "Lenguaje HTML"],
    correct: "Python",
  },
  {
    question: "¿Cuál de estos programas se usa para escribir código?",
    options: ["Paint", "Word", "Scratch", "Excel"],
    correct: "Scratch",
  },
  {
    question: "¿Qué puedes crear con programación?",
    options: ["Videojuegos", "Aplicaciones", "Páginas web", "Todas"],
    correct: "Todas",
  },
];

const Level0 = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(100);
  const [timeUp, setTimeUp] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const correctAnswer = questions[currentQuestionIndex].correct;
  const [optionStyles, setOptionStyles] = useState({});

  useEffect(() => {
    if (!quizFinished) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev > 0) return prev - 2;
          setTimeUp(true);
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
      setOptionStyles({
        [selectedOption]: selectedOption === correctAnswer ? "correct" : "wrong", [correctAnswer]: "correct",
      });
      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setSelectedOption(null);
          setTimeUp(false);
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
          setTimeLeft(100);
          setOptionStyles({});
        } else {
          setQuizFinished(true);
        }
      }, 1000);
    }
  }, [timeLeft, quizFinished, currentQuestionIndex, selectedOption, correctAnswer]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  if (quizFinished) {
    return (
      <div className="container">
        <h1>NIVEL 0</h1>
        <h2>¡Has completado el cuestionario!</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <BarraLateral />
      <h1>NIVEL 0</h1>
      <h2>¡Demuestra lo que sabes!</h2>
      <div className="question-box">{questions[currentQuestionIndex].question}</div>
      {questions[currentQuestionIndex].options.map((option) => (
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

export default Level0;


