import { obtenerListaUsuarios, validarUsuario } from "./../models/user.model.js";
import { obtenerListaProductos } from "./../models/products.model.js";

export function login() {
    const formulario = document.querySelector("#formLogin");

    if (formulario) {
        formulario.addEventListener("submit", (event) => {
            event.preventDefault();

            const inputNombre = document.querySelector("#name").value;
            const inputContrasenia = document.querySelector("#password").value;

            let usuarioEncontrado = validarUsuario(inputNombre, inputContrasenia)

            formulario.innerHTML = "cargando....";

            setTimeout(() => {
                if (usuarioEncontrado) {
                    alert("login")
                    window.location.href = `./pages/home.html?id=${usuarioEncontrado.name}`;
                } else {
                    alert("usuario no encontrado")
                    window.location.href = "./";
                }
            }, 1000)
        })
    }
}


export function home() {
    const params = new URLSearchParams(window.location.search);
    const nombreUsuario = params.get('id');

    const listaUsuarios = obtenerListaUsuarios();
    const listaHerramientas = obtenerListaProductos();

    let usuarioEncontrado = null

    for (let index = 0; index < listaUsuarios.length; index++) {
        if (listaUsuarios[index].name === nombreUsuario) {
            usuarioEncontrado = listaUsuarios[index];
        }
    }

    document.querySelector("#titulo").innerHTML = "saludos " + nombreUsuario

    const contenedor = document.querySelector("#contenedor");

    for (let index = 0; index < listaUsuarios.length; index++) {
        const item = document.createElement("article")
        item.innerHTML = listaUsuarios[index].name
        contenedor.append(item)
    }

    for (let i = 0; i < listaUsuarios.length; i++) {
        console.log("Usuario:", listaUsuarios[i].name);
        const item = document.createElement("article");
        const listaHerramientasUsuario = listaUsuarios[i].tools;

        for (let j = 0; j < listaHerramientasUsuario.length; j++) {
            const herramienta = listaHerramientas.find((producto) => producto.id === listaHerramientasUsuario[j]);

            if (herramienta) {
                console.log("Herramienta:", herramienta.name);

                item.textContent = herramienta.name;
                contenedorHerramientas.appendChild(item);
            }
        }
    }
}