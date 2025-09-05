import { useContext, useState } from 'react';
import { ProductosContext } from '../../context/Productos.context';
import { CartContext } from '../../context/Cart.context';
import { useParams, useNavigate } from 'react-router';

export default function Producto() {
  const { productos } = useContext(ProductosContext);
  const { agregarAlCarrito, estaEnCarrito, obtenerCantidadEnCarrito } = useContext(CartContext); // 👈 NUEVO CONTEXT
  const { id } = useParams();
  const navigate = useNavigate();
  const [comprando, setComprando] = useState(false);

  const producto = productos.find(p => p._id == id);

  const getImageSrc = (imagen) => {
    if (imagen) {
      if (imagen.startsWith('http')) {
        return imagen;
      }
      return `/src/assets/images/${imagen}`;
    }
    return '/src/assets/images/default-img.jpg';
  };

  const handleComprar = async () => {
    setComprando(true);
    console.log('🛒 Agregando producto al carrito:', producto.nombre);
    
    try {
      agregarAlCarrito(producto, 1);
      alert(`✅ ${producto.nombre} agregado al carrito exitosamente!`);
      
    } catch (error) {
      console.error('Error al agregar producto al carrito:', error);
      alert('❌ Error inesperado al agregar al carrito');
    } finally {
      setComprando(false);
    }
  };

  if (!producto) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '60px 20px',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <h2 style={{ color: '#DE350B', marginBottom: '16px' }}>
          ❌ Producto no encontrado
        </h2>
        <p style={{ color: '#6B778C', marginBottom: '24px' }}>
          El producto que buscas no existe o ha sido eliminado.
        </p>
        <button
          onClick={() => navigate('/')}
          style={{
            backgroundColor: '#0052CC',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          🏠 Volver al Inicio
        </button>
      </div>
    );
  }

  const yaEstaEnCarrito = estaEnCarrito(producto._id);
  const cantidadEnCarrito = obtenerCantidadEnCarrito(producto._id);

  return (
    <div style={{ 
      padding: '20px',
      maxWidth: '1000px',
      margin: '0 auto'
    }}>
      {/* Breadcrumb */}
      <div style={{ 
        marginBottom: '20px',
        fontSize: '14px',
        color: '#6B778C'
      }}>
        <button
          onClick={() => navigate('/')}
          style={{
            background: 'none',
            border: 'none',
            color: '#0052CC',
            cursor: 'pointer',
            fontSize: '14px',
            textDecoration: 'underline'
          }}
        >
          ← Volver a productos
        </button>
      </div>

      {/* Contenido principal */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)',
        gap: '40px',
        alignItems: 'start'
      }}>
        {/* Imagen */}
        <div style={{
          position: 'sticky',
          top: '20px'
        }}>
          <img
            src={getImageSrc(producto.imagen)}
            alt={producto.nombre}
            style={{
              width: '100%',
              height: '400px',
              objectFit: 'cover',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
            onError={(e) => {
              e.target.src = '/src/assets/images/default-img.jpg';
            }}
          />
        </div>

        {/* Información del producto */}
        <div>
          <h1 style={{
            fontSize: '32px',
            color: '#172B4D',
            marginBottom: '16px',
            lineHeight: '1.2'
          }}>
            {producto.nombre}
          </h1>

          {producto.precio && (
            <div style={{
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#00875A',
              marginBottom: '24px'
            }}>
              €{producto.precio}
            </div>
          )}

          {yaEstaEnCarrito && (
            <div style={{
              backgroundColor: '#E3FCEF',
              border: '2px solid #00875A',
              borderRadius: '8px',
              padding: '12px 16px',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ fontSize: '18px' }}>✅</span>
              <span style={{ color: '#00875A', fontWeight: '500' }}>
                Ya tienes {cantidadEnCarrito} unidad{cantidadEnCarrito !== 1 ? 'es' : ''} en tu carrito
              </span>
            </div>
          )}

          {/* Información adicional */}
          <div style={{
            backgroundColor: '#F4F5F7',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '24px'
          }}>
            {producto.categoria && (
              <div style={{ marginBottom: '12px' }}>
                <strong style={{ color: '#172B4D' }}>Categoría:</strong>
                <span style={{ marginLeft: '8px', color: '#6B778C' }}>
                  {producto.categoria}
                </span>
              </div>
            )}
            
            {producto.material && (
              <div style={{ marginBottom: '12px' }}>
                <strong style={{ color: '#172B4D' }}>Material:</strong>
                <span style={{ marginLeft: '8px', color: '#6B778C' }}>
                  {producto.material}
                </span>
              </div>
            )}
            
            {producto.color && (
              <div style={{ marginBottom: '12px' }}>
                <strong style={{ color: '#172B4D' }}>Color:</strong>
                <span style={{ marginLeft: '8px', color: '#6B778C' }}>
                  {producto.color}
                </span>
              </div>
            )}
            
            {producto.cantidad !== undefined && (
              <div>
                <strong style={{ color: '#172B4D' }}>Disponibilidad:</strong>
                <span style={{ 
                  marginLeft: '8px', 
                  color: producto.cantidad > 0 ? '#00875A' : '#DE350B',
                  fontWeight: '500'
                }}>
                  {producto.cantidad > 0 ? `${producto.cantidad} unidades` : 'Agotado'}
                </span>
              </div>
            )}
          </div>

          {/* Descripción */}
          {producto.descripcion && (
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ 
                color: '#172B4D', 
                marginBottom: '12px',
                fontSize: '18px'
              }}>
                Descripción
              </h3>
              <p style={{
                color: '#6B778C',
                lineHeight: '1.6',
                fontSize: '16px'
              }}>
                {producto.descripcion}
              </p>
            </div>
          )}

          {/* Botones de acción */}
          <div style={{
            display: 'flex',
            gap: '16px',
            marginTop: '32px'
          }}>
            <button
              onClick={handleComprar}
              disabled={comprando || (producto.cantidad !== undefined && producto.cantidad <= 0)}
              style={{
                flex: '1',
                backgroundColor: comprando ? '#6B778C' : '#00875A',
                color: 'white',
                border: 'none',
                padding: '16px 24px',
                borderRadius: '4px',
                cursor: comprando || (producto.cantidad !== undefined && producto.cantidad <= 0) ? 'not-allowed' : 'pointer',
                fontSize: '18px',
                fontWeight: '600',
                opacity: (producto.cantidad !== undefined && producto.cantidad <= 0) ? 0.5 : 1
              }}
            >
              {comprando ? '🛒 Agregando...' : 
               (producto.cantidad !== undefined && producto.cantidad <= 0) ? '❌ Agotado' : 
               yaEstaEnCarrito ? 'Agregar Más' :
               'Agregar al Carrito'}
            </button>
            
            <button
              onClick={() => navigate('/carrito')}
              style={{
                backgroundColor: '#0052CC',
                color: 'white',
                border: 'none',
                padding: '16px 24px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              Ver Carrito
            </button>
          </div>

          {/* ID del producto (para debugging) */}
          <div style={{
            marginTop: '24px',
            padding: '12px',
            backgroundColor: '#F4F5F7',
            borderRadius: '4px',
            fontSize: '12px',
            color: '#6B778C'
          }}>
            ID: {producto._id}
          </div>
        </div>
      </div>
    </div>
  );
}