import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './paginas/Homepage';
import About from './paginas/About';
function App() {
  return (
    <div className="App">

<BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutme" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
