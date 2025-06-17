import store from '../store/store';
// Funciones Pagina
import pageHomeController from './../controllers/page-home/pageHome.comtroller';
// import pageFavoriteMain from './../controllers/page-favories/page-favories-main-scripts';
// import pageShoppingCartMain from './../controllers/page-shopping-cart/page-shopping-cart-main-scripts';
import { paginaFormularioCrearProducto, paginaFormularioEditarProducto, paginaFormularioEliminarProducto } from './../controllers/pages-crud/pages-crud-main-scripts';
import { formularioLoginController } from './../controllers/page-form-login/pageFormLogin.controller';
import { dashboardController } from '../controllers/page-dashboard/dashboard.controller';


export function enrutador() {
    if (document.querySelector('#PageHome')) {
        pageHomeController();
    }

    // if (document.querySelector('#PageFavorites')) {
    //     pageFavoriteMain();
    // }

    // if (document.querySelector('#PageShoppingCard')) {
    //     pageShoppingCartMain();
    // }

    if (document.querySelector('#PageFormLogin')) {
        formularioLoginController();
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






    if (document.querySelector('#PageDashboard')) {
        console.log(store.getState().usuario.isAuthenticated)
        if (!store.getState().usuario.isAuthenticated) {
            alert("largo!")
            return
        }
        
        dashboardController();
    }
}
