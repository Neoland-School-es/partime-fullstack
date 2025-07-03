import store from "../../store/store"
import { imprimitContenedorLista } from "./seccionCarritoCompras";

export function dashboardController() {
    console.log('Página: Carrio de compras (#PageDashboard)');

    if (!store.getState().usuario.isAuthenticated) {
        return
    }

    imprimitContenedorLista(store.getState().productos.productosBBDDLS);
    
    store.subscribe(() => {
        imprimitContenedorLista(store.getState().productos.productosBBDDIndexDB);
    });
}
