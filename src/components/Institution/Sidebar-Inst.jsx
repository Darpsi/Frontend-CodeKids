import { useState } from "react";
import "../../assets/styles/sidebar.css";
import logo from "../../assets/images/logo-institution.jpg";
import { addUserInstitution } from "../../services/authService";


const BarraLateral = () => {
  const [visible, setVisible] = useState(true);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [pk_correo, setpk_correo] = useState(""); 

  const abrirModal = () => setModalAbierto(true);
  const cerrarModal = () => setModalAbierto(false);

  const enviarForm = async () => {
    const email = localStorage.getItem("email");
    try {
      const result = await addUserInstitution(pk_correo, email)
      alert(result.message);
      cerrarModal();
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
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
            <button onClick={abrirModal}>Agregar Estudiante</button>
            <button>Eliminar Estudiante</button>
            <a href="/">Salir</a>
          </div>
        </div>
      </div>

      {modalAbierto && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <h2>Ingresa el correo del estudiante</h2>
            <input 
            type="email"
            value={pk_correo}
            onChange={(e) => setpk_correo(e.target.value)}
            required />
            <button onClick={enviarForm}>Enviar</button>
            <button onClick={cerrarModal}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default BarraLateral;