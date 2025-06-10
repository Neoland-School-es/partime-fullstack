// Local Storage
import { leerDatoLS } from './../../utilities/functions-localstorage';
// Funciones Logicas
import { imprimirLista } from './functions/functions-crud-logic';

export default function pageFavoriteMain() {
    console.log('Saludos desde pageFavoriteMain');

    if (document.querySelector('#PageFavorites #ContenedorLista')) {
        const listaInicial = leerDatoLS('lista-cache-productos-favoritos') || [];
        
        imprimirLista(listaInicial);
    }
}