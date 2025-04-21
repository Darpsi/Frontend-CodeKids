import codekids_logo from "../assets/images/codekids_negro.png";
import intro_video from "../assets/videos/vid_intro_codekids.mp4"
import control from "../assets/images/game_control.jpg"
import program from "../assets/images/program.png"

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
  },
};
