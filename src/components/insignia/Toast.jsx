import "../../assets/styles/insignia/toast.css";

import axios from "axios";

export const intentarDesbloquearInsignia = async (correo, idInsignia, setInsigniaDesbloqueadaId) => {
  try {
    const res = await axios.post("http://localhost:4000/insignia/desbloquear", {
      correo,
      id_insignia: idInsignia,
    });

    if (!res.data.itwasunlock) {
      setInsigniaDesbloqueadaId(idInsignia);

      setTimeout(() => {
        setInsigniaDesbloqueadaId(null);
      }, 3000);
    }
  } catch (error) {
    console.error("Error al desbloquear la insignia:", error);
  }
};


const ToastInsignia = ({ idInsignia }) => {
  if (!idInsignia) return null;

  return (
    <div className="toast-insignia">
      🎉 ¡Has desbloqueado la insignia #{idInsignia}!
    </div>
  );
};

export default ToastInsignia;
