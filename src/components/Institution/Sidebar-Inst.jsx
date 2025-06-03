import { useState } from "react";
import "../../assets/styles/sidebar.css";
import logo from "../../assets/images/logo-institution.jpg";
import { addUserInstitution, deleteUserInstitution } from "../../services/authService";

const BarraLateral = () => {
  const [visible, setVisible] = useState(true);

  // Modal para agregar estudiante
  const [modalAgregarAbierto, setModalAgregarAbierto] = useState(false);
  const [correoAgregar, setCorreoAgregar] = useState("");

  // Modal para eliminar estudiante
  const [modalEliminarAbierto, setModalEliminarAbierto] = useState(false);
  const [correoEliminar, setCorreoEliminar] = useState("");

  // Abrir y cerrar modales
  const abrirModalAgregar = () => setModalAgregarAbierto(true);
  const cerrarModalAgregar = () => setModalAgregarAbierto(false);

  const abrirModalEliminar = () => setModalEliminarAbierto(true);
  const cerrarModalEliminar = () => setModalEliminarAbierto(false);

  // Función para agregar estudiante
  const enviarAgregar = async () => {
    const email = localStorage.getItem("email");
    try {
      const result = await addUserInstitution(correoAgregar, email);
      alert(result.message);
      cerrarModalAgregar();
    } catch (error) {
      alert(error.message);
    }
  };

  // Función para eliminar estudiante
  const enviarEliminar = async () => {
    const email = localStorage.getItem("email");
    try {
      const result = await deleteUserInstitution(correoEliminar, email);
      alert(result.message);
      cerrarModalEliminar();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      {/* BOTÓN FUERA DEL SIDEBAR */}
      <button className="toggle" onClick={() => setVisible(!visible)}>
        {visible ? "<<" : ">>"}
      </button>

      {/* SIDEBAR */}
      <div className={`barra-lateral ${visible ? "visible" : "oculta"}`}>
        <div className="logo-container">
          <img src={logo} alt="Logo" />
        </div>

        <button className="toggle" onClick={() => setVisible(!visible)}>
          {visible ? "<<" : ">>"}
        </button>

        <div className="contenido-barra">
          <div className="perfil">
            <p>Panel de administrador</p>
          </div>

          <div className="botones-barra">
            <button onClick={abrirModalAgregar}>Agregar Estudiante</button>
            <button onClick={abrirModalEliminar}>Eliminar Estudiante</button>
            <a href="/">Salir</a>
          </div>
        </div>
      </div>

      {/* Modal para agregar estudiante */}
      {modalAgregarAbierto && (
        <div className="modal-overlay" onClick={cerrarModalAgregar}>
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <h2>Ingresa el correo del estudiante para agregar</h2>
            <input
              type="email"
              value={correoAgregar}
              onChange={(e) => setCorreoAgregar(e.target.value)}
              required
            />
            <button onClick={enviarAgregar}>Agregar</button>
            <button onClick={cerrarModalAgregar}>Cerrar</button>
          </div>
        </div>
      )}

      {/* Modal para eliminar estudiante */}
      {modalEliminarAbierto && (
        <div className="modal-overlay" onClick={cerrarModalEliminar}>
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <h2>Ingresa el correo del estudiante para eliminar</h2>
            <input
              type="email"
              value={correoEliminar}
              onChange={(e) => setCorreoEliminar(e.target.value)}
              required
            />
            <button onClick={enviarEliminar}>Eliminar</button>
            <button onClick={cerrarModalEliminar}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default BarraLateral;

