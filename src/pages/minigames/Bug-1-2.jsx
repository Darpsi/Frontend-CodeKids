import React from "react";
import BugCatcher from "../../components/minigames/Bug-catcher";

const levels = [
  {
    prompt: "Este código debería saludar, pero algo está mal.",
    buggyCode: `function saludo() {
  console.log("Hola mundo"
}`,
    correctCode: `function saludo() {
  console.log("Hola mundo");
}`,
  },
  {
    prompt: "Corrige la suma: debería imprimir 5.",
    buggyCode: `function suma() {
  console.log(2 + );
}`,
    correctCode: `function suma() {
  console.log(2 + 3);
}`,
  },
  {
    prompt: "Algo falta en este condicional.",
    buggyCode: `if (x > 10 {
  console.log("Mayor que 10");
}`,
    correctCode: `if (x > 10) {
  console.log("Mayor que 10");
}`,
  },
];

const App = () => {
  return (
    <div>
      <BugCatcher levels={levels} />
    </div>
  );
};

export default App;
