import { useState } from 'react';
import axios from 'axios';

export default function ApiDiagnostics() {
    const [resultados, setResultados] = useState({});
    const [cargando, setCargando] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL;
    const API_URL2 = import.meta.env.VITE_API_URL2;

    async function testearEndpoint(nombre, url, metodo = 'GET', datos = null) {
        try {
            setCargando(true);
            let response;

            if (metodo === 'GET') {
                response = await axios.get(url);
            } else if (metodo === 'POST') {
                response = await axios.post(url, datos);
            }

            setResultados(prev => ({
                ...prev,
                [nombre]: {
                    estado: 'success',
                    codigo: response.status,
                    datos: response.data,
                    mensaje: 'Conexión exitosa'
                }
            }));
        } catch (error) {
            setResultados(prev => ({
                ...prev,
                [nombre]: {
                    estado: 'error',
                    codigo: error.response?.status || 'Network Error',
                    datos: error.response?.data || null,
                    mensaje: error.message
                }
            }));
        } finally {
            setCargando(false);
        }
    }

    async function probarTodosLosEndpoints() {
        console.log('🔍 Iniciando diagnóstico de API...');
        console.log('API_URL:', API_URL);
        console.log('API_URL2:', API_URL2);

        // Test 1: Obtener productos
        await testearEndpoint('productos', API_URL);

        // Test 2: Endpoint de ventas
        await testearEndpoint('ventas', API_URL2, 'POST', {
            nombre: 'Producto Test',
            developer: 'TEST'
        });

        // Test 3: Verificar servidor backend
        await testearEndpoint('backend', 'http://localhost:3001/');
    }

    function RenderResultado({ nombre, resultado }) {
        if (!resultado) return null;

        const esExitoso = resultado.estado === 'success';
        const colorEstado = esExitoso ? '#00875A' : '#DE350B';

        return (
            <div style={{
                border: `2px solid ${colorEstado}`,
                borderRadius: '8px',
                padding: '16px',
                margin: '8px 0',
                backgroundColor: esExitoso ? '#E3FCEF' : '#FFEBE6'
            }}>
                <h4 style={{ color: colorEstado, margin: '0 0 8px 0' }}>
                    {nombre.toUpperCase()} - {resultado.estado.toUpperCase()}
                </h4>
                <p><strong>Código:</strong> {resultado.codigo}</p>
                <p><strong>Mensaje:</strong> {resultado.mensaje}</p>
                {resultado.datos && (
                    <details>
                        <summary style={{ cursor: 'pointer', color: '#0052CC' }}>
                            Ver datos de respuesta
                        </summary>
                        <pre style={{
                            backgroundColor: '#F4F5F7',
                            padding: '8px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            overflow: 'auto',
                            marginTop: '8px'
                        }}>
                            {JSON.stringify(resultado.datos, null, 2)}
                        </pre>
                    </details>
                )}
            </div>
        );
    }

    return (
        <div style={{
            maxWidth: '800px',
            margin: '20px auto',
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
            <h2 style={{ color: '#172B4D', marginBottom: '20px' }}>
                🔧 Diagnóstico de Conexión API
            </h2>

            <div style={{ marginBottom: '20px' }}>
                <h3>Variables de Entorno:</h3>
                <p><strong>VITE_API_URL:</strong> {API_URL || '❌ No definida'}</p>
                <p><strong>VITE_API_URL2:</strong> {API_URL2 || '❌ No definida'}</p>
            </div>

            <button
                onClick={probarTodosLosEndpoints}
                disabled={cargando}
                style={{
                    backgroundColor: '#0052CC',
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '4px',
                    cursor: cargando ? 'not-allowed' : 'pointer',
                    fontSize: '16px',
                    marginBottom: '20px'
                }}
            >
                {cargando ? '⏳ Probando...' : '🚀 Probar Conexiones'}
            </button>

            <div>
                {Object.entries(resultados).map(([nombre, resultado]) => (
                    <RenderResultado key={nombre} nombre={nombre} resultado={resultado} />
                ))}
            </div>

            {Object.keys(resultados).length === 0 && (
                <p style={{ color: '#6B778C', fontStyle: 'italic' }}>
                    Haz clic en "Probar Conexiones" para verificar el estado de la API
                </p>
            )}
        </div>
    );
}