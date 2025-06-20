// Datos Locales | Base de Datos | LocalStorage | Cookiess
import { datoLocalListaUsuarios } from '../BBDD/DataBBDD';
// Interfaces
import type { IUsuario } from '../types/types';

export let usuarioLogueado: IUsuario | null = null;

export function obtenerTodosLosUsuarios(): IUsuario[] {
    return datoLocalListaUsuarios;
}

export function obtenerUsuarioPorID(id: number): IUsuario | undefined {
    if (!id) return undefined;

    const listaUsuarios = obtenerTodosLosUsuarios();
    return listaUsuarios.find(usuario => usuario.id === id);
}

export function validarUsuario(nombre: IUsuario["nombre"], contrasenia: IUsuario["contrasenia"]): IUsuario | null {
    const listaUsuarios = obtenerTodosLosUsuarios();
    const usuarioEncontrado = listaUsuarios.find(usuario => usuario.nombre === nombre && usuario.contrasenia === contrasenia);

    return (usuarioEncontrado || null);
}

export function cerrarSesion(): void {
    usuarioLogueado = null;
}

export function crearUsuario(usuario: IUsuario): IUsuario {
    const listaUsuarios = obtenerTodosLosUsuarios();
    const nuevoId = Math.floor(Math.random() * 90000) + 10000;;

    const nuevoUsuario: IUsuario = {
        id: nuevoId,
        nombre: "a"
    };

    listaUsuarios.push(nuevoUsuario);

    return usuario;
}