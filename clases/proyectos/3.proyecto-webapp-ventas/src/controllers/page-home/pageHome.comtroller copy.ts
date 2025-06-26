import type { IProducto } from '../../types/types';

// Modelo directo (sin Redux)
import {
    obtenerTodosLosProductosBBDD,
    crearProductoBBDD
} from '../../models/productos.model';

import { crearItemLista } from './fnItemList';
import { cerrarModal } from '../../utilities/functions-bootstrap';

export default async function pageHomeController() {
    const productos = await obtenerTodosLosProductosBBDD();
    imprimitContenedorLista(productos);

    formularioModalCrearProducto();
}

function imprimitContenedorLista(pLista: IProducto[]) {
    const contenedorLista = document.querySelector("#ContenedorLista ul");
    if (!contenedorLista) return;

    contenedorLista.innerHTML = '';

    if (pLista.length === 0) {
        const item = document.createElement("li");
        item.textContent = "lista vacía";
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

    formulario.addEventListener('submit', async (event: Event) => {
        event.preventDefault();

        const campoProducto = document.querySelector<HTMLInputElement>('#ModalCrearProducto #NombreProducto');
        if (!campoProducto) {
            alert('El formulario no tiene campos');
            return;
        }

        try {
            await crearProductoBBDD(campoProducto.value, 100);
            const productosActualizados = await obtenerTodosLosProductosBBDD();
            imprimitContenedorLista(productosActualizados);
        } catch (error) {
            alert("Error al crear producto: " + error);
        }

        campoProducto.value = '';
        cerrarModal('#ModalCrearProducto');
    });
}
