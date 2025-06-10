"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enrutador = enrutador;
// Funciones Pagina
const home_controller_js_1 = __importDefault(require("./../controllers/pages-home-controllers/home.controller.js"));
const page_favories_main_scripts_js_1 = __importDefault(require("./../controllers/pages-favories-controllers/page-favories-main-scripts.js"));
const page_shopping_cart_main_scripts_js_1 = __importDefault(require("./../controllers/pages-shopping-cart-controllers/page-shopping-cart-main-scripts.js"));
const pages_crud_main_scripts_js_1 = require("./../controllers/pages-crud-products-controllers/pages-crud-main-scripts.js");
const formLogin_controller_js_1 = require("./../controllers/page-form-login-controllers/formLogin.controller.js");
const dashboard_controller_js_1 = require("../controllers/page-dashboard-controllers/dashboard.controller.js");
const rutas = {
    '/': home_controller_js_1.default,
    '/index.html': home_controller_js_1.default,
    '/pages/page-favorites.html': page_favories_main_scripts_js_1.default,
    '/pages/page-shopping-cart.html': page_shopping_cart_main_scripts_js_1.default,
    '/pages/page-create-product.html': pages_crud_main_scripts_js_1.paginaFormularioCrearProducto,
    '/pages/page-formulario-login.html': formLogin_controller_js_1.formularioLoginController,
    '/pages/page-dashboard.html': dashboard_controller_js_1.dashboardController,
    // '/pages/page-remove-cart.html': paginaFormularioEliminarProducto,
    // '/pages/page-update-product.html': paginaFormularioEditarProducto,
};
const rutasPublicas = [
    '/',
    '/index.html',
    '/pages/page-favorites.html',
    '/pages/page-shopping-cart.html',
    '/pages/page-create-product.html',
    '/pages/page-formulario-login.html',
];
const rutasPrivadas = [
    '/pages/page-dashboard.html',
];
function enrutador() {
    const path = window.location.pathname;
    // const usuario = leerDatoLS('usuario-logueado') || null
    const usuario = {};
    if (rutasPublicas.includes(path)) {
        rutas[path]();
    }
    // if (!usuario) {
    // window.location.href = './'
    // }
    if (rutasPrivadas.includes(path) && usuario) {
        rutas[path]();
    }
    // if (rutas[path]) {
    //     rutas[path]()
    // } else {
    //     window.location.href = './../'
    // }
}
