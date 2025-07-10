// store
import store from '../../store/store';
import { iniciarFormularioModalCrearProducto } from './formularioProductoNuevo';
import { imprimitLista1, imprimirLista2 } from './fnsImprimirProductos';

export default function pageHomeController() {
    console.log('Página: inicio (#PageHome)');
    // mostrar la lista vacía
    imprimitLista1(store.getState().productos.productosBBDDIndexDB, '#ContenedorStockIndexDB');
    // pendiente a los cambios de la store
    store.subscribe(() => {
        imprimitLista1(store.getState().productos.productosBBDDIndexDB, '#ContenedorStockIndexDB');
    });


    imprimirLista2(store.getState().productos.productosBBDDLS, "#ContenedorStockLocalStorage");

    iniciarFormularioModalCrearProducto();
}

