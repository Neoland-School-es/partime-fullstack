import http from 'http';
import { registrarVisita } from './server.controller.js';

function ejemploServidorHTTP() {
    const server = http.createServer(async (request, response) => {
        console.log("cabecera:")
        console.log(request.headers)
        console.log("url:")
        console.log(request.url)
        console.log("metodo:")
        console.log(request.method)
        console.log("metodo:")
        // console.log(request.pipe((back) => {
        //     console.log("back")
        //     console.log(back)
        // }, { end: true }))

        response.setHeader("Access-Control-Allow-Origin", "*")
        response.setHeader("Access-Control-Allow-Methods", "*")

        if (request.url === '/') {
            await registrarVisita('inicio');
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end('<p>Pgina de inicio</p>');
        } else if (request.url === '/productos') {
            // await registrarVisita('inicio');
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

    server.listen(3000, () => {
        console.log(`Servidor escuchando en http://localhost:${3000}`);
    });
}

export {
    ejemploServidorHTTP
}