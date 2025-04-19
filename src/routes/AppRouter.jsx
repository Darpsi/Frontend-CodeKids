import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import RecoverPassword from '../pages/RecoverPassword';
import Home from '../pages/Home';
import Modulos from '../pages/Modulos';
import Level from '../pages/Level';
import SelectLevel from '../pages/SelectLevel';
import MaxGame from '../pages/Maxgame';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectLevel/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/modulos" element={<Modulos/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/level" element={<Level/>} />
        <Route path="/recover-password" element={<RecoverPassword />} />
        <Route path="/modulos" element={<Modulos />} />
        <Route path="/level" element={<Level />} />
        <Route path="/home" element={<Home />} />
        <Route path="/maxgame" element={<MaxGame />} />
        <Route path="/select-level" element={<SelectLevel />} />
        {/* Otras rutas */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
