import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './paginas/Homepage';
import About from './paginas/About';
import Project1 from './paginas/Proj_1';
import Project2 from './paginas/Proj_2';
import Project3 from './paginas/Proj_3';
import Projetoss from './paginas/Projetos';
import ScrollToTop from './components/scrollstart';

function App() {
  return (
    <div className="App">

<BrowserRouter>
<ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/project1" element={<Project1/>} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
          <Route path="/projectsss" element={<Projetoss />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
