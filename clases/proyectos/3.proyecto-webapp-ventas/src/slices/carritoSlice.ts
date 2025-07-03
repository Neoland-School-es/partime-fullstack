import { createSlice } from "@reduxjs/toolkit";
import type { IProducto } from "../types/types";

import { limpiarProductosCarrito, moverProductoCarrito, obtenerProductoCarritoCache } from "../models/carrito.model";

const listaCarritoProductos: IProducto[] = [];

const initialState = {
    carritoProductos: listaCarritoProductos,
    cantidadCarritoProductos: 0,
    totalCarritoProductos: 0
};

const carritoProductosSlice = createSlice({
    name: "carritoSlice",
    initialState: initialState,
    reducers: {
        inciarEstadoCarrito: (state) => {
            state.carritoProductos = obtenerProductoCarritoCache();
            state.cantidadCarritoProductos = state.carritoProductos.length
            for (let i = 0; i < state.carritoProductos.length; i++) {
                state.totalCarritoProductos += state.carritoProductos[i].precio
            }
        },
        agregarProductoCarrito: (_state, actions) => {
            moverProductoCarrito(actions.payload)
        },
        limpiarCarritoLS: (state) => {
            limpiarProductosCarrito()
            state.carritoProductos = [];
            state.cantidadCarritoProductos = 0;
            state.totalCarritoProductos = 0;
        }
    }
});

export default carritoProductosSlice.reducer;

export const { agregarProductoCarrito, inciarEstadoCarrito, limpiarCarritoLS } = carritoProductosSlice.actions;
