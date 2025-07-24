import express from "express";
import morgan from "morgan";
import { conectarBBDD } from "./config/db.config.js";
import { enrutadorUsuarios } from "./routes/usuarios.route.js"
import { enrutadorProductos } from "./routes/productos.route.js"

const servidor = express();
servidor.use(express.json())
servidor.use(express.urlencoded())

servidor.use(morgan("dev"))

servidor.get("/", (req, res) => {
    res.send("hola")
})

servidor.use("/api/usuarios/", enrutadorUsuarios);
servidor.use("/api/productos/", enrutadorProductos);

async function iniciarServidorMongoose() {
    await conectarBBDD();
    
    servidor.listen(4000, () => {
        console.log("servidor conectado en el puerto 4000")
    })
}

export {
    iniciarServidorMongoose
}