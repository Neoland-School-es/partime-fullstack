import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Store
import store from "./store/store";
import { inicializarCargaProductos } from "./slices/productosSlice";
// Router
import { enrutador } from "./routers/router";

function main() {
  inicializarCargaDeDatos();
  enrutador();
}

function inicializarCargaDeDatos() {
  store.dispatch(inicializarCargaProductos());
}

document.addEventListener('DOMContentLoaded', main);