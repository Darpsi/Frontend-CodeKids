export const bugCatcherLevels = {
  "1": [
    {
      prompt: "Este código debería imprimir un texto, pero algo está mal.",
      buggyCode: `def saludar()\n    print("Texto de ejemplo")`,
      correctCode: `def saludar():\n    print("Texto de ejemplo")`,
    },
    {
      prompt: "Corrige la suma: debería imprimir 5.",
      buggyCode: `def suma():\n    print(2 + )`,
      correctCode: `def suma():\n    print(2 + 3)`,
    },
    {
      prompt: "Algo falta en este condicional.",
      buggyCode: `if x > 10\n    print("Mayor que 10")`,
      correctCode: `if x > 10:\n    print("Mayor que 10")`,
    },
  ],

  "2": [
    {
      prompt: "Falta un bloque en esta función.",
      buggyCode: `def despedida():\nprint("Línea de salida")`,
      correctCode: `def despedida():\n    print("Línea de salida")`,
    },
    {
      prompt: "La variable no está definida.",
      buggyCode: `print(mensaje)`,
      correctCode: `mensaje = "Texto"\nprint(mensaje)`,
    },
  ],

  "4": [ 
    {
      prompt: "La variable no está disponible dentro de la función.",
      buggyCode: `x = 10\n\ndef mostrar():\n    print(x)\n\nmostrar()`,
      correctCode: `x = 10\n\ndef mostrar():\n    print(x)\n\nmostrar()  # válido, accede a variable global`,
    },
    {
      prompt: "La función intenta modificar una variable global sin declararla.",
      buggyCode: `contador = 0\n\ndef aumentar():\n    contador += 1\n    print(contador)\n\naumentar()`,
      correctCode: `contador = 0\n\ndef aumentar():\n    global contador\n    contador += 1\n    print(contador)\n\naumentar()`,
    },
  ],

  "5": [ 
    {
      prompt: "Falta una coma entre elementos del diccionario.",
      buggyCode: `datos = {\n  "nombre": "A", \n  "edad": 10\n  "activo": True\n}`,
      correctCode: `datos = {\n  "nombre": "A", \n  "edad": 10,\n  "activo": True\n}`,
    },
    {
      prompt: "Se intenta acceder con una clave que no existe.",
      buggyCode: `persona = {"id": 5}\nprint(persona["nombre"])`,
      correctCode: `persona = {"id": 5, "nombre": "X"}\nprint(persona["nombre"])`,
    },
  ],
};
