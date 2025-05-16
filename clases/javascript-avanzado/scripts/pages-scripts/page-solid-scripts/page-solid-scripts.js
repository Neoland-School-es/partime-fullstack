// Classes
import { CourseContentPage } from './../../classes/CourseContentPage.js';

export default function mainPageSolid() {
    const paginaPrincipal = new CourseContentPage('.contenidoTeoria', 'data-lang-page-solid.json');
    paginaPrincipal.iniciar();
}