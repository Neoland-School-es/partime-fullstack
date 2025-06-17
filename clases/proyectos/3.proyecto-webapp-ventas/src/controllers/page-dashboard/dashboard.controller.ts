import { obtenerTodosLosUsuarios } from "./../../models/usuarios.model";
import { obtenerUsuarioPorID } from "./../../models/usuarios.model";


function validadUsuario() {
    const params = new URLSearchParams(window.location.search);
    const idPersona = params.get('id');
    if (!idPersona) {
        alert("error URL");
        window.location.href = "./../index.html";
        return;
    }

    console.log(obtenerUsuarioPorID(parseInt(idPersona)));
}

export function dashboardController() {
    console.log("saludos desde el dashboard del usuario")



    const listaUsuarios = obtenerTodosLosUsuarios();
    const listaHerramientas = obtenerTodosLosUsuarios();
    let usuarioEncontrado = null;
    for (let index = 0; index < listaUsuarios.length; index++) {
        if (listaUsuarios[index].name === idPersona) {
            usuarioEncontrado = listaUsuarios[index];
        }
    }
    // for (let index = 0; index < listaUsuarios.length; index++) {
    //     const item = document.createElement("article")
    //     item.innerHTML = listaUsuarios[index].name
    //     contenedor.append(item)
    // }
    const contenedorHerramientas = document.querySelector("#ContenedorLista");
    for (let i = 0; i < listaUsuarios.length; i++) {
        const item = document.createElement("li");
        const listaHerramientasUsuario = listaUsuarios[i].products;
        item.textContent = listaUsuarios[i].name;
        for (let j = 0; j < listaHerramientasUsuario.length; j++) {
            const herramienta = listaHerramientas.find((producto) => producto.id === listaHerramientasUsuario[j]);
            if (herramienta) {
                item.textContent += " - " + herramienta.name + ", ";
                contenedorHerramientas.appendChild(item);
            }
        }
    }
}
