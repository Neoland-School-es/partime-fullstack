import express from 'express';
import { registrarVisita } from './server.controller.js';

const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
    await registrarVisita('inicio');
    res.send(`
        <h1>Inicio</h1>
        <p>Visita registrada correctamente en inicio.</p>
        <a href="/galeria">Ir a galería</a>
    `);
});

app.get('/galeria', async (req, res) => {
    await registrarVisita('galeria');
    res.send(`
        <h1>Galería</h1>
        <p>Visita registrada correctamente en galería.</p>
        <a href="/">Ir al inicio</a>
    `);
});

app.use((req, res) => {
    res.status(404).send('<h1>Página no encontrada</h1>');
});

app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
});
