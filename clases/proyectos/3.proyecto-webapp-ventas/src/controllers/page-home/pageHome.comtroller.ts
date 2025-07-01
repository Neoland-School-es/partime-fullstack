// tipos
import type { IProducto } from '../../types/types';
// store
import store from './../../store/store';
// import { cargarProductos } from "./../../slices/productosSlice";
import { agregarProductoCarrito } from "./../../slices/carritoSlice";
// Utilidades
import { cerrarModal } from '../../utilities/functions-bootstrap';

export default function pageHomeController() {
    // mostrar la lista vacía
    console.log("estado:")
    console.log(store.getState().productos.productos)
    imprimitContenedorLista(store.getState().productos.productos);

    // pendiente a los cambios de la store
    store.subscribe(() => {
        imprimitContenedorLista(store.getState().productos.productos);
    });

    formularioModalCrearProducto();
}

function imprimitContenedorLista(pLista: IProducto[]) {
    const contenedorLista = document.querySelector("#ContenedorLista ul");
    if (!contenedorLista) {
        return;
    }

    contenedorLista.className = 'd-flex flex-column gap-4';
    contenedorLista.innerHTML = '';

    if (pLista.length === 0) {
        const item = document.createElement("li")
        item.className = "text-white"
        item.innerHTML = "lista vacía"
        contenedorLista.appendChild(item);
    }

    for (let i = 0; i < pLista.length; i++) {
        const itemLista = document.createElement("li");
        itemLista.className = "d-flex gap-4 justify-content-between bg-secondary py-2 px-4"

        const textoItemLista = document.createElement("span");
        textoItemLista.textContent = pLista[i].nombre
        textoItemLista.classList = "h3"

        const btnCompra = document.createElement("button")
        btnCompra.textContent = `comprar ${pLista[i].id}`
        btnCompra.classList = 'btn btn-primary'

        btnCompra.addEventListener("click", function () {
            store.dispatch(agregarProductoCarrito(pLista[i].id))
        })


        itemLista.appendChild(textoItemLista)
        itemLista.appendChild(btnCompra)

        contenedorLista.appendChild(itemLista);
    }
    // contenedorLista.appendChild(crearItemLista(i, pLista[i]));
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

        // store.dispatch(cargarProductos({ nombre: campoProducto.value, precio: 100 }));
        // imprimirLista(nuevaLista);

        campoProducto.value = '';
        cerrarModal('#ModalCrearProducto');
    });
}
