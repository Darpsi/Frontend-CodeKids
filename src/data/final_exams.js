export const examQuestions = [
  {
    moduleId: 1,
    preguntas: [
      {
        texto: "¿Qué es la programación?",
        opciones: [
          "Jugar con la consola",
          "Escribir instrucciones para una computadora",
          "Hablar otro idioma",
          "Crear música"
        ],
        correcta: 1,
      },
      {
        texto: "¿Para qué sirve programar?",
        opciones: [
          "Para enseñar a las computadoras qué hacer",
          "Para contar historias",
          "Para hacer ejercicio",
          "Para jugar videojuegos"
        ],
        correcta: 0,
      },
      {
        texto: "¿Cuál de estos NO es un lenguaje de programación?",
        opciones: ["Python", "Scratch", "Español", "Java"],
        correcta: 2,
      },
      {
        texto: "¿Qué es una secuencia en programación?",
        opciones: [
          "Un juego de cartas",
          "Un conjunto de colores",
          "Un orden de instrucciones",
          "Una canción"
        ],
        correcta: 2,
      },
      {
        texto: "¿Qué pasaría si cambias el orden de una secuencia?",
        opciones: [
          "Todo funcionará igual",
          "La computadora se adaptará sola",
          "Puede que no funcione correctamente",
          "No pasa nada"
        ],
        correcta: 2,
      },
      {
        texto: "¿Cuál es la forma correcta de una secuencia para preparar té?",
        opciones: [
          "Poner el té, luego hervir el agua",
          "Hervir agua, poner té, esperar",
          "Comer primero, luego hacer té",
          "Dormir y después preparar"
        ],
        correcta: 1,
      },
      {
        texto: "¿Qué es una condicional en programación?",
        opciones: [
          "Una fórmula matemática",
          "Una instrucción que se repite",
          "Una decisión que depende de algo",
          "Una función que pinta"
        ],
        correcta: 2,
      },
      {
        texto: "¿Cuál de estas frases representa una condicional?",
        opciones: [
          "Repite 5 veces",
          "Si está lloviendo, usa paraguas",
          "Haz clic para jugar",
          "Muévete hacia adelante"
        ],
        correcta: 1,
      },
      {
        texto: "¿Qué hace un bucle o ciclo?",
        opciones: [
          "Ejecuta una acción solo una vez",
          "Detiene el programa",
          "Repite una acción varias veces",
          "Cambia el color de fondo"
        ],
        correcta: 2,
      },
      {
        texto: "¿Cuál instrucción representa un bucle?",
        opciones: [
          "Caminar",
          "Si tienes hambre, come",
          "Repite 3 veces: saltar",
          "Saluda a un amigo"
        ],
        correcta: 2,
      }
    ]
  },
  {
    moduleId: 2,
    preguntas: [
      {
        texto: "¿Qué es una variable en programación?",
        opciones: [
          "Una caja mágica donde puedes guardar información",
          "Un dibujo en la pantalla",
          "Una instrucción secreta",
          "Un número misterioso"
        ],
        correcta: 0,
      },
      {
        texto: "¿Cómo se crea una variable en Python?",
        opciones: [
          "nombre - valor",
          "variable : valor",
          "nombre = valor",
          "crear variable valor"
        ],
        correcta: 2,
      },
      {
        texto: "¿Cuál de estos nombres de variables es válido?",
        opciones: [
          "1nombre",
          "nombre completo",
          "nombre_completo",
          "@nombre"
        ],
        correcta: 2,
      },
      {
        texto: "¿Qué hace este código?\n\nedad = 8\nedad = 10",
        opciones: [
          "Borra la variable edad",
          "Cambia el valor de la variable edad a 10",
          "Crea dos variables diferentes",
          "Da un error"
        ],
        correcta: 1,
      },
      {
        texto: "¿Qué significa que una variable sea 'dinámica' en Python?",
        opciones: [
          "Que cambia sola con el tiempo",
          "Que puede tener diferentes tipos de datos",
          "Que siempre tiene texto",
          "Que se borra después de usarla"
        ],
        correcta: 1,
      },
      {
        texto: "¿Cuál es el resultado de este código?\n\nnombre = 'Alexis'\nmensaje = 'Hola ' + nombre",
        opciones: [
          "Hola Alexis",
          "Hola + Alexis",
          "nombre + mensaje",
          "Error"
        ],
        correcta: 0,
      },
      {
        texto: "¿Qué operador se usa para multiplicar en Python?",
        opciones: ["x", "*", "/", "^"],
        correcta: 1,
      },
      {
        texto: "¿Qué operador se usa para saber el resto de una división?",
        opciones: ["%", "#", "&", "/"],
        correcta: 0,
      },
      {
        texto: "¿Qué muestra este código?\n\nx = 5\nprint(x > 3)",
        opciones: ["True", "False", "Error", "x > 3"],
        correcta: 0,
      },
      {
        texto: "¿Para qué sirven los comentarios en el código?",
        opciones: [
          "Para decorar el código",
          "Para que la computadora los lea",
          "Para que las personas entiendan mejor el código",
          "Para que el programa funcione más rápido"
        ],
        correcta: 2,
      }
    ]
  },
  {
  moduleId: 3,
    preguntas: [
      {
        texto: "¿Qué es el control de flujo en programación?",
        opciones: [
          "Un tipo de variable",
          "Decidir qué hacer según condiciones",
          "Un bucle que nunca termina",
          "Un mensaje de error"
        ],
        correcta: 1
      },
      {
        texto: "¿Qué palabra usas en Python para hacer una decisión?",
        opciones: [
          "while",
          "for",
          "if",
          "return"
        ],
        correcta: 2
      },
      {
        texto: "¿Qué hace este código?\n\nif x > 5:\n    print('Mayor')\nelse:\n    print('Menor')",
        opciones: [
          "Imprime siempre 'Mayor'",
          "Imprime 'Mayor' o 'Menor' según x",
          "Da un error",
          "No imprime nada"
        ],
        correcta: 1
      },
      {
        texto: "¿Qué es un bucle for en Python?",
        opciones: [
          "Una condición que decide algo",
          "Una repetición de acciones",
          "Una función anónima",
          "Un comentario"
        ],
        correcta: 1
      },
      {
        texto: "¿Qué hace este código?\n\nfor i in range(3):\n    print(i)",
        opciones: [
          "Imprime 0, 1, 2",
          "Imprime 1, 2, 3",
          "Imprime 3",
          "Da un error"
        ],
        correcta: 0
      },
      {
        texto: "¿Qué hace un bucle while?",
        opciones: [
          "Repite mientras una condición sea verdadera",
          "Para el programa",
          "Solo ejecuta una vez",
          "Crea una variable"
        ],
        correcta: 0
      },
      {
        texto: "¿Qué imprime este código?\n\nx = 1\nwhile x < 4:\n    print(x)\n    x += 1",
        opciones: [
          "1, 2, 3",
          "4",
          "1, 2, 3, 4",
          "Nada"
        ],
        correcta: 0
      },
      {
        texto: "¿Qué operador lógico significa 'y'?",
        opciones: [
          "OR",
          "NOT",
          "AND",
          "IF"
        ],
        correcta: 2
      },
      {
        texto: "¿Qué hace este código?\n\nif x > 5 and y < 10:\n    print('Ok')",
        opciones: [
          "Imprime 'Ok' si x es mayor a 5 o y es menor a 10",
          "Imprime 'Ok' si ambas condiciones son verdaderas",
          "Imprime 'Ok' siempre",
          "Da un error"
        ],
        correcta: 1
      },
      {
        texto: "¿Qué operador cambia verdadero a falso?",
        opciones: [
          "AND",
          "OR",
          "NOT",
          "ELSE"
        ],
        correcta: 2
      }
    ]
  },
  {
  moduleId: 4,
  preguntas: [
    {
      texto: "¿Qué es una función en programación?",
      opciones: [
        "Un tipo de dato",
        "Una forma de repetir código sin bucles",
        "Una parte del código que se puede reutilizar",
        "Un mensaje de error"
      ],
      correcta: 2,
    },
    {
      texto: "¿Cómo se define una función en Python?",
      opciones: [
        "function mi_funcion()",
        "crear funcion mi_funcion",
        "def mi_funcion():",
        "func mi_funcion:"
      ],
      correcta: 2,
    },
    {
      texto: "¿Qué significa el 'ámbito' de una variable?",
      opciones: [
        "El tipo de dato que tiene",
        "El valor máximo que puede tener",
        "Dónde puede ser usada una variable en el código",
        "Cómo se imprime una variable"
      ],
      correcta: 2,
    },
    {
      texto: "¿Qué pasa si defines una variable dentro de una función?",
      opciones: [
        "Es global automáticamente",
        "Solo existe dentro de esa función",
        "Es visible en todo el programa",
        "No se puede definir ahí"
      ],
      correcta: 1,
    },
    {
      texto: "¿Qué es una función recursiva?",
      opciones: [
        "Una función que se llama a sí misma",
        "Una función que nunca termina",
        "Una función que se ejecuta sola al inicio",
        "Una función que repite el código de otra"
      ],
      correcta: 0,
    },
    {
      texto: "¿Cuál de estas funciones es recursiva?",
      opciones: [
        "def sumar():\n  return 2 + 2",
        "def contar():\n  contar()",
        "def saludo():\n  print('Hola')",
        "def resta():\n  return a - b"
      ],
      correcta: 1,
    },
    {
      texto: "¿Qué es una función anónima en Python?",
      opciones: [
        "Una función sin retorno",
        "Una función que no imprime nada",
        "Una función sin nombre definida con lambda",
        "Una función que se llama automáticamente"
      ],
      correcta: 2,
    },
    {
      texto: "¿Cuál es la forma correcta de crear una función anónima?",
      opciones: [
        "lambda x: x * 2",
        "def (x): return x * 2",
        "crear funcion x * 2",
        "function(x) = x * 2"
      ],
      correcta: 0,
    },
    {
      texto: "¿Para qué sirve 'return' dentro de una función?",
      opciones: [
        "Para mostrar un valor por pantalla",
        "Para terminar la ejecución del programa",
        "Para devolver un valor al llamar la función",
        "Para repetir el código"
      ],
      correcta: 2,
    },
    {
      texto: "¿Qué hace este código?\n\ndef doble(n):\n  return n * 2",
      opciones: [
        "Define una variable",
        "Muestra el doble en pantalla",
        "Define una función que duplica un número",
        "Crea un ciclo infinito"
      ],
      correcta: 2,
    }
  ]
},
{
  moduleId: 5,
  preguntas: [
    {
      texto: "¿Qué es una lista en Python?",
      opciones: [
        "Una función especial",
        "Un tipo de dato que almacena varios elementos",
        "Un número decimal",
        "Un texto en mayúsculas"
      ],
      correcta: 1,
    },
    {
      texto: "¿Cómo se accede al primer elemento de una lista llamada datos?",
      opciones: [
        "datos(1)",
        "datos[1]",
        "datos[0]",
        "datos{0}"
      ],
      correcta: 2,
    },
    {
      texto: "¿Qué es un diccionario en Python?",
      opciones: [
        "Una lista de textos",
        "Un tipo de dato que guarda pares clave-valor",
        "Una función para ordenar listas",
        "Un conjunto de variables globales"
      ],
      correcta: 1,
    },
    {
      texto: "¿Cómo accedes al valor de la clave 'nombre' en un diccionario llamado persona?",
      opciones: [
        "persona.nombre",
        "persona[nombre]",
        "persona['nombre']",
        "persona->nombre"
      ],
      correcta: 2,
    },
    {
      texto: "¿Cuál es la forma correcta de leer texto del usuario en Python?",
      opciones: [
        "leer()",
        "input()",
        "scanf()",
        "console.read()"
      ],
      correcta: 1,
    },
    {
      texto: "¿Qué hace esta línea?\n\nnumero = int(input())",
      opciones: [
        "Lee un número entero ingresado por el usuario",
        "Convierte texto en decimal",
        "Imprime un número",
        "Lee un archivo"
      ],
      correcta: 0,
    },
    {
      texto: "¿Cuál de estas opciones ordena una lista llamada datos?",
      opciones: [
        "ordenar(datos)",
        "datos.sort()",
        "datos.ordenar()",
        "sort(datos)"
      ],
      correcta: 1,
    },
    {
      texto: "¿Cómo puedes filtrar los números pares de una lista llamada numeros?",
      opciones: [
        "pares = [n for n in numeros if n % 2 == 0]",
        "pares = numeros.todos(n % 2 == 0)",
        "pares = numeros.filtrar(par)",
        "pares = numeros.2n"
      ],
      correcta: 0,
    },
    {
      texto: "¿Qué hace este código?\n\ndatos = [1, 2, 3]\ndatos.append(4)",
      opciones: [
        "Elimina el último número",
        "Agrega el número 4 a la lista",
        "Convierte la lista en cadena",
        "Reemplaza el primer número"
      ],
      correcta: 1,
    },
    {
      texto: "¿Qué función se usa para conocer la cantidad de elementos en una lista?",
      opciones: [
        "size()",
        "length()",
        "count()",
        "len()"
      ],
      correcta: 3,
    }
  ]
  },
  {
    moduleId: 6,
    preguntas: [
      {
        texto: "¿Qué es un NameError en Python?",
        opciones: [
          "Dividir por cero",
          "Usar una variable que no existe",
          "Olvidar un signo de dos puntos",
          "Sumar texto y números"
        ],
        correcta: 1
      },
      {
        texto: "¿Qué causa un ZeroDivisionError?",
        opciones: [
          "Escribir mal una variable",
          "Intentar dividir por cero",
          "Usar un bucle infinito",
          "No cerrar un paréntesis"
        ],
        correcta: 1
      },
      {
        texto: "¿Qué es un SyntaxError?",
        opciones: [
          "Un error al escribir mal el código",
          "Un error al usar una variable",
          "Un error al dividir números",
          "Un error al crear funciones"
        ],
        correcta: 0
      },
      {
        texto: "¿Cómo puedes evitar errores en tu código?",
        opciones: [
          "Escribir rápido",
          "Usar nombres claros y revisar el código",
          "Ignorar los errores",
          "Usar siempre print()"
        ],
        correcta: 1
      },
      {
        texto: "¿Qué hace print() al depurar código?",
        opciones: [
          "Corrige errores",
          "Muestra valores de variables",
          "Crea nuevas variables",
          "Para el programa"
        ],
        correcta: 1
      },
      {
        texto: "¿Qué hace este código?\n\nx = 5\nprint(x)",
        opciones: [
          "Imprime 5",
          "Da un error",
          "Imprime 'x'",
          "No hace nada"
        ],
        correcta: 0
      },
      {
        texto: "¿Qué hace un bloque try-except?",
        opciones: [
          "Repite un código",
          "Maneja errores sin detener el programa",
          "Crea variables",
          "Imprime mensajes"
        ],
        correcta: 1
      },
      {
        texto: "¿Qué imprime este código?\n\ntry:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    print('Error')",
        opciones: [
          "10",
          "Error",
          "Nada",
          "0"
        ],
        correcta: 1
      },
      {
        texto: "¿Qué hace raise en Python?",
        opciones: [
          "Crea una variable",
          "Lanza un error personalizado",
          "Imprime un mensaje",
          "Para un bucle"
        ],
        correcta: 1
      },
      {
        texto: "¿Qué imprime este código?\n\ntry:\n    raise ValueError('Mal')\nexcept ValueError as e:\n    print(e)",
        opciones: [
          "Mal",
          "ValueError",
          "Nada",
          "Error"
        ],
        correcta: 0
      }
    ]
  }
];