// tipos
import type { IProducto } from '../../types/types';
// store
import store from './../../store/store';
import { agregarProductoCarrito } from './../../slices/carritoSlice';

export function imprimitContenedorListaOfertas(pLista: IProducto[]) {
      // inicializarCreacionDatosCache();
    const contenedorLista = document.querySelector('#ContenedorListaOfertas ul');
    if (!contenedorLista) {
        return;
    }

    contenedorLista.className = 'd-flex flex-column gap-4';
    contenedorLista.innerHTML = '';

    if (pLista.length === 0) {
        const item = document.createElement('li')
        item.className = 'text-white'
        item.innerHTML = 'lista vacía'
        contenedorLista.appendChild(item);
    }

    for (let i = 0; i < pLista.length; i++) {
        const itemLista = document.createElement('li');
        itemLista.className = 'd-flex gap-4 justify-content-between bg-secondary py-2 px-4 card bg-white'

        const textoItemLista = document.createElement('span');
        textoItemLista.textContent = 'nombre producto: ' + pLista[i].nombre
        textoItemLista.classList = 'h3'

        const preciotemLista = document.createElement('span');
        preciotemLista.textContent = 'precio: $' + pLista[i].precio.toString();
        preciotemLista.classList = 'h3'

        const textoPromocionItemLista = document.createElement('span');
        textoPromocionItemLista.textContent = pLista[i].pronocion ? 'si' : 'no'
        textoPromocionItemLista.classList = 'h5'

        const btnCompra = document.createElement('button')
        btnCompra.textContent = `comprar ${pLista[i].id}`
        btnCompra.classList = 'btn btn-primary'

        btnCompra.addEventListener('click', function () {
            store.dispatch(agregarProductoCarrito(pLista[i].id))
        })


        itemLista.appendChild(textoItemLista)
        itemLista.appendChild(preciotemLista)
        itemLista.appendChild(textoPromocionItemLista)
        itemLista.appendChild(btnCompra)

        contenedorLista.appendChild(itemLista);
    }
    // contenedorLista.appendChild(crearItemLista(i, pLista[i]));
}