import React from "react";
import PasswordStepForm from "../components/F-password"
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../services/authService";

const ResetPassword = () => {

    const navigate = useNavigate();

    const handleSubmit = async (data) => {
        if (data.contraseña !== data.confirmarContraseña) {
            alert('Las contraseñas no coinciden');
            return;
        }
    
        if (!data.contraseña || data.contraseña.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres");
            return;
        }
    
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                alert('Token no encontrado');
                return;
            }
    
            await resetPassword(token, data.contraseña); 
            localStorage.removeItem('token');
    
            alert('Contraseña restablecida correctamente');
            navigate('/login');
        } catch (error) {
            console.error("Error al restablecer la contraseña:", error);
            alert("Ocurrió un error. Intenta nuevamente.");
        }
    };
    

    return (
        <div>
            <PasswordStepForm
                label="Enviar"
                title="Ingresa tu nueva contraseña"
                fields={[
                    {name: "contraseña", type: "password", placeholder: "Contraseña"},
                    {name: "confirmarContraseña", type: "password", placeholder: "Confirmar contraseña"},
                ]}
                onSubmit={handleSubmit}
            />
        </div>
    )
}

export default ResetPassword;