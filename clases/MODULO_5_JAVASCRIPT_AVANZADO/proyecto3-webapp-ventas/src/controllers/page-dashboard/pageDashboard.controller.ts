import store from "../../store/store"
import { imprimirLista } from "./fnImprimirProductos";

export function dashboardController() {
    console.log('Página: Carrio de compras (#PageDashboard)');

    if (!store.getState().usuario.isAuthenticated) {
        return
    }
    
    // mostrar la lista vacía
    imprimirLista(store.getState().productos.productosBBDDIndexDB, '#ContenedorStockIndexDB');
    imprimirLista(store.getState().productos.productosBBDDLS, '#ContenedorStockLocalStorage');
    
    // pendiente a los cambios de la store
    store.subscribe(() => {
        imprimirLista(store.getState().productos.productosBBDDIndexDB, '#ContenedorStockIndexDB');
        imprimirLista(store.getState().productos.productosBBDDLS, '#ContenedorStockLocalStorage');
    });

}
