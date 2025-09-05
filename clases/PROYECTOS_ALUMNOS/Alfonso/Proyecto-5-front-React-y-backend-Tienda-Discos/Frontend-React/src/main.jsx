import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router";
import './index.css';
import "./styles.css";
import App from './App.jsx';
import { ProductosProvider } from './context/Productos.context.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ProductosProvider>
      <App />
    </ProductosProvider>
  </BrowserRouter>,
)
