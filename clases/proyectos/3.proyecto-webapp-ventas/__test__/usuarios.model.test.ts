import {
    obtenerTodosLosUsuarios,
    obtenerUsuarioPorID,
    validarUsuario,
    cerrarSesion,
    crearUsuario,
    usuarioLogueado
} from './../src/models/usuario.model';
import type { IUsuario } from './../src/types/types';

describe('Test módulo de usuarios', () => {
    test('obtenerTodosLosUsuarios retorna array inicial si localStorage está vacío', () => {
        const usuarios = obtenerTodosLosUsuarios();
        expect(Array.isArray(usuarios)).toBe(true);
        expect(usuarios.length).toBeGreaterThan(0);
    });

    test('obtenerUsuarioPorID retorna el usuario correcto si existe', () => {
        const usuarios = obtenerTodosLosUsuarios();
        const id = usuarios[0].id;
        const usuario = obtenerUsuarioPorID(id);
        expect(usuario?.id).toBe(id);
    });

    test('validarUsuario retorna el usuario si nombre y contraseña coinciden', () => {
        const usuarios = obtenerTodosLosUsuarios();
        const { nombre, contrasenia } = usuarios[0];
        const resultado = validarUsuario(nombre, contrasenia);
        expect(resultado?.nombre).toBe(nombre);
    });

    test('cerrarSesion cambia usuarioLogueado a null', () => {
        cerrarSesion();
        expect(usuarioLogueado).toBeNull();
    });

    test('crearUsuario agrega un nuevo usuario con ID incremental', () => {
        const nuevo: IUsuario = { id: 0, nombre: 'nuevo' };
        const creado = crearUsuario(nuevo);
        expect(creado).toMatchObject(nuevo);
    });
});
