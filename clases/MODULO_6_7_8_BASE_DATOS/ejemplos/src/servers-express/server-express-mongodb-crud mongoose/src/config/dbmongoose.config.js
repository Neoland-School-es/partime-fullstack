import mongoose from "mongoose";

const mongooseUrl = "mongodb+srv://pablo:pablo1234@micluster0.2da9ncw.mongodb.net/miBBDD?retryWrites=true&w=majority&appName=MiCluster0";

// Opcional: configuración extra para que Mongoose no lance advertencias
const opciones = {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
};

async function conectarBaseDatos() {
    try {
        await mongoose.connect(mongooseUrl, opciones);
        console.log("Conectado a MongoDB con Mongoose");
    } catch (error) {
        console.error("Error en la conexión con Mongoose:", error.message);
    }
}

export { conectarBaseDatos };
