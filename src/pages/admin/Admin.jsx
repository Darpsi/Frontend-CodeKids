import Sidebar from '../../components/Institution/Sidebar-Inst';
import "../../assets/styles/admin/admin.css";
import ProgressStudent from "../../components/Institution/ProgreesPerStudent";
import GraficoProgreso from '../../components/Institution/GeneralProgress';
import { getStudentsInInstitution } from '../../services/authService';
import { useEffect, useState } from "react";

const Admin = () => {
  const [estudiantes, setEstudiantes] = useState([]);

  useEffect(() => {
    const listaEstudiantes = async () => {
      const email = localStorage.getItem('email');
      console.log("Correo del usuario:", email);
      try {
        const data = await getStudentsInInstitution(email);
        console.log("Progresos de estudiantes:", data);
        setEstudiantes(data);
      } catch (error) {
        console.error("Error al obtener los progresos:", error);
      }
  }
    listaEstudiantes();
  }
  , []);

    return (
      <div className="admin-container">
        <Sidebar />
        <h1>Panel de progreso</h1>
        <GraficoProgreso estudiantes={estudiantes} />

        <div className='progresoEstudiantes'>
          <ProgressStudent />
        </div>
      </div>
  );
}

export default Admin;