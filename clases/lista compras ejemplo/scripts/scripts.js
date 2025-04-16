// base de datos
import { listaUsuariosBBDD } from "./data-users.js";
// functiones
import { actualizarUsuario, agregarUsuario, eliminarUsuario, mostrarListaDeUsuarios, mostrarUsuario } from "./functions-crud.js";
import { mostrarCookies, leerCookie, crearCookie, eliminarCookie, mostrarUnaCookie, actualizarCookie } from "./functions-cookies.js";
import { crearDatoLS, leerDatoLS, mostrarTodoLS, eliminarDatoLS, limpiarLocalStorage } from "./functions-localstorage.js";

function ejemploCrud() {
    let miListaUsuarios = listaUsuariosBBDD || [];

    mostrarListaDeUsuarios(miListaUsuarios);

    miListaUsuarios = agregarUsuario(miListaUsuarios, "Karina");
    mostrarListaDeUsuarios(miListaUsuarios);

    mostrarUsuario(miListaUsuarios, miListaUsuarios[3].id);
    miListaUsuarios = actualizarUsuario(miListaUsuarios, miListaUsuarios[3].id, "", 40);
    mostrarUsuario(miListaUsuarios, miListaUsuarios[3].id);
    mostrarListaDeUsuarios(miListaUsuarios);

    mostrarUsuario(miListaUsuarios, miListaUsuarios[1].id);
    miListaUsuarios = eliminarUsuario(miListaUsuarios, miListaUsuarios[1].id);
    mostrarUsuario(miListaUsuarios, miListaUsuarios[1].id);
    mostrarListaDeUsuarios(miListaUsuarios);
}

function ejemploCookies() {
    // Mostrar todas las cookies actuales
    mostrarCookies();

    // Crear una nueva cookie
    crearCookie("usuario", "Juan", 7);
    crearCookie("tema", "oscuro", 30);

    // Mostrar todas las cookies nuevamente
    mostrarCookies();

    // Leer una cookie específica
    mostrarUnaCookie("usuario");
    mostrarUnaCookie("tema");
    mostrarUnaCookie("noExistente"); // Prueba con una cookie que no existe

    // Actualizar una cookie existente
    actualizarCookie("usuario", "Karina", 14);
    actualizarCookie("tema", "claro", 60);

    // Mostrar las cookies actualizadas
    mostrarCookies();

    // Eliminar una cookie
    eliminarCookie("tema");
    eliminarCookie("modoOscuro");
    eliminarCookie("usuario");

    // Mostrar todas las cookies después de eliminar
    mostrarCookies();

    // Intentar leer una cookie eliminada
    mostrarUnaCookie("tema");

    //     document.cookie = `cookie1=1; expires=Tue, 30 Apr 2025 12:00:00 UTC; path=/`;
    //     document.cookie = `cookie1=1; expires=Tue, 30 Apr 2025 12:00:00 UTC; path=/`;
    //     document.cookie = `cookie1=1; expires=Tue, 30 Apr 2025 12:00:00 UTC; path=/`;
}

function ejemploLocalStorage() {
    // Mostrar todo el contenido de localStorage inicialmente
    console.log("Estado inicial de localStorage:");
    mostrarTodoLS();

    // Crear nuevos datos en localStorage
    crearDatoLS("usuario", "Pablo");
    crearDatoLS("tema", "oscuro");
    crearDatoLS("idioma", "español");

    // Mostrar el contenido después de crear los datos
    console.log("Después de agregar datos:");
    mostrarTodoLS();

    // Leer un dato específico
    leerDatoLS("usuario");
    leerDatoLS("tema");
    leerDatoLS("claveInexistente"); // Intentar leer algo que no existe

    // Actualizar un dato existente
    crearDatoLS("usuario", "Karina"); // Sobreescribe el valor
    console.log("Después de actualizar el dato 'usuario':");
    mostrarTodoLS();

    // Eliminar un dato específico
    // eliminarDatoLS("tema");
    console.log("Después de eliminar el dato 'tema':");
    mostrarTodoLS();

    // Limpiar todo el contenido de localStorage
    // limpiarLocalStorage();
    console.log("Después de limpiar localStorage:");
    mostrarTodoLS();
}

function main() {
    ejemploCrud();

    // ejemploCookies();

    // ejemploLocalStorage();
}

main();