import express from "express";

import { productoModel } from "../models/productos.model.js"

const enrutadorPaginas = express.Router();


enrutadorPaginas.get("/", async (req, res) => {
    const miproductos = await productoModel.find()
    res.render('home', { productos2: miproductos, titulo: "pagina de inicio!!!!!!!!!!!!" });
})

enrutadorPaginas.get("/dashboard", (req, res) => {
    res.render('dashboard', { titulo: "pagina de panel de control" });
})

export {
    enrutadorPaginas
}