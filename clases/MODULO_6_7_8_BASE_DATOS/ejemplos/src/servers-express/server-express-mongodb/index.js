import express from 'express';
import { conectarMongo, obtenerDB } from './config.js';

const ejemplo1ServidorExpressMongoDB = express();
ejemplo1ServidorExpressMongoDB.use(express.json());

await conectarMongo();
const coleccionProductos = obtenerDB().collection('productos');

ejemplo1ServidorExpressMongoDB.get('/api/productos', async (req, res) => {
    const productos = await coleccionProductos.find().toArray();
    res.json(productos);
});

ejemplo1ServidorExpressMongoDB.post('/api/productos', async (req, res) => {
    const producto = req.body;
    const resultado = await coleccionProductos.insertOne(producto);
    res.json({ mensaje: 'Producto creado', id: resultado.insertedId });
});

ejemplo1ServidorExpressMongoDB.put('/api/productos/:id', async (req, res) => {
    const { ObjectId } = await import('mongodb');
    const id = new ObjectId(req.params.id);
    const resultado = await coleccionProductos.updateOne(
        { _id: id },
        { $set: req.body }
    );
    res.json({ mensaje: 'Producto actualizado', modificados: resultado.modifiedCount });
});

ejemplo1ServidorExpressMongoDB.delete('/api/productos/:id', async (req, res) => {
    const { ObjectId } = await import('mongodb');
    const id = new ObjectId(req.params.id);
    const resultado = await coleccionProductos.deleteOne({ _id: id });
    res.json({ mensaje: 'Producto eliminado', eliminados: resultado.deletedCount });
});

export {
    ejemplo1ServidorExpressMongoDB
}