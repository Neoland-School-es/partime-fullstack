// Base de Datos
import { abrirBase, eliminarBase, actualizarDato } from './../utilities/functions-indexDB';
import { crearDatoLS, leerDatoLS, limpiarLocalStorage } from './../utilities/functions-localstorage';
import { crearCookie, eliminarCookie, leerCookie } from './../utilities/functions-cookies';
// Datos Locales | Base de Datos | LocalStorage | Cookiess
import { mockListaUsuarios, mockListaProductos } from './../mocks/DataBBDD';

export function iniciarCreacionBBDD() {
    abrirBase("MI-BBDD", 1, ['BBDD-PRODUCTOS-STOCK', 'BBDD-USUARIOS', 'CACHE-USUARIO', 'CACHE-PRODUCTOS-CARRITO']);

    const productosLS = leerDatoLS("BBDD-PRODUCTOS-STOCK");
    crearDatoLS("BBDD-PRODUCTOS-STOCK", productosLS || []);

    const usuariosLS = leerDatoLS("BBDD-USUARIOS");
    crearDatoLS("BBDD-USUARIOS", usuariosLS || {});

    const productosCarritoLS = leerDatoLS("CACHE-PRODUCTOS-CARRITO");
    crearDatoLS("CACHE-PRODUCTOS-CARRITO", productosCarritoLS || []);

    const usuarioCookie =  leerCookie("CACHE-USUARIO-AUTENTICADO") || "";
    crearCookie("CACHE-USUARIO-AUTENTICADO", usuarioCookie, 30);
}

export function destruirBBDD() {
    eliminarBase("MI-BBDD");

    limpiarLocalStorage();

    eliminarCookie("CACHE-USUARIO-AUTENTICADO")
}

export function inicializarDatosPruebaUsuariosIndexDB() {
    for (let index = 0; index < mockListaUsuarios.length; index++) {
        actualizarDato(mockListaUsuarios[index], "MI-BBDD", 1, "BBDD-USUARIOS");
    }
}

export function inicializarDatosPruebaProductosIndexDB() {
    for (let index = 0; index < mockListaProductos.length; index++) {
        actualizarDato(mockListaProductos[index], "MI-BBDD", 1, "BBDD-PRODUCTOS-STOCK");
    }
}

export function inicializarDatosPruebaUsuariosLocalStorage() {
    crearDatoLS("BBDD-USUARIOS", mockListaUsuarios);
}

export function inicializarDatosPruebaProductosLocalStorage() {
    crearDatoLS("BBDD-PRODUCTOS-STOCK", mockListaProductos);
}