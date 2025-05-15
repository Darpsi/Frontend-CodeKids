import Sidebar from '../../components/Sidebar';
import "../../assets/styles/admin/admin.css";
import ProgressEstuden from "../../components/Progress/ProgreesPerStudent";

const Admin = () => {
    return (
      <div className="admin-container">
        <Sidebar />
        <h1>Progreso de modulos de cada estudiante</h1>
        <ProgressEstuden />
      </div>
  );
}

export default Admin;