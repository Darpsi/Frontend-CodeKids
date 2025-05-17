import codekids_logo from "../assets/images/codekids_logo_n.png";
import intro_video from "../assets/videos/vid_intro_codekids.mp4"
import control from "../assets/images/levels/game_control.jpg"
import program from "../assets/images/levels/program.png"
import puzzle from "../assets/images/levels/puzzle.jpg"
import detective from "../assets/images/levels/detective.avif"
import chef from "../assets/images/levels/chef.avif"
import paths from "../assets/images/levels/paths.webp"
import compuzzle from "../assets/images/levels/compuzzle.webp"
import path from "../assets/images/levels/path.webp"
import music from "../assets/images/levels/music.jpg"
import kitchen from "../assets/images/levels/kitchen.jpg"
import backpack from "../assets/images/levels/backpack.avif"
import box_var from "../assets/images/levels/box_var.webp"

// imagenes modulo2
import variable from "../assets/images/levels/level2/var.png"
import var_change from "../assets/images/levels/level2/var_change.png"
import var_name from "../assets/images/levels/level2/var_name.png"
import var_rules from "../assets/images/levels/level2/var_rules.png"
import math_ops from "../assets/images/levels/level2/math_ops.png"
import var_dynamic from "../assets/images/levels/level2/var_dynamic.png"
import var_concat from "../assets/images/levels/level2/var_concat.png"
import order_ops from "../assets/images/levels/level2/order_ops.png"
import modulo from "../assets/images/levels/level2/modulo.png"
import compare_ops from "../assets/images/levels/level2/compare_ops.png"
import bool_compare from "../assets/images/levels/level2/bool_compare.png"
import comment_code from "../assets/images/levels/level2/comment_code.png"
import hints from "../assets/images/levels/level2/hints.png"
import disable_line from "../assets/images/levels/level2/disable_line.png"


export const levelsData = {
  1: {
    ruta: "/modules/1",
    niveles: {
      1: [
        {
          text: "👋 ¡Hola, pequeño programador! Bienvenido a Codekids, un lugar donde aprenderás a programar desde cero mientras te diviertes. \n \n ¿Alguna vez te has preguntado cómo se crean los videojuegos, las apps o diferentes programas? ¡Aquí lo descubrirás paso a paso! 🤖💻"
          
        },
        {
          text: "🧭 Este curso está dividido en módulos. Cada módulo trata un tema especial de la programación.\n \n Dentro de cada módulo hay niveles, tómalo como misiones que irás completando.\n Además, cada nivel tiene varias secciones, donde aprenderás con explicaciones sencillas, imágenes, videos... ¡y hasta minijuegos! 🎮✨",
          imagen: program
        },
        {
          text: "📚 En cada sección encontrarás explicaciones que te dirán lo que necesitas saber.\n \n Verás también imágenes que te ayudarán a imaginar lo que estás aprendiendo 🖼️ e incluso videos para ver ejemplos y explicaciones en acción 🎥.\n¡Así aprender es mucho más divertido!",
          imagen: codekids_logo
        },
        {
          text: "🎲 Como se mencionó antes, algunos niveles son especiales porque contienen minijuegos diseñados para ayudarte a practicar lo que has aprendido.\n \nSon súper divertidos y te harán comprender más lo que estás aprendiendo, \njusto como un verdadero programador 🧠🎉.\n¡Vamos a jugarlos todos!",
          imagen: control
        },
        {
          text: "🚀 El objetivo de Codekids es que desarrolles habilidades como la lógica, la creatividad y la resolución de problemas, que te servirán no solo en programación, ¡sino en la vida!\n\nQueremos que aprendas mientras te diviertes y descubres todo lo que puedes lograr 🦸‍♀️🦸‍♂️\n\n¡Prepárate para una aventura increíble!",
          video: intro_video
        }
      ],
      2: [
        {
          text: "🧩 La lógica es como un rompecabezas. Cada pieza tiene su lugar y, cuando las juntas, ¡todo cobra sentido! \n \n En programación, la lógica nos ayuda a resolver problemas y a crear cosas geniales. \n \n ¡Vamos a aprender a pensar como programadores!",
          imagen: puzzle
        },
        {
          text: "🔍 Imagina que eres un detective resolviendo un misterio. Necesitas seguir pistas y hacerte preguntas para encontrar la solución. \n \n La lógica es como ese detective en tu mente. Te ayuda a analizar situaciones y encontrar respuestas lupa🔎​🕵🏻‍♂️​",
          imagen: detective
        },
        {
          text: "💡 También puedes imaginar la lógica como una receta de cocina 🧑🏻‍🍳​👨🏻‍🍳​  \n \n Debes primero pensar bien lo que vas a hacer y que tenga sentido, que sepan bien entre sí los ingredientes que vas a usar 🍽️ Así funciona la lógica en programación.",
          imagen: chef
        },
        {
          text: "🧠 Ella te ayuda a tomar decisiones. Imagina que estás jugando un videojuego y tienes que elegir entre dos caminos. \n \n La lógica te dice cuál es el mejor camino para ganar el juego 🗺️ \n Dependiendo la situación tomarás una decisión.",
          imagen: paths
        },
      ],
      3: [
        {
          text: "🔢 La secuencia es como una lista de pasos que debes seguir para hacer algo. \n \n Imagina que estás armando un rompecabezas, tienes que seguir ciertos pasos y cierto razonamiento para al final completarlo todo. 🧩\n \n En programación, seguimos secuencias para que las computadoras entiendan lo que queremos hacer.",
          imagen: compuzzle
        },
        {
          text: "🛤️ Piensa en la secuencia como un camino. Si sigues el camino correcto, llegarás a tu destino. \n \n Pero si te sales del camino, ¡podrías perderte! 🚶‍♂️🚶‍♀️\n \n En programación, seguir la secuencia correcta es clave para que todo funcione bien.",
          imagen: path
        },
        {
          text: "📜 La secuencia es como una receta de cocina👨🏻‍🍳 Tienes que seguir los pasos en el orden correcto para que el platillo salga delicioso. 🍽️\n \n Si cambias el orden de los pasos, ¡podrías terminar con un desastre!",
          imagen: kitchen
        },
        {
          text: "🎵 Piensa en el instrumento que te gusta, piensa en una canción. Tienes que tocar las notas en el orden correcto para que suene bien. \n \n Si tocas las notas en desorden, ¡no sonará igual! 🎶\n \n En programación, seguir la secuencia correcta es esencial para crear algo genial😎​",
          imagen: music
        },
      ],
      4: [
        {
          text: "📦 ¿Sabías que en programación usamos diferentes tipos de datos para que la computadora entienda lo que queremos? \n\nEs como tener diferentes cajas para guardar distintas cosas: en una guardas números 🧮, en otra palabras o frases 📝 y en otra respuestas de sí o no ✅❌ verdadero o falso. \n\n ¡A eso le llamamos tipos de datos!",

        },
        {
          text: "🔢 Los números que llamaremos 'enteros' sirven para contar, sumar, \n restar y muchas cosas más. \n Ejemplo: 5, 100, -2.\n\n🗣️ Los textos que llamamos 'strings' son todo lo que escribimos con letras, como nombres o mensajes y van entre comillas. \n(incluso los números serán vistos como strings si están entre comillas 🤯). \n Ejemplo: \"Hola\", \"Codekids\", \"5\".\n\n🤔 Los booleanos son las respuestas de sí o no. \n En programación se dicen como: `true` (verdadero) o `false` (falso).",
          video: "https://www.youtube.com/embed/kZfuJvkdcHU?si=RNNJNNntm0QyIek9",
        },
        {
          text: "🎒 Ahora, imagina que tienes una mochila mágica donde puedes guardar lo que quieras. Esa mochila es como una variable en programación.\n\nPuedes guardar los datos que vimos anteriormente, como un número, un texto o una respuesta en ella. Y cuando la necesites, \n ¡puedes abrir la mochila y usar lo que guardaste!🎒✨",
          imagen: backpack
        },
        {
          text: "✍️ Cuando le decimos a la computadora que guarde algo en una variable, usamos algo llamado asignación, es lógico, pues se le asigna un valor. \n\nEs como ponerle una etiqueta a tu mochila: `edad = 10` 📛, o `nombre = \"Lucía\"` 🧍‍♀️. Así la compu sabe qué hay dentro.\n\n¡Y lo mejor! Puedes cambiar el valor que tenga cuando quieras.",
          imagen: box_var,
        },
      ],
    }
  },

  2: {
    ruta: "/modules/2",
    niveles: {
      1: [
        {
          text: "🎒 Las variables son como mochilas mágicas donde puedes guardar cosas. \n\nPuedes guardar números, palabras, respuestas... ¡lo que quieras! Así, cuando necesites esa información, la puedes sacar de tu mochila."
        },
        {
          text: "✍️ Para crear una variable en Python, solo necesitas un nombre seguido del signo  =  y un valor. \n \nPor ejemplo si quieres definir unas variables con nombre, edad y ciudad de recidencia podrias hacer algo asi:  ",
          imagen: variable,
        },
        {
          text: "📛 Imagina que le pones una etiqueta a tu mochila para saber qué hay dentro. Esa etiqueta es el nombre de la variable. \n\nPuedes tener muchas variables diferentes:\n Pero recuerda ponerles nombres descriptivos  ¡Así sabrás qué guardaste en cada una! \n \n Por ejemplo si defines variables con nombres con una sola letra como n o m, sera dificil entender que contienen para eso se definen las variables con nombres más descriptivos.",
          imagen: var_name
        },
        {
          text: "🔄 Lo más genial es que puedes cambiar lo que hay dentro de tu variable. Es como sacar lo que tenías y meter algo nuevo.\n\n En la imagen podemos observar como en un primer momento definimos las variables con ciertos valores y despues volvemos a definir la misma variable pero con un valor diferente, asi podemos actualizar su valor.",
          imagen: var_change
        },
        {
        text: "📐 Cuando creas una variable, debes seguir algunas reglas:\n\n- El nombre no puede comenzar con un número.\n- No puede tener espacios, en vez de eso usa _guiones_bajos_, si necesitas separar palabras.\n- No uses símbolos especiales (como @, $, %, etc.).\n\nEjemplos válidos: \n",
        imagen: var_rules
        },
        {
        text: "🎭 En Python, las variables son flexibles. ¡Pueden cambiar el tipo de dato que guardan!\n\nPrimero puedes guardar un número y luego un texto, en la misma variable. Python entiende lo que estás guardando. ¡Es como una mochila que se adapta!",
        imagen: var_dynamic
        },
        {
        text: "🧪 A veces, puedes usar el valor de una variable para crear otra. En este caso, la variable mensaje usó nombre para crear una frase nueva. ¡Muy útil! \n \n En este ejemplo usamos el + para unir el Hola con el nombre. \n El resultado final sera: Hola Alexis ",
        imagen: var_concat
        }
      ],
      2: [
        {
          text: "🧠 Las computadoras pueden hacer matemáticas súper rápido. Para eso usamos *operadores matemáticos*, como sumar ➕, restar ➖, multiplicar ✖️ y dividir ➗."
        },
        {
          text: "💡 Primero definimos las variables y les asignamos una operación como suma o resta y la variable almacenara su solución, Aquí tienes algunos ejemplos:\n¡Así puedes hacer cálculos en tu programa!",
          imagen: math_ops
        },
        {
          text: "📏 También podemos usar los operadores para hacer cosas más complejas: \n\nPrimero suma o resta y luego multiplica. ¡Como una calculadora!",
          imagen: order_ops
        },
        {
          text: "🎯 ¿Y qué pasa si queremos saber el resto de una división?\nUsamos el operador % llamado módulo. \n Eso nos dice cuánto sobra después de dividir.",
          imagen: modulo
        }
      ],
      3: [
        {
          text: "🤔 A veces en programación queremos hacer preguntas, como:\n\n¿Un número es mayor que otro? ¿Son iguales? Para eso usamos los *operadores de comparación*."
        },
        {
          text: "🔍 Estos operadores nos son muy utiles para validar si una variable es menor, mayor, igual o diferente a otra y asi poder tomar una desicion en base a eso.\n\n Algunos operadores son:",
          imagen: compare_ops
        },
        {
          text: "💡 ¡El print nos permite ver en la terminal el valor que retorna la operación. \n La compu responde con `True` (sí) o `False` (no)! \n\n En este ejemplo se puede observar que x = 5 por ende cumple son ser mayor a 3 pero no cumple con ser igual a 10.",
          imagen: bool_compare
        }
      ],
      4: [
        {
          text: "💬 A veces los programadores escriben notas en su código para recordar lo que están haciendo. \n\nEsas notas se llaman *comentarios*, ¡y la computadora las ignora!"
        },
        {
          text: "🖊️ En Python, los comentarios empiezan con el símbolo `#`, son una guia muy util para comprender el objetivo de la variable, ya sea algo simple como almacenar un nombre o cosas mas complejas, cuando ya tengas mucho mas fragmentos de código puedas leer los comentarios y entender completamente la finalidad de cada variable:",
          imagen: comment_code
        },
        {
          text: "🧠 Los comentarios son súper útiles para que tú (o alguien más) entienda tu código después de un tiempo.\n\n¡Como dejar pistas para no perderte!",
          imagen: hints
        },
        {
          text: "🔎 A veces también se usan para desactivar partes del código sin borrarlas: \n\nLa línea está 'apagada', pero sigue ahí.",
          imagen: disable_line
        }
      ]
    }
  }
};
