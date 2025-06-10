import { crearDatoLS } from './../utilities/functions-localstorage.js';

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

export let usuarioLogueado = null;

export function obtenerTodosLosUsuarios() {
    return (DatoLocalListaUsuarios);
}

export function obtenerUsuarioPorID(id) {
    const listaUsuario = obtenerTodosLosUsuarios()

    const usuarioEncontrado = listaUsuario.find((usuario) => {
        console.log(usuario.name)
        console.log(id)
        return usuario.name === id
    })
    console.log(usuarioEncontrado)
    return (usuarioEncontrado);
}


export function validarUsuario(nombre, contrasenia) {
    const listaUsuariosModelo = obtenerTodosLosUsuarios()

    let usuarioEncontrado = null;

    for (let index = 0; index < listaUsuariosModelo.length; index++) {
        if (listaUsuariosModelo[index].name === nombre && listaUsuariosModelo[index].password === contrasenia) {
            usuarioEncontrado = listaUsuariosModelo[index];

            crearDatoLS('usuario-logueado', usuarioEncontrado)
        }
    }

    return usuarioEncontrado;
}

export function definirUsuarioLogueado(usuario) {
}
