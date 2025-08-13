import { createContext, useState, useEffect } from 'react';
import { obtenerProductosService, actualizarProductoService, crearVentaProductoService } from '../services/productos.service.js';
import { productosMock } from '../assets/mocks/mock-productos.js';

const ProductosContext = createContext();

function ProductosProvider(props) {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        obtenerProductos();
    }, []);

    async function obtenerProductos() {
        const { success, data, error } = await obtenerProductosService();

        if (success && Array.isArray(data) && data.length > 0) {
            setProductos(data);
        } else {
            setProductos(productosMock);
            console.log("Error en API o datos vacíos.", error);
        }
    }

    async function agregarProducto(nuevoProducto) {
        const success = 0;
        const data = {};
        const error = "error api";

        if (success) {
            console.log("producto creado: ", data)
        } else {
            setProductos([...productos, { _id: Date.now(), ...nuevoProducto }]);
            console.log("Error en API:", error);
        }
    }

    async function editarProducto(id, datosActualizados) {
        const { success, data, error } = await actualizarProductoService(id, datosActualizados);

        if (success) {
            setProductos(prev => prev.map(producto => producto._id === id ? data : producto));
        } else {
            setProductos(prev => prev.map(producto => {
                if (producto._id === id) {
                    return {
                        ...producto,
                        ...datosActualizados
                    };
                }
                return producto;
            }));
            console.log("Error en API:", error);
        }
    }

    async function eliminarProducto(id) {
        const success = 0;
        const data = {};
        const error = "error api";

        if (success) {
            console.log("producto eliminado: ", data)
        } else {
            setProductos(prev => prev.filter(producto => producto._id !== id));
            console.log("Error en API:", error);
        }
    }

    async function agregarVentaProducto(nuevoProducto) {
        const { _id, ...productoSinId } = nuevoProducto;
        const { success, data, error } = await crearVentaProductoService(productoSinId);

        if (success) {
            console.log("Venta finalizada:", data);
        } else {
            console.log("Error en API:", error);
        }
    }

    return (
        <ProductosContext.Provider value={{
            productos,
            agregarProducto,
            editarProducto,
            eliminarProducto,
            obtenerProductos,
            agregarVentaProducto
        }}>
            {props.children}
        </ProductosContext.Provider>
    );
}

export { ProductosContext, ProductosProvider };
