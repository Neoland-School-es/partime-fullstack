import { MongoClient } from 'mongodb';

const urlDB = "mongodb+srv://pablo:pablo1234@micluster0.2da9ncw.mongodb.net/?retryWrites=true&w=majority&appName=MiCluster0";
const nombreBD = "miBBDD";

// Variable que almacenará la instancia de la base de datos una vez conectada
let db = null;

async function conectarBD() {
    try {
        const cliente = new MongoClient(urlDB);
        await cliente.connect();

        // Guardamos la instancia de la base de datos
        db = cliente.db(nombreBD);

        console.log("Conexión exitosa a MongoDB");
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error.message);
    }
}

// Función para obtener una colección específica dentro de la base de datos
function obtenerColeccion(nombreColeccion) {
    if (!db) {
        console.error("La base de datos no está conectada aún");
        return null;
    }

    return db.collection(nombreColeccion);
}

export {
    conectarBD,
    obtenerColeccion
};
