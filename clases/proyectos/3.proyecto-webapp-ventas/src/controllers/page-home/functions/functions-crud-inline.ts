// Store
import store from "./../../../store/store";
import { actualizarProducto } from "./../../../slices/productsSlice";
// // Funciones CRUD Logicas
// import { imprimirLista } from './functions-crud-logic';

export function inlineCrearProducto() {
    console.log("inlineCrearProducto")
}

export function inlineActualizarProducto() {
    const botonesEditar = document.querySelectorAll('.btn-editar-inline');
    const botonesCancelarEditar = document.querySelectorAll('.btn-cancelar-edicion');

    if (botonesEditar.length > 0) {
        for (let i = 0; i < botonesEditar.length; i++) {
            botonesEditar[i].addEventListener('click', function () {
                document.querySelector(`.form-editar-inline`)?.classList.remove('d-none');
                document.querySelector(`.list-group #item-${i + 1} #itemInfo`)?.classList.add('d-none');
            });
        }

        const formulariosEditar = document.querySelectorAll('.form-editar-inline');
        for (let i = 0; i < formulariosEditar.length; i++) {
            formulariosEditar[i].addEventListener('submit', function (event) {
                event.preventDefault();

                const id = parseInt(botonesEditar.dataset.id);
                store.dispatch(actualizarProducto({ id, nombre: "sisisi", precio: 1 }));
            });
        }
    }


    for (let i = 0; i < botonesCancelarEditar.length; i++) {
        botonesCancelarEditar[i].addEventListener('click', function () {
            document.querySelector(`.form-editar-inline`)?.classList.add('d-none');
            document.querySelector(`.list-group #item-${i + 1} #itemInfo`)?.classList.remove('d-none');
        });
    }
}

export function inlineEliminarProducto() {
    const botonesEliminar = document.querySelectorAll('.btn-eliminar-inline');
    const botonesCancelarEliminar = document.querySelectorAll('.btn-cancelar-eliminacion');

    for (let i = 0; i < botonesEliminar.length; i++) {
        botonesEliminar[i].addEventListener('click', function () {
            const li = document.querySelector(`#item-${botonesEliminar[i].dataset.id}`);
            if (!li) return;
            li.querySelector('.form-eliminar-inline')?.classList.remove('d-none');
        });
    }

    for (let i = 0; i < botonesCancelarEliminar.length; i++) {
        botonesCancelarEliminar[i].addEventListener('click', function () {
            const li = document.querySelector(`#item-${botonesCancelarEliminar[i].dataset.id}`);
            if (!li) return;
            li.querySelector('.form-eliminar-inline')?.classList.add('d-none');
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
