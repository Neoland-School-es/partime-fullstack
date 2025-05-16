// Scripts de cada pagina
import mainPageClass from './pages-scripts/page-clases-scrips/page-class.js';
import { mainPageHome } from './pages-scripts/page-home-scripts/page-home-scripts.js';
import mainPageSolid from './pages-scripts/page-solid-scripts/page-solid-scripts.js';
// Scripts para todas las paginas
import { mainMenuScripts } from './utils/menu.js';

const rutas = [
    { path: '/', accion: mainPageHome },
    { path: '/index.html', accion: mainPageHome },
    { path: '/pages/page1-principios-solid.html', accion: mainPageSolid },
    { path: '/pages/page2-class-javascript.html', accion: mainPageClass }
];

function main() {
    const pathURL = window.location.pathname;
    const rutaEncontrada = rutas.find((ruta) => { return ruta.path === pathURL });

    mainMenuScripts();

    if (rutaEncontrada) {
        rutaEncontrada.accion();
    } else {
        window.location.href = "./error.html";
    }
}

document.addEventListener("DOMContentLoaded", main);
