import { registrarVisita } from "./../server.controller.js"
import { Router } from "express";

const router = Router()

router.get('/', async (req, res) => {
    await registrarVisita('inicio');
    res.send(`
        <h1>Inicio</h1>
        <p>Visita registrada correctamente en inicio.</p>
        <a href="/galeria">Ir a galería</a>
    `);
});

router.get('/home', async (req, res) => {
    res.render("home", { title: "home web" });
});

router.get('/galeria', async (req, res) => {
    await registrarVisita('galeria');
    res.send(`
        <h1>Galería</h1>
        <p>Visita registrada correctamente en galería.</p>
        <a href="/">Ir al inicio</a>
    `);
});

// router.use((req, res) => {
//     res.status(404).send('<h1>Página no encontrada</h1>');
// });


export { router };