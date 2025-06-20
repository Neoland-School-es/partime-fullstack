import { defineConfig } from 'vite';
import { resolve } from 'path';
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
    root: '.',              // Carpeta base
    publicDir: 'public',    // Archivos estáticos
    build: {
        outDir: 'dist',     // Carpeta de salida
        rollupOptions: {
            input: {
                // Clave: nombre del chunk, Valor: ruta del archivo HTML
                main: resolve(__dirname, 'index.html'),
                dashboard: resolve(__dirname, 'pages/page-dashboard.html'),
                shopping: resolve(__dirname, 'pages/page-shopping-cart.html'),
                formLogin: resolve(__dirname, 'pages/page-formulario-login.html'),
                createProduct: resolve(__dirname, 'pages/page-create-product.html'),
                removeProduct: resolve(__dirname, 'pages/page-remove-product.html'),
                updateProduct: resolve(__dirname, 'pages/page-update-product.html'),
            },
        },
    },
    plugins: [
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: 'Sistema de Stock y Ventas',
                short_name: 'StockApp',
                start_url: '/',
                display_override: ['window-controls-overlay'],
                lang: 'es-ES',
                display: 'standalone',
                background_color: '#ffffff',
                theme_color: '#1d4ed8',
                icons: [
                    {
                        src: 'pwa-64x64.png',
                        sizes: '64x64',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                        purpose: 'any',
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'maskable',
                    },
                ],
            }
        })
    ],
    resolve: {
        extensions: ['.ts', '.js']
    },
    server: {
        port: 3000,     // Puerto del servidor
        open: true      // Abre el navegador al iniciar
    },
});