// Funciones Logicas
import { actualizarTarea } from './../scripts-crud/script-crud-logic.js';
// Funciones LocalStorage
import { crearDatoLS, leerDatoLS } from './../localstorage/functions-localstorage.js';

export default function pageUpdatePrductMain() {
    const listaInicial = leerDatoLS('lista-tareas') || [];

    if (listaInicial.length === 0) {
        alert("error Lista sin datos")
        window.location.href = "./../index.html";
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const idProduct = parseInt(params.get('id'));

    if (!idProduct) {
        alert("error URL")
        window.location.href = "./../index.html";
        return;
    }

    const product = listaInicial.find((t) => { return (t.id === idProduct) });

    if (!product) {
        alert("error Lista, no existe el id")
        window.location.href = "./../index.html";
        return;
    }

    document.querySelector('#editTaskPage form [name="editTaskText"]').value = product.name;

    const formEditar = document.querySelector('#editTaskPage form');
    if (formEditar) {
        formEditar.addEventListener('submit', function (event) {
            event.preventDefault();

            const textoEditado = document.querySelector('#editTaskPage form [name="editTaskText"]').value;
            const nuevaLista = actualizarTarea(listaInicial, idProduct, textoEditado);


            console.log("nuevaLista")
            console.log(nuevaLista)

            crearDatoLS('lista-tareas', nuevaLista);
            // leerDatoLS('lista-tareas');

            // alert('Elemento editado exitosamente');
            window.location.href = '../index.html';
        });
    }
}