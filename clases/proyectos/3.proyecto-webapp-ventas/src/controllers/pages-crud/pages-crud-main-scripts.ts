// Funciones Logicas
// import { crearProductoLista, actualizarTarea, eliminarTarea } from "./functions/functions-crud-logic";
// Funciones LocalStorage
// import { crearDatoLS, leerDatoLS } from "./../../utilities/functions-localstorage";

export function paginaFormularioCrearProducto() {
    console.log("Saludos desde formularioPaginaCrear")

    // const listaInicial = leerDatoLS('lista-cache-productos') || [];

    // const formCrear = document.querySelector("#addTaskPage form");
    // formCrear.addEventListener('submit', function (event) {
    //     event.preventDefault();

    //     const nuevaTarea = formCrear.querySelector("[name='taskText']").value;
    //     const nuevaLista = crearProductoLista(listaInicial, nuevaTarea);
    //     crearDatoLS("lista-cache-productos", nuevaLista);

    //     alert("Elemento creado exitosamente");
    //     window.location.href = "../index.html";
    // });
}

export function paginaFormularioEditarProducto() {
    console.log("Saludos desde paginaFormularioEditarProducto");
    // const listaInicial = leerDatoLS('lista-cache-productos') || [];

    // if (listaInicial.length === 0) {
    //     alert("error Lista sin datos")
    //     window.location.href = "./../index.html";
    //     return;
    // }

    // const params = new URLSearchParams(window.location.search);
    // const idProduct = parseInt(params.get('id'));

    // if (!idProduct) {
    //     alert("error URL")
    //     window.location.href = "./../index.html";
    //     return;
    // }

    // const product = listaInicial.find((t) => { return (t.id === idProduct) });

    // if (!product) {
    //     alert("error Lista, no existe el id")
    //     window.location.href = "./../index.html";
    //     return;
    // }

    // document.querySelector('#editTaskPage form [name="editTaskText"]').value = product.name;

    // const formEditar = document.querySelector('#editTaskPage form');
    // if (formEditar) {
    //     formEditar.addEventListener('submit', function (event) {
    //         event.preventDefault();

    //         const textoEditado = document.querySelector('#editTaskPage form [name="editTaskText"]').value;
    //         const nuevaLista = actualizarTarea(listaInicial, idProduct, textoEditado);

    //         crearDatoLS('lista-cache-productos', nuevaLista);

    //         alert('Elemento editado exitosamente');
    //         window.location.href = '../index.html';
    //     });
    // }
}

export function paginaFormularioEliminarProducto() {
    console.log("Saludos desde formularioPaginaEliminar");

    // const listaInicial = leerDatoLS('lista-cache-productos') || [];

    // const parametrosURL = new URLSearchParams(window.location.search);
    // const idTarea = parseInt(parametrosURL.get('id'));

    // for (let index = 0; index < listaInicial.length; index++) {
    //     if (listaInicial[index].id === idTarea) {
    //         document.querySelector('#TareaElegida').textContent = listaInicial[index].name;
    //     }
    // }

    // const formEliminar = document.querySelector('#deleteTaskPage form');
    // if (formEliminar) {
    //     formEliminar.addEventListener('submit', function (event) {
    //         event.preventDefault();

    //         const nuevaLista = eliminarTarea(listaInicial, idTarea)
    //         crearDatoLS('lista-cache-productos', nuevaLista);

    //         alert('Elemento eliminado exitosamente');
    //         window.location.href = '../index.html';
    //     });
    // }
}
