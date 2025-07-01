// Local Storage
// import { leerDatoLS } from './../../utilities/functions-localstorage';
// Funciones Logicas
// import { imprimirLista } from './functions/functions-crud-logic';

import { leerDatoLS } from "../../utilities/functions-localstorage";

// export function renderizarLista(lista = []) {
//     imprimirLista(lista);
// }

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
        const listaInicial = leerDatoLS('lista-cache-carrito-productos') || [];


        const contenedorLista = document.querySelector("#ContenedorLista .list-group")
        if (!contenedorLista) {
            return
        }



        for (let i = 0; i < listaInicial.length; i++) {
            const itemLista = document.createElement("li");
            itemLista.className = "d-flex gap-4 justify-content-between bg-secondary py-2 px-4"

            const textoItemLista = document.createElement("span");
            textoItemLista.textContent = listaInicial[i]
            textoItemLista.classList = "h3"

            itemLista.appendChild(textoItemLista)

            contenedorLista.appendChild(itemLista);
        }
    }
}