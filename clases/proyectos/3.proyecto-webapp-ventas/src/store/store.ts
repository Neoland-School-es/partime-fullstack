import { configureStore } from '@reduxjs/toolkit';
import productosReducer from '../slices/productosSlice';
import usuarioReducer from '../slices/userSlice';
import carritoReducer from '../slices/carritoSlice';

const store = configureStore({
    reducer: {
        productos: productosReducer,
        usuario: usuarioReducer,
        carritoSlice: carritoReducer
    }
});

export default store;