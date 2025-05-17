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


export const levelsData = {
  1: {
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
        video: "https://www.youtube.com/embed/kZfuJvkdcHU?si=RNNJNNntm0QyIek9"
      },
      {
        text: "🎒 Ahora, imagina que tienes una mochila mágica donde puedes guardar lo que quieras. Esa mochila es como una variable en programación.\n\nPuedes guardar los datos que vimos anteriormente, como un número, un texto o una respuesta en ella. Y cuando la necesites, \n ¡puedes abrir la mochila y usar lo que guardaste!🎒✨",
        imagen: backpack
      },
      {
        text: "✍️ Cuando le decimos a la computadora que guarde algo en una variable, usamos algo llamado asignación, es lógico, pues se le asigna un valor. \n\nEs como ponerle una etiqueta a tu mochila: `edad = 10` 📛, o `nombre = \"Lucía\"` 🧍‍♀️. Así la compu sabe qué hay dentro.\n\n¡Y lo mejor! Puedes cambiar el valor que tenga cuando quieras.",
        imagen: box_var
      },
    ],
  },
};
