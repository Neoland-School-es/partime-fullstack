import http from 'http';
import { registrarVisita } from './server.controller.js';

const ejemplo2ServidorHTTP = http.createServer(async (request, response) => {
    if (request.url === '/') {
        await registrarVisita('inicio');
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end('<h1>Pgina de inicio</h1>');
    } else if (request.url === '/productos') {
        await registrarVisita('inicio');
        let body = '';
        request.on('data', function (chunk) {
            body += chunk.toString();
        });
        request.on('end', function () {
            console.log('Datos recibidos:', body);
            response.end('Datos recibidos');
        });
        response.writeHead(200, { 'Content-Type': 'text/html' });
        // response.end('<p>productos</p>');
    } else if (request.url === '/galeria') {
        await registrarVisita('galeria');
        response.writeHead(500, { 'Content-Type': 'text/html' });
        response.end('<h1>Galería</h1><p>Visita registrada en galería.</p>');
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Página no encontrada');
    }
});

export {
    ejemplo2ServidorHTTP
}