import { Routes, Route } from "react-router";
// Layout
import PlantillaPagina from "./components/layouts/PlantillaPagina";
// Pages
import PaginaInicio from "./pages/inicio/PaginaInicio";
import PanelControl from "./pages/panel-control/PanelControl";
import Producto from "./pages/producto/Producto";
import PaginaContacto from "./pages/contacto/PaginaContacto";
import PaginaCarrito from "./pages/carrito/PaginaCarrito";


function App() {
  return (
    <PlantillaPagina>
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/panel-control" element={<PanelControl />} />
        <Route path="/productos/:id" element={<Producto />} />
        <Route path="/contacto" element={<PaginaContacto />} />
        <Route path="/carrito" element={<PaginaCarrito />} />
      </Routes>
    </PlantillaPagina>
  )
}

export default App
