import { PATH_JSON } from './../constanst/config.js';

export class CourseContentPage {
    constructor(selectorContenedor, nombreArchivo) {
        this.contenedor = document.querySelector(selectorContenedor);
        this.rutaArchivo = PATH_JSON + nombreArchivo;
    }

    async iniciar() {
        try {
            const datos = await this.obtenerTemario();
            this.renderizarTemario(datos);
        } catch (error) {
            this.mostrarError('Error al cargar el contenido.');
            console.error('Error:', error);
        }
    }

    async obtenerTemario() {
        const respuesta = await fetch(this.rutaArchivo);

        if (!respuesta.ok) {
            throw new Error('No se pudo cargar el archivo JSON.');
        }

        const datos = await respuesta.json();
        return datos;
    }

    renderizarTemario(data) {
        this.contenedor.innerHTML = '';

        const descripcion = document.createElement('p');
        descripcion.textContent = data.descripcion;
        this.contenedor.appendChild(descripcion);

        data.temas.forEach(tema => {
            const titulo = document.createElement('h2');
            titulo.textContent = tema.titulo;
            this.contenedor.appendChild(titulo);

            const contenido = document.createElement('p');
            contenido.textContent = tema.contenido;
            this.contenedor.appendChild(contenido);

            const ejemplosDiv = document.createElement('div');
            ejemplosDiv.classList.add('ejemplos');
            this.contenedor.appendChild(ejemplosDiv);
        });
    }

    mostrarError(mensaje) {
        this.contenedor.innerHTML = `<p>${mensaje}</p>`;
    }
}
