const listaUsuarios = [
    {
        name: "alfredo",
        password: "1234",
        tools: [
            1,
            3
        ]
    },
    {
        name: "sergio",
        password: "1111",
        tools: [
            2,
            3,
            1,
            3,
        ]
    },
    {
        name: "carla",
        password: "carla",
        tools: [
            2
        ]
    }
];


export function obtenerListaUsuarios() {
    return (listaUsuarios)
}

export function validarUsuario(nombre, contrasenia) {
    const listaUsuarios = obtenerListaUsuarios();

    let usuarioEncontrado = null;

    for (let index = 0; index < listaUsuarios.length; index++) {
        if (listaUsuarios[index].name === nombre && listaUsuarios[index].password === contrasenia) {
            usuarioEncontrado = listaUsuarios[index];
        }
    }

    return usuarioEncontrado;
}

function crearUsuario(usuario) {
    // crear y incluir el usario a la lista de usarios
}

function actualizarUsuario(id, usuario) {
    // actualizar usuario de la lista de usarios
}

function eliminarUsuario(id, usuario) {
    // eliminar el usario de la lista de usarios
}