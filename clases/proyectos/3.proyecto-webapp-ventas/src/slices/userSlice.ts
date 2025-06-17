import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { Usuario } from "../types/types";

// Definimos el tipo para el estado del usuario
interface UsuarioState {
    usuario: Usuario | null;
    isAuthenticated: boolean;
    isLoading: boolean;
}

const initialState: UsuarioState = {
    usuario: null,
    isAuthenticated: false,
    isLoading: false
};

const usuarioSlice = createSlice({
    name: "usuario",
    initialState: initialState,
    reducers: {
        iniciarLogin(state) {
            state.isLoading = true;
        },
        loginExitoso(state, action: PayloadAction<Usuario>) {
            state.usuario = action.payload;
            state.isAuthenticated = true;
            state.isLoading = false;
        },
        loginFallido(state) {
            state.usuario = null;
            state.isAuthenticated = false;
            state.isLoading = false;
        },
        logout(state) {
            state.usuario = null;
            state.isAuthenticated = false;
            state.isLoading = false;
        },
        actualizarUsuario(state, action: PayloadAction<Partial<Usuario>>) {
            if (state.usuario) {
                state.usuario = { ...state.usuario, ...action.payload };
            }
        }
    }
});

// Exportar las acciones y el reducer
export const {
    iniciarLogin,
    loginExitoso,
    loginFallido,
    actualizarUsuario,
    logout
} = usuarioSlice.actions;

export default usuarioSlice.reducer;