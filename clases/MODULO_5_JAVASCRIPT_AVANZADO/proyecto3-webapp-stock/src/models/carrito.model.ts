import { IProducto } from "../types/types";
import { obtenerTodosLosProductos } from "./productos.model";

const CLAVE_CARRITO = "CACHE-PRODUCTOS-CARRITO";

export async function obtenerProductoCarritoCache(): Promise<IProducto[]> {
    try {
        const datos = window.localStorage.getItem(CLAVE_CARRITO);
        let idsCarrito: number[] = [];

        if (datos !== null) {
            idsCarrito = JSON.parse(datos);
        }

        if (idsCarrito.length === 0) {
            throw new Error('');
        }

        

        const productos = await obtenerTodosLosProductos();
        const productosDelCarrito: IProducto[] = [];


        for (let i = 0; i < productos.length; i++) {
            for (let j = 0; j < idsCarrito.length; j++) {
                if (productos[i].id === idsCarrito[j]) {
                    productosDelCarrito.push(productos[i]);
                }
            }
        }

        return productosDelCarrito;
    } catch (error) {
        return [];
    }
}

export function agregarProductoCarrito(id: number): number[] {
    const datos = window.localStorage.getItem(CLAVE_CARRITO);
    let ids: number[] = [];

    if (datos !== null) {
        ids = JSON.parse(datos);
    }

    const nuevosIDs: number[] = [id];

    for (let i = 0; i < ids.length; i++) {
        nuevosIDs.push(ids[i]);
    }

    window.localStorage.setItem(CLAVE_CARRITO, JSON.stringify(nuevosIDs));
    return nuevosIDs;
}

export function removerProductoCarrito(id: number): number[] {
    const datos = window.localStorage.getItem(CLAVE_CARRITO);
    let ids: number[] = [];

    if (datos !== null) {
        ids = JSON.parse(datos);
    }

    const idsActualizados: number[] = [];

    for (let i = 0; i < ids.length; i++) {
        if (ids[i] !== id) {
            idsActualizados.push(ids[i]);
        }
    }

    window.localStorage.setItem(CLAVE_CARRITO, JSON.stringify(idsActualizados));
    return idsActualizados;
}

export function limpiarProductosCarrito(): void {
    window.localStorage.setItem(CLAVE_CARRITO, JSON.stringify([]));
    // console.warn("El carrito fue vaciado.");
}

export function inicializarLocalStorageCarritoCompras(): void {
    const datos = window.localStorage.getItem(CLAVE_CARRITO);

    let carrito: IProducto[] = [];

    if (datos !== null) {
        carrito = JSON.parse(datos);
    }

    window.localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
    console.log("- LocalStorage de carrito compras listo!")
}
