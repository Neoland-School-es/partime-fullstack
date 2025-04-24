// Base de Datos | Datos Locales | Datos de prueba
import { datosTareasBBDD } from "./../database/data-task.js";
// Funciones Logicas
import { imprimirLista, actualizarTarea, eliminarTarea, agregarTarea } from "./scripts-crud/script-crud-logic.js";
// Funciones pagina
import { formularioPaginaCrear, formularioPaginaEditar, formularioPaginaEliminar } from "./scripts-crud/scritps-crud-pages.js";
// Funciones LocalStorage
import { crearDatoLS, leerDatoLS, limpiarLocalStorage } from "./localstorage/functions-localstorage.js";
// Funciones Cookies
// ...
// Utilidades
import { cerrarModal } from "./utilities/bootstrap-functions.js";

function renderizarLista(lista = []) {
    imprimirLista(lista);
    iniciarEventosLista(lista);
}

function iniciarEventosLista(lista = []) {
    const formCrear = document.querySelector("#addTaskModal form");
    if (formCrear) {
        formCrear.addEventListener('submit', function (event) {
            event.preventDefault();
            const nuevoItem = document.querySelector("[name='taskText']").value;
            const nuevaLista = agregarTarea(lista, nuevoItem);
            crearDatoLS("lista-tareas", nuevaLista);
            cerrarModal("#addTaskModal");
            renderizarLista(lista);
        });
    }

    const listaBtnEditar = document.querySelectorAll("#ContenedorLista .btn-editar");
    if (listaBtnEditar.length) {
        for (let index = 0; index < listaBtnEditar.length; index++) {
            listaBtnEditar[index].addEventListener("click", function () {
                const idSeleccionado = parseInt(listaBtnEditar[index].dataset.id);

                for (let i = 0; i < lista.length; i++) {
                    if (lista[i].id === idSeleccionado) {
                        document.querySelector('#editTaskModal form [name="editTaskText"]').value = lista[i].name;
                        document.querySelector('#editTaskModal').dataset.id = lista[i].id;
                    }
                }

                const formEditar = document.querySelector("#editTaskModal form");
                formEditar.addEventListener('submit', function (event) {
                    event.preventDefault();

                    const textoEditado = document.querySelector("[name='editTaskText']").value;
                    const listaActualizada = actualizarTarea(lista, idSeleccionado, textoEditado);

                    crearDatoLS("lista-tareas", listaActualizada);
                    cerrarModal("#editTaskModal");
                    renderizarLista(lista);
                });
            });
        }
    }

    const listaBtnEliminar = document.querySelectorAll("#ContenedorLista .btn-eliminar");
    if (listaBtnEliminar.length) {
        for (let index = 0; index < listaBtnEliminar.length; index++) {
            listaBtnEliminar[index].addEventListener("click", function () {
                const idSeleccionado = parseInt(listaBtnEliminar[index].dataset.id);

                for (let i = 0; i < lista.length; i++) {
                    if (lista[i].id === idSeleccionado) {
                        document.querySelector('#TareaElegida').textContent = lista[i].name;
                        document.querySelector('#deleteTaskModal').dataset.id = lista[i].id;
                    }
                }

                const formEliminar = document.querySelector("#deleteTaskModal form");
                formEliminar.addEventListener('submit', function (event) {
                    event.preventDefault();

                    const listaFiltrada = eliminarTarea(lista, idSeleccionado);

                    crearDatoLS("lista-tareas", listaFiltrada);
                    cerrarModal("#deleteTaskModal");
                    renderizarLista(listaFiltrada);
                });
            });
        }
    }

    const btnClearLS = document.querySelector("#btnClearLS");
    if (btnClearLS) {
        btnClearLS.addEventListener('click', function () {
            limpiarLocalStorage();
            renderizarLista();
        });
    }
}

function main() {
    const listaInicial = leerDatoLS("lista-tareas") || datosTareasBBDD || [];

    if (document.querySelector('#ContenedorLista')) {
        crearDatoLS("lista-tareas", listaInicial);
        renderizarLista(listaInicial);
    }

    if (document.querySelector('#addTaskPage')) {
        formularioPaginaCrear(listaInicial);
    }

    if (document.querySelector('#editTaskPage')) {
        formularioPaginaEditar(listaInicial);
    }

    if (document.querySelector('#deleteTaskPage')) {
        formularioPaginaEliminar(listaInicial);
    }
}

document.addEventListener("DOMContentLoaded", main);
