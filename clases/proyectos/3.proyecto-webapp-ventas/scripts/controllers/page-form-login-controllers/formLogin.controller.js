"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formularioLoginController = formularioLoginController;
const usuarios_model_js_1 = require("../../models/usuarios.model.js");
function formularioLoginController() {
    const formulario = document.querySelector("#formLogin");
    if (!formulario)
        return;
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        const inputNombreElement = document.querySelector("#name");
        const inputNombre = inputNombreElement ? inputNombreElement.value : null;
        // inputNombre.value;
        const inputContrasenia = document.querySelector("#password");
        const usuarioEncontrado = (0, usuarios_model_js_1.validarUsuario)(inputNombre, inputContrasenia);
        if (usuarioEncontrado) {
            alert("login");
            (0, usuarios_model_js_1.definirUsuarioLogueado)(usuarioEncontrado);
            window.location.href = `./../pages/page-dashboard.html?id=${usuarioEncontrado.name}`;
        }
        else {
            alert("usuario no encontrado");
            window.location.href = "./";
        }
    });
}
