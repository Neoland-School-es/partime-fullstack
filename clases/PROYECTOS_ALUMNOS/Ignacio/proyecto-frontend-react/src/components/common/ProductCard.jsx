import React from 'react';

export default function ProductCard({ 
  producto, 
  onBuy, 
  onEdit, 
  onDelete, 
  onViewDetails,
  isAdmin = false 
}) {
  const getImageSrc = () => {
    if (producto.imagen) {
      if (producto.imagen.startsWith('http')) {
        return producto.imagen;
      }
      return `/src/assets/images/${producto.imagen}`;
    }
    return '/src/assets/images/default-img.jpg';
  };

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '12px',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      {/* Imagen del producto */}
      <img 
        src={getImageSrc()}
        alt={producto.nombre}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '4px',
          marginBottom: '12px'
        }}
        onError={(e) => {
          console.log('Error loading image:', getImageSrc());
          e.target.src = '/src/assets/images/default-img.jpg';
        }}
      />
      
      {/* Información del producto */}
      <div style={{ marginBottom: '12px' }}>
        <h3 
          style={{ 
            margin: '0 0 8px 0', 
            fontSize: '18px',
            cursor: onViewDetails ? 'pointer' : 'default',
            color: onViewDetails ? '#0052CC' : 'inherit'
          }}
          onClick={() => onViewDetails?.(producto)}
        >
          {producto.nombre}
        </h3>
        
        {producto.precio && (
          <p style={{ 
            margin: '4px 0', 
            fontSize: '16px', 
            fontWeight: 'bold',
            color: '#00875A'
          }}>
            €{producto.precio}
          </p>
        )}
        
        {producto.descripcion && (
          <p style={{ 
            margin: '8px 0', 
            fontSize: '14px', 
            color: '#666',
            lineHeight: '1.4'
          }}>
            {producto.descripcion.length > 100 
              ? `${producto.descripcion.substring(0, 100)}...` 
              : producto.descripcion
            }
          </p>
        )}
      </div>
      
      {/* Botones de acción */}
      <div style={{ 
        display: 'flex', 
        gap: '8px',
        marginTop: '12px'
      }}>
        {isAdmin ? (
          // Vista de administrador
          <>
            <button 
              onClick={() => onEdit?.(producto)}
              style={{
                flex: 1,
                padding: '8px 12px',
                backgroundColor: '#0052CC',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px'
              }}
            >
              <span className="material-icons small">edit</span>
              Editar
            </button>
            <button 
              onClick={() => onDelete?.(producto)}
              style={{
                flex: 1,
                padding: '8px 12px',
                backgroundColor: '#DE350B',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px'
              }}
            >
              <span className="material-icons small">delete</span>
              Eliminar
            </button>
          </>
        ) : (
          // Vista de cliente
          <>
            <button 
              onClick={() => onViewDetails?.(producto)}
              style={{
                flex: 1,
                padding: '8px 12px',
                backgroundColor: '#f0f0f0',
                color: '#333',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px'
              }}
            >
              <span className="material-icons small">visibility</span>
              Ver detalles
            </button>
            <button 
              onClick={() => onBuy?.(producto)}
              style={{
                flex: 1,
                padding: '8px 12px',
                backgroundColor: '#00875A',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px'
              }}
            >
              <span className="material-icons small">shopping_cart</span>
              Comprar
            </button>
          </>
        )}
      </div>
    </div>
  );
}