import express from "express";
import { upload } from "../middlewares/middleware-subidaArchivos.js";
import { angularModel } from "../models/angular.model.js";

const enrutadorAngular = express.Router();

enrutadorAngular.get("/saludar", (req, res) => {
    res.status(200).json({
        ok: true,
        mensaje: "¡Hola desde la ruta de ANGULARJS! La conexión con el backend funciona correctamente!!!"
    });
});

enrutadorAngular.get("/", async (req, res) => {
    try {
        const resultado = await angularModel.find();

        res.status(200).json({
            ok: true,
            mensaje: "Lista de documentos",
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
});

enrutadorAngular.get("/:id", async (req, res) => {
    try {
        const resultado = await angularModel.findById(req.params.id);
        if (!resultado) {
            return res.status(404).json({
                ok: false,
                mensaje: "Documento no encontrado"
            });
        }

        res.status(200).json({
            ok: true,
            mensaje: "Documento obtenido",
            data: resultado
        });
    } catch (error) {
        console.log("Error GET ID:", error);
        res.status(500).json({
            ok: false,
            mensaje: "Error al obtener el documento",
            error: error.message
        });
    }
});

enrutadorAngular.post(
    "/",
    upload.single("imagen"),
    async (req, res) => {
        try {
            const datos = { ...req.body };

            if (req.file) {
                datos.imagen = req.file.filename;
            }

            const nuevoDoc = new angularModel(datos);
            const guardado = await nuevoDoc.save();

            res.status(201).json({
                ok: true,
                mensaje: "Documento creado",
                data: guardado
            });
        } catch (error) {
            console.log("Error POST:", error);
            res.status(400).json({
                ok: false,
                mensaje: "Error al crear el documento",
                error: error.message
            });
        }
    }
);

enrutadorAngular.put(
    "/:id",
    upload.single("imagen"),
    async (req, res) => {
        try {
            const datos = { ...req.body };

            if (req.file) {
                datos.imagen = req.file.filename;
            }

            const actualizado = await angularModel.findByIdAndUpdate(
                req.params.id,
                datos,
                { new: true, runValidators: true }
            );

            if (!actualizado) {
                return res.status(404).json({
                    ok: false,
                    mensaje: "Documento no encontrado"
                });
            }

            res.status(200).json({
                ok: true,
                mensaje: "Documento actualizado",
                data: actualizado
            });
        } catch (error) {
            console.log("Error PUT:", error);
            res.status(400).json({
                ok: false,
                mensaje: "Error al actualizar el documento",
                error: error.message
            });
        }
    }
);

enrutadorAngular.delete("/:id", async (req, res) => {
    try {
        const eliminado = await angularModel.findByIdAndDelete(req.params.id);

        if (!eliminado) {
            return res.status(404).json({
                ok: false,
                mensaje: "Documento no encontrado"
            });
        }

        res.status(200).json({
            ok: true,
            mensaje: "Documento eliminado",
            data: eliminado
        });
    } catch (error) {
        console.log("Error DELETE:", error);
        res.status(500).json({
            ok: false,
            mensaje: "Error al eliminar el documento",
            error: error.message
        });
    }
});

export { enrutadorAngular };
