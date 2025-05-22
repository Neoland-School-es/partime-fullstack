// Funciones Logicas
import { eliminarTarea } from './../scripts-crud/script-crud-logic.js';
// Funciones LocalStorage
import { crearDatoLS } from './../localstorage/functions-localstorage.js';


export function formularioPaginaEliminar(tareas = []) {
    console.log("Saludos desde formularioPaginaEliminar");

    const parametrosURL = new URLSearchParams(window.location.search);
    const idTarea = parseInt(parametrosURL.get('id'));

    for (let index = 0; index < tareas.length; index++) {
        if (tareas[index].id === idTarea) {
            document.querySelector('#TareaElegida').textContent = tareas[index].name;
        }
    }

    const formEliminar = document.querySelector('#deleteTaskPage form');
    if (formEliminar) {
        formEliminar.addEventListener('submit', function (event) {
            event.preventDefault();

            const nuevaLista = eliminarTarea(tareas, idTarea)
            crearDatoLS('lista-tareas', nuevaLista);

            alert('Elemento eliminado exitosamente');
            window.location.href = '../index.html';
        });
    }
}
