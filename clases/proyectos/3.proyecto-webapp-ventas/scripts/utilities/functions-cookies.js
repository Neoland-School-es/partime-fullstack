"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarCookies = mostrarCookies;
exports.leerCookie = leerCookie;
exports.crearCookie = crearCookie;
exports.eliminarCookie = eliminarCookie;
exports.mostrarUnaCookie = mostrarUnaCookie;
exports.actualizarCookie = actualizarCookie;
function mostrarCookies() {
    console.log("Cookies actuales:", document.cookie);
}
function leerCookie(nombre) {
    const nombreConIgual = nombre + "=";
    const partes = document.cookie.split(";");
    for (let i = 0; i < partes.length; i++) {
        let cookieActual = partes[i].trim();
        if (cookieActual.indexOf(nombreConIgual) === 0) {
            const valor = cookieActual.substring(nombreConIgual.length);
            return decodeURIComponent(valor);
        }
    }
    return null;
}
function crearCookie(nombre, valor, dias) {
    let textoExpiracion = "";
    if (dias > 0) {
        const fecha = new Date();
        fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
        textoExpiracion = "; expires=" + fecha.toUTCString();
    }
    const cookieFinal = nombre + "=" + encodeURIComponent(valor) + textoExpiracion + "; path=/";
    console.log(cookieFinal);
    document.cookie = cookieFinal;
}
function eliminarCookie(nombre) {
    document.cookie = nombre + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
function mostrarUnaCookie(nombre) {
    const valor = leerCookie(nombre);
    if (valor !== null) {
        console.log("Cookie encontrada:", nombre + " = " + valor);
    }
    else {
        console.error("Cookie no encontrada: " + nombre);
    }
}
function actualizarCookie(nombre, nuevoValor, nuevosDias) {
    const valorActual = leerCookie(nombre);
    if (valorActual !== null) {
        crearCookie(nombre, nuevoValor, nuevosDias);
        console.log("Cookie actualizada:", nombre);
    }
    else {
        console.error("No se puede actualizar, cookie no encontrada: " + nombre);
    }
}
