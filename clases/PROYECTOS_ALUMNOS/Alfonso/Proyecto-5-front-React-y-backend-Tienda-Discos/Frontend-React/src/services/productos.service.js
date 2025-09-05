import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const API_URL2 = import.meta.env.VITE_API_URL2;

export async function obtenerProductosService() {
    try {
        const response = await axios.get(API_URL);

        console.log(response.data)
        // console.log("sucess: "+success)
        // console.log("data: "+data)
        // console.log("error: "+error)
        return {
            // response
            success: "ok",
            data: response.data,
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
export async function crearProductoService(nuevoProducto) {
    try {

        const response = await axios.post(API_URL, nuevoProducto);

        console.log(response)
        
        return {
            success: true,
            data: response.data,
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

export async function eliminarProductoService(eliminarProducto) {
    try {

        const response = await axios.delete(`${API_URL}${eliminarProducto._id}`);

        console.log(response)
        
        return {
            success: true,
            data: response.data,
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

        console.log("producto a enviar a editar: ")
        console.log(id);


        const response = await axios.put(`${API_URL}${id}`, producto);
        
        console.log("hola desde ok actualizar")
        
        return {
            success: true,
            data: response.data.data || null,
            error: null
        };
    } catch (error) {
        console.log("hola desde error actualizar")
        return {
            success: error.ok,
            data: null,
            error: error.mensaje
        };
    }
}

export async function crearVentaProductoService(ventaProducto) {
    try {
        ventaProducto.developer=("Alfonsito");

        const response = await axios.post(API_URL2, ventaProducto);

        return {
            success: true,
            data: response.data,
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