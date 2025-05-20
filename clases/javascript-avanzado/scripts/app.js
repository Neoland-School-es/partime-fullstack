// Enrutador
import router from './router/router.js';
// Scripts para todas las paginas
import { mainMenuScripts } from './functions/renderMenu.js';

function main() {
    router();
    mainMenuScripts();
}

document.addEventListener("DOMContentLoaded", main);
