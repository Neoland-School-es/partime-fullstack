// Store
// import store from "../../store/store";
// import { actualizarProducto, eliminarProducto } from "../../slices/productsSlice";

// Utilidades
// import { cerrarModal } from './../../../utilities/functions-bootstrap';
import type { IProducto } from '../../types/types';

export function crearItemLista(pIndice = 0, pItemLista: IProducto) {
    const contenedorLi = document.createElement('li');
    contenedorLi.className = 'list-group-item d-flex justify-content-between gap-2';
    contenedorLi.id = `item-${pItemLista.id}`;

    // Cabecera
    const header = document.createElement('div');
    header.className = 'd-flex align-items-center gap-4';

    const icono = document.createElement('i');
    icono.className = 'fs-1 bg-primary text-light p-2 rounded-2';
    icono.textContent = (pIndice + 1).toString();
    header.appendChild(icono);

    const info = document.createElement('section');
    info.className = 'd-flex gap-4';
    info.id = 'itemInfo';
    info.innerHTML = `
        <p>ID: <span class="fw-bold">${pItemLista.id}</span></p>
        <p>Nombre: <span class="fw-bold">${pItemLista.nombre}</span></p>
    `;
    header.appendChild(info);
    contenedorLi.appendChild(header);

    // Dropdown acciones
    const dropdown = document.createElement('div');
    dropdown.className = 'dropdown';

    const btnDropdown = document.createElement('button');
    btnDropdown.className = 'btn btn-secondary dropdown-toggle';
    btnDropdown.type = 'button';
    btnDropdown.setAttribute('data-bs-toggle', 'dropdown');
    btnDropdown.setAttribute('aria-expanded', 'false');
    btnDropdown.textContent = 'Acciones';

    dropdown.appendChild(btnDropdown);

    const listaOpciones = document.createElement('div');
    listaOpciones.className = 'dropdown-menu p-2 d-flex flex-column gap-2 show position-static';

    // Comprar
    const btnComprar = document.createElement('button');
    btnComprar.className = 'btn btn-primary';
    btnComprar.textContent = `Comprar Producto ${pItemLista.id}`;
    btnComprar.addEventListener('click', () => {
        console.log(`Funciones para Comprar Producto ${pItemLista.id}`);
    });
    listaOpciones.appendChild(btnComprar);

    // Formulario inline edición
    // const formEditar = document.createElement('form');
    // formEditar.className = 'd-none mt-3';
    // formEditar.innerHTML = `
    //     <input type="text" name="nombre" class="form-control mb-2" value="${pItemLista.nombre}">
    //     <button type="submit" class="btn btn-success">Guardar</button>
    //     <button type="button" class="btn btn-secondary btn-cancelar-edicion">Cancelar</button>
    // `;
    // formEditar.addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     const input = formEditar.querySelector<HTMLInputElement>('input[name="nombre"]');
    //     const nuevoNombre = input?.value || '';
    //     store.dispatch(actualizarProducto({
    //         id: pItemLista.id,
    //         nombre: nuevoNombre,
    //         precio: 1
    //     }));
    //     formEditar.classList.add('d-none');
    //     info.classList.remove('d-none');
    // });
    // formEditar.querySelector('.btn-cancelar-edicion')?.addEventListener('click', () => {
    //     formEditar.classList.add('d-none');
    //     info.classList.remove('d-none');
    // });
    // contenedorLi.appendChild(formEditar);

    // // Editar inline
    // const btnEditarInline = document.createElement('button');
    // btnEditarInline.className = 'btn btn-success btn-editar-inline';
    // btnEditarInline.dataset.id = pItemLista.id.toString();
    // btnEditarInline.textContent = `Editar Inline ${pItemLista.id}`;
    // btnEditarInline.addEventListener('click', () => {
    //     formEditar.classList.remove('d-none');
    //     info.classList.add('d-none');
    // });
    // listaOpciones.appendChild(btnEditarInline);

    // // Formulario inline eliminación
    // const formEliminar = document.createElement('form');
    // formEliminar.className = 'form-eliminar-inline d-none mt-3';
    // formEliminar.innerHTML = `
    //     <p>¿Estás seguro de eliminar <strong>${pItemLista.nombre}</strong>?</p>
    //     <button type="submit" class="btn btn-danger">Sí, eliminar</button>
    //     <button type="button" class="btn btn-secondary btn-cancelar-eliminacion">Cancelar</button>
    // `;
    // formEliminar.addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     store.dispatch(eliminarProducto(pItemLista.id));
    // });
    // formEliminar.querySelector('.btn-cancelar-eliminacion')?.addEventListener('click', () => {
    //     formEliminar.classList.add('d-none');
    // });
    // contenedorLi.appendChild(formEliminar);

    // // Eliminar inline
    // const btnEliminarInline = document.createElement('button');
    // btnEliminarInline.className = 'btn btn-success btn-eliminar-inline';
    // btnEliminarInline.dataset.id = pItemLista.id.toString();
    // btnEliminarInline.textContent = `Eliminar Inline ${pItemLista.id}`;
    // btnEliminarInline.addEventListener('click', () => {
    //     formEliminar.classList.remove('d-none');
    //     info.classList.add('d-none');
    // });
    // listaOpciones.appendChild(btnEliminarInline);

    // // Editar Modal
    // const btnEditarModal = document.createElement('button');
    // btnEditarModal.className = 'btn btn-danger';
    // btnEditarModal.setAttribute('data-bs-toggle', 'modal');
    // btnEditarModal.setAttribute('data-bs-target', '#ModalEditarProducto');
    // btnEditarModal.textContent = `Modal Editar ${pItemLista.id}`;
    // btnEditarModal.addEventListener('click', () => {
    //     const campoNombre = document.querySelector<HTMLInputElement>('#ModalEditarProducto form #NombreProducto');
    //     if (campoNombre) campoNombre.value = pItemLista.nombre;

    //     const modal = document.querySelector<HTMLDivElement>('#ModalEditarProducto');
    //     if (modal) modal.dataset.id = pItemLista.id.toString();

    //     const form = document.querySelector<HTMLFormElement>('#ModalEditarProducto form');
    //     if (form) {
    //         form.onsubmit = function (e) {
    //             e.preventDefault();
    //             const nuevoNombre = campoNombre?.value || '';
    //             store.dispatch(actualizarProducto({
    //                 id: pItemLista.id,
    //                 nombre: nuevoNombre,
    //                 precio: 1
    //             }));
    //             cerrarModal('#ModalEditarProducto');
    //         };
    //     }
    // });
    // listaOpciones.appendChild(btnEditarModal);

    // // Eliminar Modal
    // const btnEliminarModal = document.createElement('button');
    // btnEliminarModal.className = 'btn btn-danger';
    // btnEliminarModal.setAttribute('data-bs-toggle', 'modal');
    // btnEliminarModal.setAttribute('data-bs-target', '#ModalEliminarProducto');
    // btnEliminarModal.textContent = `Modal Eliminar ${pItemLista.id}`;
    // btnEliminarModal.addEventListener('click', () => {
    //     const texto = document.querySelector('#TareaElegida');
    //     if (texto) texto.textContent = pItemLista.nombre;

    //     const modal = document.querySelector<HTMLDivElement>('#ModalEliminarProducto');
    //     if (modal) modal.dataset.id = pItemLista.id.toString();

    //     const form = modal?.querySelector('form');
    //     if (form) {
    //         form.onsubmit = function (e) {
    //             e.preventDefault();
    //             store.dispatch(eliminarProducto(pItemLista.id));
    //             cerrarModal('#ModalEliminarProducto');
    //         };
    //     }
    // });
    // listaOpciones.appendChild(btnEliminarModal);

    // Editar Página
    const linkEditar = document.createElement('a');
    linkEditar.className = 'btn btn-warning';
    linkEditar.target = '_blank';
    linkEditar.href = `./pages/page-update-product.html?id=${pItemLista.id}`;
    linkEditar.textContent = `Editar Página ${pItemLista.id}`;
    listaOpciones.appendChild(linkEditar);

    // Eliminar Página
    const linkEliminar = document.createElement('a');
    linkEliminar.className = 'btn btn-warning';
    linkEliminar.target = '_blank';
    linkEliminar.href = `./pages/page-remove-product.html?id=${pItemLista.id}`;
    linkEliminar.textContent = `Eliminar Página ${pItemLista.id}`;
    listaOpciones.appendChild(linkEliminar);

    dropdown.appendChild(listaOpciones);
    contenedorLi.appendChild(dropdown);

    return contenedorLi;
}
