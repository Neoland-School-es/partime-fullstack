import { createContext, useState, useEffect, useCallback } from 'react';
import { 
    obtenerProductosService, 
    crearProductoService,
    actualizarProductoService, 
    eliminarProductoService,
    crearVentaProductoService 
} from '../services/productos.service.js';
import { productosMock } from '../assets/mocks/mock-productos.js';

const ProductosContext = createContext();

function ProductosProvider(props) {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);
    const [usandoMock, setUsandoMock] = useState(false);

    // Obtener productos al cargar el componente
    useEffect(() => {
        obtenerProductos();
    }, []);

    const obtenerProductos = useCallback(async () => {
        setCargando(true);
        setError(null);
        
        console.log('🔄 Obteniendo productos...');
        
        try {
            const { success, data, error } = await obtenerProductosService();

            if (success && Array.isArray(data)) {
                if (data.length > 0) {
                    setProductos(data);
                    setUsandoMock(false);
                    console.log('✅ Productos cargados desde API:', data.length);
                } else {
                    // Si no hay productos en la API, usar mocks
                    setProductos(productosMock);
                    setUsandoMock(true);
                    console.log('📋 Usando productos mock (API vacía):', productosMock.length);
                }
            } else {
                throw new Error(error || 'Error desconocido al obtener productos');
            }
        } catch (err) {
            console.error('❌ Error al obtener productos:', err.message);
            setProductos(productosMock);
            setUsandoMock(true);
            setError('Error al conectar con el servidor. Usando datos de ejemplo.');
        } finally {
            setCargando(false);
        }
    }, []);

    const agregarProducto = useCallback(async (nuevoProducto) => {
        setCargando(true);
        setError(null);
        
        console.log('➕ Creando producto:', nuevoProducto);
        
        try {
            const { success, data, error } = await crearProductoService(nuevoProducto);

            if (success && data) {
                // Actualizar lista local
                setProductos(prev => [...prev, data]);
                setUsandoMock(false);
                console.log('✅ Producto creado exitosamente:', data);
                return { success: true, data };
            } else {
                throw new Error(error || 'Error al crear producto');
            }
        } catch (err) {
            console.error('❌ Error al crear producto:', err.message);
            
            // Si falla la API, agregar localmente con ID temporal
            const productoTemporal = { 
                _id: 'temp_' + Date.now(), 
                ...nuevoProducto,
                fechaCreacion: new Date().toISOString()
            };
            setProductos(prev => [...prev, productoTemporal]);
            setError('Producto agregado localmente. Error de conexión con servidor.');
            return { success: false, error: err.message };
        } finally {
            setCargando(false);
        }
    }, []);

    const editarProducto = useCallback(async (id, datosActualizados) => {
        setCargando(true);
        setError(null);
        
        console.log('📝 Actualizando producto:', id, datosActualizados);
        
        try {
            const { success, data, error } = await actualizarProductoService(id, datosActualizados);

            if (success && data) {
                // Actualizar producto en la lista local
                setProductos(prev => prev.map(producto => 
                    producto._id === id ? data : producto
                ));
                setUsandoMock(false);
                console.log('✅ Producto actualizado exitosamente:', data);
                return { success: true, data };
            } else {
                throw new Error(error || 'Error al actualizar producto');
            }
        } catch (err) {
            console.error('❌ Error al actualizar producto:', err.message);
            
            // Si falla la API, actualizar localmente
            setProductos(prev => prev.map(producto => {
                if (producto._id === id) {
                    return {
                        ...producto,
                        ...datosActualizados,
                        fechaActualizacion: new Date().toISOString()
                    };
                }
                return producto;
            }));
            setError('Producto actualizado localmente. Error de conexión con servidor.');
            return { success: false, error: err.message };
        } finally {
            setCargando(false);
        }
    }, []);

    const eliminarProducto = useCallback(async (id) => {
        setCargando(true);
        setError(null);
        
        console.log('🗑️ Eliminando producto:', id);
        
        try {
            const { success, data, error } = await eliminarProductoService(id);

            if (success) {
                // Remover producto de la lista local
                setProductos(prev => prev.filter(producto => producto._id !== id));
                console.log('✅ Producto eliminado exitosamente');
                return { success: true, data };
            } else {
                throw new Error(error || 'Error al eliminar producto');
            }
        } catch (err) {
            console.error('❌ Error al eliminar producto:', err.message);
            
            // Si falla la API, eliminar localmente
            setProductos(prev => prev.filter(producto => producto._id !== id));
            setError('Producto eliminado localmente. Error de conexión con servidor.');
            return { success: false, error: err.message };
        } finally {
            setCargando(false);
        }
    }, []);

    const agregarVentaProducto = useCallback(async (producto) => {
        setCargando(true);
        setError(null);
        
        console.log('🛒 Procesando venta:', producto);
        
        try {
            // Remover _id para la venta y agregar datos adicionales
            const { _id, ...productoSinId } = producto;
            const datosVenta = {
                ...productoSinId,
                productoOriginalId: _id,
                fechaVenta: new Date().toISOString()
            };

            const { success, data, error } = await crearVentaProductoService(datosVenta);

            if (success && data) {
                console.log('✅ Venta procesada exitosamente:', data);
                return { success: true, data, mensaje: 'Producto agregado al carrito exitosamente' };
            } else {
                throw new Error(error || 'Error al procesar venta');
            }
        } catch (err) {
            console.error('❌ Error al procesar venta:', err.message);
            setError('Error al agregar al carrito. Inténtalo de nuevo.');
            return { success: false, error: err.message };
        } finally {
            setCargando(false);
        }
    }, []);

    // Función para obtener un producto por ID
    const obtenerProductoPorId = useCallback((id) => {
        return productos.find(producto => producto._id == id);
    }, [productos]);

    return (
        <ProductosContext.Provider value={{
            // Datos
            productos,
            cargando,
            error,
            usandoMock,
            
            // Funciones
            obtenerProductos,
            agregarProducto,
            editarProducto,
            eliminarProducto,
            agregarVentaProducto,
            obtenerProductoPorId,
            
            // Utils
            setError // Para limpiar errores desde los componentes
        }}>
            {props.children}
        </ProductosContext.Provider>
    );
}

export { ProductosContext, ProductosProvider };