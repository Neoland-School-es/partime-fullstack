import mongoose from "mongoose";

const modelSchema = mongoose.Schema(
    {
        nombreDisco: {
            type: String,
            required: true,
        },
        totalCompra: {
            type: Number,
            required: true,
        },
        developer: {
            type: String,
            required: true,
        }
    },
    {
        strict: false, // Permite campos extra
        timestamps: { createdAt: "fechaCreacion", updatedAt: "fechaActualizacion" },
        versionKey: false
    }
);

const ventasModel = mongoose.model("ventas", modelSchema);

export default ventasModel
