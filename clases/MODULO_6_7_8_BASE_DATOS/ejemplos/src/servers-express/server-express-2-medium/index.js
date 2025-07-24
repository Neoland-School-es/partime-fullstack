// server.js
import express from "express";
// import morgan from "morgan";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { router } from "./routes.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const ejemplo2ServidorExpress = express();

// ejemplo2ServidorExpress.set("port", 3000);
ejemplo2ServidorExpress.set("views", join(__dirname, "public"));
ejemplo2ServidorExpress.set("view engine", "ejs");
// ejemplo2ServidorExpress.set('view engine', 'pug');

// ejemplo2ServidorExpress.use(morgan("dev"));
ejemplo2ServidorExpress.use(router);

ejemplo2ServidorExpress.use(express.static(join(__dirname, "public")));

export {
    ejemplo2ServidorExpress
}
