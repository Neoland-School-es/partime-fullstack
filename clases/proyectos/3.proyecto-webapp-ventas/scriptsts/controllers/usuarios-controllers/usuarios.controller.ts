import { obtenerTodosLosUsuarios } from '../../models/usuarios.model.js';

export function usuariosController() {
    const listaUsuarios = obtenerTodosLosUsuarios()
}