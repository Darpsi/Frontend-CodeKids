import React from "react";
import BugCatcher from "../../components/minigames/Bug-catcher";
import { useParams } from "react-router-dom";
import { bugCatcherLevels } from "../../data/catcher";

const BugCatcherPage = () => {
  const { moduleid } = useParams();
  const levels = bugCatcherLevels[moduleid];

  if (!levels) {
    return <div>⚠️ No se encontraron niveles para este ID.</div>;
  }

  return <BugCatcher levels={levels} />;
};

export default BugCatcherPage;