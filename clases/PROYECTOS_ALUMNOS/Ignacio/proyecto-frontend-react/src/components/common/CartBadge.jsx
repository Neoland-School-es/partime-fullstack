import React, { useContext } from 'react';
import { Link } from 'react-router';
import { CartContext } from '../../context/Cart.context';

export default function CartBadge() {
    const { totalProductos, totalPrecio } = useContext(CartContext);

    return (
        <Link 
            to="/carrito"
            style={{
                position: 'relative',
                textDecoration: 'none',
                color: '#172B4D',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 12px',
                borderRadius: '4px',
                backgroundColor: totalProductos > 0 ? '#E3FCEF' : 'transparent',
                transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
                e.target.style.backgroundColor = totalProductos > 0 ? '#C6F7D0' : '#F4F5F7';
            }}
            onMouseOut={(e) => {
                e.target.style.backgroundColor = totalProductos > 0 ? '#E3FCEF' : 'transparent';
            }}
        >
            <span className="material-icons medium">shopping_cart</span>
            
            {/* Contador de productos */}
            {totalProductos > 0 && (
                <span
                    style={{
                        position: 'absolute',
                        top: '0px',
                        right: '0px',
                        backgroundColor: '#DE350B',
                        color: 'white',
                        borderRadius: '50%',
                        width: '20px',
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        minWidth: '20px'
                    }}
                >
                    {totalProductos > 99 ? '99+' : totalProductos}
                </span>
            )}
            
            {/* Texto y precio */}
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'flex-start',
                fontSize: '14px'
            }}>
                <span style={{ 
                    fontWeight: '500',
                    color: '#172B4D'
                }}>
                    Carrito
                </span>
                {totalProductos > 0 && (
                    <span style={{ 
                        fontSize: '12px',
                        color: '#00875A',
                        fontWeight: 'bold'
                    }}>
                        €{totalPrecio.toFixed(2)}
                    </span>
                )}
            </div>
        </Link>
    );
}