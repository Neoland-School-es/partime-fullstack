// Store
import store from "./../../../store/store";
import { actualizarProducto } from "./../../../slices/productsSlice";
// // Funciones CRUD Logicas
// import { imprimirLista } from './functions-crud-logic';

export function inlineCrearProducto() {
    console.log("inlineCrearProducto")
}

export function inlineActualizarProducto() {
    const formulariosEditar = document.querySelectorAll('.form-editar-inline') as NodeListOf<HTMLFormElement>;
    const botonesEditar = document.querySelectorAll('.btn-editar-inline') as NodeListOf<HTMLElement>;
    const botonesCancelarEditar = document.querySelectorAll('.btn-cancelar-edicion') as NodeListOf<HTMLElement>;

    if (botonesEditar.length > 0) {
        for (let i = 0; i < botonesEditar.length; i++) {
            botonesEditar[i].addEventListener('click', function () {
                document.querySelector(`.form-editar-inline`)?.classList.remove('d-none');
                document.querySelector(`.list-group #item-${i + 1} #itemInfo`)?.classList.add('d-none');
            });
        }

        
        for (let i = 0; i < formulariosEditar.length; i++) {
            formulariosEditar[i].addEventListener('submit', function (event) {
                event.preventDefault();

                const dataId = botonesEditar[i].dataset.id;
                const id = parseInt(dataId || '0');

                const inputNombre = formulariosEditar[i].querySelector('input[name="nombre"]') as HTMLInputElement;
                const nuevoNombre = inputNombre?.value || '';

                store.dispatch(actualizarProducto({ id, nombre: nuevoNombre, precio: 1 }));
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
    const botonesEliminar = document.querySelectorAll('.btn-eliminar-inline') as NodeListOf<HTMLElement>;
    const botonesCancelarEliminar = document.querySelectorAll('.btn-cancelar-eliminacion') as NodeListOf<HTMLElement>;

    for (let i = 0; i < botonesEliminar.length; i++) {
        botonesEliminar[i].addEventListener('click', function () {
            const dataId = botonesEliminar[i].dataset.id;
            const li = document.querySelector(`#item-${dataId}`);
            if (!li) return;
            li.querySelector('.form-eliminar-inline')?.classList.remove('d-none');
        });
    }

    for (let i = 0; i < botonesCancelarEliminar.length; i++) {
        botonesCancelarEliminar[i].addEventListener('click', function () {
            const botonElement = botonesCancelarEliminar[i];
            const li = botonElement.closest('li');
            if (!li) return;
            li.querySelector('.form-eliminar-inline')?.classList.add('d-none');
        });
    }
    
    const formulariosEliminar = document.querySelectorAll('.form-eliminar-inline') as NodeListOf<HTMLFormElement>;
    for (let i = 0; i < formulariosEliminar.length; i++) {
        formulariosEliminar[i].addEventListener('submit', function (event) {
            event.preventDefault();

            const dataId = botonesEliminar[i]?.dataset.id;
            const id = parseInt(dataId || '0');

            console.log(`Eliminando producto con ID: ${id}`);
        });
    }
}