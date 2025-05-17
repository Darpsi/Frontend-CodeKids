import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/login/Login';
import Register from '../pages/Register';
import Home from '../pages/home/Home';
import Modules from '../pages/modules/Modules';
import Level from '../pages/exams/quiz';
import RecoverPassword from '../pages/login/Forgot-password';
import VerifyToken from '../pages/login/Verify-token';
import ResetPassword from '../pages/login/Reset-password';
import Perfil from "../pages/Perfil";
import SelectLevel from "../pages/modules/SelectLevel";
import Maxgame from "../pages/minigames/Maxgame";
import Exam from "../pages/exams/Exam";
import Levelm from '../pages/modules/Levelm';
import BugCatcher from '../pages/minigames/Bug-1-2';
import CodeSorter from '../pages/minigames/Sorter-1-3';
import CodeMazeExample from '../pages/minigames/Maze1';
import Admin from '../pages/admin/Admin';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/modules" element={<Modules/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/quiz/:moduleid" element={<Level/>} />
        <Route path="/forgot-password" element={<RecoverPassword />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/verify-token" element={<VerifyToken />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/modules/:moduleId" element={<SelectLevel />} />
        <Route path="/maxgame" element={<Maxgame />} />
        <Route path="/exam/:moduleId" element={<Exam />} />
        <Route path="/minigame/:moduleid/catcher" element={<BugCatcher />} />
        <Route path="/minigame/:moduleid/sorter" element={<CodeSorter />} />
        <Route path="/minigame/:moduleid/maze" element={<CodeMazeExample />} />
        <Route path="/modules/:moduleId/levels/:levelId" element={<Levelm />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
