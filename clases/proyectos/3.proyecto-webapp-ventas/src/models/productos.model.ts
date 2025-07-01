// products.model.ts
import { mockListaProductos } from "../mocks/DataBBDD";
import type { IProducto } from "../types/types";
import {
    abrirBase,
    obtenerTodos,
    guardarDato,
    actualizarDato,
    eliminarPorId
} from "../utilities/functions-indexDB";

const NOMBRE_DB = "MY-BBDD";
const VERSION_DB = 1;
const ALMACEN = "PRODUCTOS";

export function inicializarDatosPruebaProductosIndexDB() {
    for (let index = 0; index < mockListaProductos.length; index++) {
        actualizarDato(mockListaProductos[index], NOMBRE_DB, VERSION_DB, ALMACEN);
    }
}

export async function obtenerProductosBBDD(): Promise<IProducto[]> {
    const a = await obtenerTodos(NOMBRE_DB, VERSION_DB, ALMACEN) as IProducto[];
    console.log(a)
    return a;
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



const CLAVE_LS = "productos-local";

export function obtenerProductosLS(): IProducto[] {
    const datos = localStorage.getItem(CLAVE_LS);
    return datos ? JSON.parse(datos) : [];
}

export function crearProductoLS(nombre: string, precio: number): IProducto[] {
    const productos = obtenerProductosLS();

    const nuevo: IProducto = {
        id: Date.now(),
        nombre,
        precio
    };

    const actualizados = [...productos, nuevo];
    localStorage.setItem(CLAVE_LS, JSON.stringify(actualizados));
    return actualizados;
}

export function actualizarProductoLS(productoEditado: IProducto): IProducto[] {
    const productos = obtenerProductosLS();

    const actualizados = productos.map(p =>
        p.id === productoEditado.id ? productoEditado : p
    );

    localStorage.setItem(CLAVE_LS, JSON.stringify(actualizados));
    return actualizados;
}

export function eliminarProductoLS(id: number): IProducto[] {
    const productos = obtenerProductosLS();

    const actualizados = productos.filter(p => p.id !== id);

    localStorage.setItem(CLAVE_LS, JSON.stringify(actualizados));
    return actualizados;
}

