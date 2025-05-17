export const sorterLevels = {
  "1": [
    {
      prompt: "Nivel 1: Ordena el código para que la función 'saludar' funcione correctamente.",
      correctOrder: [
        "function saludar() {",
        '  console.log("Hola mundo");',
        "}",
        "saludar();",
      ],
    },
    {
      prompt: "Nivel 2: Ordena el código para sumar dos números y mostrar el resultado.",
      correctOrder: [
        "function sumar(a, b) {",
        "  return a + b;",
        "}",
        "console.log(sumar(5, 7));",
      ],
    },
    {
      prompt: "Nivel 3: Ordena el código para verificar si un número es par.",
      correctOrder: [
        "function esPar(n) {",
        "  return n % 2 === 0;",
        "}",
        "console.log(esPar(6));",
      ],
    },
  ],
  "2": [
    {
      prompt: "Nivel 1: Ordena el código para declarar una variable y mostrar su valor.",
      correctOrder: [
        "let mensaje = 'Hola';",
        "console.log(mensaje);",
      ],
    },
    {
      prompt: "Nivel 2: Ordena el código para crear un array y recorrerlo.",
      correctOrder: [
        "let numeros = [1, 2, 3];",
        "numeros.forEach(n => console.log(n));",
      ],
    },
    {
      prompt: "Nivel 3: Ordena el código para filtrar números pares de un array.",
      correctOrder: [
        "let nums = [1, 2, 3, 4, 5];",
        "let pares = nums.filter(n => n % 2 === 0);",
        "console.log(pares);",
      ],
    },
  ]
};

