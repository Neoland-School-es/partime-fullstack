"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderizarLista = renderizarLista;
exports.default = pageShoppingCartMain;
// Local Storage
const functions_localstorage_js_1 = require("./../../utilities/functions-localstorage.js");
// Funciones Logicas
const functions_crud_logic_js_1 = require("./functions/functions-crud-logic.js");
function renderizarLista(lista = []) {
    (0, functions_crud_logic_js_1.imprimirLista)(lista);
}
// function iniciarEventosLista(lista = []) {
//     const btnClearLS = document.querySelector('#btnClearLS');
//     if (btnClearLS) {
//         btnClearLS.addEventListener('click', function () {
//             limpiarLocalStorage();
//             renderizarLista();
//         });
//     }
// }
function pageShoppingCartMain() {
    console.log("Saludos desde pageShoppingCartMain");
    if (document.querySelector('#PageShoppingCard')) {
        const listaInicial = (0, functions_localstorage_js_1.leerDatoLS)('lista-cache-carrito-productos') || [];
        renderizarLista(listaInicial);
    }
}
