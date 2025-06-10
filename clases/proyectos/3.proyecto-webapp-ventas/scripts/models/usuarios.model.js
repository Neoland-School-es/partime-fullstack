"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioLogueado = void 0;
exports.obtenerTodosLosUsuarios = obtenerTodosLosUsuarios;
exports.obtenerUsuarioPorID = obtenerUsuarioPorID;
exports.validarUsuario = validarUsuario;
exports.definirUsuarioLogueado = definirUsuarioLogueado;
const functions_localstorage_js_1 = require("./../utilities/functions-localstorage.js");
const DatoLocalListaUsuarios = [
    {
        name: 'alfredo',
        password: '1234',
        products: [
            1,
            3
        ]
    },
    {
        name: 'sergio',
        password: '1111',
        products: [
            2,
            3,
            1,
            3,
        ]
    },
    {
        name: 'carla',
        password: 'carla',
        products: [
            2
        ]
    }
];
exports.usuarioLogueado = null;
function obtenerTodosLosUsuarios() {
    return (DatoLocalListaUsuarios);
}
function obtenerUsuarioPorID(id) {
    const listaUsuario = obtenerTodosLosUsuarios();
    const usuarioEncontrado = listaUsuario.find((usuario) => {
        console.log(usuario.name);
        console.log(id);
        return usuario.name === id;
    });
    console.log(usuarioEncontrado);
    return (usuarioEncontrado);
}
function validarUsuario(nombre, contrasenia) {
    const listaUsuariosModelo = obtenerTodosLosUsuarios();
    let usuarioEncontrado = null;
    for (let index = 0; index < listaUsuariosModelo.length; index++) {
        if (listaUsuariosModelo[index].name === nombre && listaUsuariosModelo[index].password === contrasenia) {
            usuarioEncontrado = listaUsuariosModelo[index];
            (0, functions_localstorage_js_1.crearDatoLS)('usuario-logueado', usuarioEncontrado);
        }
    }
    return usuarioEncontrado;
}
function definirUsuarioLogueado(usuario) {
}
