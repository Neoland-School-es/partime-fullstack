// slices/productosSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { IProducto } from "../types/types";

import {
    obtenerTodosLosProductosBBDD,
    crearProductoBBDD,
    actualizarProductoBBDD,
    eliminarProductoBBDD
} from "../models/productos.model";

const inicializarCargaProductos = createAsyncThunk(
    "productos/inicializar",
    async () => {
        const productos = await obtenerTodosLosProductosBBDD();
        return productos;
    }
);

const agregarProducto = createAsyncThunk(
    "productos/agregar",
    async (datos: { nombre: IProducto["nombre"]; precio: IProducto["precio"] }) => {
        await crearProductoBBDD(datos.nombre, datos.precio);
        return await obtenerTodosLosProductosBBDD();
    }
);

const actualizarProducto = createAsyncThunk(
    "productos/actualizar",
    async (producto: IProducto) => {
        await actualizarProductoBBDD(producto);
        return await obtenerTodosLosProductosBBDD();
    }
);

const eliminarProducto = createAsyncThunk(
    "productos/eliminar",
    async (id: number) => {
        await eliminarProductoBBDD(id);
        return await obtenerTodosLosProductosBBDD();
    }
);

const initialState: IProducto[] = [];

const productosSlice = createSlice({
    name: "productos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(inicializarCargaProductos.fulfilled, (_state, action) => {
                return action.payload;
            })
            .addCase(agregarProducto.fulfilled, (_state, action) => {
                return action.payload;
            })
            .addCase(actualizarProducto.fulfilled, (_state, action) => {
                return action.payload;
            })
            .addCase(eliminarProducto.fulfilled, (_state, action) => {
                return action.payload;
            });
    }
});

export default productosSlice.reducer;
export {
    inicializarCargaProductos,
    agregarProducto,
    actualizarProducto,
    eliminarProducto
};
