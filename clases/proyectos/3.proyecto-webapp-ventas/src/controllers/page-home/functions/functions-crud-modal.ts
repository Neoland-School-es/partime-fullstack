// Store
import store from "./../../../store/store";
import { eliminarProducto, actualizarProducto, agregarProducto } from "./../../../slices/productsSlice";
// Funciones CRUD Lógicas
// import { crearProductoLista, imprimirLista, actualizarTarea, eliminarTarea } from './functions-crud-logic';

import type { IProducto } from '../../../types/types';
// Utilidades
import { cerrarModal } from './../../../utilities/functions-bootstrap';

export function formularioModalCrearProducto(): void {
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

        store.dispatch(agregarProducto(campoProducto.value));
        // imprimirLista(nuevaLista);

        campoProducto.value = '';
        cerrarModal('#ModalCrearProducto');
    });
}

export function formularioModalActualizarProducto(pLista: IProducto[] = []): void {
    const listaBtnEditar = document.querySelectorAll<HTMLButtonElement>('#ContenedorLista .btn-editar');

    if (!listaBtnEditar.length) return;

    listaBtnEditar.forEach((btnEditar) => {
        btnEditar.addEventListener('click', () => {
            const idSeleccionado = parseInt(btnEditar.dataset.id || '0');

            const productoSeleccionado = pLista.find((producto) => (producto.id === idSeleccionado));
            if (!productoSeleccionado) return;

            const campoNombre = document.querySelector<HTMLInputElement>('#ModalEditarProducto form #NombreProducto');
            if (campoNombre) campoNombre.value = productoSeleccionado.nombre;

            const modalEditar = document.querySelector<HTMLDivElement>('#ModalEditarProducto');
            if (modalEditar) modalEditar.dataset.id = productoSeleccionado.id.toString();

            const formulario = document.querySelector<HTMLFormElement>('#ModalEditarProducto form');
            if (formulario) {
                formulario.addEventListener('submit', (event: Event) => {
                    event.preventDefault();

                    const textoEditado = campoNombre?.value || '';

                    store.dispatch(actualizarProducto({
                        id: idSeleccionado,
                        nombre: textoEditado,
                        precio: 1
                    }));

                    cerrarModal('#ModalEditarProducto');
                    // imprimirLista(listaActualizada);
                });
            }
        });
    });
}

export function formularioModalEliminarProducto(pLista: IProducto[] = []): void {
    const listaBtnEliminar = document.querySelectorAll<HTMLButtonElement>('#ContenedorLista .btn-eliminar');

    if (!listaBtnEliminar.length) return;

    listaBtnEliminar.forEach((btnEliminar) => {
        btnEliminar.addEventListener('click', () => {
            const idSeleccionado = parseInt(btnEliminar.dataset.id || '0');

            const productoSeleccionado = pLista.find((producto) => producto.id === idSeleccionado);
            if (!productoSeleccionado) return;

            const tareaElegida = document.querySelector<HTMLSpanElement>('#TareaElegida');
            if (tareaElegida) tareaElegida.textContent = productoSeleccionado.nombre;

            const deleteTaskModal = document.querySelector<HTMLDivElement>('#deleteTaskModal');
            if (deleteTaskModal) deleteTaskModal.dataset.id = productoSeleccionado.id.toString();

            const formulario = document.querySelector<HTMLFormElement>('#deleteTaskModal form');
            if (formulario) {
                formulario.addEventListener('submit', (event: Event) => {
                    event.preventDefault();

                    store.dispatch(eliminarProducto(idSeleccionado));
                    cerrarModal('#deleteTaskModal');
                    // imprimirLista(listaFiltrada);
                });
            }
        });
    });
}
