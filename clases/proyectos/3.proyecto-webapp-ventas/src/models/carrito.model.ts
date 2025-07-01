import { crearDatoLS, leerDatoLS } from "../utilities/functions-localstorage";

export function obtenerProductoCarritoCache() {
    return leerDatoLS("lista-cache-carrito-productos") || []
}

export function moverProductoCarrito(id: number) {
    const valorActualLS = leerDatoLS("lista-cache-carrito-productos") || []

    crearDatoLS("lista-cache-carrito-productos", [id, ...valorActualLS])
}



// id: 1,
// nombre: "",
// edad: 10,
// variosDatos: { altura: 170, peso: 70 },
// cualidades: ["guitarra", "gimnasia"]

// function actualizarDato(
//     id: 1,
//     variosDatos: { altura: 170, peso: 70 },
// ) {
//     // codigo..:
// }

// function crearDato(
//     variosDatos: { altura: 170, peso: 70 },
// ) {
//     // codigo..:
// }

// function eliminarDato(
//     id: 1,
// ) {
//     // codigo..:
// }


// function obtener1Dato(
//     id: 1, lista: []
// ) {
//     // codigo..:
// }

// function obtenerTodos() {
//     // codigo..:
// }