import { MongoClient } from 'mongodb';

const uri = 'mongodb://127.0.0.1:27017';
const nombreDB = 'MI_BBDD';

let db = null;

async function conectarMongo() {
    const cliente = new MongoClient(uri);
    await cliente.connect();
    db = cliente.db(nombreDB);
    console.log('Conectado a MongoDB');
}

function obtenerDB() {
    if (!db) {
        throw new Error('Debes conectar primero a MongoDB');
    }
    return db;
}

export { conectarMongo, obtenerDB };
