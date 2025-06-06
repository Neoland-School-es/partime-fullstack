// Base de Datos | Datos Locales | Datos de prueba
import { obtenerProductosLocales } from './../../models/producto.model.js';
// Local Storage
import { crearDatoLS, leerDatoLS } from './../../utilities/functions-localstorage.js';
// Funciones Logicas
import { imprimirLista } from './functions/functions-crud-logic.js';
// Funciones CRUD Ventanas Modales
import { modalCrearProducto } from './functions/functions-crud-modal.js';
// Funciones CRUD en linea
// import { inlineCrearProducto} from './functions/functions-crud-inline.js';

export default function homeController() {
    console.log('Saludos desde pageHomeMain');

    const listaInicial = leerDatoLS('lista-cache-productos') || obtenerProductosLocales() || [];
    crearDatoLS('lista-cache-productos', listaInicial);

    modalCrearProducto(listaInicial);

    // inlineCrearProducto(listaInicial);

    if (document.querySelector('#PageHome #ContenedorLista')) {
        imprimirLista(listaInicial);
    }
}