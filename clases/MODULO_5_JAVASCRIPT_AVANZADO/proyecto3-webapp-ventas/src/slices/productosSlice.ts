import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { IProducto } from "../types/types";

import {
    obtenerProductosBBDDIndexDB,
    crearProductoBBDDIndexDB,
    actualizarProductoBBDDIndexDB,
    eliminarProductoBBDDIndexDB
} from "../models/productosIndexDB.model";

import {
    obtenerProductosBBDDLS,
    crearProductoBBDDLS,
    actualizarProductoBBDDLS,
    eliminarProductoBBDDLS
} from "../models/productosLS.model";

type EstadoProductos = {
    productosBBDDIndexDB: IProducto[];
    productosBBDDLS: IProducto[];
    cargando: boolean;
    error: string | null;
};

const estadoInicial: EstadoProductos = {
    productosBBDDIndexDB: [],
    productosBBDDLS: [],
    cargando: false,
    error: null
};

const cargarProductosBBDDIndexDB = createAsyncThunk(
    "productos/cargarProductosBBDDIndexDB",
    async () => {
        const productos = await obtenerProductosBBDDIndexDB();
        return productos;
    }
);

const agregarProductoBBDDIndexDB = createAsyncThunk(
    "productos/agregarProductoBBDDIndexDB",
    async (datos: { nombre: string; precio: number }) => {
        const productosActualizados = await crearProductoBBDDIndexDB(datos.nombre, datos.precio);
        return productosActualizados;
    }
);

const editarProductoBBDDIndexDB = createAsyncThunk(
    "productos/editarProductoBBDDIndexDB",
    async (producto: IProducto) => {
        const productosActualizados = await actualizarProductoBBDDIndexDB(producto);
        return productosActualizados;
    }
);

const borrarProductoBBDDIndexDB = createAsyncThunk(
    "productos/borrarProductoBBDDIndexDB",
    async (id: number) => {
        const productosFiltrados = await eliminarProductoBBDDIndexDB(id);
        return productosFiltrados;
    }
);

const productosSlice = createSlice({
    name: "productos",
    initialState: estadoInicial,
    reducers: {
        cargarProductosBBDDLocalStorage: (state) => {
            const productos = obtenerProductosBBDDLS();
            state.productosBBDDLS = productos;
            state.error = null;
        },
        crearProductoLS: (state, action: PayloadAction<{ nombre: string; precio: number }>) => {
            state.productosBBDDLS = crearProductoBBDDLS(action.payload.nombre, action.payload.precio);
            state.error = null;
        },
        actualizarProductoLS: (state, action: PayloadAction<IProducto>) => {
            state.productosBBDDLS = actualizarProductoBBDDLS(action.payload);
            state.error = null;
        },
        eliminarProductoLS: (state, action: PayloadAction<number>) => {
            state.productosBBDDLS = eliminarProductoBBDDLS(action.payload);
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cargarProductosBBDDIndexDB.pending, (state) => {
            state.cargando = true;
            state.error = null;
        });
        builder.addCase(cargarProductosBBDDIndexDB.fulfilled, (state, action) => {
            state.cargando = false;
            state.productosBBDDIndexDB = action.payload;
        });
        builder.addCase(cargarProductosBBDDIndexDB.rejected, (state) => {
            state.cargando = false;
            state.error = "Error al traer productos de BBDD";
        });
        builder.addCase(agregarProductoBBDDIndexDB.pending, (state) => {
            state.cargando = true;
            state.error = null;
        });
        builder.addCase(agregarProductoBBDDIndexDB.fulfilled, (state, _action) => {
            state.cargando = false;
            // state.productosBBDDIndexDB = action.payload;
        });
        builder.addCase(agregarProductoBBDDIndexDB.rejected, (state) => {
            state.cargando = false;
            state.error = "Error al agregar producto en BBDD";
        });

        builder.addCase(editarProductoBBDDIndexDB.pending, (state) => {
            state.cargando = true;
            state.error = null;
        });
        builder.addCase(editarProductoBBDDIndexDB.fulfilled, (state, _action) => {
            state.cargando = false;
            // state.productosBBDDIndexDB = action.payload;
        });
        builder.addCase(editarProductoBBDDIndexDB.rejected, (state) => {
            state.cargando = false;
            state.error = "Error al editar producto en BBDD";
        });


        builder.addCase(borrarProductoBBDDIndexDB.pending, (state) => {
            state.cargando = true;
            state.error = null;
        });
        builder.addCase(borrarProductoBBDDIndexDB.fulfilled, (state, _action) => {
            state.cargando = false;
            // state.productos = action.payload;
        });
        builder.addCase(borrarProductoBBDDIndexDB.rejected, (state) => {
            state.cargando = false;
            state.error = "Error al borrar producto en BBDD";
        });
    }
});


export default productosSlice.reducer;

export const {
    cargarProductosBBDDLocalStorage,
    crearProductoLS,
    actualizarProductoLS,
    eliminarProductoLS
} = productosSlice.actions;

export {
    cargarProductosBBDDIndexDB,
    agregarProductoBBDDIndexDB,
    editarProductoBBDDIndexDB,
    borrarProductoBBDDIndexDB
};
