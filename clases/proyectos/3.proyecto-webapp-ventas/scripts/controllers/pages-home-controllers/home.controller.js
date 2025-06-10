"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = homeController;
// Base de Datos | Datos Locales | Datos de prueba
const producto_model_js_1 = require("./../../models/producto.model.js");
// Local Storage
const functions_localstorage_js_1 = require("./../../utilities/functions-localstorage.js");
// Funciones Logicas
const functions_crud_logic_js_1 = require("./functions/functions-crud-logic.js");
// Funciones CRUD Ventanas Modales
const functions_crud_modal_js_1 = require("./functions/functions-crud-modal.js");
// Funciones CRUD en linea
// import { inlineCrearProducto} from './functions/functions-crud-inline.js';
function homeController() {
    console.log('Saludos desde pageHomeMain');
    const listaInicial = (0, functions_localstorage_js_1.leerDatoLS)('lista-cache-productos') || (0, producto_model_js_1.obtenerProductosLocales)() || [];
    (0, functions_localstorage_js_1.crearDatoLS)('lista-cache-productos', listaInicial);
    (0, functions_crud_modal_js_1.modalCrearProducto)(listaInicial);
    // inlineCrearProducto(listaInicial);
    if (document.querySelector('#PageHome #ContenedorLista')) {
        (0, functions_crud_logic_js_1.imprimirLista)(listaInicial);
    }
}
