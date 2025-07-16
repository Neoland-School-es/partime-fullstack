import express from 'express';

const ejemplo1ServidorExpress = express();
ejemplo1ServidorExpress.use(express.json()); // Para poder leer JSON en peticiones POST

ejemplo1ServidorExpress.get('/', (req, res) => {
    console.log(req.body)
    res.send('<h1>Página Principal</h1><p>Bienvenido a mi sitio web</p>');

});

ejemplo1ServidorExpress.get('/contacto', (req, res) => {
    res.send('<h1>Contacto</h1><p>Email: contacto@ejemplo.com</p>');
});

ejemplo1ServidorExpress.get('/productos', (req, res) => {
    res.send('<h1>Productos</h1><ul><li>Producto 1</li><li>Producto 2</li></ul>');
});

ejemplo1ServidorExpress.get('/api/usuarios', (req, res) => {
    const usuarios = [
        { id: 1, nombre: 'Ana' },
        { id: 2, nombre: 'Carlos' },
        { id: 3, nombre: 'Diego' }
    ];
    res.json(usuarios);
});

ejemplo1ServidorExpress.post('/api/usuarios', (req, res) => {
    const usuario = req.body;
    res.json({
        mensaje: 'Usuario registrado correctamente',
        usuario: usuario
    });
});

ejemplo1ServidorExpress.delete('/api/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        res.status(400).json({ error: 'ID inválido' });
        return;
    }

    res.json({ mensaje: `Usuario con ID ${id} eliminado correctamente` });
});

ejemplo1ServidorExpress.get('/api/info', (req, res) => {
    res.json({
        version: '1.0.0',
        descripcion: 'Este es un API REST de ejemplo con Express.'
    });
});

ejemplo1ServidorExpress.get('/saludo', (req, res) => {
    res.send('¡Hola visitante! Bienvenido a nuestro servidor Express.');
});

ejemplo1ServidorExpress.use((req, res) => {
    res.status(404).send('<h1>Error 404</h1><p>Página no encontrada</p>');
});

export { ejemplo1ServidorExpress };
