"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuariosController = usuariosController;
const usuarios_model_js_1 = require("../../models/usuarios.model.js");
function usuariosController() {
    const listaUsuarios = (0, usuarios_model_js_1.obtenerTodosLosUsuarios)();
}
