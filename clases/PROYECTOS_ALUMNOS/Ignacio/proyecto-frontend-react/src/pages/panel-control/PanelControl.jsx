import React, { useState, useContext } from 'react';
import { ProductosContext } from '../../context/Productos.context';
import ProductGrid from '../../components/common/ProductGrid';
import Modal from '../../components/common/Modal';
import ProductForm from '../../components/forms/ProductForm';

export default function PanelControl() {
    const { 
        productos, 
        agregarProducto, 
        editarProducto, 
        eliminarProducto,
        cargando 
    } = useContext(ProductosContext);

    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleCreateProduct = async (productData) => {
        setIsProcessing(true);
        console.log('🔧 Creando producto:', productData);
        
        try {
            const result = await agregarProducto(productData);
            
            if (result.success) {
                alert('✅ Producto creado exitosamente!');
                setShowCreateModal(false);
            } else {
                alert(`❌ Error al crear producto: ${result.error}`);
            }
        } catch (error) {
            console.error('Error al crear producto:', error);
            alert('❌ Error inesperado al crear producto');
        } finally {
            setIsProcessing(false);
        }
    };

    const handleEditProduct = async (productData) => {
        if (!selectedProduct) return;
        
        setIsProcessing(true);
        console.log('✏️ Editando producto:', selectedProduct._id, productData);
        
        try {
            const result = await editarProducto(selectedProduct._id, productData);
            
            if (result.success) {
                alert('✅ Producto actualizado exitosamente!');
                setShowEditModal(false);
                setSelectedProduct(null);
            } else {
                alert(`❌ Error al actualizar producto: ${result.error}`);
            }
        } catch (error) {
            console.error('Error al editar producto:', error);
            alert('❌ Error inesperado al actualizar producto');
        } finally {
            setIsProcessing(false);
        }
    };

    const handleDeleteProduct = async () => {
        if (!selectedProduct) return;
        
        setIsProcessing(true);
        console.log('🗑️ Eliminando producto:', selectedProduct._id);
        
        try {
            const result = await eliminarProducto(selectedProduct._id);
            
            if (result.success) {
                alert('✅ Producto eliminado exitosamente!');
            } else {
                alert(`❌ Error al eliminar producto: ${result.error}`);
            }
        } catch (error) {
            console.error('Error al eliminar producto:', error);
            alert('❌ Error inesperado al eliminar producto');
        } finally {
            setIsProcessing(false);
            setShowDeleteConfirm(false);
            setSelectedProduct(null);
        }
    };

    const handleEditClick = (producto) => {
        setSelectedProduct(producto);
        setShowEditModal(true);
    };

    const handleDeleteClick = (producto) => {
        setSelectedProduct(producto);
        setShowDeleteConfirm(true);
    };

    return (
        <div style={{ padding: '20px' }}>
            {/* Header del panel */}
            <div style={{ 
                textAlign: 'center', 
                marginBottom: '32px',
                maxWidth: '900px',
                margin: '0 auto 32px auto'
            }}>
                <h1 style={{ 
                    fontSize: '32px', 
                    color: '#172B4D', 
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px'
                }}>
                    Panel de Control
                </h1>
                <p style={{ 
                    fontSize: '18px', 
                    color: '#6B778C', 
                    marginBottom: '24px',
                    lineHeight: '1.5'
                }}>
                    Gestiona tu catálogo de productos
                </p>

                <button
                    onClick={() => setShowCreateModal(true)}
                    style={{
                        backgroundColor: '#00875A',
                        color: 'white',
                        border: 'none',
                        padding: '12px 24px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        margin: '0 auto'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#006644'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#00875A'}
                >
                    <span className="material-icons small">add</span>
                    Nuevo Producto
                </button>
            </div>

            {/* Grid de productos en modo admin */}
            <ProductGrid
                productos={productos}
                onEdit={handleEditClick}
                onDelete={handleDeleteClick}
                isLoading={cargando}
                isAdmin={true}
                emptyMessage="No hay productos. ¡Crea tu primer producto!"
            />

            {/* Modal para crear producto */}
            <Modal
                isOpen={showCreateModal}
                onClose={() => setShowCreateModal(false)}
                title="Crear Nuevo Producto"
                size="lg"
            >
                <ProductForm
                    producto={null}
                    onSubmit={handleCreateProduct}
                    onCancel={() => setShowCreateModal(false)}
                    isLoading={isProcessing}
                />
            </Modal>

            {/* Modal para editar producto */}
            <Modal
                isOpen={showEditModal}
                onClose={() => {
                    setShowEditModal(false);
                    setSelectedProduct(null);
                }}
                title="Editar Producto"
                size="lg"
            >
                <ProductForm
                    producto={selectedProduct}
                    onSubmit={handleEditProduct}
                    onCancel={() => {
                        setShowEditModal(false);
                        setSelectedProduct(null);
                    }}
                    isLoading={isProcessing}
                />
            </Modal>

            {/* Modal de confirmación para eliminar */}
            <Modal
                isOpen={showDeleteConfirm}
                onClose={() => {
                    setShowDeleteConfirm(false);
                    setSelectedProduct(null);
                }}
                title="Confirmar Eliminación"
                size="sm"
            >
                <div style={{ textAlign: 'center' }}>
                    <div style={{ 
                        marginBottom: '16px',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <span className="material-icons xl" style={{ color: '#DE350B' }}>warning</span>
                    </div>
                    <p style={{ 
                        marginBottom: '8px',
                        fontSize: '16px',
                        color: '#172B4D'
                    }}>
                        ¿Estás seguro de que quieres eliminar este producto?
                    </p>
                    {selectedProduct && (
                        <p style={{ 
                            marginBottom: '24px',
                            fontSize: '18px',
                            fontWeight: '600',
                            color: '#DE350B'
                        }}>
                            "{selectedProduct.nombre}"
                        </p>
                    )}
                    <p style={{ 
                        fontSize: '14px',
                        color: '#6B778C',
                        marginBottom: '24px'
                    }}>
                        Esta acción no se puede deshacer.
                    </p>
                    
                    <div style={{ 
                        display: 'flex', 
                        gap: '12px', 
                        justifyContent: 'center' 
                    }}>
                        <button
                            onClick={() => {
                                setShowDeleteConfirm(false);
                                setSelectedProduct(null);
                            }}
                            disabled={isProcessing}
                            style={{
                                padding: '10px 20px',
                                border: '2px solid #DFE1E6',
                                borderRadius: '4px',
                                backgroundColor: 'white',
                                color: '#172B4D',
                                cursor: isProcessing ? 'not-allowed' : 'pointer',
                                fontSize: '14px',
                                opacity: isProcessing ? 0.5 : 1
                            }}
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={handleDeleteProduct}
                            disabled={isProcessing}
                            style={{
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '4px',
                                backgroundColor: isProcessing ? '#6B778C' : '#DE350B',
                                color: 'white',
                                cursor: isProcessing ? 'not-allowed' : 'pointer',
                                fontSize: '14px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px'
                            }}
                        >
                            {isProcessing ? (
                                <>
                                    <span className="material-icons small">hourglass_empty</span>
                                    Eliminando...
                                </>
                            ) : (
                                <>
                                    <span className="material-icons small">delete</span>
                                    Eliminar
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}