import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ 
  productos = [], 
  onBuy, 
  onEdit, 
  onDelete, 
  onViewDetails,
  isAdmin = false,
  isLoading = false,
  emptyMessage = "No hay productos disponibles"
}) {

  // Estado de carga
  if (isLoading) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '40px',
        fontSize: '18px',
        color: '#666'
      }}>
        🔄 Cargando productos...
      </div>
    );
  }

  // Estado vacío
  if (productos.length === 0) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '40px',
        fontSize: '18px',
        color: '#666'
      }}>
        📦 {emptyMessage}
      </div>
    );
  }

  return (
    <div>
      {/* Header del grid */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        maxWidth: '960px',
        alignSelf: 'center',
        margin: '0 auto 20px auto',
        alignItems: 'center',
        //marginBottom: '20px',
        padding: '0 8px'
      }}>
        <h2 style={{ margin: 0, color: '#172B4D' }}>
          {isAdmin ? 'Gestión de Productos' : 'Productos Destacados'}
        </h2>
        <span style={{ 
          fontSize: '14px', 
          color: '#6B778C',
          backgroundColor: '#F4F5F7',
          padding: '4px 8px',
          borderRadius: '12px'
        }}>
          {productos.length} producto{productos.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Grid de productos */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '16px',
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 8px'
      }}>
        {productos.map(producto => (
          <ProductCard
            key={producto._id}
            producto={producto}
            onBuy={onBuy}
            onEdit={onEdit}
            onDelete={onDelete}
            onViewDetails={onViewDetails}
            isAdmin={isAdmin}
          />
        ))}
      </div>

      {/* Footer con información adicional */}
      {productos.length > 0 && (
        <div style={{
          textAlign: 'center',
          marginTop: '32px',
          padding: '16px',
          color: '#6B778C',
          fontSize: '14px',
          backgroundColor: '#F4F5F7',
          borderRadius: '8px',
          margin: '32px 8px 0 8px'
        }}>
          Mostrando {productos.length} productos disponibles
          {!isAdmin && (
            <span> • Haz clic en "Ver detalles" para más información</span>
          )}
        </div>
      )}
    </div>
  );
}