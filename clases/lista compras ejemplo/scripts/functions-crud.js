export function mostrarListaDeUsuarios(listaUsuarios = []) {
    console.table(listaUsuarios);
}

export function mostrarUsuario(listaUsuarios = [], idUsuario = 0) {
    let usuarioEncontrado = false;

    for (let index = 0; index < listaUsuarios.length; index++) {
        if (listaUsuarios[index].id === idUsuario) {
            console.log(listaUsuarios[index]);
            usuarioEncontrado = true;
        }
    }

    if (!usuarioEncontrado) {
        console.error("Usuario no encontrado");
    }
}

export function agregarUsuario(listaUsuarios = [], nombreUsuario = "", edadUsuario = 0) {
    // if (nombreUsuario === "" || edadUsuario <= 0) {
    //     console.error("Nombre o edad inválidos");
    //     return listaUsuarios;
    // }

    const nuevoUsuario = {
        id: new Date().getTime(),
        nombre: nombreUsuario,
        edad: edadUsuario
    };

    listaUsuarios[listaUsuarios.length] = nuevoUsuario;

    return listaUsuarios;
}

export function actualizarUsuario(listaUsuarios = [], idUsuario = 0, nuevoNombre = "", nuevaEdad = 0) {
    let usuarioEncontrado = false;

    for (let i = 0; i < listaUsuarios.length; i++) {
        if (listaUsuarios[i].id === idUsuario) {
            if (nuevoNombre !== "") {
                listaUsuarios[i].nombre = nuevoNombre;
            }
            if (nuevaEdad > 0) {
                listaUsuarios[i].edad = nuevaEdad;
            }
            usuarioEncontrado = true;
            break;
        }
    }

    if (!usuarioEncontrado) {
        console.error("Usuario no encontrado");
    }

    return listaUsuarios;
}

export function eliminarUsuario(listaUsuarios = [], idUsuario = 0) {
    let nuevaListaUsuarios = [];
    let usuarioEncontrado = false;

    for (let index = 0, nuevaPosicion = 0; index < listaUsuarios.length; index++) {
        if (listaUsuarios[index].id !== idUsuario) {
            nuevaListaUsuarios[nuevaPosicion] = listaUsuarios[index];
            nuevaPosicion++;
        } else {
            usuarioEncontrado = true;
        }
    }

    if (!usuarioEncontrado) {
        console.error("Usuario no encontrado");
    }

    return nuevaListaUsuarios;
}