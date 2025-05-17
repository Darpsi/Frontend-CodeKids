import React from "react";
import CodeMaze from "../../components/minigames/Maze";
import { useParams } from "react-router-dom";
import { mazeLevels } from "../../data/maze";

const MazeDynamic = () => {
  const { moduleid } = useParams();
  const levels = mazeLevels[moduleid];

  if (!levels) {
    return <div>⚠️ No se encontraron niveles para este Maze ID.</div>;
  }

  return <CodeMaze levels={levels} />;
};

export default MazeDynamic;