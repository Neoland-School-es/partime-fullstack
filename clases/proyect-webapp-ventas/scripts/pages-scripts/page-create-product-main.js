// Funciones Logicas
import { agregarTarea } from "./../scripts-crud/script-crud-logic.js";
// Funciones LocalStorage
import { crearDatoLS } from "./../localstorage/functions-localstorage.js";


export function formularioPaginaCrear(tareas = []) {
    console.log("Saludos desde formularioPaginaCrear")

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