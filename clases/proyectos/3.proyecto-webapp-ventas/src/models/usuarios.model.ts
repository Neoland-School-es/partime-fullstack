// Datos Locales | Base de Datos | LocalStorage | Cookiess
import { datoLocalListaUsuarios } from '../BBDD/DataBBDD';
// Interfaces
import type { Usuario } from '../types/types';
// LocalStorage
import { crearDatoLS, leerDatoLS, eliminarDatoLS } from '../utilities/functions-localstorage';

export let usuarioLogueado: Usuario | null = null;

export function obtenerTodosLosUsuarios(): Usuario[] {
    const usuariosLS = leerDatoLS('lista-usuarios');
    if (usuariosLS) {
        return usuariosLS;
    }
    // Guardar datos iniciales en localStorage
    crearDatoLS('lista-usuarios', datoLocalListaUsuarios);
    return datoLocalListaUsuarios;
}

export function obtenerUsuarioPorID(id: number): Usuario | undefined {
    if (!id) return undefined;

    const listaUsuarios = obtenerTodosLosUsuarios();
    return listaUsuarios.find(usuario => usuario.id === id);
}

export function validarUsuario(nombre: Usuario["nombre"], contrasenia: Usuario["contrasenia"]): Usuario | null {
    const listaUsuarios = obtenerTodosLosUsuarios();
    const usuarioEncontrado = listaUsuarios.find(usuario => usuario.nombre === nombre && usuario.contrasenia === contrasenia);

    return (usuarioEncontrado || null);
}

export function cerrarSesion(dispatch: any): void {
    usuarioLogueado = null;
    eliminarDatoLS('usuario-logueado');
}

export function crearUsuario(usuario: Usuario): Usuario {
    const listaUsuarios = obtenerTodosLosUsuarios();
    const nuevoId = Math.max(...listaUsuarios.map(usuario => usuario.id)) + 1;

    const nuevoUsuario: Usuario = {
        id: nuevoId,
        nombre: "a"
    };

    listaUsuarios.push(nuevoUsuario);

    return usuario;
}