import React, { useEffect } from 'react';

export default function Modal({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  footer,
  size = 'md' 
}) {
  // Cerrar con Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const getModalWidth = () => {
    switch(size) {
      case 'sm': return '400px';
      case 'lg': return '800px';
      case 'xl': return '1000px';
      default: return '600px';
    }
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '16px'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
          maxWidth: getModalWidth(),
          width: '100%',
          maxHeight: '90vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header del modal */}
        {title && (
          <div style={{
            padding: '24px 24px 0 24px',
            borderBottom: '1px solid #DFE1E6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '16px'
          }}>
            <h2 style={{ 
              margin: 0,
              fontSize: '20px',
              fontWeight: '600',
              color: '#172B4D'
            }}>
              {title}
            </h2>
            <button 
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#6B778C',
                padding: '4px',
                borderRadius: '4px',
                lineHeight: 1
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#F4F5F7'}
              onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              ×
            </button>
          </div>
        )}
        
        {/* Cuerpo del modal */}
        <div style={{
          padding: '24px',
          overflowY: 'auto',
          flex: 1
        }}>
          {children}
        </div>
        
        {/* Footer del modal */}
        {footer && (
          <div style={{
            padding: '16px 24px 24px 24px',
            borderTop: '1px solid #DFE1E6',
            display: 'flex',
            gap: '12px',
            justifyContent: 'flex-end'
          }}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}