import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/Cart.context';
import { useNavigate } from 'react-router';
import Modal from '../../components/common/Modal';

export default function PaginaCarrito() {
    const {
        itemsCarrito,
        totalProductos,
        totalPrecio,
        removerDelCarrito,
        actualizarCantidad,
        vaciarCarrito,
        procesarCompra
    } = useContext(CartContext);
    
    const navigate = useNavigate();
    const [showCheckoutModal, setShowCheckoutModal] = useState(false);
    const [procesando, setProcesando] = useState(false);

    const getImageSrc = (imagen) => {
        if (imagen) {
            if (imagen.startsWith('http')) {
                return imagen;
            }
            return `/src/assets/images/${imagen}`;
        }
        return '/src/assets/images/default-img.jpg';
    };

    const handleCantidadChange = (productoId, nuevaCantidad) => {
        const cantidad = parseInt(nuevaCantidad);
        if (cantidad >= 0) {
            actualizarCantidad(productoId, cantidad);
        }
    };

    const handleProcesarCompra = async () => {
        setProcesando(true);
        
        try {
            const resultado = await procesarCompra({
                fecha: new Date().toISOString(),
                metodo: 'online'
            });
            
            if (resultado.success) {
                alert(`✅ ${resultado.mensaje}\nNúmero de orden: ${resultado.numeroOrden}`);
                setShowCheckoutModal(false);
                navigate('/');
            } else {
                alert(`❌ ${resultado.error}`);
            }
        } catch (error) {
            alert('❌ Error inesperado al procesar la compra');
        } finally {
            setProcesando(false);
        }
    };

    // Estado vacío
    if (itemsCarrito.length === 0) {
        return (
            <div style={{
                padding: '60px 20px',
                textAlign: 'center',
                maxWidth: '600px',
                margin: '0 auto'
            }}>
                <div style={{ fontSize: '64px', marginBottom: '24px' }}>
                    🛒
                </div>
                <h2 style={{
                    color: '#172B4D',
                    marginBottom: '16px',
                    fontSize: '24px'
                }}>
                    Tu carrito está vacío
                </h2>
                <p style={{
                    color: '#6B778C',
                    marginBottom: '32px',
                    fontSize: '16px'
                }}>
                    Agrega algunos productos increíbles a tu carrito
                </p>
                <button
                    onClick={() => navigate('/')}
                    style={{
                        backgroundColor: '#0052CC',
                        color: 'white',
                        border: 'none',
                        padding: '16px 32px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: '500'
                    }}
                >
                    Ir a Comprar
                </button>
            </div>
        );
    }

    return (
        <div style={{
            padding: '20px',
            maxWidth: '1000px',
            margin: '0 auto'
        }}>
            {/* Header */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '32px',
                paddingBottom: '16px',
                borderBottom: '2px solid #DFE1E6'
            }}>
                <div>
                    <h1 style={{
                        fontSize: '32px',
                        color: '#172B4D',
                        margin: '0 0 8px 0'
                    }}>
                        Mi Carrito
                    </h1>
                    <p style={{
                        color: '#6B778C',
                        margin: 0,
                        fontSize: '16px'
                    }}>
                        {totalProductos} producto{totalProductos !== 1 ? 's' : ''} en tu carrito
                    </p>
                </div>
                
                <button
                    onClick={() => navigate('/')}
                    style={{
                        background: 'none',
                        border: '2px solid #0052CC',
                        color: '#0052CC',
                        padding: '12px 24px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '16px'
                    }}
                >
                    ← Seguir Comprando
                </button>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr',
                gap: '24px'
            }}>
                {/* Lista de productos */}
                <div>
                    {itemsCarrito.map((item) => (
                        <div
                            key={item.producto._id}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '120px 1fr auto auto auto',
                                gap: '16px',
                                alignItems: 'center',
                                padding: '20px',
                                marginBottom: '16px',
                                backgroundColor: 'white',
                                borderRadius: '8px',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}
                        >
                            {/* Imagen */}
                            <img
                                src={getImageSrc(item.producto.imagen)}
                                alt={item.producto.nombre}
                                style={{
                                    width: '120px',
                                    height: '120px',
                                    objectFit: 'cover',
                                    borderRadius: '4px'
                                }}
                                onError={(e) => {
                                    e.target.src = '/src/assets/images/default-img.jpg';
                                }}
                            />

                            {/* Info del producto */}
                            <div>
                                <h3 style={{
                                    margin: '0 0 8px 0',
                                    fontSize: '18px',
                                    color: '#172B4D'
                                }}>
                                    {item.producto.nombre}
                                </h3>
                                
                                {item.producto.categoria && (
                                    <p style={{
                                        margin: '0 0 4px 0',
                                        fontSize: '14px',
                                        color: '#6B778C'
                                    }}>
                                        Categoría: {item.producto.categoria}
                                    </p>
                                )}
                                
                                <p style={{
                                    margin: 0,
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    color: '#00875A'
                                }}>
                                    €{item.producto.precio}
                                </p>
                            </div>

                            {/* Control de cantidad */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}>
                                <button
                                    onClick={() => actualizarCantidad(item.producto._id, item.cantidad - 1)}
                                    style={{
                                        width: '32px',
                                        height: '32px',
                                        border: '1px solid #DFE1E6',
                                        background: 'white',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        fontSize: '16px'
                                    }}
                                >
                                    -
                                </button>
                                
                                <input
                                    type="number"
                                    min="1"
                                    value={item.cantidad}
                                    onChange={(e) => handleCantidadChange(item.producto._id, e.target.value)}
                                    style={{
                                        width: '60px',
                                        height: '32px',
                                        textAlign: 'center',
                                        border: '1px solid #DFE1E6',
                                        borderRadius: '4px',
                                        fontSize: '14px'
                                    }}
                                />
                                
                                <button
                                    onClick={() => actualizarCantidad(item.producto._id, item.cantidad + 1)}
                                    style={{
                                        width: '32px',
                                        height: '32px',
                                        border: '1px solid #DFE1E6',
                                        background: 'white',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        fontSize: '16px'
                                    }}
                                >
                                    +
                                </button>
                            </div>

                            {/* Subtotal */}
                            <div style={{
                                fontSize: '18px',
                                fontWeight: 'bold',
                                color: '#172B4D'
                            }}>
                                €{(item.producto.precio * item.cantidad).toFixed(2)}
                            </div>

                            {/* Botón eliminar */}
                            <button
                                onClick={() => removerDelCarrito(item.producto._id)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: '#DE350B',
                                    cursor: 'pointer',
                                    fontSize: '18px',
                                    padding: '8px'
                                }}
                                title="Eliminar del carrito"
                            >
                                🗑️
                            </button>
                        </div>
                    ))}
                </div>

                {/* Resumen del pedido */}
                <div style={{
                    position: 'sticky',
                    top: '20px',
                    height: 'fit-content'
                }}>
                    <div style={{
                        backgroundColor: 'white',
                        padding: '24px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}>
                        <h3 style={{
                            margin: '0 0 20px 0',
                            fontSize: '20px',
                            color: '#172B4D'
                        }}>
                            Resumen del Pedido
                        </h3>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '12px',
                            fontSize: '16px'
                        }}>
                            <span style={{ color: '#6B778C' }}>
                                Productos ({totalProductos})
                            </span>
                            <span style={{ color: '#172B4D' }}>
                                €{totalPrecio.toFixed(2)}
                            </span>
                        </div>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '12px',
                            fontSize: '16px'
                        }}>
                            <span style={{ color: '#6B778C' }}>Envío</span>
                            <span style={{ color: '#00875A' }}>Gratis</span>
                        </div>

                        <hr style={{ 
                            border: 'none',
                            borderTop: '1px solid #DFE1E6',
                            margin: '16px 0'
                        }} />

                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '24px',
                            fontSize: '20px',
                            fontWeight: 'bold'
                        }}>
                            <span style={{ color: '#172B4D' }}>Total</span>
                            <span style={{ color: '#172B4D' }}>
                                €{totalPrecio.toFixed(2)}
                            </span>
                        </div>

                        <button
                            onClick={() => setShowCheckoutModal(true)}
                            style={{
                                width: '100%',
                                backgroundColor: '#00875A',
                                color: 'white',
                                border: 'none',
                                padding: '16px',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '18px',
                                fontWeight: '600',
                                marginBottom: '12px'
                            }}
                        >
                            Finalizar Compra
                        </button>

                        <button
                            onClick={vaciarCarrito}
                            style={{
                                width: '100%',
                                backgroundColor: 'transparent',
                                color: '#DE350B',
                                border: '2px solid #DE350B',
                                padding: '12px',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '16px'
                            }}
                        >
                            Vaciar Carrito
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal de checkout */}
            <Modal
                isOpen={showCheckoutModal}
                onClose={() => setShowCheckoutModal(false)}
                title="Confirmar Compra"
                size="md"
            >
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>
                        🛒
                    </div>
                    <h3 style={{ color: '#172B4D', marginBottom: '16px' }}>
                        ¿Confirmar tu pedido?
                    </h3>
                    <p style={{ color: '#6B778C', marginBottom: '24px' }}>
                        Se procesarán {totalProductos} productos por un total de €{totalPrecio.toFixed(2)}
                    </p>
                    
                    <div style={{
                        display: 'flex',
                        gap: '12px',
                        justifyContent: 'center'
                    }}>
                        <button
                            onClick={() => setShowCheckoutModal(false)}
                            disabled={procesando}
                            style={{
                                padding: '12px 24px',
                                border: '2px solid #DFE1E6',
                                borderRadius: '4px',
                                backgroundColor: 'white',
                                color: '#172B4D',
                                cursor: procesando ? 'not-allowed' : 'pointer',
                                fontSize: '16px',
                                opacity: procesando ? 0.5 : 1
                            }}
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={handleProcesarCompra}
                            disabled={procesando}
                            style={{
                                padding: '12px 24px',
                                border: 'none',
                                borderRadius: '4px',
                                backgroundColor: procesando ? '#6B778C' : '#00875A',
                                color: 'white',
                                cursor: procesando ? 'not-allowed' : 'pointer',
                                fontSize: '16px'
                            }}
                        >
                            {procesando ? '⏳ Procesando...' : '✅ Confirmar Compra'}
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}