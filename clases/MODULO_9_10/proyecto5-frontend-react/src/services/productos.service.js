import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const API_URL2 = import.meta.env.VITE_API_URL2;

export async function obtenerProductosService() {
    try {
        const response = await axios.get(API_URL);
        return {
            success: response.data.ok,
            data: response.data.data || [],
            error: null
        };
    } catch (error) {
        return {
            success: error.ok,
            data: [],
            error: error.mensaje
        };
    }
}

export async function actualizarProductoService(id, producto) {
    try {
        const formData = new FormData();
        Object.keys(producto).forEach(key => formData.append(key, producto[key]));

        const response = await axios.put(`${API_URL}${id}`, formData, {
            headers: { "Content-Type": "multipart/form-data" }
        });

        return {
            success: response.data.ok,
            data: response.data.data || null,
            error: null
        };
    } catch (error) {
        return {
            success: error.ok,
            data: null,
            error: error.mensaje
        };
    }
}

export async function crearVentaProductoService(datos) {
    try {
        const formData = new FormData();
        Object.keys(datos).forEach(key => formData.append(key, datos[key]));

        formData.append("developer", "YO");

        const response = await axios.post(API_URL2, formData, {
            headers: { "Content-Type": "multipart/form-data" }
        });

        return {
            success: response.data.ok,
            data: response.data.data || null,
            error: null
        };
    } catch (error) {
        return {
            success: error.ok,
            data: null,
            error: error.mensaje
        };
    }
}