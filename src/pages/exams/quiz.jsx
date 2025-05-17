import Quiz from "../../components/exams/Quiz";
import { quizData } from "../../data/quiz.js";
import { useParams } from "react-router-dom";

const Level0 = () => {
  const { moduleid } = useParams();
  const questions = quizData[moduleid] || [];
  if (!questions) {
    return <div>⚠️ No se encontraron preguntas para este ID.</div>;
  }
  return (
    <Quiz 
      titulo="QUIZ DE INICIO" 
      subtitulo="¡Demuestra lo que aprendiste!" 
      questions={questions} 
      rutaVolver= {`/modules/${moduleid}`}
    />
  );
};

export default Level0;

