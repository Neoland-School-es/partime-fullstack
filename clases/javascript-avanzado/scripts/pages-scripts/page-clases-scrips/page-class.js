import { CourseContentPage } from './../../classes/CourseContentPage.js';

export default function mainPageClass() {
    const paginaPrincipal = new CourseContentPage('.contenidoTeoria', 'data-lang-page-class.json');
    paginaPrincipal.iniciar();
}