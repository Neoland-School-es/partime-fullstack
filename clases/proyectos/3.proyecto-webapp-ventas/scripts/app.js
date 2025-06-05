import { enrutador } from "./routers/router.js";

function main() {
    
    enrutador();

    // let listaNumeros = [20, 33, 13, 11, 5, 55];
    // let resultado = []

    // for (let index = 0; index < listaNumeros.length; index++) {
    //     resultado[index] = index;
    //     resultado[index] = listaNumeros[index] * 2
    // }

    // for (let index = 0; index < listaNumeros.length; index++) {
    //     resultado[index] = index;
    //     if (condition) {

    //     }
    //     resultado[index] = listaNumeros[index] * 2
    // }

    // listaNumeros.forEach(function (numero) {
    //     resultado = resultado + numero + 1
    // })

    // const resultado2 = listaNumeros.map(numero => numero * 2)
    // const resultadoFiltrado = listaNumeros.filter(numero => numero > 20)
    // const resultadoBuscar = listaNumeros.find(numero => numero > 20)
    // const resultadoReductor = listaNumeros.reduce((acumulador, numero) => (acumulador + numero), 0)


    // console.log(resultado)
    // console.log(resultado2)
    // console.log(resultadoFiltrado)
    // console.log(resultadoBuscar)
    // console.log(resultadoReductor)

}

document.addEventListener('DOMContentLoaded', main);
