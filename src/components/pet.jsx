import normal from "../assets/images/pet/mascota-normal.png";
import feliz from "../assets/images/pet/mascota-feliz.png";
import triste from "../assets/images/pet/mascota-triste.png";
import rostro from "../assets/images/pet/mascota-rostro.png";

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
