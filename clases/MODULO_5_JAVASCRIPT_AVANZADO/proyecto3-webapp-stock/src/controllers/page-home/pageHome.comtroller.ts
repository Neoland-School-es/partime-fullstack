// store
import store from '../../store/store';
import { imprimirLista2 } from './fnsImprimirProductos';

export default async function pageHomeController() {
    console.log('Página: inicio (#PageHome)');

    imprimirLista2(store.getState().productos.productos, "#ContenedorStockLocalStorage");

    store.subscribe(() => {
        imprimirLista2(store.getState().productos.productos, "#ContenedorStockLocalStorage");
    })

    try {
        const datos = await fetch("https://proyecto4-servidor.onrender.com/api/productos")

        const productos = await datos.json()


        const contenedor = document.querySelector("#fetchData");
        if (!contenedor) {
            return
        }

        for (let index = 0; index < productos.length; index++) {
            const articulo = document.createElement("article")

            articulo.innerHTML = productos[index].name
            console.log("si")
            contenedor.appendChild(articulo)
        }

        console.log(productos)
    } catch (error) {
        console.log("error datos")
    }
}

