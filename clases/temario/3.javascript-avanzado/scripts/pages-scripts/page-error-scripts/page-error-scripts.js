function saludoPagina() {
    const saludo = '¡saludos desde la pagina de ERROR!';
    return saludo;
}

export function mainPageError() {
    const contenidoPrincipal = document.querySelector('.contenidoPrincipal');
    contenidoPrincipal.textContent = saludoPagina();
}