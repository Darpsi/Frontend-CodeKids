import Piramide from "../components/Piramide";

const nivelesPersonalizados = [
  { id: 1, label: "Introducción", info: "Bases de programación", ruta: "/modules/1/levels/1" },
  { id: 2, label: "Secuencias", info: "Examina el orden de las cosas", ruta: "/maxgame" },
  { id: 3, label: "Condicionales", info: "Aprende sobre decisiones", ruta: "/sorter" }, 
  { id: 4, label: "Bucles", info: "Repeticiones y ciclos", ruta: "/bugcatcher" },
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

