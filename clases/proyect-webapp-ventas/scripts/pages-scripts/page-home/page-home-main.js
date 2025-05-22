// Base de Datos | Datos Locales | Datos de prueba
import { datosTareasBBDD } from './../../database/data-task.js';
// Local Storage
import { crearDatoLS, leerDatoLS } from './../../localstorage/functions-localstorage.js';
// Funciones Logicas
import { imprimirLista } from './../../scripts-crud/script-crud-logic.js';
// Funciones CRUD en linea
import { inlineCrearProducto } from './inline-create-product.js';
import { inlineEliminarProducto } from './inline-remove-product.js';
import { inlineActualizarProducto } from './inline-update-product.js';
// Funciones CRUD Ventanas Modales
import { ModalCrearProducto } from './modal-create-product.js';
import { ModalEliminarProducto } from './modal-remove-product.js';
import { ModalActualizarProducto } from './modal-update-product.js';

export function renderizarLista(lista = []) {
    imprimirLista(lista);

    inlineCrearProducto(lista, renderizarLista);
    inlineEliminarProducto(lista, renderizarLista);
    inlineActualizarProducto(lista, renderizarLista);

    ModalCrearProducto(lista, renderizarLista);
    ModalEliminarProducto(lista, renderizarLista);
    ModalActualizarProducto(lista, renderizarLista);
}

export default function pageHomeMain() {
    console.log("Saludos desde pageHomeMain")

    if (document.querySelector('#PageHome #ContenedorLista')) {
        const listaInicial = leerDatoLS('lista-tareas') || datosTareasBBDD || [];
        crearDatoLS('lista-tareas', listaInicial);
        renderizarLista(listaInicial);
    }
}