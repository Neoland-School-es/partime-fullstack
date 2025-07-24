import { Router } from "express";
import { registrarVisita } from "./server.controller.js"

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








router.get('/page-vanilla-home', async (req, res) => {
    res.render("page-vanilla-home", { title: "home web" });
});

router.get('/page-vanilla-dashboard', async (req, res) => {
    res.render("page-vanilla-dashboard", { title: "home web" });
});




router.get('/page-ejs-products', async (req, res) => {
    res.render("page-ejs-products", { title: "home web", products: [{ name: "Product 1", price: 100 }, { name: "Product 2", price: 200 }] });
});




router.get('/page-pug-login', async (req, res) => {
    res.render("page-pug-login", { title: "home web" });
});
router.get('/page-pug-dashboard', async (req, res) => {
    res.render("page-pug-dashboard", { title: "home web" });
});










// router.get('/panel-control', async (req, res) => {
//     res.render("dashboard", { title: "home web" });
// });

// // Usuarios por defecto
// const usuarios = [
//     { username: "admin", password: "1234" },
//     { username: "user", password: "abcd" }
// ];

// // Página de login (GET)
// router.get('/login-pug', async (req, res) => {
//     res.render("page-login", { title: "Login", error: null });
// });

// // Página de login (POST)
// router.post('/login-pug', async (req, res) => {
//     const { username, password } = req.body;
//     const usuario = usuarios.find(u => u.username === username && u.password === password);
//     if (usuario) {
//         // Autenticación básica, sin sesiones
//         res.redirect('/dashboard-pug?usuario=' + encodeURIComponent(usuario.username));
//     } else {
//         res.render("page-login", { title: "Login", error: "Usuario o contraseña incorrectos" });
//     }
// });

// // Página de dashboard
// router.get('/dashboard-pug', async (req, res) => {
//     const usuario = req.query.usuario || "Invitado";
//     res.render("page-dashboard", { title: "Dashboard", usuario });
// });

// // Ejemplo de rutas para el CRUD
// // filepath: src/servers-express/server-express-2-medium/routes/products.js

// let productos = [
//     { nombre: "mirinda", precio: 123 },
//     { nombre: "fanta", precio: 99 }
// ];

// router.get('/cud-products', (req, res) => {
//     res.render("page-products", { title: "CRUD Productos", productos });
// });

// router.post('/cud-products/add', (req, res) => {
//     productos.push({ nombre: req.body.nombre, precio: Number(req.body.precio) });
//     res.redirect('/cud-products');
// });

// router.post('/cud-products/edit/:idx', (req, res) => {
//     const idx = req.params.idx;
//     productos[idx] = { nombre: req.body.nombre, precio: Number(req.body.precio) };
//     res.redirect('/cud-products');
// });

// router.post('/cud-products/delete/:idx', (req, res) => {
//     productos.splice(req.params.idx, 1);
//     res.redirect('/cud-products');
// });

router.use((req, res) => {
    res.status(404).send('<h1>Página no encontrada</h1>');
});


export { router };