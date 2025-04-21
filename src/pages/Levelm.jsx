import React from "react";
import { useParams } from "react-router-dom";
import { levelsData } from "../data/levels";
import Levels from "../components/Levels";
import Sidebar from "../components/Sidebar";
import "../assets/styles/levelm.css";


const Levelm = () => {
    const { moduleId, levelId } = useParams();
  
    const modId = parseInt(moduleId);
    const lvlId = parseInt(levelId);
  
    const sections = levelsData[modId]?.[lvlId];
  
    if (!sections) {
      return <div>No se encontró este nivel.</div>;
    }
  
    return (
      <div className="levelm-container">
        <Sidebar />
        <div className="levelm-content">
        <Levels secciones={sections} titulo={`Módulo ${modId} - Nivel ${lvlId}`} />
      </div>
      </div>
    );
  };  

export default Levelm;
