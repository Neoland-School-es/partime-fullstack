// Funciones Pagina
import pageHomeMain from './pages-scripts/page-home/page-home-main-scripts.js';
import pageFavoriteMain from './pages-scripts/page-favories/page-favories-main-scripts.js';
import pageShoppingCartMain from './pages-scripts/page-shopping-cart/page-shopping-cart-main-scripts.js';
import { paginaFormularioCrearProducto, paginaFormularioEditarProducto, paginaFormularioEliminarProducto } from './pages-scripts/pages-crud/pages-crud-main-scripts.js';

function main() {
    if (document.querySelector('#PageHome')) {
        pageHomeMain();
    }

    if (document.querySelector('#PageFavorites')) {
        pageFavoriteMain();
    }

    if (document.querySelector('#PageShoppingCard')) {
        pageShoppingCartMain();
    }

    if (document.querySelector('#PageCreateProduct')) {
        paginaFormularioCrearProducto();
    }

    if (document.querySelector('#PageUpdateProduct')) {
        paginaFormularioEditarProducto();
    }

    if (document.querySelector('#PageRemoveProduct')) {
        paginaFormularioEliminarProducto();
    }
}

document.addEventListener('DOMContentLoaded', main);
