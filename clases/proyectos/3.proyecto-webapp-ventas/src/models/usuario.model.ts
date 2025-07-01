// Datos Locales | Base de Datos | LocalStorage | Cookiess
import { mockListaUsuarios } from '../mocks/DataBBDD';
// Interfaces
import type { IUsuario } from '../types/types';
import { actualizarDato } from '../utilities/functions-indexDB';

export let usuarioLogueado: IUsuario | null = null;

export function inicializarDatosPruebaUsuariosIndexDB() {
    for (let index = 0; index < mockListaUsuarios.length; index++) {
        actualizarDato(mockListaUsuarios[index], "MY-BBDD", 1, "USUARIOS");
    }
}

export function obtenerTodosLosUsuarios(): IUsuario[] {
    return mockListaUsuarios;
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