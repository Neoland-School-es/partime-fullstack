// Funciones Logicas
import { agregarTarea, actualizarTarea, eliminarTarea } from "./../scripts-crud/script-crud-logic.js";
// Funciones LocalStorage
import { crearDatoLS, leerDatoLS } from "./../localstorage/functions-localstorage.js";

export function formularioPaginaCrear(tareas = []) {
    const formCrear = document.querySelector("#addTaskPage form");
    formCrear.addEventListener('submit', function (event) {
        event.preventDefault();
        const nuevaTarea = formCrear.querySelector("[name='taskText']").value;
        const nuevaLista = agregarTarea(tareas, nuevaTarea);
        crearDatoLS("lista-tareas", nuevaLista);
        alert("Elemento creado exitosamente");
        window.location.href = "../index.html";
    });
}

export function formularioPaginaEditar(tareas = []) {
    const params = new URLSearchParams(window.location.search);
    const idTarea = parseInt(params.get('id'));

    const tarea = tareas.find(t => t.id === idTarea);

    if (tarea) {
        document.querySelector('#editTaskPage form [name="editTaskText"]').value = tarea.name;
    }

    const formEditar = document.querySelector("#editTaskPage form");
    if (formEditar) {
        formEditar.addEventListener('submit', function (event) {
            event.preventDefault();

            const textoEditado = document.querySelector('#editTaskPage form [name="editTaskText"]').value;

            const nuevaLista = actualizarTarea(tareas, idTarea, textoEditado)

            console.log(nuevaLista)

            crearDatoLS("lista-tareas", nuevaLista);
            leerDatoLS("lista-tareas");

            alert("Elemento editado exitosamente");
            window.location.href = "../index.html";
        });
    }
}

export function formularioPaginaEliminar(tareas = []) {
    const parametrosURL = new URLSearchParams(window.location.search);
    const idTarea = parseInt(parametrosURL.get('id'));

    for (let index = 0; index < tareas.length; index++) {
        if (tareas[index].id === idTarea) {
            document.querySelector('#TareaElegida').textContent = tareas[index].name;
        }
    }

    const formEliminar = document.querySelector("#deleteTaskPage form");
    if (formEliminar) {
        formEliminar.addEventListener('submit', function (event) {
            event.preventDefault();

            const nuevaLista = eliminarTarea(tareas, idTarea)

            crearDatoLS("lista-tareas", nuevaLista);

            alert("Elemento eliminado exitosamente");
            window.location.href = "../index.html";
        });
    }
}
