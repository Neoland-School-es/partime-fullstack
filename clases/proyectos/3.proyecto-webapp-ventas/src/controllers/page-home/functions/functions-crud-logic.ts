import type { IProducto } from '../../../types/types';
// Funciones eventos botones CRUD
import { crearItemLista, activarBotonesCompra } from './functions-element-list-scripts';

export function imprimirLista(pLista: IProducto[] = []) {
    const contenedorLista = document.querySelector<HTMLUListElement>('#ContenedorLista .list-group');
    if (!contenedorLista) {
        return;
    }

    contenedorLista.innerHTML = '';

    for (let i = 0; i < pLista.length; i++) {
        const itemLista = crearItemLista(i, pLista[i]);
        contenedorLista.appendChild(itemLista);
    }

    activarBotonesCompra(pLista);
}

// export function crearProductoLista(pLista = [], pNombre = '') {
//     if (pNombre.trim() === '') {
//         console.error('El texto no puede estar vacío.');
//         return (pLista);
//     }

//     const nuevoElemento = {
//         id: new Date().getTime() - 1745507700000,
//         nombre: pNombre.trim(),
//         precio: 100,
//     };

//     pLista.push(nuevoElemento);

//     crearDatoLS(LS_LISTA_PRODUCTOS, pLista);

//     return (pLista);
// }

// export function actualizarTarea(plista = [], idProducto = 0, nuevoTexto = '') {
//     const tarea = plista.find(producto => producto.id === idProducto);

//     if (!tarea) {
//         alert('Elemento no encontrado');
//         return plista;
//     }

//     if (nuevoTexto.trim() !== '') {
//         tarea.nombre = nuevoTexto.trim();
//     }

//     crearDatoLS(LS_LISTA_PRODUCTOS, plista);

//     return plista;
// }

// export function eliminarTarea(pLista = [], idProducto = 0) {
//     const nuevaLista = pLista.filter((producto) => (producto.id !== idProducto));

//     if (nuevaLista.length === pLista.length) {
//         alert('Tarea no encontrada');
//     }

//     crearDatoLS(LS_LISTA_PRODUCTOS, nuevaLista);

//     return nuevaLista;
// }
