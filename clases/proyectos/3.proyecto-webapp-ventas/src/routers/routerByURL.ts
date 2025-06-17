import { leerDatoLS } from './../utilities/functions-localstorage';
// Funciones Pagina
import homeController from './../controllers/page-home/page-home-main-scripts';
import pageFavoriteController from './../controllers/page-favories/page-favories-main-scripts';
import pageShoppingCartMain from './../controllers/page-shopping-cart/page-shopping-cart-main-scripts';
import { paginaFormularioCrearProducto, paginaFormularioEditarProducto, paginaFormularioEliminarProducto } from './../controllers/pages-crud/pages-crud-main-scripts';
import { formularioLoginController } from './../controllers/page-form-login/formLogin.controller';
import { dashboardController } from '../controllers/page-dashboard/dashboard.controller';

const rutas = {
    '/': homeController,
    '/index.html': homeController,
    '/pages/page-favorites.html': pageFavoriteController,
    '/pages/page-shopping-cart.html': pageShoppingCartMain,
    '/pages/page-formulario-login.html': formularioLoginController,
    '/pages/page-create-product.html': paginaFormularioCrearProducto,
    '/pages/page-remove-product.html': paginaFormularioEliminarProducto,
    '/pages/page-update-product.html': paginaFormularioEditarProducto,

    '/pages/page-dashboard.html': dashboardController,
}


const rutasPublicas = [
    '/',
    '/index.html',
    '/pages/page-favorites.html',
    '/pages/page-shopping-cart.html',
    '/pages/page-formulario-login.html',
    '/pages/page-create-product.html',
    '/pages/page-remove-product.html',
    '/pages/page-update-product.html',
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
