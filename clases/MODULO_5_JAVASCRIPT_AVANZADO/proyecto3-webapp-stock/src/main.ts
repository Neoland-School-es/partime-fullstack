// dasd
import { inicializarIndexDDBB } from './models/productos.model';
import { inicializarCookieUsuario } from './models/usuario.model';
import { inicializarLocalStorageCarritoCompras } from './models/carrito.model';
// Store
import store from './store/store';
import { cargarUsuario } from './slices/userSlice';
import { cargarCarrito } from './slices/carritoSlice';
import { crearProducto, cargarProductos } from './slices/productosSlice';
// Enrutador
import { cargarEnrutador } from './routers/router';
// UIs
import { cargarBarraNavegacion } from './controllers/navbar/navbar.controller';

function iniciarCrearBBDD() {
  inicializarCookieUsuario();
  inicializarIndexDDBB();
  inicializarLocalStorageCarritoCompras();
}

function iniciarCargaDatos() {
  store.dispatch(cargarUsuario());
  store.dispatch(cargarProductos());
  store.dispatch(cargarCarrito());
}

function iniciarCargaDatosUI() {
  cargarEnrutador();
  cargarBarraNavegacion();
}

async function main() {
  iniciarCrearBBDD()

  iniciarCargaDatos();

  iniciarCargaDatosUI();

  // store.dispatch(crearProducto({ nombre: "carros", precio: 123 }))

  console.log("fin de la aplicación!!!")
}

document.addEventListener('DOMContentLoaded', main);