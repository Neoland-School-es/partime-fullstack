// Base de Datos | Datos Locales | Datos de prueba
import { DatosLocalesBBDD } from './../../database/data-task.js';
// Local Storage
import { crearDatoLS, leerDatoLS } from './../../utilities/functions-localstorage.js';
// Funciones Logicas
import { imprimirLista } from './functions/functions-crud-logic.js';
// Funciones CRUD Ventanas Modales
import { modalCrearProducto } from './functions/functions-crud-modal.js';
// Funciones CRUD en linea
// import { inlineCrearProducto} from './functions/functions-crud-inline.js';

export default function pageHomeMain() {
    console.log('Saludos desde pageHomeMain');

    const listaInicial = leerDatoLS('lista-cache-productos') || DatosLocalesBBDD || [];
    crearDatoLS('lista-cache-productos', listaInicial);

    modalCrearProducto(listaInicial);

    // inlineCrearProducto(listaInicial);

    if (document.querySelector('#PageHome #ContenedorLista')) {
        imprimirLista(listaInicial);
    }
}