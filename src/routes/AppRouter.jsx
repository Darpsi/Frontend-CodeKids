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
import BugCatcher from '../pages/Bug-1-2';
import CodeSorter from '../pages/Sorter-1-3';
import Module2 from '../pages/Module2';
import CodeMazeExample from '../pages/Maze1';

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
        <Route path="/modules/1" element={<SelectLevel />} />
        <Route path="/maxgame" element={<Maxgame />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/bugcatcher" element={<BugCatcher />} />
        <Route path="/sorter" element={<CodeSorter />} />
        <Route path="/modules/2" element={<Module2 />} />
        <Route path="/maze" element={<CodeMazeExample />} />
        <Route path="/modules/:moduleId/levels/:levelId" element={<Levelm />} />
        {/* Otras rutas */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
