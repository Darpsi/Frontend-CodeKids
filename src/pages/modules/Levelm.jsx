import React from "react";
import { useParams } from "react-router-dom";
import { levelsData } from "../../data/levels";
import Levels from "../../components/levels/Levels";
import Sidebar from "../../components/Sidebar";
import "../../assets/styles/modules/levelm.css";


const Levelm = () => {
    const { moduleId, levelId } = useParams();
  
    const modId = parseInt(moduleId);
    const lvlId = parseInt(levelId);
  
    const module = levelsData[modId];
    const sections = module?.niveles?.[lvlId];
    const rutaFinal = module?.ruta;

  
    if (!sections) {
      return <div>No se encontró este nivel.</div>;
    }
  
    return (
      <div className="levelm-container">
        <Sidebar />
        <div className="levelm-content">
        <Levels secciones={sections} titulo={`Módulo ${modId} - Nivel ${lvlId}`} rutaFinal={rutaFinal} />
      </div>
      </div>
    );
  };  

export default Levelm;
