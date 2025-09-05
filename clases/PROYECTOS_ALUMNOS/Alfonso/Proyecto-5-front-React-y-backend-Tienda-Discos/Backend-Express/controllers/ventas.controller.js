import express from "express";
import ventasModel from "../models/ventas.model.js"

const enrutadorVentas = express.Router();

enrutadorVentas.get("/", async (req, res) => {
    try {
        const resultado = await ventasModel.find()
        res.status(200).json({
            ok: true,
            mensaje: "Lista de ventas",
            data: resultado
        });
    } catch (error) {
        console.log("Error GET ALL:", error);
        res.status(500).json({
            ok: false,
            mensaje: "Error al obtener los documentos",
            error: error.message
        });
    }
})

enrutadorVentas.post("/", async (req, res) => {
    console.log("hola dentro de ventas backend")
    try {
        const { nombre, precio, developer } = req.body;

        const compraNueva = new ventasModel({
            nombreDisco: nombre,
            totalCompra: precio,
            developer:developer,
        })

        const resultado = await compraNueva.save()

        res.status(201).json({
            data:resultado,
            mensaje: "Venta registrada",
            error: null,
        })
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al registrar la compra",
            error: error.message,
        });
    }
})

export default enrutadorVentas