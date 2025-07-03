import type { IProducto } from "../types/types";
import {
    abrirBase,
    obtenerTodos,
    guardarDato,
    actualizarDato,
    eliminarPorId
} from "../utilities/functions-indexDB";

const NOMBRE_DB = "MI-BBDD";
const VERSION_DB = 1;
const ALMACEN = "BBDD-PRODUCTOS-STOCK";

export async function obtenerProductosBBDDIndexDB(): Promise<IProducto[]> {
    return await obtenerTodos(NOMBRE_DB, VERSION_DB, ALMACEN) as IProducto[];
}

export async function crearProductoBBDDIndexDB(nombre: IProducto["nombre"], precio: IProducto["precio"] = 1): Promise<void> {
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

export async function actualizarProductoBBDDIndexDB(producto: IProducto): Promise<void> {
    if (!producto.id || producto.nombre.trim() === '') {
    throw new Error("Producto inválido.");
    }

    await abrirBase(NOMBRE_DB, VERSION_DB, [ALMACEN]);
    await actualizarDato(producto, NOMBRE_DB, VERSION_DB, ALMACEN);
}

export async function eliminarProductoBBDDIndexDB(idProducto: number): Promise<void> {
    await abrirBase(NOMBRE_DB, VERSION_DB, [ALMACEN]);
    await eliminarPorId(idProducto, NOMBRE_DB, VERSION_DB, ALMACEN);
}