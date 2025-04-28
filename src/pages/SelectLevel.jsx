import Piramide from "../components/Piramide";

const nivelesPersonalizados = [
  { id: 1, label: "Introducción", info: "Bases de programación", ruta: "/level" },
  { id: 2, label: "Secuencias", info: "Examina el orden de las cosas", ruta: "/maxgame" },
  { id: 3, label: "Condicionales", info: "Aprende sobre decisiones" }, 
  { id: 4, label: "Bucles", info: "Repeticiones y ciclos" },
  { id: 5, label: "Examen Final", info: "¡Demuestra lo aprendido!", ruta: "/exam" },
];

function PaginaDeNiveles() {
  return (
    <Piramide
      titulo="RUTA DE APRENDIZAJE"
      subtitulo="Selecciona tu nivel"
      niveles={nivelesPersonalizados}
    />
  );
}

export default PaginaDeNiveles;

