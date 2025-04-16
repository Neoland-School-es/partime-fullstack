// CRUD de localStorage para programadores juniors

// Crear o actualizar un dato en localStorage
export function crearDatoLS(clave, valor) {
    if (clave !== "" && valor !== "") {
        localStorage.setItem(clave, valor);
        console.log("Dato guardado en localStorage:", clave);
    } else {
        console.error("Clave o valor inválido");
    }
}

// Leer un dato de localStorage
export function leerDatoLS(clave) {
    const valor = localStorage.getItem(clave);

    if (valor !== null) {
        console.log("Dato encontrado:", clave + " = " + valor);
        return valor;
    } else {
        console.error("Dato no encontrado en localStorage: " + clave);
        return null;
    }
}

// Mostrar todos los datos guardados en localStorage
export function mostrarTodoLS() {
    console.log("Contenido actual de localStorage:");

    for (let i = 0; i < localStorage.length; i++) {
        const clave = localStorage.key(i);
        const valor = localStorage.getItem(clave);
        console.log(clave + " = " + valor);
    }
}

// Eliminar un dato específico de localStorage
export function eliminarDatoLS(clave) {
    if (localStorage.getItem(clave) !== null) {
        localStorage.removeItem(clave);
        console.log("Dato eliminado:", clave);
    } else {
        console.error("No se puede eliminar, clave no encontrada:", clave);
    }
}

// Limpiar todo el localStorage
export function limpiarLocalStorage() {
    localStorage.clear();
    console.log("Todos los datos del localStorage fueron eliminados");
}
