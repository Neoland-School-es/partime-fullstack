import React from 'react';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#1B2638', // DN-100 - Fondo oscuro principal
      marginTop: '40px',
      padding: '32px 20px',
      textAlign: 'center',
      borderTop: '1px solid #2C3E50' // DN-300 - Borde más sutil
    }}>
      {/* Sección principal del footer */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        marginBottom: '24px'
      }}>
        <h3 style={{ 
          color: '#579DFF', // B400 - Azul brillante para títulos
          marginBottom: '12px',
          fontSize: '20px'
        }}>
          ¿Buscas un desarrollador frontend que convierta ideas en experiencias memorables?
        </h3>
        <p style={{ 
          color: '#B6C2CF', // DN-600 - Texto secundario claro
          marginBottom: '16px',
          fontSize: '16px',
          lineHeight: '1.5'
        }}>
          Colabora con un desarrollador que combina código limpio, diseño intuitivo y foco en el usuario. ¿Charlamos sobre tu próximo proyecto?
        </p>
        <Link 
          to="/contacto"
          style={{
            display: 'inline-block',
            backgroundColor: '#579DFF', // B400 - Azul brillante para CTA
            color: '#0C1B2E', // DN-0 - Texto oscuro sobre fondo claro
            textDecoration: 'none',
            padding: '12px 24px',
            borderRadius: '6px', // Border radius más suave
            fontSize: '16px',
            fontWeight: '500', // Peso de fuente medio
            transition: 'all 0.2s ease',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.25)' // Sombra sutil
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#85B8FF'; // B300 - Hover más claro
            e.target.style.transform = 'translateY(-1px)';
            e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.35)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#579DFF';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.25)';
          }}
        >
          Contacto
        </Link>
      </div>

      {/* Enlaces de navegación */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '24px',
        marginBottom: '20px',
        flexWrap: 'wrap'
      }}>
        <Link 
          to="/" 
          style={{
            color: '#8590A2', // DN-500 - Enlaces en gris medio
            textDecoration: 'none',
            fontSize: '16px',
            transition: 'color 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.color = '#579DFF'; // B400 - Azul en hover
            e.target.style.textDecoration = 'underline';
          }}
          onMouseOut={(e) => {
            e.target.style.color = '#8590A2';
            e.target.style.textDecoration = 'none';
          }}
        >
          Inicio
        </Link>
        <Link 
          to="/panel-control" 
          style={{
            color: '#8590A2', // DN-500
            textDecoration: 'none',
            fontSize: '16px',
            transition: 'color 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.color = '#579DFF';
            e.target.style.textDecoration = 'underline';
          }}
          onMouseOut={(e) => {
            e.target.style.color = '#8590A2';
            e.target.style.textDecoration = 'none';
          }}
        >
          Panel de Control
        </Link>
        <Link 
          to="/contacto" 
          style={{
            color: '#8590A2', // DN-500
            textDecoration: 'none',
            fontSize: '16px',
            transition: 'color 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.color = '#579DFF';
            e.target.style.textDecoration = 'underline';
          }}
          onMouseOut={(e) => {
            e.target.style.color = '#8590A2';
            e.target.style.textDecoration = 'none';
          }}
        >
          Contacto
        </Link>
      </div>

      {/* Copyright */}
      <div style={{
        borderTop: '1px solid #2C3E50', // DN-300 - Línea divisoria
        paddingTop: '16px',
        color: '#8590A2', // DN-500 - Texto secundario
        fontSize: '14px'
      }}>
        <p style={{ margin: 0 }}>
          Hecho por Nacho Carrasco, 2025
        </p>
      </div>
    </footer>
  );
}