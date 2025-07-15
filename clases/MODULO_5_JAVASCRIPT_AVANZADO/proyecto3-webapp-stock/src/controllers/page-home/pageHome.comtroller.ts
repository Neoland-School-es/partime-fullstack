// store
import store from '../../store/store';
import { imprimirLista2 } from './fnsImprimirProductos';

export default function pageHomeController() {
    console.log('Página: inicio (#PageHome)');

    imprimirLista2(store.getState().productos.productos, "#ContenedorStockLocalStorage");

    store.subscribe(() => {
        imprimirLista2(store.getState().productos.productos, "#ContenedorStockLocalStorage");
    })
}

