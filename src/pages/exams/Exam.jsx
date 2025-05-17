import React from "react";
import { useParams } from "react-router-dom";
import Examen from "../../components/exams/Examen";
import { examQuestions } from "../../data/final_exams";

const Exam = () => {
  const { moduleId } = useParams();
  const modId = parseInt(moduleId);

  const modulo = examQuestions.find(m => m.moduleId === modId);
  const preguntas = modulo?.preguntas;

  if (!preguntas) {
    return <div>Aún no hay preguntas para este exámen.</div>;
  }

  return <Examen preguntas={preguntas} />;
};

export default Exam;
