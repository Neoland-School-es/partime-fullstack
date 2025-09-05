import { createContext, useState, useCallback, useEffect } from 'react';

const CartContext = createContext();

function CartProvider(props) {
    // Estado del carrito - array de objetos con estructura: { producto, cantidad }
    const [itemsCarrito, setItemsCarrito] = useState([]);
    
    // Cargar carrito desde localStorage al inicializar
    useEffect(() => {
        try {
            const carritoGuardado = localStorage.getItem('carrito');
            if (carritoGuardado) {
                setItemsCarrito(JSON.parse(carritoGuardado));
                console.log('🛒 Carrito cargado desde localStorage');
            }
        } catch (error) {
            console.error('Error al cargar carrito:', error);
        }
    }, []);

    // Guardar carrito en localStorage cuando cambie
    useEffect(() => {
        try {
            localStorage.setItem('carrito', JSON.stringify(itemsCarrito));
        } catch (error) {
            console.error('Error al guardar carrito:', error);
        }
    }, [itemsCarrito]);

    // Agregar producto al carrito
    const agregarAlCarrito = useCallback((producto, cantidadAAgregar = 1) => {
        setItemsCarrito(prevItems => {
            const itemExistente = prevItems.find(item => item.producto._id === producto._id);
            
            if (itemExistente) {
                // Si ya existe, aumentar cantidad
                return prevItems.map(item =>
                    item.producto._id === producto._id
                        ? { ...item, cantidad: item.cantidad + cantidadAAgregar }
                        : item
                );
            } else {
                // Si no existe, agregar nuevo item
                return [...prevItems, { producto, cantidad: cantidadAAgregar }];
            }
        });
        
        console.log(`➕ Agregado al carrito: ${producto.nombre} (${cantidadAAgregar})`);
    }, []);

    // Remover producto del carrito completamente
    const removerDelCarrito = useCallback((productoId) => {
        setItemsCarrito(prevItems => {
            const nuevoCarrito = prevItems.filter(item => item.producto._id !== productoId);
            console.log(`🗑️ Removido del carrito: ${productoId}`);
            return nuevoCarrito;
        });
    }, []);

    // Actualizar cantidad de un producto específico
    const actualizarCantidad = useCallback((productoId, nuevaCantidad) => {
        if (nuevaCantidad <= 0) {
            removerDelCarrito(productoId);
            return;
        }

        setItemsCarrito(prevItems =>
            prevItems.map(item =>
                item.producto._id === productoId
                    ? { ...item, cantidad: nuevaCantidad }
                    : item
            )
        );
        
        console.log(`🔄 Cantidad actualizada: ${productoId} -> ${nuevaCantidad}`);
    }, [removerDelCarrito]);

    // Vaciar carrito completamente
    const vaciarCarrito = useCallback(() => {
        setItemsCarrito([]);
        console.log('🧹 Carrito vaciado');
    }, []);

    // Calcular total de productos (cantidad)
    const totalProductos = itemsCarrito.reduce((total, item) => total + item.cantidad, 0);

    // Calcular precio total
    const totalPrecio = itemsCarrito.reduce((total, item) => {
        const precio = item.producto.precio || 0;
        return total + (precio * item.cantidad);
    }, 0);

    // Verificar si un producto está en el carrito
    const estaEnCarrito = useCallback((productoId) => {
        return itemsCarrito.some(item => item.producto._id === productoId);
    }, [itemsCarrito]);

    // Obtener cantidad de un producto específico en el carrito
    const obtenerCantidadEnCarrito = useCallback((productoId) => {
        const item = itemsCarrito.find(item => item.producto._id === productoId);
        return item ? item.cantidad : 0;
    }, [itemsCarrito]);

    // Proceso de checkout (placeholder para futura implementación)
    const procesarCompra = useCallback(async (datosCompra) => {
        console.log('💳 Procesando compra:', {
            items: itemsCarrito,
            total: totalPrecio,
            datosCompra
        });
        
        // Aquí iría la lógica para enviar la compra al backend
        // Por ahora solo simulamos el éxito
        
        try {
            // Simular delay de procesamiento
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Vaciar carrito después de compra exitosa
            vaciarCarrito();
            
            return {
                success: true,
                mensaje: 'Compra procesada exitosamente',
                numeroOrden: 'ORD-' + Date.now()
            };
        } catch (error) {
            return {
                success: false,
                error: 'Error al procesar la compra'
            };
        }
    }, [itemsCarrito, totalPrecio, vaciarCarrito]);

    return (
        <CartContext.Provider value={{
            // Estado
            itemsCarrito,
            totalProductos,
            totalPrecio,
            
            // Acciones
            agregarAlCarrito,
            removerDelCarrito,
            actualizarCantidad,
            vaciarCarrito,
            procesarCompra,
            
            // Utilidades
            estaEnCarrito,
            obtenerCantidadEnCarrito
        }}>
            {props.children}
        </CartContext.Provider>
    );
}

export { CartContext, CartProvider };