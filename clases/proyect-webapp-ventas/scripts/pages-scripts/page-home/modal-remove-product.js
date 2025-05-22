// Funciones Logicas
import { eliminarTarea } from './../../scripts-crud/script-crud-logic.js';
// LocalStorage
import { crearDatoLS } from './../../localstorage/functions-localstorage.js';
// Utilidades
import { cerrarModal } from './../../utilities/bootstrap-functions.js';

export function ModalEliminarProducto(pLista = [], renderizarLista = function () { }) {
    const listaBtnEliminar = document.querySelectorAll('#ContenedorLista .btn-eliminar') || [];
    if (listaBtnEliminar.length) {
        for (let index = 0; index < listaBtnEliminar.length; index++) {
            listaBtnEliminar[index].addEventListener('click', function () {
                const idSeleccionado = parseInt(listaBtnEliminar[index].dataset.id);

                for (let i = 0; i < pLista.length; i++) {
                    if (pLista[i].id === idSeleccionado) {
                        document.querySelector('#TareaElegida').textContent = pLista[i].name;
                        document.querySelector('#deleteTaskModal').dataset.id = pLista[i].id;
                    }
                }

                const formEliminar = document.querySelector('#deleteTaskModal form');
                formEliminar.addEventListener('submit', function (event) {
                    event.preventDefault();

                    const listaFiltrada = eliminarTarea(pLista, idSeleccionado);
                    crearDatoLS('lista-tareas', listaFiltrada);
                    cerrarModal('#deleteTaskModal');
                    renderizarLista(listaFiltrada);
                });
            });
        }
    }
}
