import mongoose from "mongoose";

const usuarioSessionSchema = mongoose.Schema(
    {
        nombre: String
    },
    { strict: false }
);

const usuarioSessionModel = mongoose.model("sesiones", usuarioSessionSchema)

export {
    usuarioSessionModel
}
