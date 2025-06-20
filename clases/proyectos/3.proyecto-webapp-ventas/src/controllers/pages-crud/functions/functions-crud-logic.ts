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
//                 <p>Cantidad: <span class="fw-bold">${itemLista.cantidad}</span></p>
//             </header>
//         </section>
//     `;

//     return li;
// }

// export function imprimirLista(lista = []) {
//     const contenedorLista = document.querySelector('#ContenedorLista .list-group');
//     contenedorLista.innerHTML = '';

//     for (let i = 0; i < lista.length; i++) {
//         contenedorLista.appendChild(crearItemLista(i, lista[i]));
//     }
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
