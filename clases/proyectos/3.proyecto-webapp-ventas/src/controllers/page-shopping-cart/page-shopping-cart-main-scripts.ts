// store
import { limpiarCarritoLS } from '../../slices/carritoSlice';
import store from './../../store/store';
import { imprimitContenedorLista } from './seccionCarritoCompras';

export default function pageShoppingCartMain() {
    console.log('Página: Carrio de compras (#pageShoppingCartMain)');
    console.log(store.getState().carritoSlice.carritoProductos)
    imprimitContenedorLista(store.getState().carritoSlice.carritoProductos);

    // store.subscribe(() => {
    //     imprimitContenedorLista(store.getState().productos.productosBBDDIndexDB);
    // });

    const formulario = document.querySelector<HTMLFormElement>('#FormCarrito');
    const textoTotalCarrito = document.querySelector<HTMLElement>('#TotalCarrito');
    if (!formulario || !textoTotalCarrito) {
        console.warn('No existe el formulario para finalizar la compra');
        return;
    }

    textoTotalCarrito.textContent = (store.getState().carritoSlice.totalCarritoProductos).toString();

    const btnLimpiarCarritoLS = document.querySelector("#btnLimpiarCarrito")

    if (!btnLimpiarCarritoLS) {
        return
    }

    formulario.addEventListener("submit", (evento: SubmitEvent) => {
        evento.preventDefault()
        alert("limpiando cache del carrito")
        store.dispatch(limpiarCarritoLS());
    })
}