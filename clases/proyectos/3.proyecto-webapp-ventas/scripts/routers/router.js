// Funciones Pagina
import homeController from './../controllers/pages-home-controllers/home.controller.js';
import pageFavoriteMain from './../controllers/pages-favories-controllers/page-favories-main-scripts.js';
import pageShoppingCartMain from './../controllers/pages-shopping-cart-controllers/page-shopping-cart-main-scripts.js';
import { paginaFormularioCrearProducto, paginaFormularioEditarProducto, paginaFormularioEliminarProducto } from './../controllers/pages-crud-products-controllers/pages-crud-main-scripts.js';

const routes = {
    "/": homeController,
    "/index.html": homeController,
    "/pages/page-favorites.html": pageFavoriteMain,
    "/pages/page-shopping-cart.html": pageShoppingCartMain,

    "/pages/page-crseate-product.html": paginaFormularioCrearProducto,
    "/pages/page-update-product.html": paginaFormularioEditarProducto,
    "/pages/page-remove-cart.html": paginaFormularioEliminarProducto
}

export function enrutador() {
    const path = window.location.pathname;

    if (routes[path]) {
        routes[path]()
    } else {
        window.location.href = "./"
    }
}
