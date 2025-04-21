import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Modules from '../pages/Modules';
import Level from '../pages/Level';
import RecoverPassword from '../pages/Forgot-password';
import VerifyToken from '../pages/Verify-token';
import ResetPassword from '../pages/Reset-password';
import Perfil from "../pages/Perfil";
import SelectLevel from "../pages/SelectLevel";
import Maxgame from "../pages/Maxgame";
import Exam from "../pages/Exam";
import Levelm from '../pages/Levelm';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/modules" element={<Modules/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/level" element={<Level/>} />
        <Route path="/forgot-password" element={<RecoverPassword />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/verify-token" element={<VerifyToken />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/select-level" element={<SelectLevel />} />
        <Route path="/maxgame" element={<Maxgame />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/modules/:moduleId/levels/:levelId" element={<Levelm />} />
        {/* Otras rutas */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
