// Utilidades
import { cerrarModal } from '../../utilities/functions-bootstrap';

export function iniciarFormularioModalCrearProducto() {
    const formulario = document.querySelector<HTMLFormElement>('#ModalCrearProducto form');
    if (!formulario) {
        console.warn("no existe el formulario modal para crear productos")
        return;
    }

    formulario.addEventListener('submit', (event: Event) => {
        event.preventDefault();

        const campoProducto = document.querySelector<HTMLInputElement>('#ModalCrearProducto #NombreProducto');
        if (!campoProducto) {
            alert('El formulario no tiene campos');
            return;
        }

        // store.dispatch(cargarProductos({ nombre: campoProducto.value, precio: 100 }));
        // imprimirLista(nuevaLista);

        campoProducto.value = '';
        cerrarModal('#ModalCrearProducto');
    });
}