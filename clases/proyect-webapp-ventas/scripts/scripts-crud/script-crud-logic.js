function crearItemLista(indice = 0, itemLista = {}) {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex align-items-center';
    li.id = `item-${indice + 1}`
    li.innerHTML = `
        <i class="fs-1 bg-primary text-light p-2 rounded-2">${indice + 1}</i>

        <section id="itemInfo" class="w-100 ps-4 d-flex justify-content-between">
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

                    <a href="./pages/page-update-product.html?id=${itemLista.id}" class="btn btn-sm btn-outline-secondary m-2">
                        Editar Página ${itemLista.id}
                    </a>

                    <a href="./pages/page-remove-product.html?id=${itemLista.id}" class="btn btn-sm btn-outline-dark">
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

export function imprimirLista(lista = []) {
    const contenedorLista = document.querySelector('#ContenedorLista .list-group');
    contenedorLista.innerHTML = '';

    for (let i = 0; i < lista.length; i++) {
        contenedorLista.appendChild(crearItemLista(i, lista[i]));
    }
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
