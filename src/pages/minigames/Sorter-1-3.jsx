import React from "react";
import CodeSorter from "../../components/minigames/Codesorter";
import { useParams } from "react-router-dom";
import { sorterLevels } from "../../data/code_sorter";

const Code_Sorter = () => {
  const { moduleid } = useParams(); 
  const modId = parseInt(moduleid);

  const levels = sorterLevels[modId];
  
  if (!levels) {
    return <div>No se encontró el módulo o nivel.</div>;
  }

  return <CodeSorter levels={levels}/>;
};

export default Code_Sorter;

