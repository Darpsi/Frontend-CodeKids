import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Modulos from '../pages/Modulos';
import Level from '../pages/Level';
import RecoverPassword from '../pages/Forgot-password';
import VerifyToken from '../pages/Verify-token';
import ResetPassword from '../pages/Reset-password';
import Perfil from "../pages/Perfil";
import SelectLevel from "../pages/SelectLevel";
import Maxgame from "../pages/Maxgame";
import Exam from "../pages/Exam";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/modulos" element={<Modulos/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/level" element={<Level/>} />
        <Route path="/forgot-password" element={<RecoverPassword />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/verify-token" element={<VerifyToken />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/select-level" element={<SelectLevel />} />
        <Route path="/maxgame" element={<Maxgame />} />
        <Route path="/exam" element={<Exam />} />
        {/* Otras rutas */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
