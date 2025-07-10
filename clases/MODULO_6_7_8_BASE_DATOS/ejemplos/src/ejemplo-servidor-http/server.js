import http from 'http';
import { registrarVisita } from './server.controller.js';

const server = http.createServer(async (request, response) => {
    console.log("el metodo utilizado es:")
    console.log(request.method)

    if (request.url === '/') {
        await registrarVisita('inicio');
        // response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end('<p>Página de inicio ñ</p>');
    } else if (request.url === '/galeria') {
        await registrarVisita('galeria');
        response.writeHead(500, { 'Content-Type': 'text/html' });
        response.end('<h1>Galería</h1><p>Visita registrada en galería.</p>');
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Página no encontrada');
    }
});

server.listen(3000, () => {
    console.log(`Servidor escuchando en http://localhost:${3000}`);
});
