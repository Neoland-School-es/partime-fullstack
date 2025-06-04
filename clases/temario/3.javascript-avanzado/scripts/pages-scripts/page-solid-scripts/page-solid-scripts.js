// Classes
import { TemarioRendererSOLID } from './../../classes/RenderTemarioSolid.js';
import { TemarioService } from './../../services/temarioService.js';
// Constantes
import { PATH_JSON } from './../../constanst/config.js';

export default async function mainPageSolid() {
    const temarioService = new TemarioService('./../' + PATH_JSON + 'lang-solid-principles.json');
    const temarioRenderer = new TemarioRendererSOLID('.contenidoTeoria', true);

    try {
        const datos = await temarioService.obtenerTemario();
        temarioRenderer.renderizarTemario(datos);
    } catch (error) {
        temarioRenderer.mostrarError('Error al cargar el contenido.');
    }
}