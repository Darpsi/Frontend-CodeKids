import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import perfilImg from "../assets/images/perfil.png";
import PopupModal from "../components/PopupModal";
import Certificado from "../components/Certificado";
import { changePasword, getName, getNameInstitution } from "../services/authService";
import "../assets/styles/Perfil.css";

const Perfil = () => {
  const [modalVisible, setModalVisible] = useState(null); // "cambio", "insignias" o "certificado"
  const [modalPos, setModalPos] = useState({ top: "50%", left: "50%" });
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [institutionName, setInstitutionName] = useState("");
  const [certificadoDisponible, setCertificadoDisponible] = useState(true);
  const [loadingCertificado, setLoadingCertificado] = useState(false);
  const email = localStorage.getItem("email");

  useEffect(() => {
    if (email) {
      getName(email)
        .then((name) => {
          setUserName(name);
        })
        .catch((error) => {
          console.error("Error al obtener el nombre del usuario:", error);
        });

      getNameInstitution(email)
        .then((instName) => {
          setInstitutionName(instName);
        })
        .catch((error) => {
          console.error("Error al obtener el nombre de la institución:", error);
        });

      // Verificar disponibilidad del certificado
      fetch(`http://localhost:4000/certificado/estado/${email}`)
        .then((res) => res.json())
        .then((data) => setCertificadoDisponible(data.disponible))
        .catch((error) => console.error("Error al verificar certificado:", error))
        .finally(() => setLoadingCertificado(false));
    }
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const currentPassword = form.currentPassword.value;
    const newPassword = form.newPassword.value;
    const confirmNewPassword = form.confirmNewPassword.value;

    if (newPassword !== confirmNewPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    try {
      changePasword(email, currentPassword, newPassword)
        .then(() => {
          alert("Contraseña cambiada con éxito");
          setModalVisible(null);
        })
        .catch((error) => {
          console.error("Error al cambiar la contraseña:", error);
          alert("Error al cambiar la contraseña. Intenta nuevamente.");
        });
    } catch (error) {
      console.error("Error al cambiar la contraseña:", error);
      alert("Error al cambiar la contraseña. Intenta nuevamente.");
    }
  };

  const abrirModalDesde = (e, tipo) => {
    if (tipo === "certificado") {
      // Posición especial para certificado
      const scrollX = window.scrollX || window.pageXOffset;
      const centerLeft = e.target.getBoundingClientRect().left + scrollX + e.target.offsetWidth / 2;

      setModalPos({ top: `30vh`, left: `${centerLeft}px` });
    } else {
      const rect = e.target.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const scrollX = window.scrollX || window.pageXOffset;

      const centerTop = rect.top + scrollY + rect.height / 2;
      const centerLeft = rect.left + scrollX + rect.width / 2;

      setModalPos({ top: `${centerTop}px`, left: `${centerLeft}px` });
    }

    setModalVisible(tipo);
  };

  return (
    <div className="perfil-container">
      <button className="btn-volver" onClick={() => navigate("/modules")}>
        ⬅ Volver
      </button>

      <div className="perfil-header">
        <h2>{userName ? `Hola, ${userName}` : "Cargando nombre..."}</h2>
      </div>
      <hr className="separador" />

      <div className="perfil-imagen-y-info">
        <div className="perfil-imagen">
          <img src={perfilImg} alt="Perfil" />
        </div>

        <div className="perfil-nivel">
          <p className="font-bold text-lg">Nivel 3 - Explorador</p>
          <div className="w-48 h-4 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500" style={{ width: '65%' }}></div>
          </div>
          <p className="text-sm text-gray-600">
            Institución: {institutionName || "No perteneces a ninguna institución"}
          </p>
          <div className="perfil-stats">
            <p><strong>Módulos completados:</strong> 2/4 PURA DECORACION</p>
            <p><strong>Tiempo total:</strong> 3h 25min</p>
            <p><strong>Insignias:</strong> 4</p>
          </div>
        </div>
      </div>

      <hr className="separador" />

      <div className="perfil-cuadros">
        <div className="cuadro cambio" onClick={(e) => abrirModalDesde(e, "cambio")}>
          <p>Cambiar Contraseña</p>
        </div>
        <div className="cuadro insignias" onClick={(e) => abrirModalDesde(e, "insignias")}>
          <p>Insignias</p>
        </div>
        {!loadingCertificado && certificadoDisponible && (
          <div className="cuadro certificado" onClick={(e) => abrirModalDesde(e, "certificado")}>
            <p>Ver Certificado</p>
          </div>
        )}
        {!loadingCertificado && !certificadoDisponible && (
          <p className="mensaje-certificado">El certificado aún no está disponible.</p>
        )}
      </div>

      <div className="barra-inferior"></div>

      {/* Modal: Cambiar Contraseña */}
      <PopupModal
        visible={modalVisible === "cambio"}
        onClose={() => setModalVisible(null)}
        title="Cambiar Contraseña"
        triggerPosition={modalPos}
      >
        <form onSubmit={handleSubmit}>
          <input name="currentPassword" type="password" placeholder="Contraseña actual" required />
          <input name="newPassword" type="password" placeholder="Nueva contraseña" required />
          <input name="confirmNewPassword" type="password" placeholder="Confirmar nueva contraseña" required />
          <button type="submit">Aceptar</button>
        </form>
      </PopupModal>

      {/* Modal: Insignias */}
      <PopupModal
        visible={modalVisible === "insignias"}
        onClose={() => setModalVisible(null)}
        title="Insignias"
        triggerPosition={modalPos}
      >
        <div className="insignias-grid">
          {[...Array(35)].map((_, i) => {
            const nombre = `insignia${i + 1}`;
            const bn = require(`../assets/insignias/${nombre}-bn.png`);
            const color = require(`../assets/insignias/${nombre}-color.png`);
            return (
              <img
                key={i}
                src={bn}
                alt={`Insignia ${i + 1}`}
                className="insignia"
                onMouseEnter={(e) => (e.currentTarget.src = color)}
                onMouseLeave={(e) => (e.currentTarget.src = bn)}
              />
            );
          })}
        </div>
      </PopupModal>

      {/* Modal: Certificado */}
      <PopupModal
        visible={modalVisible === "certificado"}
        onClose={() => setModalVisible(null)}
        title="Certificado"
        triggerPosition={modalPos}
      >
        <Certificado correo={email} />
      </PopupModal>
    </div>
  );
};

export default Perfil;
