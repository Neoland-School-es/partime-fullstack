// Funciones Logicas
import { actualizarTarea } from './../../scripts-crud/script-crud-logic.js';
// LocalStorage
import { crearDatoLS } from './../../localstorage/functions-localstorage.js';
// Utilidades
import { cerrarModal } from './../../utilities/bootstrap-functions.js';

export function ModalActualizarProducto(pLista = [], renderizarLista = function () { }) {
    const listaBtnEditar = document.querySelectorAll('#ContenedorLista .btn-editar') || [];
    if (listaBtnEditar.length) {
        for (let index = 0; index < listaBtnEditar.length; index++) {
            listaBtnEditar[index].addEventListener('click', function () {
                const idSeleccionado = parseInt(listaBtnEditar[index].dataset.id);

                for (let i = 0; i < pLista.length; i++) {
                    if (pLista[i].id === idSeleccionado) {
                        document.querySelector('#editTaskModal form [name="editTaskText"]').value = pLista[i].name;
                        document.querySelector('#editTaskModal').dataset.id = pLista[i].id;
                    }
                }

                const formEditar = document.querySelector('#editTaskModal form');
                formEditar.addEventListener('submit', function (event) {
                    event.preventDefault();

                    const textoEditado = document.querySelector('[name="editTaskText"]').value;
                    const listaActualizada = actualizarTarea(pLista, idSeleccionado, textoEditado);
                    crearDatoLS('lista-tareas', listaActualizada);
                    cerrarModal('#editTaskModal');
                    renderizarLista(pLista);
                });
            });
        }
    }
}
