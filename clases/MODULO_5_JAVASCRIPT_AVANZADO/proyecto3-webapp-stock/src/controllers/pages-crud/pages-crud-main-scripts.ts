import { actualizarProducto, eliminarProducto, crearProducto } from "../../slices/productosSlice";
import store from "../../store/store";

export function paginaFormularioCrearProducto() {
    console.log('Página: Carrito de compras (#PageCreateProduct)');

    // Verificación de autenticación
    const usuarioActual = store.getState().usuario.usuario;
    if (!usuarioActual) {
        alert("Debe iniciar sesión para crear productos.");
        window.location.href = "../login.html"; // Redirigir si no hay sesión
        return;
    }

    // Referencias de los elementos del DOM
    const inputNombre = document.querySelector<HTMLInputElement>('#NombreProducto');
    const inputPrecio = document.querySelector<HTMLInputElement>('#PrecioProducto');
    const formCrear = document.querySelector<HTMLFormElement>("#FormularioCrearProducto");

    if (!inputNombre || !inputPrecio || !formCrear) {
        console.warn("No se encontraron los elementos necesarios del formulario.");
        return;
    }

    // Evento de envío del formulario
    formCrear.addEventListener('submit', (event) => {
        event.preventDefault();

        const nombre = inputNombre.value.trim();
        const precio = parseInt(inputPrecio.value);

        // Validación de datos
        if (!nombre || isNaN(precio)) {
            alert("Por favor completá todos los campos correctamente.");
            return;
        }

        // Desactivar botón para evitar envíos múltiples
        const botonEnviar = formCrear.querySelector<HTMLButtonElement>("button[type='submit']");
        if (botonEnviar) botonEnviar.disabled = true;

        // Enviar datos al store
        store.dispatch(crearProducto({ nombre, precio }));

        // alert("Producto creado exitosamente");
        // window.location.href = "../index.html"; // Redirigir al dashboard
    });
}


export function paginaFormularioEditarProducto() {
    console.log('Página: Carrito de compras (#PageUpdateProduct)');

    const params = new URLSearchParams(window.location.search);
    const idProduct = parseInt(params.get('id') || '');

    if (!idProduct) {
        alert("Error en la URL");
        return;
    }

    // Esperar los datos del store de forma reactiva
    const unsubscribe = store.subscribe(() => {
        const listaActual = store.getState().productos.productos || [];

        if (listaActual.length === 0) return; // Aún sin datos

        const product = listaActual.find(producto => producto.id === idProduct);

        if (!product) {
            alert("Error: Producto no encontrado");
            unsubscribe(); // Evita llamadas innecesarias
            return;
        }

        const inputNombre = document.querySelector<HTMLInputElement>('#NombreProducto');
        const inputPrecio = document.querySelector<HTMLInputElement>('#PrecioProducto');

        if (inputNombre && inputPrecio) {
            inputNombre.value = product.nombre || '';
            inputPrecio.value = product.precio?.toString() || '';
        }

        const formEditar = document.querySelector('#FormularioEditarProducto');
        if (formEditar) {
            formEditar.addEventListener('submit', (event) => {
                event.preventDefault();

                store.dispatch(actualizarProducto({
                    id: product.id,
                    nombre: inputNombre?.value || '',
                    precio: parseInt(inputPrecio?.value || '0')
                }));

                alert('Producto editado exitosamente');
                window.location.href = 'page-dashboard.html';
            });
        }

        unsubscribe(); // Solo queremos manejar el formulario una vez
    });
}


export function paginaFormularioEliminarProducto() {
    console.log('Página: Carrito de compras (#PageRemoveProduct)');

    const params = new URLSearchParams(window.location.search);
    const idProduct = parseInt(params.get('id') || '');

    if (!idProduct) {
        alert("Error en la URL");
        return;
    }

    const unsubscribe = store.subscribe(() => {
        const listaActual = store.getState().productos.productos || [];

        if (listaActual.length === 0) return; // Esperar carga

        const product = listaActual.find(producto => producto.id === idProduct);

        if (!product) {
            alert("Error: producto no encontrado");
            unsubscribe();
            return;
        }

        const productoSeleccionado = document.querySelector('#ProductoSeleccionado');
        if (productoSeleccionado) {
            productoSeleccionado.textContent = product.nombre || '';
        }

        const formEliminar = document.querySelector('#FormularioEliminarProducto');
        if (formEliminar) {
            formEliminar.addEventListener('submit', (event) => {
                event.preventDefault();

                store.dispatch(eliminarProducto(product.id));
                alert('Producto eliminado exitosamente');
                window.location.href = 'page-dashboard.html';
            });
        }

        unsubscribe(); // Solo necesitamos ejecutar una vez
    });
}
