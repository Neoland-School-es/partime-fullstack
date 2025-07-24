import express from 'express';
import { productoModel } from './src/model/producto.schema.model.js';

import { conectarBaseDatos } from './src/config/dbmongoose.config.js';

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.get('/', (req, res) => {
    res.send('¡Saludos desde la página de inicio!');
});

server.get('/api/productos', async (req, res) => {
    try {
        const productos = await productoModel.find();
        res.json(productos);
    } catch (error) {
        console.error('Error al obtener productos:', error.message);
        res.status(500).send('Error interno');
    }
});

server.get('/api/productos/:id', async (req, res) => {
    try {
        const producto = await productoModel.findById(req.params.id);

        if (!producto) {
            return res.status(404).send('Producto no encontrado');
        }

        res.json(producto);
    } catch (error) {
        console.error('Error al buscar producto por ID:', error.message);
        res.status(500).send('Error interno');
    }
});

server.post('/api/productos', async (req, res) => {
    try {
        const nuevoProducto = new productoModel(req.body);
        const resultado = await nuevoProducto.save();
        res.status(201).json(resultado);
    } catch (error) {
        console.error('Error al crear producto:', error.message);
        res.status(400).send('Datos inválidos');
    }
});

server.put('/api/productos/:id', async (req, res) => {
    try {
        const actualizado = await productoModel.findByIdAndUpdate(req.params.id, req.body);

        if (!actualizado) {
            return res.status(404).send('Producto no encontrado');
        }

        res.json(actualizado);
    } catch (error) {
        console.error('Error al actualizar producto:', error.message);
        res.status(400).send('Datos inválidos');
    }
});

server.delete('/api/productos/:id', async (req, res) => {
    try {
        const eliminado = await productoModel.findByIdAndDelete(req.params.id);

        if (!eliminado) {
            return res.status(404).send('Producto no encontrado');
        }

        res.json(eliminado);
    } catch (error) {
        console.error('Error al eliminar producto:', error.message);
        res.status(500).send('Error interno');
    }
});

async function iniciarServidorMongoose() {
    await conectarBaseDatos();

    server.listen(3000, () => {
        console.log('Servidor iniciado en http://localhost:3000');
    });
}


export {
    iniciarServidorMongoose
}
