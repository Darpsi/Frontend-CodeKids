import React from "react";
import PasswordStepForm from "../../components/F-password"
import { useNavigate } from "react-router-dom";
import { recoverPassword } from "../../services/authService";


const ForgotPassword = () => {

    const navigate = useNavigate();

    const handleSubmit = async (data) => {

        if(data.email !== data.confirmarEmail){
            alert('Los correos no coinciden');
            return;
        }

        try {
            await recoverPassword(data.email);
            alert('Se le ha enviado un correo para restablecer su contraseña');
            navigate('/verify-token');
        } catch (error) {
            alert(error.message);
        }
    };


    return (
        <div>
            <PasswordStepForm
                label="Enviar"
                title="Recupera tu contraseña"
                fields={[
                    {name: "email", type: "email", placeholder: "Correo electrónico"},
                    {name: "confirmarEmail", type: "email", placeholder: "Confirmar correo electrónico"},
                ]}
                onSubmit={handleSubmit}
            />
        </div>
        

    )
}

export default ForgotPassword;