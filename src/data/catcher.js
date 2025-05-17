export const bugCatcherLevels = {
  "1": [
    {
      prompt: "Este código debería saludar, pero algo está mal.",
      buggyCode: `function saludo() {\n  console.log("Hola mundo"\n}`,
      correctCode: `function saludo() {\n  console.log("Hola mundo");\n}`,
    },
    {
      prompt: "Corrige la suma: debería imprimir 5.",
      buggyCode: `function suma() {\n  console.log(2 + );\n}`,
      correctCode: `function suma() {\n  console.log(2 + 3);\n}`,
    },
    {
      prompt: "Algo falta en este condicional.",
      buggyCode: `if (x > 10 {\n  console.log("Mayor que 10");\n}`,
      correctCode: `if (x > 10) {\n  console.log("Mayor que 10");\n}`,
    },
  ],
  "2": [
    {
      prompt: "Falta una llave en esta función.",
      buggyCode: `function despedida() \n  console.log("Adiós");\n}`,
      correctCode: `function despedida() {\n  console.log("Adiós");\n}`,
    },
    {
      prompt: "La variable no está definida.",
      buggyCode: `console.log(mensaje);`,
      correctCode: `let mensaje = "Hola";\nconsole.log(mensaje);`,
    },
  ],
};
