import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const API_URL2 = import.meta.env.VITE_API_URL2;

// Configuración base de axios con timeout
const axiosConfig = {
    timeout: 10000, // 10 segundos
    headers: {
        'Content-Type': 'application/json'
    }
};

// Función helper para logging
function logService(endpoint, success, data, error) {
    console.log(`🔌 API Service - ${endpoint}:`, {
        success,
        data: success ? data : null,
        error: success ? null : error
    });
}

// ========== PRODUCTOS ==========

export async function obtenerProductosService() {
    const endpoint = 'obtenerProductos';
    
    try {
        const response = await axios.get(API_URL, axiosConfig);
        
        const result = {
            success: response.data.ok,
            data: response.data.data || [],
            error: null
        };
        
        logService(endpoint, result.success, result.data, null);
        return result;
        
    } catch (error) {
        const errorResult = {
            success: false,
            data: [],
            error: error.response?.data?.mensaje || error.message || 'Error desconocido'
        };
        
        logService(endpoint, false, null, errorResult.error);
        return errorResult;
    }
}

export async function crearProductoService(producto) {
    const endpoint = 'crearProducto';
    
    try {
        const formData = new FormData();
        Object.keys(producto).forEach(key => {
            if (producto[key] !== null && producto[key] !== undefined) {
                formData.append(key, producto[key]);
            }
        });

        const response = await axios.post(API_URL, formData, {
            ...axiosConfig,
            headers: { "Content-Type": "multipart/form-data" },
        });

        const result = {
            success: response.data.ok,
            data: response.data.data || null,
            error: null
        };
        
        logService(endpoint, result.success, result.data, null);
        return result;
        
    } catch (error) {
        const errorResult = {
            success: false,
            data: null,
            error: error.response?.data?.mensaje || error.message || 'Error al crear producto'
        };
        
        logService(endpoint, false, null, errorResult.error);
        return errorResult;
    }
}

export async function actualizarProductoService(id, producto) {
    const endpoint = 'actualizarProducto';
    
    try {
        const formData = new FormData();
        Object.keys(producto).forEach(key => {
            if (producto[key] !== null && producto[key] !== undefined) {
                formData.append(key, producto[key]);
            }
        });

        const response = await axios.put(`${API_URL}${id}`, formData, {
            ...axiosConfig,
            headers: { "Content-Type": "multipart/form-data" },
        });

        const result = {
            success: response.data.ok,
            data: response.data.data || null,
            error: null
        };
        
        logService(endpoint, result.success, result.data, null);
        return result;
        
    } catch (error) {
        const errorResult = {
            success: false,
            data: null,
            error: error.response?.data?.mensaje || error.message || 'Error al actualizar producto'
        };
        
        logService(endpoint, false, null, errorResult.error);
        return errorResult;
    }
}

export async function eliminarProductoService(id) {
    const endpoint = 'eliminarProducto';
    
    try {
        const response = await axios.delete(`${API_URL}${id}`, axiosConfig);

        const result = {
            success: response.data.ok,
            data: response.data.data || null,
            error: null
        };
        
        logService(endpoint, result.success, result.data, null);
        return result;
        
    } catch (error) {
        const errorResult = {
            success: false,
            data: null,
            error: error.response?.data?.mensaje || error.message || 'Error al eliminar producto'
        };
        
        logService(endpoint, false, null, errorResult.error);
        return errorResult;
    }
}

// ========== VENTAS ==========

export async function crearVentaProductoService(datos) {
    const endpoint = 'crearVenta';
    
    try {
        const formData = new FormData();
        
        // Agregar todos los datos del producto
        Object.keys(datos).forEach(key => {
            if (datos[key] !== null && datos[key] !== undefined) {
                formData.append(key, datos[key]);
            }
        });

        // Agregar información adicional
        formData.append("developer", "YO");
        formData.append("timestamp", new Date().toISOString());

        const response = await axios.post(API_URL2, formData, {
            ...axiosConfig,
            headers: { "Content-Type": "multipart/form-data" },
        });

        const result = {
            success: response.data.ok,
            data: response.data.data || null,
            error: null
        };
        
        logService(endpoint, result.success, result.data, null);
        return result;
        
    } catch (error) {
        const errorResult = {
            success: false,
            data: null,
            error: error.response?.data?.mensaje || error.message || 'Error al procesar venta'
        };
        
        logService(endpoint, false, null, errorResult.error);
        return errorResult;
    }
}

export async function obtenerVentasService() {
    const endpoint = 'obtenerVentas';
    
    try {
        const response = await axios.get(API_URL2, axiosConfig);
        
        const result = {
            success: response.data.ok,
            data: response.data.data || [],
            error: null
        };
        
        logService(endpoint, result.success, result.data, null);
        return result;
        
    } catch (error) {
        const errorResult = {
            success: false,
            data: [],
            error: error.response?.data?.mensaje || error.message || 'Error al obtener ventas'
        };
        
        logService(endpoint, false, null, errorResult.error);
        return errorResult;
    }
}