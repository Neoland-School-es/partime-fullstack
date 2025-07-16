import http from 'http';

const ejemploServidorHTTP = http.createServer((req, res) => {
    const url = req.url;
    const metodo = req.method;

    // Routing básico
    if (url === '/' && metodo === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Página Principal</h1><p>Bienvenido a mi sitio web</p>');

    } else if (url === '/contacto' && metodo === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Contacto</h1><p>Email: contacto@ejemplo.com</p>');

    } else if (url === '/productos' && metodo === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Productos</h1><ul><li>Producto 1</li><li>Producto 2</li></ul>');

    } else if (url === '/saludo' && metodo === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('¡Hola visitante! Bienvenido a nuestro servidor HTTP nativo.');

    } else if (url === '/api/info' && metodo === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            version: '1.0.0',
            descripcion: 'Este es un API REST de ejemplo con el módulo HTTP nativo.'
        }));

    } else if (url === '/api/usuarios' && metodo === 'GET') {
        const usuarios = [
            { id: 1, nombre: 'Ana' },
            { id: 2, nombre: 'Carlos' },
            { id: 3, nombre: 'Diego' }
        ];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(usuarios);


    } else if (url === '/api/usuarios' && metodo === 'POST') {
        let datos = '';

        req.on('data', (pedazo) => { // Chunk
            datos += pedazo;
        });

        req.on('end', () => {
            try {
                const usuario = JSON.parse(datos);

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    mensaje: 'Usuario registrado correctamente',
                    usuario: usuario
                }));

            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Datos inválidos' }));
            }
        });

    } else if (url.startsWith('/api/usuarios/') && metodo === 'DELETE') {
        const partesUrl = url.split('/');
        const id = parseInt(partesUrl[3]);

        if (isNaN(id)) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'ID inválido' }));
            return;
        }


        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end({ mensaje: `Usuario con ID ${id} eliminado correctamente` });

    } else {
        // Ruta no encontrada
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Error 404</h1><p>Página no encontrada</p>');
    }
});

export {
    ejemploServidorHTTP
};
