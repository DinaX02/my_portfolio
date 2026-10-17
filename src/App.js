import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Homepage from './paginas/Homepage';
import About from './paginas/About';
import Project1 from './paginas/Proj_1';
import Project2 from './paginas/Proj_2';
import Project3 from './paginas/Proj_3';
import Project4 from './paginas/Proj_4';
import Project5 from './paginas/Proj_5';
import Project6 from './paginas/Proj_6';
import Projetoss from './paginas/Projetos';
import ScrollToTop from './components/scrollstart';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="App">
      {/* reducedMotion="user" desliga as animações para quem tem "reduzir movimento" ativo */}
      <MotionConfig reducedMotion="user">
        <a className="skip-link" href="#conteudo">Saltar para o conteúdo</a>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/aboutme" element={<About />} />
            <Route path="/project-Koru" element={<Project1/>} />
            <Route path="/project2" element={<Project2 />} />
            <Route path="/project3" element={<Project3 />} />
            <Route path="/project-Boomerang" element={<Project4 />} />
            <Route path="/project-ToCare" element={<Project5/>} />
            <Route path="/project-UXToolkit" element={<Project6/>} />
            <Route path="/projetos" element={<Projetoss />} />
            {/* endereço antigo continua a funcionar */}
            <Route path="/projectsss" element={<Navigate to="/projetos" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <BackToTop />
        </BrowserRouter>
      </MotionConfig>
    </div>
  );
}

export default App;
