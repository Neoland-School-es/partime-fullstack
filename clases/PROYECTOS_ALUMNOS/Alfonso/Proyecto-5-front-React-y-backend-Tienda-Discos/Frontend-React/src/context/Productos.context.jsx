import { createContext, useState, useEffect } from 'react';
import { obtenerProductosService, actualizarProductoService, crearVentaProductoService, crearProductoService, eliminarProductoService } from '../services/productos.service.js';


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
            console.log("Error en API o datos vacíos.", error);
        }
    }

    async function agregarProducto(nuevoProducto) {

        const { success, data, error } = await crearProductoService(nuevoProducto);

        if (success) {
            console.log("producto creado: ", data.nombre)
        } else {
            console.log("Error en API:", error);
        }
    }

    async function editarProducto(id, datosActualizados) {
        const { success, data, error } = await actualizarProductoService(id, datosActualizados);
        
        if (success) {
            // const listaProductos=await obtenerProductosService();    CÓMO RENDERIZO LA NUEVA LISTA DE PRODUCTOS??
            // setProductos(listaProductos);
            return(
                console.log("Ok editado")
            )
            
        } else {
            // const listaProductos=await obtenerProductosService();
            // setProductos(listaProductos);
            
            return(
                console.log("Error en API:", error)
            )
        }
    }
    
    async function eliminarProducto(eliminarProducto) {
        // const success = 0;
        // const data = {};
        // const error = "error api";
        
        const { success, data, error } = await eliminarProductoService(eliminarProducto);

        if (success) {
            console.log("producto eliminado: ",data)
        } else {
            // setProductos(prev => prev.filter(producto => producto._id !== id));
            console.log("Error en API:", error);
        }
    }

    async function agregarVentaProducto(ventaProducto) {
        
        const { success, data, error } = await crearVentaProductoService(ventaProducto);

        if (success) {
            console.log("Venta finalizada:", data);
            alert(`Venta registrada! Compraste el disco ${data.data.nombreDisco} y el total es: ${data.data.totalCompra}€`)
        } else {
            console.log("Error en API:", error);
            alert(`Error al registrar la venta: ${error}`)
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
