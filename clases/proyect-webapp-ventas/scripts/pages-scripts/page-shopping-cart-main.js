// Local Storage
import { leerDatoLS } from './../../scripts/localstorage/functions-localstorage.js';
// Funciones Logicas
import { imprimirLista } from './../../scripts/scripts-crud/script-crud-logic.js';

export function renderizarLista(lista = []) {
    imprimirLista(lista);
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

export default function pageShoppingCartMain() {
    console.log("Saludos desde pageShoppingCartMain")

    if (document.querySelector('#PageShoppingCard')) {
        const listaInicial = leerDatoLS('lista-tareas') || [];
        renderizarLista(listaInicial);
    }
}