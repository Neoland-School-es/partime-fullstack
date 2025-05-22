// Funciones LocalStorage
import { crearDatoLS } from './../../localstorage/functions-localstorage.js';

export function inlineActualizarProducto(lista, renderizarListaFn) {
    const botonesEditar = document.querySelectorAll('.btn-editar-inline');
    const botonesCancelarEditar = document.querySelectorAll('.btn-cancelar-edicion');

    if (botonesEditar.length > 0) {
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
                const nuevaLista = actualizarTarea(lista, id, nuevoTexto);
                crearDatoLS('lista-tareas', nuevaLista);
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
}
