import { obtenerProductosLocales } from "./../../models/producto.model.js";
import { obtenerUsuarioPorID } from "./../../models/usuarios.model.js";

export function dashboardController() {
    const params = new URLSearchParams(window.location.search);
    const idPersona = params.get('id');

    if (!idPersona) {
        alert("error URL")
        window.location.href = "./../index.html";
        return;
    }


    console.log(obtenerUsuarioPorID(idPersona))





    const listaUsuarios = obtenerTodosLosUsuarios();
    const listaHerramientas = obtenerProductosLocales();

    let usuarioEncontrado = null

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