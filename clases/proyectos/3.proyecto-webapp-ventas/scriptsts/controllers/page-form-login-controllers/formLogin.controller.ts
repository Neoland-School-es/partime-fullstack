import { definirUsuarioLogueado, validarUsuario } from "../../models/usuarios.model.js";


export function formularioLoginController() {
    const formulario = document.querySelector("#formLogin");
    if (!formulario) return

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        const inputNombreElement = document.querySelector("#name") as HTMLInputElement | null;
        const inputNombre: string | null = inputNombreElement ? inputNombreElement.value : null;

        // inputNombre.value;
        const inputContrasenia = document.querySelector("#password");


        const usuarioEncontrado = validarUsuario(inputNombre, inputContrasenia)

        if (usuarioEncontrado) {
            alert("login")
            definirUsuarioLogueado(usuarioEncontrado)
            window.location.href = `./../pages/page-dashboard.html?id=${usuarioEncontrado.name}`;
        } else {
            alert("usuario no encontrado")
            window.location.href = "./";
        }
    })
}