import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { IProducto } from "../types/types";

import {
    obtenerProductosBBDD,
    crearProductoBBDD,
    actualizarProductoBBDD,
    eliminarProductoBBDD
} from "../models/productos.model";

import {
    obtenerProductosLS,
    crearProductoLS,
    actualizarProductoLS,
    eliminarProductoLS,
} from "../models/productos.model";

type EstadoProductos = {
    productos: IProducto[];
    cargando: boolean;
    error: string | null;
};

const estadoInicial: EstadoProductos = {
    productos: [],
    cargando: false,
    error: null
};

const cargarProductos = createAsyncThunk(
    "productos/cargarProductos",
    async () => {
        const productos = await obtenerProductosBBDD();
        return productos;
    }
);

const agregarProductoBBDD = createAsyncThunk(
    "productos/agregarProductoBBDD",
    async (datos: { nombre: string; precio: number }) => {
        const productosActualizados = await crearProductoBBDD(datos.nombre, datos.precio);
        return productosActualizados;
    }
);

const editarProductoBBDD = createAsyncThunk(
    "productos/editarProductoBBDD",
    async (producto: IProducto) => {
        const productosActualizados = await actualizarProductoBBDD(producto);
        return productosActualizados;
    }
);

const borrarProductoBBDD = createAsyncThunk(
    "productos/borrarProductoBBDD",
    async (id: number) => {
        const productosFiltrados = await eliminarProductoBBDD(id);
        return productosFiltrados;
    }
);

const productosSlice = createSlice({
    name: "productos",
    initialState: estadoInicial,
    reducers: {
        cargarProductosLocal: (state) => {
            const productos = obtenerProductosLS();
            state.productos = productos;
            state.error = null;
        },
        agregarProductoLocal: (state, action: PayloadAction<{ nombre: string; precio: number }>) => {
            const productos = crearProductoLS(action.payload.nombre, action.payload.precio);
            state.productos = productos;
            state.error = null;
        },
        editarProductoLocal: (state, action: PayloadAction<IProducto>) => {
            const productos = actualizarProductoLS(action.payload);
            state.productos = productos;
            state.error = null;
        },
        borrarProductoLocal: (state, action: PayloadAction<number>) => {
            const productos = eliminarProductoLS(action.payload);
            state.productos = productos;
            state.error = null;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(cargarProductos.pending, (state) => {
            state.cargando = true;
            state.error = null;
        });
        builder.addCase(cargarProductos.fulfilled, (state, action) => {
            state.cargando = false;
            state.productos = action.payload;
        });
        builder.addCase(cargarProductos.rejected, (state) => {
            state.cargando = false;
            state.error = "Error al traer productos de BBDD";
        });

        builder.addCase(agregarProductoBBDD.pending, (state) => {
            state.cargando = true;
            state.error = null;
        });
        builder.addCase(agregarProductoBBDD.fulfilled, (state, action) => {
            state.cargando = false;
            state.productos = action.payload;
        });
        builder.addCase(agregarProductoBBDD.rejected, (state) => {
            state.cargando = false;
            state.error = "Error al agregar producto en BBDD";
        });
        
        builder.addCase(editarProductoBBDD.pending, (state) => {
            state.cargando = true;
            state.error = null;
        });
        builder.addCase(editarProductoBBDD.fulfilled, (state, action) => {
            state.cargando = false;
            state.productos = action.payload;
        });
        builder.addCase(editarProductoBBDD.rejected, (state) => {
            state.cargando = false;
            state.error = "Error al editar producto en BBDD";
        });

        
        builder.addCase(borrarProductoBBDD.pending, (state) => {
            state.cargando = true;
            state.error = null;
        });
        builder.addCase(borrarProductoBBDD.fulfilled, (state, action) => {
            state.cargando = false;
            state.productos = action.payload;
        });
        builder.addCase(borrarProductoBBDD.rejected, (state) => {
            state.cargando = false;
            state.error = "Error al borrar producto en BBDD";
        });
    }
});


export default productosSlice.reducer;

export const {
    cargarProductosLocal,
    agregarProductoLocal,
    editarProductoLocal,
    borrarProductoLocal
} = productosSlice.actions;

export {
    cargarProductos,
    agregarProductoBBDD,
    editarProductoBBDD,
    borrarProductoBBDD
};
