export function crearDatoLS(clave = "", valor: any = "") {
    if (clave !== "" && valor !== "") {
        localStorage.setItem(clave, JSON.stringify(valor));
        console.log("Dato guardado en localStorage:", clave);
    } else {
        console.error("Clave o valor inválido");
    }
}

export function leerDatoLS(clave = "") {
    const valor = JSON.parse(localStorage.getItem(clave) || "");

    if (valor !== null) {
        return valor;
    } else {
        return null;
    }
}

export function mostrarTodoLS() {
    console.log("Contenido actual de localStorage:");
    for (let i = 0; i < localStorage.length; i++) {
        const clave = localStorage.key(i);
        const valor = localStorage.getItem(clave || "");
        console.log(clave + " = " + valor);
    }
}

export function eliminarDatoLS(clave = "") {
    if (localStorage.getItem(clave) !== null) {
        localStorage.removeItem(clave);
        console.log("Dato eliminado:", clave);
    } else {
        console.error("No se puede eliminar, clave no encontrada:", clave);
    }
}

export function limpiarLocalStorage() {
    localStorage.clear();
    alert("Todos los datos del localStorage fueron eliminados");
}
