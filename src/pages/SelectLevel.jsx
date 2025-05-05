import Piramide from "../components/Piramide";

const nivelesPersonalizados = [
  { id: 1, label: "Introducción", info: "Base del funcionamiento de Codekids", ruta: "/modules/1/levels/1" },
  { id: 2, label: "Lógica", info: "Examina el orden de las cosas", ruta: "/modules/1/levels/2" },
  { id: 3, label: "Secuencias", info: "Examina el orden de las cosas", ruta: "/modules/1/levels/3" }, 
  { id: 4, label: "Tipos de datos y variables", info: "Aprende tipos de datos básicos.", ruta: "/modules/1/levels/4" },
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

