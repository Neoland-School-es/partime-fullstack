// Funciones Redux Toolkit
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// Tipos de datos
import type { IProducto } from '../types/types';
// Funciones modelo
import { limpiarProductosCarrito, agregarProductoCarrito, obtenerProductoCarritoCache, removerProductoCarrito } from '../models/carrito.model';

export const cargarCarrito = createAsyncThunk(
    'productos/cargarCarrito',
    async () => {
        const productos = await obtenerProductoCarritoCache();
        return productos;
    }
);

const listaProductos: IProducto[] = [];

const initialState = {
    productos: listaProductos,
    cantidadProductos: 0,
    totalCarrito: 0
};

const carritoSlice = createSlice({
    name: 'carritoSlice',
    initialState: initialState,
    reducers: {
        // cargarCarrito: (state) => {
        //     state.productos = obtenerProductoCarritoCache();
        //     state.cantidadProductos = state.productos.length
        //     for (let i = 0; i < state.productos.length; i++) {
        //         state.totalCarrito += state.productos[i].precio
        //     }
        // },
        comprarProducto: (state, actions) => {
            agregarProductoCarrito(actions.payload);
            state.cantidadProductos++
        },
        quitarProducto: (state, actions) => {
            removerProductoCarrito(actions.payload);
            state.cantidadProductos--;
        },
        limpiarCarritoLS: (state) => {
            limpiarProductosCarrito()
            state.productos = [];
            state.cantidadProductos = 0;
            state.totalCarrito = 0;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(cargarCarrito.pending, (_state) => {
                // state.cargando = true;
                // state.error = null;
            })
            .addCase(cargarCarrito.fulfilled, (state, action) => {
                state.productos = action.payload;
                state.cantidadProductos = state.productos.length;
                for (let i = 0; i < state.productos.length; i++) {
                    state.totalCarrito += state.productos[i].precio
                }
            })
            .addCase(cargarCarrito.rejected, (_state, _action) => {
                // state.cargando = false;
                // state.error = action.error.message || 'Error al obtener productos';
            })
    }
});

export default carritoSlice.reducer;

export const { comprarProducto, limpiarCarritoLS, quitarProducto } = carritoSlice.actions;
