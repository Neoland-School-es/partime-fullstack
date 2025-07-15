// Bootstrap JS
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Modelo
import { iniciarCreacionBBDD } from './models/sistema.model';
// import { iniciarCreacionBBDD } from './models/sistema.model';
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

// function iniciarDatosPrueba() {
//   inicializarDatosPruebaProductosIndexDB();
//   inicializarDatosPruebaUsuariosIndexDB();
//   inicializarDatosPruebaProductosLocalStorage();
//   inicializarDatosPruebaUsuariosLocalStorage();
// }

function inicializarCargaDatosUI() {
  enrutador();
  inicializarBarraNavegacion();
}

async function main() {
  iniciarCreacionBBDD(); // destruirBBDD();
  // iniciarDatosPrueba(); // test productos y usuarios prueba
  iniciarCargaDatosBBDD();


  inicializarCargaDatosUI();


  console.log("fin de la aplicación!!!")
}

document.addEventListener('DOMContentLoaded', main);







// try {
//   const datosJSON = await fetch("http://localhost:3003/")

//   const datos = await datosJSON.json();

//   console.log(datos)


// } catch (error) {
//   return error
// }
// function iniciarDatosPrueba() {
//   throw new Error('Function not implemented.');
// }
