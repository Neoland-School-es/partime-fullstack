import {
    ejemploFyleSystemAsincrono,
    ejemploFyleSystemSincrono,
    ejemploOperatingSystem,
    ejemplo1ServidorHTTP,
    ejemplo3ServidorHTTP,
    ejemplo1ServidorExpress,
    ejemplo2ServidorExpress,
    // ejemploBDMongoDB,
    // ejemplo1ServidorExpressMongoDB
} from "./src/index.js";
console.clear();
console.log("- INICIO SERVER\n");

// ejemploFyleSystemAsincrono();

// ejemploFyleSystemSincrono();

// ejemploOperatingSystem();

// ejemplo1ServidorHTTP.listen(3000, () => {
//     console.log("Servidor iniciado en puerto", 3000);
// })

// ejemplo2ServidorHTTP.listen(3000, () => {
//     console.log("Servidor iniciado en puerto", 3000);
// })

// ejemplo3ServidorHTTP.listen(3000, () => {
//     console.log("Servidor iniciado en puerto", 3000);
// })

// ejemplo1ServidorExpress.listen(3000, () => {
//     console.log("Servidor Express iniciado en puerto", 3000);
// });

ejemplo2ServidorExpress.listen(3000, () => {
    console.log("Servidor Express iniciado en puerto", 3000);
});



console.log("- FIN SERVER\n");
