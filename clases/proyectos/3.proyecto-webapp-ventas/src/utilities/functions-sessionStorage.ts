// Guardar dato en sessionStorage
export function crearDatoSS(clave = "", valor = "") {
    if (clave !== "" && valor !== "") {
        sessionStorage.setItem(clave, JSON.stringify(valor));
        console.log("Dato guardado en sessionStorage:", clave);
    } else {
        console.error("Clave o valor inválido para guardar");
    }
}

// Leer dato de sessionStorage
export function leerDatoSS(clave = "") {
    try {
        const item = sessionStorage.getItem(clave);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error("Error al leer/parsing de sessionStorage:", error);
        return null;
    }
}

// Mostrar todos los datos
export function mostrarTodoSS() {
    console.log("Contenido actual de sessionStorage:");
    for (let i = 0; i < sessionStorage.length; i++) {
        const clave = sessionStorage.key(i);
        const valor = sessionStorage.getItem(clave || "");
        console.log(`${clave} = ${valor}`);
    }
}

// Eliminar un dato por clave
export function eliminarDatoSS(clave = "") {
    if (sessionStorage.getItem(clave) !== null) {
        sessionStorage.removeItem(clave);
        console.log("Dato eliminado de sessionStorage:", clave);
    } else {
        console.warn("No se encontró la clave en sessionStorage:", clave);
    }
}

// Limpiar todo sessionStorage
export function limpiarSessionStorage() {
    sessionStorage.clear();
    alert("Todos los datos de sessionStorage fueron eliminados");
}
