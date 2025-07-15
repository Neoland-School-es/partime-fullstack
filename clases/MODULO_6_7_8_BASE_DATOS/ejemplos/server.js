import { ejemploFyleSystemAsincrono } from "./src/ejemplo-fileSystem/fs-asincrono.js";
import { ejemploFyleSystemSincrono } from "./src/ejemplo-fileSystem/fs-sincrono.js";
import { ejemploServidorHTTP } from "./src/ejemplo-servidor-http/server.js";
import { ejemploServidorExpress } from "./src/ejemplo-servidor-express/server.js";

(main)()

function main() {
    console.clear();
    console.log("- INICIO SERVER\n");

    const app = ejemploServidorExpress();

    app.listen(app.get("port"), () => {
        console.log("Servidor Express iniciado en puerto", app.get("port"));
    });

    console.log("- FIN SERVER\n");
}
