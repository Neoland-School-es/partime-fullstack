// Datos Locales | Base de Datos | LocalStorage | Cookiess
import { mockListaUsuarios } from '../mocks/DataBBDD';
// Interfaces
import type { IUsuario } from '../types/types';
import { crearCookie, eliminarCookie, leerCookie } from '../utilities/functions-cookies';

export let usuarioLogueado: IUsuario | null = null;

export function obtenerTodosLosUsuarios(): IUsuario[] {
    return mockListaUsuarios;
}

export function validarUsuario(nombre: IUsuario["nombre"], contrasenia: IUsuario["contrasenia"]): IUsuario | null {
    const listaUsuarios = obtenerTodosLosUsuarios();
    const usuarioEncontrado = listaUsuarios.find(usuario => usuario.nombre === nombre && usuario.contrasenia === contrasenia);

    if (!usuarioEncontrado) {
        return null
    }

    guardarUsuarioCookie(usuarioEncontrado.nombre)
    return usuarioEncontrado;
}

function guardarUsuarioCookie(nombre: IUsuario["nombre"]) {
    crearCookie("CACHE-USUARIO-AUTENTICADO", nombre);
}

export function obtenerUsuarioCookie(): IUsuario | null {
    const nombreUsuario = leerCookie("CACHE-USUARIO-AUTENTICADO") || null

    if (!nombreUsuario) {
        return null
    }

    const usuario: IUsuario = {
        id: 1000,
        nombre: nombreUsuario
    }

    return usuario
}

export function cerrarSesion(): void {
    eliminarCookie("CACHE-USUARIO-AUTENTICADO")
}