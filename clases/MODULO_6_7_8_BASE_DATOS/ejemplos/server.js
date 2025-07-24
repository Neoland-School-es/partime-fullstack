import {
    // ejemploFileSystemSincrono,
    // ejemploFileSystemAsincrono,
    // ejemploOperatingSystem,
    // ejemploServidorHTTP,
    // ejemplo2ServidorHTTP,
    // ejemplo1ServidorExpress,
    // ejemplo2ServidorExpress,
    // ejemplo1ServidorExpressMongoDB,
    // iniciarServidor
    iniciarServidorMongoose
} from "./src/index.js";



console.clear();
console.log("- INICIO SERVER\n");

// ejemploFileSystemSincrono()

// ejemploFileSystemAsincrono();

// ejemploOperatingSystem();

// ejemploServidorHTTP.listen(3000, () => {
//     console.log("conexion server puerto 3000")
// })

// ejemplo2ServidorHTTP.listen(3000, () => {
//     console.log("conexion server puerto 3000")
// })

// ejemplo1ServidorExpress.listen(3000, () => {
//         console.log("conexion server puerto 3000 con express")
// })

// ejemplo2ServidorExpress.listen(3000, () => {
//         console.log("conexion server puerto 3000 con express nuevo")
// })

// iniciarServidor();


iniciarServidorMongoose()
