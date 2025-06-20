import store from "./../../store/store";
// Funciones Logicas
import { imprimirLista } from './functions/functions-crud-logic';
// Funciones CRUD Ventanas Modales
import { formularioModalCrearProducto } from './functions/functions-crud-modal';
// Funciones CRUD en linea
import { inlineActualizarProducto, inlineEliminarProducto } from './functions/functions-crud-inline';
// Funciones CRUD Ventanas Modales
import { formularioModalActualizarProducto, formularioModalEliminarProducto } from './functions/functions-crud-modal';

export default function pageHomeController() {
    console.log('Saludos desde pageHomeMain');

    const listaInicial = store.getState().productos;

    console.log(store.getState().productos)
    console.log(listaInicial)

    formularioModalCrearProducto();

    if (document.querySelector('#PageHome #ContenedorLista')) {
        imprimirLista(listaInicial);

        inlineActualizarProducto();
        inlineEliminarProducto();

        formularioModalActualizarProducto(listaInicial);
        formularioModalEliminarProducto(listaInicial);
    }
}
