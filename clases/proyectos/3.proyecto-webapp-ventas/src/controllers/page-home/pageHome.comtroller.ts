// store
import store from './../../store/store';
import { iniciarFormularioModalCrearProducto } from './formularioProductoNuevo';
import { imprimitContenedorLista } from './seccionProductosStock';
import { imprimitContenedorListaOfertas } from './seccionProductosStockOferta';


export default function pageHomeController() {
      // inicializarCreacionDatosCache();
    // mostrar la lista vacía
    imprimitContenedorLista(store.getState().productos.productosBBDDIndexDB);
    imprimitContenedorListaOfertas(store.getState().productos.productosBBDDLS);

    // pendiente a los cambios de la store
    store.subscribe(() => {
        console.log(store.getState().productos.productosBBDDIndexDB)
        imprimitContenedorLista(store.getState().productos.productosBBDDIndexDB);
    });

    iniciarFormularioModalCrearProducto();
}

