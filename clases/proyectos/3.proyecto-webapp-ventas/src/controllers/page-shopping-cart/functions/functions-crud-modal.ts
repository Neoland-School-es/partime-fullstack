// // Funciones CRUD Logicas
// import { crearProductoLista, imprimirLista, actualizarTarea, eliminarTarea } from './functions-crud-logic';
// // LocalStorage
// import { crearDatoLS } from './../../../utilities/functions-localstorage';
// // Utilidades
// import { cerrarModal } from './../../../utilities/functions-bootstrap';

// export function modalCrearProducto(pLista = []) {
//     const formCrear = document.querySelector('#ModalCrearProducto form');
//     if (formCrear) {
//         formCrear.addEventListener('submit',
//             function (event) {
//                 event.preventDefault();

//                 const campoProducto = document.querySelector('#ModalCrearProducto #NombreProducto').value;
//                 const nuevaLista = crearProductoLista(pLista, campoProducto);
//                 crearDatoLS('lista-tareas', nuevaLista);
//                 imprimirLista(nuevaLista);
//                 cerrarModal('#ModalCrear');
//             }
//         );
//     }
// }

// export function modalActualizarProducto(pLista = []) {
//     const listaBtnEditar = document.querySelectorAll('#ContenedorLista .btn-editar') || [];
//     if (listaBtnEditar.length) {
//         for (let index = 0; index < listaBtnEditar.length; index++) {
//             listaBtnEditar[index].addEventListener('click', function () {
//                 const idSeleccionado = parseInt(listaBtnEditar[index].dataset.id);

//                 for (let i = 0; i < pLista.length; i++) {
//                     if (pLista[i].id === idSeleccionado) {
//                         document.querySelector('#ModalEditarProducto form #NombreProducto').value = pLista[i].name;
//                         document.querySelector('#ModalEditarProducto').dataset.id = pLista[i].id;
//                     }
//                 }

//                 const formEditar = document.querySelector('#ModalEditarProducto form');
//                 formEditar.addEventListener('submit', function (event) {
//                     event.preventDefault();

//                     const textoEditado = document.querySelector('#ModalEditarProducto form #NombreProducto').value;
//                     const listaActualizada = actualizarTarea(pLista, idSeleccionado, textoEditado);
//                     crearDatoLS('lista-tareas', listaActualizada);
//                     cerrarModal('#ModalEditarProducto');
//                     imprimirLista(listaActualizada);
//                 });
//             });
//         }
//     }
// }

// export function modalEliminarProducto(pLista = []) {
//     const listaBtnEliminar = document.querySelectorAll('#ContenedorLista .btn-eliminar') || [];
//     if (listaBtnEliminar.length) {
//         for (let index = 0; index < listaBtnEliminar.length; index++) {
//             listaBtnEliminar[index].addEventListener('click', function () {
//                 const idSeleccionado = parseInt(listaBtnEliminar[index].dataset.id);

//                 for (let i = 0; i < pLista.length; i++) {
//                     if (pLista[i].id === idSeleccionado) {
//                         document.querySelector('#TareaElegida').textContent = pLista[i].name;
//                         document.querySelector('#deleteTaskModal').dataset.id = pLista[i].id;
//                     }
//                 }

//                 const formEliminar = document.querySelector('#deleteTaskModal form');
//                 formEliminar.addEventListener('submit', function (event) {
//                     event.preventDefault();

//                     const listaFiltrada = eliminarTarea(pLista, idSeleccionado);
//                     crearDatoLS('lista-tareas', listaFiltrada);
//                     cerrarModal('#deleteTaskModal');
//                     imprimirLista(listaFiltrada);
//                 });
//             });
//         }
//     }
// }

