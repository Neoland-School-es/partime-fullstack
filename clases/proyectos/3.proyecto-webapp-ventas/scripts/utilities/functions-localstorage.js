"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearDatoLS = crearDatoLS;
exports.leerDatoLS = leerDatoLS;
exports.mostrarTodoLS = mostrarTodoLS;
exports.eliminarDatoLS = eliminarDatoLS;
exports.limpiarLocalStorage = limpiarLocalStorage;
function crearDatoLS(clave, valor) {
    if (clave !== "" && valor !== "") {
        localStorage.setItem(clave, JSON.stringify(valor));
        console.log("Dato guardado en localStorage:", clave);
    }
    else {
        console.error("Clave o valor inválido");
    }
}
function leerDatoLS(clave) {
    const valor = JSON.parse(localStorage.getItem(clave));
    if (valor !== null) {
        console.log("Dato encontrado:", clave, valor);
        return valor;
    }
    else {
        console.error("Dato no encontrado en localStorage: " + clave);
        return null;
    }
}
function mostrarTodoLS() {
    console.log("Contenido actual de localStorage:");
    for (let i = 0; i < localStorage.length; i++) {
        const clave = localStorage.key(i);
        const valor = localStorage.getItem(clave);
        console.log(clave + " = " + valor);
    }
}
function eliminarDatoLS(clave) {
    if (localStorage.getItem(clave) !== null) {
        localStorage.removeItem(clave);
        console.log("Dato eliminado:", clave);
    }
    else {
        console.error("No se puede eliminar, clave no encontrada:", clave);
    }
}
function limpiarLocalStorage() {
    localStorage.clear();
    alert("Todos los datos del localStorage fueron eliminados");
}
