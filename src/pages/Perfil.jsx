import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import perfilImg from "../assets/images/perfil.png";
import PopupModal from "../components/PopupModal";
import PopupCert from "../components/PopupCert";
import Certificado from "../components/Certificado";
import axios from "axios";
import { changePasword, getName, getNameInstitution } from "../services/authService";
import { descripcionesInsignias } from "../components/descripcionesInsignias";
import "../assets/styles/Perfil.css";

const Perfil = () => {
  const [modalVisible, setModalVisible] = useState(null);
  const [modalPos, setModalPos] = useState({ top: "10vh", left: "50%" });
  const [modalSize, setModalSize] = useState({ width: "400px", minHeight: "400px", maxHeight: "95vh" });
  const [certificadoPos, setCertificadoPos] = useState({ top: "10vh", left: "50%" });
  const [descripcionSeleccionada, setDescripcionSeleccionada] = useState(null);
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [institutionName, setInstitutionName] = useState("");
  const [certificadoDisponible, setCertificadoDisponible] = useState(true);
  const [loadingCertificado, setLoadingCertificado] = useState(false);
  const email = localStorage.getItem("email");
  const [insigniasDesbloqueadas, setInsigniasDesbloqueadas] = useState([]);
  const [insigniasCount, setInsigniasCount] = useState(0);
  const [modulosCompletados, setModulosCompletados] = useState(0);

  useEffect(() => {
    console.log("Descripciones de insignias:", descripcionesInsignias);
    if (email) {
      getName(email)
        .then((name) => setUserName(name))
        .catch((error) => console.error("Error al obtener el nombre del usuario:", error));

      getNameInstitution(email)
        .then((instName) => setInstitutionName(instName))
        .catch((error) => console.error("Error al obtener el nombre de la institución:", error));

      // Verificar disponibilidad del certificado
      fetch(`http://localhost:4000/certificado/${email}`)
        .then((res) => res.json())
        .then((data) => setCertificadoDisponible(data.certificado))
        .catch((error) => console.error("Error al verificar certificado:", error))
        .finally(() => setLoadingCertificado(false));

      // Obtener módulo actual
      fetch(`http://localhost:4000/progreso/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Datos recibidos de modulos-completados:", data);
          setModulosCompletados(data.maxModulo);
        })
        .catch((error) => console.error("Error al obtener módulos:", error));
    }
  }, [email]);

  useEffect(() => {
    const fetchInsignias = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/insignias-desbloqueadas/${email}`);
        console.log("Insignias desbloqueadas recibidas:", res.data.desbloqueadas);
        setInsigniasDesbloqueadas(res.data.desbloqueadas || []);
        setInsigniasCount(res.data.desbloqueadas ? res.data.desbloqueadas.length : 0);
      } catch (error) {
        console.error("Error al obtener las insignias desbloqueadas:", error);
      }
    };

    if (email) fetchInsignias();

    //para pruebas: descomentar para simular insignias desbloqueadas
    //setInsigniasDesbloqueadas([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]);
    //setInsigniasCount(35);
  }, [email]);

  useEffect(() => {
    setModalSize({
      width: "400px",
      minHeight: descripcionSeleccionada ? "500px" : "400px",
      maxHeight: "95vh",
    });
  }, [descripcionSeleccionada]);

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

    changePasword(email, currentPassword, newPassword)
      .then(() => {
        alert("Contraseña cambiada con éxito");
        setModalVisible(null);
      })
      .catch((error) => {
        console.error("Error al cambiar la contraseña:", error);
        alert("Error al cambiar la contraseña.");
      });
  };

  const abrirModalDesde = (e, tipo) => {
    setModalPos({ top: "10vh", left: "50%" });
    setModalVisible(tipo);
  };

  const TituloPorModulo = (modulo) => {
    const titulos = [
      "Trainee", "Explorador", "Aventurero", "Mago",
      "Guardián", "Maestro", "Gran Maestro", "Héroe"
    ];
    return modulo >= 1 && modulo <= 8 ? titulos[modulo - 1] : "No hay título";
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
          <p className="font-bold text-lg">Bienvenido, pequeño programador</p>
          <div className="w-48 h-4 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500" style={{ width: "65%" }}></div>
          </div>
          <p className="text-sm text-gray-600">
            Institución: {institutionName || "No perteneces a ninguna institución"}
          </p>
          <div className="perfil-stats">
            <p><strong>Módulo actual:</strong> {modulosCompletados}</p>
            <p><strong>Título otorgado:</strong> {TituloPorModulo(modulosCompletados)}</p>
            <p><strong>Insignias obtenidas:</strong> {insigniasCount}</p>
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
          <div className="cuadro certificado" onClick={(e) => abrirModalDesde(e, "contenedor-certificado")}>
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
        size={modalSize}
      >
        <form onSubmit={handleSubmit}>
          <input name="currentPassword" type="password" placeholder="Contraseña actual" required />
          <input name="newPassword" type="password" placeholder="Nueva contraseña" required />
          <input name="confirmNewPassword" type="password" placeholder="Confirmar nueva contraseña" required />
          <button type="submit">Aceptar</button>
        </form>
      </PopupModal>

      <PopupModal
        visible={modalVisible === "insignias"}
        onClose={() => {
          setModalVisible(null);
          setDescripcionSeleccionada(null);
        }}
        title="Insignias"
        size={modalSize}
      >
        <div className="insignias-grid">
          {[...Array(35)].map((_, i) => {
            const id = i + 1;
            const nombre = `insignia${id}`;
            let bn, color;
            try {
              bn = require(`../assets/insignias/${nombre}-bn.png`);
              color = require(`../assets/insignias/${nombre}-color.png`);
              console.log(`Cargando insignia ${id}:`, bn, color);
            } catch (error) {
              console.error(`Error al cargar imágenes para insignia ${id}:`, error);
              return null;
            }
            const estaDesbloqueada = insigniasDesbloqueadas.includes(id);
            console.log(`Insignia ${id} desbloqueada:`, estaDesbloqueada);

            return (
              <img
                key={id}
                src={estaDesbloqueada ? color : bn}
                alt={`Insignia ${id}`}
                className="insignia"
                onClick={() => {
                  console.log("Clic en insignia ID:", id, "Desbloqueada:", estaDesbloqueada);
                  if (estaDesbloqueada) {
                    setDescripcionSeleccionada(id);
                  } else {
                    console.log("Insignia no desbloqueada, no se muestra descripción");
                  }
                }}
              />
            );
          })}
        </div>

        {descripcionSeleccionada && (
          <div className="descripcion-insignia">
            <h4>Insignia #{descripcionSeleccionada}</h4>
            {(() => {
              const descripcion = descripcionesInsignias[descripcionSeleccionada - 1] || "Descripción no disponible";
              const partes = descripcion.split("!", 2);
              const subtitulo = partes[0].trim();
              const cuerpo = partes[1] ? partes[1].trim() : "";
              console.log(`Descripción insignia ${descripcionSeleccionada}:`, { subtitulo, cuerpo });
              return (
                <>
                  <h5>{subtitulo}</h5>
                  {cuerpo && <p>{cuerpo}</p>}
                </>
              );
            })()}
          </div>
        )}
      </PopupModal>


      {/* Modal: Certificado */}
      <PopupCert
        visible={modalVisible === "contenedor-certificado"}
        onClose={() => setModalVisible(null)}
        title="Certificado"
        triggerPosition={certificadoPos}
      >
        <Certificado correo={email} />
      </PopupCert>
    </div>
  );
};

export default Perfil;