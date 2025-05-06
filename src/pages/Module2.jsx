import Piramide from "../components/Piramide";

const nivelesPersonalizados = [
  { id: 1, label: "Introducción", info: "Base del funcionamiento de Codekids", ruta: "/level" },
  { id: 2, label: "Lógica", info: "Examina el orden de las cosas", ruta: "/bugcatcher" },
  { id: 3, label: "Secuencias", info: "Examina el orden de las cosas", ruta: "/sorter" }, 
  { id: 4, label: "Tipos de datos y variables", info: "Aprende tipos de datos básicos.", ruta: "/maze" },
  { id: 5, label: "Examen Final", info: "¡Demuestra lo aprendido!", ruta: "/exam" },
];

function PaginaDeNiveles() {
  return (
    <Piramide
      titulo="PIRAMIDE DE CONOCIMIENTO"
      subtitulo="¡Elije un nivel!"
      niveles={nivelesPersonalizados}
    />
  );
}

export default PaginaDeNiveles;