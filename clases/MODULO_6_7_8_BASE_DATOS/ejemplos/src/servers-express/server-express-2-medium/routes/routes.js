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

router.get('/galeria', async (req, res) => {
    await registrarVisita('galeria');
    res.send(`
        <h1>Galería</h1>
        <p>Visita registrada correctamente en galería.</p>
        <a href="/">Ir al inicio</a>
    `);
});

router.get('/home', async (req, res) => {
    res.render("home", { title: "home web" });
});

router.get('/contacto', async (req, res) => {
    res.render("contact", { title: "home web" });
});

router.get('/pug', async (req, res) => {
    res.render("pagina-pug", { title: "pagina web con pug", productos: [{ nombre: "mirinda", precio: 123 }] });
});

router.use((req, res) => {
    res.status(404).send('<h1>Página no encontrada</h1>');
});


export { router };