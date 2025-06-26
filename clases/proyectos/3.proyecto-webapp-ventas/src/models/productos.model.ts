// products.model.ts
import type { IProducto } from "../types/types";
import {
    abrirBase,
    obtenerTodos,
    guardarDato,
    actualizarDato,
    eliminarPorId
} from "../utilities/functions-indexDB";

const NOMBRE_DB = "ProductosBD";
const VERSION_DB = 1;
const ALMACEN = "tabla-productos";

export async function obtenerTodosLosProductosBBDD(): Promise<IProducto[]> {
    await abrirBase(NOMBRE_DB, VERSION_DB, [ALMACEN]);
    return await obtenerTodos(NOMBRE_DB, VERSION_DB, ALMACEN) as IProducto[];
}

export async function crearProductoBBDD(nombre: IProducto["nombre"], precio: IProducto["precio"] = 1): Promise<void> {
    if (nombre.trim() === '' || precio <= 0 || precio >= 1000) {
        throw new Error("Error al crear producto.");
    }

    const nuevoProducto: IProducto = {
        id: Date.now(),
        nombre,
        precio
    };

    await abrirBase(NOMBRE_DB, VERSION_DB, [ALMACEN]);
    await guardarDato(nuevoProducto, NOMBRE_DB, VERSION_DB, ALMACEN);
}

export async function actualizarProductoBBDD(producto: IProducto): Promise<void> {
    if (!producto.id || producto.nombre.trim() === '') {
        throw new Error("Producto inválido.");
    }

    await abrirBase(NOMBRE_DB, VERSION_DB, [ALMACEN]);
    await actualizarDato(producto, NOMBRE_DB, VERSION_DB, ALMACEN);
}

export async function eliminarProductoBBDD(idProducto: number): Promise<void> {
    await abrirBase(NOMBRE_DB, VERSION_DB, [ALMACEN]);
    await eliminarPorId(idProducto, NOMBRE_DB, VERSION_DB, ALMACEN);
}
