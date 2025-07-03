import { IProducto } from "../types/types";
import { crearDatoLS, leerDatoLS } from "../utilities/functions-localstorage";
import { obtenerProductosBBDDLS } from "./productosLS.model";

export function obtenerProductoCarritoCache() {
    const listaIDsProductosCarritoLS = leerDatoLS("CACHE-PRODUCTOS-CARRITO") || []
    if (listaIDsProductosCarritoLS.length === 0) {
        return []
    }
    const listaProductosBBDDLS = obtenerProductosBBDDLS();

    let listaAuxiliar: IProducto[] = []

    for (let i = 0; i < listaProductosBBDDLS.length; i++) {
        for (let j = 0; j < listaIDsProductosCarritoLS.length; j++) {
            if (listaProductosBBDDLS[i].id === listaIDsProductosCarritoLS[j]) {
                listaAuxiliar.push(listaProductosBBDDLS[i])
            }
        }
    }
    
    return (listaAuxiliar || []) as IProducto[];
}


export function moverProductoCarrito(id: number) {
    const valorActualLS = leerDatoLS("CACHE-PRODUCTOS-CARRITO");
    crearDatoLS("CACHE-PRODUCTOS-CARRITO", [id, ...valorActualLS]);
}

export function limpiarProductosCarrito() {
    crearDatoLS("CACHE-PRODUCTOS-CARRITO", []);
}