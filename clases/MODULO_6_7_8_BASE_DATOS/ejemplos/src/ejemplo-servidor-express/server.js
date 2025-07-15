// server.js
import express from "express";
import morgan from "morgan";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { router } from "./routes/routes.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

export function ejemploServidorExpress() {
    const app = express();

    app.set("port", process.env.PORT || 3000);
    app.set("views", join(__dirname, "public"));
    app.set("view engine", "ejs");

    app.use(morgan("dev"));
    app.use(router);
    

    console.log("join(__dirname, 'public')")
    console.log(join(__dirname, "public"))

    app.use(express.static(join(__dirname, "public")));

    return app;
}

// const app = createApp();

// app.listen(app.get("port"), () => {
//     console.log("Servidor Express iniciado en puerto", app.get("port"));
// });
