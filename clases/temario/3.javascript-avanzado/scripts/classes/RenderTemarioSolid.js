// Constantes
import { PATH_IMAGES } from './../constanst/config.js';

const inicialesPrincipios = {
    "S": "srp",
    "O": "ocp",
    "L": "lsp",
    "I": "isp",
    "D": "dip"
};

class TemarioImagenesService {
    static generarImagenes(titulo) {
        const inicial = titulo.charAt(0);
        const clave = inicialesPrincipios[inicial];

        if (!clave) return [];

        return [1, 2].map(num => {
            const imagen = document.createElement('img');
            imagen.src = `./../${PATH_IMAGES}/solid/${clave}${num}.png`;
            imagen.alt = `Ejemplo ${num === 1 ? 'incorrecto' : 'correcto'} del principio ${titulo}`;
            imagen.classList.add("w-full", "md:w-1/2", "max-w-xs", "rounded-md");
            return imagen;
        });
    }
}

export class TemarioRendererSOLID {
    constructor(contenedor, conImagenes = false) {
        this.contenedor = document.querySelector(contenedor);
        this.conImagenes = conImagenes;
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

            if (this.conImagenes) {
                const contenedorImagenes = document.createElement('figure');
                contenedorImagenes.classList.add("flex", "flex-col", "md:flex-row", "gap-4", "rounded-md");

                TemarioImagenesService.generarImagenes(tema.titulo).forEach(img => contenedorImagenes.appendChild(img));
                if (this.conImagenes) contenedorTema.appendChild(contenedorImagenes);
            }

            this.contenedor.appendChild(contenedorTema);
        });
    }
}
