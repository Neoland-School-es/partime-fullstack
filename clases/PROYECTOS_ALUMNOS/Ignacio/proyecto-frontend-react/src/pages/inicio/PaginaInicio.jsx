import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { ProductosContext } from '../../context/Productos.context';
import { CartContext } from '../../context/Cart.context';
import ProductGrid from '../../components/common/ProductGrid';

export default function PaginaInicio() {
  const { productos, cargando } = useContext(ProductosContext);
  const { agregarAlCarrito } = useContext(CartContext);
  const navigate = useNavigate();
  const [comprando, setComprando] = useState(null);

  const handleComprarProducto = async (producto) => {
    setComprando(producto._id);
    console.log('🛒 Agregando producto al carrito:', producto.nombre);
    
    try {
      agregarAlCarrito(producto, 1);
      alert(`✅ ${producto.nombre} agregado al carrito exitosamente!`);
    } catch (error) {
      console.error('Error al agregar producto al carrito:', error);
      alert('❌ Error inesperado al agregar al carrito');
    } finally {
      setComprando(null);
    }
  };

  const handleVerDetalles = (producto) => {
    console.log('👁️ Ver detalles del producto:', producto.nombre);
    navigate(`/productos/${producto._id}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Header de la página */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '40px',
        maxWidth: '900px',
        margin: '0 auto 40px auto'
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
          Bienvenido a Nuestra Tienda
        </h1>
        <p style={{ 
          fontSize: '18px', 
          color: '#6B778C', 
          margin: '0',
          lineHeight: '1.5'
        }}>
          Descubre nuestra selección de muebles de calidad para tu hogar
        </p>
      </div>

      {/* Grid de productos */}
      <ProductGrid
        productos={productos}
        onBuy={handleComprarProducto}
        onViewDetails={handleVerDetalles}
        isLoading={cargando}
        isAdmin={false}
        emptyMessage="No hay productos disponibles en este momento"
      />

      {/* Indicador de compra en proceso */}
      {comprando && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#00875A',
          color: 'white',
          padding: '12px 20px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span className="material-icons small">shopping_cart</span>
          Agregado al carrito...
        </div>
      )}
    </div>
  );
}