// Funciones Logicas
import { actualizarTarea } from './../scripts-crud/script-crud-logic.js';
// Funciones LocalStorage
import { crearDatoLS, leerDatoLS } from './../localstorage/functions-localstorage.js';

export function formularioPaginaEditar(tareas = []) {
    console.log("Saludos desde formularioPaginaEditar");

    const params = new URLSearchParams(window.location.search);
    const idTarea = parseInt(params.get('id'));

    const tarea = tareas.find((t) => { return (t.id === idTarea) });

    if (tarea) {
        document.querySelector('#editTaskPage form [name="editTaskText"]').value = tarea.name;
    }

    const formEditar = document.querySelector('#editTaskPage form');
    if (formEditar) {
        formEditar.addEventListener('submit', function (event) {
            event.preventDefault();

            const textoEditado = document.querySelector('#editTaskPage form [name="editTaskText"]').value;
            const nuevaLista = actualizarTarea(tareas, idTarea, textoEditado)

            crearDatoLS('lista-tareas', nuevaLista);
            leerDatoLS('lista-tareas');

            alert('Elemento editado exitosamente');
            window.location.href = '../index.html';
        });
    }
}