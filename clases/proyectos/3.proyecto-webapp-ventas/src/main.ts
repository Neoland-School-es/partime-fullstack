// Base de Datos
import { abrirBase } from './utilities/functions-indexDB';
// Enrutadores
import { enrutador } from './routers/router';
// UIs
import { navBar } from './controllers/navbar/navbar.controller';
// Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Store
// import store from './store/store';
import { cargarProductos } from './slices/productosSlice';
// import { inicializarDatosPruebaUsuariosIndexDB } from './models/usuario.model';
// import { inicializarDatosPruebaProductosIndexDB } from './models/productos.model';
import store from './store/store';
import { inciarEstadoCarrito } from './slices/carritoSlice';

function main() {
  abrirBase("MY-BBDD", 1, ["PRODUCTOS", "USUARIOS"]);
  // inicializarDatosPruebaUsuariosIndexDB(); // solo test
  // inicializarDatosPruebaProductosIndexDB(); // solo test
  store.dispatch(cargarProductos());
  store.dispatch(inciarEstadoCarrito());
  enrutador();
  navBar();
}

document.addEventListener('DOMContentLoaded', main);