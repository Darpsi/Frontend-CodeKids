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
    "moduleId": 7,
    "preguntas": [
      {
        "texto": "¿Qué es una clase en programación orientada a objetos?",
        "opciones": [
          "Un conjunto de instrucciones que realiza una tarea",
          "Un plano o molde para crear objetos",
          "Un tipo de dato como texto o número",
          "Una función para modificar datos"
        ],
        "correcta": 1
      },
      {
        "texto": "¿Qué es un constructor en una clase?",
        "opciones": [
          "Una función especial que inicializa los objetos",
          "Una forma de eliminar atributos de un objeto",
          "Una variable global para almacenar datos",
          "Un bucle que recorre una lista"
        ],
        "correcta": 0
      },
      {
        "texto": "¿Cuál es la palabra clave usada para definir una clase en Python?",
        "opciones": [
          "object",
          "define",
          "class",
          "create"
        ],
        "correcta": 2
      },
      {
        "texto": "¿Cómo se crea un objeto a partir de una clase llamada Perro?",
        "opciones": [
          "Perro = objeto()",
          "mi_perro = Perro()",
          "crear Perro()",
          "Perro.crear()"
        ],
        "correcta": 1
      },
      {
        "texto": "¿Qué hace el método __init__ en una clase?",
        "opciones": [
          "Define el comportamiento por defecto de un objeto",
          "Define los atributos y valores iniciales del objeto",
          "Imprime información del objeto",
          "Elimina un objeto existente"
        ],
        "correcta": 1
      },
      {
        "texto": "¿Cómo se accede al atributo nombre de un objeto mi_perro?",
        "opciones": [
          "mi_perro.nombre",
          "mi_perro[nombre]",
          "mi_perro('nombre')",
          "mi_perro->nombre"
        ],
        "correcta": 0
      },
      {
        "texto": "¿Cómo se llama un método ladrar() de un objeto mi_perro?",
        "opciones": [
          "mi_perro:ladrar()",
          "mi_perro.ladrar()",
          "ladrar(mi_perro)",
          "mi_perro->ladrar()"
        ],
        "correcta": 1
      },
      {
        "texto": "¿Qué son los atributos de un objeto?",
        "opciones": [
          "Las funciones que puede realizar",
          "Los valores o características que tiene",
          "El tipo de dato del objeto",
          "El nombre de la clase a la que pertenece"
        ],
        "correcta": 1
      },
      {
        "texto": "¿Qué son los métodos de un objeto?",
        "opciones": [
          "Las variables locales de una función",
          "Los nombres de cada atributo",
          "Las acciones o comportamientos del objeto",
          "El tipo de datos usado por los atributos"
        ],
        "correcta": 2
      },
      {
        "texto": "¿Qué representa un objeto en POO?",
        "opciones": [
          "Un tipo de dato",
          "Una instancia concreta de una clase",
          "Una lista de atributos",
          "Un conjunto de instrucciones"
        ],
        "correcta": 1
      }
    ]
  },
  {
    "moduleId": 8,
    "preguntas": [
      {
        "texto": "¿Qué es la herencia en programación orientada a objetos?",
        "opciones": [
          "Permite que una clase hija obtenga atributos y métodos de una clase padre",
          "Oculta información en una clase",
          "Permite combinar objetos dentro de otros",
          "Permite que un objeto se comporte de forma diferente según el contexto"
        ],
        "correcta": 0
      },
      {
        "texto": "¿Cuál es el símbolo usado comúnmente para indicar un atributo privado en Python?",
        "opciones": [
          "_",
          "$",
          "@",
          "!"
        ],
        "correcta": 0
      },
      {
        "texto": "¿Qué es el polimorfismo?",
        "opciones": [
          "Permite que objetos de distintas clases usen el mismo nombre de método y hagan cosas distintas",
          "Permite combinar objetos dentro de otros",
          "Permite ocultar atributos y métodos",
          "Permite crear objetos desde clases"
        ],
        "correcta": 0
      },
      {
        "texto": "¿Qué es la composición en POO?",
        "opciones": [
          "Reutilizar código mediante clases padres e hijas",
          "Combinar varios objetos para formar uno más complejo",
          "Permitir comportamientos distintos según el contexto",
          "Ocultar información y proteger atributos"
        ],
        "correcta": 1
      },
      {
        "texto": "¿Cuál es un ejemplo de herencia?",
        "opciones": [
          "Una clase `Auto` que se convierte en `Barco`",
          "Una clase `Perro` que hereda de `Animal`",
          "Una clase que mezcla dos clases sin relación",
          "Una clase con muchos atributos"
        ],
        "correcta": 1
      },
      {
        "texto": "¿Qué permite hacer el encapsulamiento?",
        "opciones": [
          "Permite ocultar información dentro de una clase",
          "Permite reutilizar código mediante herencia",
          "Permite cambiar el tipo de dato de un atributo",
          "Permite crear nuevos objetos"
        ],
        "correcta": 0
      },
      {
        "texto": "Si tienes una clase `Perro` y `Gato`, ambas con un método `hablar()`, ¿qué permite que puedas llamarlo sin preocuparte de la clase?",
        "opciones": [
          "Herencia",
          "Encapsulamiento",
          "Polimorfismo",
          "Composición"
        ],
        "correcta": 2
      },
      {
        "texto": "¿Qué permite hacer la composición?",
        "opciones": [
          "Combinar varios objetos en uno solo, como un coche con un motor",
          "Reutilizar métodos de una clase padre",
          "Definir atributos ocultos",
          "Reescribir métodos de la clase padre"
        ],
        "correcta": 0
      },
      {
        "texto": "¿Qué significa que un objeto esté compuesto por otros?",
        "opciones": [
          "Que tiene métodos de la clase padre",
          "Que contiene otros objetos para realizar tareas",
          "Que tiene muchos atributos",
          "Que es polimórfico"
        ],
        "correcta": 1
      },
      {
        "texto": "¿Cuál es el beneficio del encapsulamiento?",
        "opciones": [
          "Combinar varios objetos dentro de uno",
          "Permitir comportamientos distintos según la clase",
          "Proteger datos y métodos del acceso externo",
          "Reutilizar código entre clases"
        ],
        "correcta": 2
      }
    ]
  },
];
