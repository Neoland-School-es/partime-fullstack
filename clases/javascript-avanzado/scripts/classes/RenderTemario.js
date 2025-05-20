export class TemarioRenderer {
    constructor(contenedor) {
        this.contenedor = document.querySelector(contenedor);
    }

    limpiarPantalla() {
        this.contenedor.innerHTML = '';
    }

    mostrarError(mensaje) {
        this.contenedor.innerHTML = `<p class="text-red-500">${mensaje}</p>`;
    }

    renderizarTemario(data) {
        this.limpiarPantalla();

        const descripcion = document.createElement('p');
        descripcion.textContent = data.descripcion;
        descripcion.classList.add("font-semibold", "mb-4");
        this.contenedor.appendChild(descripcion);

        data.temas.forEach((tema) => {
            const contenedorTema = document.createElement('article');
            contenedorTema.classList.add("border", "rounded-lg", "shadow-lg", "p-4", "mb-6", "bg-white", "dark:bg-gray-800");

            const titulo = document.createElement('h2');
            titulo.textContent = tema.titulo;
            titulo.classList.add("text-xl", "font-bold", "mb-2");

            const contenido = document.createElement('p');
            contenido.textContent = tema.contenido;
            contenido.classList.add("text-sm", "mb-3");

            contenedorTema.appendChild(titulo);
            contenedorTema.appendChild(contenido);

            this.contenedor.appendChild(contenedorTema);
        });
    }
}
