import React, { useEffect, useRef, useState } from "react";
import jsPDF from "jspdf";



const Certificado = ({ correo }) => {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const refCertificado = useRef();

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const res = await fetch(`http://localhost:4000/certificado/${correo}`);
        const data = await res.json();
        setDatos(data);
      } catch (err) {
        console.error("Error al obtener el certificado:", err);
      } finally {
        setCargando(false);
      }
    };

    obtenerDatos();
  }, [correo]);

  const descargarPDF = async () => {
    const canvas = await html2canvas(refCertificado.current);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("landscape", "px", [canvas.width, canvas.height]);
    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("certificado.pdf");
  };

  if (cargando) return <p>Cargando certificado...</p>;
  if (!datos) return <p>No se pudo cargar el certificado.</p>;

  return (
    <div className="contenedor-certificado">
      <div className="certificado" ref={refCertificado}>
        <h1>Certificado de Finalización</h1>
        <p>Otorgado a:</p>
        <h2>{datos.nombre}</h2>
        <p>Por completar satisfactoriamente el curso Codekids</p>
      </div>

    </div>
  );
};

export default Certificado;
