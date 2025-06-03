export const mazeLevels = {
  1: [
    {
      prompt: "Corrige la estructura condicional para que el código sea válido en Python.",
      steps: [
        {
          question: "if i > 0:",
          options: ["print('positivo')", "print 'positivo'"],
        },
        {
          question: "else:",
          options: ["print('negativo')", "print 'negativo'"],
        },
      ],
      correctPath: [0, 0],
    },
    {
      prompt: "Selecciona las líneas que completan correctamente un bucle for en Python.",
      steps: [
        {
          question: "for i in range(5):",
          options: ["print(i)", "console.log(i)"],
        },
        {
          question: "¿Cómo se cierra correctamente el bucle?",
          options: ["(con sangría)", "}"],
        },
      ],
      correctPath: [0, 0],
    },
  ],

  2: [
    {
      prompt: "Completa correctamente la definición de una función en Python.",
      steps: [
        {
          question: "def saludar(nombre):",
          options: ["return 'Hola ' + nombre", "return Hola nombre"],
        },
        {
          question: "¿Cómo termina correctamente la función?",
          options: ["(con sangría)", "fin función"],
        },
      ],
      correctPath: [0, 0],
    },
  ],

  4: [ 
    {
      prompt: "Completa la función lambda para que sume dos números.",
      steps: [
        {
          question: "suma = lambda x, y:",
          options: ["x + y", "return x + y"],
        },
        {
          question: "¿Cómo usas la función para sumar 3 + 4?",
          options: ["suma(3, 4)", "lambda(3, 4)"],
        },
      ],
      correctPath: [0, 0],
    },
    {
      prompt: "Selecciona la lambda que convierte un número a su cuadrado.",
      steps: [
        {
          question: "cuadrado =",
          options: ["lambda x: x**2", "lambda x x**2"],
        },
        {
          question: "¿Cuál es el resultado de cuadrado(5)?",
          options: ["25", "10"],
        },
      ],
      correctPath: [0, 0],
    },
  ],

  5: [ 
    {
      prompt: "Elige las líneas que agregan y ordenan elementos en una lista.",
      steps: [
        {
          question: "numeros = [3, 1, 4]",
          options: ["numeros.append(2)", "append.numeros(2)"],
        },
        {
          question: "¿Cómo se ordena la lista?",
          options: ["numeros.sort()", "sort(numeros)"],
        },
      ],
      correctPath: [0, 0],
    },
    {
      prompt: "Filtra los números mayores que 5 usando Python.",
      steps: [
        {
          question: "numeros = [3, 7, 1, 9]",
          options: ["filtrados = list(filter(lambda x: x > 5, numeros))", "filtrados = numeros > 5"],
        },
        {
          question: "¿Cuál es el resultado de filtrados?",
          options: ["[7, 9]", "[3, 7, 1, 9]"],
        },
      ],
      correctPath: [0, 0],
    },
  ],
  "6": [
    {
      prompt: "Elige las líneas para lanzar un error personalizado si el número es negativo.",
      steps: [
        {
          question: "n = -1\nif n < 0:",
          options: ["raise ValueError('No negativos')", "print('No negativos')"]
        },
        {
          question: "¿Qué hace raise correctamente?",
          options: ["Lanza un error con mensaje", "Imprime un mensaje"]
        }
      ],
      correctPath: [0, 0]
    },
    {
      prompt: "Completa el código para manejar un error personalizado con try-except.",
      steps: [
        {
          question: "try:\n    raise ValueError('Error')",
          options: ["except ValueError as e:\n    print(e)", "print('Error')"]
        },
        {
          question: "¿Qué imprime el except correcto?",
          options: ["Error", "Nada"]
        }
      ],
      correctPath: [0, 0]
    }
  ]
};

