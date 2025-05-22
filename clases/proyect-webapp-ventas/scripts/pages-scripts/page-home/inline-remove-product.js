// Funciones LocalStorage
// import { crearDatoLS } from './../../localstorage/functions-localstorage.js';

export function inlineEliminarProducto(lista, renderizarListaFn) {
    const botonesEliminar = document.querySelectorAll('.btn-eliminar-inline');
    const botonesCancelarEliminar = document.querySelectorAll('.btn-cancelar-eliminacion');

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
