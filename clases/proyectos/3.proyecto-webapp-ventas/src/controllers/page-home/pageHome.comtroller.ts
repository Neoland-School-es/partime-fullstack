// tipos
import type { IProducto } from '../../types/types';
// store
import store from './../../store/store';
import { agregarProducto, actualizarProducto } from "./../../slices/productosSlice";
// funciones para este controlador
import { crearItemLista } from './fnItemList';
// Utilidades
import { cerrarModal } from '../../utilities/functions-bootstrap';

export default function pageHomeController() {
    // mostrar la lista vacía
    imprimitContenedorLista(store.getState().productos);

    // pendiente a los cambios de la store
    store.subscribe(() => {
        imprimitContenedorLista(store.getState().productos);
    });

    formularioModalCrearProducto();

    store.dispatch(actualizarProducto({id: 1750926319120, nombre: "nuevo pj", precio: 14}))
}

function imprimitContenedorLista(pLista: IProducto[]) {
    const contenedorLista = document.querySelector("#ContenedorLista ul");
    if (!contenedorLista) {
        return;
    }

    contenedorLista.innerHTML = '';

    if (pLista.length === 0) {
        const item = document.createElement("li")
        item.innerHTML = "lista vacía"
        contenedorLista.appendChild(item);
    }

    for (let i = 0; i < pLista.length; i++) {
        contenedorLista.appendChild(crearItemLista(i, pLista[i]));
    }
}

function formularioModalCrearProducto(): void {
    const formulario = document.querySelector<HTMLFormElement>('#ModalCrearProducto form');
    if (!formulario) {
        alert('No existe el formulario');
        return;
    }

    formulario.addEventListener('submit', (event: Event) => {
        event.preventDefault();

        const campoProducto = document.querySelector<HTMLInputElement>('#ModalCrearProducto #NombreProducto');
        if (!campoProducto) {
            alert('El formulario no tiene campos');
            return;
        }

        store.dispatch(agregarProducto({ nombre: campoProducto.value, precio: 100 }));
        // imprimirLista(nuevaLista);

        campoProducto.value = '';
        cerrarModal('#ModalCrearProducto');
    });
}
