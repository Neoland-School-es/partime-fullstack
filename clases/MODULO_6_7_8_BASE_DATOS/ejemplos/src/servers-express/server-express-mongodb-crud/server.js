import express from 'express';
import { ObjectId } from 'mongodb';
import { conectarBD, obtenerColeccion } from './src/config/db.config.js';

const server = express();

let coleccion = null;

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.get('/', (req, res) => {
    res.send('¡Saludos desde la página de inicio!');
});

server.get('/api/productos', async (req, res) => {
    try {
        const productos = await coleccion.find().toArray();
        res.json(productos);
    } catch (error) {
        console.error('Error al obtener productos:', error.message);
        res.status(500).send('Error al obtener productos');
    }
});

server.get('/api/productos/id/:identificador', async (req, res) => {
    try {
        const id = req.params.identificador;
        const producto = await coleccion.findOne({ _id: new ObjectId(id) });
        res.json(producto);
    } catch (error) {
        console.error('Error al buscar producto por ID:', error.message);
        res.status(500).send('Error al buscar producto por ID');
    }
});

server.get('/api/productos/nombre/:nombre', async (req, res) => {
    try {
        const nombre = req.params.nombre;
        const producto = await coleccion.findOne({ nombre });
        res.json(producto);
    } catch (error) {
        console.error('Error al buscar producto por nombre:', error.message);
        res.status(500).send('Error al buscar producto por nombre');
    }
});

server.post('/api/productos', async (req, res) => {
    try {
        const nuevoProducto = req.body;
        const resultado = await coleccion.insertOne(nuevoProducto);
        res.status(201).json(resultado);
    } catch (error) {
        console.error('Error al crear producto:', error.message);
        res.status(500).send('Error al crear producto');
    }
});

server.put('/api/productos/:identificador', async (req, res) => {
    try {
        const id = req.params.identificador;
        const actualizacion = req.body;
        const resultado = await coleccion.updateOne(
            { _id: new ObjectId(id) },
            { $set: actualizacion }
        );
        res.json(resultado);
    } catch (error) {
        console.error('Error al actualizar producto:', error.message);
        res.status(500).send('Error al actualizar producto');
    }
});

server.delete('/api/productos/:identificador', async (req, res) => {
    try {
        const id = req.params.identificador;
        const resultado = await coleccion.deleteOne({ _id: new ObjectId(id) });
        res.json(resultado);
    } catch (error) {
        console.error('Error al eliminar producto:', error.message);
        res.status(500).send('Error al eliminar producto');
    }
});

// Iniciar servidor y conectar a la base de datos
async function iniciarServidor() {
    await conectarBD();

    coleccion = obtenerColeccion('productos');

    server.listen(3000, () => {
        console.log('Servidor iniciado en http://localhost:3000');
    });
}

export {
    iniciarServidor
}

