"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pageFavoriteController;
// Local Storage
const functions_localstorage_js_1 = require("./../../utilities/functions-localstorage.js");
// Funciones Logicas
const functions_crud_logic_js_1 = require("./functions/functions-crud-logic.js");
function pageFavoriteController() {
    console.log('Saludos desde pageFavoriteMain');
    if (document.querySelector('#PageFavorites #ContenedorLista')) {
        const listaInicial = (0, functions_localstorage_js_1.leerDatoLS)('lista-cache-productos-favoritos') || [];
        (0, functions_crud_logic_js_1.imprimirLista)(listaInicial);
    }
}
