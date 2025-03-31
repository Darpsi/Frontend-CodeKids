import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import RecoverPassword from '../pages/RecoverPassword';
import Home from '../pages/Home';
import Modulos from '../pages/Modulos';
import Level from '../pages/Level';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Level/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
        {/* Otras rutas */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
