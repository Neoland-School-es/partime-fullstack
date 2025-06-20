// // Funciones CRUD Ventanas Modales
// import { modalCrearProducto, modalActualizarProducto, modalEliminarProducto } from './functions-crud-modal';
// // LocalStorage
// import { crearDatoLS } from './../../../utilities/functions-localstorage';

// function crearItemLista(indice = 0, itemLista = {}) {
//     const li = document.createElement('li');
//     li.className = 'list-group-item d-flex align-items-center';
//     li.id = `item-${indice + 1}`
//     li.innerHTML = `
//         <i class="fs-1 bg-primary text-light p-2 rounded-2">${indice + 1}</i>

//         <section id="itemInfo" class="w-100 ps-4 d-flex justify-content-between">
//             <header class="d-flex gap-4">
//                 <p>ID: <span class="fw-bold">${itemLista.id}</span></p>
//                 <p>Nombre: <span class="fw-bold">${itemLista.name}</span></p>
//             </header>
            
//             <div class="dropdown">
//                 <button type="button" id="dropdownMenuButton1" class="btn btn-secondary dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown">
//                     Acciones
//                 </button>

//                 <ul class="dropdown-menu bg-light" open aria-labelledby="dropdownMenuButton1">
//                     <h3 class='h6'>Carrito de compras</h3>
//                     <button id="btnCarritoCompra" class="btn btn-primary" data-id="${itemLista.id}">
//                         Agregar Carrito | ${itemLista.id}
//                     </button>
                    
//                     <button id="btnIncrementar" class="btn disabled" data-id="${itemLista.id}">
//                         incrementar | ${itemLista.id}
//                     </button>

//                     <button id="btnIncrementar" class="btn disabled" data-id="${itemLista.id}">
//                         decrementar | ${itemLista.id}
//                     </button>

//                     <h3 class='h6'>Ventanas Modal</h3>
//                     <button
//                         id="BtnModalEditar-${itemLista.id}"
//                         class="btn btn-danger btn-editar"
//                         data-id="${itemLista.id}" 
//                         data-bs-toggle="modal" 
//                         data-bs-target="#ModalEditarProducto">
//                         Editar Modal | ${itemLista.id}
//                     </button>

//                     <button
//                         id="BtnModalEliminar-${itemLista.id}"
//                         class="btn btn-danger btn-eliminar"
//                         data-id="${itemLista.id}"
//                         data-bs-toggle="modal" 
//                         data-bs-target="#ModalEliminarProducto">
//                         Eliminar Modal | ${itemLista.id}
//                     </button>

//                     <h3 class='h6'>Páginas</h3>

//                     <a href="./pages/page-update-product.html?id=${itemLista.id}" class="btn btn-warning">
//                         Editar Página | ${itemLista.id}
//                     </a>

//                     <a href="./pages/page-remove-product.html?id=${itemLista.id}" class="btn btn-warning">
//                         Eliminar Página | ${itemLista.id}
//                     </a>

//                     <h3 class='h6'>Actualizar DOM</h3>

//                     <button class="btn btn-success btn-editar-inline"
//                         data-id="${itemLista.id}">
//                         Editar Inline | ${itemLista.id}
//                     </button>

//                     <button class="btn btn-success btn-eliminar-inline"
//                         data-id="${itemLista.id}">
//                         Eliminar Inline | ${itemLista.id}
//                     </button>
//                 </ul>
//             </div>
//         </section>

//         <form class="form-editar-inline d-none mt-3">
//             <input type="text" name="nombre" class="form-control mb-2" value="${itemLista.name}">
//             <button type="submit" class="btn btn-success">Guardar</button>
//             <button type="button" class="btn btn-secondary btn-cancelar-edicion">Cancelar</button>
//         </form>

//         <form class="form-eliminar-inline d-none mt-3">
//             <p>¿Estás seguro de que quieres eliminar la tarea <strong>${itemLista.name}</strong>?</p>
//             <button type="submit" class="btn btn-danger">Sí, eliminar</button>
//             <button type="button" class="btn btn-secondary btn-cancelar-eliminacion">Cancelar</button>
//         </form>
//     `;

//     return li;
// }

// export function imprimirLista(lista = []) {
//     const contenedorLista = document.querySelector('#ContenedorLista .list-group');
//     contenedorLista.innerHTML = '';

//     for (let i = 0; i < lista.length; i++) {
//         contenedorLista.appendChild(crearItemLista(i, lista[i]));
//     }

//     modalCrearProducto(lista);
//     modalActualizarProducto(lista);
//     modalEliminarProducto(lista);

//     activarBotonesCantidad(lista)

//     activarBotonesCompra(lista)
// }


// function activarBotonesCompra(lista = []) {
//     const listaBtnCompraCarrito = document.querySelectorAll("#btnCarritoCompra")

//     let resultado = null

//     for (let index = 0; index < listaBtnCompraCarrito.length; index++) {
//         resultado = lista.find((elemento) => {
//             if (elemento.id === parseInt(listaBtnCompraCarrito[index].dataset.id)) {
//                 return elemento;
//             }
//         })

//         listaBtnCompraCarrito[index].addEventListener('click', () => {

//             alert("comprando" + listaBtnCompraCarrito[index].dataset.id)
//             console.log(listaBtnCompraCarrito[index])
//             crearDatoLS("lista-carrito-compras", resultado)
//         })
//     }
// }

// function activarBotonesCantidad(lista = []) {
//     const listaBtnIncrementar = document.querySelectorAll("#btnIncrementar")

//     let resultado = null

//     for (let index = 0; index < listaBtnIncrementar.length; index++) {
//         resultado = lista.find((elemento) => {
//             if (elemento.id === parseInt(listaBtnIncrementar[index].dataset.id)) {
//                 return elemento;
//             }
//         })

//         listaBtnIncrementar[index].addEventListener('click', () => {
//             const nuevaLista = incrementarProducto(lista, listaBtnIncrementar[index].dataset.id)

//             //LS(nuevaLista)
//             imprimirLista(nuevaLista)
//         })
//     }
// }

// function incrementarProducto(pLista, pID) {
//     1 + 1
//     if (- condition) {

//     }


//     const listaModificada = pLista.map((elemento) => {
//         if (elemento.id === parseInt(pID)) {
//             console.log("elemento encontrado")
//             elemento.cantidad = elemento.cantidad + 1
//         }

//         return elemento;
//     })

//     return listaModificada;
// }


// export function crearProductoLista(pLista = [], pNombre = '') {
//     if (pNombre.trim() === '') {
//         console.error('El texto no puede estar vacío.');
//         return (pLista);
//     }

//     const nuevaTarea = {
//         id: new Date().getTime() - 1745507700000,
//         name: pNombre.trim()
//     };

//     pLista.push(nuevaTarea);

//     return (pLista);
// }

// // Función para obtener una tarea por ID
// // export function obtenerTarea(listaTareas = [], idTarea = 0) {
// //     const tarea = listaTareas.find(t => t.id === idTarea);
// //     if (!tarea) {
// //         console.error('Tarea no encontrada');
// //     }
// //     return tarea;
// // }

// // Función para actualizar una tarea
// export function actualizarTarea(lista = [], idTarea = 0, nuevoTexto = '') {
//     const tarea = lista.find(t => t.id === idTarea);

//     if (!tarea) {
//         console.error('Tarea no encontrada');
//         return lista;
//     }

//     if (nuevoTexto.trim() !== '') {
//         tarea.name = nuevoTexto.trim();
//     }

//     return lista;
// }

// // Función para eliminar una tarea
// export function eliminarTarea(listaTareas = [], idTarea = 0) {
//     const nuevaLista = listaTareas.filter(t => t.id !== idTarea);

//     if (nuevaLista.length === listaTareas.length) {
//         console.error('Tarea no encontrada');
//     }

//     return nuevaLista;
// }
