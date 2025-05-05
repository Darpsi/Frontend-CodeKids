import { useState, useEffect } from "react";
import { getName, getNameInstitution } from "../services/authService"; // ajusta la ruta según tu estructura

const useUserData = () => {
  const [userName, setUserName] = useState("");
  const [institutionName, setInstitutionName] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("email");

    if (email) {
      getName(email)
        .then((name) => setUserName(name))
        .catch((error) =>
          console.error("Error al obtener el nombre del usuario:", error)
        );

      getNameInstitution(email)
        .then((instName) => setInstitutionName(instName))
        .catch((error) =>
          console.error("Error al obtener el nombre de la institución:", error)
        );
    }
  }, []);

  return { userName, institutionName };
};

export default useUserData;
