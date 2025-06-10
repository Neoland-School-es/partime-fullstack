"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginaFormularioCrearProducto = paginaFormularioCrearProducto;
exports.paginaFormularioEditarProducto = paginaFormularioEditarProducto;
exports.paginaFormularioEliminarProducto = paginaFormularioEliminarProducto;
// Funciones Logicas
const functions_crud_logic_js_1 = require("./functions/functions-crud-logic.js");
// Funciones LocalStorage
const functions_localstorage_js_1 = require("./../../utilities/functions-localstorage.js");
function paginaFormularioCrearProducto() {
    console.log("Saludos desde formularioPaginaCrear");
    const listaInicial = (0, functions_localstorage_js_1.leerDatoLS)('lista-cache-productos') || [];
    const formCrear = document.querySelector("#addTaskPage form");
    formCrear.addEventListener('submit', function (event) {
        event.preventDefault();
        const nuevaTarea = formCrear.querySelector("[name='taskText']").value;
        const nuevaLista = (0, functions_crud_logic_js_1.crearProductoLista)(listaInicial, nuevaTarea);
        (0, functions_localstorage_js_1.crearDatoLS)("lista-cache-productos", nuevaLista);
        alert("Elemento creado exitosamente");
        window.location.href = "../index.html";
    });
}
function paginaFormularioEditarProducto() {
    const listaInicial = (0, functions_localstorage_js_1.leerDatoLS)('lista-cache-productos') || [];
    if (listaInicial.length === 0) {
        alert("error Lista sin datos");
        window.location.href = "./../index.html";
        return;
    }
    const params = new URLSearchParams(window.location.search);
    const idProduct = parseInt(params.get('id'));
    if (!idProduct) {
        alert("error URL");
        window.location.href = "./../index.html";
        return;
    }
    const product = listaInicial.find((t) => { return (t.id === idProduct); });
    if (!product) {
        alert("error Lista, no existe el id");
        window.location.href = "./../index.html";
        return;
    }
    document.querySelector('#editTaskPage form [name="editTaskText"]').value = product.name;
    const formEditar = document.querySelector('#editTaskPage form');
    if (formEditar) {
        formEditar.addEventListener('submit', function (event) {
            event.preventDefault();
            const textoEditado = document.querySelector('#editTaskPage form [name="editTaskText"]').value;
            const nuevaLista = (0, functions_crud_logic_js_1.actualizarTarea)(listaInicial, idProduct, textoEditado);
            (0, functions_localstorage_js_1.crearDatoLS)('lista-cache-productos', nuevaLista);
            alert('Elemento editado exitosamente');
            window.location.href = '../index.html';
        });
    }
}
function paginaFormularioEliminarProducto() {
    console.log("Saludos desde formularioPaginaEliminar");
    const listaInicial = (0, functions_localstorage_js_1.leerDatoLS)('lista-cache-productos') || [];
    const parametrosURL = new URLSearchParams(window.location.search);
    const idTarea = parseInt(parametrosURL.get('id'));
    for (let index = 0; index < listaInicial.length; index++) {
        if (listaInicial[index].id === idTarea) {
            document.querySelector('#TareaElegida').textContent = listaInicial[index].name;
        }
    }
    const formEliminar = document.querySelector('#deleteTaskPage form');
    if (formEliminar) {
        formEliminar.addEventListener('submit', function (event) {
            event.preventDefault();
            const nuevaLista = (0, functions_crud_logic_js_1.eliminarTarea)(listaInicial, idTarea);
            (0, functions_localstorage_js_1.crearDatoLS)('lista-cache-productos', nuevaLista);
            alert('Elemento eliminado exitosamente');
            window.location.href = '../index.html';
        });
    }
}
