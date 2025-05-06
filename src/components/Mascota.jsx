// src/components/Mascota.jsx
import React from "react";
import normal from "../assets/images/mascota/mascota-normal.png";
import feliz from "../assets/images/mascota/mascota-feliz.png";
import triste from "../assets/images/mascota/mascota-triste.png";
import rostro from "../assets/images/mascota/mascota-rostro.png";

const variantes = {
  normal,
  feliz,
  triste,
  rostro,
};

const Mascota = ({ tipo = "normal", tamaño = "100px", alt = "Mascota" }) => {
  const src = variantes[tipo] || variantes.normal;

  return (
    <img
      src={src}
      alt={alt}
      style={{ width: tamaño, height: "auto" }}
    />
  );
};

export default Mascota;
