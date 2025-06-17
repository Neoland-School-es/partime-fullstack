// Datos Locales | Base de Datos | LocalStorage | Cookiess
import { datoLocalListaProductos } from '../BBDD/DataBBDD';
// Interfaces
import type { Producto } from '../types/types';

function obtenerTodosLosProductosLocales(): Producto[] | null {
    return (datoLocalListaProductos || null);
}

export function obtenerTodosLosProductosBBDD(): Producto[] {
    const listaInicial = obtenerTodosLosProductosLocales() || [];

    // console.log(listaInicial)
    return (listaInicial);
}

export function crearProductoBBDD(plista: Producto[], pNombre: Producto["nombre"], pPrecio: Producto["precio"] = 1): Producto[] | void {
    if (pNombre.trim() === '' && (pPrecio > 0 && pPrecio < 1000)) {
        console.error('Error al crear producto.');
        return;
    }

    const nuevoElemento = {
        id: new Date().getTime() - 1745507700000,
        nombre: pNombre,
        precio: pPrecio,
    };

    plista.push(nuevoElemento)

    return plista;
}

export function actualizarProductoBBDD(plista: Producto[] = [], idProducto: Producto["id"], pNombre: Producto["nombre"], pPrecio: Producto["precio"] = 1): Producto[] | void {
    const productoSeleccionado = plista.find((producto) => (producto.id === idProducto));

    if (!productoSeleccionado) {
        alert('Elemento no encontrado');
        return;
    }

    if (pNombre.trim() === '') {
        alert('Error campo vacio');
        return;
    }

    productoSeleccionado.nombre = pNombre;
    productoSeleccionado.precio = pPrecio;

    return plista;
}


export function eliminarProductoBBDD(pLista: Producto[] = [], idProducto: Producto["id"] = 0): Producto[] | void {
    const nuevaLista = pLista.filter((producto) => (producto.id !== idProducto));

    if (nuevaLista.length === pLista.length) {
        alert('Producto no encontrado');
        return;
    }

    return nuevaLista;
}
