import { Routes, Route } from "react-router";
// Layout
import PlantillaPagina from "./components/layouts/PlantillaPagina";
// Pages
import PaginaInicio from "./pages/inicio/PaginaInicio";
import PanelControl from "./pages/panel-control/PanelControl";
import Producto from "./pages/producto/Producto";

function App() {
  return (
    <PlantillaPagina>
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/panel-control" element={<PanelControl />} />
        <Route path="/productos/:id" element={<Producto />} />
      </Routes>
    </PlantillaPagina>
  )
}

export default App
