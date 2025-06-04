// Classes
import { TemarioRenderer } from './../../classes/RenderTemario.js';
import { TemarioService } from './../../services/temarioService.js';
// Constantes
import { PATH_JSON } from './../../constanst/config.js';

export default async function mainPageDesignPatterns() {
    const temarioService = new TemarioService('./../' + PATH_JSON + 'lang-design-patterns.json');
    const temarioRenderer = new TemarioRenderer('.contenidoTeoria');

    try {
        const datos = await temarioService.obtenerTemario();
        temarioRenderer.renderizarTemario(datos);
    } catch (error) {
        temarioRenderer.mostrarError('Error al cargar el contenido.');
    }
}