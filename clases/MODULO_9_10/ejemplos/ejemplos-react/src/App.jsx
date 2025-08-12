import { Routes, Route, Link } from "react-router";
import PaginaEjemploUseState from "./pages/PaginaEjemploUseState";
import PaginaEjemploUseEffect from "./pages/PaginaEjemploUseEffect";
import PaginaEjemploAxiosFetch from "./pages/PaginaEjemploAxiosFetch";
import PaginaEjemploFormulario from "./pages/PaginaEjemploFormulario";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/use-state">useState</Link>
        <Link to="/formularios">formularios</Link>
        <Link to="/use-effect">useEffect</Link>
        <Link to="/axios">Axios</Link>
      </nav>

      <Routes>
        <Route path="/" element={<PaginaEjemploUseState />} />
        <Route path="/use-state" element={<PaginaEjemploUseState />} />
        <Route path="/formularios" element={<PaginaEjemploFormulario />} />
        <Route path="/use-effect" element={<PaginaEjemploUseEffect />} />
        <Route path="/axios" element={<PaginaEjemploAxiosFetch />} />
      </Routes>
    </>
  )
}

export default App
