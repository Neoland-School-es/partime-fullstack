import { leerDatoLS, crearDatoLS } from "../utilities/functions-localstorage";

const DatosProductosBBDD = [
    {
        id: 1,
        name: "Goku",
    },
    {
        id: 2,
        name: "Vegeta",
    },
    {
        id: 3,
        name: "Piccolo",
    }
]

const DatosProductosLocales = [
    {
        id: 1,
        name: "Goku",
    }
]

function ObtenerProductosBBDD() {
    return (DatosProductosBBDD || null);
}

function ObtenerProductosLocales() {
    const listaInicial = leerDatoLS('lista-cache-productos') || null;

    crearDatoLS('lista-cache-productos', listaInicial);
    return (DatosProductosLocales);
}

export function ObtenerListaProductos() {
    return (ObtenerProductosLocales() || ObtenerProductosBBDD() || []);
}
