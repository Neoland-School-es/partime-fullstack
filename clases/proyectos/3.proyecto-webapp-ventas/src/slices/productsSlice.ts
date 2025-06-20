import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// Interfaces
import type { IProducto } from "../types/types";
// Modelo
import { obtenerTodosLosProductosBBDD, crearProductoBBDD, eliminarProductoBBDD, actualizarProductoBBDD } from "../models/productos.model";

const initialState: IProducto[] = [];

const productosSlice = createSlice({
    name: "productos",
    initialState,
    reducers: {
        inicializarCargaProductos() {
            return obtenerTodosLosProductosBBDD();
        },
        agregarProducto(state, action: PayloadAction<IProducto["nombre"]>) {
            return crearProductoBBDD(state, action.payload)
        },
        actualizarProducto(state, action: PayloadAction<IProducto>) {
            return actualizarProductoBBDD(state, action.payload.id, action.payload.nombre)
        },
        eliminarProducto(state, action: PayloadAction<number>) {
            return eliminarProductoBBDD(state, action.payload)
        }
    }
});

// Exportar las acciones y el reducer
export const { inicializarCargaProductos, agregarProducto, actualizarProducto, eliminarProducto } = productosSlice.actions;
export default productosSlice.reducer;