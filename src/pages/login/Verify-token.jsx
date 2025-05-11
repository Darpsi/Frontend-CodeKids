import React from "react";
import PasswordStepForm from "../../components/F-password"
import { useNavigate } from "react-router-dom";
import { verifyToken } from "../../services/authService";

const VerifyToken = () => {

    const navigate = useNavigate();

    const handleSubmit = async (data) => {

        const codigo = data.codigo;

        // Validación: debe ser de 6 dígitos numéricos
        const esCodigoValido = /^\d{6}$/.test(codigo);

        if (!esCodigoValido) {
            alert("El código no es válido.");
            return;
        }

        try {
            await verifyToken(data.codigo);
            alert('Token verificado correctamente');
            localStorage.setItem('token', data.codigo);
            navigate('/reset-password');
        } catch (error) {
            console.error("Error al verificar el token:", error);
            alert("Ocurrió un error. Intenta nuevamente.");
        }
    }

    return (
        <div>
            <PasswordStepForm
                label="Enviar"
                title="Ingresa tu codigo de verificación"
                fields={[
                    {name: "codigo", type: "text", placeholder: "Codigo de verifiacción"}
                ]}
                onSubmit={handleSubmit}
            />
        </div>
    )
}

export default VerifyToken;