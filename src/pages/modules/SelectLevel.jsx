import React from "react";
import { useParams } from "react-router-dom";
import { pyramidData } from "../../data/pyramid";
import Piramide from "../../components/levels/Piramide";

function SelectLevel() {
  const { moduleId } = useParams();
  const modId = parseInt(moduleId);

  const modulo = pyramidData.find(m => m.moduleId === modId);
  const niveles = modulo?.niveles;

  if (!niveles) {
    return <div>No se encontraron niveles para este módulo.</div>;
  }

  return (
    <Piramide
      titulo={`PIRÁMIDE DE CONOCIMIENTO - Módulo ${modId}`}
      subtitulo="¡Elije un nivel!"
      niveles={niveles}
    />
  );
}

export default SelectLevel;
