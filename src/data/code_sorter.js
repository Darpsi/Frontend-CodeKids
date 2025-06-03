export const sorterLevels = {
  "1": [
    {
      prompt: "Nivel 1: Ordena el código para que la función 'saludar' funcione correctamente.",
      correctOrder: [
        "def saludar():",
        "    print('Hola mundo')",
        "saludar()",
      ],
    },
    {
      prompt: "Nivel 2: Ordena el código para sumar dos números y mostrar el resultado.",
      correctOrder: [
        "def sumar(a, b):",
        "    return a + b",
        "print(sumar(5, 7))",
      ],
    },
    {
      prompt: "Nivel 3: Ordena el código para verificar si un número es par.",
      correctOrder: [
        "def es_par(n):",
        "    return n % 2 == 0",
        "print(es_par(6))",
      ],
    },
  ],

  "2": [
    {
      prompt: "Nivel 1: Ordena el código para declarar una variable y mostrar su valor.",
      correctOrder: [
        "mensaje = 'Texto de ejemplo'",
        "print(mensaje)",
      ],
    },
    {
      prompt: "Nivel 2: Ordena el código para crear una lista y recorrerla.",
      correctOrder: [
        "numeros = [1, 2, 3]",
        "for n in numeros:",
        "    print(n)",
      ],
    },
    {
      prompt: "Nivel 3: Ordena el código para filtrar números pares de una lista.",
      correctOrder: [
        "nums = [1, 2, 3, 4, 5]",
        "pares = list(filter(lambda n: n % 2 == 0, nums))",
        "print(pares)",
      ],
    },
  ],

  "4": [
    {
      prompt: "Nivel 1: Ordena el código para calcular el factorial de un número.",
      correctOrder: [
        "def factorial(n):",
        "    if n == 0:",
        "        return 1",
        "    else:",
        "        return n * factorial(n - 1)",
        "print(factorial(5))",
      ],
    },
    {
      prompt: "Nivel 2: Ordena el código para contar hacia atrás desde un número usando recursión.",
      correctOrder: [
        "def cuenta_regresiva(n):",
        "    if n == 0:",
        "        return",
        "    print(n)",
        "    cuenta_regresiva(n - 1)",
        "cuenta_regresiva(3)",
      ],
    },
  ],

  "5": [ 
    {
      prompt: "Nivel 1: Ordena el código para leer un número del usuario e imprimirlo al doble.",
      correctOrder: [
        "numero = int(input())",
        "print(numero * 2)",
      ],
    },
    {
      prompt: "Nivel 2: Ordena el código para leer contenido de un archivo.",
      correctOrder: [
        "with open('datos.txt', 'r') as archivo:",
        "    contenido = archivo.read()",
        "    print(contenido)",
      ],
    },
  ],
  "6": [
    {
      prompt: "Nivel 1: Ordena el código para manejar un error al dividir por cero.",
      correctOrder: [
        "try:",
        "    x = 10 / 0",
        "except ZeroDivisionError:",
        "    print('No dividas por cero')"
      ]
    },
    {
      prompt: "Nivel 2: Ordena el código para manejar un error al convertir texto a número.",
      correctOrder: [
        "try:",
        "    n = int('abc')",
        "except ValueError:",
        "    print('Eso no es un número')"
      ]
    },
    {
      prompt: "Nivel 3: Ordena el código para manejar dos tipos de errores.",
      correctOrder: [
        "try:",
        "    x = y / 0",
        "except ZeroDivisionError:",
        "    print('No dividas por cero')",
        "except NameError:",
        "    print('Variable no definida')"
      ]
    }
  ]
};


