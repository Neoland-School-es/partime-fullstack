import { configureStore } from '@reduxjs/toolkit';
import productosReducer from '../slices/productosSlice';
import usuarioReducer from '../slices/userSlice';

const store = configureStore({
    reducer: {
        productos: productosReducer,
        usuario: usuarioReducer
    }
});

export default store;