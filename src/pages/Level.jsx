import Quiz from "../components/Quiz";

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
  return (
    <Quiz 
      titulo="NIVEL 0" 
      subtitulo="¡Demuestra lo que sabes!" 
      questions={questions} 
      rutaVolver="/select-level"
    />
  );
};

export default Level0;

