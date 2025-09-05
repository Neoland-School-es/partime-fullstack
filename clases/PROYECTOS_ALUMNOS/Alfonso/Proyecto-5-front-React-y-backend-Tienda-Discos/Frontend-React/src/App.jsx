import { Routes, Route } from "react-router";
// Layout
import PlantillaPagina from "./components/layouts/PlantillaPagina";
// Pages
import PaginaInicio from "./pages/inicio/PaginaInicio";
import PanelControl from "./pages/panel-control/PanelControl";
import Producto from "./pages/producto/Producto";
import Desarrollador from "./pages/desarrollador/Desarrollador"

function App() {
  return (
    <PlantillaPagina>
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/panel-control" element={<PanelControl />} />
        <Route path="/productos/:id" element={<Producto />} />
        <Route path="/desarrollador" element={<Desarrollador />} />
      </Routes>
    </PlantillaPagina>
  )
}

export default App
