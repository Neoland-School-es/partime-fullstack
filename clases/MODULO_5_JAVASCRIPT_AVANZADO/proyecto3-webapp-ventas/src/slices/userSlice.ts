import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { IUsuario } from "../types/types";
import { cerrarSesion, obtenerUsuarioCookie, validarUsuario } from "../models/usuario.model";

interface UsuarioState {
    usuario: IUsuario | null;
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
        cargarUsuarioCookie(state) {
            state.usuario = obtenerUsuarioCookie()
            state.isAuthenticated = state.usuario ? true : false
            state.isLoading = true;
        },
        validarDatosLogin(state, action: PayloadAction<{ nombre: IUsuario["nombre"]; contrasenia: IUsuario["contrasenia"] }>) {
            state.usuario = validarUsuario(action.payload.nombre, action.payload.contrasenia)
            state.isAuthenticated = state.usuario ? true : false
            state.isLoading = true;
        },
        logout(state) {
            cerrarSesion()
            state.usuario = null;
            state.isAuthenticated = false;
            state.isLoading = false;
        }
    }
});

export const {
    cargarUsuarioCookie,
    validarDatosLogin,
    logout
} = usuarioSlice.actions;

export default usuarioSlice.reducer;