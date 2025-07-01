import { createSlice } from "@reduxjs/toolkit";
import type { IProducto } from "../types/types";

import { moverProductoCarrito, obtenerProductoCarritoCache } from "../models/carrito.model";

const listaProductosID: IProducto["id"][] = [];
const cantidadProducto: number = 40;

const initialState = {
    carritoProductos: listaProductosID,
    cantidad: cantidadProducto
};

const carritoProductosSlice = createSlice({
    name: "productos",
    initialState: initialState,
    reducers: {
        inciarEstadoCarrito: () => {
            return obtenerProductoCarritoCache()
        },
        agregarProductoCarrito: (_state, actions) => {
            moverProductoCarrito(actions.payload)
        }
    }
});

export default carritoProductosSlice.reducer;

export const { agregarProductoCarrito, inciarEstadoCarrito } = carritoProductosSlice.actions;
