import { useContext, useState } from 'react'
import { ProductsContext } from '../context/products.context'

import { tryCatchError } from '../errors/error.funct.js'

export function DashboardPage() {
    const { productsBBDD, editProduct, deleteProduct, addNewProduct } = useContext(ProductsContext)
    
    // Estado para el formulario de crear producto
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        quantity: ''
    })

    // Estado para el modal de edición
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingProduct, setEditingProduct] = useState(null)
    const [editFormData, setEditFormData] = useState({
        name: '',
        price: '',
        quantity: ''
    })

    // Manejar cambios en los inputs del formulario de crear
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    // Manejar cambios en los inputs del formulario de editar
    const handleEditInputChange = (e) => {
        const { name, value } = e.target
        setEditFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    // Envío del formulario de crear producto
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const productData = {
            name: formData.name.trim(),
            price: parseFloat(formData.price),
            quantity: parseInt(formData.quantity)
        }

        if (!productData.name || productData.price <= 0 || productData.quantity <= 0) {
            alert('Por favor, completa todos los campos con valores válidos')
            return
        }

        try {
            await addNewProduct(productData)
            
            setFormData({
                name: '',
                price: '',
                quantity: ''
            })
        } catch (error) {
            tryCatchError(error, 'añadir')
        }
    }

    // Abrir modal de edición
    const openEditModal = (product) => {
        setEditingProduct(product)
        setEditFormData({
            name: product.name,
            price: product.price.toString(),
            quantity: product.quantity.toString()
        })
        setIsModalOpen(true)
    }

    // Cerrar modal de edición
    const closeEditModal = () => {
        setIsModalOpen(false)
        setEditingProduct(null)
        setEditFormData({
            name: '',
            price: '',
            quantity: ''
        })
    }

    // Envío del formulario de editar producto
    const handleEditSubmit = async (e) => {
        e.preventDefault()
        
        const updatedData = {
            name: editFormData.name.trim(),
            price: parseFloat(editFormData.price),
            quantity: parseInt(editFormData.quantity)
        }

        if (!updatedData.name || updatedData.price <= 0 || updatedData.quantity <= 0) {
            alert('Por favor, completa todos los campos con valores válidos')
            return
        }

        try {
            await editProduct(editingProduct._id, updatedData)
            closeEditModal()
        } catch (error) {
            tryCatchError(error, 'actualizar')
        }
    }

    // Confirmar eliminación
    const handleDeleteProduct = async (id, productName) => {
        if (confirm(`¿Estás seguro de que quieres eliminar "${productName}"?`)) {
            try {
                await deleteProduct(id)
            } catch (error) {
                tryCatchError(error, 'eliminar')
            }
        }
    }
    
    return (
        <>
            <main className="main">
                <div className="container">
                    <div className="page-header">
                        <h1 className="page-title">Stock de productos</h1>
                    </div>

                    <div className="product-grid">
                        {productsBBDD.map((product) => (
                            <div key={product._id} className="product-card">
                                <div className="product-info">
                                    <h3 className="product-name">{product.name}</h3>
                                    <p className="product-quantity">Cantidad: {product.quantity}</p>
                                    <div className="product-price">${product.price}</div>
                                    
                                    <div className="product-actions">
                                        <button 
                                            className="btn btn-primary" 
                                            onClick={() => openEditModal(product)}
                                        >
                                            Editar
                                        </button>
                                        <button 
                                            className="btn btn-danger" 
                                            onClick={() => handleDeleteProduct(product._id, product.name)}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Sección para crear producto */}
                    <section className="create-product-section">
                        <h2 className="create-product-title">Crear Producto</h2>
                        <form onSubmit={handleSubmit} className="product-form">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Nombre del producto" 
                                    className="form-input"
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="number" 
                                    name="price"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    placeholder="Precio" 
                                    className="form-input"
                                    step="0.01" 
                                    min="0"
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="number" 
                                    name="quantity"
                                    value={formData.quantity}
                                    onChange={handleInputChange}
                                    placeholder="Cantidad" 
                                    className="form-input"
                                    min="0"
                                    required 
                                />
                            </div>
                            <button type="submit" className="btn btn-create">
                                Crear Producto
                            </button>
                        </form>
                    </section>

                </div>
            </main>

            {/* Modal de Edición */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeEditModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>Editar Producto</h2>
                            <button className="modal-close" onClick={closeEditModal}>
                                ×
                            </button>
                        </div>
                        <form onSubmit={handleEditSubmit} className="modal-form">
                            <div className="form-group">
                                <label className="form-label">Nombre</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={editFormData.name}
                                    onChange={handleEditInputChange}
                                    className="form-input"
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Precio</label>
                                <input 
                                    type="number" 
                                    name="price"
                                    value={editFormData.price}
                                    onChange={handleEditInputChange}
                                    className="form-input"
                                    step="0.01" 
                                    min="0"
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Cantidad</label>
                                <input 
                                    type="number" 
                                    name="quantity"
                                    value={editFormData.quantity}
                                    onChange={handleEditInputChange}
                                    className="form-input"
                                    min="0"
                                    required 
                                />
                            </div>
                            <div className="modal-actions">
                                <button type="button" className="btn btn-secondary" onClick={closeEditModal}>Cancelar</button>
                                <button type="submit" className="btn btn-primary">Actualizar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}