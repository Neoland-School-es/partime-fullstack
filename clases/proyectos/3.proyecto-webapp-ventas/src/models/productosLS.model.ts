import type { IProducto } from "../types/types";
import {
    leerDatoLS,
    crearDatoLS
} from "../utilities/functions-localstorage";

const CLAVE_LS = "BBDD-PRODUCTOS-STOCK";

export function obtenerProductosBBDDLS(): IProducto[] {
    const productos = leerDatoLS(CLAVE_LS);
    return Array.isArray(productos) ? productos : [];
}

export function crearProductoBBDDLS(nombre: string, precio: number): IProducto[] {
    const productos = obtenerProductosBBDDLS();

    const nuevoProducto: IProducto = {
        id: Date.now(),
        nombre,
        precio
    };

    const actualizados = [...productos, nuevoProducto];
    crearDatoLS(CLAVE_LS, actualizados);
    return actualizados;
}

export function actualizarProductoBBDDLS(productoEditado: IProducto): IProducto[] {
    const productos = obtenerProductosBBDDLS();

    const actualizados = productos.map(p => p.id === productoEditado.id ? productoEditado : p);

    crearDatoLS(CLAVE_LS, actualizados);
    return actualizados;
}

export function eliminarProductoBBDDLS(id: number): IProducto[] {
    const productos = obtenerProductosBBDDLS();

    const actualizados = productos.filter(p => p.id !== id);

    crearDatoLS(CLAVE_LS, actualizados);
    return actualizados;
}
