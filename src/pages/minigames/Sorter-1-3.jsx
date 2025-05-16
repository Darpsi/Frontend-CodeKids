import React from "react";
import CodeSorter from "../../components/minigames/Codesorter";
import { useParams } from "react-router-dom";
import { sorterLevels } from "../../data/code_sorter";

const Code_Sorter = () => {
  const { moduleid, sorterid } = useParams(); 
  const levels = sorterLevels[sorterid] || [];
  const modId = parseInt(moduleid);
  const lvlId = parseInt(sorterid);

  const section = levels.find((section) => section.id === lvlId);
  if (!section) {
    return <div>No se encontró este nivel.</div>;
  }


  return <CodeSorter levels={levels} />;
};

export default Code_Sorter;

