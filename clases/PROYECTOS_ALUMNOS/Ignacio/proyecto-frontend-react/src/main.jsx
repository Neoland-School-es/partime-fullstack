import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router";
import './index.css';
import App from './App.jsx';
import { ProductosProvider } from './context/Productos.context.jsx';
import { CartProvider } from './context/Cart.context.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ProductosProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductosProvider>
  </BrowserRouter>,
)
