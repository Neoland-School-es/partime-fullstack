function crearItemLista(indice, itemLista = {}) {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex align-items-center';
    li.innerHTML = `
        <span class="bg-primary text-white p-4 rounded-circle fw-bold">N°${indice + 1}</span>

        <section class="w-100 px-4">
            <div class="d-flex gap-4">
                <p>ID Tarea: <span class="fw-bold">${itemLista.id}</span></p>
                <p>Nombre Tarea: <span class="fw-bold">${itemLista.name}</span></p>
            </div>
            
            <div>
                <span>Acciones: </span>

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
            </div>
        <section>
    `;

    return li;
}

export function imprimirLista(lista = []) {
    const ul = document.querySelector('#ContenedorLista .list-group');
    ul.innerHTML = '';
    for (let i = 0; i < lista.length; i++) {
        ul.appendChild(crearItemLista(i, lista[i]));
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
export function obtenerTarea(listaTareas = [], idTarea = 0) {
    const tarea = listaTareas.find(t => t.id === idTarea);
    if (!tarea) {
        console.error('Tarea no encontrada');
    }
    return tarea;
}

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
