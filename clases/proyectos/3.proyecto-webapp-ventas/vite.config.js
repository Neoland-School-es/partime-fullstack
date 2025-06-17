import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: '.',          // Carpeta base
    publicDir: 'public',// Archivos estáticos
    build: {
        outDir: 'dist',   // Carpeta de salida
        rollupOptions: {
            input: {
                // Clave: nombre del chunk, Valor: ruta del archivo HTML
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'pages/page-create-product.html'),
                about: resolve(__dirname, 'pages/page-favorites.html'),
                about: resolve(__dirname, 'pages/page-remove-product.html'),
                about: resolve(__dirname, 'pages/page-shopping-cart.html'),
                about: resolve(__dirname, 'pages/page-update-product.html'),
            },
        },
    },
    plugins: [],
    resolve: {
        extensions: ['.ts', '.js']
    },
    server: {
        port: 3000,       // Puerto del servidor
        open: true        // Abre el navegador al iniciar
    },
});