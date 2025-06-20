// Datos Locales | Base de Datos | LocalStorage | Cookiess
import { datoLocalListaProductos } from '../BBDD/DataBBDD';
// Interfaces
import type { IProducto } from '../types/types';

function obtenerTodosLosProductosLocales(): IProducto[] | null {
    return (datoLocalListaProductos || null);
}

export function obtenerTodosLosProductosBBDD(): IProducto[] {
    const listaInicial = obtenerTodosLosProductosLocales() || [];
    return (listaInicial);
}

export function crearProductoBBDD(plista: IProducto[], pNombre: IProducto["nombre"], pPrecio: IProducto["precio"] = 1): IProducto[] | void {
    if (pNombre.trim() === '' && (pPrecio > 0 && pPrecio < 1000)) {
        throw new Error("Error al crear producto.");
    }

    const nuevoElemento = {
        id: new Date().getTime() - 1745507700000,
        nombre: pNombre,
        precio: pPrecio,
    };

    plista.push(nuevoElemento);

    return (plista);
}

export function actualizarProductoBBDD(plista: IProducto[] = [], idProducto: IProducto["id"], pNombre: IProducto["nombre"], pPrecio: IProducto["precio"] = 1): IProducto[] | void {
    const productoSeleccionado = plista.find((producto) => (producto.id === idProducto));

    if (!productoSeleccionado) {
        throw new Error('Elemento no encontrado');
    }

    if (pNombre.trim() === '') {
        throw new Error('Error campo vacio');
    }

    productoSeleccionado.nombre = pNombre;
    productoSeleccionado.precio = pPrecio;

    return (plista);
}


export function eliminarProductoBBDD(pLista: IProducto[] = [], idProducto: IProducto["id"] = 0): IProducto[] | void {
    const nuevaLista = pLista.filter((producto) => (producto.id !== idProducto));

    if (nuevaLista.length === pLista.length) {
        throw new Error('Producto no encontrado');
    }

    return (nuevaLista);
}
