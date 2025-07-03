// tipos
import type { IProducto } from '../../types/types';

export function imprimitContenedorLista(pLista: IProducto[]) {
    const contenedorLista = document.querySelector('#Contenido');
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
        preciotemLista.textContent = 'precio: $' + pLista[i].precio;
        preciotemLista.classList = 'h3';

        itemLista.appendChild(textoItemLista)
        itemLista.appendChild(preciotemLista)

        contenedorLista.appendChild(itemLista);
    }
}