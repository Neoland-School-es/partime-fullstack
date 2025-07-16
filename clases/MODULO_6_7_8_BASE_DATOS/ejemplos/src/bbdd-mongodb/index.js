import { MongoClient, ObjectId } from 'mongodb';

// URI de conexión
const uri = 'mongodb://localhost:27017/cualquiera';

// Nombre de la base de datos y colección
const nombreBD = 'MI_BBDD';
const nombreColeccion = 'productos';

// Función principal
async function ejemploBDMongoDB() {
    const cliente = new MongoClient(uri);

    try {
        await cliente.connect();
        console.log('Conectado a MongoDB');

        const db = cliente.db(nombreBD);
        const coleccion = db.collection(nombreColeccion);

        // CREATE: Insertar un nuevo usuario
        // const nuevoUsuario = { nombre: 'Lucía', edad: 30 };
        // const resultadoInsert = await coleccion.insertOne(nuevoUsuario);
        // console.log('Usuario insertado:', resultadoInsert.insertedId);

        // READ: Obtener todos los usuarios
        // const usuarios = await coleccion.find().toArray();
        // console.log('Usuarios encontrados:', usuarios);

        // UPDATE: Actualizar un usuario por ID
        // const idActualizar = resultadoInsert.insertedId;
        // const idActualizar = new ObjectId("68775f7689c8bd53f52e3c96");
        // const resultadoUpdate = await coleccion.updateOne(
        //     { _id: idActualizar },
        //     { $set: { nombre: "carla", edad: 23 } }
        // );
        // console.log('Documentos actualizados:', resultadoUpdate.modifiedCount);

        // DELETE: Eliminar un usuario por ID
        // const resultadoDelete = await coleccion.deleteOne({ _id: new ObjectId("68775f7689c8bd53f52e3c96") });
        // console.log('Documentos eliminados:', resultadoDelete.deletedCount);

    } catch (error) {
        console.error('Error trabajando con MongoDB:', error.message);
    } finally {
        await cliente.close();
        console.log('Conexión cerrada');
    }
}

export {
    ejemploBDMongoDB
}
