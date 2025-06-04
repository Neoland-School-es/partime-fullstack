// Funciones CRUD en linea
import { inlineActualizarProducto, inlineEliminarProducto } from './functions-crud-inline.js';
// Funciones CRUD Ventanas Modales
import { modalActualizarProducto, modalEliminarProducto } from './functions-crud-modal.js';
// Funciones eventos botones CRUD
import { crearItemLista, activarBotonesCompra } from './functions-element-list-scripts.js';

export function imprimirLista(lista = []) {
    const contenedorLista = document.querySelector('#ContenedorLista .list-group');
    contenedorLista.innerHTML = '';

    for (let i = 0; i < lista.length; i++) {
        const itemLista = crearItemLista(i, lista[i]);
        contenedorLista.appendChild(itemLista);
    }

    inlineActualizarProducto(lista);
    inlineEliminarProducto(lista);

    modalActualizarProducto(lista);
    modalEliminarProducto(lista);

    activarBotonesCompra(lista);
}

export function crearProductoLista(pLista = [], pNombre = '') {
    if (pNombre.trim() === '') {
        console.error('El texto no puede estar vacío.');
        return (pLista);
    }

    const nuevaTarea = {
        id: new Date().getTime() - 1745507700000,
        name: pNombre.trim()
    };

    pLista.push(nuevaTarea);

    return (pLista);
}

// Función para obtener una tarea por ID
// export function obtenerTarea(listaTareas = [], idTarea = 0) {
//     const tarea = listaTareas.find(t => t.id === idTarea);
//     if (!tarea) {
//         console.error('Tarea no encontrada');
//     }
//     return tarea;
// }

export function actualizarTarea(lista = [], idTarea = 0, nuevoTexto = '') {
    const tarea = lista.find(t => t.id === idTarea);

    if (!tarea) {
        console.error('Tarea no encontrada');
        return lista;
    }

    if (nuevoTexto.trim() !== '') {
        tarea.name = nuevoTexto.trim();
    }

    return lista;
}

export function eliminarTarea(listaTareas = [], idTarea = 0) {
    const nuevaLista = listaTareas.filter(t => t.id !== idTarea);

    if (nuevaLista.length === listaTareas.length) {
        console.error('Tarea no encontrada');
    }

    return nuevaLista;
}
