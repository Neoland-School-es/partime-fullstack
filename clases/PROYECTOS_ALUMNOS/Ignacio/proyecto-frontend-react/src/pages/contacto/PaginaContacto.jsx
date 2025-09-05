import React from 'react';

export default function PaginaContacto() {
  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '40px'
      }}>
        <h1 style={{ 
          fontSize: '32px', 
          color: '#172B4D', 
          marginBottom: '12px' 
        }}>
          Contacto
        </h1>
      </div>

      <div style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#172B4D', marginBottom: '20px' }}>
          Nacho Carrasco
        </h2>
        <p style={{ 
          fontSize: '18px', 
          color: '#0052CC', 
          marginBottom: '20px',
          fontWeight: '500'
        }}>
          Front End Developer
        </p>
        
        <p style={{ 
          color: '#6B778C', 
          lineHeight: '1.6',
          marginBottom: '30px',
          fontSize: '16px'
        }}>
          Soy un desarrollador especializado en llevar los diseños y la experiencia de usuario a código.</p>
        <p style={{ 
        color: '#6B778C', 
        lineHeight: '1.6',
        marginBottom: '30px',
        fontSize: '16px'
        }}>
          Actualmente estoy cursando el Bootcamp de Desarrollo Web de Neoland. Mi objetivo es convertirme en un full stack designer o un front end developer especializado 
          en la excelencia en la experiencia de usuario.
        </p>

        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <div style={{
            display: 'flex',
            flexDirection:'row',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: '#F4F5F7',
            padding: '16px 24px',
            borderRadius: '8px',
            color: '#6B778C'
          }}>
            <strong><img src="/src/assets/images/github-logo.png" alt="Github Logo" /></strong> <a href="https://github.com/nacho-carrasco" target="_blank">Mi perfil de GitHub</a>
          </div>
          <div style={{
            display: 'flex',
            flexDirection:'row',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: '#F4F5F7',
            padding: '16px 24px',
            borderRadius: '8px',
            color: '#6B778C'
          }}>
            <strong><img src="/src/assets/images/linkedin-logo.png" alt="LinkedIn Logo" /></strong> <a href="https://www.linkedin.com/in/ignacio-carrasco-9a9054a5/" target="_blank">Mi perfil de LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}