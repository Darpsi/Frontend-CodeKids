import React, { useEffect, useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "../assets/styles/Certificado.css";
import { getName } from "../services/authService";

const Certificado = ({ correo }) => {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [cargando, setCargando] = useState(true);
  const refCertificado = useRef();

  useEffect(() => {
    const obtenerNombreUsuario = async () => {
      try {
        const nombre = await getName(correo); 
        setNombreUsuario(nombre);
      } catch (err) {
        console.error("Error al obtener el nombre del usuario:", err);
      } finally {
        setCargando(false);
      }
    };

    if (correo) {
      obtenerNombreUsuario();
    }
  }, [correo]);

  const descargarPDF = async () => {
    const canvas = await html2canvas(refCertificado.current);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("landscape", "px", [canvas.width, canvas.height]);
    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("certificado.pdf");
  };

  if (cargando) return <p>Cargando certificado...</p>;
  if (!nombreUsuario) return <p>No se pudo cargar el nombre del usuario.</p>;

  return (
    <div className="contenedor-certificado">
      <div className="certificado_descargar" ref={refCertificado}>
        <h1>Certificado de Finalización</h1>
        <p>Otorgado a:</p>
        <h2>{nombreUsuario}</h2>
        <p>Por completar satisfactoriamente el curso Codekids</p>
      </div>

      <button className="btn-descargar" onClick={descargarPDF}>
        Descargar PDF
      </button>
    </div>
  );
};

export default Certificado;
