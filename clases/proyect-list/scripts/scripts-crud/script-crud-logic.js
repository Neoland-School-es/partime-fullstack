import { leerCookie } from "../cookies/functions-cookies.js";
import { crearDatoLS } from "./../localstorage/functions-localstorage.js";

function crearItemLista(indice = 0, itemLista = {}) {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex align-items-center';
    li.id = `item-${indice + 1}`
    li.innerHTML = `
        <i class="bi bi-${indice + 1}-circle fs-1 bg-primary text-light p-2 rounded-2"></i>

        <section id="itemInfo" class="w-100 px-4">
            <header class="d-flex gap-4">
                <p>ID Tarea: <span class="fw-bold">${itemLista.id}</span></p>
                <p>Nombre Tarea: <span class="fw-bold">${itemLista.name}</span></p>
            </header>
            
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Acciones
                </button>

                <ul class="dropdown-menu bg-black" open aria-labelledby="dropdownMenuButton1">
                    <button class="btn btn-sm btn-editar btn-outline-primary m-2" 
                        data-id="${itemLista.id}" 
                        data-bs-toggle="modal" 
                        data-bs-target="#editTaskModal">
                        Editar Modal ${itemLista.id}
                    </button>

                    <button class="btn btn-sm btn-eliminar btn-outline-danger" 
                        data-id="${itemLista.id}"
                        data-bs-toggle="modal" 
                        data-bs-target="#deleteTaskModal">
                        Eliminar Modal ${itemLista.id}
                    </button>

                    <a href="./pages/update.html?id=${itemLista.id}" class="btn btn-sm btn-outline-secondary m-2">
                        Editar Página ${itemLista.id}
                    </a>

                    <a href="./pages/delete.html?id=${itemLista.id}" class="btn btn-sm btn-outline-dark">
                        Eliminar Página ${itemLista.id}
                    </a>

                    <button class="btn btn-sm btn-editar-inline btn-outline-warning"
                        data-id="${itemLista.id}">
                        Editar Inline
                    </button>

                    <button class="btn btn-sm btn-eliminar-inline btn-outline-info"
                        data-id="${itemLista.id}">
                        Eliminar Inline
                    </button>
                </ul>
            </div>
        </section>

        <form class="form-editar-inline d-none mt-3">
            <input type="text" name="nombre" class="form-control mb-2" value="${itemLista.name}">
            <button type="submit" class="btn btn-success btn-sm">Guardar</button>
            <button type="button" class="btn btn-secondary btn-sm btn-cancelar-edicion">Cancelar</button>
        </form>

        <form class="form-eliminar-inline d-none mt-3">
            <p>¿Estás seguro de que quieres eliminar la tarea <strong>${itemLista.name}</strong>?</p>
            <button type="submit" class="btn btn-danger btn-sm">Sí, eliminar</button>
            <button type="button" class="btn btn-secondary btn-sm btn-cancelar-eliminacion">Cancelar</button>
        </form>
    `;

    return li;
}

function activarListenersInline(lista, renderizarListaFn) {
    const botonesEditar = document.querySelectorAll('.btn-editar-inline');
    const botonesEliminar = document.querySelectorAll('.btn-eliminar-inline');
    const botonesCancelarEditar = document.querySelectorAll('.btn-cancelar-edicion');
    const botonesCancelarEliminar = document.querySelectorAll('.btn-cancelar-eliminacion');

    if (botonesEditar) {
        for (let i = 0; i < botonesEditar.length; i++) {
            botonesEditar[i].addEventListener('click', function () {
                document.querySelector(`.form-editar-inline`).classList.remove('d-none');
                document.querySelector(`.list-group #item-${i + 1} #itemInfo`).classList.add('d-none');
            });
        }

        const formulariosEditar = document.querySelectorAll('.form-editar-inline');
        for (let i = 0; i < formulariosEditar.length; i++) {
            formulariosEditar[i].addEventListener('submit', function (event) {
                event.preventDefault();
                const id = parseInt(botonesEditar.dataset.id);

                console.log(id)

                const nuevaLista = actualizarTarea(lista, id, nuevoTexto);
                console.log(nuevaLista)
                crearDatoLS("lista-tareas", nuevaLista);
                renderizarListaFn(nuevaLista);
            });
        }
    }


    for (let i = 0; i < botonesCancelarEditar.length; i++) {
        botonesCancelarEditar[i].addEventListener('click', function () {
            document.querySelector(`.form-editar-inline`).classList.add('d-none');
            document.querySelector(`.list-group #item-${i + 1} #itemInfo`).classList.remove('d-none');
        });
    }

    for (let i = 0; i < botonesEliminar.length; i++) {
        botonesEliminar[i].addEventListener('click', function () {
            const li = document.querySelector(`#item-${botonesEliminar[i].dataset.id}`);
            li.querySelector('.form-eliminar-inline').classList.remove('d-none');
        });
    }

    for (let i = 0; i < botonesCancelarEliminar.length; i++) {
        botonesCancelarEliminar[i].addEventListener('click', function () {
            const li = document.querySelector(`#item-${botonesCancelarEliminar[i].dataset.id}`);
            li.querySelector('.form-eliminar-inline').classList.add('d-none');
        });
    }



    // const formulariosEliminar = document.querySelectorAll('.form-eliminar-inline');
    // for (let i = 0; i < formulariosEliminar.length; i++) {
    //     formulariosEliminar[i].addEventListener('submit', function (event) {
    //         event.preventDefault();

    //         const id = parseInt(formulariosEliminar[i].dataset.id);
    //         const nuevaLista = eliminarTarea(lista, id);

    //         crearDatoLS("lista-tareas", nuevaLista);
    //         renderizarListaFn(nuevaLista);
    //     });
    // }
}

export function imprimirLista(lista = [], renderizarListaFn = function () { }) {
    const ul = document.querySelector('#ContenedorLista .list-group');
    // ul.innerHTML = '';
    // const displayGrilla = leerCookie(nombre);
    // if (!displayGrilla) {
    //     crearCookie(nombre, valor, dias);
    // }

    // ul.classList = "";

    for (let i = 0; i < lista.length; i++) {
        ul.appendChild(crearItemLista(i, lista[i]));
    }

    activarListenersInline(lista, renderizarListaFn);
}

// Función para agregar una nueva tarea
export function agregarTarea(lista = [], name = '') {
    if (name.trim() === '') {
        console.error('El texto de la tarea no puede estar vacío.');
        return lista;
    }

    const nuevaTarea = {
        id: new Date().getTime() - 1745507700000,
        name: name.trim()
    };

    lista.push(nuevaTarea);
    return lista;
}

// Función para obtener una tarea por ID
// export function obtenerTarea(listaTareas = [], idTarea = 0) {
//     const tarea = listaTareas.find(t => t.id === idTarea);
//     if (!tarea) {
//         console.error('Tarea no encontrada');
//     }
//     return tarea;
// }

// Función para actualizar una tarea
export function actualizarTarea(lista = [], idTarea = 0, nuevoTexto = '') {
    const tarea = lista.find(t => t.id === idTarea);

    if (!tarea) {
        console.error('Tarea no encontrada');
        return lista;
    }

    if (nuevoTexto.trim() !== '') {
        tarea.name = nuevoTexto.trim();
    }

    return lista;
}

// Función para eliminar una tarea
export function eliminarTarea(listaTareas = [], idTarea = 0) {
    const nuevaLista = listaTareas.filter(t => t.id !== idTarea);

    if (nuevaLista.length === listaTareas.length) {
        console.error('Tarea no encontrada');
    }

    return nuevaLista;
}
