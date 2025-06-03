import "../../assets/styles/insignia/toast.css";

import axios from "axios";

export const intentarDesbloquearInsignia = async (correo, idInsignia, setToastInfo) => {
  try {
    const res = await axios.post("http://localhost:4000/insignia/desbloquear", {
      correo,
      id_insignia: idInsignia,
    });

    if (!res.data.itwasunlock) {
      setToastInfo({
        id: idInsignia,
        descripcion: res.data.descripcion,
      });

      setTimeout(() => {
        setToastInfo(null);
      }, 3000);
    }
  } catch (error) {
    console.error("Error al desbloquear la insignia:", error);
  }
};

const ToastInsignia = ({ info }) => {
  if (!info) return null;

  return (
    <div className="toast-insignia">
                Felicidades🎉 
      ¡Has desbloqueado la insignia #{info.id}!<br />
      Logro: {info.descripcion}
    </div>
  );
};

export default ToastInsignia;
