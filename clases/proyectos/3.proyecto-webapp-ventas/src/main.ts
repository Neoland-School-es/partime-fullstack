// Bootstrap JS
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Modelo
import { iniciarCreacionBBDD, inicializarDatosPruebaProductosIndexDB, inicializarDatosPruebaProductosLocalStorage, inicializarDatosPruebaUsuariosIndexDB, destruirBBDD, inicializarDatosPruebaUsuariosLocalStorage } from './models/sistema.model';
// Store
import store from './store/store';
import { inciarEstadoCarrito } from './slices/carritoSlice';
import { cargarProductosBBDDIndexDB, cargarProductosBBDDLocalStorage } from './slices/productosSlice';
import { cargarUsuarioCookie } from './slices/userSlice';
// Enrutadores
import { enrutador } from './routers/router';
// UIs
import { inicializarBarraNavegacion } from './controllers/navbar/navbar.controller';

function iniciarCargaDatosBBDD() {
  store.dispatch(cargarProductosBBDDIndexDB());
  store.dispatch(cargarProductosBBDDLocalStorage());
  store.dispatch(cargarUsuarioCookie());
  store.dispatch(inciarEstadoCarrito());
}

function iniciarDatosPrueba() {
  inicializarDatosPruebaProductosIndexDB();
  inicializarDatosPruebaUsuariosIndexDB();
  inicializarDatosPruebaProductosLocalStorage();
  inicializarDatosPruebaUsuariosLocalStorage();
}

function inicializarCargaDatosUI() {
  enrutador();
  inicializarBarraNavegacion();
}

function main() {
  iniciarCreacionBBDD(); // destruirBBDD();
  // iniciarDatosPrueba(); // test productos y usuarios prueba
  iniciarCargaDatosBBDD();

  inicializarCargaDatosUI();
}

document.addEventListener('DOMContentLoaded', main);