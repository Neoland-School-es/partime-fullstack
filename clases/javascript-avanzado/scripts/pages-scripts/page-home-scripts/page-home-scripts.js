function saludoPagina() {
    const saludo = "¡Hola inicio!";
    return saludo;
}

export function mainPageHome() {
    const contenidoPrincipal = document.querySelector(".contenidoTeoria");
    contenidoPrincipal.textContent = saludoPagina();
}