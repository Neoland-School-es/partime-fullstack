import mongoose from 'mongoose'

async function BBDDConnection(urlBBDD) {
    try {
        await mongoose.connect(urlBBDD)
        console.log("Conectado con la base de datos")
    } catch (error) {
        console.log("Error en la conexión con MongoDB:", error)
    }
}

export { BBDDConnection }