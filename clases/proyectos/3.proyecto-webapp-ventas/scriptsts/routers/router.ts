import { leerDatoLS } from './../utilities/functions-localstorage.js';
// Funciones Pagina
import homeController from './../controllers/pages-home-controllers/home.controller.js';
import pageFavoriteController from './../controllers/pages-favories-controllers/page-favories-main-scripts.js';
import pageShoppingCartMain from './../controllers/pages-shopping-cart-controllers/page-shopping-cart-main-scripts.js';
import { paginaFormularioCrearProducto, paginaFormularioEditarProducto, paginaFormularioEliminarProducto } from './../controllers/pages-crud-products-controllers/pages-crud-main-scripts.js';
import { formularioLoginController } from './../controllers/page-form-login-controllers/formLogin.controller.js';
import { dashboardController } from '../controllers/page-dashboard-controllers/dashboard.controller.js';

const rutas = {
    '/': homeController,
    '/index.html': homeController,
    '/pages/page-favorites.html': pageFavoriteController,
    '/pages/page-shopping-cart.html': pageShoppingCartMain,
    '/pages/page-create-product.html': paginaFormularioCrearProducto,

    '/pages/page-formulario-login.html': formularioLoginController,
    '/pages/page-dashboard.html': dashboardController,

    // '/pages/page-remove-cart.html': paginaFormularioEliminarProducto,
    // '/pages/page-update-product.html': paginaFormularioEditarProducto,
}


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

export function enrutador() {
    const path = window.location.pathname;

    // const usuario = leerDatoLS('usuario-logueado') || null
    const usuario = {}

    if (rutasPublicas.includes(path)) {
        rutas[path]()
    }

    // if (!usuario) {
        // window.location.href = './'
    // }

    if (rutasPrivadas.includes(path) && usuario) {
        rutas[path]()
    }


    // if (rutas[path]) {
    //     rutas[path]()
    // } else {
    //     window.location.href = './../'
    // }
}
