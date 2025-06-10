// Base de Datos | Datos Locales | Datos de prueba
import { DatosLocalesBBDD } from './../../database/data-task';
// Local Storage
import { crearDatoLS, leerDatoLS } from './../../utilities/functions-localstorage';
// Funciones Logicas
import { imprimirLista } from './functions/functions-crud-logic';
// Funciones CRUD Ventanas Modales
import { modalCrearProducto } from './functions/functions-crud-modal';
// Funciones CRUD en linea
// import { inlineCrearProducto} from './functions/functions-crud-inline';

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