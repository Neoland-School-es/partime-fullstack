// Funciones pagina
import pageHomeMain from './pages-scripts/page-home/page-home-main.js';
import { pageFavoriteMain } from './pages-scripts/page-favories-main.js';
import pageShoppingCartMain from './pages-scripts/page-shopping-cart-main.js';
import { formularioPaginaCrear } from './pages-scripts/page-create-product-main.js';
import { formularioPaginaEliminar } from './pages-scripts/page-remove-product-main.js';
import { formularioPaginaEditar } from './pages-scripts/page-update-product-main.js';

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
        formularioPaginaCrear();
    }

    if (document.querySelector('#PageUpdateProduct')) {
        formularioPaginaEditar();
    }

    if (document.querySelector('#PageRemoveProduct')) {
        formularioPaginaEliminar();
    }
}

document.addEventListener('DOMContentLoaded', main);
