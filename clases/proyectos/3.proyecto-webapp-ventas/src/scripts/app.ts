// Funciones Pagina
import pageHomeMain from './controllers/pageHome.controller';
// import pageFavoriteMain from './pages-scripts/page-favories/page-favories-main-scripts';
// import pageShoppingCartMain from './pages-scripts/page-shopping-cart/page-shopping-cart-main-scripts';
// import { paginaFormularioCrearProducto, paginaFormularioEditarProducto, paginaFormularioEliminarProducto } from './pages-scripts/pages-crud/pages-crud-main-scripts';

function main() {
    if (document.querySelector('#PageHome')) {
        pageHomeMain();
    }

    if (document.querySelector('#PageFavorites')) {
        // pageFavoriteMain();
    }

    if (document.querySelector('#PageShoppingCard')) {
        // pageShoppingCartMain();
    }

    if (document.querySelector('#PageCreateProduct')) {
        // paginaFormularioCrearProducto();
    }

    if (document.querySelector('#PageUpdateProduct')) {
        // paginaFormularioEditarProducto();
    }

    if (document.querySelector('#PageRemoveProduct')) {
        // paginaFormularioEliminarProducto();
    }
}

document.addEventListener('DOMContentLoaded', main);
