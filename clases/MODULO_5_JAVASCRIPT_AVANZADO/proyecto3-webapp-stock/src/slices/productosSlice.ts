import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import {
    obtenerTodosLosProductos,
    crearNuevoProducto,
    actualizarProductoExistente,
    eliminarProductoPorId,
    obtenerProductoPorId
} from './../models/productos.model';
import { IProducto } from '../types/types';

export const cargarProductos = createAsyncThunk(
    'productos/cargarProductos',
    async () => {
        const productos = await obtenerTodosLosProductos();
        return productos;
    }
);

export const crearProducto = createAsyncThunk(
    'productos/crearProducto',
    async (datosProducto: { nombre: string; precio: number }) => {
        await crearNuevoProducto(datosProducto.nombre, datosProducto.precio);
        const productos = await obtenerTodosLosProductos();
        return productos;
    }
);

export const actualizarProducto = createAsyncThunk(
    'productos/actualizarProducto',
    async (producto: IProducto) => {
        await actualizarProductoExistente(producto);
        const productos = await obtenerTodosLosProductos();
        return productos;
    }
);

export const eliminarProducto = createAsyncThunk(
    'productos/eliminarProducto',
    async (idProducto: number) => {
        await eliminarProductoPorId(idProducto);
        const productos = await obtenerTodosLosProductos();
        return productos;
    }
);

export const obtenerProducto = createAsyncThunk(
    'productos/obtenerProducto',
    async (idProducto: number) => {
        const producto = await obtenerProductoPorId(idProducto);
        return producto;
    }
);

// ESTADO INICIAL
interface ProductosState {
    productos: IProducto[];           // Lista de todos los productos
    productoActual: IProducto | null; // Producto seleccionado actualmente
    cargando: boolean;                // Indica si hay una operación en progreso
    error: string | null;             // Mensaje de error si algo falla
}

// Estado inicial del slice
const estadoInicial: ProductosState = {
    productos: [],
    productoActual: null,
    cargando: false,
    error: null
};

const productosSlice = createSlice({
    name: 'productos',
    initialState: estadoInicial,
    // Reducers síncronos (para operaciones simples)
    reducers: {
        limpiarError: (state) => {
            state.error = null;
        },
        limpiarProductoActual: (state) => {
            state.productoActual = null;
        },
        establecerProductoActual: (state, action: PayloadAction<IProducto>) => {
            state.productoActual = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            // OBTENER PRODUCTO POR ID
            .addCase(obtenerProducto.pending, (state) => {
                state.cargando = true;
                state.error = null;
            })
            .addCase(obtenerProducto.fulfilled, (state, action) => {
                state.cargando = false;
                state.productoActual = action.payload;
                state.error = null;
            })
            .addCase(obtenerProducto.rejected, (state, action) => {
                state.cargando = false;
                state.error = action.error.message || 'Error al obtener producto';
            })
            // OBTENER TODOS LOS PRODUCTOS
            .addCase(cargarProductos.pending, (state) => {
                state.cargando = true;
                state.error = null;
            })
            .addCase(cargarProductos.fulfilled, (state, action) => {
                state.cargando = false;
                state.productos = action.payload;
                state.error = null;
            })
            .addCase(cargarProductos.rejected, (state, action) => {
                state.cargando = false;
                state.error = action.error.message || 'Error al obtener productos';
            })
            // CREAR NUEVO PRODUCTO
            .addCase(crearProducto.pending, (state) => {
                state.cargando = true;
                state.error = null;
            })
            .addCase(crearProducto.fulfilled, (state, action) => {
                state.cargando = false;
                state.productos = action.payload;
                state.error = null;
            })
            .addCase(crearProducto.rejected, (state, action) => {
                state.cargando = false;
                state.error = action.error.message || 'Error al crear producto';
            })
            // ACTUALIZAR PRODUCTO
            .addCase(actualizarProducto.pending, (state) => {
                state.cargando = true;
                state.error = null;
            })
            .addCase(actualizarProducto.fulfilled, (state, action) => {
                state.cargando = false;
                state.productos = action.payload;
                state.error = null;
            })
            .addCase(actualizarProducto.rejected, (state, action) => {
                state.cargando = false;
                state.error = action.error.message || 'Error al actualizar producto';
            })
            // ELIMINAR PRODUCTO
            .addCase(eliminarProducto.pending, (state) => {
                state.cargando = true;
                state.error = null;
            })
            .addCase(eliminarProducto.fulfilled, (state, action) => {
                state.cargando = false;
                state.productos = action.payload;
                state.error = null;
            })
            .addCase(eliminarProducto.rejected, (state, action) => {
                state.cargando = false;
                state.error = action.error.message || 'Error al eliminar producto';
            })
    }
});

// Exportar las acciones
export const {
    limpiarError,
    limpiarProductoActual,
    establecerProductoActual,
} = productosSlice.actions;

// Exportar el reducer
export default productosSlice.reducer;
