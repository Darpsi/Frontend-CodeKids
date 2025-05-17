import '../../assets/styles/admin/progressStudent.css';
import {getStudentsInInstitution} from '../../services/authService';
import { useEffect, useState } from 'react';
import DonaProgress from '../Institution/DonaProgress';

const ProgressPerStudent = () => {
  const [progresos, setProgresos] = useState([]);
  const [abiertos, setAbiertos] = useState({});
    
  const email = localStorage.getItem('email');
  console.log("Correo del usuario:", email);

  useEffect(() => {
    getStudentsInInstitution(email)
      .then((data) => {
        console.log("Progresos de estudiantes:", data);
        setProgresos(data);
      })
      .catch((error) => {
        console.error("Error al obtener los progresos:", error);
      });
  }, [email]);

  const toggleSeccion = (nombre) => {
    setAbiertos((prev) => ({
      ...prev,
      [nombre]: !prev[nombre],
    }));
  };

  return (
    <div className="progreso-estudiantes">
      <h2>Progreso por estudiante</h2>
      {progresos.map((estudiante, index) => (
        <div key={index} style={{ border: "1px solid #ccc", margin: "10px 0", borderRadius: "6px" }}>
          <div
            onClick={() => toggleSeccion(estudiante.nombre)}
            style={{
              backgroundColor: "#f0f0f0",
              padding: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {estudiante.nombre}
          </div>
          {abiertos[estudiante.nombre] && (
            <div className="contenido-dona">
              <DonaProgress moduloActual={estudiante.id_modulo_actual} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressPerStudent;