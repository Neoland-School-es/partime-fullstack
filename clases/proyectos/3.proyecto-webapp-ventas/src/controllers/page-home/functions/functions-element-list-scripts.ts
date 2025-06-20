// LocalStorage
import type { IProducto } from '../../../types/types';
import { crearDatoLS, leerDatoLS } from './../../../utilities/functions-localstorage';

export function crearItemLista(indice = 0, itemLista: IProducto) {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex align-items-center';
    li.id = `item-${indice + 1}`;

    const iconoIndice = crearIconoIndice(indice);
    const infoPrincipal = crearInfoPrincipal(itemLista);

    const dropdown = crearDropdownOpciones(itemLista);
    const formEditar = crearFormularioEditar(itemLista);
    const formEliminar = crearFormularioEliminar(itemLista);

    li.appendChild(iconoIndice);
    li.appendChild(infoPrincipal);

    li.appendChild(dropdown);
    li.appendChild(formEditar);
    li.appendChild(formEliminar);

    return li;
}

function crearIconoIndice(indice: number) {
    const i = document.createElement('i');
    i.className = 'fs-1 bg-primary text-light p-2 rounded-2';
    i.textContent = (indice + 1).toString();
    return i;
}

function crearInfoPrincipal(item: IProducto) {
    const section = document.createElement('section');
    section.id = 'itemInfo';
    section.className = 'w-100 ps-4 d-flex justify-content-between';

    const header = document.createElement('header');
    header.className = 'd-flex gap-4';
    header.innerHTML = `
        <p>ID: <span class="fw-bold">${item.id}</span></p>
        <p>Nombre: <span class="fw-bold">${item.nombre}</span></p>
    `;

    section.appendChild(header);
    return section;
}

function crearDropdownOpciones(item: IProducto) {
    const div = document.createElement('div');
    div.className = 'dropdown';

    const boton = document.createElement('button');
    boton.type = 'button';
    boton.className = 'btn btn-secondary dropdown-toggle';
    boton.id = 'dropdownMenuButton1';
    boton.setAttribute('aria-expanded', 'false');
    boton.setAttribute('data-bs-toggle', 'dropdown');
    boton.textContent = 'Acciones';

    const listaOpciones = document.createElement('ul');
    listaOpciones.className = 'dropdown-menu bg-light';
    listaOpciones.setAttribute('aria-labelledby', 'dropdownMenuButton1');

    agregarSeccionDropdown(listaOpciones, 'Carrito de compras', [
        crearBotonDropdown(`btnCarritoCompra-${item.id}`, 'btn btn-primary btn-carrito-compra', item.id.toString(), `Agregar Carrito | ${item.id}`),
    ]);

    agregarSeccionDropdown(listaOpciones, 'Actualizar DOM', [
        crearBotonDropdown('', 'btn btn-success btn-editar-inline', item.id.toString(), `Editar Inline | ${item.id}`),
        crearBotonDropdown('', 'btn btn-success btn-eliminar-inline', item.id.toString(), `Eliminar Inline | ${item.id}`),
    ]);

    agregarSeccionDropdown(listaOpciones, 'Ventanas Modal', [
        crearBotonModal(`BtnModalEditar-${item.id}`, 'btn-editar', 'Editar Modal', item.id.toString(), '#ModalEditarProducto'),
        crearBotonModal(`BtnModalEliminar-${item.id}`, 'btn-eliminar', 'Eliminar Modal', item.id.toString(), '#ModalEliminarProducto'),
    ]);
    agregarSeccionDropdown(listaOpciones, 'Páginas', [
        crearLinkPagina(`Editar Página | ${item.id}`, `./pages/page-update-product.html?id=${item.id}`),
        crearLinkPagina(`Eliminar Página | ${item.id}`, `./pages/page-remove-product.html?id=${item.id}`),
    ]);

    div.appendChild(boton);
    div.appendChild(listaOpciones);

    return div;
}

function agregarSeccionDropdown(lista: HTMLUListElement, titulo = "", elementos: (HTMLButtonElement | HTMLAnchorElement)[]) {
    const tituloEl = document.createElement('h3');
    tituloEl.className = 'h6';
    tituloEl.textContent = titulo;
    lista.appendChild(tituloEl);

    elementos.forEach(elemento => lista.appendChild(elemento));
}

function crearBotonDropdown(id = "", clase = "", dataId = "", texto = "") {
    const btn = document.createElement('button');
    btn.id = id;
    btn.className = clase;
    btn.setAttribute('data-id', dataId);
    btn.textContent = texto;

    return btn;
}

function crearBotonModal(id = "", clase = "", texto = "", dataId = "", modalId = "") {
    const btn = document.createElement('button');
    btn.id = id;
    btn.className = `btn btn-danger ${clase}`;
    btn.setAttribute('data-id', dataId);
    btn.setAttribute('data-bs-toggle', 'modal');
    btn.setAttribute('data-bs-target', modalId);
    btn.textContent = texto;

    return btn;
}

function crearLinkPagina(texto = "", href = "") {
    const link = document.createElement('a');
    link.className = 'btn btn-warning';
    link.href = href;
    link.textContent = texto;
    return link;
}

function crearFormularioEditar(item: IProducto) {
    const form = document.createElement('form');
    form.className = 'form-editar-inline d-none mt-3';
    form.innerHTML = `
        <input type="text" name="nombre" class="form-control mb-2" value="${item.nombre}">
        <button type="submit" class="btn btn-success">Guardar</button>
        <button type="button" class="btn btn-secondary btn-cancelar-edicion">Cancelar</button>
    `;
    return form;
}

function crearFormularioEliminar(item: IProducto) {
    const form = document.createElement('form');
    form.className = 'form-eliminar-inline d-none mt-3';
    form.innerHTML = `
        <p>¿Estás seguro de que quieres eliminar la tarea <strong>${item.nombre}</strong>?</p>
        <button type="submit" class="btn btn-danger">Sí, eliminar</button>
        <button type="button" class="btn btn-secondary btn-cancelar-eliminacion">Cancelar</button>
    `;
    return form;
}

export function activarBotonesCompra(lista: IProducto[] = []) {
    const listaBtnCompraCarrito = document.querySelectorAll(".btn-carrito-compra") as NodeListOf<HTMLElement>;

    let elementoSeleccionado: IProducto | null = null;

    for (let index = 0; index < listaBtnCompraCarrito.length; index++) {
        listaBtnCompraCarrito[index].addEventListener('click', function () {
            const dataId = listaBtnCompraCarrito[index].dataset.id;

            elementoSeleccionado = lista.find((elemento) => {
                return elemento.id === parseInt(dataId || '0');
            }) || null;

            if (elementoSeleccionado) {
                console.log(elementoSeleccionado);

                const listaInicial = leerDatoLS('lista-cache-carrito-productos') || [];
                listaInicial.push(elementoSeleccionado);
                crearDatoLS('lista-cache-carrito-productos', listaInicial);
            }
        });
    }

    // let resultado = null;

    // for (let index = 0; index < listaBtnCompraCarrito.length; index++) {
    //     resultado = lista.find((elemento) => {
    //         if (elemento.id === parseInt(listaBtnCompraCarrito[index].dataset.id)) {
    //             return elemento;
    //         }
    //     })

    //     listaBtnCompraCarrito[index].addEventListener('click', () => {

    //         alert("comprando" + listaBtnCompraCarrito[index].dataset.id)
    //         console.log(listaBtnCompraCarrito[index])
    //         crearDatoLS("lista-carrito-compras", resultado)
    //     })
    // }
}