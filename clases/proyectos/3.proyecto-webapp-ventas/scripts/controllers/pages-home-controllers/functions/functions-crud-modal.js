"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modalCrearProducto = modalCrearProducto;
exports.modalActualizarProducto = modalActualizarProducto;
exports.modalEliminarProducto = modalEliminarProducto;
// Funciones CRUD Logicas
const functions_crud_logic_js_1 = require("./functions-crud-logic.js");
// LocalStorage
const functions_localstorage_js_1 = require("./../../../utilities/functions-localstorage.js");
// Utilidades
const functions_bootstrap_js_1 = require("./../../../utilities/functions-bootstrap.js");
function modalCrearProducto(pLista = []) {
    const formCrear = document.querySelector('#ModalCrearProducto form');
    if (formCrear) {
        formCrear.addEventListener('submit', function (event) {
            event.preventDefault();
            const campoProducto = document.querySelector('#ModalCrearProducto #NombreProducto');
            const nuevaLista = (0, functions_crud_logic_js_1.crearProductoLista)(pLista, campoProducto.value);
            (0, functions_localstorage_js_1.crearDatoLS)('lista-cache-productos', nuevaLista);
            (0, functions_crud_logic_js_1.imprimirLista)(nuevaLista);
            campoProducto.value = "";
            (0, functions_bootstrap_js_1.cerrarModal)('#ModalCrearProducto');
        });
    }
}
function modalActualizarProducto(pLista = []) {
    const listaBtnEditar = document.querySelectorAll('#ContenedorLista .btn-editar') || [];
    if (listaBtnEditar.length) {
        for (let index = 0; index < listaBtnEditar.length; index++) {
            listaBtnEditar[index].addEventListener('click', function () {
                const idSeleccionado = parseInt(listaBtnEditar[index].dataset.id);
                for (let i = 0; i < pLista.length; i++) {
                    if (pLista[i].id === idSeleccionado) {
                        document.querySelector('#ModalEditarProducto form #NombreProducto').value = pLista[i].name;
                        document.querySelector('#ModalEditarProducto').dataset.id = pLista[i].id;
                    }
                }
                const formEditar = document.querySelector('#ModalEditarProducto form');
                formEditar.addEventListener('submit', function (event) {
                    event.preventDefault();
                    const textoEditado = document.querySelector('#ModalEditarProducto form #NombreProducto').value;
                    const listaActualizada = (0, functions_crud_logic_js_1.actualizarTarea)(pLista, idSeleccionado, textoEditado);
                    (0, functions_localstorage_js_1.crearDatoLS)('lista-tareas', listaActualizada);
                    (0, functions_bootstrap_js_1.cerrarModal)('#ModalEditarProducto');
                    (0, functions_crud_logic_js_1.imprimirLista)(listaActualizada);
                });
            });
        }
    }
}
function modalEliminarProducto(pLista = []) {
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
                    const listaFiltrada = (0, functions_crud_logic_js_1.eliminarTarea)(pLista, idSeleccionado);
                    (0, functions_localstorage_js_1.crearDatoLS)('lista-tareas', listaFiltrada);
                    (0, functions_bootstrap_js_1.cerrarModal)('#deleteTaskModal');
                    (0, functions_crud_logic_js_1.imprimirLista)(listaFiltrada);
                });
            });
        }
    }
}
