// Funciones Logicas
import { agregarTarea } from './../../scripts-crud/script-crud-logic.js';
// LocalStorage
import { crearDatoLS } from './../../localstorage/functions-localstorage.js';
// Utilidades
import { cerrarModal } from './../../utilities/bootstrap-functions.js';

export function ModalCrearProducto(pLista = [], renderizarLista = function () { }) {
    const formCrear = document.querySelector('#ModalCrear form');
    if (formCrear) {
        formCrear.addEventListener('submit',
            function (event) {
                event.preventDefault();

                const nuevoItem = document.querySelector('[name="nameProduct"]').value;
                const nuevaLista = agregarTarea(pLista, nuevoItem);
                crearDatoLS('lista-tareas', nuevaLista);
                cerrarModal('#ModalCrear');
                renderizarLista(pLista);
            }
        );
    }
}